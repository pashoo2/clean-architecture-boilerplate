"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMixinsPropsAndMethodsInheritance = exports.applyMixinsMethodInheritance = void 0;
const objects_1 = require("../objects");
function applyConstructor(constructor, args) {
    // eslint-disable-next-line prefer-spread
    const factoryFunction = constructor.bind.apply(constructor, args);
    return new factoryFunction();
}
function applyMixinsMethodInheritance(DerivedCtor, constructors, options = { withGettersAndSetters: false }) {
    const { withGettersAndSetters } = options;
    class Target extends DerivedCtor {
    }
    [...constructors].reverse().forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (!withGettersAndSetters &&
                typeof baseCtor.prototype[name] !== 'function') {
                return;
            }
            if (DerivedCtor.prototype[name]) {
                // do not override a method it it's already exists
                return;
            }
            Object.defineProperty(Target.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
    return Target;
}
exports.applyMixinsMethodInheritance = applyMixinsMethodInheritance;
function applyMixinsMethodInheritanceWithGettersAndSetters(DerivedCtor, constructors) {
    return applyMixinsMethodInheritance(DerivedCtor, constructors, {
        withGettersAndSetters: true,
    });
}
function applyMixinsPropsAndMethodsInheritance(...constructors) {
    class ClassWithMethodsInherited {
    }
    const reversedConstructors = [...constructors].reverse();
    const prototypeWithMethodsDerived = applyMixinsMethodInheritanceWithGettersAndSetters(ClassWithMethodsInherited, constructors).prototype;
    const derivedCtor = function (...args) {
        reversedConstructors.forEach(baseCtor => {
            const instance = applyConstructor(baseCtor, args);
            (0, objects_1.copyOwnPropertiesIntoTarget)(this, instance);
        });
        (0, objects_1.copyOwnPropertiesIntoTarget)(this, prototypeWithMethodsDerived);
    };
    return derivedCtor;
}
exports.applyMixinsPropsAndMethodsInheritance = applyMixinsPropsAndMethodsInheritance;
//# sourceMappingURL=multipleInheritance.js.map