import React from 'react';

const Map = () => {
  return (
    <div className='p-6'>
        <div className='flex justify-between mx-4 mb-4'>
    <div className='flex gap-10 '>
            <button className='bg-yellow-400 text-black  px-4 py-2 rounded'>Recovery</button>
            <button className='border border-yellow-400 rounded px-4 py-2'>Delivery</button>
            <button className='border border-yellow-400 rounded px-4 py-2'>Car Services</button>
            <button className='border border-yellow-400 rounded px-4 py-2'>Movers</button>
        </div>
        <button className='bg-yellow-400 text-black rounded-full px-4 text-sm'>Sort By: Region</button>
        </div>
    <div className="w-full flex justify-center items-center p-4 rounded">
        
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.64236278531!2d73.07320327479474!3d33.64051393936022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11a4d1a8d62fd41%3A0x1feebab68518189!2sCodesVista!5e0!3m2!1sen!2s!4v1753251776780!5m2!1sen!2s"
        width="100%"
        height="400"
        className='rounded-2xl'
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  );
};

export default Map;
