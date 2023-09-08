  import ReactDOM from 'react-dom/client';
  import Home from './View/Home/Home';
  import Contact from './View/Contact/Contact';
  import About from './View/About/About';



// import Button from './Components/Button/Button';
//  import Btn from './Components/Button/Button-simple.js';
// import Navbar from './Components/Navbar/Navbar';

function App(){

    const path = window.location.pathname;
      if(path === "/"){
        return  <Home/>
      }
      else if( path === "/contact"){
        return <Contact/>
      }

      else if( path === "/about"){
        return <About/>
      }
      else{
        return <h1>sorry</h1>
      }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App />
  </>

);
