# How to Add Your Logo to Divine Events Website

## Quick Steps

1. **Place your logo file** in the `public` folder:
   ```
   divine-events/public/logo.png
   ```

2. **Your logo is already configured** in the navigation component and will appear automatically once the file is in place.

## Logo Specifications

### Recommended Format
- **File format**: PNG with transparent background (preferred)
- **Alternative formats**: SVG, WebP, or JPG
- **File name**: `logo.png` (or update the path in navigation.tsx if using a different name)

### Recommended Dimensions
- **Width**: 150-200px
- **Height**: 50-80px
- **Aspect ratio**: Horizontal logo works best (3:1 or 4:1 ratio)

### Design Guidelines
- Use a **luxury aesthetic** that matches the brand
- Ensure the logo is **readable at small sizes**
- Consider a **gold or cream color** to match the luxury palette
- Include both **text and icon** if possible

## Where the Logo Appears

The logo is configured in:
- **Navigation bar** (top of every page)
- **Footer** (bottom of every page)

## Current Configuration

The navigation component is already set up to display your logo:

```tsx
<Link href="/" className="flex items-center gap-2">
  <Image
    src="/logo.png"
    alt="Divine Events"
    width={150}
    height={50}
    className="h-12 w-auto"
  />
</Link>
```

## If You Want to Use a Different Filename

If your logo has a different name (e.g., `divine-events-logo.svg`), update the path in:

1. **components/navigation.tsx** (line ~30)
2. **components/footer.tsx** (line ~20)

Change:
```tsx
src="/logo.png"
```

To:
```tsx
src="/your-logo-filename.svg"
```

## Testing

After adding your logo:

1. Refresh the website in your browser
2. Check the navigation bar at the top
3. Scroll down to check the footer
4. Test on mobile view to ensure it scales properly

## Troubleshooting

### Logo Not Showing?
- Verify the file is in `public/logo.png`
- Check the filename matches exactly (case-sensitive)
- Clear your browser cache and refresh
- Check browser console for any errors

### Logo Too Large/Small?
- Adjust the `width` and `height` values in the Image component
- Modify the `className="h-12 w-auto"` to change the display size

### Logo Wrong Color?
- If using PNG, ensure it has a transparent background
- Consider creating separate versions for light/dark backgrounds
- Use SVG format for maximum flexibility with colors

## Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Verify the file path is correct
3. Ensure the image file is not corrupted
4. Try a different image format (PNG, SVG, WebP)