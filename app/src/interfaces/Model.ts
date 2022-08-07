import { Comparable } from "./Comparable";
import { Stringable } from "./Stringable";

export interface Model<T> extends Stringable, Comparable<T> {}
