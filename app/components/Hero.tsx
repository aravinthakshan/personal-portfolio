// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Github, Linkedin, Brain, Code } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
//       {/* Background gradient */}
//       <motion.div
//         className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500/20 blur-[120px] rounded-full"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.5, 0.8, 0.5],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//         }}
//       />
//       <motion.div
//         className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/20 blur-[120px] rounded-full"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.5, 0.8, 0.5],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//           delay: 1,
//         }}
//       />

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="space-y-8"
//         >
//           <div className="space-y-2">
//             <motion.h2
//               className="text-lg text-indigo-400 font-medium"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               Hello! I'm
//             </motion.h2>
//             <motion.h1
//               className="text-5xl md:text-6xl font-bold gradient-text"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               A S Aravinthakshan
//             </motion.h1>
//             <motion.p
//               className="text-xl text-gray-400"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Machine Learning Engineer & Full Stack Developer
//             </motion.p>
//           </div>

//           <motion.div
//             className="flex gap-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             <motion.a
//               href="/about"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 bg-indigo-600 text-white rounded-lg flex items-center gap-2"
//             >
//               About Me
//             </motion.a>
//             <motion.a
//               href="/cv.pdf"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 bg-gray-800 text-white rounded-lg"
//             >
//               Download CV
//             </motion.a>
//           </motion.div>

//           <motion.div
//             className="flex gap-6 pt-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//           >
//             <motion.a
//               href="https://github.com/aravinthakshan"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2, color: "#6366F1" }}
//               className="text-gray-400 transition-colors"
//             >
//               <Github className="w-6 h-6" />
//             </motion.a>
//             <motion.a
//               href="https://linkedin.com/in/aravinthakshan"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2, color: "#6366F1" }}
//               className="text-gray-400 transition-colors"
//             >
//               <Linkedin className="w-6 h-6" />
//             </motion.a>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-3 gap-4 pt-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7 }}
//           >
//             {[
//               {
//                 icon: <Brain className="w-8 h-8 text-indigo-400 mb-2" />,
//                 title: "ML/AI",
//                 subtitle: "Deep Learning Expert",
//               },
//               {
//                 icon: <Brain className="w-8 h-8 text-indigo-400 mb-2" />,
//                 title: "Research ML",
//                 subtitle: "Machine Learning Research",
//               },
//               {
//                 icon: <Code className="w-8 h-8 text-indigo-400 mb-2" />,
//                 title: "Full Stack",
//                 subtitle: "MERN Developer",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 className="card-gradient p-4 rounded-lg"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 {item.icon}
//                 <h3 className="font-semibold">{item.title}</h3>
//                 <p className="text-sm text-gray-400">{item.subtitle}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="relative"
//         >
//           <div className="w-full h-full absolute -z-10 bg-indigo-500/20 blur-[120px] rounded-full" />
//           <motion.div
//             className="relative w-full aspect-square max-w-md mx-auto"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <Image
//               src="/profile-pic.jpeg"
//               alt="Profile"
//               fill
//               className="object-cover rounded-2xl"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Grid } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { Manrope } from "next/font/google"

const manrope = Manrope({ subsets: ["latin"] })

function SpinningLogo() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.5, 0.5, 0.5]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
      <mesh position={[-0.5, -0.5, -0.5]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#999999" />
      </mesh>
    </group>
  )
}

function AnimatedBox({ initialPosition }: { initialPosition: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(...initialPosition))
  const currentPosition = useRef(new THREE.Vector3(...initialPosition))

  const getAdjacentIntersection = (current: THREE.Vector3) => {
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]
    const randomDirection = directions[Math.floor(Math.random() * directions.length)]
    return new THREE.Vector3(current.x + randomDirection[0] * 3, 0.5, current.z + randomDirection[1] * 3)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newPosition = getAdjacentIntersection(currentPosition.current)
      newPosition.x = Math.max(-15, Math.min(15, newPosition.x))
      newPosition.z = Math.max(-15, Math.min(15, newPosition.z))
      setTargetPosition(newPosition)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useFrame((state, delta) => {
    if (meshRef.current) {
      currentPosition.current.lerp(targetPosition, 0.1)
      meshRef.current.position.copy(currentPosition.current)
    }
  })

  return (
    <mesh ref={meshRef} position={initialPosition}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ffffff" opacity={0.9} transparent />
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial attach="material" color="#000000" linewidth={2} />
      </lineSegments>
    </mesh>
  )
}

function Scene() {
  const initialPositions: [number, number, number][] = [
    [-9, 0.5, -9],
    [-3, 0.5, -3],
    [0, 0.5, 0],
    [3, 0.5, 3],
    [9, 0.5, 9],
    [-6, 0.5, 6],
    [6, 0.5, -6],
    [-12, 0.5, 0],
    [12, 0.5, 0],
    [0, 0.5, 12],
  ]

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Grid
        renderOrder={-1}
        position={[0, 0, 0]}
        infiniteGrid
        cellSize={1}
        cellThickness={0.5}
        sectionSize={3}
        sectionThickness={1}
        sectionColor={[0.5, 0.5, 0.5]}
        fadeDistance={50}
      />
      {initialPositions.map((position, index) => (
        <AnimatedBox key={index} initialPosition={position} />
      ))}
    </>
  )
}

export default function Component() {
  return (
    <div className={`relative w-full h-screen bg-black text-white overflow-hidden ${manrope.className}`}>
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center">
            <div className="w-20 h-20">
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <SpinningLogo />
              </Canvas>
            </div>
            <span className="text-2xl font-bold">ChainSwitch</span>
          </div>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-6xl font-bold mb-8 max-w-4xl mx-auto">A unified API for on-chain transactions</h1>
        <h2 className="text-xl mb-10">Route transactions from your dapp between L2 chains in real time</h2>
        <button className="bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition duration-300">
          Join waitlist
        </button>
      </div>
      <Canvas shadows camera={{ position: [30, 30, 30], fov: 50 }} className="absolute inset-0">
        <Scene />
      </Canvas>
    </div>
  )
}