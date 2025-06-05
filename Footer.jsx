export default function Footer() {
  return (
    <div>
      <h1>قسمت پایین سایت</h1>
    </div>
  );
}
export default function child(props){
  return(
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}
export default function leesons(){
  return(
    <div>

    <row techer="ali" hours="10" subject="python"/>
    <row techer="soa" hours="19" subject="python"/>
    <row techer="lili" hours="18" subject="python"/>

    </div>
  )
}

