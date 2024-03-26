import Image from 'next/image'
import Nav from '../components/Nav'
import Head from 'next/head'
import Footer from '../components/Footer'

export default function PlayerOdds() {
    return (
        <main style={{ fontFamily: "Almarai, sans-serif" }}>
            <Head>
                <title>About</title>
            </Head>

            <Nav />
            <h1 className="text-black text-center font-bold text-4xl py-10">About</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We are made up of four NBA fanatics that are inspired by our love of basketball to make the number one stop for all ball knowledge.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/images/Jesse.png"></img>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Jesse Welk</h2>
                                    <h3 className="text-gray-500 mb-3">UI Developer/Designer</h3>
                                    <span className="inline-flex">
                                        <a href='https://www.linkedin.com/in/jesse-welk-2604301a1/' className="text-gray-500">
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/images/Farbod.jpeg"></img>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Farbod Tandas</h2>
                                    <h3 className="text-gray-500 mb-3">UI Developer/Designer</h3>
                                    <span className="inline-flex">
                                    <a href='https://www.linkedin.com/in/farbodtandas/' className="text-gray-500">
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/images/elijah.png"></img>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Elijah Chan</h2>
                                    <h3 className="text-gray-500 mb-3">UI Developer/Designer</h3>
                                    <span className="inline-flex">
                                    <a href='https://www.linkedin.com/in/elijahrc-chan/' className="text-gray-500">
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/images/jill.jpg"></img>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Jill Nguyen</h2>
                                    <h3 className="text-gray-500 mb-3">UI Developer/Designer</h3>
                                    <span className="inline-flex">
                                    <a href='https://www.linkedin.com/in/jill-nguyen-a27823118/' className="text-gray-500">
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
