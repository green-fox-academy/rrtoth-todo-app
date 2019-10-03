'use strict';

const fs = require('fs');

let usageInfo: string = fs.readFileSync("usage-info.txt", "utf-8")

if (!process.argv[2]){
    console.log(usageInfo)
}