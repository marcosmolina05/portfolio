// next iamhe
import Image from "next/image";

// component
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import WhatsappButton from "../components/WhatsappButton";


// framer motion
import {motion} from "framer-motion";

// variants
import {fadeIn} from "../variants";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

const Home = () => {
  return <div className="bg-primary/80 h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-right 
  xl:big-no-repeat w-full h-full absolute translate-z-0">
    {/* text */}
     <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30
    to-black/10">
      {/* particles*/}
      <ParticlesContainer />
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
      h-full container mx-auto">
        {/* title */}
        <motion.h1           
        variants={fadeIn("down", 0.3)} 
        initial="hidden" 
        animate="show" 
        exit="hidden" 
        className="h1">
          Impulsa Tu <br/>Precensia  
          <span className="text-accent">Digital</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p         
            variants={fadeIn("down", 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            >
            Convierte tus Ideas en Realidad con Soluciones Profesionales y Creativas para Potenciar tu Marca en Internet
            </motion.p>
            {/* bnt */}
            <div className="z-10 flex justify-center xl:hidden relative">
              <ProjectBtn/>
            </div>
            <motion.div 
            variants={fadeIn("down", 0.5)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            className="hidden xl:flex"
            >
              <ProjectBtn/>
              </motion.div>
        </div>
      </div>
      {/* image */}
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      {/* bg image */}
      {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right 
      xl:big-no-repeat w-full h-full absolute translate-z-0 ">
      </div> */}
      {/* avatar img */}      
      <motion.div  variants={fadeIn("up", 0.5)} 
        initial="hidden" 
        animate="show" 
        exit="hidden" 
        transition={{ duration: 1, ease: "easeInout" }}
        className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32
      lg:bottom-0 lg:right-[8%]">  
      <Avatar />
      </motion.div>            
      <motion.div  variants={fadeIn("up", 0.5)} 
        initial="hidden" 
        animate="show" 
        exit="hidden" 
        transition={{ duration: 1, ease: "easeInout" }}
        className="w-full h-full max-w-[150px] max-h-[180px] absolute bottom-0
      lg:bottom-0 lg:right-[0%]">  
      <WhatsappButton/>
      </motion.div>            
    </div>
  </div>;     
};

export default Home;