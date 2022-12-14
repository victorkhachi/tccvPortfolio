import { Link } from "react-router-dom";
import "./index.scss";
import {
  FaBars,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Logo from '../../assets/images/Union.png'
const Navigation = ({ children }) => {
  let screenWidth = window.innerWidth;
  const [openNav, setOpenNav] = useState(false);
   
  const watchRef= useRef(null)
const [style,setStyle]=useState({})
const [navstyle,setNavstyle]=useState({})
  const callBack = (entries) => {
    const [entry] = entries;
    if(entry.isIntersecting){
        setStyle({})
        setNavstyle({})
    }
    else {setStyle({
        position:'fixed',
        boxShadow: '1px 1px 10px rgb(0 0 0 / 15%)',
        background:'rgba(255,255,255,0.5)',
        transition:'all linear .3s',
        

    })
     setNavstyle({color:'rgba(0,0,0,0.8)'})
}
  };
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    const target = watchRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [watchRef]);


  return (
    <>
      <div
        onClick={() => setOpenNav(!openNav)}
        className={openNav ? "slide_nav" : "slide_in"}
      >
        <div onClick={(e) => e.stopPropagation()} className="links">
          <Link  to={""}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/strat"}>Strategy</Link>
          <Link to={""}>Portfolio</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/faq"}>FAQ</Link>
          <Link to={"/invest"}>Invest</Link>
        </div>
      </div>
    <div className="navigation">
      {screenWidth > 700 && (
        <div id="top" className="header" style={style}>
          <div className="logo" style={{width:'50px'}}><img  style={{width:'100%'}} src={Logo} alt="" /></div>
          
          <nav>
            <Link style={navstyle} to={""}>Home</Link>
            <Link style={navstyle} to={"/about#top"}>About</Link>
            <Link style={navstyle} to={"/strat#top"}>Strategy</Link>
            <Link style={navstyle} to={""}>Portfolio</Link>
            <Link style={navstyle} to={"/contact#top"}>Contact</Link>
            <Link style={navstyle} to={"/faq#top"}>FAQ</Link>
            <Link style={navstyle} to={"/invest#top"}>Invest</Link>
          </nav>
        </div>
      )}
      {screenWidth <= 700 && (
        <div className="small_header" style={style}>
          <div className="logo" style={{width:'50px'}}><img  style={{width:'100%'}} src={Logo} alt="" /></div>
          <FaBars style={navstyle} onClick={() => setOpenNav(!openNav)} />
        </div>
      )}
      <div ref={watchRef}  className="watch">

      </div>
    
      {children}
      <Footer/>
    </div>
    </>
  );
};

export default Navigation;

const Footer = () => {
  const [message,setMessage]=useState()
  const linkRef=useRef()
  return (
    <div className="footer">
      <div className="stay_connected">
        <div className="overlay"></div>
        <h1>Send mail</h1>
        <p>send us a mail to make reservations and enquiries</p>
        <textarea onChange={(e)=>setMessage(e.target.value)} name="" id="" cols="30" rows="10"></textarea>

        <button onClick={()=>{
          
          if(message)linkRef.current.click()}}>Send mail</button>
        <a ref={linkRef} style={{display:'none'}} href={`mailto:michaelolly@thecollectivescapital?subject=Inquiry&body=${message}`}></a>
      </div>
      <main>
        <h1>Connect</h1>
        <div className="socials">
        {/* <a href=""> <FaInstagram /></a> */}
        {/* <a href=""> <FaTwitter /></a> */}
        {/* <a href="">  <FaEnvelope /></a> */}
        <a href="https://www.linkedin.com/in/oluchukwu-michael-223ba8246">  <FaLinkedin /></a>
        </div>
        <h1>Disclaimer</h1>
        <p>
         <span> No Offer of Securities???Disclosure of interests</span> under no circumstances
          should any material at this site be used or considered as an offer to
          sell or a solicitation of any offer to buy an interest in any
          investment. Any such offer or solicitation will be made only by means
          of the Confidential Private Offering Memorandum relating to the
          particular investment. Access to information about the investments are
          limited to investors who either qualify as accredited investors within
          the meaning of the Securities Act of 1933, as amended, or those
          investors who generally are sophisticated in financial matters, such
          that they are capable of evaluating the merits and risks of
          prospective investments.
        </p>
        
      </main>
      <div className="bottom">
        <div className="nav">
        <Link to={""}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"strat"}>Strategy</Link>
          <Link to={""}>Portfolio</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/faq"}>FAQ</Link>
          <Link to={"/invest"}>Invest</Link>
        </div>
        <p>Copyright The Collectives Capital ventures 2022 ?? Designed By <a href="linkedin.com/in/onyedikachi-obi"> Obi</a></p>
      </div>
    </div>
  );
};
