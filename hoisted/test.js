(function (g) {

    // Define Matrix4
    function Matrix4() {}
    Matrix4.prototype = {
        stuff: (function() {
            var foo = new Vector3()

            return function stuff() {
                console.log(foo)
            }
        })(),
    }
    g.Matrix4 = Matrix4

    // Define Vector3
    function Vector3() {}
    Vector3.prototype = {
        stuff: (function() {
            const foo = new Matrix4()

            return function stuff() {
                console.log(foo)
            }
        })(),
    }
    g.Vector3 = Vector3

})(global)

const v = new global.Vector3()

console.log(v)
