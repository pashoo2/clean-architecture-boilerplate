import {Constructor} from '../../../interfaces/classes';
import {PickByValueType} from '../../../interfaces/common';

import {copyOwnPropertiesIntoTarget} from '../objects';

function applyConstructor<CTOR extends Constructor>(
  constructor: CTOR,
  args: ConstructorParameters<CTOR>
): InstanceType<CTOR> {
  // eslint-disable-next-line prefer-spread
  const factoryFunction = constructor.bind.apply(constructor, args as any);
  return new factoryFunction() as unknown as InstanceType<CTOR>;
}

export function applyMixinsMethodInheritance<
  C extends Constructor,
  C1 extends Constructor,
  C2 extends Constructor
>(
  DerivedCtor: C,
  constructors: [C1, C2]
): Constructor<
  InstanceType<C> &
    PickByValueType<InstanceType<C1>, Function> &
    PickByValueType<InstanceType<C2>, Function>,
  ConstructorParameters<C>
>;
export function applyMixinsMethodInheritance<
  C extends Constructor,
  C1 extends Constructor,
  C2 extends Constructor,
  C3 extends Constructor
>(
  DerivedCtor: C,
  constructors: [C1, C2, C3]
): Constructor<
  InstanceType<C> &
    PickByValueType<InstanceType<C1>, Function> &
    PickByValueType<InstanceType<C2>, Function> &
    PickByValueType<InstanceType<C3>, Function>,
  ConstructorParameters<C>
>;
export function applyMixinsMethodInheritance<
  C extends Constructor,
  C1 extends Constructor,
  C2 extends Constructor,
  C3 extends Constructor,
  C4 extends Constructor
>(
  DerivedCtor: C,
  constructors: [C1, C2, C3, C4]
): Constructor<
  InstanceType<C> &
    PickByValueType<InstanceType<C1>, Function> &
    PickByValueType<InstanceType<C2>, Function> &
    PickByValueType<InstanceType<C3>, Function> &
    PickByValueType<InstanceType<C4>, Function>,
  ConstructorParameters<C>
>;
export function applyMixinsMethodInheritance<
  C extends Constructor,
  C1 extends Constructor,
  C2 extends Constructor,
  C3 extends Constructor,
  C4 extends Constructor,
  C5 extends Constructor
>(
  DerivedCtor: C,
  constructors: [C1, C2, C3, C4, C5]
): Constructor<
  InstanceType<C> &
    PickByValueType<InstanceType<C1>, Function> &
    PickByValueType<InstanceType<C2>, Function> &
    PickByValueType<InstanceType<C3>, Function> &
    PickByValueType<InstanceType<C4>, Function> &
    PickByValueType<InstanceType<C5>, Function>,
  ConstructorParameters<C>
>;
export function applyMixinsMethodInheritance<C extends Constructor>(
  DerivedCtor: C,
  constructors: Constructor[],
  options: {withGettersAndSetters?: boolean} = {withGettersAndSetters: false}
): Constructor {
  const {withGettersAndSetters} = options;
  class Target extends DerivedCtor {}
  [...constructors].reverse().forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      if (
        !withGettersAndSetters &&
        typeof baseCtor.prototype[name] !== 'function'
      ) {
        return;
      }
      if (DerivedCtor.prototype[name]) {
        // do not override a method it it's already exists
        return;
      }
      Object.defineProperty(
        Target.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
  return Target;
}

function applyMixinsMethodInheritanceWithGettersAndSetters(
  DerivedCtor: Constructor,
  constructors: Constructor[]
): Constructor {
  return (applyMixinsMethodInheritance as any)(DerivedCtor, constructors, {
    withGettersAndSetters: true,
  });
}

export function applyMixinsPropsAndMethodsInheritance<
  C1 extends Constructor,
  C2 extends Constructor
>(
  ctor1: C1,
  ctor2: C2
): Constructor<InstanceType<C2> & InstanceType<C1>, ConstructorParameters<C1>>;
export function applyMixinsPropsAndMethodsInheritance<
  C1 extends Constructor,
  C2 extends Constructor,
  C3 extends Constructor
>(
  ctor1: C1,
  ctor2: C2,
  ctor3: C3
): Constructor<
  InstanceType<C3> & InstanceType<C2> & InstanceType<C1>,
  ConstructorParameters<C1>
>;
export function applyMixinsPropsAndMethodsInheritance<
  C1 extends Constructor,
  C2 extends Constructor,
  C3 extends Constructor,
  C4 extends Constructor
>(
  ctor1: C1,
  ctor2: C2,
  ctor3: C3,
  ctor4: C4
): Constructor<
  InstanceType<C4> & InstanceType<C3> & InstanceType<C2> & InstanceType<C1>,
  ConstructorParameters<C1>
>;
export function applyMixinsPropsAndMethodsInheritance<
  C1 extends Constructor,
  C2 extends Constructor,
  C3 extends Constructor,
  C4 extends Constructor,
  C5 extends Constructor
>(
  ctor1: C1,
  ctor2: C2,
  ctor3: C3,
  ctor4: C4,
  ctor5: C5
): Constructor<
  InstanceType<C5> &
    InstanceType<C4> &
    InstanceType<C3> &
    InstanceType<C2> &
    InstanceType<C1>,
  ConstructorParameters<C1>
>;
export function applyMixinsPropsAndMethodsInheritance<
  C1 extends Constructor,
  C2 extends Constructor,
  C3 extends Constructor,
  C4 extends Constructor,
  C5 extends Constructor,
  C6 extends Constructor
>(
  ctor1: C1,
  ctor2: C2,
  ctor3: C3,
  ctor4: C4,
  ctor5: C5,
  ctor6: C6
): Constructor<
  InstanceType<C6> &
    InstanceType<C5> &
    InstanceType<C4> &
    InstanceType<C3> &
    InstanceType<C2> &
    InstanceType<C1>,
  ConstructorParameters<C1>
>;
export function applyMixinsPropsAndMethodsInheritance(
  ...constructors: Constructor[]
): Constructor {
  class ClassWithMethodsInherited {}
  const reversedConstructors = [...constructors].reverse();
  const prototypeWithMethodsDerived =
    applyMixinsMethodInheritanceWithGettersAndSetters(
      ClassWithMethodsInherited,
      constructors
    ).prototype;

  const derivedCtor = function <CTOR extends typeof constructors[0]>(
    this: CTOR,
    ...args: ConstructorParameters<CTOR>
  ) {
    reversedConstructors.forEach(baseCtor => {
      const instance = applyConstructor(baseCtor, args);
      copyOwnPropertiesIntoTarget(this, instance);
    });
    copyOwnPropertiesIntoTarget(this, prototypeWithMethodsDerived);
  };
  return derivedCtor as unknown as Constructor;
}
