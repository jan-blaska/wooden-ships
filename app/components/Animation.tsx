'use client';

import Image from 'next/image';

const Animation = () => {
	return (
		<div className="wave-container">
			<section>
				<div className='waves'>
					<div className="cloud-1">
						<Image
							src="cartoon-clouds/cartoon-cloud-1.svg"
							className='cartoon-cloud-1'
							alt="cartoon-cloud-1"
							height={0}
							width={0}
							sizes="100vw"
							style={{ width: "250px" }}
						/>
						<Image
							src="cartoon-clouds/cartoon-cloud-2.svg"
							className='cartoon-cloud-2'
							alt="cartoon-cloud-2"
							height={0}
							width={0}
							sizes="100vw"
							style={{ width: "250px" }}
						/>
						<Image
							src="cartoon-clouds/cartoon-cloud-3.svg"
							className='cartoon-cloud-3'
							alt="cartoon-cloud-3"
							height={0}
							width={0}
							sizes="100vw"
							style={{ width: "250px" }}
						/>
						<Image
							src="cartoon-clouds/cartoon-cloud-4.svg"
							className='cartoon-cloud-4'
							alt="cartoon-cloud-4"
							height={0}
							width={0}
							sizes="100vw"
							style={{ width: "250px" }}
						/>
						<Image
							src="cartoon-clouds/cartoon-sun-2.svg"
							className='cartoon-sun'
							alt="cartoon-sun"
							height={0}
							width={0}
							sizes="100vw"
							style={{ width: "180px" }}
						/>
					</div>

					<Image
                        src="/logos/wooden-ships-logo-just-text-white.svg"
                        className='logo-cloud'
                        alt="band-logo"
                        height={220}
                        width={220}
                    />
					{/* <h2>Wooden<br />ships</h2> */}

					<div className="boat">
						<Image
							src="/pirate-boat.svg"
							className='pirate-boat'
							alt="pirate-boat"
							height={0}
							width={0}
							sizes="100vw"
							style={{ width: "600px" }}
						/>
					</div>
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