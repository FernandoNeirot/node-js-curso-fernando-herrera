const fs = require('fs');
const content = fs.readFileSync('README.md','utf8')
const workCount = content.split(' ')
const reatWorkCount2 = content.match(/React/ig ?? []).length
console.log('palabras:',workCount.length)
console.log('Palabras react:', reatWorkCount2)

