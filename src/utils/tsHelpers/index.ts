export type getEnumKeys<T> = keyof T;

export type TupleToObject<T extends any[]> = Omit<T, keyof any[]>;

export type TupleToObjectInheritKeyNames<
  T extends any[],
  N extends Record<keyof TupleToObject<T>, PropertyKey>
> = { [K in keyof TupleToObject<T> as N[K]]: T[K] };

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
