# Hero Video Instructions

## Video Requirements

Your hero section now uses a fullscreen background video. Here's what you need:

### Video Specifications:
- **Duration**: 5-12 seconds
- **Style**: Slow, calm, professional
- **Content**: Cleaning service in action (e.g., person cleaning, wiping surfaces, organized space)
- **Quality**: High quality (1080p or higher recommended)
- **Format**: MP4 (H.264 codec for best browser compatibility)
- **File size**: Keep under 5MB for fast loading (compress if needed)

### Where to Place the Video:

**Option 1: Public Folder (Recommended for Next.js)**
1. Create a `public` folder in the root of your project (if it doesn't exist)
2. Place your video file as: `public/hero-video.mp4`
3. The code will automatically find it at `/hero-video.mp4`

**Option 2: Use a CDN/Cloud Storage**
If your video is large, host it on:
- Cloudinary
- AWS S3
- Vercel Blob Storage
- Any CDN

Then update the video source in `app/page.js`:
```jsx
<source src="https://your-cdn.com/hero-video.mp4" type="video/mp4" />
```

## Free Video Resources

If you need a placeholder video, check these sites:
- **Pexels Videos**: https://www.pexels.com/videos/
- **Pixabay**: https://pixabay.com/videos/
- **Coverr**: https://coverr.co/

Search terms: "cleaning", "office cleaning", "apartment cleaning", "professional cleaning"

## Video Optimization Tips

To compress your video:
```bash
# Using ffmpeg (install first: brew install ffmpeg)
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 2M -preset slow hero-video.mp4
```

Or use online tools:
- https://www.freeconvert.com/video-compressor
- https://www.videosmaller.com/

## Testing

After adding the video:
1. Run `npm run dev` locally
2. Check that video plays automatically
3. Test on mobile devices (ensure `playsInline` works)
4. Verify smooth looping
5. Check loading speed

## Fallback

If the video doesn't load, the site will show a fallback image from Pexels, so it's production-ready even without a video file yet.
