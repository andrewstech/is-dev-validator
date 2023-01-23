const modules = {
    valudateARecord: require('./modules/a'),
    validateCnameRecord: require('./modules/cname'),
    validateTxtRecord: require('./modules/txt')
}
modules.exports = modules