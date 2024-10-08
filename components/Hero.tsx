import { FaLocationArrow } from "react-icons/fa"
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation"
import LitUpButton from "./ui/LitUpButton"
import { TextGenerateEffect } from "./ui/text-generate-effect"

const Hero = () => {
    return (
        <div>
            <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-b from-blue-500 to-purple-600">
                <BackgroundGradientAnimation>
                    <div className="relative z-10 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                        Landen's Portfolio
                        </p>
                    

                       
                        <div className='flex justify-center relative my-20 z-10'>
                            <div className='max-w-full sm:max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                                <TextGenerateEffect 
                                    className="text-center text-[24px] sm:text-[32px] md:text-5xl lg:text-6xl"
                                    words="Transforming Concepts into Seamless Experiences"
                                />
                            </div>
                        </div>

                        <a href='#about'>
                            <LitUpButton 
                                title="My Work"
                                icon={<FaLocationArrow />}
                                position='right'
                            />
                        </a>

                    </div>
                </BackgroundGradientAnimation>
            </div> 
        </div>
      )
}


export default Hero