import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"
import { Logo } from "./components/logo";

function App() {
  const [isExpended, setIsExpended] = useState(false) ;
  const toggle = () => setIsExpended(!isExpended) ;

  return (
    <section className="w-full h-dvh flex text-white justify-center items-center">
      <AnimatePresence mode="popLayout">
        {
          isExpended ?
          (
            <motion.div 
              onClick={toggle}
              layoutId="card-container"
              className="w-96 h-40 bg-black px-3 py-4 flex"
              style={{ borderRadius: 24 }}
            >
              <div className="flex-grow">
                <div className="flex items-center">
                  <Logo />
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: .2 } }}  
                    className="text-gray-500 relative -left-2 font-semibold"
                  >
                    Creatifly
                  </motion.h1>
                </div>
                <motion.section
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: .2 } }} 
                  className="mt-4 w-full h-10 grid grid-cols-2 font-light"
                >
                  <ul>
                    <li>Features</li>
                    <li>Work</li>
                    <li>Plans</li>
                  </ul>
                  <ul>
                    <li>Benefits</li>
                    <li>Services</li>
                    <li>FAQ</li>
                  </ul>
                </motion.section>
              </div>
              <div className="h-full aspect-square overflow-hidden relative flex justify-center items-center group">
                <motion.img
                  src="/picture.webp" 
                  layoutId="card-image" 
                  className="h-full aspect-square bg-gray-400"
                  animate={{ borderRadius: 12 }}
                />
                <div 
                  className="absolute opacity-0 cursor-pointer duration-150 ease-out delay-100 group-hover:delay-0 group-hover:duration-200 group-hover:opacity-100 inset-0 bg-black/60 flex items-center justify-center"
                >
                  <span 
                    className={clsx(
                      "opacity-0 translate-y-4 delay-100 group-hover:delay-0 duration-150 group-hover:duration-200 ease-out",
                      "group-hover:opacity-100 group-hover:translate-y-0"
                    )}
                  >
                    Book a Call
                  </span>
                </div>
              </div>
            </motion.div>
          )
          :
          (
            <motion.div 
              onClick={toggle}
              layoutId="card-container" 
              className="h-12 w-60 bg-black flex justify-between items-center px-3"
              style={{ borderRadius: 24 }}
            >
              <Logo />
              <div className="h-9 w-9 relative">
                <motion.img 
                  src="/picture.webp" 
                  layoutId="card-image" 
                  className="h-9 w-9 bg-gray-400"
                  initial={{ borderRadius: 8 }}
                  animate={{ borderRadius: 8 }}
                />
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </section>
  )
}

export default App
