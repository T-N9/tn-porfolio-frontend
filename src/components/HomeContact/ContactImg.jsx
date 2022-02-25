import React from 'react';
import MailBox from '../../assets/mailBox.svg';
import MailBoxDark from '../../assets/mailBox-dark.svg';

const ContactImg = () => {
    return (
        <>
            <div className="contact_img">
                <img id="light-box" src={MailBox} alt="" />
                <img id="dark-box" src={MailBoxDark} alt="" />
            </div>
        </>
    );
}

export default ContactImg;
