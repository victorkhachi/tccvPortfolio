import { useRef, useState } from 'react'
import pic2 from '../../assets/images/contactImage.webp'
import './index.scss'

 const Contact=()=>{

  const formRef= useRef()
  const [formParams,setFormParams]=useState({})
    return (
        <div className="home contact">
  <section data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="top">
  <div className="overlay"></div>

        <div className="img">
          <img src={pic2} alt="" />
        </div>
        <div className="write_up">
          <h1>Get in Touch</h1>
          <p>We are waiting to hear from you...</p>
        </div>
      </section>

      <div   data-aos="flip-up" className="contacts">
        <div  data-aos="fade-left" className="schedule">
            <a className='invest_Link' href="mailto:michaelolly@thecollectivescapitalventures">Schedule a call</a>
        </div>
        <div  data-aos="fade-left" className="details">
            <p>Email Us: <a href='mailto:michaelolly@thecollectivescapitalventures.com'>Michaelolly@thecollectivescapitalventures.com</a></p>

            <address>Call us : <a href='tel:+1 (202) 855-1518'>+1 (202) 855-1518</a></address>
        </div>
      </div>

      <div className="message">
        <h2>Ask a question</h2>
        <p>please complete this form, to ask a question </p>
        <form action="">
        <div>
               <label htmlFor="">
                <span>Name</span>
                <input onChange={(e)=>setFormParams({...formParams,[e.target.name]:e.target.value})} name='name' type="text" />
               </label>
               <label htmlFor=""><span> Email</span>
               <input onChange={(e)=>setFormParams({...formParams,[e.target.name]:e.target.value})} type="email" /></label>
        </div>
        <div>
               <label htmlFor="">
                <span>Phone Number</span>
                <input name='phone' onChange={(e)=>setFormParams({...formParams,[e.target.name]:e.target.value})} type="number" />
                </label>
               <label htmlFor="">
                <span>Others</span>
                <input onChange={(e)=>setFormParams({...formParams,[e.target.name]:e.target.value})} name='others' type="tel" />
               </label>
        </div>
        <label htmlFor="">
           <span>Inquiry note</span>
           <textarea onChange={(e)=>setFormParams({...formParams,[e.target.name]:e.target.value})} name="note" id="" cols="30" rows="10"></textarea>
        </label>
        <button onClick={(e)=>{
              e.preventDefault()
              if(formParams?.name && formParams?.note) formRef.current.click()
            }}>submit</button>
            <a ref={formRef} style={{display:"none"}} href={`mailto:michaelolly@thecollectivescapitalventures.com?subject=from ${formParams.name}&body= Tel:
            ${formParams.phone}
            other:
            ${formParams.others}
            comment:
            ${formParams.note}
          `}></a>
        </form>
      </div>
        </div>
    )
}
export default Contact