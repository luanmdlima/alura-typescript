export function logExecutioTime(inSeconds: boolean = false) {
	return function (target: any, key: string, descriptor: PropertyDescriptor) {
		const method = descriptor.value;
		descriptor.value = function (...args: any[]) {
			const t1 = performance.now();
			const methodReturn = method.apply(this, args);
			const t2 = performance.now();
			if (inSeconds === true) {
				console.log(`${key} took ${(t2 - t1) / 1000} seconds`);
			} else {
				console.log(`${key} took ${t2 - t1} milliseconds`);
			}
			return methodReturn;
		};

		return descriptor;
	};
}
