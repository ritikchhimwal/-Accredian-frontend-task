import React, { useState } from 'react';
import FormModel from './FormModel';


const Info = () => {

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  
  return (
    <div className='bg-sky-100 py-5 my-20 flex flex-col items-center'>
      <div className='mt-20 flex flex-col items-center'>
        <h2 className="text-2xl mb-8 text-blue-600">How Do I Refer?</h2>
        <div className='flex flex-row items-center space-x-8'>
          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg'>
              <img src='friend.svg' alt="Step 1" className="w-12 h-12" />
            </div>
            <p className="text-center mt-4">Submit referrals <br/>easily via our <br></br>website's referral section.</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg'>
              <img src='document.svg' alt="Step 2" className="w-12 h-12" />
            </div>
            <p className="text-center mt-4">Earn rewards <br/> once your referral<br/> joins our program.</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg'>
              <img src='file.svg' alt="Step 3" className="w-12 h-12" />
            </div>
            <p className="text-center mt-4">Both parties<br/> receive a bonus 30 days after<br/> program enrollment.</p>
          </div>
        </div>
      </div>
      <div className='w-full h-60 bg-cover bg-no-repeat bg-center relative' >
        <div className='flex flex-col items-center justify-center h-full bg-opacity-50 bg-sky-100'>
        <button onClick={handleShowForm} className="bg-blue-600 text-white px-6 py-3 rounded-[80px]">
            Refer Now
          </button>
          {showForm && <FormModel onClose={handleCloseForm} />}
        </div>
      </div>
    </div>
  );
}

export default Info;
