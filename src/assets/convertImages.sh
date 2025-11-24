# Batch convert
for file in *.JPG; do
    magick "$file" -quality 80 "${file%.jpg}.webp"
done
