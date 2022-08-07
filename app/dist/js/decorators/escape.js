export function escape(target, key, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
        let methodReturn = method.apply(this, args);
        if (typeof methodReturn === "string") {
            methodReturn = methodReturn.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        return methodReturn;
    };
    return descriptor;
}
