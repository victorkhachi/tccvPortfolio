import pic2 from '../../assets/images/contactImage.webp'
import './index.scss'

 const Contact=()=>{
    return (
        <div className="home contact">
  <section className="top">
  <div className="overlay"></div>

        <div className="img">
          <img src={pic2} alt="" />
        </div>
        <div className="write_up">
          <h1>Get in Touch</h1>
          <p>We are waiting to hear from you...</p>
        </div>
      </section>

      <div className="contacts">
        <div className="schedule">
            <a className='invest_Link' href="mailto:">Schedule a call</a>
        </div>
        <div className="details">
            <p>Email Us: <a href='mailto:'>Email@example.com</a></p>

            <address>Call us : <a href='tel:'>082134567777</a></address>
        </div>
      </div>

      <div className="message">
        <h2>Ask a question</h2>
        <p>please complete this form, to ask a question </p>
        <form action="">
        <div>
               <label htmlFor="">
                <span>Name</span>
                <input type="text" />
               </label>
               <label htmlFor=""><span> Email</span>
               <input type="text" /></label>
        </div>
        <div>
               <label htmlFor="">
                <span>Phone Number</span>
                <input type="text" />
                </label>
               <label htmlFor="">
                <span>Others</span>
                <input type="text" />
               </label>
        </div>
        <label htmlFor="">
           <span>Inquiry note</span>
           <textarea name="" id="" cols="30" rows="10"></textarea>
        </label>

        <button>Submit</button>
        </form>
      </div>
        </div>
    )
}
export default Contact