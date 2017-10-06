function Vector3() {}

Vector3.prototype = {
    stuff: (function() {
        const foo = new Matrix4()

        return function stuff() {
            console.log(foo)
        }
    })(),
}
