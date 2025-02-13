import React,{useState} from 'react';

function Header(){
    const [show,setShow]=useState(false);
    return(
        <header className=" p-5 relative w-full flex flex-row  justify-between items-center text-black ">
            <h1 className="text-2xl font-bold p-4">Portfolio</h1>
            <nav className="hidden md:flex space-x-4">
                <ul className="flex flex-row space-x-10 p-4">
                    <li ><a className='hover:text-gray-400 text-lg' href="#/">Home</a></li>
                    <li ><a className='hover:text-gray-400 text-lg ' href="#Project">Project</a></li>
                    <li ><a className='hover:text-gray-400 text-lg' href="#Resume">Resume</a></li>
                    <li ><a className='hover:text-gray-400 text-lg' href="#About">About</a></li>
                    <li ><a className='hover:text-gray-400 text-lg' href="#Contact">Contact</a></li>
                </ul>
            </nav>
            {show && <nav className="w-full md:hidden absolute bg-gray-700 top-16 text-center ">
                <ul className="flex flex-col items-center justify-center w-full ">
                    <li className="border-b-1 border-amber-50 w-full py-2 font-bold" ><a href="#/">Home</a></li>
                    <li className="border-b-1 border-amber-50 w-full py-2" ><a href="#Project">Project</a></li>
                    <li className="border-b-1 border-amber-50 w-full py-2" ><a href="#Resume">Resume</a></li>
                    <li className="border-b-1 border-amber-50 w-full py-2" ><a href="#About">About</a></li>
                    <li className="border-b-1 border-amber-50 w-full py-2" ><a href="#Contact">Contact</a></li>
                </ul>
            </nav>}
            <button onClick={()=>setShow(!show)} className="md:hidden cursor-pointer p-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </header>
    );
}

export default Header;