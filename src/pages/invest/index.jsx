import {
  FaCoins,
  FaDollarSign,
  FaFileInvoiceDollar,
  FaHandHoldingUsd,
  FaLock,
  FaStackExchange,
} from "react-icons/fa";
import pic2 from "../../assets/images/contactImage.webp";
import "./index.scss";
import Pic5 from '../../assets/images/pic5.jpg'
import { useRef, useState } from "react";

const Invest = () => {
  const why = [
    {
      svg: <FaFileInvoiceDollar />,
      title: "Cashflow",
      writeup:
        "After all expenses are paid, quarterly distributions go out to investors.",
    },
    {
      svg: <FaLock />,
      title: "Stability",
      writeup:
        "TC Capital ventures is less volatile and continues to outperform traditional stock based investments.",
    },
    {
      svg: <FaStackExchange />,
      title: "Tax benefits",
      writeup:
        "Depreciation is a tax write-off that enables you to keep more of your profits.",
    },
    {
      svg: <FaHandHoldingUsd />,
      title: "Leverage",
      writeup:
        "You can leverage real estate, this allows you to buy a $10M property with only $2.5M.",
    },
  ];

   const formRef= useRef()
  const [formParams,setFormParams]=useState({})
  return (
    <div className="home invest">
      <section data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="top">
        <div className="overlay"></div>

        <div className="img">
          <img src={pic2} alt="" />
        </div>
        <div className="write_up">
          <h1>Invest With us</h1>
          <p>
            The Collectives Capital Ventures educates, partners, and invests
            alongside our investors, ensuring all decisions are made with their
            best interest first.
          </p>

          {/* <div className="invest_Link">
                Invest Now
            </div> */}
        </div>
      </section>
      <section className="intro">
        <div className="why_real_estate">
          <h1> Why Real estate</h1>

          <div className="why">
            {why.map((answers) => (
              <div className="item">
                <div>{answers.svg}</div>
                <h2>{answers.title}</h2>
                <p>{answers.writeup}</p>
              </div>
            ))}
          </div>
          <button
            style={{ border: "none", color: "white" }}
            className="invest_Link"
          >
            Start now
          </button>
        </div>

        <div className="form">
          <h2>Tell us about yourself</h2>
          <p>
            We’d love to share new offerings with you and begin a conversation
            about partnering with The Collectives Capital ventures
          </p>

          <p>Not sure if you are accredited?</p>

          <form action="">
            <p>Find out here</p>
            <label htmlFor="">
              <span>Name</span>
              <input onChange={(e)=>setFormParams({...formParams,[e.target.name]:e.target.value})} name='name' type="text" />
            </label>
            <label htmlFor="">
              <span>Email</span>
              <input onChange={(e)=>setFormParams({...formParams,[e.target.name]:e.target.value})} name="email" type="email" />
            </label>
            <label htmlFor="">
              <span>Phone</span>
              <input onChange={(e)=>setFormParams({...formParams,[e.target.name]:e.target.value})} name="phone" type="tel" />
            </label>
            <label htmlFor="">
              <span>Comment</span>
              <textarea onChange={(e)=>setFormParams({...formParams,[e.target.name]:e.target.value})} name="comment" id="" cols="30" rows="10"></textarea>
            </label>
            <button onClick={(e)=>{
              e.preventDefault()
              if(formParams?.name && formParams?.comment) formRef.current.click()
            }}>submit</button>
            <a ref={formRef} style={{display:"none"}} href={`mailto:michaelolly@thecollectivescapitalventures.com?subject=from ${formParams.name}&body= Tel:
            ${formParams.phone}
            comment:
            ${formParams.comment}
          `}></a>
          </form>
        </div>
      </section>

      <div className="aquisition_method">
        <div className="head">
          <div></div>
          <h1>OUR ACQUISITION METHOD</h1>
          <div></div>
        </div>

        <p>
          The Collectives Capital ventures core mission of protecting our
          investment partners’ capital begins with our sole focus on multifamily
          properties. The firm’s strategy focuses on improving Class B & C
          apartment communities in secondary and tertiary markets nationwide.
          Historically, multifamily has been the least volatile real estate
          asset class during downturns while still offering strong upside
          potential during upcycles. Within multifamily, Class B & C provides
          one of the most attractive investment opportunities due to the
          imbalance between the strong and growing demand and limited new supply
          of these units.
        </p>

        <div className="methods">
          <div>
            <h2>Market segments</h2>

            <ul>
              <li>
                {" "}
                Age: The 18-35 year old market segment is 22% of the U.S.
                population
              </li>
              <li> Income: Renters who earn $40,000 or more annually</li>
              <li> Price: Where rent is 30% or less of the median income</li>
              <li>
                Retiring Baby Boomers are scaling down and enjoying maintenance
                free multifamily living
              </li>
            </ul>
          </div>
          <div>
            <h2>Property criteria</h2>
            <ul>
              <li> Multifamily residential apartments</li>
              <li> Pitched roof construction preferred</li>
              <li>
                {" "}
                Occupancy above 80% with the exception of properties that
                require renovation, providing properties are well located and
                present value-add opportunities
              </li>
            </ul>
          </div>
          <div>
            <h2>Target values</h2>

            <ul>
              <li> Size and Price: 50+ units in the $4MM – $50MM range</li>
              <li>
                {" "}
                Returns: 7-10% Cash on Cash, Minimum Debt Service Coverage ratio
                of 1.25
              </li>
              <li> Type: C- to B+ properties located in C- to A areas</li>
              <li> Property Vintage: 1975 or newer</li>
              <li>
                {" "}
                Location: Emerging market areas with indicators for strong near
                and long-term economic growth
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="intro ">
        <div className="img">
          <img src={Pic5} alt="" />
        </div>
        <p>
          <h2>Acquisition Practices</h2>
          <p>
            {" "}
            Multi-Family Capital Partner’s, LLC takes pride in building
            relationships with local listing brokers to get their “pocket
            listings” and access to other Bank Owned Properties (REO). Our
            searches include soliciting owners directly instead of waiting for
            properties to come to market.
          </p>
          <h2> Investment Discipline</h2>
          <p>
            {" "}
            Asset selection involves a systematic, routine evaluation to
            identify favorable demand characteristics, i.e., job and population
            growth, demographic shifts, supply absorption rates and positive
            local legislation.
          </p>
          <h2> Value-Add Strategy</h2>
          Think of it as a business rather than a building. The more income it
          generates, the more it is worth. When we purchase an apartment
          complex, we are looking for specific opportunities to increase the
          cashflow in different areas. These are called “Value Plays” or “Value
          Adding Components”.
        </p>{" "}
      </section>
    </div>
  );
};
export default Invest;
