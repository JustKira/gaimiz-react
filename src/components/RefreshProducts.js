import React, {useState} from 'react'

const RefreshProducts = () => {

    const [code,
        setCode] = useState("")

    const submit = (e) => {
        e.preventDefault()
        console.log(code)
        let response = fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/prod-refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'code': code})
        })
    }

    return (
        <div className='md:ml-12'>
            <button
                className=' text-white border-4 my-10 py-2 px-12 w-full tracking-widest text-lg font-light bg-cyan-400 border-cyan-400 rounded-2xl uppercase drop-shadow-black'
                onClick={() => window.open("https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=3951948" +
                    "a-22cb-46ee-b218-9c994779ba16&scope=files.readwrite.all&response_type=code&redir" +
                    "ect_uri=https://login.microsoftonline.com/common/oauth2/nativeclient")}>
                Get Code
            </button>
            <form className='flex flex-col justify-center items-center md:items-end' onSubmit={submit}>
                <div className='flex justify-between w-full'>
                    <label className='text-white my-3 mx-10 font-semibold text-lg uppercase '>Code</label>
                    <input
                        className="px-10 py-3 text-slate-600 relative bg-gray-300 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full"
                        type="text"
                        onChange={(e) => setCode(e.target.value)}/>
                </div>
                <button
                    className=' text-white mt-4 border-4 px-3 py-3 w-full md:w-1/2 tracking-widest text-sm md:text-lg font-light bg-cyan-400 border-cyan-400 rounded-2xl uppercase drop-shadow-black'
                    type='submit'>
                    Refresh</button>
            </form>
        </div>
    )
}

export default RefreshProducts