module.exports = function reverse(n) {
    let result = '';
    for (let i = 0; i < n.toString().length; i++) {
        if (n.toString()[i] === '-') continue;
        result = `${n.toString()[i]}${result}`;
    }
    return result;
}
