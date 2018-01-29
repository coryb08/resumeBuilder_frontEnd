import React from 'react';


const Header = (props) => {
  // console.log("in header", props);
  return(
    <div>
      <a href={document.location.origin}>
      <header className="App-header">
        <h1 className="App-title">Résumed</h1>
      </header>
      </a>
    </div>
  )
}

export default Header;
