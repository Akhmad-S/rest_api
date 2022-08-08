const loggerMiddleWare = (req, res, next) => {
    var d = new Date,
        dformat = [d.getDate(),
        d.getMonth() + 1,
        d.getFullYear()].join('/') + ' ' +
            [d.getHours(),
            d.getMinutes(),
            d.getSeconds()].join(':');
    next()
    let diff = new Date() - d
    console.log(`---> ${dformat} | ${req.method}: ${req.url} | ${diff} ms`)
}


const auth = (req, res, next) => {
    const secretKey = 'jumanji'
    let key = req.headers['authorization']
    if (secretKey == key) {
        next()
        return
    }
    res.status(401).send("Unauthorization")
}


module.exports = {loggerMiddleWare, auth}