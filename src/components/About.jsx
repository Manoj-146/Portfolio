import Manoj from '../assets/Manoj.jpeg';

const About=()=>{
    return(
        <div id='About' className=" flex flex-row items-center justify-around p-2 bg-gray-700 text-white">
            <div className='hidden md:block w-1/4 p-4'>
                <img src={Manoj} alt="" />
            </div>
            <div className="w-1/2 flex flex-col">
                <h1 className="text-4xl font-bold text-center mb-7 pt-5">About</h1>
                <ul className='list-disc pb-5'>
                    <li>
                        <p className="text-xl">
                            As a software engineer with internship experience have knowledge of Java, Springboot, React.js, and MySQL.
                        </p>
                    </li>
                    <br />
                    <li>
                        <p className="text-xl">
                            I am eager to learn new technologies based on business needs.
                        </p>
                    </li>
                    <br />
                    <li>
                        <p className="text-xl">
                            I have one year of experience in the BPO sector, which helped me develop customer handling skills and basic work etiquette.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default About;