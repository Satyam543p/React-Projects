import React from 'react'


function Contact() {
    
    const handler=(e)=>{
      e.preventDefault();
      console.log("Form submited")
    }

  return (
    <div className='w-full bg-white p-5'>
        <h1 className='text-3xl text-orange-500 text-center font-extrabold my-4 '>Contact us</h1>
        
        
        <div className='w-full flex flex-col md:flex-row my-3'>
           <div className=' w-full md:w-1/2  flex flex-col justify-center items-center'>

              <h3 className='text-xl font-bold text-gray-700'>Name</h3>
              <p className='text-lg text-gray-500 mb-3'>Satyam Pandey</p>

    

              <h3 className='text-xl font-bold text-gray-700'>Email</h3>
               <p className='text-lg text-gray-500 mb-3'>satyampandey8686@gmail.com</p>


              <h3 className='text-xl font-bold text-gray-700'>LinkedIn</h3>
              <a 
                 href="https://www.linkedin.com/in/satyam-pandey-037b00341" 
                 target="_blank" 
                 rel="noreferrer"
                 className='text-lg text-orange-600 font-semibold hover:underline cursor-pointer'>
                 Click to View Profile ➜
              </a>


           </div>


          <div className=' w-full md:w-1/2 flex flex-col md:border-l-2 border-orange-600 items-center'>
              <form className='p-10' onSubmit={handler} >
                <div>
                    <label className='text-lg text-gray-500 text-center' >Name</label>
                    <input type="text"  className='w-full mb-4 border-b-2 border-gray-400 text-lg focus:border-orange-600 outline-none' />
                </div>

                <div>
                    <label className='text-lg text-gray-500 text-center' >Email</label> 
                    <input type="email"  className='w-full mb-4 border-b-2 text-lg border-gray-400  focus:border-orange-600 outline-none' />
                 </div>

               <div>
                    <label className='text-lg text-gray-500 text-center'>Message</label>
               </div>

                <textarea className=' w-full p-2 my-2 outline-none border-2 border-gray-400 text-lg focus:border-orange-600 rounded-lg shadow-lg'name="" id=""></textarea>

                <button type='submit' className='w-full bg-orange-600 rounded-lg text-white font-bold p-2 cursor-pointer hover:bg-orange-700 '>Submit</button>
           </form>


           </div>
        </div>
       

    </div>
  )
}

export default Contact