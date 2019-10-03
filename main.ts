'use strict';

const fs = require('fs');

let usageInfo: string = fs.readFileSync("usage-info.txt", "utf-8")
let todoList: string = fs.readFileSync("todo-list.txt", "utf-8")
let a: string[] = todoList.split('\n')

if (!process.argv[2]) {
    console.log(usageInfo)
} else if (process.argv[2] == '-l') {
    a.forEach(e => { console.log((a.indexOf(e) + 1) + " - " + e)})
}