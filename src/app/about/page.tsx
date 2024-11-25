import React from 'react'

const about = () => {
  return (
    <div>
      <section className='about' style={{
      backgroundImage: "url('/bg2.jpg ')", // Public folder ka path
      backgroundSize: 'cover', // Image ko cover karne ke liye
      backgroundPosition: 'center ', // Center mein position karne ke liye
      height: '100vh', // Full viewport height
      background:'transparent-400'
    }}>
        <div className='about-content'>
            <h2 className='fade-in'>About Us</h2>
            <p className='fade-in'>Rado watches are renowned for their innovative designs and high-tech materials, blending elegance with durability. Known for their use of ceramic, titanium, and other advanced materials, Rado creates timepieces that are both lightweight and scratch-resistant, offering long-lasting quality. With a commitment to modern aesthetics and precision, Rado watches appeal to those seeking a stylish yet practical accessory, often pushing the boundaries of traditional watchmaking to create unique, durable, and cutting-edge timepieces.</p>
        </div>
      </section>
    </div>
  )
}

export default about
