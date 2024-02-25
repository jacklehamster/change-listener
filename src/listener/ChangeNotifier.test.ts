import { ChangeNotifier } from "./ChangeNotifier";

describe("ChangeNotifier", () => {
  test("addChangeListener adds a listener", () => {
    const notifier = new ChangeNotifier("initial");
    const listener = { onChange: jest.fn() };
    notifier.addChangeListener(listener);
    expect(notifier.listeners.size).toBe(1);
  });

  test("removeChangeListener removes a listener", () => {
    const notifier = new ChangeNotifier("initial");
    const listener = { onChange: jest.fn() };
    notifier.addChangeListener(listener);
    notifier.removeChangeListener(listener);
    expect(notifier.listeners.size).toBe(0);
  });

  test("onChange calls onChange for each listener", () => {
    const notifier = new ChangeNotifier("initial");
    const listener1 = { onChange: jest.fn() };
    const listener2 = { onChange: jest.fn() };
    notifier.addChangeListener(listener1);
    notifier.addChangeListener(listener2);

    notifier.onChange();

    expect(listener1.onChange).toHaveBeenCalledWith("initial");
    expect(listener2.onChange).toHaveBeenCalledWith("initial");
  });
});
