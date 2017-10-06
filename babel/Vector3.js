import Matrix4 from './Matrix4'

function Vector3() {}

Vector3.prototype = {
    stuff: (function() {
        const foo = new Matrix4()

        return function stuff() {
            console.log(foo)
        }
    })(),
}

export { Vector3 }
