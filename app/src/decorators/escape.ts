export function escape(
	target: any,
	key: string,
	descriptor: PropertyDescriptor
) {
	const method = descriptor.value;
	descriptor.value = function (...args: any[]) {
		let methodReturn = method.apply(this, args);
		if (typeof methodReturn === "string") {
			// console.log(`@escape is working on the method: ${key}`);
			methodReturn = methodReturn.replace(/<script>[\s\S]*?<\/script>/, "");
		}
		return methodReturn;
	};
	return descriptor;
}
