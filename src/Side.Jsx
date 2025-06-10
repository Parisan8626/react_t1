import { useEffect } from "react";
import { useState } from "react-dom";

export default function side() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count;
  }, [count]);
  return (
    <div>
      <button onclick=" ()=> setcount(count + 1)">click me</button>
      <p>you clicked{count}</p>
    </div>
  );
}
