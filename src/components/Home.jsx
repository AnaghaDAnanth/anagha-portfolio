import { useState, useEffect } from "react";
import profile from '../assets/images/profile.png'
import Experience from './Experience.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'

function Home () {

    // Navigation constant
    const [currentSection, setSection] = useState("about");

    // Animation constants
    const list = ["Full-Stack Developer", "DevOps Engineer", "Learning Enthusiast"];
    const [headline, setHeadline] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setDeleting] = useState(false);

    // Navigation logic
    function sectionNavigation(section) {
        setSection(section);
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.7,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setSection(entry.target.id);
                }
            });
        }, observerOptions);

        // Observe each section
        const sections = ["about", "experience", "projects"];
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // Animation logic
    useEffect ( () => {
        const interval = setInterval(() => {
            if(!isDeleting) {
                if(letterIndex <= list[wordIndex].length -1) {
                    setHeadline(text => text + list[wordIndex][letterIndex]);
                    setLetterIndex( prevIndex => prevIndex + 1);
                }
                else {
                    setTimeout(() => setDeleting(true), 1200);
                }
            }
            else {
                if (letterIndex > 0) {
                    setHeadline( text => text.slice(0, -1));
                    setLetterIndex( currentIndex => currentIndex - 1);
                }
                else {
                    setDeleting(false);
                    setWordIndex( wordIndex => (wordIndex + 1) % list.length);
                }
            }
        }, 80);
        return () => clearInterval(interval);
    }, [letterIndex, isDeleting]) 

    return (
        <section className="flex min-h-screen">
                <div className="h-screen w-[35%] ml-20 top-0 flex flex-col">         
                    <p className="mt-25"></p>
                    <div className="mb-5 w-40 h-40 rounded-full bg-amber-100 border-3 border-yellow-500 flex items-center justify-center">
                        <img src={profile} className="w-33 h-33 object-contain" alt="Profile" />
                    </div>
                    <h1 className="text-5xl font-semibold text-primary"> Anagha D Ananth </h1>
                    <h2 className="mt-7 text-3xl font-medium min-h-[37px] flex space-x-2">
                        {headline.split(" ").map((word, index) => {
                            const colors = ["text-yellow-500", "text-gray-600"];
                            return (
                                <span key={index} className={`${colors[index % colors.length]}`}>
                                    {word}
                                </span>
                            );
                        })}
                    </h2>

                    <div className="mt-7 flex flex-col space-y-2 text-lg">
                    {["about", "experience", "projects"].map((section) => (
                        <p key={section} className={`inline-flex items-center gap-2 text-gray-600 group cursor-pointer ${
                                currentSection === section ? "text-gray-600 font-semibold" : ""
                            }`}
                            onClick={() => sectionNavigation(section)}>
                            <span className={`h-[3px] w-[45px] inline-block transition-all duration-300 
                                ${
                                    currentSection === section
                                        ? "bg-yellow-500 w-[60px]"
                                        : "bg-gray-300 group-hover:bg-yellow-500 group-hover:w-[60px]"
                                }`} 
                            />
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </p>
                    ))}
                </div>
                </div>

                <div className="w-[55%] mr-30 top-0 max-h-screen overflow-auto pr-6 text-justify text-gray-800">
                    <hr id="about" className="w-48 h-0 mt-0" />
                    <p className="mt-25"> I’m a full stack developer I’m a full stack developer who lives somewhere between the elegance 
                        of clean code and the chaos of late-night debugging sessions. I'm passionate about building seamless, end-to-end digital 
                        experiences that are as beautiful as they are functional. I thrive at the intersection of thoughtful design and scalable 
                        engineering — crafting applications that not only look polished but are architected for performance, maintainability, and 
                        accessibility. </p><br></br>
                    <p> Right now, I’m crafting code at <text className="text-gray-700 font-bold font-medium hover:text-amber-400 transition-all duration-300"> SAP Labs </text>, where I work across the stack to bring new features to life — from designing APIs
                        and managing data flows to refining user interfaces for clarity and usability. I also play an active role in maintaining our
                        component libraries and engineering standards to ensure consistency and efficiency across teams. </p><br></br>
                    <p> Over the years, I’ve had the chance to wear many hats — including a stint in the data science and machine learning world. 
                        I’ve always been fascinated by the power of data: how a few well-structured rows can unlock insights, drive decisions, 
                        and shape entire products. While my day-to-day now leans more into full stack engineering, my passion for data remains strong, 
                        and I make it a point to keep learning, experimenting, and staying connected to the field whenever I can. </p><br/>
                    <p> When I’m off the clock,  you’ll probably find me curled up with a good book, singing along to whatever’s playing (on or
                        off key — no promises), binging a podcast, or doting on my adorable fur baby who runs the household with zero apologies.</p><br></br> 
                    <hr id="experience" className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700 mt-0" />
                    
                    <Experience/>
                    {/* <hr id="skills" class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700 mt-0" />
                    
                    <Skills/> */}
                    <hr id="projects" className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700 mt-0" />
                    
                    <Projects/>

                    <p className="ml-5 mb-10 text-xs"> Design inspired by Brittany Chiang. Coded in Visual Studio Code. Built with React and Tailwind CSS, deployed with Vercel. </p>
                </div>
        </section>
    );
}

export default Home;