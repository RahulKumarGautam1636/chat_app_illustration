import Table from 'react-bootstrap/Table';
import { HashLink } from 'react-router-hash-link'; 
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom'; 

const Courses = ({ isMobile }) => {
    return (
        <section id="courses">
            <div className="container">
                <div className="reviews__heading mb-5">
                    <h2 className="heading-secondary"> Professional Training.</h2>
                    <Link className='d-none d-lg-block' to='/'><button className="btn-1">Back to Home</button></Link>
                    {/* <HashLink to='#tabVertical-pane-java-1'>Scroll</HashLink> */}
                </div>
                <div className="row">
                    <div className="col col-12 col-md-3">
                        <div className="row">
                            <ul className="nav flex-column nav-pills p-0" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#courses'}><button type="button" id="tabVertical-java-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-java-1" role="tab" aria-controls="tabVertical-pane-java-1" aria-selected="true"><img src="assets/icons/226777.png" alt="java"/> Java</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#courses'}><button type="button" id="tabVertical-dotNet-8" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-dotNet-8" role="tab" aria-controls="tabVertical-pane-dotNet-8" aria-selected="false"><img src="assets/icons/aspnet.png" alt="dotNet"/> Dot .Net</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#courses'}><button type="button"  id="tabVertical-php-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-php-2" role="tab" aria-controls="tabVertical-pane-php-2" aria-selected="false"><img src="assets/icons/php.png" alt="php"/>PHP</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#courses'}><button type="button" id="tabVertical-oracle-3" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-oracle-3" role="tab" aria-controls="tabVertical-pane-oracle-3" aria-selected="false"><img src="assets/icons/oracle.png" alt="oracle"/> Oracle</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#courses'}><button type="button" id="tabVertical-sqlServer-4" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-sqlServer-4" role="tab" aria-controls="tabVertical-pane-sqlServer-4" aria-selected="false"><img src="assets/icons/sql.png" alt="sql"/> SQL Server</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#courses'}><button type="button" id="tabVertical-mySql-5" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-mySql-5" role="tab" aria-controls="tabVertical-pane-mySql-5" aria-selected="false"><img src="assets/icons/mySql.png" alt="mySql"/> My SQL</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#courses'}><button type="button" id="tabVertical-cProg-6" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-cProg-6" role="tab" aria-controls="tabVertical-pane-cProg-6" aria-selected="false"><img src="assets/icons/c-prog.png" alt="prog"/> C Programming</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#courses'}><button type="button" id="tabVertical-cPlus-7" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-cPlus-7" role="tab" aria-controls="tabVertical-pane-cPlus-7" aria-selected="false"><img src="assets/icons/cPlus.png" alt="cPlus"/> C++ Programming</button></HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-12 col-md-9" id='all-tabs'>
                        <div className="tab-content">
                            <div id="tabVertical-pane-java-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabVertical-java-1">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-java-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-java-pane-1" role="tab" aria-controls="tabFade-java-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-java-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-java-pane-2" role="tab" aria-controls="tabFade-java-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-java-3" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-java-pane-3" role="tab" aria-controls="tabFade-java-pane-3" aria-selected="false">Course Curriculum</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-java-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-java-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Build Web Application with J2ee and use of Core Java in Applications</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>16 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Objective</td>
                                                    <td>To make enable individuals to make Web Applications using J2ee Technology (Technical and Functional Knowledge)</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>10 to 12</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>15000/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-java-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-java-2">
                                        <ul className='details-list'>
                                            <li>
                                                <h2 className="heading-tertiary">INTRODUCTION</h2>
                                                <img className='float-start mb-4 me-5' src="assets/img/java.jpg" alt="java"/>
                                                <p>Java 2 Enterprise Edition (J2EE) is a platform for building distributed scalable, platform independent server-side enterprise applications. Today, Java is one of the most mature and commonly used programming languages for building enterprise softwares. Java is providing enterprise solutions to small, medium and large enterprises throughout the world and is a leading player in mobile applications. The need of Java professionals is growing by the day, which is in itself a testimony to its success.</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Purpose of Course</h2>
                                                <p>The purpose of the course is to train students of various Engineering branches, and MCAs in Server Side internet programming using the component based programming model of J2EE. The course is designed to give complete Knowledge of various component technologies of J2EE.</p>
                                                <p>The most commonly used component technologies of J2EE that will be covered in the course are JDBC, Java Servlets, Java Server Pages, Enterprise Java Beans etc. apart from these students would be trained in the use of web servers and integrated development environments that are commonly used in the industries. An ERP based project would be undertaken during the course that would be completed by the students.</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Purpose of Course</h2>
                                                <p>After completing this course, students would become proficient in J2EE component technologies and can use them in solving enterprise problems. This course would give an edge and confidence to the students in establishing themselves as a software developer working in high end technology.</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Scope of J2EE</h2>
                                                <p>Since its inception Java has revolutionized the internet by introducing the concepts of Applets, and after that it is leading the internet programming industry by introducing new technologies before any other even thinks them. J2EE is providing enterprise solutions of diverse nature and complexity in various fields such as telecom, banking, insurance, ecommerce etc. J2EE as a technology has stood the test of time and proved itself and its influence is growing by each passing day. Currently a trend is initiated by giants like Microsoft to shift from window applications to web applications and web services which indicates a bright future for all technologies dealing in web applications and web services and J2EE is the front runner among them.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="tabFade-java-pane-3" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-java-3">
                                        <h2 className="heading-tertiary mt-3 mb-4">Build Web Application with J2ee and use of Core Java in Applications</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td></td>
                                                    <td>16 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Theory (Per Week)</td>
                                                    <td>2 Class</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Practical (Per Week)</td>
                                                    <td>1 Class</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Objective</td>
                                                    <td></td>
                                                    <td>To make enable individuals to make Web Applications using J2ee Technology (Technical and Functional Knowledge)</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td></td>
                                                    <td>10 to 12</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td></td>
                                                    <td>15000/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Content</td>
                                                    <td>1st Week</td>
                                                    <td>Overview, Environment Setup, Basic Syntax, Object & Classes, Basic Datatypes, Variable Types, Modifier Types,Basic Operators, Loop Control,Decision Making,Numbers, Characters, Strings, Arrays, Date & Time</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>2nd Week</td>
                                                    <td>Regular Expressions, Methods, Files and I/O, Exceptions, Inheritance, Overriding, Polymorphism, Abstraction, Encapsulation, Interfaces, Packages</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>3rd Week</td>
                                                    <td>Data Structures, Collections, Generics, Serialization</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>4th Week</td>
                                                    <td>Getting Started with Web Applications and Java Web Design Patters (MVC)</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>5th Week</td>
                                                    <td>Java Servlet Technology, JavaServer Pages Documents, JavaServer Pages Standard Tag Library, Custom Tags in JSP Pages</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>6th Week</td>
                                                    <td>Getting Started with Enterprise Beans, Session Bean Examples, Message-Driven Bean</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>7th Week</td>
                                                    <td>Java Persistence API, Java Security (Authentication and Authorisation)</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>8th Week</td>
                                                    <td>Java Messaging Services and Use of this in Applications</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>9th Week</td>
                                                    <td>Handle Web Layer of Application with Struts 1 and Struts 2</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>10th Week</td>
                                                    <td>Spring Middle Layer Service handling, Integration with Different Enterprise Services in Spring</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>11th Week</td>
                                                    <td>Understanding Object Relational Mapping. Hibernate Concepts and Working Example.</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>12th Week</td>
                                                    <td>Understanding JPA and Spring Roo. Integration with various layers in Web Application (Specifically Week 9th,10th and 11th)</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>13th to 16th Week</td>
                                                    <td>Application with the Above Technologies.</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                            <div id="tabVertical-pane-php-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-php-2">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-php-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-php-pane-1" role="tab" aria-controls="tabFade-php-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-php-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-php-pane-2" role="tab" aria-controls="tabFade-php-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-php-3" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-php-pane-3" role="tab" aria-controls="tabFade-php-pane-3" aria-selected="false">Course Curriculum</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-php-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-php-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Build Web Application with J2ee and use of Core Java in Applications</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>12 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Objective</td>
                                                    <td>To make enable individuals to make Web Applications using J2ee Technology (Technical and Functional Knowledge)</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>10 to 12</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>12000/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-php-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-php-2">
                                        <ul className='details-list'>
                                            <li>
                                                <h2 className="heading-tertiary">INTRODUCTION</h2>
                                                <img className='float-start mb-4 me-5' src="assets/img/PHP.jpg" alt="java"/>
                                                <p>PHP is a widely used, general-purpose scripting language that was originally designed for web development to produce dynamic web pages. For this purpose PHP code is embedded into the HTML source document and interpreted by a web server with a PHP processor module, which generates the web page document.</p>
                                                <p>As a general-purpose programming language, PHP code is processed by an interpreter application in command line mode performing desired operating system operations and producing program output on its standard output channel. It may also function as a graphical application. PHP is available as a processor for most modern web servers and as standalone interpreter on almost every operating system and computing platform.</p>
                                                <p>PHP is a general-purpose scripting language that is especially suited for web development. PHP generally runs on a web server. Any PHP code in a requested file is executed by the PHP runtime, usually to create dynamic web page content. It can also be used for command-line scripting and client-side GUI applications. PHP can be deployed on most web servers, many operating systems and platforms, and can be used with many relational database management systems.</p>
                                                <p>It is available free of charge, and the PHP Group provides the complete source code for users to build, customize and extend for their own use.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="tabFade-php-pane-3" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-php-3">
                                        <h2 className="heading-tertiary mt-3 mb-4">Build Web Application with J2ee and use of Core Java in Applications</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td></td>
                                                    <td>12 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Theory (Per Week)</td>
                                                    <td>2 Class</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Practical (Per Week)</td>
                                                    <td>1 Class</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Objective</td>
                                                    <td></td>
                                                    <td>To make enable individuals to make Web sites and Serve Clients with Value (Technical and Functional Knowledge)</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td></td>
                                                    <td>10 to 12</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td></td>
                                                    <td>12000/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Highlight</td>
                                                    <td></td>
                                                    <td>On Completion of Course, 3 of them will be adopted on basis of exam. Helping All the students to sell websites to clients of their own and provide infrastructure and expertise for those.Students will get fees for each of the Site Sale.</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Content</td>
                                                    <td>1st Week</td>
                                                    <td>Web Site Components, PHP Introduction. PHP String Functions,PHP Constants,PHP Operators,PHP If...Else...Elseif. PHP Switch,PHP While Loops,PHP For Loops,PHP Functions,PHP Arrays. PHP Forms, PHP Form Handling, PHP Form Validation, PHP Form Required, PHP Form URL/E-mail, PHP Form Complete. PHP Arrays Multi, PHP Date, PHP Include, PHP File, PHP File Upload,PHP Sessions. PHP E-mail, PHP Secure E-mail, PHP Error, PHP Exception, PHP Filter.</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>2nd Week</td>
                                                    <td>PHP Database, PHP MySQL Intro, PHP MySQL Connect, PHP CREATE DB/Table, PHP INSERT INTO, PHP SELECT. PHP WHERE, PHP ORDER BY, PHP UPDATE, PHP DELETE, PHP ODBC. PHP and AJAX, AJAX Intro, AJAX PHP, AJAX Database, AJAX XML, AJAX Live Search, AJAX RSS Reader. AJAX Poll</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>3rd Week</td>
                                                    <td>What is Wordpress? How to Install WordPress? How to Create a WordPress Site? How to Install WordPress Themes? How to Transfer WordPress? How to Install WordPress Plugins? How to Update WordPress How to Backup WordPress How to Improve WordPress Security How to Optimize the WordPress Performance</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>4th Week</td>
                                                    <td>What is Wordpress Theme? How to make a Theme? How to Customize WordPress Themes How to Customize the WordPress Dashboard How to Change WordPress Admin Color Scheme</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>5th Week</td>
                                                    <td>Advanced Wordpress Making Custom Posts Adding Options in Wordpress Admin</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>6th Week</td>
                                                    <td>How to make a widget? What is Widget Area? How to embed JQuery Plugin in Wordpress? Implementing Custom CSS</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>7th Week</td>
                                                    <td>How to make a child theme? Child Theme Customization</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>8th Week</td>
                                                    <td>Genesis Child Theme Knowing the Genesis Theme Customization in Genesis Theme</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>9th Week</td>
                                                    <td>Creating Genesis Themes HTML5 and its Implementation Knowing Genesis Markups and Hooks</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>10th Week</td>
                                                    <td>Creating a genesis child theme within 2 hours Knowing concepts of SEO and implementation in Genesis Theme Knowing concepts of SMO and implementation in Genesis Theme</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>11th Week</td>
                                                    <td>SEO – How to grow with visitors in web site SEO – Content Writing SEO – Black Hat SEO and White Hat SEO SEO – Google Authorship Google Analytics and Parameters Google Web Master Tools and Parameters</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>12th Week</td>
                                                    <td>SMO – Knowing Social Media SMO – How to share content in Social Media SMO – Key Factor to success in Social Media SMO – Content Optimization and Syndication for Social Media</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                            <div id="tabVertical-pane-oracle-3" className="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-oracle-3">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-oracle-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-oracle-pane-1" role="tab" aria-controls="tabFade-oracle-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-oracle-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-oracle-pane-2" role="tab" aria-controls="tabFade-oracle-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-oracle-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-oracle-1">
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>8 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>10 to 12</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>12000/-</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-oracle-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-oracle-2">
                                        <ul className='details-list'>
                                            <li>
                                                <h2 className="heading-tertiary">INTRODUCTION</h2>
                                                <img className='float-start mb-4 me-5' src="assets/img/oracle.jpg" alt="Oracle"/>
                                                <p>Oracle Database software is a relational database management system that efficiently tackles the challenges of constant change inherent in complex, often heterogeneous environments and also the additional challenge to deliver tangible value from their database investments. It delivers the high level of reliability, performance and scalability. Its tools reduce the manual, time-intensive tasks associated with development, administration and performance management. </p>
                                                <p>Oracle's Database Management capabilities make DBA lives easier as it endows with a full-lifecycle solution covering change and configuration management, patching, provisioning, testing, masking/subsetting and automatic tuning. It provides the most extensive self-management capabilities in the industry. Why would you go for oracle database management?</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">For answer please go through the following paragraphs:-</h2>
                                                <p>Oracle delivers a higher quality of service by clustering and consolidating enterprise application databases onto fast, reliable and scalable private clouds. It accelerates the performance of system by compressing data onto low-cost storage partitions. With the help of oracle database management DBA productivity gets doubled and also the risk of change also gets reduced. It is used by the industries that range from zero-overhead instrumentation to integrate self-healing and business-driven management. </p>
                                                <p>It maximizes the availability of data by eliminating idle data center redundancy. It provides securely protecting information and enables fast compliance. Actually it is totally revolutionized the field of enterprise database management systems with the release of Oracle Database 10g as introduced the industry's first self-management capabilities built right into the database kernel.</p>
                                                <p>This intelligent management infrastructure offers several releases till now with continuous improvement.</p>
                                                <p>Oracle is the mother of database management system. And without a database system no application can run. In IT industry it is the foremost requirement of having knowledge of database management system. If you know Oracle well, you would feel easy with other database systems as well</p>
                                                <p>This is the reason why we have started Oracle training. There are many Oracle training institutes, Global certification centers but their module based training and fees make it difficult for many students to get admitted. So we have designed our module and fees in such a way so that everyone can learn SQL queries and handle database with ease.</p>
                                                <p></p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Database Management System (DBMS)</h2>
                                                <ol className='features-list'>
                                                    <li>Introduction</li>
                                                    <li>Identifying Keys in Tables</li>
                                                    <li>E R diagrams</li>
                                                    <li>Data types</li>
                                                    <li>Events</li>
                                                    <li>Data dictionary</li>
                                                    <li>Integrity</li>
                                                    <li>Converting E R diagrams to normalized tables</li>
                                                    <li>Normalization</li>
                                                </ol>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Structure Query Language (SQL)</h2>
                                                <ol className='features-list'>
                                                    <li>Query Basics</li>
                                                    <li>Computation with queries</li>
                                                    <li>Sub totals and Group by command</li>
                                                    <li>Queries with multiples</li>
                                                    <li>Sub queries</li>
                                                    <li>Join</li>
                                                    <li>DDL and DML</li>
                                                    <li>Testing queries</li>
                                                </ol>
                                            </li>                                            
                                            <li>
                                                <h2 className="heading-tertiary">Introduction</h2>
                                                <ul className='features-list'>
                                                    <li>What is Database ?</li>
                                                    <li>Understanding an RDBMS</li>
                                                    <li>Understanding Tables, Records, and Fields</li>
                                                    <li>SQL Language</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Working with Oracle</h2>
                                                <ul className='features-list'>
                                                    <li>Creating Databases</li>
                                                    <li>Types of Databases</li>
                                                    <li>Specifying Field Data Types</li>
                                                    <li>Altering Table and Field Names</li>
                                                    <li>Altering Field Properties</li>
                                                    <li>Altering Table Types</li>
                                                    <li>Backing Up Databases and Tables</li>
                                                    <li>Restoring Databases and Tables from Backup</li>
                                                    <li>Dropping Databases and Tables</li>
                                                    <li>SQL Queries and sub queries</li>
                                                    <li>Using Built-In Functions</li>
                                                    <li>Joining Tables</li>
                                                    <li>Using Table and Column Aliases</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">PL/SQL Tables</h2>
                                                <ul className='features-list'>
                                                    <li>Basics of PL/SQL</li>
                                                    <li>PL/SQL architecture</li>
                                                    <li>PL/SQL Basics, Variables, Constants, data types & error handling</li>
                                                    <li>Dynamic SQL in PL/SQL</li>
                                                    <li>PL/SQL wrapper utility</li>
                                                    <li>Control structures</li>
                                                    <li>Declaring Variables and Constants</li>
                                                    <li>Executing a PL/SQL Block</li>
                                                    <li>Error checking – exception handling</li>
                                                    <li>Defining exceptions</li>
                                                    <li>Cursors in PL/SQL</li>
                                                    <li>Triggers in PL/SQL</li>
                                                    <li>Stored procedures, functions and packages</li>
                                                    <li>Bulk queries</li>
                                                    <li>Bulk DML (for all statement)</li>
                                                    <li>Using cursor attributes</li>
                                                    <li>Analyzing impact of bulk operations</li>
                                                </ul>
                                                <p className='mt-4'>We have designed the training course in such a way that everyone would manage database easily when the training ends.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="tabVertical-pane-sqlServer-4" className="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-sqlServer-4">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-sqlServer-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-sqlServer-pane-1" role="tab" aria-controls="tabFade-sqlServer-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-sqlServer-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-sqlServer-pane-2" role="tab" aria-controls="tabFade-sqlServer-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-sqlServer-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-sqlServer-1">
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>8 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>10 to 12</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>12000/-</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-sqlServer-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-sqlServer-2">
                                        <ul className='details-list'>
                                            <li>
                                                <h2 className="heading-tertiary">INTRODUCTION</h2>
                                                <img className='float-start mb-4 me-5' src="assets/img/MsSql.jpg" alt="MySql"/>
                                                <p>The term DBMS refers to a software program that enables the creation and management of databases. Most of today's database systems are Relational Database Management System (RDBMS) as they have the ability to store related data across multiple tables. Microsoft SQL Server is a popular relational database management system. It has robust feature set at a lower price point than its competitors like Access. While Access suites to home and small office use, SQL Server suits to enterprise applications such as corporate CRMs and websites etc.</p>
                                                <p>It is a computer application that is used to create desktop, enterprise and web based database applications. Till now, we have at least a dozen different editions of Microsoft SQL Server aimed at different audiences and for different workloads at different levels and with various goals.</p>
                                                <p>It gives us productive functionality and optimal performance with its powerful tools to solve our toughest IT challenges. It deals with complex environment with planned and developed applications for minimum of fuss.</p>
                                                <p>Primary query languages of Microsoft SQL Server's are T-SQL and ANSI SQL. For creating a database driven website, then it is better off using a more robust system 'MS SQL Server'.</p>
                                                <p>It uses comprehensive management capabilities for schemas, objects, security and changes. It diagnoses and resolves SQL Server performance issues before they impact end users and service levels.</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Course Outline</h2>
                                                <ol className='features-list'>
                                                    <li>Introduction.</li>
                                                    <li>Data Organization.</li>
                                                    <li>Data Integrity.</li>
                                                    <li>Database Designing Using E R Diagram.</li>
                                                    <li>Identifying Keys in Tables.</li>
                                                    <li>Normalization.</li>
                                                    <li>Database Queries.</li>
                                                    <li>Creating & Managing Database Tables.</li>
                                                    <li>Database Maintenance.</li>
                                                    <li>Indexing.</li>
                                                    <li>Joining.</li>
                                                    <li>Sub Queries.</li>
                                                    <li>Views.</li>
                                                    <li>Stored Procedures.</li>
                                                    <li>Triggers.</li>
                                                    <li>Transactions.</li>
                                                    <li>Exporting/Importing Data..</li>
                                                </ol>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="tabVertical-pane-mySql-5" className="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-mySql-5">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-mySql-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-mySql-pane-1" role="tab" aria-controls="tabFade-mySql-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-mySql-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-mySql-pane-2" role="tab" aria-controls="tabFade-mySql-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-mySql-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-mySql-1">
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>8 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>10 to 12</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>9000/-</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-mySql-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-mySql-2">
                                        <ul className='details-list'>
                                            <li>
                                                <h2 className="heading-tertiary">INTRODUCTION</h2>
                                                <img className='float-start mb-4 me-5' src="assets/img/MySql.jpg" alt="MySql"/>
                                                <p>MySQL database is the world's most popular open source database. Its tools make SLAs speedy and simple to manage database performance, accessibility, diagnostics, alteration, configuration and releases. With MySQL's high performance, high reliability and ease of use management there is no need left to deal with tedious, manual tasks.</p>
                                                <p>My SQL has ample range of database tools, support, guidance and consulting services so that it can be successfully used by a person new to database technology or by an experienced developer or by a DBA. It runs as a server providing multi-user access to a number of databases. MySQL management makes software, business-services and end-user management significantly simpler. It powers 'High-Volume Websites', 'Business-Critical Systems' and 'Packaged Softwares'.</p>
                                                <p>MySQL is used in many high-profile, large-scale World Wide Web products that is in some of the most frequently visited websites on the Internet including Flickr, Nokia.com, YouTube, Facebook, Google, Adobe, Alcatel Lucent and Zappos. These world's largest and fastest-growing organizations rely on MySQL to save time and money. It is the best choice for a new generation of applications built on the LAMP stack.</p>
                                                <p>Some features of MySQL management that makes it superior over others includes 'Multiple storage engines', 'Native storage engines', 'Community-developed storage engines' and 'Custom storage engines'. Also it commits grouping, gathering multiple transactions from multiple connections together to increase the number of commits per second.</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Introduction</h2>
                                                <ul className='features-list'>
                                                    <li>Features and Benefits of MySQL</li>
                                                    <li>MySQL Architecture</li>
                                                    <li>Install and Start MySQL</li>
                                                </ul>
                                                <h2 className="heading-tertiary">Database Basics</h2>
                                                <ul className='features-list'>
                                                    <li>Data Types</li>
                                                    <li>What is NULL?</li>
                                                    <li>SQL Language</li>
                                                    <li>Keys</li>
                                                    <li>Normalization</li>
                                                </ul>
                                                <h2 className="heading-tertiary">Database Creation</h2>
                                                <ul className='features-list'>
                                                    <li>Creating a Database</li>
                                                    <li>Creating a Table</li>
                                                </ul>
                                                <h2 className="heading-tertiary">Basic Queries</h2>
                                                <ul className='features-list'>
                                                    <li>The SELECT Command</li>
                                                    <li>MySQL Query Browser</li>
                                                </ul>
                                                <h2 className="heading-tertiary">Delete/Modify Table row Data</h2>
                                                <ul className='features-list'>
                                                    <li>The INSERT Command</li>
                                                    <li>The REPLACE Command</li>
                                                    <li>The UPDATE Statement</li>
                                                    <li>The DELETE Command</li>
                                                </ul>
                                                <h2 className="heading-tertiary">Functions</h2>
                                                <ul className='features-list'>
                                                    <li>Simple Functions</li>
                                                    <li>Grouping With Functions</li>
                                                </ul>
                                                <h2 className="heading-tertiary">Joining Tables</h2>
                                                <ul className='features-list'>
                                                    <li>Combining Multiple Tables</li>
                                                    <li>Inner Joins</li>
                                                    <li>Outer Joins</li>
                                                </ul>
                                                <h2 className="heading-tertiary">Sub queries</h2>
                                                <ul className='features-list'>
                                                    <li>What is a Sub query?</li>
                                                    <li>Categories of Sub queries</li>
                                                    <li>Sub query Uses</li>
                                                </ul>
                                                <h2 className="heading-tertiary">Exporting/Importing Data</h2>
                                                <ul className='features-list'>
                                                    <li>Exporting Data</li>
                                                    <li>Importing Data</li>
                                                </ul>
                                                <h2 className="heading-tertiary">Database Maintenance</h2>
                                                <ul className='features-list'>
                                                    <li>Delete an Entire Database</li>
                                                    <li>Maintaining Tables and Columns</li>
                                                    <li>Indexes and Constraints</li>
                                                    <li>Data Manipulation</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="tabVertical-pane-cProg-6" className="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-cProg-6">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-cProg-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-cProg-pane-1" role="tab" aria-controls="tabFade-cProg-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-cProg-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-cProg-pane-2" role="tab" aria-controls="tabFade-cProg-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-cProg-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-cProg-1">
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>12 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Objective</td>
                                                    <td>To make enable individuals to make Applications using C Programming (Technical and Functional Knowledge)</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>10 to 12</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>3000/-</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-cProg-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-cProg-2">
                                        <ul className='details-list'>
                                            <li>
                                                <h2 className="heading-tertiary">INTRODUCTION</h2>
                                                <img className='float-start mb-4 me-5' src="assets/img/C.png" alt="c-programming"/>
                                                <p>C language, the mother tongue of every programmer has his history of about 30 years way back from 1970's. We are in an era of technology where technology changes every 3 years or so, but C is still there where it was, it is self explanatory that how powerful is the language. The most distinguishing feature of this technology is that you can program at any level, from application to hardware and that too in great ease. Being such a powerful and widespread technology it is rightly called the mother tongue of every programmer. Any programmer who can program well in C, can program very easily in other languages.</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Purpose of Course</h2>
                                                <p>The C language is a common subject studied by every engineer as for now programming is required in every area of technology. This is the hottest subject as per interview point of view, as in most of the interviews of IT and other companies (Like ST microelectronics-an electronic company) a lot of questions are based on C. The course contents are specially designed for the students so that they boost up in their programming skills, logic and creativity which would help them to clear interviews and would be very helpful in their career ahead.</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Our Promise</h2>
                                                <p>We have designed our course contents very technically and assure you to provide best training in C, & Advance C technology. We have divided our course in two parts i.e. Conceptual part and application part. In conceptual part all the concepts of the language would be taught and in the application part we would be dealing with a no. of projects which are chosen in such a manner that each concept studied in the language would be used in different styles so that the concepts of the language would become crystal clear.</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Scope of C</h2>
                                                <p>A lot of work in C is carried out in the industries, for example the kernel of Linux is designed in C language and efficient C programmers are heavily paid in the industries. Apart from IT companies most of electronic companies prefer C programmers for programming their chips as it can be efficiently done in C rather to work in assembly language.
                                                   C has a vast area of application like in device drivers programming, network programming, application programming in short C is associated with everything you can associate with computers. C is in the market from about 30 years and there is no threat for the technology to go down.</p>
                                            </li>
                                            <li><h2 className="heading-tertiary">Course Outline</h2></li>
                                            <li><h2 className='heading-tertiary'>Introduction To C Programming</h2></li>
                                            <li><h2 className='heading-tertiary'>Introduction To the Course</h2></li>
                                            <li>
                                                <h2 className='heading-tertiary'>Overview to C Programming</h2>
                                                <ul className='features-list'>
                                                    <li>Why Use C?</li>
                                                    <li>Uses of C</li>
                                                    <li>A Brief History Of C</li>
                                                    <li>C for Personal Computers</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className='heading-tertiary'>Running C Programs</h2>
                                                <ul className='features-list'>
                                                    <li>The Edit-Compile-Link-Execute Process</li>
                                                    <li>Using Microsoft C</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className='heading-tertiary'>Structure of C Programs</h2>
                                                <ul className='features-list'>
                                                    <li>C's Character Set</li>
                                                    <li>The form of a C Program</li>
                                                    <li>The layout of C Programs</li>
                                                    <li>Pre-processor Directives</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className='heading-tertiary'>Your First Program</h2>
                                                <ul className='features-list'>
                                                    <li>Add Comments to a Program</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className='heading-tertiary'>Data Types</h2>
                                                <ul className='features-list'>
                                                    <li>Integer Number Variables</li>
                                                    <li>Decimal Number Variables</li>
                                                    <li>Character Variables</li>
                                                    <li>Assignment Statement</li>
                                                    <li>Arithmetic Ordering</li>
                                                    <li>Something To Declare</li>
                                                    <li>More On Initializing Variables</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className='heading-tertiary'>Input and Output Functions</h2>
                                                <ul className='features-list'>
                                                    <li>On The Run</li>
                                                    <li>Input and Output Functions in More Detail</li>
                                                    <li>The % Format Specifiers</li>
                                                    <li>Formatting Your Output</li>
                                                    <li>Custom Libraries</li>
                                                    <li>Summing It Up</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className='heading-tertiary'>Conditional Execution</h2>
                                                <ul className='features-list'>
                                                    <li>Program Control</li>
                                                    <li>Logical Expressions</li>
                                                    <li>True and False in C</li>
                                                    <li>Using break and continue Within Loops</li>
                                                    <li>Select Paths with switch</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className='heading-tertiary'>Structure and Nesting</h2>
                                                <ul className='features-list'>
                                                    <li>Think of a number</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className='heading-tertiary'>Functions and Prototypes</h2>
                                                <ul className='features-list'>
                                                    <li>Functions - C's Building Blocks</li>
                                                    <li>Functions and Local Variables</li>
                                                    <li>Making The Connections</li>
                                                    <li>Functions and Prototypes</li>
                                                    <li>What is ANSI C?</li>
                                                    <li>The Standard Library Functions</li>
                                                </ul>
                                            </li>   
                                            <li>
                                                <h2 className='heading-tertiary'>Data Types Part II</h2>
                                                <ul className='features-list'>
                                                    <li>Global variables</li>
                                                    <li>Constant Data Types</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className='heading-tertiary'>Array</h2>
                                                <ul className='features-list'>
                                                    <li>Advanced Data Types</li>
                                                    <li>In Dis-array</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className='heading-tertiary'>Pointers</h2>
                                                <ul className='features-list'>
                                                    <li>Point to Point</li>
                                                    <li>Swap Shop</li>
                                                    <li>Pointers And Arrays</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className='heading-tertiary'>Strings</h2>
                                                <ul className='features-list'>
                                                    <li>Stringing Along</li>
                                                    <li>As easy as... B or C?</li>
                                                    <li>A Sort Of Bubble Program</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className='heading-tertiary'>Structures and Unions</h2>
                                                <ul className='features-list'>
                                                    <li>Structures</li>
                                                    <li>Defining A New Type</li>
                                                    <li>Structures and Functions</li>
                                                    <li>Pointers to Structures</li>
                                                    <li>Malloc</li>
                                                    <li>Structures and Linked Lists</li>
                                                    <li>Header Files</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h2 className='heading-tertiary'>File Handling</h2>
                                                <ul className='features-list'>
                                                    <li>The Stream File</li>
                                                    <li>Text File Functions</li>
                                                    <li>Binary File Functions</li>
                                                    <li>File System Functions</li>
                                                    <li>Command Line Parameters</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="tabVertical-pane-cPlus-7" className="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-cPlus-7">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-cPlus-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-cPlus-pane-1" role="tab" aria-controls="tabFade-cPlus-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-cPlus-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-cPlus-pane-2" role="tab" aria-controls="tabFade-cPlus-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-cPlus-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-cPlus-1">
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>12 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Objective</td>
                                                    <td>To make enable individuals to make Applications using C++ Programming (Technical and Functional Knowledge)</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>10 to 12</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>4000/-</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-cPlus-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-cPlus-2">
                                        <ul className='details-list'>
                                            <li>
                                                <h2 className="heading-tertiary">INTRODUCTION</h2>
                                                <img className='float-start mb-4 me-5' src="assets/img/Cpp.jpg" alt="c-programming"/>
                                                <p>C++ is an extension to C Programming language. It was developed at AT&T Bell Laboratories in the early 1980s by Bjarne Stroustrup. It is a deviation from traditional procedural languages in the sense that it follows object oriented programming (OOP) approach which is quite suitable for managing large and complex programs. An object oriented language combines the data to its function or code in such a way that access to data is allowed only through its function or code. Such combination of data and code is called an object.</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Purpose of Course</h2>
                                                <p>The purpose of C++ is to precisely define a series of operations that a computer can perform to accomplish a task. Most of these operations involve manipulating numbers and text, but anything that the computer can physically do can be programmed in C++. Computers have no intelligence- they have to be told exactly what to do and this is defined by the programming language you use. Once programmed they can repeat the steps as many times as you wish at very high speed. Modern PCs are so fast they can count to a billion in a second or two.</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Our Promise</h2>
                                                <p>We have designed our course contents very technically and assure you to provide best training in C++ and Advanced OOPS technology. We have divided our course in two parts i.e. Conceptual part and application part. In conceptual part all the concepts of the language would be taught and in the application part we would be dealing with a no. of projects which are chosen in such a manner that each concept studied in the language would be used in different styles so that the concepts of the language would become crystal clear.</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Scope of C</h2>
                                                <p>A lot of work in C++ is carried out in the industries, and efficient C++ programmers are heavily paid in the industries. Apart from IT companies most of electronic companies prefer C++ programmers for programming their chips as it can be efficiently done in C++ rather to work in assembly language.</p>
                                                <p>C++ has a vast area of application like in Software Engineering, Computer Graphics, Application programming in C++ is associated with everything you can associate with computers. C++ is in the market from about 30+ years and there is no threat for the technology to go down.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="tabVertical-pane-dotNet-8" className="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-dotNet-8">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-dotNet-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-dotNet-pane-1" role="tab" aria-controls="tabFade-dotNet-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-dotNet-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-dotNet-pane-2" role="tab" aria-controls="tabFade-dotNet-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-dotNet-3" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-dotNet-pane-3" role="tab" aria-controls="tabFade-dotNet-pane-3" aria-selected="false">Course Curriculum</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-dotNet-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-dotNet-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Build Web Application with Asp.Net (Using C#)</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>16 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Objective</td>
                                                    <td>To make enable individuals to make Web Applications using .Net Technology (Technical and Functional Knowledge)</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>10 to 12</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>15000/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-dotNet-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-dotNet-2">
                                        <ul className='details-list'>
                                            <li>
                                                <h2 className="heading-tertiary">INTRODUCTION</h2>
                                                <img className='float-start mb-4 me-5' src="assets/img/DotNet.jpg" alt="Dot_net"/>
                                                <p>.NET is the model provided by Microsoft, which is Platform as well as Language Independent. Actually .NET contains three parts, first is language i.e. it may be VB, C#, or any other language, second is ASP .NET and third is ADO .NET. With the help of .NET, any type of programming like Windows Development, Web Development, Console Development, Protocols Development, Web Services, Mobile Programming etc. are possible. .NET is the only platform available in the market which is Language Independent.
                                                    Companies has a great demand of Language Independency today because different professionals have command in different languages and by using .NET modules, different languages can be interfaced.</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Purpose of Course</h2>
                                                <p>Generally people have an idea in their mind that .NET is designed for CS/IT/MCA students, but .NET not only work in high level, it depends on the user's requirements e.g. Complete low level programming (Port Programming) can be done trough .NET. This course is designed to give the complete knowledge of VB .NET, ASP .NET & ADO .NET. Also this course include Project Work, so that students after completing this course can develop their ideas according to their requirements and can work on Modular Approach of Programming in the company very easily.</p>
                                                <p>Mainly the purpose of this course is to teach students about the development of Dynamic Websites. Also in our project work we have included ERP (Enterprise Resource Planning) as a major project, which has a great demand in the market to make a company fully computerized.</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Our Promise</h2>
                                                <p>After completing this course, all the concepts of .NET technology will be cleared. We also teach Data Base Concepts. Hence students will be familiarized to how data is transferred from server to client or from client to server, how data is managed at the server and what are the security issues for the same. Also students will have the complete concepts of dynamic website, different types of architectures & modular approach of programming. Overall we can say that students can proficiently work in all types of software development fields whether it is web development or windows development.</p>
                                            </li>
                                            <li>
                                                <h2 className="heading-tertiary">Scope of .NET</h2>
                                                <p>As .NET is the only platform available in the market, which is language independent, hence .NET has a great demand in the market today. In America, maximum of the companies have already adopted .NET and in India also, this proportion is increasing day by day.
                                                   Actually, the main problem with students is that, if students work on a new technology today, then after completing their study, that technology become outdated, and a new technology is developed, but if we talk about .NET, then we can say that only 40% of the .NET model is completed, i.e. till now .NET not work on all the platforms and not all the languages have been included in .NET, then also .NET has a great demand in the market, and in few years when .NET will be completed then what a demand it will have, we can easily think about it. Hence we can say that .NET has a very bright future.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="tabFade-dotNet-pane-3" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-dotNet-3">
                                        <h2 className="heading-tertiary mt-3 mb-4">Build Web Application with Asp.Net (Using C#)</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td></td>
                                                    <td>16 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Theory (Per Week)</td>
                                                    <td>2 Class</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Practical (Per Week)</td>
                                                    <td>1 Class</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Objective</td>
                                                    <td></td>
                                                    <td>To make enable individuals to make Web Applications using J2ee Technology (Technical and Functional Knowledge)</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td></td>
                                                    <td>10 to 12</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td></td>
                                                    <td>15000/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Content</td>
                                                    <td>1st Week</td>
                                                    <td>Introduction to .NET Programming, Framework, Common Language Runtime, Base Class Library, Common Type System (CTS), Intermediate Language, Assemblies, Namespaces.
                                                        <br/>Introduction to Visual Studio 2010, Creating a Project ,Using the Solution Explorer , Setting Project Properties, Adding References, Using the Code Editor, Introduction to console Application, Compiling a Program, Running a Program.</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>2nd Week</td>
                                                    <td>Programming with C#, Keywords, DataTypes, Variables, Comments, Constants, Reference Types, Control Statements, Conditional Statements, Switch Statement, Loops, break, Value Types vs. Reference Types, Defining and Using Arrays, Defining and Using Structures, Defining and Using Enumerations.
                                                        Object Oriented Programming System (OOPS), Defining and Using Classes, Class Members, Access Modifiers, Working with Property, Creating Objects.</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>3rd Week</td>
                                                    <td>Working with Constructors and Finalizers, Defining and Implementing Interfaces,Defining and Implementing Inheritance, Abstract Classes, Sealed Classes, Understanding Partial Classes, Exception Handling,String Handling.
                                                        Defining and Implementing Delegates, Work with Generics, Collection, Events and Delegates, Delegates Vs Function pointer.
                                                        <br/>Using Files and Stream, Examining Files and Directories, Introduction to Multithreading in .NET, Creating and Managing Threads in C#.</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>4th Week</td>
                                                    <td>Introduction to MSSQL Server (Management Studio)
                                                        <br />Introduction to databases, Relational Database Concept, Structured Query Language, SQL Operators, Stored Procedures, Functions, Triggers.
                                                        <br />Introduction to ADO.NET, Connected vs. Disconnected Access.
                                                        <br />Using Connection Classes to Connect to a Data Source, Using Command Classes to Execute Queries and Stored Procedures, Insert, Update and Delete with ADO.NET, Using DataReader Classes, Stored Procedures with ADO.NET using –output parameters, Using the DataSet Class, Using DataAdapter Classes with DataSets, DataTable
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>5th Week</td>
                                                    <td>Introduction to Data Binding, Binding Controls Using ADO.Net, Developing Windows Application with C#.Net (Using Visual Studio), Deploying Windows Application.
                                                        Introduction to XML, Introduction to Language Integrated Query (LINQ), LINQ Query Expressions, LINQ Query Operators, LINQ to Objects, LINQ to SQL, LINQ to XML</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>6th Week</td>
                                                    <td>
                                                        Introduction to ASP.NET, Types of Applications – Web, Desktop, Introduction to Web applications, Web Server role, about IIS, Web Browsers, Web Support Languages, Client-side & Server-side scripting and Its Importance, What is ASP.Net, Differences between ASP and ASP.Net, Page Directives and its uses, Separating Code & Design, C#.Net role in ASP.Net development, Creating Web Application using Visual Studio.
                                                        <br />Introducing ASP.NET Web Forms, HTML, HTML Controls, Client-side & Server-side controls, Overview of Asp.net Controls (TextBox, Button, Label, DropDown etc.), Consuming HTML Client/Server controls in webForms, Working with Server Controls, Understanding the Rendering Nature of Controls, Asp.net PageLifeCycle.
                                                        <br />Introduction to Validation controls, RequiredFieldValidator, CompareValidator, RangeValidator, CustomValidator, Creating Server-side/Client-side functions for CustomValidator control, Group Validations, ValidationSummary control.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>7th Week</td>
                                                    <td>
                                                        Introduction to User Controls and Master Pages, Creating User Controls, Adding member to user controls, Registering User Controls for Consuming in Web Form.
                                                        The Basics of Master Page, Coding a Master Page, Creating Content Page, Implementing Master page in Web Form.
                                                        <br />Using ADO.Net in Asp.Net, Connect/Insert/Update/Delete, Query data – using ADO.NET, Retrieve data with DataSets, Data Adapter, using DataTable, DataBinding using ASP.NET bound controls (C#), Types of databinding, ASP.NET Data Bound Controls (GridView, ListView, DropDownList, Datalist etc.), Binding Data to Bound Controls.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>8th Week</td>
                                                    <td>
                                                        Introducing State Management, Different state management techniques, View state and its features, Using Query String, Advantages and disadvantages of QueryString, Working with cookies, Advantages and disadvantages of cookies, Session Object and its features, Application Object and its features, Comparison between Session & Application, Using the Global.asax file, Managing Application State, Application & Session Variables, Application & Session Events.
                                                        <br />Introduction to Caching, Advantages of Caching, Comparing with Application & Session variables, Page Output Caching, Page Data Caching, Fragment Caching, Crosspage postback and its advantages.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>9th Week</td>
                                                    <td>
                                                        Security Overview, Authentication & Authorization, Windows-based Authentication, Forms-based Authentication, Memberships, Authoring Users and Roles, User Account Impersonation.
                                                        <br />ASP.Net Application Configuration, Web.Config, Machine.Config, Web Application configuration Advantages.
                                                        <br />Deploying ASP.NET Application.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>10th Week</td>
                                                    <td>
                                                        Introducing AJAX & JQUERY, Advantages and Disadvantages of AJAX, Implementation of AJAX, Advantages and Disadvantages of ASP.Net AJAX, Implementing ASP.Net AJAX with Web Form.
                                                        <br />Introduction to ASP.NET Webservices, Writing and Implementing a Simple Web Service, Introduction to Web Parts, Advantages and Disadvantages, Implementation of Web Parts.
                                                        <br />Introduction to asp.net MVC, Difference between asp.net and asp.net MVC, Model, Views, Controller, Creating a simple application with Asp.Net MVC.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>11th Week</td>
                                                    <td>
                                                        WCF Overview, SOAP, WSDL, REST, JSON, Creating Data Contract, Versioning, Service Contract, Message Contract, Consuming WCF service.
                                                        <br />Introduction to WPF, The Architecture of WPF, Understanding XAML, XAML Basics, Properties and Events in XAML, Using types from Other Namespaces, Loading and Compiling XAML.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>12th Week</td>
                                                    <td>Building the WPF Application, Using WPF Controls, Handling Events in a WPF Form. Introduction to Silverlight, Comparing WPF and Silverlight, Creating a Silverlight Project.</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>13th to 16th Week</td>
                                                    <td>Application with the Above Technologies.</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className='d-lg-none mt-5 ms-auto w-auto' to='/'><button className="btn-1">Back to Home</button></Link>
                </div>
            </div>
        </section>
    )
}

const mapStateToCourses = (state) => {
    return { isMobile: state.isMobile };
}
export default connect(mapStateToCourses, {})(Courses);