export function domInject(selector) {
    return function (target, key) {
        console.log(`@domInject is injecting the property ${key} into the prototype ${target.constructor.name} using the selector ${selector}`);
        const element = document.querySelector(selector);
        if (!element) {
            throw new Error(`${selector} not found on page`);
        }
        target[key] = element;
    };
}
