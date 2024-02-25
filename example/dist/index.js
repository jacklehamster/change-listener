// /Users/vincent/change-listener/example/node_modules/change-listener/dist/index.js
class p {
  d;
  listeners = new Set;
  constructor(d) {
    this.elem = d;
  }
  addChangeListener(d) {
    return this.listeners.add(d), this;
  }
  removeChangeListener(d) {
    this.listeners.delete(d);
  }
  onChange() {
    for (let d of this.listeners)
      d.onChange(this.elem);
  }
}
export {
  p as ChangeNotifier
};
