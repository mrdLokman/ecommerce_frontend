import React from 'react'

const Register = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-register bg-center bg-cover">
        <div className="w-4/5 tablet:w-2/5 p-5 bg-white">
            <h1 className="font-light text-2xl mb-2">CREATE AN ACCOUNT</h1>
            <form className="flex flex-wrap">
                <input className="flex-1 min-w-[40%] mt-5 mr-3 p-2 border" placeholder='first name' />
                <input className="flex-1 min-w-[40%] mt-5 mr-3 p-2 border" placeholder='last name' />
                <input className="flex-1 min-w-[40%] mt-5 mr-3 p-2 border" placeholder='username' />
                <input className="flex-1 min-w-[40%] mt-5 mr-3 p-2 border" placeholder='email' />
                <input className="flex-1 min-w-[40%] mt-5 mr-3 p-2 border" placeholder='password' />
                <input className="flex-1 min-w-[40%] mt-5 mr-3 p-2 border" placeholder='confirm password' />
                <span className="my-5 text-sm">
                    By creating an account, i agree that my personal data is proccessed according to 
                    <b> PRIVACY POLICY </b>
                </span>
                <button className="border-none py-4 px-3 bg-teal-500 text-white w-2/5">CREATE</button>
            </form>
        </div>
    </div>
  )
}

export default Register