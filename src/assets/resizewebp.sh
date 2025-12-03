for f in *.webp; do
  convert "$f" -auto-orient "oriented-$f"
  cwebp -size 500000 "oriented-$f" -o "small-$f"
done