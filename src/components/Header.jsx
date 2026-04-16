import { useState } from 'react'
import logo from '../assets/images/morisson_logo.png'
import headerData from '../shared/data/HeaderData.jsx'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <header className='  items-center
            px-4 py-3 flex justify-between
            md:px-2 md:py-2 md:grid md:grid-cols-[auto_1fr_auto]
            lg:px-4 lg:py-6
            xl:px-16 xl:py-6
            '>
                <img className='w-[120px] md:w-30 lg:w-40' src={logo} alt=""/>

                <nav className='hidden md:flex justify-center items-center
                md:gap-x-2 md:text-[12px]
                lg:gap-x-4 lg:text-[15px]
                xl:gap-x-8 xl:text-[16px]
                '>
                    {headerData.map((item, i) => (
                        <a key={i}>{item}</a>
                    ))}
                </nav>

                <button className='hidden md:block bg-[#033088] rounded-full text-white
                md:px-[16px] md:py-[4px] md:text-[12px]
                lg:px-[20px] lg:py-[10px] lg:text-[15px]
                xl:px-[22px] xl:py-[14px] xl:text-[16px]
                '>Записаться на урок</button>

                {/* Бургер */}
                <button className='md:hidden flex flex-col gap-[5px]' onClick={() => setMenuOpen(!menuOpen)}>
                    <span className='block w-6 h-[2px] bg-gray-800'/>
                    <span className='block w-6 h-[2px] bg-gray-800'/>
                    <span className='block w-6 h-[2px] bg-gray-800'/>
                </button>
            </header>

            {/* Мобильное меню */}
            {menuOpen && (
                <div className='md:hidden flex flex-col px-4 pb-4 gap-3'>
                    {headerData.map((item, i) => (
                        <a key={i} className='text-[15px] py-2 border-b border-gray-100'>{item}</a>
                    ))}
                    <button className='mt-2 bg-[#033088] rounded-full text-white px-5 py-3 text-[15px]'>
                        Записаться на урок
                    </button>
                </div>
            )}
        </>
    )
}

export default Header