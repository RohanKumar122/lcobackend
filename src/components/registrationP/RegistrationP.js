import React from 'react'
import"./Registration.css"
// import RP from "../../img/textp2.jpg"


const RegistrationP = () => {

  return (
    <section id='registration'>
      <div className='page3'>
     <div className='RPCount'>
    
     <div className='RPBoX2CONTAINER'>
     
      <div className='R-box2'>
        <div className='RBox-Title'>
          <h1>For Registration Directly
on Website</h1>
        </div>
<div className='R-item'>
<p className='pr'>Step-1 <span> Student has to Click on "NEW USER REGISTRATION" Tab</span></p>

<p>Step-2 On registration page student has to Select – No in the “Do You have Registration Number” field</p>

<p>Step-3 Students will enter First Name, Last Name, School Name, Date of Birth and Mobile Number to complete the registration process.</p>
<p>
Step-4 Student will get an OTP on mobile number</p>

<p>Step-5 Once the registration process is completed, the login credentials will be created for the students where the username would be the same as registration number and password will be the student’s date of birth.
</p>
<p>Step-6 Student can login to dashboard & can change their password at first login.
</p>
<p>Step-7 Student will have complete pending registration process & pay registration fees of Rs 150/-
</p>
<p>Step-8 Student will have to select slot for exam as per the availability of seats
</p>
<p>Step-9 Admit card will get generated. Student can download admit card from dashboard.
</p></div>




      </div>
     </div>
    

      <div className='R-box3'>
      {/* <img src={RP} alt="RP" className='RPIMG'/> */}
              
            </div>

      </div>

     </div>
    </section>


   
  )
}

export default RegistrationP