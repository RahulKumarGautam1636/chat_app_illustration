import { BlogCard } from "../utils/cards";

const Blogs = () => {

    const blogItems = [
        { name: 'Tuhin S Kanjilal', img: 'person1.jpg', date: '8 May, 2015', subject: 'Case Studies : SAP FICO', comment: 'PARK DOCUMENT (FBV0)[fi] Park document is a functionality used in daily transactions.It updates the general ledger balances till final posting is completed. It can be used when there is no proper authorization to the user and he/she has to send to another user for confirmation of the document. It can be deleted,modifiable and may be rejected by the user. HOLD DOCUMENT (F-02)[fi] This document is required for functionality of day to day operation.it helps to suspend the work temporarily without losing any data. Manual Re posting of cost[co] It is the transaction which is wrongly posted to cost center and we want to correct it manually then re-posting of cost occurs. Distribution[co] Distribution is the method of allocation on which the original cost element send from sender cost center to receiver cost center'},
        { name: 'SIBSANKAR JANA', img: 'person2.jpg', date: '3 May, 2015', subject: 'Technical News : Interest calculation in G/L account', comment: 'in sap there are two type interest as 1. balance interest calculation 2. item interest calculation. in sap define those varient for - in case of balance interest calculation - S. and in case of item interest calculation - p. Balance interest calculation is prepaire in G/L account and item interest calculation is prepaired for vendor and customer.'},
        { name: 'ARUP SAHA', img: 'person3.jpg', date: '27 Apr, 2015', subject: 'Technical News : Interest calculation in G/L', comment: 'I am pleased to be working for such a high caliber IT Company. I am proud to say I learn from Versicle Institute of TechnologyIn SAP interest calculation are of 2 types 1. balance interest calulation 2 item interest calulation A system predetremined code is there for balance interest calulation it is "s" and for item interest calulation it is "p" . Balance interest calulation is done to calculate interest in G/L account. where as item interest calulation is used to calulate interest for customer and vendor. Code of interest in (ob46)'},
        { name: 'ANISH PARUA', img: 'person1.jpg', date: '3 May, 2015', subject: 'Article : Organizational Structure in SAP (sales & Distribution)', comment: 'An organization is divided into various units in an organization for smooth implementation of sales and distribution activities. 1)SALES ORGANIZATION It is a organizational unit of SAP-SD mode which is used to sell the goods or services in an organization. A sales organization must be assigned to a company code in SAP. 2)DISTRIBUTION CHANNEL A distribution channel falls under a sales organization that is used to supply the product and supply of an organization.It includes the Internet,wholesale,retail and direct sales. 3)DIVISION A division is an organizational unit in the SD module that is used to group products into various categories.In the SD module all the business transactions are linked to a specific division. 4)COMPANY CODE It is a legal entity which is responsible for entire business process.'},
    ]
    return (
        <section id="blogs" className="pt-md-0 pt-5 section-padding">
            <div className="container">
                <h2 className="heading-secondary">Blog posts</h2>
                <div className="blogs-container mt-5">
                    {blogItems.map((i, n) => <BlogCard blog={i} key={n} index={n} />)}


                </div>
            </div>
        </section>
    )
}

export default Blogs;