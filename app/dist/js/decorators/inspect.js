export function inspect() {
    return function (target, key, descriptor) {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            console.log(` ------ Method: ${key} `);
            console.log(` --- Args: ${JSON.stringify(args)} `);
            const methodReturn = method.apply(this, args);
            console.log(` --- Return: ${JSON.stringify(methodReturn)} `);
            return methodReturn;
        };
        return descriptor;
    };
}
