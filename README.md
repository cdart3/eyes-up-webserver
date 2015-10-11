#compile JS
```
gulp browserify
```

#rt templates
```
gulp rt
```

```
gulp react-build-iso
```
# eyes-up-webserver
Built using Node, Express, and React

# Install Node
https://nodejs.org/en/download/

# Confirm Node/NPM is working
1. open up your command line
2. node -v
Node is installed if a version number is spit back out.
It is not installed if you get an error like "command 'node' not found"

# Confirm Git is configured
1. git --version
Checkout [this link]http://superuser.com/questions/347728/terminal-command-to-find-what-version-of-git-i-have-installed if your git isn't working

# Clone Repo
1. Navigate to where ou
2. git clone https://github.com/cdart2/eyes-up-webserver

You now have the latest version of the web server cloned

# NPM install
This installs all your depedencies in the package.json folder

# Run server
nodemon renderServer.js

# Watch for changes
gulp watch