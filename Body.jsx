export default function Body() {
  return (
    <div>
      <h1>قسمت بدنه سایت</h1>
    </div>
  );
}
//if
export default function login(){
  let islogin = true
  if(islogin){
    return <h1>wellcome</h1>
  }
  return <h1>pleas login in the site</h1>
}
//ternary oprator
export default function login(){
  let islogin = true
    return islogin ? <h1>wellcome</h1> : <h1>pleas login in the site</h1>
}
//&&
export default function cotion(){
  let hiscount = false
  return(
    <div>
      <h1>you have cotion</h1>
      {hiscount && <h1>wellcom</h1>}
    </div>
  )
}
