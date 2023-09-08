import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Button from '../../Components/Button/Button';
export default function Home({ text }) {
    return (
        <>
            <Navbar />
            <div className='home-contener'>
                <div className='home-card'><h1 className='heading'>Home card 1</h1> <Button text="Hello" /> </div>
                <div className='home-card'><h1 className='heading'>Home card 2</h1> <Button text="Hello" /> </div>
                <div className='home-card'><h1 className='heading'>Home card 3</h1> <Button text="Hello" /> </div>
                <div className='home-card'><h1 className='heading'>Home card 4</h1> <Button text="Hello" /> </div>
            </div>
        </>
    )
}