import "./index.scss";
import Img from "../../assets/images/contactImage.webp";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

const Faq = () => {
  const questions = [
    {
      question: "WHAT TYPE OF ACCOUNTS CAN I INVEST THROUGH?",
      answer:
        "Typical investment accounts are as individuals, joint accounts, tenancy in common, entity accounts (Trusts, Limited Liability Companies, Limited Partnerships, C Corporations, S Corporations) and individual retirement accounts (more info on IRA’s / 401k’s below,",
    },
    {
      question: "CAN I INVEST THROUGH MY IRA?",
      answer:
        "Yes, you can invest through your IRA. If you currently have a self-directed IRA, please check with your current custodian to ensure that they will allow you to place your investment with MF Capital Partners. If you haven’t converted from a traditional IRA to a a self-directed IRA you’ll need to contact a custodian to help you with that. If you need a referral we can connect you with the group we use personally.",
    },
    {
      question: "WHAT IS A K-1?",
      answer:
        "As a partner in the LLC that purchases the properties, you will receive a K-1. A K-1 is a tax form used by partnerships to provide investors with detailed information on their share of a partnership’s taxable income. Partnerships are generally not subject to federal or state income tax, but instead issue a K-1 to each investor to report his or her share of the partnership’s income, gains, losses, deductions and credits. The K-1s are provided to investors on an annual basis so that each investor can include K-1 amounts on his or her tax return.",
    },
    {
      question: "WHAT IS A SOPHISTICATED INVESTOR?",
      answer:
        "A Sophisticated Investor doesn’t meet the requirements of an Accredited Investor but they have investor experience. This could mean the person believes they have sufficient knowledge and experience in financial and business matters to evaluate the merits and risks of the prospective investment.",
    },
    {
      question: "DO I HAVE TO BE AN ACCREDITED INVESTOR TO INVEST?",
      answer:
        " No. We currently have investment opportunities that are open to accredited and sophisticated investors. You’ll need to register to view our current offerings.",
    },
    {
      question: "HOW FREQUENTLY ARE DISTRIBUTIONS MADE?",
      answer: "Distributions are planned quarterly.",
    },
    {
      question: "WHAT EXACTLY ARE THE FUNDS USED FOR?",
      answer:
        "Investor funds are used for the total acquisition cost of the property. This includes but is not limited to the down payment for the actual purchase of the property, acquisition fees, legal and transaction costs, capital improvements, and reserves.",
    },
    {
      question: "CAN I VISIT THE PROPERTY?",
      answer:
        " Absolutely! Investors are allowed to visit the property before investing and during the life of the project. If you give us a heads up we can make someone is there to show you around and answer any questions.?",
    },
  ];

  const cat1 = [
    {
      term: "Apartment Syndication",
      def: "An apartment syndication is a temporary professional financial services alliance formed for the purpose of handling a large apartment transaction that would be hard or impossible for the entities involved to handle individually, which allows companies to pool their resources and share risks and returns. In regards to apartments, a syndication is typically a partnership between general partners (i.e. the syndicator) and the limited partners (i.e. the investors) to acquire, manage and sell an apartment community while sharing in the profits.",
    },
    {
      term: "Accredited Investor",
      def: "An accredited investor is a person that can invest in securities (i.e. invest in an apartment syndication as a limited partner) by satisfying one of the requirements regarding income or net worth. The current requirements to qualify are an annual income of $200,000 or $300,000 for joint income for the last two years with expectation of earning the same or higher or a net worth exceeding $1 million either individually or jointly with a spouse.",
    },
    {
      term: "Sophisticated Investor",
      def: "A sophisticated investor is a person who is deemed to have sufficient investing experience and knowledge to weigh the risks and merits of an investment opportunity.",
    },
    {
      term: "General Partner (GP)",
      def: "The general partner (GP) is an owner of a partnership who has unlimited liability. A general partner is also usually a managing partner and active in the day-to-day operations of the business. In apartment syndications, the GP is also referred to as the sponsor, syndicator, or operator. The GP is responsible for managing the entire apartment project.",
    },
    {
      term: "Limited Partner (LP)",
      def: "The limited partner (LP) is a partner whose liability is limited to the extent of the partner’s share of ownership. In apartment syndications, the LP is the passive investor and funds a portion of the equity investment.",
    },
    {
      term: "Capital Expenditures (CAPEX)",
      def: "Capital expenditures, typically referred to as CapEx, are the funds used by a company to acquire, upgrade and maintain an apartment community. An expense is considered to be a capital expenditure when it improves the useful life of an apartment and is capitalized – spreading the cost of the expenditure over the useful life of the asset.Capital expenditures include both interior and exterior renovations.Examples of exterior CapEx are repairing or replacing a parking lot, repairing or replacing a roof, repairing, replacing or installing balconies or patios, installing carports, large landscaping projects, rebranding the community, new paint, new siding, repairing or replacing HVAC and renovating a clubhouse.Examples of interior CapEx are new cabinetry, new countertops, new appliances, new flooring, opening up or enclosing a kitchen, new light fixtures, interior paint, plumbing projects, new blinds and new hardware (i.e. door knobs, cabinet handles, outlet covers, faucets, etc.).Examples of things that wouldn’t be considered CapEx are operating expenses, like the costs associated with turning over a unit (i.e. paint, new carpet, cleaning, etc.), ongoing maintenance and repairs, ongoing landscaping costs, payroll to employees, utility expenses, etc",
    },
    {
      term: "Operating Expenses",
      def: `Operating expenses are the costs of running and maintaining the property and its grounds.For example, here are operating expenses for our 415 unit apartment community:

Taxes	($167,387)
Insurance	($103,750)
Repairs & Maintenance	($181,850)
General / Admin	($48,680)
Management	($106,290)
Utilities	($118,591)
Marketing	($31,125)
Contract Services	($41,085)
Payroll	($253,980)
Reserves	($103,750)
Asset Management	($48,548)
Total Expenses	($1,205,036)
`,
    },
    {
      term: "Debt Service",
      def: `Debt service is the annual mortgage paid to the lender, which includes principal and interest. Principal is the original sum lent and the interest is the charge for the privilege of borrowing the principal amount.

For example, a $19,800,000 loan with 5.50% interest amortized over 30 years results in a debt service of $1,349,067 annually and $112,422.25 per month.`,
    },
    {
      term: "Net Operating Income (NOI)",
      def: `Net operating income (NOI) is all revenue from the property minus operating expenses, excluding capital expenditures and debt service.
For example, a 415 unit apartment community with a total income of $3,033,229 and total operating expenses of $1,032,109 has a NOI of $2,001,120.`,
    },
    {
      term: "Capitalization Rate(CAP RATE)",
      def: `Capitalization rate, typically referred to as cap rate, is the rate of return based on the income that the property is expected to generate. The cap rate is calculated by dividing the property’s net operating income (NOI) by the current market value or purchase price of a property (NOI / Current market value = Cap Rate)

For example, a 415 unit property with an NOI of $2,001,120 that was purchased for $24,750,000 has a cap rate of 8.09%.

`,
    },
    {
      term: "Price per unit",
      def: `Price per unit is the cost of purchasing an apartment community based on the purchase price and the number of units. The price (or cost) per unit is calculated by dividing the purchase price by the number of units.

For example, a 415 unit apartment community purchased for $24,750,000 has a price per unit of $59,639.`,
    },
    {
      term: "Cash Flow",
      def: `Cash flow is the revenue remaining after paying all expenses. Cash flow is calculated by subtracting the operating expense and debt service from the collected revenue

For example:

Total Income	$1,859,729
Total Operating Expense	$1,107,452
Debt Service	$571,080
Asset Mgmt Fee	$40,170
Cash Flow	$141,027
`,
    },
    {
      term: "Closing Costs",
      def: `Closing costs are the expenses, over and above the price of the property, that buyers and sellers normally incur to complete a real estate transaction.

Examples of closing costs are legal fees, insurance, survey, recording fees, 3rd party reports, title endorsements, utility deposit, and due diligence fees.`,
    },
    {
      term: "Financing Fees",
      def: "Financing fees are the one-time, upfront fees charged by the lender for providing the debt service. Also referred to as loan points or loan point cost. Typically, the financing fees are 1% to 2% of the loan amount.",
    },
    {
      term: "Capital Reserves Account",
      def: "The capital reserves account is a reserves fund, over and above the price of the property, to cover things like unexpected dips in occupancy, lump sum insurance or tax payments or higher than expected capital expenditures. The capital reserves account is typically created by raising extra money from the limited partners.",
    },
    {
      term: "Equity Investments",
      def: "The equity investment is the upfront costs for purchasing an apartment community, which includes the down payment for a loan, closing costs, financing fees, capital reserves account, and the various fees paid to the general partner for putting the deal together. May also be referred to as the total raise.",
    },
    {
      term: "Sales Proceed",
      def: `
The sales proceeds are the profit collected at the sale of the apartment community.

For example, here is a how the sales proceeds are calculated for a 415 unit apartment community purchased at $24,750,000 and sold after a five year value-add business plan:

Exit NOI	$2,670,812
Exit Cap Rate	7%
Exit Price	$38,154,455
Sales Expense	($2,098,495)
Remaining Debt	($19,800,000)
Sales Proceeds	$16,255,960`,
    },
    {
      term: "Internal Rate of Return",
      def: `The internal rate of return (IRR) is the rate, expressed as a percentage, needed to convert the sum of all future uneven cash flow (cash flow, sales proceeds and principal pay down) to equal the equity investment. IRR is one of the main factors the passive investor should focus on when qualifying a deal.

A very simple example is let’s say that you invest $100. The investment has cash flow of $10 in year 1, and $40 in year 2. At the end of year 2, the investment is liquidated and the $100 is returned.

The total profit is $50 ($10 year 1 + $40 year 2).

Simple division would say that the return is 50% ($50/100). But since time value of money (two years in this example) impacts return, the IRR is actually only 23.43%.

If we had received the $50 cash flow and $100 investment returned all in year 1, then yes, the IRR would be 50%. But because we had to “spread” the cash flow over two years, the return percentage is negatively impacted.

The timing of when cash flow is received has a significant and direct impact on the calculated return. In other words, the sooner you receive the cash, the higher the IRR will be.`,
    },
    {
      term: "Cash on Cash (CoC)",
      def: `The cash-on-cash (CoC) return is the rate of return, expressed as a percentage, based on the cash flow and the equity investment. CoC return is calculated by dividing the cash flow by the initial investment.

For example, a 415 unit apartment community with a cash flow of $694,934 and an initial investment of $6,804,625 results in a CoC return of 10.21%

`,
    },
    {
      term: "Equity Multiplier",
      def: `Equity Multiplier (EM) is the rate of return based on the total net profit (cash flow plus sales proceeds) and the equity investment. EM is calculated by adding the sum of the total net profit and the gross cash flow and dividing it by the equity investment.

For example, if the limited partners invested $3,645,170 into an apartment community with a 5-year gross cash flow of $2,020,165 and total proceeds at sale of $6,003,028, the EM is ($2,020,165 +$ 6,003,028) / $3,645,170 = 2.2.

`,
    },
    {
      term: "The Market Rent",
      def: "The market rent is the rent amount a willing landlord might reasonably expect to receive, and a willing tenant might reasonably expect to pay for a tenancy, which is based on the rent charged at similar apartment communities in the area. Market rent is typical calculated by performing a rent comparable analysis.",
    },
    {
      term: "Gross Potential Rent",
      def: "The gross potential rent (GPR) is the hypothetical amount of revenue if the apartment community was 100% leased year-round at market rental rates.",
    },
  ];

  const cat2 = [
    {
      term: "Gross Potential Income",
      def: `The gross potential income is the hypothetical amount of revenue if the apartment community was 100% leased year-round at market rates plus all other income.

For example, an apartment community with a GPR of $202,692 and monthly other income of $15,258 from late fees, pet fees and a RUBS program has a gross potential income of $217,950 per month.`,
    },
    {
      term: "Loss To Lease (LTL)",
      def: `Loss to lease (LtL) is the revenue lost based on the market rent and the actual rent. LtL is calculated by taking the gross potential market rent and subtracting the gross scheduled rents.

For example, a 415 unit apartment community with a gross potential market rent of $3,958,680 and gross scheduled rents of $3,166,944 has a LtL of $791,736.`,
    },
    {
      term: "Bad Debt",
      def: "Bad debt is the amount of uncollected money a former tenant owes after move-out.",
    },
    {
      term: "Concessions",
      def: "Concessions are the credits (dollars) given to offset rent, application fees, move-in fees and any other revenue line time, which are generally given to tenants at move-in.",
    },
    {
      term: "Model Unit",
      def: "A model unit is a representative apartment unit used as a sales tool to show prospective tenants how the actual unit will appear once occupied.",
    },
    {
      term: "Employee Unit",
      def: "An employee unit is a unit rented to an employee at a discount.",
    },
    {
      term: "Vacancy Rate",
      def: `The vacancy rate is the rate of unoccupied units. The vacancy rate is calculated by dividing the total number of unoccupied units by the total number of units.

For example, a 100 unit apartment community that has 10 vacant units has a vacancy rate of 10%`,
    },
    {
      term: "Vacancy Loss",
      def: `Vacancy loss is the amount of revenue lost due to unoccupied units.

For example, a 100 unit apartment community that has 10 vacant units that rent for an average of $800 per unit per month has a vacancy loss of $96,000 per year.`,
    },
    {
      term: "Effective Gross Income",
      def: `Effective gross income (EGI) is the true positive cash flow of an apartment community. EGI is calculated by the sum of the gross potential rent and the other income minus the income lost due to vacancy, loss-to-lease, concessions, employee units, model units and bad debt.

For example, if an apartment community has a gross potential rent of $2,432,304, loses $145,938 due to vacancy (6% vacancy rate) and $149,561 in credit costs (loss-to-lease, concessions, employee units, model unit, bad debt, etc.) and collects $183,096 in other income, then EGI is $2,319,901.`,
    },
    {
      term: "Economic Vacancy",
      def: `The economic vacancy is the rate of tenants who are living at the apartment but not paying you to live there. The economic vacancy is calculated by dividing the actual revenue collected by the gross scheduled rents.`,
    },
    {
      term: "Breakeven Occupancy",
      def: "Breakeven occupancy is the occupancy rate required to cover the all of the expenses of an apartment community. The breakeven occupancy rate is calculated by dividing the sum of the operating expenses and debt service by the gross potential income.",
    },
    {
      term: "The Physical Occupancy Rate",
      def: "physical occupancy rate is the rate of occupied units. The physical occupancy rate is calculated by dividing the total number of occupied units by the total number of units.",
    },
    {
      term: "The Gross Rent Multiplier (GRM)",
      def: `The gross rent multiplier (GRM) is the number of years the apartment would take to pay for itself based on the gross potential rent (GPR). The GRM is calculated by dividing the purchase price by the annual GPR.
For example, a 415 unit apartment community purchased for $24,750,000 with a GPR of $3,958,680 has a GRM of 6.25.
`,
    },
    {
      term: "Rent Premium",
      def: "A rent premium is the increase in rent after performing renovations to the interior or exterior of an apartment community. The rent premium is an assumption made by the general partner during the underwriting process based on the rental rates of similar units in the area or previously renovated units.",
    },
    {
      term: "The Debt Service Coverage Ratio (DSCR)",
      def: `The debt service coverage ratio (DSCR) is a ratio that is a measure of the cash flow available to pay the debt obligation. DSCR is calculated by dividing the net operating income by the total debt service. A DSCR of 1.0 means that there is enough net operating income to cover 100% of the debt service. Ideally, the ratio is 1.25 or higher. An apartment with a DSCR too close to 1.0 is vulnerable, and a minor decline in cash flow would result in the inability to service (i.e. pay) the debt.
`,
    },
    {
      term: "Interest Rate",
      def: "The interest rate is the amount charged, expressed as a percentage of principal, by a lender to a borrower for the use of their funds.",
    },
    {
      term: "Interst-Only Payment",
      def: "An interest-only payment is the monthly payment on a loan where the lender only requires the borrower to pay the interest on the principal as opposed to the typical debt service, which requires the borrower to pay principal plus interest.",
    },
    {
      term: "London Interbank Offered Rate",
      def: "The London Interbank Offered Rate (LIBOR) is a benchmark rate that some of the world’s leading banks charge each other for short-term loans. LIBOR serves as the first step to calculating interest rates on various loans, including commercial loans, throughout the world.",
    },
    {
      term: "Bridge Loan",
      def: `A bridge loan is a mortgage loan used until a person or company secures permanent financing, which are short-term (6 months to three years with the option to purchase an additional 6 months to two years). They generally have a higher interest rate and are almost exclusively interest-only. Also referred to as interim financing, gap financing or swing loan. The loan is ideal for repositioning an apartment community.`,
    },
    {
      term: "Permanent Agency Loan",
      def: "A permanent agency loan is a long-term mortgage loan secured from Fannie Mae or Freddie Mac and is longer-term with lower interest rates compared to bridge loans. Typical loan term lengths are 5, 7 or 10 years amortized over 20 to 30 years.",
    },
    {
      term: "Prepayment Penalty",
      def: "A prepayment penalty is a clause in a mortgage contract stating that a penalty will be assessed if the mortgage is paid down or paid off within a certain period.",
    },
    {
      term: "Refinance",
      def: "A refinance is the replacing of an existing debt obligation with another debt obligation with different terms. In apartment syndication, a distressed or value-add general partner may refinance after increasing the value of a property, using the proceeds to return a portion of the limited partner’s equity investment.",
    },
  ];
  const cat3 = [
    {
      term: "Appreciation",
      def: "Appreciation is an increase in the value of an asset over time. There are two main types of appreciation: natural and forced. Natural appreciation occurs when the market cap rate “naturally” decreases. Forced appreciation occurs when the net operating income is increased (either by increasing the revenue or decreasing the expenses).",
    },
    {
      term: "Residential Utility Billing System (RUBS)",
      def: "Residential Utility Billing System (RUBS) is a method of calculating a tenant’s utility bill based on occupancy, apartment square footage or a combination of both. Once calculated, the amount is billed back to the resident, which results in an increase in revenue.",
    },
    {
      term: "Property and Neighbourhood Class ",
      def: <><p> Property and neighborhood classes is a ranking system of A, B, C, or D given to a property or a neighborhood based on a variety of factors. These classes tend to be subjective, but the following are good guidelines:
</p>
   <h2> Property Classes</h2>
    <ul>
   <li> Class A: new construction, command highest rents in the area, high-end amenities</li>
   <li> Class B: 10 – 15 years old, well maintained, blue & white collar tenant</li>
   <li> Class C: built within the last 25 years, shows age, blue collar tenant</li>
   <li> Class D: over 30 years old, no amenity package, low occupancy, needs work</li>
    </ul>
   <h2> Neighborhood Class</h2>
    <ul>
<li>Class A: most affluent neighborhood, expensive homes nearby, maybe have a golf course</li>
<li>    Class B: middle class part of town, safe neighborhood</li>
<li>   Class C: low-to-moderate income neighborhood</li>
<li>   Class D: high crime, very bad neighborhood</li>
    </ul>
    </>
    ,
    },
    {
      term: "Preferred Return:",
      def: (
        <p>
          <b>Preferred Return:</b>, 'the threshold return that limited partners
          are offered prior to the general partners receiving payment.
        </p>
      ),
    },
    {
      term: "Distributions",
      def: (
        <p>
          <b> Distributions</b> are the limited partner’s portion of the
          profits, which are sent on a monthly, quarterly or annual basis, at
          refinance and/or at sale.
        </p>
      ),
    },
    { term: "profit and loss statement", def: <p>The profit and loss statement is a document or spreadsheet containing detailed information about the revenue and expenses of the apartment community over the last 12 months. Also referred to as a trailing 12-month profit and loss statement or a T12.</p> },
    {
      term: "submarket ",
      def: (
        <>
          <p>The submarket is a geographic subdivision of a market.</p>
          <p>For example, Mooresville is a submarket of Charlotte.</p>
        </>
      ),
    },
    {
      term: "metropolitan statistical area (MSA) ",
      def: (
        <p>
          A metropolitan statistical area (MSA) is a geographical region
          containing a substantial population nucleus, together with adjacent
          communities having a high degree of economic and social integration
          with that core, which are determined by the United States Office of
          Management and Budget (OMB).
        </p>
      ),
    },
    {
      term: " exit strategy ",
      def: (
        <p>
          The exit strategy is the plan of action for selling the apartment
          community at the end of the business plan.
        </p>
      ),
    },
    {
      term: "asset management fee",
      def: (
        <p>
          The asset management fee is an ongoing annual fee from the property
          operations paid to the general partner for property oversight.
          Generally, the fee is 2% of the collected income.
        </p>
      ),
    },
    {
      term: "property management fee",
      def: (
        <p>
          The property management fee is an ongoing monthly fee paid to the
          property management company for managing the day-to-day operations of
          the property. This fee ranges from 2% to 8% of the total monthly
          collected revenues of the property, depending on the size of the deal.
        </p>
      ),
    },
    {
      term: "refinancing fee",
      def: (
        <p>
          The refinancing fee is a fee paid for the work required to refinance
          the property. At closing of the new loan, a fee of 0.5% to 2% of the
          total loan amount is paid to the general partner.
        </p>
      ),
    },
    {
      term: "guaranty fee",
      def: (
        <p>
          {" "}
          The guaranty fee is a fee paid to a loan guarantor at closing. The
          loan guarantor guarantees the loan. At closing of the loan, a fee of
          0.25% to 1% of the principal balance of the mortgage loan is paid to
          the loan guarantor.
        </p>
      ),
    },

    {
      term: " private placement memorandum",
      def: (
        <p>
          The private placement memorandum (PPM) is a document that outlines the
          terms of the investment and the primary risk factors involved with
          making the investment. The four main sections are the introduction,
          which is a brief summary of the offering, the basic disclosures, which
          includes general partner information, asset description and risk
          factors, the legal agreement and the subscription agreement.
        </p>
      ),
    },
    {
      term: "subscription agreement",
      def: (
        <p>
          {" "}
          A <b>subscription agreement</b> is an agreement between a company and
          investor(s) that sets out the price and terms of a purchase of shares
          in the company. The subscription agreement details the rights and
          obligations associated with the share purchase.
        </p>
      ),
    },
  ];
  return (
    <div className="home faq">
      <section data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="top">
        <div className="overlay"></div>
        <div className="img">
          {" "}
          <img src={Img} alt="" />
        </div>
        <div className="write_up">
          <h1>Educate.PARTNER.INVEst</h1>
        </div>
      </section>

      <section className="questions">
        <h1>FAQ</h1>

        <div className="questions">
          {questions.map((question) => (
            <QnA {...question} />
          ))}
        </div>
        </section>
        <section className="key_terms">
          <h1>Key terms</h1>
          <div className="categories">
            <div className="cat">
              {cat1.map((cat) => (
                <QnA question={cat.term} answer={cat.def} />
              ))}
            </div>
            <div className="cat">{cat2.map(cat=>(<QnA question={cat.term} answer={cat.def}/>))}</div>
            <div className="cat">{cat3.map(cat=>(<QnA question={cat.term} answer={cat.def}/>))}</div>
          </div>
        </section>
     
    </div>
  );
};

export default Faq;

const QnA = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="qna">
      <div
        onClick={() => setOpen(!open)}
        className={`question ${open ? "selected" : ""}`}
      >
        {open ? <FaAngleUp /> : <FaAngleDown />}
        <p>{question}</p>
      </div>
      {open && <div className="answer">{answer}</div>}
    </div>
  );
};
