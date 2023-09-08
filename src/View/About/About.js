import './About.css';
import Navbar from './../../Components/Navbar/Navbar';
import Button from './../../Components/Button/Button-simple';
export default function About({text}){
    return(
        <>
        <Navbar/>   
        <div className='about-contener'>
            <div className='about-card'> <h1>About card 1</h1> <Button text="Click Me"  /> </div>
            <div className='about-card'> <h1>About card 1</h1> <Button text="Click Me"/> </div>
            <div className='about-card'> <h1>About card 1</h1> <Button text="Click Me"/> </div>
            <div className='about-card'> <h1>About card 1</h1> <Button text="Click Me"/> </div>
        </div>
        </>
    )
}