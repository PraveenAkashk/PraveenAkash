import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AddressInfo from "../assets/img/address-logo.svg";
import LocationInfo from "../assets/img/Phone-logo.svg";
import EmailInfo from "../assets/img/Email-logo.svg";
import "../assets/stylesheets/components/Contact.scss";

let Contact = () => {
    // State hook for the username
    const [userName, setuserName] = useState("");
    const [userEmail, setuserEmail] = useState("")
    const [userSubject, setuserSubject] = useState("")
    const [userMessage, setuserMessage] = useState("")
    const [Errordata, setErrordata] = useState({
        UserNameErr: "",
        UserEmailErr: "",
        UserSubjectErr: "",
        UserMessageErr: ""
    })
    let [Issubmitted,setIssubmitted]=useState(false)



    // Change handler for form fields
    const changeHandler = (event) => {
        if (event.target.name === "Name") {
            setuserName(event.target.value);
        } else if (event.target.name === "Email") {
            setuserEmail(event.target.value)
        } else if (event.target.name === "subject") {
            setuserSubject(event.target.value)
        } else if (event.target.name === "message") {
            setuserMessage(event.target.value)
        }
    };

    // Submit handler for the form
    const submitHandler = (event) => {
        event.preventDefault();
        let ISvalid = true
        if (userName === "") {
            ISvalid = false
            setErrordata((prev) => ({ ...prev, UserNameErr: "Invalid Name" }))
        } else {
            ISvalid = true
            setErrordata((prev) => ({ ...prev, UserNameErr: "" }))
        }

        if ((userEmail === "") && (!userEmail.includes("@"))) {
            ISvalid = false
            setErrordata((prev) => ({ ...prev, UserEmailErr: "Invalid Email" }))
        } else {
            ISvalid = true
            setErrordata((prev) => ({ ...prev, UserEmailErr: "" }))
        }


        if (userSubject === "") {
            ISvalid = false
            setErrordata((prev) => ({ ...prev, UserSubjectErr: "Invalid Subject" }))
        } else {
            ISvalid = true
            setErrordata((prev) => ({ ...prev, UserSubjectErr: "" }))
        }

        if (userMessage === "") {
            ISvalid = false
            setErrordata((prev) => ({ ...prev, UserMessageErr: "Invalid Subject" }))
        } else {
            ISvalid = true
            setErrordata((prev) => ({ ...prev, UserMessageErr: "" }))
        }

        if (ISvalid) {

            const service_id="service_203sb71";
            const template_id="template_7kzl57q";
            const PublicKey="PZD6zhDxBTeoeH8fr"

            let userData = {
                UserName: userName,
                UserEmail: userEmail,
                UserSubject: userSubject,
                UserMessage: userMessage
            }

            console.log("userData", userData);
            setIssubmitted(true);
            setTimeout(() => {
                setIssubmitted(false); // Hide message after 3 seconds
            }, 3000);
            setuserName(""); // Clear the input after form submission
            setuserEmail(""); // Clear the input after form submission
            setuserSubject(""); // Clear the input after form submission
            setuserMessage(""); // Clear the input after form submission
        }


    };

    console.log("Errordata", Errordata)

    return (
        <div className="contact-main">
            <Container>
                <div className="contact-wrap">
                    <h2>Contact</h2>
                    <Row>
                        <Col md={6}>
                            <div className="contact-info">
                                <ul>
                                    <li className="contact-list">
                                        <img src={AddressInfo} alt="Location-icon" />
                                        <div>
                                            <h5>Address</h5>
                                            <p>Coimbatore, Tamilnadu, India</p>
                                        </div>
                                    </li>
                                    <li className="contact-list">
                                        <img src={LocationInfo} alt="Location-icon" />
                                        <div>
                                            <h5>Call Us</h5>
                                            <p><a href="tel:9500691394">9500691394</a></p>
                                        </div>
                                    </li>
                                    <li className="contact-list">
                                        <img src={EmailInfo} alt="Location-icon" />
                                        <div>
                                            <h5>Email</h5>
                                            <p><a href="mailto:Praveenkadhiravan52853@gmail.com">Praveenkadhiravan52853@gmail.com</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-wrap">
                                <form id="contact-form" onSubmit={submitHandler}>
                                    <Row>
                                        <Col md={6}>
                                            <div className="form-group">
                                                <label>Name*</label>
                                                <input
                                                    type="text"
                                                    name="Name"
                                                    value={userName} // bind the value to state
                                                    onChange={changeHandler}
                                                />
                                                {Errordata.UserNameErr.length > 0 ? <div className="error">{Errordata.UserNameErr}</div> : null}
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="form-group">
                                                <label>Email*</label>
                                                <input
                                                    type="text"
                                                    name="Email"
                                                    value={userEmail}
                                                    onChange={changeHandler} />
                                                {Errordata.UserEmailErr.length > 0 ? <div className="error">{Errordata.UserEmailErr}</div> : null}
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="form-group">
                                        <label>Subject*</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={userSubject}
                                            onChange={changeHandler} />
                                            {Errordata.UserSubjectErr.length > 0 ? <div className="error">{Errordata.UserSubjectErr}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>Message*</label>
                                        <textarea rows={5}
                                            name="message"
                                            value={userMessage}
                                            onChange={changeHandler} ></textarea>
                                             {Errordata.UserMessageErr.length > 0 ? <div className="error">{Errordata.UserMessageErr}</div> : null}
                                    </div>
                                    <div className="submit-wrap">
                                        <Button type="submit">Submit</Button>
                                    </div>
                                    {Issubmitted && <div className="success-message">Submitted successfully</div>}
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
