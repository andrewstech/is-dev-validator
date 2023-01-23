function validateTxtRecord (record) {
    const txtRegex = /^"(.*)"$/;
    return txtRegex.test(record);

}
module.exports = validateTxtRecord;