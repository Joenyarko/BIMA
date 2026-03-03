import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

const articlesData = {
    '1': {
        title: 'BIMA HONORS HARDWORKING EMPLOYEES',
        date: 'December 15, 2022',
        image: '/Employeeaward.jpg',
        content: [
            "BIMA, honored some of its hardworking employees at the maiden edition of the BIMA Quarterly Values Award (Q3) held at the company headquarters in Accra.",
            "Global Healthcare and Insure-tech provider, BIMA, has today honored some of its hardworking employees at the maiden edition of the BIMA Quarterly Values Award (Q3) held at the company headquarters in Accra.",
            "Account Officer, Bernard Lartey emerged as the ultimate winner with Judah Dadzie Mensah and Maud Dornukie Dugbartey winning the 1st and 2nd runner up positions respectively and were given plaques, cash prizes and an acknowledgement certificates.",
            "The award scheme recognised employees who are committed and dedicated to living and working that demonstrates the core values and morals of the company including, “think big and starting small, earning respect and giving respect and finally taking ownership”.",
            "Speaking at the ceremony, Country Manager of BIMA Ghana, Valerie Labi expressed gratitude to all the employees of the company who are working immensely towards achieving the vision and mission of the company.",
            "According to her, the quarterly event is not just to celebrate the achievement of the nominated staff, but also to give due regards to the values and strong morals which the awardees have exemplified.",
            "“To those of you receiving awards today, I also take this opportunity to say well done. Your energy continues to lift us forward and take us a step closer to realizing our potential as a business. I would like to use this wonderful opportunity to thank the HR for coming up with such a wonderful initiative”, she said.",
            "Valerie Labi took the opportunity to explain some of the growth and achievements of BIMA in the course of the year despite the pandemic.",
            "She said, the company has successfully launched the GSA and CPMS, inauguration of experience centers and about 10 centers across the country and integration with Vodafone and now have as a business the capacity to sell into all of Ghana’s major networks.",
            "Meanwhile, Bernard Lartey after receiving the overall winner award expressed his profound gratitude to God, his family and the entire BIMA staff for their unflinching support towards the growth of the company.",
            "To him, ” great determination and focus is what has brought him this far”.",
            "As part of BIMA’s Customer centricity Agenda, BIMA in partnership with GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit) has launched ten (10) Customer Experience Centers in Chorkor, Suame, Ejisu, Madina, Tema, Cape Coast , Sunyani , Tarkwa etc to bring customer service and claims to the door step of customers."
        ]
    },
    '2': {
        title: 'BIMA WIN AT THE GHANA INSURANCE AWARD 2020',
        date: 'August 28, 2020',
        image: '/GIA-Awards_Jpeg-400x284.jpg',
        content: [
            "BIMA wins Mobile Insurance Leadership Award and Initiative Award at the Ghana Insurance Awards 2020.",
            "BIMA Ghana, the leading provider of mobile delivered insurance and telemedicine services, has scooped the prestigious Mobile Insurance Leadership Award for the third time running as well as the Claims Initiative Award during the 2020 edition of the Ghana Insurance awards. The annual Ghana Insurance awards took place at the Kempinski Hotel, Gold Coast City Accra on the 29th of August.",
            "Since BIMA’s entry into the Ghanaian market in 2010, it has been disrupting the insurance landscape by providing affordable and easily accessible insurance and telemedicine services to over 2.5 million Ghanaians. In just 2 minutes, customers can register for BIMA products through a paperless process and pay from just 0.3$ per month through their mobile device, to be covered in case of hospitalization, accident or loss of life.",
            "The Mobile Insurance Leadership Award rewards BIMA for the third time for its unremitting commitment to improve financial inclusion in Ghana as the company released new products covering up to twelve family members for less than 3$ a month in 2020.",
            "Damien Gueroult, Country Manager for BIMA Ghana, commented “We are particularly proud to win the Claims Award for our Claims on Wheels initiative. Claims is the moment of truth for insurance providers and we believe that having our claims team travel into our customers’ communities and process their claims on-the-spot is a great way to create trust and battle the idea that claiming is necessarily a long and painful process.”",
            "Under the Claims on wheels initiative, BIMA-branded vans travel three times a week into residential areas in Accra, Kumasi and Takoradi where BIMA’s customers mostly reside, to provide re-education on the insurance policies and enable customers to claim without having to travel to a BIMA office.",
            "Together with BIMA’s fully digital claims process enabling customers to claim from the comfort of their home, the Claims On Wheels initiative also contributed to BIMA’s payment of 65,000 claims since inception worth over Ghc26 million to customers in need."
        ]
    },
    '3': {
        title: 'BIMA GHANA DISRUPTS THE INSURANCE INDUSTRY',
        date: 'May 10, 2020',
        image: '/news-featured-image-400x284.jpg',
        content: [
            "BIMA GHANA DISRUPTS THE INSURANCE INDUSTRY WITH NOVEL AND INNOVATIVE PRODUCTS",
            "BIMA, the country’s leading provider in mobile delivered health and insurance services, unveiled its new B-Health and B-Life insurance policies during an official launch held at the BIMA Head office in Alajo. BIMA has pioneered the use of mobile phones to deliver insurance products to the underserved population in Ghana since 2010. BIMA continues to innovate in the insurance space, using technology to ensure easy and affordable access to insurance and health services to every Ghanaian.",
            "Damien Gueroult, Country Manager of BIMA Ghana commented during the ceremony, “we have been serving the informal sector for the past 10 years. During this time, we realized that our customers’ needs go far beyond providing support with hospitalization and funeral costs. Our customers want easy access to doctors and assistance with casual health expenses from their insurance company. They also want cash-backs when they do not make claims. With this insight, we were able to provide our customers with what they want through our new B-Health and B-Life policies. This makes us the company of choice for all Ghanaians when it comes to protecting their family against unforeseen circumstances”.",
            "With the B-Health policy, customers and their families have unlimited access to qualified medical practitioners over the phone, cash support for purchasing medicine and a cash payout of up to Ghc 1,500 when admitted to the hospital. The Chief Medical Officer at BIMA Dr Sunu, along with his team of qualified medical practitioners are excited and passionate at the prospect of this affordable and time saving service. It allows Ghanaians especially in the informal sector, to access quality medical help when they need it without losing out on their daily earnings. Precious time spent commuting long distances and waiting for hours at clinics before accessing health care is over. Beyond a typical hospital admission cover, B-Health offers a one-stop health solution, where customers can opt for health coaching programs, receive e-prescriptions via SMS and enjoy discounts when referred to BIMA’s partnered network of over sixty laboratories and hospitals.",
            "The B-Life policy provides financial relief against funeral expenses and the loss of income due to permanent disabilities. Customers can receive a lump sum payment of up to Ghs10,000 if any of the insured incidents occur. In addition, customers who thankfully do not suffer any loss or injury, are rewarded with a yearly cash-back to encourage them to continue contributing to their insurance and to stay covered.",
            "These policies are underwritten by Allianz Life Ghana and premiums are priced at Ghc 6 or Ghc 10 per month. Payments can be made conveniently via any AirtelTigo Money and MTN Mobile Money wallet.",
            "Michael Acolatse, BIMA’s Head of Mobile Money commented that “the recent surge in mobile money penetration and usage is a true enabler for BIMA. Not only is it a convenient mode of payment for our customers, but it also enables us to refund customers, pay claims and send cash support in a quick, secure and paperless manner”.",
            "In attendance to the launch was the CEO of Allianz Insurance, Gideon Ataraire. He lauded the company’s partnership with BIMA saying “We are proud to partner with BIMA to bring these two innovative products to the market. For a long time, telemedicine was only accessible to wealthy customers in developed countries. Through products like B-Health, Ghanaians will be able to truly leapfrog their access to healthcare for as little as Ghc 6.”",
            "Mr Kofi Andoh, the Deputy Commissioner of the National Insurance Commission during the event, commented that mobile-delivered insurance has played a key role in raising the insurance coverage in the country. He is glad to see companies like BIMA thinking out-of-the box and continuing to bring innovations to the insurance sector that help strengthen financial inclusion in Ghana."
        ]
    },
    '4': {
        title: 'AIRTELTIGO PARTNERS BIMA',
        date: 'February 5, 2020',
        image: '/atpartner.jpg',
        content: [
            "AIRTELTIGO PARTNERS BIMA TO DEEPEN INSURANCE INCLUSION IN GHANA",
            "Ghana’s second-largest mobile operator, AirtelTigo, has partnered with BIMA, the country’s leading provider of mobile delivered health and insurance services to provide customers with access to simple and affordable insurance products and rapidly widen insurance inclusion in Ghana.",
            "The AirtelTigo Insurance programme covers over 2 million lives in Ghana. The policies provide life, hospital or accidental cover for a customer and one family member for as low as 10 pesewas daily. Furthermore, customers can now process their claims digitally from the comfort of their home using WhatsApp.",
            "“We are very proud of our role as a key development partner with BIMA to offer great solutions to Ghanaians. The new partnership with BIMA further consolidates our financial inclusion proposition and marks another innovation in the Ghanaian telecom industry,” said Murthy Chaganti, the Chief Operating Officer of AirtelTigo Ghana, at the opening of BIMA’s new head office in Alajo, a suburb of Accra.",
            "Mr. Chaganti highlighted the company’s long-term commitment to reaching the uninsured population through mobile insurance, adding that “through this partnership, affordable and easy-to-use insurance solutions will be used to help Ghanaians countrywide”.",
            "With BIMA’s mobile insurance technology, customers can sign up for insurance and health services from their mobile phones and pay premiums through small daily payments. The model created in Ghana has since scaled-up to 15 markets across Africa, Asia and Latin America, reaching 26M subscribers worldwide.",
            "“We are pleased to celebrate this milestone with our partners AirtelTigo and Prudential Life”, said Damien Gueroult, Country Manager of BIMA Ghana. “From our start in 2010 with a dozen of employees to this day, BIMA has been a true Ghanaian success story. This partnership and the inauguration of our new office opens a new page of expansion for BIMA in Ghana”.",
            "Mr Gueroult also thanked the regulators, particularly the National Insurance Commission and the Bank of Ghana, without the supervision of which mobile-delivered insurance wouldn’t be a success in Ghana. Mr Seth Eshun, Head of Supervision of the National Insurance Commission said that “the accessibility and affordability of AirtelTigo Insurance products has played a key role in helping drive the insurance coverage rate in Ghana from 8% in 2010 to about 30% in 2017”.",
            "Speaking at the event, Emmanuel Mokobi Aryee, the Chief Executive Officer of Prudential Life Insurance Ghana, the underwriter, disclosed that over 35,000 customers have received payouts worth over GHS15 million since the beginning of the partnership. “We are proud of dispelling some of the doubts about insurance and delivering value to customers when they undergo challenging times by paying claims promptly” Mr. Mokobi Aryee told the gathering."
        ]
    }
};

const NewsArticle = () => {
    const { id } = useParams();
    const article = articlesData[id];

    if (!article) {
        return (
            <div className="page-container" style={{ paddingTop: '100px', textAlign: 'center', paddingBottom: '4rem' }}>
                <h1 className="heading-lg mt-5">Article Not Found</h1>
                <p className="mt-3 mb-4 text-muted">The article you are looking for does not exist.</p>
                <Link to="/news" className="btn btn-primary">
                    <ArrowLeft size={18} /> Back to News
                </Link>
            </div>
        );
    }

    return (
        <div className="page-container fade-in" style={{ paddingTop: '100px' }}>
            <section className="section bg-light" style={{ padding: '4rem 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <Link to="/news" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>
                        <ArrowLeft size={18} /> Back to News & Awards
                    </Link>
                    <h1 className="heading-lg mb-3" style={{ color: 'var(--primary-dark)' }}>{article.title}</h1>
                    <p className="text-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
                        <Calendar size={18} /> {article.date}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="glass-panel" style={{ padding: '3rem', borderRadius: '1rem', background: 'white', border: 'none', boxShadow: 'var(--shadow-md)' }}>
                        {article.image && (
                            <div style={{ marginBottom: '2.5rem', borderRadius: '0.75rem', overflow: 'hidden' }}>
                                <img src={article.image} alt={article.title} style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover' }} />
                            </div>
                        )}
                        {article.content.map((paragraph, index) => (
                            <p key={index} className="mb-3 text-main" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsArticle;
