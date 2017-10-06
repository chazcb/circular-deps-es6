(function (g) {
    function Matrix4() {}

    Matrix4.prototype = {
        stuff: (function() {
            var foo = new g.Vector3()

            return function stuff() {
                console.log(foo)
            }
        })(),
    }

    g.Matrix4 = Matrix4
})(global)

(function (g) {
    function Vector3() {}

    Vector3.prototype = {
        stuff: (function() {
            const foo = new g.Matrix4()

            return function stuff() {
                console.log(foo)
            }
        })(),
    }

    g.Vector3 = Vector3
})(global)

const v = new global.Vector3()

console.log(v)
