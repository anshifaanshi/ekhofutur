import React from 'react'
import HeroSection from './realtorscomponents/HeroSection'
import NavBar from './homeComponents/ui/NavBar'
import PropertyTypesSection from './realtorscomponents/PropertyTypeSection'
import AboutSection from './realtorscomponents/AboutSection'
function Realtors() {
  return (
    <div>
        <NavBar/>
<PropertyTypesSection/>
<AboutSection/>
    </div>
  )
}

export default Realtors