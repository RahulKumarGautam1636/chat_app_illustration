import Table from 'react-bootstrap/Table';

const Courses = () => {
    return (
        <section id="courses" style={{padding: '14rem 0'}}>
            <div className="container">
                <div className="reviews__heading mb-5">
                    <h2 className="heading-secondary"> Professional Training.</h2>
                    <button className="btn-1">Back to Home</button>
                </div>
                <div className="row">
                    <div className="col col-12 col-md-3">
                        <div className="row">
                            <ul className="nav flex-column nav-pills p-0" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button type="button" id="tabVertical-java-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-java-1" role="tab" aria-controls="tabVertical-pane-java-1" aria-selected="true"><img src="assets/icons/226777.png" alt="java"/> Java</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" id="tabVertical-dotNet-8" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-dotNet-8" role="tab" aria-controls="tabVertical-pane-dotNet-8" aria-selected="false"><img src="assets/icons/aspnet.png" alt="dotNet"/> Dot .Net</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button"  id="tabVertical-php-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-php-2" role="tab" aria-controls="tabVertical-pane-php-2" aria-selected="false"><img src="assets/icons/php.png" alt="php"/>PHP</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" id="tabVertical-oracle-3" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-oracle-3" role="tab" aria-controls="tabVertical-pane-oracle-3" aria-selected="false"><img src="assets/icons/oracle.png" alt="oracle"/> Oracle</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" id="tabVertical-sqlServer-4" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-sqlServer-4" role="tab" aria-controls="tabVertical-pane-sqlServer-4" aria-selected="false"><img src="assets/icons/sql.png" alt="sql"/> SQL Server</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" id="tabVertical-mySql-5" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-mySql-5" role="tab" aria-controls="tabVertical-pane-mySql-5" aria-selected="false"><img src="assets/icons/mySql.png" alt="mySql"/> My SQL</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" id="tabVertical-cProg-6" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-cProg-6" role="tab" aria-controls="tabVertical-pane-cProg-6" aria-selected="false"><img src="assets/icons/c-prog.png" alt="prog"/> C Programming</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" id="tabVertical-cPlus-7" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-cPlus-7" role="tab" aria-controls="tabVertical-pane-cPlus-7" aria-selected="false"><img src="assets/icons/cPlus.png" alt="cPlus"/> C++ Programming</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-12 col-md-9">
                        <div className="tab-content">
                            <div id="tabVertical-pane-java-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabVertical-java-1">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-java-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-java-pane-1" role="tab" aria-controls="tabFade-java-pane-1" aria-selected="true">Panel 1</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-java-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-java-pane-2" role="tab" aria-controls="tabFade-java-pane-2" aria-selected="false">Panel 2</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-java-3" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-java-pane-3" role="tab" aria-controls="tabFade-java-pane-3" aria-selected="false">Panel 3</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-java-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-java-1">
                                        <h2 className="heading-tertiary">Build Web Application with J2ee and use of Core Java in Applications</h2>
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
                                        <ul>
                                            <li>
                                                <h2 className="heading-tertiary">INTRODUCTION</h2>
                                                <img src="assets/img/java.jpg" alt="java" style={{float: 'left', marginRight: '2em'}}/>
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
                                        <h2 className="heading-tertiary">Build Web Application with J2ee and use of Core Java in Applications</h2>
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
                                        <button type="button" id="tabFade-php-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-php-pane-1" role="tab" aria-controls="tabFade-php-pane-1" aria-selected="true">Panel 1</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-php-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-php-pane-2" role="tab" aria-controls="tabFade-php-pane-2" aria-selected="false">Panel 2</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-php-3" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-php-pane-3" role="tab" aria-controls="tabFade-php-pane-3" aria-selected="false">Panel 3</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-php-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-php-1">
                                        <p>php 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-php-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-php-2">
                                        <p>php 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-php-pane-3" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-php-3">
                                        <p>php 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="tabVertical-pane-oracle-3" className="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-oracle-3">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-oracle-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-oracle-pane-1" role="tab" aria-controls="tabFade-oracle-pane-1" aria-selected="true">Panel 1</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-oracle-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-oracle-pane-2" role="tab" aria-controls="tabFade-oracle-pane-2" aria-selected="false">Panel 2</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-oracle-3" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-oracle-pane-3" role="tab" aria-controls="tabFade-oracle-pane-3" aria-selected="false">Panel 3</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-oracle-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-oracle-1">
                                        <p>oracle 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-oracle-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-oracle-2">
                                        <p>oracle 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-oracle-pane-3" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-oracle-3">
                                        <p>oracle 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="tabVertical-pane-sqlServer-4" className="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-sqlServer-4">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-sqlServer-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-sqlServer-pane-1" role="tab" aria-controls="tabFade-sqlServer-pane-1" aria-selected="true">Panel 1</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-sqlServer-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-sqlServer-pane-2" role="tab" aria-controls="tabFade-sqlServer-pane-2" aria-selected="false">Panel 2</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-sqlServer-3" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-sqlServer-pane-3" role="tab" aria-controls="tabFade-sqlServer-pane-3" aria-selected="false">Panel 3</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-sqlServer-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-sqlServer-1">
                                        <p>sqlServer 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-sqlServer-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-sqlServer-2">
                                        <p>sqlServer 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-sqlServer-pane-3" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-sqlServer-3">
                                        <p>sqlServer 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="tabVertical-pane-mySql-5" className="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-mySql-5">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-mySql-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-mySql-pane-1" role="tab" aria-controls="tabFade-mySql-pane-1" aria-selected="true">Panel 1</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-mySql-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-mySql-pane-2" role="tab" aria-controls="tabFade-mySql-pane-2" aria-selected="false">Panel 2</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-mySql-3" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-mySql-pane-3" role="tab" aria-controls="tabFade-mySql-pane-3" aria-selected="false">Panel 3</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-mySql-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-mySql-1">
                                        <p>mySql 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-mySql-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-mySql-2">
                                        <p>mySql 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-mySql-pane-3" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-mySql-3">
                                        <p>mySql 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="tabVertical-pane-cProg-6" className="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-cProg-6">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-cProg-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-cProg-pane-1" role="tab" aria-controls="tabFade-cProg-pane-1" aria-selected="true">Panel 1</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-cProg-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-cProg-pane-2" role="tab" aria-controls="tabFade-cProg-pane-2" aria-selected="false">Panel 2</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-cProg-3" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-cProg-pane-3" role="tab" aria-controls="tabFade-cProg-pane-3" aria-selected="false">Panel 3</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-cProg-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-cProg-1">
                                        <p>cProg 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-cProg-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-cProg-2">
                                        <p>cProg 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-cProg-pane-3" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-cProg-3">
                                        <p>cProg 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="tabVertical-pane-cPlus-7" className="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-cPlus-7">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-cPlus-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-cPlus-pane-1" role="tab" aria-controls="tabFade-cPlus-pane-1" aria-selected="true">Panel 1</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-cPlus-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-cPlus-pane-2" role="tab" aria-controls="tabFade-cPlus-pane-2" aria-selected="false">Panel 2</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-cPlus-3" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-cPlus-pane-3" role="tab" aria-controls="tabFade-cPlus-pane-3" aria-selected="false">Panel 3</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-cPlus-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-cPlus-1">
                                        <p>cPlus 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-cPlus-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-cPlus-2">
                                        <p>cPlus 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-cPlus-pane-3" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-cPlus-3">
                                        <p>cPlus 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="tabVertical-pane-dotNet-8" className="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-dotNet-8">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-dotNet-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-dotNet-pane-1" role="tab" aria-controls="tabFade-dotNet-pane-1" aria-selected="true">Panel 1</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-dotNet-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-dotNet-pane-2" role="tab" aria-controls="tabFade-dotNet-pane-2" aria-selected="false">Panel 2</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-dotNet-3" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-dotNet-pane-3" role="tab" aria-controls="tabFade-dotNet-pane-3" aria-selected="false">Panel 3</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-dotNet-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-dotNet-1">
                                        <p>dotNet 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-dotNet-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-dotNet-2">
                                        <p>dotNet 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-dotNet-pane-3" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-dotNet-3">
                                        <p>dotNet 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses;