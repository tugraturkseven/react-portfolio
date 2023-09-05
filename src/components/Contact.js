import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import emailjs from "@emailjs/browser";
import { useRef, useEffect } from "react";


function Contact({ notify }) {
    const service_key = process.env.REACT_APP_SERVICE_KEY;
    const template_id = process.env.REACT_APP_TEMPLATE_ID;
    const service_id = process.env.REACT_APP_SERVICE_ID;


    useEffect(() => emailjs.init(service_key), []);

    const formRef = useRef();


    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm(service_id, template_id, formRef.current, service_key)
            .then((result) => {
                // show the user a success message
                notify('success');
            }, (error) => {
                // show the user an error
                notify('error');
            });
    };
    return (
        <div className='flex flex-col items-center justify-center py-6' id='contact'>
            <h3 className='text-3xl font-bold flex-1 mb-10'>Contact</h3>
            <form ref={formRef}>
                <div className='items-center justify-center flex flex-col w-96'>
                    <input type="text" placeholder="What's your name?" className="input input-bordered  w-full max-w-xs mb-5" name='user_name' required />
                    <input type="text" placeholder="Your e mail address" className="input input-bordered  w-full max-w-xs mb-5" name='user_email' required />
                    <input type="text" placeholder="What you want to talk about?" className="input input-bordered w-full max-w-xs mb-5" name='topic' required />
                    <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Tell me something here..." name='message' required></textarea>

                    <button onClick={sendEmail} className="btn btn-outline btn-warning w-full max-w-xs my-5">
                        <FontAwesomeIcon icon={faPaperPlane} /> Send</button>

                </div>
            </form>

        </div>
    )
}

export default Contact