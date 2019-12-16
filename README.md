# egauge-XML-acceptor
This node.js package is a basic application that can accept POST requests from egauge and store them as JSON files

# Installation

## Node JS
You will need to download **node js** and **npm**, found at https://nodejs.org/en/download/. Be sure to follow the installation instructions for your operating system. If you are on a Windows computer I would recommend activating and installing Windows Subsystem for Linux (WSL). A guide for this can be found here: https://docs.microsoft.com/en-us/windows/wsl/install-win10. Once activated WSL will allow you to enter linux-based commands and syntax into the command prompt/terminal, creating a more unified experience. 

## App Packages
Once node.js and npm are properly installed download the repository to the directory of your choice. Using a command prompt or terminal navigate to the directory and run the following command:

    npm install

This command will install the necessary dependencies into the node-modules folder. 

# Running 
The application is intentionally simple, and can be run using the standard command below:

    node app.js
    
Doing so will display a message in your terminal that the server is listening on port 3000.


## Running on a local machine?
If you're trying to run this program from a local machine that doesn't have open ports/IP there are multiple libraries that can assist. On Windows I recommend using localtunnel.me https://localtunnel.github.io/www/.
