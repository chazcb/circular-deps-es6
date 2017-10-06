function Matrix4() {}

Matrix4.prototype = {
    stuff: (function() {
        var foo = new Vector3()

        return function stuff() {
            console.log(foo)
        }
    })(),
}
