import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './JoinUs.css';

const JoinUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className="join" id='join'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className='stroke-text'> WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='user_mail' placeholder='Enter Your Email Addres'/>
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    );
};

export default JoinUs;