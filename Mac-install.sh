#!/bin/bash
# Script to install Node.js and npm on a Mac with user feedback

# Check if Homebrew is installed
if ! [ -x "$(command -v brew)" ]; then
  # Prompt the user to install Homebrew
  echo "Homebrew is not installed. Would you like to install it? (y/n)"
  read install_homebrew
  if [ "$install_homebrew" = "y" ]; then
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  else
    echo "Homebrew is required to install Node.js and npm. Please install Homebrew and try again."
    exit 1
  fi
fi

# Install Node.js using Homebrew and show the user what is happening
echo "Installing Node.js and npm using Homebrew..."
brew install node

# Add Node.js to the user's PATH
echo 'export PATH="/usr/local/opt/node/bin:$PATH"' >> ~/.bash_profile
source ~/.bash_profile

# Verify that Node.js and npm were installed successfully
if ! [ -x "$(command -v node)" ]; then
  # If Node.js was not installed successfully, show an error message and exit the script with a status code of 1
  echo "Error: Node.js was not installed successfully."
  exit 1
fi

if ! [ -x "$(command -v npm)" ]; then
  # If npm was not installed successfully, show an error message and exit the script with a status code of 1
  echo "Error: npm was not installed successfully."
  exit 1
fi

# If Node.js and npm were installed successfully, show a success message and exit the script with a status code of 0
echo "Node.js and npm were installed successfully."
exit 0
