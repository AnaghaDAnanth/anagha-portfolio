import { FaExternalLinkAlt } from "react-icons/fa";
import resume from '../assets/documents/Resume_AnaghaDAnanth.pdf'

function Experience () {
    return (
        <section className="relative w-full overflow-visible">
            {/* SAP Labs Section */}
            <div className="relative overflow-visible">
                {/* Vertical line for SAP Labs only */}
                <div className="absolute top-2 bottom-0 w-[1px] outline-2 outline-gray-200"></div>

                {/* Developer */}
                <div className="grid grid-cols-[1fr_3fr] gap-0">
                    <div className="relative flex flex-col text-left text-[14px] ml-4 text-gray-500 font-medium">
                        <p> May '24 - Apr '25 </p>
                        <div className="mt-2 text-sm transition-all duration-300 hover:text-amber-400 hover:text-base">
                            <a  href="https://www.sap.com/india/about/labs-india.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-1">
                                <span>SAP Labs</span>
                                <FaExternalLinkAlt className="text-xs" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-start text-left">
                        <h3 className="font-bold text-gray-600"> Full Stack Developer & DevOps Engineer (SDE- II)</h3>
                        <ul className="ml-4 mt-2 list-disc marker:text-gray-400 text-sm/6 text-gray-800 text-justify"> 
                            <li> Developed a robust automation framework for seamless integration of multiple
                            SAP products and solutions, achieving a 90%+ reduction in customer integration time. - <a href="https://surl.li/kjuacq" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-700 hover:text-yellow-400 transition-all duration-300 underline"> Cloud Integration Automation Service (CIAS) </a> </li>
                            <li> Led the migration of communication arrangements from a 2 system landscape to a 3 system
                            landscape for SAP S/4HANA Public Cloud through <text className="text-gray-700 font-medium"> automation enablement while ensuring a
                            seamless transition with a minimal 1 day customer impact, </text> preserving all customer-specific
                            settings during the migration. </li>
                            <li> <text className="text-gray-700 font-medium"> Lead for the project’s DevOps activities: </text>Project pipeline configuration & monitoring, audit &
                            remediation of security vulnerabilities, and management of Operational tools and policies. Also
                            responsible for project deployment, builds, & daily DevOps tasks. </li>
                        </ul>
                        <br />
                        <div className="flex">
                            <p className="pl-2 pr-2 bg-amber-100 border border-yellow-500 text-sm rounded-full h-6"> JAVA </p>
                            <p className="ml-1.5 mr-1.5 pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> Spring Boot </p>
                            <p className="mr-1.5 pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> JavaScript </p>
                            <p className="mr-1.5 pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> SAP UI5 </p>
                            <p className="mr-1.5 pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> SAP BTP </p>
                            <p className="mr-1.5 pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> Cloud Foundry </p>
                        </div>
                    </div>
                </div>
                {/* Associate Developer */}
                <div className="mt-5 grid grid-cols-[1fr_3fr] gap-0">
                    <div className="relative flex flex-col text-left ml-2 text-[14px] text-gray-500 font-medium">
                        <p className="ml-2"> May '24 - Apr '25 </p>
                    </div>
                    <div className="flex flex-col items-start text-left">
                        <h3 className="font-bold text-gray-600"> Full Stack Developer </h3>
                        <ul className="ml-4 mt-2 list-disc marker:text-gray-400 text-sm/6 text-gray-800 text-justify"> 
                            <li> Backend lead for system design and development of a cloud application (GitHub Issue Intelligence
                                Dashboard) from scratch. </li>
                            <li> Designed and integrated charts for the UI for an intuitive visualization experience.</li>
                            <li> Explored, implemented and presented - <a href="https://cap.cloud.sap/docs/" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-700 hover:text-yellow-400 transition-all duration-300 underline"> SAP Cloud Application Programming (CAP) </a> framework
                            integration with Business Events using an Event Driven Architecture (EDA). </li>
                        </ul>
                        <br />
                        <div className="flex">
                            <p className="pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> JavaScript </p>
                            <p className="ml-1.5 mr-1.5 pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> Node JS </p>
                            <p className="mr-1.5 pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> SAP CAP </p>
                            <p className="mr-1.5 pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> SAP UI5 </p>
                        </div>
                    </div>
                </div>
                {/* Scholar */}
                <div className="mt-5 grid grid-cols-[1fr_3fr] gap-0">
                    <div className="relative flex flex-col text-left text-[14px] ml-2 text-gray-500 font-medium">
                        <p className="ml-2"> May '24 - Apr '25 </p>
                    </div>
                    <div className="flex flex-col items-start text-left">
                        <h3 className="font-bold text-gray-600"> Data Science and AI Engineer </h3>
                        <ul className="ml-4 mt-2 list-disc marker:text-gray-400 text-sm/6 text-gray-800 text-justify"> 
                            <li> Worked with the dataset provided by the Moroccan Police Department to forecast the timing and
                            location of future accidents, as well as assess the likelihood of accidents based on filtered inputs. </li>
                            <li> Assisted senior developers in developing an enhanced time series algorithm for prediction, hence
                            reducing the processing time by a significant amount while <text className="text-gray-700 font-medium">increasing the accuracy by 6%</text></li>
                            <li> Implemented feature engineering techniques, creation of Deep Learning models and deployment of models to enable <text className="text-gray-700 font-medium">MLOps.</text> </li>
                        </ul>
                        <br />
                        <div className="flex">
                            <p className="pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> Python </p>
                            <p className="ml-1.5 mr-1.5 pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> SAP AI Core </p>
                            <p className="mr-1.5 pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> SAP Data Intelligence </p>
                            <p className="mr-1.5 pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> MLOps </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Minion Labs Section - No vertical line here */}
            <div className="mt-5">
                <div className="grid grid-cols-[1fr_3fr] gap-0">
                    <div className="relative flex flex-col text-left text-[14px] ml-2 text-gray-500 font-medium">
                        <p className="ml-2"> Jul '20 - May '21 </p>
                        <div className="mt-2 text-sm transition-all duration-300 hover:text-amber-400 hover:text-base">
                            <a  href="https://www.linkedin.com/company/minionlabss/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-1">
                                <span className="ml-2">Minion Labs</span>
                                <FaExternalLinkAlt className="text-xs" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-start text-left">
                        <h3 className="font-bold text-gray-600"> Data Science Intern </h3>
                        <ul className="ml-4 mt-2 list-disc marker:text-gray-400 text-sm/6 text-gray-800 text-justify"> 
                            <li> Performed EDA, data preprocessing and feature engineering techniques using Sci-kit Learn, Pandas,
                            NumPy, Plotly, Dash and Matplotlib. Integrated with AWS SageMaker and Lambda for predictive
                            modelling with cloud enablement. </li>
                            <li> <text className="text-gray-700 font-medium"> NILMTK analysis using Python for energy disaggregation analysis </text> and prediction of electrical
                            appliances, and development of a Neural Network model for the forecast.</li>
                            <li> Designed a <text className="text-gray-700 font-medium"> rich and interactive dashboard for energy profile management </text>, thereby identifying
                            energy consumption patterns, seasonality, and other trends. </li>
                            <li> <a href="https://sciresol.s3.us-east-2.amazonaws.com/IJST/Articles/2021/Issue-43/IJST-2021-655.pdf" target="_blank" rel="noopener nreferrer" className="font-medium text-gray-700 hover:text-yellow-400 transition-all duration-300 underline">Published research paper based on the work done</a> </li>
                        </ul>
                        <br />
                        <div className="flex">
                        <p className="pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> Python </p>
                            <p className="ml-1.5 mr-1.5 pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> EDA </p>
                            <p className="mr-1.5 pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> Data Visualization </p>
                            <p className="mr-1.5 pl-2 pr-2 text-sm bg-amber-100 border border-yellow-500 rounded-full h-6"> Machine Learning </p>
                        </div>
                    </div>
                </div>
            </div>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="mt-7 ml-5 text-gray-500 text-xl inline-flex 
            items-center space-x-1"> 
                View Resume <FaExternalLinkAlt className="ml-2 text-base hover:text-xl hover:text-amber-400 transition-all duration-300"/> 
            </a>
        </section>
    )
}

export default Experience;