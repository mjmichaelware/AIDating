#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Define Flutter channel and version (optional, but good for reproducibility)
FLUTTER_CHANNEL="stable"
FLUTTER_VERSION="3.22.2" # You can find your specific version with 'flutter --version' locally

# 1. Clone Flutter SDK
if [ ! -d "$HOME/flutter" ]; then
  echo "Cloning Flutter SDK..."
  git clone https://github.com/flutter/flutter.git "$HOME/flutter"
else
  echo "Flutter SDK already exists, updating..."
  (cd "$HOME/flutter" && git pull)
fi

# 2. Add Flutter to PATH and enable web
export PATH="$PATH:$HOME/flutter/bin"
flutter channel $FLUTTER_CHANNEL
flutter upgrade # Ensures the correct version from the channel is used
flutter config --enable-web

# 3. Get Flutter dependencies for your project
# Ensure you are in the correct directory for pub get
# Since your Flutter project is now at the repo root, this is correct
flutter pub get

# 4. Run your actual build command
echo "Running Flutter web build..."
flutter build web

echo "Flutter build complete!"