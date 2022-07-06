import React, { useState } from 'react'
import LogoPage1 from '../LogoPage1'
import LaptopDims from './LaptopDims'
import LaptopPage1 from './LaptopPage1'
import LaptopPage2 from './LaptopPage2'
import OrderCardLaptopPage from './OrderCardLaptopPage'

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
        <div>
            <img src="assets/background.png" className="fixed -top-10 -z-10"/>
            {page === 1 && (<LaptopPage1 nextPage={() => nextPage()} />)}
            {page === 2 && (<LaptopPage2 previousPage={() => previousPage()} nextPage={() => nextPage()} path={path} setPath={() => setPath()} />)}
            {page === 3 && (<LaptopDims  previousPage={() => previousPage()} nextPage={() => nextPage()} />)}
            {page === 4 && (<LogoPage1  previousPage={() => previousPage()} nextPage={() => nextPage() } path={path}/>)}
            {page === 5 && (<OrderCardLaptopPage  previousPage={() => previousPage()}/>)}
        </div>
    )
}

export default LaptopOrderWizard