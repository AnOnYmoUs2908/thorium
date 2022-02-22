function trim() {
    let name = '  Ayush Mishra  '
    console.log('Trimmed name is:', name.trim())
}

function changeToLowerCase() {
    let name = 'AyUsH MIshra'
    console.log('Name in lowercase is:',name.toLowerCase())
}
function changeToUpperCase() {
    let name = 'ayush mishra'
    console.log('Name in uppercase is:',name.toUpperCase())
}


module.exports.lowerCase = changeToLowerCase
module.exports.upperCase = changeToUpperCase
module.exports.trim = trim
