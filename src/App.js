import React from "react";
import Home from './pages/home/home';
import pikachu from '../src/assets/images/pika.gif';

const App = () => {

  return (<div style={{
    backgroundColor:'#80aad1',height:"100vh",width:"100vw",
    backgroundImage:`url(${pikachu})` , backgroundAttachment:"fixed",
    backgroundRepeat:' no-repeat',
    backgroundPosition: 'right bottom',
    backgroundSize: '200px'
     }}>
    <Home/>
    </div>);
};

export default App;