'use strict';

const fs = require('fs');

let usageInfo: string = fs.readFileSync("usage-info.txt", "utf-8")
let todoList: string = fs.readFileSync("todo-list.txt", "utf-8")
let a: string[] = todoList.split('\n')
const args: string[] = ['-l', '-a', '-r', '-c']
let arg1 = process.argv[2]
let arg2 = process.argv[3]

function writeTodo() {
    fs.writeFileSync("todo-list.txt", a.join('\n'), "utf-8")
}

if (!arg1) {
    console.log(usageInfo)
} else if (arg1 == '-l') {
    todoList == '' ? console.log('No todos for today! :)') : a.forEach(e => { console.log((a.indexOf(e) + 1) + " - " + e) })
} else if (arg1 == '-a') {
    !arg2 ? console.log('Unable to add: no task provided') : fs.appendFileSync("todo-list.txt", "\n" + arg2, "utf-8")
} else if (arg1 == '-r') {
    if (!arg2) {
        console.log('Unable to remove: no index provided');
    } else if (parseInt(arg2) > a.length || parseInt(arg2) < 1) {
        console.log('Unable to remove: index is out of bound')
    } else if (isNaN(parseInt(arg2))) {
        console.log('Unable to remove: index is not a number')
    } else {
        a.splice(parseInt(arg2) - 1, 1)
        writeTodo()
    }
} else if (arg1 == '-c') {
    if (!arg2) {
        console.log('Unable to check: no index provided')
    } else if (parseInt(arg2) > a.length || parseInt(arg2) < 1) {
        console.log('Unable to check: index is out of bound')
    } else if (isNaN(parseInt(arg2))) {
        console.log('Unable to check: index is not a number')
    } else {
        if (a[0].substring(0, 1) == '[') {
            a[parseInt(arg2) - 1] = "[x]" + a[parseInt(arg2) - 1].substring(3)
            writeTodo()
        } else {
            for (let i = 0; i < a.length; i++) {
                a[i] = "[ ] " + a[i]
            }
            a[parseInt(arg2) - 1] = "[x]" + a[parseInt(arg2) - 1].substring(3)
            writeTodo()
        }
    }
} else if (!args.some(e => { e == arg1 })) {
    console.log('Unsupported argument\n\n' + usageInfo)
}