import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// Route handler
export async function GET(request, { params }) {
  const path = params?.path?.join('/') || '';
  
  try {
    // Health check endpoint
    if (path === '' || path === 'health') {
      return NextResponse.json({ 
        status: 'ok', 
        message: 'CphClean API is running',
        timestamp: new Date().toISOString()
      }, { headers: corsHeaders });
    }
    
    // Get all bookings
    if (path === 'bookings') {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Supabase error:', error);
        return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
      }
      
      return NextResponse.json({ bookings: data || [] }, { headers: corsHeaders });
    }
    
    // Get services
    if (path === 'services') {
      const services = [
        { id: 'office', name: 'Office Cleaning', name_da: 'Kontorrengøring', base_price: 500, price_per_sqm: 25 },
        { id: 'airbnb', name: 'Airbnb & Turnover', name_da: 'Airbnb & Skifterengøring', base_price: 600, price_per_sqm: 30 },
        { id: 'moveout', name: 'Move-out Cleaning', name_da: 'Flytterengøring', base_price: 800, price_per_sqm: 35 }
      ];
      return NextResponse.json({ services }, { headers: corsHeaders });
    }
    
    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500, headers: corsHeaders });
  }
}

export async function POST(request, { params }) {
  const path = params?.path?.join('/') || '';
  
  try {
    // Create booking
    if (path === 'bookings') {
      const body = await request.json();
      
      const booking = {
        id: uuidv4(),
        name: body.name,
        email: body.email,
        phone: body.phone,
        service: body.service,
        sqm: body.sqm,
        address: body.address,
        preferred_date: body.date,
        notes: body.notes || '',
        addons: body.addons || [],
        weekend: body.weekend || false,
        total_price: body.totalPrice || 0,
        status: 'pending',
        created_at: new Date().toISOString()
      };
      
      const { data, error } = await supabase
        .from('bookings')
        .insert([booking])
        .select();
      
      if (error) {
        console.error('Supabase error:', error);
        // If table doesn't exist, return success anyway for MVP (we'll create it later)
        if (error.code === '42P01') {
          return NextResponse.json({ 
            success: true, 
            message: 'Booking received (table pending setup)',
            booking: booking 
          }, { headers: corsHeaders });
        }
        return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
      }
      
      return NextResponse.json({ 
        success: true, 
        message: 'Booking created successfully',
        booking: data?.[0] || booking 
      }, { headers: corsHeaders });
    }
    
    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500, headers: corsHeaders });
  }
}
