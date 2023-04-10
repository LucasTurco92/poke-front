import React from "react";
import Home from './pages/home/home';
import pikachu from '../src/assets/images/pika.gif';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import backgroundImg from '../public/background.jpg'
import './index.css'
const App = () => {
const utls ='https://wallpapercave.com/wp/wp8832614.jpg'
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
<>
  <div className='back-ground-particles'>
          <Particles
           className="back-ground-particles"
        id="tsparticles"
        init={particlesInit}
        
        options={{
          background: {
            image: `url(${backgroundImg})`,
            position: "cover",
            size: "100% 100%",
            repeat:'no-repeat',
            filter:'blur(1000px)'
          },
          backgroundMask: {
            enable: true,
            cover: {  
              value: '#000',
              opacity:.1
            },
          },
          
          fpsLimit: 120,
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "random",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1.5,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 20,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true
        }}/>
          <div style={{
        backgroundColor:'#80aad1',height:"100vh",width:"100vw",
        backgroundImage:`url(${pikachu})` , backgroundAttachment:"fixed",
        backgroundRepeat:' no-repeat',
        backgroundPosition: 'right bottom',
        backgroundSize: '200px',
      }}>
      <Home/>
      </div>
        <div/>
    
      </div>
    </>);
};

export default App;