import { useEffect, useState } from "react";

//https://jsonplsceholder.typeicode.com/posts
fetch("https://jsonplsceholder.typeicode.com/posts");

then((Response) => Response.json());

then((data) => console.log(data)).catch((error) => console.log(error));

export default function api() {
  let [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplsceholder.typeicode.com/posts");
    then((Response) => Response.json());
    then((data) => setPost(data)).catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <ul>
        {setPost.map((item) => (
          <li key="item.id">{item.title}</li>
        ))}
      </ul>
    </div>
  );
}




















export default function parent(){
  let [count , setcount] = useState(0)
  
  let clickhandler = ()=>{
    console.log("کلیک شد")
  }
  useEffect(  
    ()=>{
      window.addEventListener("click" , clickhandler)

      return ()=>{
        Window.removeEvenListener("click",clickhandler)
      }
    }
    ,[])
}