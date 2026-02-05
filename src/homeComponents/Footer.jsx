export default function Example() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm 
                text-white 
                pt-10
                bg-gradient-to-r from-black via-[#1F2A44] to-[#4682B4]
            ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                    
                    {/* Logo + Description */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <a href="/">
                            <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M47.904 28.28q-1.54 0-2.744-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.82 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.868 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.456.924-3.276.924"
                                    fill="white"
                                />
                                <path 
                                    d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585"
                                    stroke="#FFD700" 
                                    strokeWidth="2.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>

                        <p className="text-sm/7 mt-6 text-white/90">
                            Ekho Future is your trusted partner across multiple industries — from fashion and dental care to IT solutions, EV charging, and sustainable living products.
                        </p>
                    </div>

                    {/* Company Section */}
                    <div className="flex flex-col lg:items-center lg:justify-center">
                        <div className="flex flex-col text-sm space-y-2.5">
                            <h2 className="font-semibold mb-5 text-white">Our Services</h2>
                            <a className="hover:text-yellow-300 transition" href="/oldschool">Fashion Boutiques</a>
                            <a className="hover:text-yellow-300 transition" href="/lubnas">Dental Studio</a>
                            <a className="hover:text-yellow-300 transition" href="/it">IT Solutions</a>
                            <a className="hover:text-yellow-300 transition" href="/ev">EV Charging Stations</a>
                            <a className="hover:text-yellow-300 transition" href="/ekhora">Landscape Design</a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h2 className="font-semibold text-white mb-5">Stay Connected</h2>
                        <div className="text-sm space-y-6 max-w-sm">
                            <p className="text-white/90">
                                Get the latest updates on our services, exclusive offers, and industry insights delivered to your inbox.
                            </p>

                            <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-white/10">
                                <input 
                                    className="focus:ring-2 bg-white/20 placeholder-white/70 text-white ring-yellow-300 outline-none w-full max-w-64 py-2 rounded px-2" 
                                    type="email" 
                                    placeholder="Enter your email" 
                                />
                                <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer bottom */}
                <p className="py-4 text-center border-t mt-6 border-white/20 text-white/80">
                    Copyright 2025 © 
                    <a className="ml-1 text-yellow-300 hover:underline" href="/">
                        Ekho Future
                    </a> 
                    All Rights Reserved.
                </p>
            </footer>
        </>
    );
}