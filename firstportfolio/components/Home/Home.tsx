import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";

export default function Home() {
    return (
        <div className="overflow-hidden">
            <Hero/>
            <About/>
            <Project/>
            <Skills/>
            <Contact/>
        </div>
    )
}