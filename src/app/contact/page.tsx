import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container"> {/* Background image ke liye container class */}
      <section className='contact-form' style={{
      backgroundImage: "url('/bg2.jpg ')", // Public folder ka path
      backgroundSize: 'cover', // Image ko cover karne ke liye
      backgroundPosition: 'center ', // Center mein position karne ke liye
      height: '100vh', // Full viewport height
      background:'transparent-400'
    }}>
        <h2 className='fade-in'>Contact Us</h2>
        <form>
          <input type='text' placeholder='Full Name' required />
          <input type='email' placeholder='Email Address' required />
          <input type='number' placeholder='Phone Number' required />
          <textarea placeholder='Your Message' rows={5}></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

