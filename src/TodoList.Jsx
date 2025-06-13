import { useState } from "react";

export default function todo(){

    let [todo , settodo]= useState([])

    function click(){

        let inputElement = document.getElementById("todoinput");

        let new = inputElement.value

        settodo(todo.concat = (new))
        
        inputElement.value = ""
    }
    return (
      <div>
        <h2>لیست کارهای روزانه</h2>

        <input type = "text" id = "todoinput"></input>
        <button onclick= {click}>اضافه کنید</button>
        <ul>
            {
                todo.map(
                    (todo , index)=> <li key = {index}>{todo}</li> 
                )
            }

        </ul>
      </div>
    );
}