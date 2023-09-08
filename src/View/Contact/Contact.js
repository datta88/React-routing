import './Contact.css';
import Btn from './../../Components/Button/Button-simple';
import Navbar from '../../Components/Navbar/Navbar';

export default function Contact({text}){
    return(
        <>
        <Navbar />
        <div className='contact-contener'>
            <div className='contact-card'> <h1 className='hading'>About Card 1 </h1> <Btn text="About"/> </div>
            <div className='contact-card'> <h1 className='hading'>About Card 1 </h1> <Btn text="About"/> </div>
            <div className='contact-card'> <h1 className='hading'>About Card 1 </h1> <Btn text="About"/> </div>
            <div className='contact-card'> <h1 className='hading'>About Card 1 </h1> <Btn text="About"/> </div>
        </div>
        </>
    )
}