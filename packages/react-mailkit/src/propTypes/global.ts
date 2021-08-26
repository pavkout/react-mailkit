/**
 * Create generic type with given type and return the type an array of this type.
 */
export type GoC<T> = T[] | T;

/**
 * Create generic type with given type and return the type omitted the children type
 */
export type OpC<T> = Omit<Partial<T>, 'children'>;
