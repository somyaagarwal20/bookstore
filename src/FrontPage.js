import React from 'react'
import CompopnentA from './CompopnentA';
import Crousel from './Crousel';
// import Header from './Header';
import Homepage from './Homepage';
import SeeYourStories from './SeeYourStories';
import Slider from './Slider';
import ComponentB from './ComponentB';
import Work from './Work';
import Lastcomponent from './Lastcomponent';

const FrontPage = () => {
    return (
        <div>

            <Homepage />
            <CompopnentA />
            <Work />
            <SeeYourStories />
            <Slider />
            <Crousel />
            <ComponentB />
            <Lastcomponent />
        </div>
    )
}

export default FrontPage
