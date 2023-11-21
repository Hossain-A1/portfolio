import Image from "next/image"

const Hero = () => {
  
  return (
    <section className="wrapper h-[calc(100vh-5rem)] mt-20">
      <div>
        <h1 className="">Transforming coding fervor into purposeful creations.</h1>
        <p>Hello and thank you for visiting my portfolio! I'm on a mission to showcase my passion for developing websites that excel in both delivering the best user experience and demonstrating technical prowess.</p>
      </div>

     <div className="h-full w-full">
      <Image src="/images/hero.jpeg" alt="hero picture" height={720} width={1080} className="h-full w-full " />
     </div>
     
    
    </section>
  )
}

export default Hero