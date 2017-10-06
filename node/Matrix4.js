const Vector3 = require('./Vector3')

function Matrix4() {}

Matrix4.prototype = {
    stuff: (function() {
        const foo = new Vector3()

        return function stuff() {
            console.log(foo)
        }
    })(),
}

module.exports = Matrix4
