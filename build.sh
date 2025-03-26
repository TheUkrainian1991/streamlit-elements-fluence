# run me to package the repository with all ts/js things built
# make sure you have allowed it as executable with this command:
# chmod +x build.sh

#!/bin/bash
# build.sh - Build the frontend and then the Python package.
# CRITICAL: This script assumes you have Node and npm installed,
# and that you're in the root of your project.

# Exit immediately if a command fails.
set -e

read -p "Have you updated the version tag in streamlit_elements/version.py, pyproject.toml and setup.py? (y/n): " version_update

if [[ "$version_update" == [Yy]* ]]; then


echo "Starting build process..."

    # Navigate to the frontend directory.
    # Update the path as needed. Here it assumes the frontend is in "streamlit_elements/frontend"
    echo "Changing directory to streamlit_elements/frontend..."
    cd streamlit_elements_fluence/frontend || { echo "Error: frontend directory not found"; exit 1; }

    # Install Node dependencies.
    echo "Installing npm dependencies..."
    npm install -g npm@11.2.0
    npm install

    # Build the frontend (creates the build folder in the same directory).
    echo "Running npm build..."
    npm run build

    # OPTIONAL: Remove folders that are not needed for the package distribution.
    # Uncomment the lines below if you want to remove these directories.
    echo "Cleaning up: removing node_modules and .next directories..."
    rm -rf node_modules
    rm -rf .next

    # Return to the project root.
    echo "Returning to project root..."
    cd ../../

    # OPTIONAL: Clean previous Python build artifacts.
    echo "Cleaning previous build artifacts..."
    rm -rf dist build *.egg-info

    # Build the Python package (source distribution and wheel).
    echo "Building Python package (sdist and bdist_wheel)..."
    python setup.py sdist bdist_wheel

    echo "Build process complete!"
    echo "Distributions are available in the 'dist' directory."
else
    echo "Please update the version tag in streamlit_elements/version.py, pyproject.toml and setup.py before proceeding."
fi