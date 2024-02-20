# Srilu-Cypress-Ty
Cypress with JavaScript

https://youtu.be/rpB6vAQNmP8


##To Run tests

    npx cypress open


Git Stuff 

    git status
    git add --all
    git commit -a -m "message"
    git push --set-upstream origin

    git checkout -b "name"    
    git checkout develop
    git fetch
    git pull
    git merge develop




--------------------------------------
# Installation Instructions

Download JAVA - https://www.oracle.com/java/technologies/downloads/

Select the version of JDK. Select – Linux / macOS / Windows, Download ARM64 DMG Installer (for Mac), 

Double-click on the download -->  The folder opens with the DMG

Double-click on the PKG -->  Installer starts, Follow the steps and install the package


Download VSCode https://code.visualstudio.com/

Install NodeJS:
   
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   
    (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/sriluballa/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)";
   
   
    Brew update
    Brew doctor

Export to set     
   
    export HOMEBREW_PREFIX = "/opt/homebrew/":
    export HOMEBREW_PREFIX="/opt/homebrew/":
    export HOMEBREW_CELLAR="/opt/homebrew/Cellar";
    export HOMEBREW_REPOSITORY="/opt/homebrew/":  


Install node    
   
    brew install node
    npm install -g grunt-cli


Check version    
   
    npm -v --> version shows
    node -v --> version shows


Install Cypress
    npm install cypress --save-dev
    npm install -D cypress-xpath
