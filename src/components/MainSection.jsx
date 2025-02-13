import Manoj from '../assets/Manoj.jpeg';
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";


const MainSection=()=>{
    return (
        <div className="flex-col bg-gray-400 flex md:flex-row justify-around items-center p-5 py-12">
            <div className="w-1/2 flex flex-col justify-center align-center space-y-7 p-4">
                <h1 className="text-6xl font-bold">Hello, <br />  I'm <span className="text-amber-600">MANOJ</span>
                    <p className= "text-3xl font-thin">I'm a software engineer based in Chennai.</p>
                </h1>
                <hr className='text-gray-500'/>
                <div className="flex flex-row space-x-7">
                    <a target='_blank' href="https://www.linkedin.com/in/manojmurugesan">
                        <AiOutlineLinkedin className='w-12 h-12 cursor-pointer rounded-full  hover:text-gray-300'/>
                    </a>
                    <a target='_blank' href="https://www.instagram.com/pic_of_mano">
                        <AiOutlineInstagram className='w-12 h-12 cursor-pointer rounded-full  hover:text-gray-300'/>
                    </a>
                    <a target='_blank' href="https://manoj-146.github.io/">
                        <AiOutlineGithub className='w-12 h-12 cursor-pointer rounded-full  hover:text-gray-300'/>
                    </a>
                </div>
            </div>
            <img src={Manoj}  className='w-100 md:w-1/3 rounded-full shadow-amber-600' alt="vijay image" />
        </div>
    );
}

export default MainSection;