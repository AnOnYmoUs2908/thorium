function printDate() {
    let today = new Date()
    let date = today.getDate()+'-'+today.getMonth()+'-'+today.getFullYear
    console.log('Current date is: ', date)
}
function printMonth() {
    let today = new Date()
    let month = today.getMonth() + 1
    console.log('Current month is: ',month)
}
function getBatchInfo(message) {
    console.log(message)
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
