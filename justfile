
# List available recipes
default:
    @just --list

# Install dependencies
install:
    bun install

# Start the local dev server with hot reload
start:
    bun run start

# Build the static site into build/
build:
    bun run build

# Serve the built site locally
serve:
    bun run serve

# Clear the Docusaurus cache and build artifacts
clear:
    bun run clear

# Deploy to GitHub Pages (as deliberate-app via SSH)
deploy:
    bun run github-deploy
