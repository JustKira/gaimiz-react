import React, {useState} from 'react'
import CreateEvent from '../../components/CreateEvent'
import RefreshProducts from '../../components/RefreshProducts'

const AdminPage = () => {
    const [rpanel,
        setRpanel] = useState(false)
    const [epanel,
        setEpanel] = useState(false)
    return (
      
        <div className="bg-black mx-96 px-10 pt-4 pb-10 my-10 relative rounded-3xl">
          <img src="assets/background.png" className="fixed -top-10 left-0 -z-10"/>
            <h1
                className='text-white my-3 py-2 font-semibold text-2xl uppercase duration-200 hover:text-cyan-400 hover:bg-slate-900'
                onClick={() => setEpanel(!epanel)}>CreateEvent</h1>

            {epanel
                ? <CreateEvent/>
                : <div></div>}

            <h1
                className='text-white my-3 py-2 font-semibold text-2xl uppercase duration-200 hover:text-cyan-400 hover:bg-slate-900'
                onClick={() => setRpanel(!rpanel)}>RefreshProducts</h1>
            {rpanel
                ? <RefreshProducts/>
                : <div></div>}
        </div>

    )
}

export default AdminPage