//require("dotenv").config();
import React from 'react';
import styles from './Contact.module.scss';
import emailjs from 'emailjs-com';

const { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID } = process.env;


const Contact = () => {

    console.log('hola', YOUR_SERVICE_ID);
    function sendEmail(e) {
        e.preventDefault();
        
        
        emailjs.sendForm(`${YOUR_SERVICE_ID}`, `${YOUR_TEMPLATE_ID}`, e.target, `${YOUR_USER_ID}`)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset();
      }


    return (
        
            <section className={styles.container}>
                <div className={styles.elements}>
                    <h1>Contact</h1> 
                    <div className={styles.line}></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nostrum provident
                        eligendi tenetur omnis repellat, officia harum iste at illum, corrupti quas
                        incidunt numquam aperiam veritatis commodi ipsum similique temporibus!</p>
                </div>
                <div>
                    <form onSubmit={sendEmail}>
                            <input type="hidden" name="contact_number" />
                            
                            <label>Name</label>
                            <input type="text" name="name" />

                            <label>Email</label>
                            <input type="email" name="email" />

                            <label>Subject</label>
                            <input type="text" name="subject" />

                            <label>Message</label>
                            <textarea name="message" />

                            <input type="submit" value="Send" />
                    </form>
                </div>
            </section>
            
        
    );
};

export default Contact;