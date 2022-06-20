const path = require('path')



console.log(path.sep)

const filePath = path.join('/content','subfolder', 'Test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const abspath = path.resolve(__dirname,'content','subfolder','Test.txt')
console.log(abspath)