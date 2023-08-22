'use client';

import Navbar from './components/navbar/Navbar';
import Animation from './components/Animation';
import UnderwaterDivider from './components/UnderwaterDivider';
import Band from './components/Band';
import Videos from './components/Videos';
import Concerts from './components/Concerts';
import Footer from './components/footer/Footer';

export default function Home() {
	return (
		<div>
				<Navbar />
				<Animation />
				<UnderwaterDivider />
				<Band />
				<div className="parallax-image"></div>
				<Videos />
				<Concerts />
				<Footer />
		</div>
	)
}