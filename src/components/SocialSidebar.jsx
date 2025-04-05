import { FaGithub, FaLinkedin, FaGoodreads } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home () {
    return (
        <div className="fixed right-14 bottom-0 flex flex-col items-center gap-4">
            <ul className="flex flex-col items-center space-y-6">
                <li> <a href="https://www.linkedin.com/in/anagha-d-ananth-506786185/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-orange-400 text-2xl"> <FaLinkedin /> </a> </li>
                <li> <a href="mailto:anaghadananth106@gmail.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-orange-400 text-xl"> <SiGmail /> </a> </li>
                <li> <a href="https://github.com/AnaghaDAnanth" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-orange-400 text-xl"> <FaGithub /> </a> </li>
                <li> <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-orange-400 text-2xl"> <FaGoodreads /> </a> </li>
            </ul>
            <div className="w-[2px] h-40 bg-gray-300"></div>
        </div>
    )
}

export default Home;