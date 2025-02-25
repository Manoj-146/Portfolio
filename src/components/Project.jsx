import ecom from '../assets/Ecommerce.png';
import todo from '../assets/to-do-list-img.png';

function Project(){
    return(
        <div id="Project" className=" flex flex-col justify-around ">
            <div className="text-center">
                <p className=' text-neutral-950 font-bold text-4xl py-5'>Projects</p>
                <h1 className='text-2xl font-medium text-neutral-900 ' >These are the projects that I have did using my tech skills</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-around items-center rounded-2xl p-5'>
                <div className='font-bold relative m-4  '>
                    <img src={ecom} className='w-4xl h-60 object-cover rounded-2xl' alt="" />
                    <div className=' cursor-pointer absolute opacity-0 w-full h-full hover:opacity-80 duration-500 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                        <p className='p-5 text-white  text-2xl '>This is ecommerce website that i have built for sample using tech stack java, springboot, React.js, Mysql</p>
                        <a target="_blank" href='https://to-do-list-aplication.vercel.app/' className='text-black  bg-gray-50 px-10 rounded-2xl py-2 border-2 border-gray-800'>Goto</a>
                    </div>
                </div>
                <div className='font-bold relative m-4 '>
                    <img src={todo} className='w-4xl h-60 object-cover rounded-2xl' alt="" />
                    <div className='cursor-pointer absolute opacity-0 w-full h-full hover:opacity-80 duration-500 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50  flex flex-col items-center justify-center'>
                        <p className='p-5 text-white  text-2xl '>This is to-do-list application which is used for the common peoples to create the schedule for the daily routine</p>
                        <a target="_blank" href='https://to-do-list-aplication.vercel.app/' className='text-black  bg-gray-50 px-10 rounded-2xl py-2 border-2 border-gray-800'>Goto</a>
                    </div>
                </div>
                <div className='font-bold relative m-4 '>
                    <img src={ecom} className='w-4xl h-60 object-cover rounded-2xl' alt="" />
                    <div className='cursor-pointer absolute opacity-0 w-full h-full hover:opacity-80 duration-500 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                        <p className='p-5 text-white  text-2xl '>This is ecommerce website that i have built for sample using tech stack java, springboot, React.js, Mysql</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;