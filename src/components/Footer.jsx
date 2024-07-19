import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#282828] text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
    
          <div className='px-20'>
            <h2 className='text-lg font-semibold mb-4'>Programs</h2>
            <ul className='space-y-5'>
              <li>Data Science & AI</li>
              <li>Product Management</li>
              <li>Business Analytics</li>
              <li>Digital Transformation</li>
              <li>Business Management</li>
              <li>Project Management</li>
              <li>Strategy & Leadership</li>
              <li>Senior Management</li>
              <li>Fintech</li>
            </ul>
          </div>

  
          <div className='space-y-5 text-sm'>
            <h2 className='text-lg font-semibold mb-4'>Contact Us</h2>
            <p>Email us (for Data Science Queries): admissions@accredian.com</p>
            <p>Email us (for Product Management Queries): pm@accredian.com</p>
            <p>Data Science Admission Helpline: +91 9979625322 (9 AM - 7 PM)</p>
            <p>Product Management Admission Helpline: +91 9625111095</p>
            <p>Enrolled Student Helpline: +91 7996232907</p>
            <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
            <div className='mt-4'>
              <h3 className='text-md font-semibold mb-2'>Follow Us</h3>
              <div className='flex space-x-4'>
                <a href="#"><img src="facebook-icon.svg" alt="Facebook" className="w-6 h-6" /></a>
                <a href="#"><img src="linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" /></a>
                <a href="#"><img src="twitter-icon.svg" alt="Twitter" className="w-6 h-6" /></a>
                <a href="#"><img src="youtube-icon.svg" alt="YouTube" className="w-6 h-6" /></a>
                <a href="#"><img src="instagram-icon.svg" alt="Instagram" className="w-6 h-6" /></a>
              </div>
            </div>
          </div>

          <div className='px-20'>
            <h2 className='text-lg font-semibold mb-4 '>Accredian</h2>
            <ul className='space-y-5'>
              <li>About</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Admission Policy</li>
              <li>Referral Policy</li>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>Master FAQs</li>
            </ul>
          </div>
        </div>
        <div className='text-center mt-20'>
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
