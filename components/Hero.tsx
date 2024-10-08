import { BackgroundBeams } from "./ui/background-beams"
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision"
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation"
import { LampDemo } from "./ui/lamp"
import { TextGenerateEffect } from "./ui/text-generate-effect"

const Hero = () => {
    return (
        <div>
            <div className="fixed inset-0 z-0 w-full h-full bg-gradient-to-b from-blue-500 to-purple-600">
                {/* <LampDemo className='-top-40 left-10 
                md:-left-32 md:-top-20 h-screen z-10' /> */}
                {/* <BackgroundBeamsWithCollision className='-top-40 -left-10 
                md:-left-32 md:-top-20 h-screen' /> */}
                {/* <BackgroundBeams className='-top-40 left-10 
                md:-left-32 md:-top-20 h-screen' /> */}
                <BackgroundGradientAnimation>
                    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                        Landen's Portfolio
                        </p>
                    </div>

                    
                </BackgroundGradientAnimation>
            </div>
           
            
            
            
        </div>
      )
}

export default Hero