import React from 'react';

const Contact = () => {
    return (

        <>

            <div className='container'>
                <h2>Feel free to contact us</h2>
                <div className='contact-form'>
                    <form action="#" method="POST" className='contact-input'>

                        <input 
                            type="text" 
                            name='username' 
                            placeholder='Username'
                            autoComplete='off' 
                            required 
                        />

                        <input 
                            type="email" 
                            name='Email' 
                            placeholder='Email'
                            autoComplete='off' 
                            required 
                        />

                        <textarea  
                            name="message" 
                            cols='30' 
                            rows='6'
                            placeholder='Write your message here......'
                            autoComplete='off' 
                            required></textarea>

                        <input type="submit" value="SEND"/>


                    </form>
                </div>
            </div>

        </>
    )
}

export default Contact;