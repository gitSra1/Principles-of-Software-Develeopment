#!/bin/bash

# Update package lists
echo "Updating package lists..."
sudo apt-get update >> installation.log

# Install Node.js and npm
echo "Installing Node.js and npm..."
sudo apt-get install nodejs npm -y >> installation.log

# Check Node.js and npm version
echo "Checking Node.js and npm version..."
node -v >> installation.log
npm -v >> installation.log

# Print success message
echo "Node.js and npm installed successfully!"
