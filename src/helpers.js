function falseAndTrueStringToBool(string){
    if (typeof string !== 'string') return new Error('You put wrong argument to falseAndTrueStringToBool function')
    if (string.toLowerCase() === "true") return true
    if (string.toLowerCase() === "false") return false
}

export {falseAndTrueStringToBool}