# AI Design Tool Images

This folder contains images/GIFs for the AI-Powered Design Tool project slider.

## Naming Convention:
- Name your images as: 1.jpg, 2.jpg, 3.jpg, 4.jpg, etc.
- Default format: JPG (can be changed to PNG/GIF in component)
- Make sure to update the `imageCount` in projects.tsx if you change the number of images

## Current Configuration:
- Currently set to display 4 images (1.jpg through 4.jpg)
- Each image stays visible for 3 seconds
- Smooth left-to-right overlay transition (no empty moments)
- Next image slides from left to overlay the current image

## Image Requirements:
- Recommended resolution: 400x300 pixels or higher
- Format: JPG (preferred) - can be changed to PNG/GIF in component
- Keep file sizes reasonable for web loading
- Optimized for GitHub Pages deployment

## Animation Style:
- Current image stays visible as base layer
- Next image slides in from the left to overlay
- 0.8-second smooth transition duration
- No flickering or empty card moments
