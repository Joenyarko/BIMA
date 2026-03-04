import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    // Scroll to top when loaded
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page fade-in">
            {/* Simple Hero/Header */}
            <section className="section" style={{ background: 'var(--primary)', color: 'white', padding: '4rem 0' }}>
                <div className="container text-center">
                    <h1 className="heading-lg" style={{ color: 'white', marginBottom: '1rem' }}>Privacy Policy</h1>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem' }}>BIMA – GHANA</p>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                    <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        We at BIMA (Milvik Ghana Limited and other companies in the BIMA group) are committed to protecting our customers’ privacy. This Privacy Policy explains how we handle your personal information and any personal information you give us about someone else, such as a member of your family or a beneficiary in the sections below, we describe:
                    </p>
                    <ul className="mb-4" style={{ paddingLeft: '2rem', lineHeight: '1.8' }}>
                        <li>what personal information we collect</li>
                        <li>how we use and handle personal information, and</li>
                        <li>who we share personal information with.</li>
                    </ul>
                    <p className="mb-5" style={{ lineHeight: '1.8' }}>
                        We also give you information about your legal rights and how to contact us.
                        <br /><br />
                        We may update our Privacy Policy from time to time. If we do this, we will post our new Privacy Policy on this webpage, which will take effect the day it is posted as set out at the bottom of this document.
                    </p>

                    <h3 className="mb-3" style={{ color: 'var(--primary)', fontWeight: '700' }}>Collection of personal information</h3>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        Personal information means any information that relates directly or indirectly to an individual who is identified or identifiable either from that information or from that information and other information in the possession of the information user. Certain personal information is classified as sensitive personal information. This includes any personal information about an individual’s physical or mental health or condition, their political opinions, their religious or other similar beliefs and their commission or alleged commission of any offence. The use of personal information under this Privacy Policy may be refreshed at or before the passing of twelve (12) months after the first collection of such, and always complying with applicable laws. BIMA shall take all appropriate steps to ensure the personal information it collects is accurate, complete, not misleading and up to date and having regard to the purpose, including any directly related purpose, for which the personal information was collected and further processed. When you register with BIMA to buy one of our products or our services, use one of our products or services or ask us for information about our products and services, you are voluntarily providing us with your personal information, which BIMA will collect and use. This information may include sensitive personal information. You may provide us with information as a result of visiting our website, through replies to our advertisements on other networks, and through application forms, telephone calls, text messages, emails, claim forms or other means of communication. Your first contact with BIMA may also start because we have been given your contact details by one of our business partners (for example, your mobile phone company) as a result of marketing permissions you have given them. Sometimes you may give us personal information about another person if this is relevant, for example to tell us about your family members who you want to have access to our mobile health services or who you want to benefit from a life insurance policy if you die. If you provide us with personal information about someone else, we will assume you are entitled to give it to us, including having obtained their permission if necessary. If you need to get another person’s permission, you should share this Privacy Policy with such persons so they understand how we will handle their personal information.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>General identification and contact information</h4>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        We collect general identification and contact information about you and other relevant individuals when you register with us for any of our products and services. This may include your or their: name, email address, telephone number, gender, marital status, date of birth, educational background, confirmation of your medical condition, and national identity number. For other relevant individuals, we may collect information about their relationship to you. We will also collect further personal information depending on which product and/or services you use and how you are paying us for them.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Insurance products and services</h4>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        When you register for insurance products and services, we collect financial information about you in connection with your payment of premiums. This will include whether you are paying premiums using airtime you have bought from your Mobile Phone Company or details of your electronic wallet account if you pay us electronically. Alternatively, if we send you invoices, we will collect information about the bank account or other method you used to make the payment. We will also collect information about you and other relevant individuals if you or a beneficiary make a claim under your policy. This will include information we ask for in support of the claim, for example, a death certificate if the claim is under a life insurance policy or a hospital report if the claim is under a critical illness policy. If we accept the claim, we will also obtain relevant bank account details so that we can make the appropriate payment under the policy.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Mobile health products and services</h4>
                    <p className="mb-5" style={{ lineHeight: '1.8' }}>
                        When you use a mobile health product, we will collect and record sensitive personal information about you. This will include the information you give our doctors in the course of medical consultations, for example about your medical history and health status or about your religious beliefs because this is relevant to the medical treatment you want. It will also include information that results from your consultations, such as any prescriptions that our doctors issue or the results of medical tests that they organize. If you also buy mobile health services for someone else, such as a member of your family, we will also collect and record sensitive personal information in the same way about them when they use the service.
                    </p>

                    <h3 className="mb-3" style={{ color: 'var(--primary)', fontWeight: '700' }}>Use and handling of personal information</h3>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        BIMA is committed to using and handling personal information in accordance with applicable data protection laws.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Business operations</h4>
                    <p className="mb-3" style={{ lineHeight: '1.8' }}>
                        We use personal information, including sensitive personal information that we receive where you have consented to such and or where this is necessary in order to meet your needs and the needs of other relevant individuals, to perform our contractual obligations and to provide a quality service. In particular, we collect and use personal information for the purposes of:
                    </p>
                    <ul className="mb-4" style={{ paddingLeft: '2rem', lineHeight: '1.8' }}>
                        <li>Responding to requests about BIMA products and services and assessing your eligibility for them</li>
                        <li>Registering you and other relevant individuals for products and services you buy</li>
                        <li>Assessing your eligibility for payment plans and processing your premium and other payments</li>
                        <li>Making decisions in relation to any products and services you buy, including assessing, processing and settling claims</li>
                        <li>Sending you important information about changes to any products and services you buy and other administrative information</li>
                        <li>Communicating with you and others in the conduct of our business operations</li>
                        <li>Administering any competitions, prize draws or similar promotions that you participate in</li>
                        <li>Resolving complaints and acting on requests for copies of personal information or its correction</li>
                        <li>Complying with our obligations under applicable laws and regulations, including obligations relating to the prevention of money-laundering and terrorism, or responding to requests from governmental or regulatory authorities</li>
                        <li>Establishing and defending our legal rights and the legal rights of third parties such as insurers</li>
                        <li>Managing our infrastructure and business operations in line with our internal policies and procedures, including those relating to auditing; finance and accounting; billing and collections; IT systems; data and website hosting; business continuity; and records, document and print management</li>
                        <li>Obtaining professional advice, and</li>
                        <li>Protecting your vital interests, for example in the case of an emergency</li>
                    </ul>
                    <p className="mb-5" style={{ lineHeight: '1.8' }}>
                        Where we may use automated decision making procedures and profiling activities we will provide specific information regarding the purpose and extent of any such processing, including, where applicable, the automated processing of your personal information for profiling, or processing for direct marketing, and data sharing.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Marketing</h4>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        We use personal information about potential customers that we receive from our business partners to ask them if they are interested in our products and services. In order to improve the products and services BIMA others, we also use personal information to carry out market research and analysis, including profiling activities where we will provide you with information about such.
                        <br /><br />
                        Unless you have told us that you do not wish to receive marketing communications from us, we may also use your personal information in order to provide direct marketing information to you about other products and services (including products and services ordered by our business partners) if we think these products and services are suitable for you.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Telephone records</h4>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        We record our telephone conversations with our customers and potential customers. We do this so that we have evidence of their requirements and for quality assurance purposes.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Security</h4>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        BIMA takes its information security responsibilities very seriously. We take appropriate technical, physical and organizational security measures to prevent the loss, misuse, modification, unauthorized or accidental access or disclosure, alteration or destruction of personal information. This includes limiting access to personal information within our systems to relevant staff, encrypting sensitive personal information when it is transferred and putting appropriate legal agreements in place internally and or with external service providers to ensure personal information continues to receive an adequate level of protection. However, transmission of data over the internet and data storage systems are never completely secure. If you think that someone might have accessed your personal information improperly, you should tell us immediately. We tell you below how you can contact us to do this.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Retention</h4>
                    <p className="mb-5" style={{ lineHeight: '1.8' }}>
                        We take all reasonable steps to ensure that we delete or destroy personal information when it is no longer needed for the purposes for which it was collected.
                    </p>

                    <h3 className="mb-3" style={{ color: 'var(--primary)', fontWeight: '700' }}>Sharing personal information</h3>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        The global nature of our business means we may need to share personal information with group companies, business partners and other third parties, some of whom are located outside Ghana. This means that your personal information will be held on data servers and processed in countries outside Ghana.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>The BIMA group</h4>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        We share personal information between companies in the BIMA group. This includes for the purposes of our business development, market research and analysis activities, which we carry out in the United Kingdom and elsewhere on the basis of our legitimate interests. Other companies within the BIMA group and operating outside Ghana are responsible for processing personal information in the course of operating and maintaining the group’s IT systems.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Service providers</h4>
                    <p className="mb-3" style={{ lineHeight: '1.8' }}>
                        We share information with our service providers as needed for providing our products and services and operating our business. Our service providers include:
                    </p>
                    <ul className="mb-3" style={{ paddingLeft: '2rem', lineHeight: '1.8' }}>
                        <li>insurers; reinsurers; third party claims administrators, insurance and reinsurance brokers and other intermediaries and agents, and appointed representatives</li>
                        <li>business partners such as telecommunications companies and other distributors of our products and services</li>
                        <li>financial institutions such as banks and e-commerce entities</li>
                        <li>securities firms and other financial services providers</li>
                        <li>medical professionals and providers of medical services</li>
                        <li>external advisers such as accountants, actuaries, auditors, lawyers and other experts</li>
                        <li>other service providers such as IT systems, support and hosting service providers, market research and analysis service providers, call center operators and translators.</li>
                    </ul>
                    <p className="mb-5" style={{ lineHeight: '1.8' }}>
                        In certain cases, our service providers may store and use personal information to improve their IT security (including spam and abuse prevention) functions across their services. Please note that your medical records constitute sensitive personal information and shall only be shared with medical practitioners with your explicit consent unless we are permitted to use it under applicable law. For further information, see section entitled “Your legal rights – Sensitive personal information” below.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Governmental authorities</h4>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        From time to time we may be required to share personal information with governmental, regulatory or other public authorities, such as tax authorities, financial services regulators, criminal investigations agencies and law enforcement agencies. These authorities include authorities that may be based outside Ghana and operate under laws other than the laws of Ghana.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Third parties involved in court action</h4>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        We may share information with courts and with third parties and their representatives and advisers in the course of legal proceedings where we believe this is necessary or appropriate.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Other third parties</h4>
                    <p className="mb-5" style={{ lineHeight: '1.8' }}>
                        If you use or make a claim under one of our products or services which someone else has bought for your benefit, we may share your personal information with them if you have authorized us to do this in writing or we are otherwise entitled to do this, for example, because you are under 18 and that person is your parent or guardian or has parental responsibility for you. We may also share information with fire, police or medical emergency services and with any purchaser or other party involved in business transactions, such as the sale, merger, joint venture or outsourcing of all or part of our business or assets.
                    </p>

                    <h3 className="mb-3" style={{ color: 'var(--primary)', fontWeight: '700' }}>Your legal rights</h3>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        You have legal rights under information protection laws in relation to your personal information.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Correction and complaints</h4>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        You can ask us for a copy of your personal information. We will not be obliged to give you this information in certain circumstances, for example if we are not reasonably satisfied as to your identity or if the burden or expense of providing you with the information is disproportionate to the risks to your privacy in relation to the relevant personal information. You can also ask us to correct your personal information it if it is inaccurate, incomplete, misleading or not up-to-date or contact us with any inquiries or complaints about your personal information.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Sensitive personal information</h4>
                    <p className="mb-3" style={{ lineHeight: '1.8' }}>
                        If personal information is sensitive personal information, we will only collect and use it with your explicit consent unless we are permitted to use it under applicable law, for example because we need it:
                    </p>
                    <ul className="mb-3" style={{ paddingLeft: '2rem', lineHeight: '1.8' }}>
                        <li>in order to protect your vital interests</li>
                        <li>for the purpose of, or in connection with, any legal proceedings</li>
                        <li>for the purpose of obtaining legal advice, or</li>
                        <li>for the purposes of establishing, exercising or defending legal rights.</li>
                    </ul>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        You may withdraw your consent to our collection and use of sensitive personal information at any time but if you do, we will no longer be able to provide you with services or perform our obligations under products you have already bought.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Marketing preferences</h4>
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                        We will provide you with regular opportunities to let us know your marketing preferences. You may change your marketing preferences or tell us that you no longer want us to send you any marketing communications at any time. If you do this, please note that we may still need to contact you in relation to products or services that you have already bought.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>Legitimate interests</h4>
                    <p className="mb-5" style={{ lineHeight: '1.8' }}>
                        You have a right at any time to object to our use of your personal information where it is used for the purposes of pursuing our legitimate interests. Your right to object is not an absolute right. We will still be allowed to use your personal information if we can demonstrate compelling legitimate grounds, which override your interests, rights and freedoms or it is for establishing, exercising or defending legal claims.
                    </p>

                    <h4 className="mb-2" style={{ fontWeight: '600' }}>How to contact us</h4>
                    <p className="mb-2" style={{ lineHeight: '1.8' }}>
                        Please contact us with any queries on data and personal information:
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                        <li><strong>Email:</strong> <a href="mailto:info@gh.milvik.com" style={{ color: 'var(--secondary)' }}>info@gh.milvik.com</a></li>
                        <li><strong>Telephone:</strong> <a href="tel:0800000545" style={{ color: 'var(--secondary)' }}>080 000 0545</a></li>
                        <li><strong>Address:</strong> BIMA Head Office, FAACO Complex, Alajo, Accra</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
