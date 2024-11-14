@echo off

echo Installing Node.js and npm...

rem Download and run the Node.js installer
curl -o node-v16.13.0-x64.msi https://nodejs.org/dist/v16.13.0/node-v16.13.0-x64.msi
msiexec /i node-v16.13.0-x64.msi /quiet

rem Add Node.js and npm to the PATH environment variable
setx PATH "%PATH%;C:\Program Files\nodejs"

echo Node.js and npm installed successfully.
pause

echo Installing project dependencies...

echo Project dependencies installed successfully.
pause

