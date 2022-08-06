export function logExecutioTime() {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const method = descriptor.value;
		descriptor.value = function (...args: any[]) {
			const t1 = performance.now();
			const methodReturn = method.apply(this, args);
			const t2 = performance.now();
			console.log(`${propertyKey} took ${t2 - t1} milliseconds`);
			return methodReturn;
		};

		return descriptor;
	};
}
