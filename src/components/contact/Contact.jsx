import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss";

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //order, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY
    emailjs.sendForm('service_ymg9slm', 'template_cduncr8', form.current, '1NU5Mi5w3MFel77Fc')
      .then((result) => {
          console.log(result.text);
          setMessage(true);
      }, (error) => {
          console.log(error.text);
      });

  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        {message && <span>Thanks, you'll be hearing from me soon :)</span>}
        <form ref={form} onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />   
        </form>
      </div>
    </div>
  );
}
