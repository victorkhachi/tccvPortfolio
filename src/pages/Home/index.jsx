import { FaCoins, FaDollarSign,FaFileInvoiceDollar, FaHandHoldingUsd, FaLock, FaStackExchange } from "react-icons/fa";
import PIC1 from "../../assets/images/pic1.jpg";
import PIC3 from "../../assets/images/pic3.jpg";
import "./index.scss";
const Home = () => {
  const why = [
    {
      svg: (
       <FaFileInvoiceDollar/>
      ),
      title:'Cashflow',
      writeup: "After all expenses are paid, quarterly distributions go out to investors.",
    },
    {
      svg: <FaLock/>,
      title:'Stability',
      writeup: "TC Capital ventures is less volatile and continues to outperform traditional stock based investments.",
    },
    {
      svg: <FaStackExchange/>,
      title:'Tax benefits',
      writeup: "Depreciation is a tax write-off that enables you to keep more of your profits.",
    },
    {
      svg: <FaHandHoldingUsd/>,
      title:'Leverage',
      writeup: "You can leverage real estate, this allows you to buy a $10M property with only $2.5M.",
    },
    {
      svg: <FaDollarSign/>,
      title:'Amortization',
      writeup: "Residents pay down debt which creates equity, this leads to long-term wealth.",
    },
    {
      svg: <FaCoins/>,
      title:'Appreciation',
      writeup: "Forced appreciation through strategic value plays increase the overall value of the property.",
    },
  ];
  return (
    <div className="home">
      <section className="top">
        <div className="img">
          <img src={PIC1} alt="" />
        </div>
        <div className="write_up">
          <h1>The Collectives Capital ventures</h1>
          <p>Achieve financial freedom through real estate investing.</p>
          <div draggable className="invest_Link">
            Invest with us
          </div>
        </div>
      </section>
      <section className="intro">
        <em>
          TC Capital Ventures, is a privately held investment company that
          focuses on the acquisition and management of opportunistic and
          value-add multi-family properties. We specialize in repositioning well
          located assets in emerging markets to protect investor capital and
          provide high yield returns.
        </em>
      </section>
      <section className="why_real_estate">
        <h1> Why Real estate</h1>

        <div className="why">
            {why.map(answers=>(
                <div className="item">
                    <div>{answers.svg}</div>
                    <h2>{answers.title}</h2>
                    <p>{answers.writeup}</p>
                </div>
            ))}
        </div>
         <button style={{border:"none",color:'white'}} className="invest_Link">Start now</button>
      </section>
      <section className="investment_plan top">
        <div style={{position:'static'}} className="img">
            <img src={PIC3} alt="" />
        </div>
        <div className="write_up">
        <h1>The Collectives Capital Ventures</h1>
        <p>Enjoy passive real estate income without the hassle of management.</p>
        <button style={{border:"none",color:'white'}} className="invest_Link">invest now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;