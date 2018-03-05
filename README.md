# MEANie
[![Build Status](https://travis-ci.org/weareopensource/meanjs-2.svg?branch=master)](https://travis-ci.org/weareopensource/meanjs-2)

## Presentation 
[Angular Kick Starter](https://github.com/weareopensource/Angular) / [Riess.js](https://github.com/weareopensource/Riess.js) association. This project, on active developpement, aims to be the next MEAN.
<br><br><br>
![demo-stack](https://raw.githubusercontent.com/weareopensource/Angular/assets/screenshot.png)

## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads)
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) or [GitHub Gist](https://gist.github.com/isaacs/579814)

## Define your own project repo and keep it sync with MEANie
This step is not mandatory. You can directly clone the repository and get a working app. But since you will need to deploy your app soon, hosting your own project on github and configuring it to get the last update from the kick starter is a must. This is done this way:
```
## Create a repository from github.com, let say https://github.com/me/myproject.git

## Clone the repo localy
$ git clone https://github.com/weareopensource/MEANie.git

## Rename the folder to match you project name
$ mv MEANie myproject

## cd into it
$ cd myproject

## Change the upstream
$ git remote add -u origin https://github.com/me/myproject.git

## Keep track of the subtree upstream
$ git remote add Angular https://github.com/weareopensource/Angular.git
$ git remote add Riess.js https://github.com/weareopensource/Riess.js.git
$ git add .
$ git commit -m 'first commit'
$ git push
```

## Install
```
$ cd myproject
$ npm i
```

## Sync with the source
Since MEANie is split into two separate projects (Angular and Riess) hosted on two different reposotories, to get the last updates for one or the other part, simply run the commands bellow
```
$ git pull -s subtree Angular master
$ git pull -s subtree Riess.js master
```

## Running Your Application
   ### Development
   * Run `npm start` for dev. Navigate to `http://localhost:4200/`.
   ### Production
   * Run `npm run start:prod` to build your client app and start a web server on `http://localhost:4200/`
## How to contribute
We welcome pull requests from the community!
  * Fork the MEANie repository
  * Make a pull request

## License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE.md)
