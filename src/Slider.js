import React from 'react'
import './Slider.css'
import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';

const Slider = () => {
  return (
    <div  >
    <Carousel className='carbody'>
    <Carousel.Item>
       <div className='slidercard'>
     
       <div className='cardddd'>
    <Card style={{ width: '18rem' }}>
    <Card.Img className='imggg' variant="top" src="https://img.wattpad.com/cover/124909537-176-k701272.jpg" />
    <Card.Body>
      
    
    <button className='cardbutton' type="button">Anthology</button>
      
    </Card.Body>
  </Card>
  </div>

  

  <div className='cardddd'></div>
  <Card style={{ width: '18rem' }}>
  <Card.Img className='imggg' variant="top" src="https://img.wattpad.com/cover/219755495-176-k320779.jpg" />
  <Card.Body>
    
  <button className='cardbutton' type="button">Awards</button>

  </Card.Body>
</Card>


<div className='cardddd'></div>
<Card style={{ width: '18rem' }}>
<Card.Img className='imggg' variant="top" src="https://img.wattpad.com/cover/304423870-352-k124656.jpg" />
<Card.Body>


<button className='cardbutton' type="button">Fear</button>
 
</Card.Body>
</Card>

</div>

      <Carousel.Caption>
        
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
     
    <div className='slidercard'>

    <div className='cardddd'></div>
    <Card style={{ width: '18rem' }}>
    <Card.Img  className='imggg' variant="top" src="https://img.wattpad.com/cover/344206105-176-k115343.jpg" />
    <Card.Body>
     
     
    <button className='cardbutton' type="button">Criminal</button>
      
    </Card.Body>
  </Card>

 

  <div className='cardddd'></div>
  <Card style={{ width: '18rem' }}>
  <Card.Img className='imggg' variant="top" src="https://img.wattpad.com/cover/300797477-176-k585250.jpg" />
  <Card.Body>
   
    
  <button className='cardbutton' type="button">Funny</button>
    
  </Card.Body>
</Card>

<div className='cardddd'></div>
<Card style={{ width: '18rem' }}>
<Card.Img className='imggg' variant="top" src="https://img.wattpad.com/cover/197604786-176-k277978.jpg" />
<Card.Body>
  
<button className='cardbutton' type="button">Powers</button>

</Card.Body>
</Card>

</div>

      <Carousel.Caption>
      
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      
   
    <div className='slidercard'>
        <div className='cardddd'>
    <Card style={{ width: '18rem' }}>
    <Card.Img className='imggg' variant="top" src="https://img.wattpad.com/cover/272025061-176-k848164.jpg" />
    <Card.Body>
     
    <button className='cardbutton' type="button">Lesbian</button>
      
    </Card.Body>
  </Card>
  </div>

  <div className='cardddd'>
  <Card style={{ width: '18rem' }}>
  <Card.Img className='imggg' variant="top" src="https://img.wattpad.com/cover/294965960-176-k61974.jpg" />
  <Card.Body>
    
   
  <button className='cardbutton' type="button">Fantasy</button>
   
  </Card.Body>
</Card>



</div>

<div className='cardddd'>
<Card style={{ width: '18rem' }}>
<Card.Img className='imggg' variant="top" src="https://img.wattpad.com/cover/197441310-176-k810134.jpg" />
<Card.Body>
 
<button className='cardbutton' type="button">Moments</button>

  
</Card.Body>
</Card>

<div className='carddddpan'>
<span>Find Your Next Read &#x1F934; &#128151;...</span>
</div>
</div>

</div>
      <Carousel.Caption>
      
        
      </Carousel.Caption>
    </Carousel.Item>

 
    

  </Carousel>
    </div>
  )
}

export default Slider
