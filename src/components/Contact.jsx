import MapChart from './Map';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [succ, setSucc] = useState(null);
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_4iv3cai', 'template_hw7kjmi', ref.current, {
        publicKey: 'oCehBP_N8Gbmg9XZo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSucc(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSucc(false);
        }
      );
  };
  return (
    <div
      id='contact'
      className='flex sm:flex-row flex-col sm:h-screen h-[60vh] sm:mt-72 mt-10'
    >
      <div className='sm:w-1/2 absolute sm:relative w-full sm:pl-8 sm:pt-8 sm:pb-8 mt-12 sm:ml-20'>
        <div className='relative w-56 m-auto mb-10'>
          <h1 className=' text-white font-bold text-4xl text-center after:absolute after:content-[""] after:h-1 after:w-28 after:bg-white after:left-10 after:bottom-[-14px]'>
            Contact Us
          </h1>
        </div>

        <form ref={ref} onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='name' className='text-white'>
              Name:
            </label>
            <input
              required
              type='text'
              id='name'
              name='name'
              className='border border-white p-2 w-full'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='text-white'>
              Email:
            </label>
            <input
              type='email'
              required
              id='email'
              name='email'
              className='border border-white p-2 w-full'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='text-white'>
              Message:
            </label>
            <textarea
              id='message'
              required
              name='message'
              className='border border-white p-2 w-full h-32'
            />
          </div>
          <button
            type='submit'
            className='bg-orange-500 text-white p-2 rounded hover:bg-orange-600'
          >
            Submit
          </button>
        </form>
        <p className='text-green-500'>{succ && 'message sent successfully'}</p>
      </div>
      <div className='sm:w-1/2 w-full  '>
        <MapChart />
      </div>
    </div>
  );
};

export default Contact;
