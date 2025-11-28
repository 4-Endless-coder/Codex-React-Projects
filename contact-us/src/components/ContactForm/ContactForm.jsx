import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <section className='container'>
            <button/>
            <button/>
            <button/>

            <form action="">
                <div className="control">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' />
                </div>
                <div className="control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email'/>
                </div>
                <div className="control">
                    <label htmlFor="text">Text</label>
                    <input type="text" name='text' />
                </div>

                <button>Submit</button>

                <div className="contact-image">
                    <img src="\assets\Service_24_7.svg" alt="Service 24_7" />
                </div>
            </form>
      </section>
    </div>
  )
}

export default ContactForm
