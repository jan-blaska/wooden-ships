'use client';

import { youtubeVideos } from "../util/data";
import { useState } from 'react';
import Image from 'next/image';


const Videos = () => {
	const [windowWidthMobile, setWindowWidthMobile] = useState(false);

	const changeWindowWidthMobile = () => {
		if (window.innerWidth < 600) {
			setWindowWidthMobile(true);
		} else {
			setWindowWidthMobile(false);
		}
	}


	window.addEventListener('resize', changeWindowWidthMobile);

	return (
		<div id="videos">

			<div className="flex flex-col justify-center items-center py-24 px-8">
				<h3 className="text-white border-b-[2px] pb-3 px-4 mb-6 border-purple-600 uppercase text-3xl lg:max-w-7xl">
					Videa
				</h3>
				{/* VIDEA Z YOUTUBE*/}
				<div className="flex flex-wrap justify-center gap-10 lg:max-w-7xl">
					{youtubeVideos.map(video => (
						<div key={video.id} className="text-white">
							<iframe width={windowWidthMobile ? 300 : 560} height={windowWidthMobile ? 170 : 320} src={video.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
							</iframe>
							{/* <h3 className="text-xl mt-1">{video.name}</h3> */}
						</div>

					))}
				</div>

			</div>
			<Image
				src="/images/adela-and-guitarists.jpg"
				className=''
				alt="adela-and-guitarists"
				height={0}
				width={0}
				sizes="100vw"
				style={{ width: "100%", height: "auto" }}
			/>
		</div>
	);
}

export default Videos;