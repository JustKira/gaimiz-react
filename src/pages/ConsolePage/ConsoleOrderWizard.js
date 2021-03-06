import React, { useState } from 'react'
import LogoPage1 from '../LogoPage1'

import ConsolePage1 from './ConsolePage1'
import ConsolePage2 from './ConsolePage2'
import LogoPageConsole from './LogoPageConsole'
import OrderCardConsolePage from './OrderCardConsolePage'

const LaptopOrderWizard = () => {

    const [page, setPage] = useState(1)
    const [path,
        setPath] = useState()
    const nextPage = () => {
        setPage(page + 1)
    }

    const previousPage = () => {
        setPage(page - 1)
    }

    const setPathFunc = (value) => {
        setPage(value)
    }
    return (
        <div className="">

            {page === 1 && (<ConsolePage1 nextPage={() => nextPage()} />)}
            {page === 2 && (<ConsolePage2 previousPage={() => previousPage()} nextPage={() => nextPage()} path={path} setPath={() => setPath()} />)}
            {page === 3 && (<LogoPageConsole  previousPage={() => previousPage()} nextPage={() => nextPage() } path={path}/>)}
            {page === 4 && (<OrderCardConsolePage  previousPage={() => previousPage()}/>)}
        </div>
    )
}

export default LaptopOrderWizard