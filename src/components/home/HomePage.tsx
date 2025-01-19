'use client'
import { Box } from "@mui/material"
import Hero from "./Hero"
import AboutUs from "@/app/about/page"
import Counter from "./counter"
import PreviousWork from "./PreviousWork"
import Projects from "@/app/projects/page"

const HomePage = () => {

    return (
        <Box>
            <Hero />
            <Counter />
            <Projects />
            <PreviousWork />
            <AboutUs />
        </Box>
    )
}
export default HomePage