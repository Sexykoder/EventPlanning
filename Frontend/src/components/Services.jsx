import React from 'react'

function Services() {
  const services = [
    {
      id: 1,
      url:"/birthday.jpg",
      title:"Matrimonial and Family Law",
    },
    {
      id: 2,
      url:"/anniversary.jpg",
      title:"Criminal Defense",
    },
    {
      id: 3,
      url:"/camping.jpg",
      title:"Corporate and Business Law",
    },
    {
      id: 4,
      url:"/gamenight.jpg",
      title:"Real Estate Law",
    },
    {
      id: 5,
      url:"/party.jpg",
      title:"Estate Planning and Probate",
    },
    {
      id: 6,
      url:"/wedding.jpg",
      title:"Personal Injury Law",
    },
  ];
  return (
    <>
     <div className='services container'>
        <h2>OUR SERVICES</h2>
        <div className='banner'>
          {
            services.map(element =>{
              return(
                <div className="item" key = {element.id}>
                 <h3>{element.title}</h3>
                 <img src={element.url} alt={element.title}/> 
                </div>
              )
            })
          }
        </div>
     </div> 
    </>
  )
}

export default Services
