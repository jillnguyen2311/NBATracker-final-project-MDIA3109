export default function Footer() {
    return (
        <footer className="bg-gray-200">
            <div className="container mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <a className="flex title-font font-medium items-center text-gray-900">
                    <img src="/images/OddBall.png" className="w-50 h-auto mr-2"></img> {/* Adjusted width to w-20 */}
                    <span className="text-3xl"></span> {/* Increased font size to text-3xl */}
                </a>

                {/* Copyright Text */}
                <div className="text-base font-medium black mt-4 md:mt-0">© 2024 OddBall</div>

                {/* Categories */}
                <div className="md:w-1/4 md:px-4 mt-5">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a href="/live-games" className="text-[#595959] hover:text-gray-900 hover:underline">Live Games</a>
                        </li>
                        <li>
                            <a href="/news" className="text-[#595959] hover:text-gray-900 hover:underline">Latest News</a>
                        </li>
                        <li>
                            <a href="/season-stats" className="text-[#595959] hover:text-gray-900 hover:underline">Season Stats</a>
                        </li>
                        <li>
                            <a href="/about" className="text-[#595959] hover:text-gray-900 hover:underline">About</a>
                        </li>
                    </nav>
                </div>

                {/* Subscribe Form */}
                <div className="md:w-1/4 md:px-4 mt-4 md:mt-0 flex flex-col justify-center"> {/* Centering the form */}
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm ">SUBSCRIBE</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center"> {/* Centering form elements */}
                        <div className="relative w-40 sm:w-auto mb-3 md:mb-0 mr-4">
                            <label htmlFor="footer-field" className="leading-7 text-md text-[#595959]">Join our mailing list</label>
                            <div className="flex flex-col md:flex-row gap-3 flex-wrap ">
                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                                <a href="/sign-up" className="flex-shrink-0 inline-flex text-white bg-[#FC9F5B] border-0 py-2 px-6 focus:outline-none hover:bg-[#FC9F5B] rounded">
                                    <button>Sign Up</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 ">Don't miss a thing</p>
                </div>
            </div>
        </footer>
    )
}
