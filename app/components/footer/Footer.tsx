'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div>
			<div
				className="pt-80 footer w-full h-auto bg-no-repeat bg-cover bg-bottom"
			>
				<div>
					<div className="flex p-5 gap-2 w-full justify-center">
						<Link href="https://www.facebook.com/woodenships68">
							<Image
								src="/social-media-icons/facebook.png"
								className='icon rounded-lg hover:shadow-md hover:shadow-purple-600'
								alt="facebook-icon"
								height={45}
								width={45}
							/>
						</Link>
						<Link href="https://bandzone.cz/woodenships">
							<Image
								src="/social-media-icons/bandzone-icon.png"
								className='icon rounded-lg hover:shadow-md hover:shadow-purple-600'
								alt="bandzone-icon"
								height={45}
								width={45}
							/>
						</Link>
					</div>
					<p className="bg-orange w-fit mx-auto justify-center text-xl font-bold">
						<span className="text-purple-600 pr-1">Wooden Ships </span> © 2023 | WWW by<span className="text-purple-600 pl-1">fitSoft</span>
					</p>
				</div>
			</div>
			<div className="bg-[#7FAFBA] h-4">

			</div>
		</div>
	);
}

export default Footer;