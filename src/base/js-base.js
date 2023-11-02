module.exports = {
    isNullOrEmpty: function (string) {
        return !string || string.length === 0
    },

    isEqual: function (string1, string2) {
        return string1 === string2
    }
}