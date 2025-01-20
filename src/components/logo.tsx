import { motion } from "framer-motion"

export function Logo() {

  return (
    <motion.div layout="position" layoutId="card-logo" className="flex">
      <div
        style={{ 
          clipPath: 'inset(0 18px 0 0)', 
          boxShadow: `
          inset 0px 0px 10px rgba(255, 255, 255, 0.3),
          inset 10px 10px 10px rgba(0, 0, 0, 0.4)
          `,
        }} 
        className="h-9 w-9 bg-gray-500 rounded-tl-full rounded-bl-full"
      />
      <div
        className="flex flex-col relative -left-[14px] gap-1 justify-between"
      >
        <div
          style={{
            boxShadow: `
              inset 0px 0px 10px rgba(0, 0, 0, 0.6),
              inset 10px 10px 10px rgba(255, 255, 255, 0.3)
            `,
          }} 
          className="h-full w-4 aspect-square bg-gray-500"
        />
        <div
          style={{
            boxShadow: `
              inset 0px 0px 10px rgba(0, 0, 0, 0.6),
              inset 10px 10px 10px rgba(255, 255, 255, 0.3)
            `,
            }} 
          className="h-full aspect-square bg-gray-500"
        />
      </div>
    </motion.div>
  )
}