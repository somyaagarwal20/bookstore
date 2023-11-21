import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const Crousel = () => {
  return (
<div className='carousel'>

    <div className='smallcarousel'>
    <Carousel fade>
      <Carousel.Item>
      <div className='whitebook'>
       <img src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634566300i/59397330.jpg' alt='' />
       </div>
        <Carousel.Caption>
         
          <div className='bookspan'>
          <p>Once upon a future-time, in a city of steel, concrete, and Magick, a wicked queen trapped a mighty warrior with a curse ...
          In the tiny village of Somer, far from the city, Cherie knows nothing of the evil spell. Her home is a safe, Magickal place. The Fae travel freely along its roads, Magickal humans and animals are welcome, and everyone is hidden from the Queen’s sight by Jack Frost, the local ghost, who blurs the Queen’s mirror with snow and ice........</p>
          <span>written by- &nbsp;&nbsp;&nbsp; C. Gockel</span>
          <div className='button_car' >
          <a href='https://www.primevideo.com/' className='header_link' >
          <button  type="button">Start Reading</button>
          </a>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='whitebook'>
      <img src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1682138253i/136353294.jpg' alt='' />
      </div>
        <Carousel.Caption>
          
          <div className='bookspan'>
          <p>the series is now complete!   No man has ever managed to satisfy me—until Peter Pan carries me away to Neverland and now all bets are off…   I never thought that there is another reality beyond this one. My life is normal—work, routine, a few disappointing flings—when a man grabs me from the street and carries me off the Neverland. A madman. Granted, he probably saved my life, and the island he has brought me to is beautiful, the sights including three more hunks like him........</p>
          <span>written by - &nbsp;&nbsp;&nbsp;   Mona Black</span>
          <div className='button_car' >
          <a href='https://www.primevideo.com/' className='header_link' >
          <button  type="button">Start Reading</button>
          </a>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='whitebook'>
      <img src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1682084128i/123908902.jpg' alt='' />
      </div>
        <Carousel.Caption>
         
          <div className='bookspan'>
          
          <p>
          This was a good story and the spice was great! There was a lot of action and the whole “whodunnit” aspect with some twists thrown in. Now, I will say that I feel like the ending was rushed. After the murderer was discovered, and other stuff went down concerning Layla, the story kind of just jumped. I thought there would be a cliffhanger, but there isn’t one. I do wish that there was more about what happened in between because it left me with so many questions. Despite that, I enjoyed this story.......

          
          </p>
          <span>written by-&nbsp;&nbsp;&nbsp;  Melanie Kingsely</span>
          <div className='button_car' >
          <a href='https://www.primevideo.com/' className='header_link' >
          <button  type="button">Start Reading</button>
          </a>
          </div>
          </div>
         
        </Carousel.Caption>
        
      </Carousel.Item>
      <div className='arrow'>
      <div className='arowwwww'>
          <ArrowForwardIosRoundedIcon  className='carouselarrow'/>
          </div>
          </div>



          <div className='bear'>
<img src=' https://static.vecteezy.com/system/resources/previews/003/484/058/original/cute-polar-bear-cartoon-vector.jpg' alt='' />
</div>
          
    </Carousel>
    </div>
    </div>
  )
}

export default Crousel
