import Resume_img from '../assets/Resume_img.jpg';    

const Resume=()=>{
    return(
        <div id='Resume' className="py-10 flex flex-col md:flex-row items-center justify-around p-2 bg-gray-700 text-white">
            <div className=' md:block w-1/4 p-4'>
                <img src={Resume_img} alt="" />
            </div>
            <div className= "w-1/2 flex flex-col">
                <h1 className="text-4xl font-bold text-center mb-7 pt-5 text-gray" style={{"text-decoration":"Underline"}}>RESUME</h1>
                <p className="text-xl text-center">
                    You can download my resume from here 
                </p>
                <div className='flex justify-center pt-5'>
                    <button className='w-[150px] h-10  bg-indigo-500 rounded-lg  hover:border-2 border-indigo-700 '><a className='w-full h-full' href="https://drive.google.com/file/d/1Nvm7HZlpO3lZ7uu5IT5RscxG5b5DJgma/view?usp=sharing">Download</a></button>
                </div>
            </div>
        </div>
    );
};
export default Resume;