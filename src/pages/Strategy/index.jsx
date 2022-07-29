import pic2 from "../../assets/images/contactImage.webp";
import strat2 from "../../assets/images/strat2.jpg";
import strat1 from "../../assets/images/strat1.jpg";
import strat3 from "../../assets/images/strat3.jpg";
import Puzzle from "../../assets/images/puzzle.jpg";
import "./index.scss";

const Strategy = () => {
  return (
    <div className="home strategy">
      <section className="top">
        <div className="overlay"></div>
        <div className="img">
          <img src={pic2} alt="" />
        </div>
        <div className="write_up">
          <h1>Investment Strategy</h1>
          {/* //   <p>We are waiting to hear from you...</p> */}
        </div>
      </section>
      <section className="intro">
        <em>
          The Collectives Capital Ventures core mission of protecting our
          investment partners’ capital begins with our sole focus on multifamily
          properties. The firm’s strategy focuses on improving Class B & C
          apartment communities in secondary and tertiary markets nationwide.
          Historically, multifamily has been the least volatile real estate
          asset class during downturns while still offering strong upside
          potential during upcycles. Within multifamily, Class B & C provides
          one of the most attractive investment opportunities due to the
          imbalance between the strong and growing demand and limited new supply
          of these units.
        </em>
        <div className="invest_Link">invest now</div>
      </section>
      <section
        style={{ background: "rgba(12,12,12,0.2)" }}
        className="img_write_up"
      >
        <div className="write_up">
          <h1>Acquisition Criteria</h1>
          <p>
            The following criteria is used to identify undervalued multifamily
            properties for acquisition, value optimizations, management and
            disposition.
          </p>
          <h2>MARKET SEGMENTS</h2>
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
          <h2>PROPERTY CRITERIA</h2>
          <ul>
            <li>Multifamily residential apartments</li>
            <li>Pitched roof construction preferred</li>
            <li>
              Occupancy above 80% with the exception of properties that require
              renovation, providing properties are well located and present
              value-add opportunities{" "}
            </li>
          </ul>
          <h2>TARGET VALUES</h2>
          <ul>
            <li>
              {" "}
              Size and Price: 50+ units in the $4MM – $50MM range Returns: 7-10%
            </li>
            <li>
              Cash on Cash, Minimum Debt Service Coverage ratio of 1.25 Type: C-
              to B+ properties located in C- to A areas Property Vintage: 1975
              or newer
            </li>
            <li>
              Location: Emerging market areas with indicators for strong near
              and long-term economic growth
            </li>
          </ul>
        </div>
        <div className="img">
          <img src={strat1} alt />
        </div>
      </section>
      <section className="img_write_up">
        <div className="img">
          <img src={strat2} alt="" />
        </div>
        <div className="write_up">
          <h1> Emerging Markets</h1>
          <p>
            {" "}
            Choosing the “right” multi-family apartment complex to acquire is a
            critical aspect of The Collectives Capital ventures investment
            strategy. We are diligent in our exploration and focus on
            opportunities in emerging markets, where jobs and local economies
            are expanding.
          </p>
          <h2>EMERGING MARKETS ARE CHARACTERIZED BY</h2>
          <ul>
            <li> People moving in, rather than leaving the area</li>
            <li> Jobs being created and moving in rather than lost</li>
            <li> Rents and property values rising</li>
            <li> Local government dedicated to attracting jobs</li>
            <li> Markets starting to absorb oversupply</li>
          </ul>
          <p>
            {" "}
            There are many indicators and a lot of research that goes into
            identifying an emerging market in the US. We start out by performing
            thorough market research that includes the following areas:
          </p>

          <ul>
            <li> Job Growth Report</li>
            <li> Population Growth</li>
            <li> Path of Progress Reports</li>
            <li> Local Economic Reports & Trends</li>
            <li> Chamber of Commerce Reports</li>
          </ul>
        </div>
      </section>
      <section style={{ background: "rgba(12,12,12,0.2)" }} className="img_write_up">
        <div className="write_up">
          <h1> Acquisition Practices</h1>
          <p>
            {" "}
           The collectives capital ventures takes pride in building
            relationships with local listing brokers to get their “pocket
            listings” and access to other Bank Owned Properties (REO). Our
            searches include soliciting owners directly instead of waiting for
            properties to come to market.
          </p>
          <p>
            {" "}
            Each asset undergoes a thorough due diligence process to confirm the
            physical and legal status of the property and to confirm valuations
            to ensure achievable investment strategies.
          </p>
          <p>
            {" "}
            Early in the asset evaluation phase, the debt and equity financing
            strategy is developed based on a number of factors such as property
            type, magnitude of renovations, expected hold period and investor
            objectives. Each asset is typically held 5-10 years depending on its
            exact business plan.
          </p>
          <h2>INVESTMENT DISCIPLINE</h2>
          <p>
            {" "}
            Asset selection involves a systematic, routine evaluation to
            identify favorable demand characteristics, i.e., job and population
            growth, demographic shifts, supply absorption rates and positive
            local legislation.
          </p>
          <p>
            {" "}
            Markets with supply constraints receive most favorable underwriting.
            Markets with signs of oversupply such as surplus land, changes in
            zoning and increases in building permits are avoided.
          </p>
        </div>
        <div className="img">
          <img src={strat3} alt="" />
        </div>
      </section>
      <section className="img_write_up">
        <div className="write_up">
       <h1> Path of Progress Strategy</h1>
<p> A Path of Progress is where the greatest amount of building and development is currently happening, or soon to be.</p>
<h2>
A PATH OF PROGRESS IS WHERE:
</h2>
 <ul> 
  <li> Properties rapidly shoot up in appreciation</li>
<li>Majority of new construction is going on</li>
<li>Families and individuals are moving into the area</li>
</ul>
<p>Investing in the Path of Progress yields the greatest returns in a short period of time.</p>

        </div>
        <div className="img">
          <img src={Puzzle} alt=""/>
        </div>
      </section>
    </div>
  );
};
export default Strategy;
