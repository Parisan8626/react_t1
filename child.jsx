import { useState } from "react";
export default function child() {
  Setmessage = "hello everyone";
  function clickHandler() {
    console.log("click now");
    let [message, setMessage] = useState("learning now");
  }
  return (
    <div>
      <h1 onClick={clickHandler}> {massage} </h1>
    </div>
  );
}
