export default function Body() {
  return (
    <div>
      <h1>قسمت بدنه سایت</h1>
    </div>
  );
}
export default function parnt(){
  let message="hello child"
  return(
    <div>
      <child text={message}/>

    </div>
  )
}

export default function row(props){
  return(
    <div>
      <h1>{props.techer}</h1>
      <h2>{props.hours}</h2>
      <h3>{props.subject}</h3>
    </div>
  )
}


