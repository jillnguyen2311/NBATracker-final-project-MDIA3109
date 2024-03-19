import Image from 'next/image'
import Nav from './components/Nav'
import Head from 'next/head'
import Footer from './components/Footer'

export default function PlayerOdds() {
    return (
        <main style={{ fontFamily: "Almarai, sans-serif" }}>
            <Head>
                <title>Sign Up</title>
            </Head>

            <Nav />
            <h1 className="text-black text-center font-bold text-4xl py-10"></h1>
            <section className="text-[#595959] body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-4xl text-[#595959]">Keep up to date on NBA with everything OddBall.</h1>
                        <p className="leading-relaxed mt-4 text-[#595959]">Never miss a thing with relevant news and insights into the all things basketball</p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-[#595959] text-lg font-medium title-font mb-5">Sign Up</h2>
                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text--[#595959]">Full Name</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-[#FC9F5B] focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text--[#595959]">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-[#FC9F5B] focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text--[#595959]">Password</label>
                            <input type="password" id="password" name="password" placeholder='**********' className="w-full bg-white rounded border border-gray-300 focus:border-[#FC9F5B] focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                        </div>
                        <button className="text-white bg-[#FC9F5B] border-0 py-2 px-8 focus:outline-none hover:bg-[#00A375] rounded text-lg">Sign Up</button>
                        <p className="text-xs text-gray-500 mt-3">Already have an account? <u>Sign In</u></p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}