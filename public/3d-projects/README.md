# 3D Projects Images

This folder contains images for the 3D projects slider.

## Naming Convention:
- Name your images as: 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, etc.
- All images should be in JPG format (or update fileExtension in component)
- Make sure to update the `imageCount` in the projects.tsx file to match the number of images you add

## Current Configuration:
- Currently set to display 5 images (1.jpg through 5.jpg)
- Each image stays visible for 3 seconds
- Smooth left-to-right overlay transition (no empty moments)
- Next image slides from left to overlay the current image

## Image Requirements:
- Recommended resolution: 400x300 pixels or higher
- Format: JPG (preferred) - can be changed to PNG/GIF in component
- Keep file sizes reasonable for web loading
- Works perfectly with GitHub Pages deployment

## Animation Style:
- Current image stays visible as base layer
- Next image slides in from the left to overlay
- 0.8-second smooth transition duration
- No flickering or empty card moments
