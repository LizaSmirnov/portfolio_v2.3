import React, { useState } from 'react';
import './Contact.css';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false)

  function encode(data) { // Function to encode the data submitted through the form
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }
  


  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false)
    fetch('/',{
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
    .then(() => {
    setSuccess(true)
    setName('')
    setEmail('')
    setMessage('')
    setError('')
    })
    .catch((error) => alert(error));
  };

  const handleBlur = () => {
    if (email === '') {
      setError('FIELD IS REQUIRED.');
    } else {
      setError('');
    }
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError('INVALID EMAIL ADDRESS.');
    } else {
      return emailRegex.test(email);
    }
  };

  return (
    <div class='card card-side bg-base-100 shadow-xl justify-center' id='Contact'>
    <form onSubmit={handleSubmit}>
      <div>
      <h2 class="card-title text-accent justify-center text-2xl">Contact</h2>
        <h2 class="card-title btn-outline btn-accent justify-center text-xl">Get in touch</h2>
        <input
          type="text"
          id="name"
          placeholder="Name" 
          class="input input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setName(e.target.value)}
          onBlur={handleBlur}
          required value = {name}
        />
        {error && <p className="error">{error}</p>}
      </div>
      <div>
        <input
          type="email"
          id="email"
          placeholder="Email Address" 
          class="input input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleBlur}
          verify={validateEmail}
          required value = {email}
        />
        {error && <p className="error">{error}</p>}
      </div>
      <div>
        <textarea
          id="message"
          placeholder="Message to me" 
          class="input input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setMessage(e.target.value)}
          onBlur={handleBlur}
          required value = {message}
        >
        </textarea>
          {error && <p className="error">{error}</p>}
      </div >
      <div>
      <button type='submit' className='contactButtons'>Send Message</button>
        <div>
          <div className='messageSuccessMsgBox' class='alert alert-success'>{success && "message sent"}</div>
        </div> </div> 
    </form>
    </div>


  );
}


export default Contact;
