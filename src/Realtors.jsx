import React from 'react'
import HeroSection from './realtorscomponents/HeroSection'
import NavBar from './homeComponents/ui/NavBar'
import PropertyTypesSection from './realtorscomponents/PropertyTypeSection'
import AboutSection from './realtorscomponents/AboutSection'
import PropertyListings from './realtorscomponents/PropertyListing'
import Footer from './homeComponents/Footer'
import SubmissionForm from './realtorscomponents/SubmissionForm'
function Realtors() {
  return (
    <div>
        <NavBar/>
<PropertyTypesSection/>
<AboutSection/>
<PropertyListings/>
<SubmissionForm/>
<Footer/>
    </div>
  )
}

export default Realtors