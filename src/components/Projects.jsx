import ecolens from '../assets/documents/EcoLens.pdf'

function Projects () {
    return (
        <section>
            {/* Project 1 */}
            <div className="border border-transparent rounded-3xl p-7 transition-all duration-300 
                hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-200/30">
                <h1 className="text-xl font-bold text-gray-600"> EcoLens – View Sustainability through Data </h1>
                <p className="mt-3 text-sm/6"> <text className='font-medium'> Objective:</text> The world faces a massive ecological and social challenge with unsustainable production and consumption patterns.Existing methods fall short in helping countries visualize and predict their ecological trajectory for actionable change. <br/><text className='font-medium'> Solution: </text> A machine learning–powered system that models and predicts a country's ecological footprint using real-time resource usage data. Offers interactive dashboards and accurate forecasting to empower data-driven sustainability efforts.<br/> <text className='font-medium'> Impact: </text> This project aids global and national stakeholders in understanding where they stand in sustainability—and more importantly—how to get better. It provides a data-driven foundation for smarter environmental decisions, helping countries strive towards ecological equilibrium.</p>
                <div className=' flex flex-row'>
                    <div className="mt-5 mr-5 text-sm underline hover:text-base hover:text-yellow-400 transition-all duration-300"> <a href="https://github.com/AnaghaDAnanth/EcologicalFootprint" target="_blank" rel="noopener noreferrer"> View GitHub </a> </div>
                    <div className="mt-5 mr-5 text-sm underline hover:text-base hover:text-yellow-400 transition-all duration-300"> <a href={ecolens} target="_blank" rel="noopener noreferrer"> View Documentation </a> </div>
                </div>
            </div>
            
            {/* Project 2 */}
            <div className="border border-transparent rounded-3xl p-7 transition-all duration-300 
                hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-200/30">
                <h1 className="text-xl font-bold text-gray-600"> DevOrbit – A Complete Orbit around the DevOps Toolchain </h1>
                <p className="mt-3 text-sm/6"> A hands-on DevOps learning project covering the full toolchain—from local Flask app development to deployment on Cloud Foundry.
                This project <text className="font-medium">explores and integrates key DevOps tools and concepts </text> including containerization, CI/CD, infrastructure as code, cloud deployment, and automation pipelines. Built to provide end-to-end exposure to real-world DevOps workflows.  </p>
                <div className=' flex flex-row'>
                    <div className="mt-5 mr-5 text-sm underline hover:text-base hover:text-yellow-400 transition-all duration-300"> <a href="https://github.com/AnaghaDAnanth/DevOrbit" target="_blank" rel="noopener noreferrer"> View GitHub </a> </div>
                    <div className="mt-5 mr-5 text-sm underline hover:text-base hover:text-yellow-400 transition-all duration-300"> <a href="https://github.com/AnaghaDAnanth/DevOrbit" target="_blank" rel="noopener noreferrer"> View Documentation </a> </div>
                </div>
            </div>


            {/* Project 3 */}
            <div className="border border-transparent rounded-3xl p-7 transition-all duration-300 
                hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-200/30">
                <h1 className="text-xl font-bold text-gray-600"> Ecological Footprint </h1>
                <p className="mt-3 text-sm/6"> I did this and that and this and that and this and that. I did this and that and this and that and this and that.
                                    I did this and that and this and that and this and that. I did this and that and this and that and this and that.  </p>
                <div className=' flex flex-row'>
                    <div className="mt-5 mr-5 text-sm underline hover:text-base hover:text-yellow-400 transition-all duration-300"> <a href="https:/google.com" target="_blank" rel="noopener noreferrer"> View GitHub </a> </div>
                    <div className="mt-5 mr-5 text-sm underline hover:text-base hover:text-yellow-400 transition-all duration-300"> <a href="https:/google.com" target="_blank" rel="noopener noreferrer"> View Documentation </a> </div>
                </div>
            </div>


            
            <div className="p-10"> </div>
        </section>
    )
}

export default Projects;