import Manoj from '../assets/Manoj.jpeg';

const About=()=>{
    return(
        <div id='About' className="flex flex-row items-center justify-around p-2 bg-[#808080] py-10">
            <div className='hidden md:block w-1/4 p-4'>
                <img src={Manoj} className='rounded-t-full' alt="" />
            </div>
            <div className="w-1/2 flex flex-col">
                <h1 className="text-4xl font-bold text-center mb-7 pt-5">About</h1>
                <ul className='list-disc pb-5'>
                    <li>
                        <p className="text-xl">
                            As a software engineer with internship experience in both backend and frontend domain.
                        </p>
                    </li>
                    <br />
                    <li>
                        <p className="text-xl">
                            In frontened I have knowledge on HTML, CSS, JavaScript, Tailwind.CSS, React.js.
                        </p>
                    </li>
                    <br />
                    <li>
                        <p className="text-xl">
                            In backend I have knowledge on java, Springboot, Mysql, Hibernate, JPA, RestAPI.
                            I have one year of experience in the BPO sector, which helped me develop customer handling skills and basic work etiquette.
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