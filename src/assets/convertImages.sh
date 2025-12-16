# Batch convert
for file in *.jpg; do
    magick "$file" -quality 80 "${file%.jpg}.webp"
done
