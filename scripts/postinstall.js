#!/usr/bin/env node
const fs = require('fs')
const os = require('os')
const shellEnv = process.env.SHELL.split('/')
const shell = shellEnv[shellEnv.length - 1]
if (shell === 'zsh') {
  fs.appendFileSync(`${os.homedir()}/.zshrc`, '\nmene() { men "$@"; cd $1 }\n')
} else if (shell === 'bash') {
  fs.appendFileSync(`${os.homedir()}/.bashrc`, '\nmene() { men "$@"; cd $1 }\n')
} else {
  console.log("Can't find shell")
}
