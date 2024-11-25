import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className='hero' style={{
      backgroundImage: "url('/bg1.jpg ')", // Public folder ka path
      backgroundSize: 'cover', // Image ko cover karne ke liye
      backgroundPosition: 'center ', // Center mein position karne ke liye
      height: '100vh', // Full viewport height
      background:'transparent-400'
    }}>
      <div>
        <h1 className='fade-in'>Welcome to Rado World</h1>
<p className='fade-in'>Your Own Shop of World No1 Branded Watches</p>
     <button>Shop Now</button>
      </div>
    </section>
    </div>
  )
}

export default Hero
