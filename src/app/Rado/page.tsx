// import React from 'react'

// const Rado = () => {
//  const Radodata=[
//     { id: 1, name: 'Rado', price: 5000, description: 'DiaStar Original Automatic', image: '/1.jpg' },
//     { id: 2, name: 'Rado', price: 4100, description: 'HyperChromo stainless', image: '/2.jpg' },
//     { id: 3, name: 'Rado', price: 3000, description: 'Integral Mens Watch', image: '/3.jpg' },
//     { id: 4, name: 'Rado', price: 3500, description: 'True Black CeramicStrap', image: '/4.jpg' },
//     { id: 5, name: 'Rado', price: 3800, description: 'Centrix Skeleton Dial', image: '/5.jpg' },
//     { id: 6, name: 'Rado', price: 4900, description: 'Centrix Two-Tone Stainless', image: '/6.jpg' }
  
//  ]
//     return (
//     <div style={{
//       backgroundImage: "url('/bg2.jpg ')", // Public folder ka path
//       backgroundSize: 'cover', // Image ko cover karne ke liye
//       backgroundPosition: 'center ', // Center mein position karne ke liye
//       height: '100vh', // Full viewport height
//       background:'transparent-400'
//     }}>
//         <div className='watches' >
//       {Radodata.map((watch)=>(
//         <div key={watch.id} className='watch-card'>
//         <img src={watch.image} alt={watch.name}/>
//         <h3>{watch.name}</h3>
//         <p>{watch.description}</p>  
//       <div className='price'>${watch.price}</div> 
//       <button>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//     </div>
//   )
// }

// export default Rado

import React from 'react'

const Rado = () => {
  const Radodata = [
    { id: 1, name: 'Rado', price: 5000, description: 'DiaStar Original Automatic', image: '/1.jpg' },
    { id: 2, name: 'Rado', price: 4100, description: 'HyperChromo stainless', image: '/2.jpg' },
    { id: 3, name: 'Rado', price: 3000, description: 'Integral Mens Watch', image: '/3.jpg' },
    { id: 4, name: 'Rado', price: 3500, description: 'True Black CeramicStrap', image: '/4.jpg' },
    { id: 5, name: 'Rado', price: 3800, description: 'Centrix Skeleton Dial', image: '/5.jpg' },
    { id: 6, name: 'Rado', price: 4900, description: 'Centrix Two-Tone Stainless', image: '/6.jpg' }
  ]

  return (
    <div>
            <div className='watches' >
        {Radodata.map((watch) => (
          <div key={watch.id} className='watch-card'>
            <img src={watch.image} alt={watch.name} />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className='price'>${watch.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      </div>

  )
}

export default Rado
