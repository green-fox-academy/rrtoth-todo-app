'use strict';

const fs = require('fs');

let usageInfo: string = fs.readFileSync("usage-info.txt", "utf-8")
let todoList: string = fs.readFileSync("todo-list.txt", "utf-8")
let a: string[] = todoList.split('\n')

if (!process.argv[2]) {
    console.log(usageInfo)
} else if (process.argv[2] == '-l') {
    todoList == '' ? console.log("No todos for today! :)") : a.forEach(e => { console.log((a.indexOf(e) + 1) + " - " + e) })
} else if (process.argv[2] == '-a') {
    !process.argv[3] ? console.log("Unable to add: no task provided") : fs.appendFileSync("todo-list.txt", "\n" + process.argv[3], "utf-8")
} else if (process.argv[2] == '-r') {
    if (!process.argv[3]) {
        console.log('Unable to remove: no index provided');
    } else {
        a.splice(parseInt(process.argv[3]) - 1, 1)
        fs.writeFileSync("todo-list.txt", a.join('\n'), "utf-8")
    }
}