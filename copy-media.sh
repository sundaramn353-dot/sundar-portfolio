#!/bin/bash
# Copy media files to public/media directory
mkdir -p public/media

cp "/home/sundar/Downloads/WhatsApp Video 2026-05-21 at 4.13.37 PM.mp4" public/media/vacuum-robot-demo.mp4
cp "/home/sundar/Downloads/WhatsApp Image 2026-05-21 at 4.15.21 PM.jpeg" public/media/rocker-bogie-1.jpeg
cp "/home/sundar/Downloads/WhatsApp Image 2026-05-21 at 4.15.21 PM(1).jpeg" public/media/rocker-bogie-2.jpeg

echo "✅ All media files copied to public/media/"
ls -lh public/media/
