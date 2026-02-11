import React from 'react'


import PropertyTypesSection from './realtorscomponents/PropertyTypeSection'
import AboutSection from './realtorscomponents/AboutSection'
import PropertyListings from './realtorscomponents/PropertyListing'
import Footer from './homeComponents/Footer'
import SubmissionForm from './realtorscomponents/SubmissionForm'
function Realtors() {
  return (
    <div>
      
<PropertyTypesSection/>
<AboutSection/>
<PropertyListings/>
<SubmissionForm/>
<Footer/>
    </div>
  )
}

export default Realtors