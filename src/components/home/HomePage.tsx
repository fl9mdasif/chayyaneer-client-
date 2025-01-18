'use client'
import { Box } from "@mui/material"
import Hero from "./Hero"
import AboutUs from "@/app/about/page"
import Services from "@/app/services/page"
import Counter from "./counter"
// import Projects from "../projects/Projects"
import PreviousWork from "./PreviousWork"
import Projects from "@/app/projects/Projects"

const HomePage = () => {

    return (
        <Box>
            <Hero />
            <Counter />
            <Projects />
            <PreviousWork />
            <AboutUs />
            <Services />
        </Box>
    )
}
export default HomePage