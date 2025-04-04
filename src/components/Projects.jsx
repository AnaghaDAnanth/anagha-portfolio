import profile from '../assets/images/profile.png'
import { FaGithub, FaLinkedin, FaGoodreads } from "react-icons/fa";

function Projects () {
    return (
        <section>
            {/* Project 1 */}
            <div className="border border-transparent rounded-3xl p-7 transition-all duration-300 
                hover:border-amber-400 hover:shadow-lg hover:shadow-amber-200/30">
                <h1 className="text-xl"> Ecological Footprint </h1>
                <p className="mt-3"> I did this and that and this and that and this and that. I did this and that and this and that and this and that.
                                    I did this and that and this and that and this and that. I did this and that and this and that and this and that.  </p>
                <div className=' flex flex-row'>
                    <div className="mt-5 mr-5 text-s underline"> <a href="https:/google.com"> View GitHub </a> </div>
                    <div className="mt-5 mr-5 text-s underline"> <a href="https:/google.com"> View Documentation </a> </div>
                </div>
            </div>
            
            {/* Project 2 */}
            <div className="border border-transparent rounded-3xl p-7 transition-all duration-300 
                hover:border-amber-400 hover:shadow-lg hover:shadow-amber-200/30">
                <h1 className="text-xl"> Ecological Footprint </h1>
                <p className="mt-3"> I did this and that and this and that and this and that. I did this and that and this and that and this and that.
                                    I did this and that and this and that and this and that. I did this and that and this and that and this and that.  </p>
                <div className=' flex flex-row'>
                    <div className="mt-5 mr-5 text-s underline"> <a href="https:/google.com"> View GitHub </a> </div>
                    <div className="mt-5 mr-5 text-s underline"> <a href="https:/google.com"> View Documentation </a> </div>
                </div>
            </div>


            {/* Project 3 */}
            <div className="border border-transparent rounded-3xl p-7 transition-all duration-300 
                hover:border-amber-400 hover:shadow-lg hover:shadow-amber-200/30">
                <h1 className="text-xl"> Ecological Footprint </h1>
                <p className="mt-3"> I did this and that and this and that and this and that. I did this and that and this and that and this and that.
                                    I did this and that and this and that and this and that. I did this and that and this and that and this and that.  </p>
                <div className=' flex flex-row'>
                    <div className="mt-5 mr-5 text-s underline"> <a href="https:/google.com"> View GitHub </a> </div>
                    <div className="mt-5 mr-5 text-s underline"> <a href="https:/google.com"> View Documentation </a> </div>
                </div>
            </div>


            
            <div className="p-10"> </div>
        </section>
    )
}

export default Projects;