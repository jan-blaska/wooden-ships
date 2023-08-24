'use client';

import Image from 'next/image';

const Animation = () => {
	return (
		<div className="animation-container">
			<section>
				<div className='animations'>
					<Image
						src="cartoon-clouds/cartoon-cloud-1.svg"
						className='cartoon-cloud-1 w-[180px] md:w-[250px] hidden lg:block'
						alt="cartoon-cloud-1"
						height={0}
						width={0}
						sizes="100vw"
					/>
					<Image
						src="cartoon-clouds/cartoon-cloud-2.svg"
						className='cartoon-cloud-2 w-[180px] md:w-[250px]'
						alt="cartoon-cloud-2"
						height={0}
						width={0}
						sizes="100vw"
					/>
					<Image
						src="cartoon-clouds/cartoon-cloud-3.svg"
						className='cartoon-cloud-3 w-[180px] md:w-[250px] lg:hidden xl:block'
						alt="cartoon-cloud-3"
						height={0}
						width={0}
						sizes="100vw"
					/>
					<Image
						src="cartoon-clouds/cartoon-cloud-4.svg"
						className='cartoon-cloud-4 w-[180px] md:w-[250px] hidden lg:block'
						alt="cartoon-cloud-4"
						height={0}
						width={0}
						sizes="100vw"
					/>
					<Image
						src="cartoon-clouds/cartoon-sun-2.svg"
						className='cartoon-sun absolute left-4 md:left-12 bottom-[40vh] w-[120px] md:w-[180px]'
						alt="cartoon-sun"
						height={0}
						width={0}
						sizes="100vw"
					/>
					<Image
                        src="/logos/wooden-ships-logo-just-text-white.svg"
                        className='logo-cloud w-[200px] h-[200px] md:w-[300px] md:h-[300px] bottom-[25vh] md:bottom-[20vh]'
                        alt="band-logo"
                        height={0}
						width={0}
						sizes="100vw"
                    />
					<Image
						src="/pirate-boat.svg"
						className='pirate-boat w-[250px] md:w-[350px] lg:w-[450px]'
						alt="pirate-boat"
						height={0}
						width={0}
						sizes="100vw"
					/>
					<div className="wave" id="wave1"></div>
					<div className="wave" id="wave2"></div>
					<div className="wave" id="wave3"></div>
					<div className="wave" id="wave4"></div>
					<div className="under-water"></div>
				</div>
			</section>
		</div>
	);
}

export default Animation;