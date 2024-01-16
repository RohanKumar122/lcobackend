import React from 'react'
import "./contact.css"
const contact = () => {
  return (
   <section id='contact'>
     <div>
        <div>

        <div className="contactcontainer">
  <div className="left">
    <div className="contactheader">
      <h2 className="animation a1">Ask Your Queries:</h2>
      <h4 className="animation a2">Log in to your account using email and password</h4>
    </div>
    <div className="form">
        <label >
        <select id="subject" name="subject" className='form-field animation '>
            <option value="general" className='form-field animation '>Select Subject:</option>
            <option value="general">Registration Related</option>
            <option value="support">Test Related</option>
            <option value="billing">Payment &Transaction</option>
          </select>	
           
        </label>
      <input type="email" className="form-field animation a3" placeholder="Email Address"/>
      <input type="email" className="form-field animation a3" placeholder="Phone number"/>
      <input type="password" className="form-field animation a4" placeholder="Password"/>
      <textarea id="formMessage" className="form-field animation a3" rows="7" placeholder="Mensagem"></textarea>

      <p className="animation a5"><a href="#">Forgot Password</a></p>

      <button className="animation a6">LOGIN</button>
    </div>
  </div>
  {/* <div className='contactCard'></div> */}
  <div className="right"></div>
</div>

</div>

    </div>
   </section>
  )
}

export default contact