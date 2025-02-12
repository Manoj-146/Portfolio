import ecom from '../assets/Ecommerce.png';

function Project(){
    return(
        <div id="Project" className=" flex flex-col bg-gray-400 justify-around ">
            <div className="text-center">
                <p className=' text-neutral-950 font-bold text-4xl py-5'>Projects</p>
                <h1 className='text-2xl font-medium text-neutral-900 ' >These are the projects that I have did using my tech skills</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-around items-center rounded-2xl p-5'>
                <div className='font-bold relative m-4 '>
                    <img src={ecom} className='w-4xl rounded' alt="" />
                    <div className=' cursor-pointer absolute opacity-0 w-full h-full hover:opacity-80 duration-500 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center'>
                        <p className='p-5 text-white  text-2xl '>This is ecommerce website that i have built for sample using tech stack java, springboot, React.js, Mysql</p>
                    </div>
                </div>
                <div className='font-bold relative m-4 '>
                    <img src={ecom} className='w-4xl rounded' alt="" />
                    <div className='cursor-pointer absolute opacity-0 w-full h-full hover:opacity-80 duration-500 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center'>
                        <p className='p-5 text-white  text-2xl '>This is ecommerce website that i have built for sample using tech stack java, springboot, React.js, Mysql</p>
                    </div>
                </div>
                <div className='font-bold relative m-4 '>
                    <img src={ecom} className='w-4xl rounded' alt="" />
                    <div className='cursor-pointer absolute opacity-0 w-full h-full hover:opacity-80 duration-500 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center'>
                        <p className='p-5 text-white  text-2xl '>This is ecommerce website that i have built for sample using tech stack java, springboot, React.js, Mysql</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;