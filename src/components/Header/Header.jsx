import logo from '../../assets/logo.svg'
import Menu from '../../reUsableComponents/Menu'
export default function Header() {
    return (
        <>
            <header className="fixed w-full">
                <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <a href="#" className="flex items-center">
                            <img src={logo} className="h-6 mr-3 sm:h-9"
                                alt="Landwind Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Learn with
                                Sumit</span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <a href="#" target="_blank"
                                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Download</a>

                        </div>
                        <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="#"
                                        className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                                        aria-current="page">Home</a>
                                </li>
                                <Menu name={'Company'} />
                                <Menu name={'Marketplace'} />
                                <Menu name={'Features'} />
                                <Menu name={'Team'} />
                                <Menu name={'Contact'} />
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
