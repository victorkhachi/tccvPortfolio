import pic2 from "../../assets/images/pic2.jpg";
import "./index.scss";

const About = () => {
  return (
    <div className="about home">
      <section data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="top">
      <div className="overlay"></div>

        <div className="img">
          <img src={pic2} alt="" />
        </div>
        <div className="write_up">
          <h1>About</h1>
        </div>
      </section>
      <section className="intro">
        <em>
          The number one factor in deal performance are the operators behind it
          and we are very conscious of this at The Collectives Capital ventures.
          Yes, we mitigate risks by leveraging our team of investment
          professionals to source fundamentally sound collective assets with
          value-add plays in markets with key economic factors that fuel growth.
          That helps if everything goes as planned, but problems are inevitable.
          <p>
            {" "}
            We feel our unique ability to problem solve is where the true value
            is found. At The collective capital ventures we are relentless in
            our pursuit to forecast and avoid problems. We’re even more
            relentless when it comes to solving them. This has earned the trust
            of our partners, lenders, property management companies and our
            residents. It’s also why you should feel confident investing your
            capital alongside our capital.
          </p>
        </em>
        <div className="invest_Link">Invest now</div>
      </section>
      <section className="core_value">
        <h1>Core Values</h1>
        <div className="values">
          <div   >
            <h2>Integrity</h2>
            <p>
             The collectives capital ventures conducts all business with the
              highest degree of professionalism and an obligation to act
              responsibly in a trustworthy and authentic manner. We place the
              interests of our partners and investors first as we act ethically,
              honestly and with full transparency in all our endeavors.
            </p>
          </div>
          <div  >
            <h2>Relationship</h2>
            <p>
             The collectives capital ventures goal is to foster meaningful
              relationships with our investment partners, industry colleagues
              and fellow team members. We continually focus on developing
              mutually beneficial business relationships.
            </p>
          </div>
          <div  >
            <h2>Excellence</h2>
            <p>
             The collectives capital ventures believes that excellence is not
              accidental; it is the result of our dedicated effort, hands-on
              approach and the vision to see challenges as opportunities. We
              provide solutions that are enterprising, pragmatic and effective.
            </p>
          </div>
          <div >
            <h2>Service</h2>
            <p>
             The Collectives Capital ventures is committed to outstanding
              communication and transparency. Our investment partners depend on
              us to consistently provide timely reports, accurate figures and
              strategic evaluations. We strive to exceed our partners’
              expectations through responsive reporting and optimal returns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
