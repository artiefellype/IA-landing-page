
import {motion, useTransform, useScroll } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: "800"
})

export default function Home() {
  const {scrollYProgress } = useScroll();
  const scaleToMax = useTransform(scrollYProgress, [0,1], [1.6,2]);
  const scaleToMin = useTransform(scrollYProgress, [0,1], [2,1.3]);

  return (
    <>
      <section className="z-[0] h-screen bg-[#170309]"></section>
      <section id="container" className={` z-[1] h-screen bg-[#170309] ${poppins.variable} font-sans`}>


        <div id="wrapper" className={"w-[100vw] max-w-[1920px] max-h-[1080px] overflow-hidden bg-90 bg-no-repeat relative z-[0] aspect-[16/9] my-0 mx-auto text-center "}>


          <h1 id="text-mask" className="absolute w-full z-[6] m-0 text-[3rem] p-0 text-white top-1/2 translate-y-[-50%] text-center uppercase overflow-hidden">
            <span className="block">EXPLORE THE OPTIONS</span>
          </h1>

          <motion.div 
           id="bg" 
           className="w-full origin-center h-[100vh] absolute bg-[url('/img/caveUpscaleBackground.png')] z-[4] bg-50 bg-no-repeat bg-center">

          </motion.div>

          <motion.div 
            style={{
              scale: scaleToMax
            }}
           id="mountains" 
           className="w-full origin-center h-[100vh] absolute bg-[url('/img/fundoUpscaleBackground.png')] z-[2] mt-10 bg-30 bg-no-repeat bg-center">

          </motion.div>


          <motion.div 
            style={{
              scale: scaleToMin
            }}
            id="soldier" 
            className="w-full origin-center h-[100vh] absolute bg-[url('/img/explorerUpscaleBackground.png')] z-[5] bg-35 bg-no-repeat bg-center">

          </motion.div>

        </div>
      </section>
      <section className=" h-screen bg-[#170309]"></section>
      
    </>
  )
}
