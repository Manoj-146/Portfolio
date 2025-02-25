import Manoj from '../assets/Manoj.jpeg';

const About=()=>{
    return(
        <div id='About' className="flex flex-row items-center justify-around p-2 bg-[#808080] py-10 text-white">
            <div className='hidden md:block w-1/4 p-4'>
                <img src={Manoj} className='rounded-t-full' alt="" />
            </div>
            <div className="w-1/2 flex flex-col">
                <h1 className="text-4xl font-bold text-center mb-7 pt-5 text-gray-950">About</h1>
                <ul className='list-disc pb-5'>
                    <li>
                        <p className="text-xl">
                            As a software engineer with internship experience in both backend and frontend domain.
                        </p>
                    </li>
                    <br />
                    <li>
                        <p className="text-xl">
                            In frontened I have knowledge on <span className='font-bold text-gray-900'>HTML, CSS, JavaScript, React.js, Tailwind.CSS</span>.
                        </p>
                    </li>
                    <br />
                    <li>
                        <p className="text-xl">
                            In backend I have knowledge on <span className='font-bold text-gray-900'>Node.js, Express.js, java, Springboot, Hibernate, JPA, RestAPI</span>.
                        </p>
                    </li>
                    <br />
                    <li>
                        <p className="text-xl">
                            In databse I have knowledge on <span className='font-bold text-gray-900'>MySQL, MongoDB</span> and I have used those tehnologies in my projects.
                        </p>
                    </li>
                    <br />
                    <li>
                        <p className="text-xl">
                            Apart from the languages I have an experience with the technologies such as Git, Github, Postman API.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default About;