import React from 'react'

const Login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-register bg-center bg-cover">
        <div className="w-1/4 p-5 bg-white">
            <h1 className="font-light text-2xl mb-2">SING IN</h1>
            <form className="flex flex-col flex-wrap">
                <input className="flex-1 min-w-[40%] mt-3 p-2 border" placeholder='username' />
                <input className="flex-1 min-w-[40%] mt-3 p-2 border" placeholder='password' />
                <button className="border-none my-3 py-4 px-3 bg-teal-500 text-white w-2/5">LOGIN</button>
                <p className="my-1 text-xs cursor-pointer underline">FORGOT PASSWORD?</p>
                <p className="my-1 text-xs cursor-pointer underline">CREATE AN ACCOUNT</p>
            </form>
        </div>
    </div>
  )
}

export default Login