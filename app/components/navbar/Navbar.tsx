'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
	const [scroll, setScroll] = useState(false);

	const changeNavbarSize = () => {
		if(window.scrollY > 0) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	}

	window.addEventListener('scroll', changeNavbarSize);


	return (
		<div>
			<nav className={`${scroll ? 'h-18' : 'h-36'} fixed w-full bg-black z-20 top-0 left-0 right-0`} >
				<div className="justify-between px-0 py-6 mx-auto md:flex md:items-center md:pr-8 lg:max-w-7xl">
					<div>
						<div className="flex justify-between items-center pl-8">
							{/* flex items-center justify-between py-3 md:py-5 md:block */}
							{/* LOGO */}
							<Link href="/">
								<Image
									alt="Logo"
									className="cursor-pointer"
									height={`${scroll ? '40' : '70'}`}
									width={`${scroll ? '40' : '70'}`}
									src="logos/wooden-ships-logo-anchor-white.svg"
								/>
							</Link>
							{/* HAMBURGER BUTTON FOR MOBILE */}
							<div className="md:hidden">
								<button
									className="pr-8 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<Image src="/close.svg" width={30} height={30} alt="logo" />
									) : (
										<Image
											src="/hamburger-menu.svg"
											width={30}
											height={30}
											alt="logo"
											className="focus:border-none active:border-none"
										/>
									)}
								</button>
							</div>

						</div>
					</div>

					<div
						className={`md:block bg-black mt-7 md:mt-0
								${navbar ? '' : 'hidden'} `}
					>
						<ul className="items-center justify-center md:flex">
							<li className="uppercase py-4 md:py-0 text-xl text-white text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
								<Link href="#band" onClick={() => setNavbar(!navbar)}>
									kapela
								</Link>
							</li>
							<li className="uppercase py-4 md:py-0 md:pl-8 text-xl text-white text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
								<Link href="#videos" onClick={() => setNavbar(!navbar)}>
									Videa
								</Link>
							</li>
							<li className="uppercase py-4 md:py-0 md:pl-8 text-xl text-white text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
								<Link href="#concerts" onClick={() => setNavbar(!navbar)}>
									Koncerty
								</Link>
							</li>
							{/*<li className="uppercase py-4 md:py-0 md:pl-8 text-xl text-white text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
								<Link href="#obchod" onClick={() => setNavbar(!navbar)}>
									Obchod
								</Link>
							</li>*/}
						</ul>
					</div>

				</div>
			</nav>
		</div>
	);
}

export default Navbar;