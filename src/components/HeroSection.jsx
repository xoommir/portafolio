import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import WordRotator from "./WordRotator";

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-center lg:px-24 px-10 relative overflow-hidden font-sans">
      {/* Left Section */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="mb-6"
        >
          <span className="block text-lg md:text-xl lg:text-2xl font-medium text-white/80 mb-2">
            Hola, Soy Xomara
          </span>
          <span className="block text-2xl md:text-4xl lg:text-5xl font-extrabold text-violet-400 leading-tight">
            Estudiante de <span className="text-white">Diseño UX/UI</span>
          </span>
          <span className="flex items-baseline mt-4">
            <span className="text-lg md:text-xl lg:text-2xl font-medium text-white/80">
              con enfoque en
            </span>
            <span className="ml-4 text-xl md:text-2xl lg:text-3xl font-extrabold text-cyan-400 whitespace-nowrap">
              <WordRotator />
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xs md:text-sm lg:text-base text-purple-200 max-w-2xl mt-4"
        >

        </motion.p>
      </div>

      {/* Right Section */}
      <Spline className="absolute xl:right-[-1%] right-0 top-[-20%] lg:top-0" scene="https://prod.spline.design/xjQFy-JzKcwAc59B/scene.splinecode" />

    </section>
  )
}

export default HeroSection