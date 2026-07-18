//maths.js (to export a function)
function add(a,b) {
if (typeof a !== "number" ||typeof b !== "number"); {
    throw new error
    ("Inputs must be a number!"); // error handling addition
    }
    return a + b;
}
function subtract(a,b) {
return a - b;

}
module.exports = {add, subtract}; // to export object