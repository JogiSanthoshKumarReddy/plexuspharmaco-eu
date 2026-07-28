#!/bin/bash
BASE="https://www.plexuspharmaco.com"

download() {
    URL="$BASE/$1"
    OUT="public/images/$2"
    echo "Downloading $URL to $OUT"
    curl -s -L -o "$OUT" "$URL"
}

# Logo
download "pharma/assets/images/696f65db8cb34.png" "logo.png"

# Flags
download "assets/images/uk.png" "uk.png"
download "assets/images/germany.png" "germany.png"

# Slider
download "pharma/assets/images/246.jpg" "slider/slide1.jpg"
download "pharma/assets/images/6974b6ee16385.jpeg" "slider/slide2.jpeg"
download "pharma/assets/images/6974b7165d92a.jpeg" "slider/slide3.jpeg"

# Shapes
download "assets/images/shapes/main-slider-style2__shape1.png" "shapes/shape1.png"
download "assets/images/shapes/main-slider-style2__shape2.png" "shapes/shape2.png"
download "assets/images/shapes/main-slider-style2__shape3.png" "shapes/shape3.png"
download "assets/images/shapes/main-slider-style2__shape4.png" "shapes/shape4.png"
download "assets/images/shapes/main-slider-style2__shape5.png" "shapes/shape5.png"
download "assets/images/shapes/about-style3__shape1.png" "shapes/about-shape1.png"
download "assets/images/shapes/about-style3__shape3.png" "shapes/about-shape2.png"
download "assets/images/shapes/sec-title-shape-1.png" "shapes/sec-title-shape.png"

# About
download "assets/images/about/about-style2-1.jpg" "about/about-1.jpg"
download "assets/images/about/about-style2-2.jpg" "about/about-2.jpg"
download "assets/images/about/about-style2-3.jpg" "about/about-3.jpg"

# Services
download "pharma/assets/images/69736e185dd41_20260123_181824.png" "services/icon-1.png"
download "pharma/assets/images/6974b1fbc3f28.jpeg" "services/img-1.jpeg"
download "pharma/assets/images/69736e658d386_20260123_181941.png" "services/icon-2.png"
download "pharma/assets/images/6974b1ce76c4b.jpeg" "services/img-2.jpeg"
download "pharma/assets/images/69736eb62e0c9_20260123_182102.png" "services/icon-3.png"
download "pharma/assets/images/6974b2369ee43.jpeg" "services/img-3.jpeg"
download "pharma/assets/images/69736f0c24340_20260123_182228.png" "services/icon-4.png"
download "pharma/assets/images/6974b26124b01.jpeg" "services/img-4.jpeg"
download "pharma/assets/images/6973711818061.png" "services/icon-5.png"
download "pharma/assets/images/6974b28351571.jpeg" "services/img-5.jpeg"

# Backgrounds
download "assets/images/shapes/service-style2-shape-1.png" "shapes/service-shape.png"

echo "Done"
