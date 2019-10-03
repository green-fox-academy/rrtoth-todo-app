'use strict';

const fs = require('fs');

let usageInfo: string = fs.readFileSync("usage-info.txt", "utf-8")
let todoList: string = fs.readFileSync("todo-list.txt", "utf-8")
let a: string[] = todoList.split('\n')
let args: string[] = ['-l', '-a', '-r', '-c']

if (!process.argv[2]) {
    console.log(usageInfo)
} else if (process.argv[2] == '-l') {
    todoList == '' ? console.log("No todos for today! :)") : a.forEach(e => { console.log((a.indexOf(e) + 1) + " - " + e) })
} else if (process.argv[2] == '-a') {
    !process.argv[3] ? console.log("Unable to add: no task provided") : fs.appendFileSync("todo-list.txt", "\n" + process.argv[3], "utf-8")
} else if (process.argv[2] == '-r') {
    if (!process.argv[3]) {
        console.log('Unable to remove: no index provided');
    } else if (parseInt(process.argv[3]) > a.length || parseInt(process.argv[3]) < 1) {
        console.log('Unable to remove: index is out of bound')
    } else if (isNaN(parseInt(process.argv[3]))) {
        console.log('Unable to remove: index is not a number')
    } else {
        a.splice(parseInt(process.argv[3]) - 1, 1)
        fs.writeFileSync("todo-list.txt", a.join('\n'), "utf-8")
    }
} else if (process.argv[2] == '-c') {
    if (a[0].substring(0, 1) == '[') {
        a[parseInt(process.argv[3]) - 1] = "[x]" + a[parseInt(process.argv[3]) - 1].substring(3)
        fs.writeFileSync("todo-list.txt", a.join('\n'), "utf-8")
        console.log(a[0].substring(0, 0))
    } else {
        for (let i = 0; i < a.length; i++) {
            a[i] = "[ ] " + a[i]
        }

        if (a.length >= 2) {
            a[parseInt(process.argv[3]) - 1] = "[x]" + a[parseInt(process.argv[3]) - 1].substring(3)
            fs.writeFileSync("todo-list.txt", a.join('\n'), "utf-8")
        }
    }

} else if (!args.some(e => { e == process.argv[2] })) {
    console.log('Unsupported argument\n\n' + usageInfo)
}