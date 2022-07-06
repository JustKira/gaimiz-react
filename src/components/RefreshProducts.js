import React, {useState} from 'react'

const RefreshProducts = () => {

    const [code,
        setCode] = useState("")

    const submit = (e) => {
        e.preventDefault()
        console.log(code)
        let response = fetch('http://127.0.0.1:8000/api/prod-refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'code': code})
        })
    }

    return (
        <div className='ml-12'>
            <button
                className=' text-white border-4 my-10 py-2 px-12 w-1/2 tracking-widest text-lg font-light bg-cyan-400 border-cyan-400 rounded-2xl uppercase drop-shadow-black'
                onClick={() => window.open("https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=3951948" +
                    "a-22cb-46ee-b218-9c994779ba16&scope=files.readwrite.all&response_type=code&redir" +
                    "ect_uri=https://login.microsoftonline.com/common/oauth2/nativeclient")}>
                Get Code
            </button>
            <form className='flex justify-center items-center' onSubmit={submit}>
                <label className='text-white my-3 font-semibold text-lg uppercase'>Code</label>
                <input
                    className="px-10 py-3 mx-3 text-slate-600 relative bg-gray-300 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full"
                    type="text"
                    onChange={(e) => setCode(e.target.value)}/>
                <button
                    className=' text-white border-4 my- py-1 w-1/2 tracking-widest text-lg font-light bg-cyan-400 border-cyan-400 rounded-2xl uppercase drop-shadow-black'
                    type='submit'>
                    Refresh</button>
            </form>
        </div>
    )
}

export default RefreshProducts