export interface IChangeListener<T> {
  onChange(elem: T): void;
}
