import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter(props) {
  const [count, setCount] = createSignal(0);

  // Update Counter
  function updateCounter() {
    setCount(count() + (Number(props.incrementCount) || 1))

    // If the counter is above 10, then reset to 0.
    if (count() > (props.maxCountUntilReset || 99999999)) {
      setCount(0)
    }
  }

  return (
    <button class="increment" onClick={updateCounter} type="button">
      {(props.prefix || "Counter:")} {count()}
    </button>
  );
}
