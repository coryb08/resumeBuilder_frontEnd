import React from "react"

const Header = props => {
  // console.log("in header", props);

  const backHome = ()=> {
    document.location.href = "/"
  }
  return (
    <div className="header">
      <h1 onClick={backHome} className="App-title">Résumed</h1>
    </div>
  )
}

export default Header
