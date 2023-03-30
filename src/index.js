const fs = require('fs/promises')
const myFileWriter = async (fileName, fileContent) => {
	return fs.writeFile(fileName, fileContent)
}
const myFileReader = async (fileName) => {
	return fs.readFile(fileName)
}
const myFileUpdater = async (fileName, fileContent) => {
	return fs.appendFile(fileName, fileContent)
}
const myFileDeleter = async (fileName) => {
	return fs.unlink(fileName)
}
// myFileWriter('Person', 'Hello Indra')
// myFileUpdater('Person', 'Rishabh')
// myFileDeleter('Person')
// console.log(myFileWriter('Person', 'Indra'))
// console.log(myFileReader('Person', 'Indra'))
// console.log(typeof(myFileReader('Person', 'Indra')))
// console.log(myFileUpdater('Person', 'ShahRukh'))
// console.log(myFileDeleter('Person'))
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }