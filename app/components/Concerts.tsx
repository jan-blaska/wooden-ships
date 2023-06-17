'use client';

import { concerts } from "../util/data";
import Link from 'next/link';

const Concerts = () => {
	return (
		<div id="concerts">
			<div className="flex flex-col justify-center items-center py-24 px-8">
				<h3 className="text-white border-b-[2px] pb-3 px-4 mb-8 border-purple-600 uppercase text-3xl lg:max-w-7xl">
					Koncerty
				</h3>
				{/* VIDEA Z YOUTUBE*/}
				<div className="flex flex-col flex-wrap justify-center gap-5 lg:max-w-7xl">
					{concerts.map(concert => (
						<div key={concert.id} className="text-white flex flex-col items-center border-2 border-purple-600 rounded-lg px-10 py-6">
							<h3 className="text-2xl">
								{concert.date}
							</h3>
							<h3 className="uppercase text-2xl">
								{concert.name}
							</h3>
							<h4 className="text-xl mb-4">
								{concert.place}
							</h4>

							<Link href="https://www.facebook.com/events/257731546747812">
								<div className="bg-purple-600 px-6 py-2 rounded-lg uppercase w-fit text-xl">
									FB událost
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Concerts;