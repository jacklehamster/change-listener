import { IChangeListener } from "./IChangeListener";
import { IChangeNotifier as IChangeNotifier } from "./IChangeNotifier";

export class ChangeNotifier<T> implements IChangeNotifier<T>, IChangeListener<T> {
  listeners = new Set<IChangeListener<T>>();
  constructor(private elem: T) {
  }

  addChangeListener(listener: IChangeListener<T>): this {
    this.listeners.add(listener);
    return this;
  }

  removeChangeListener(listener: IChangeListener<T>): void {
    this.listeners.delete(listener);
  }

  onChange() {
    for (let listener of this.listeners) {
      listener.onChange(this.elem);
    }
  }
}
