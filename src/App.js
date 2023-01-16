import React from "react";
import Home from './pages/home/home';
import image from './assets/images/back.png';
const App = () => {

  return (<div style={{ backgroundImage:`url(${image})` , backgroundAttachment:"fixed",height:"100vh",width:"100vw" }}>
    <Home/>
    </div>);
};

export default App;