import { IChangeListener } from "./IChangeListener";

export interface IChangeNotifier<T> {
  addChangeListener(listener: IChangeListener<T>): this;
  removeChangeListener(listener: IChangeListener<T>): void;
}
