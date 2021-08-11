import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react';

import HeroImage from '../assets/hair-cat-header.png'
import InfoBlock from '../components/InfoBlock';
import Questions from '../components/questions';
import importedQuestions from '../quizQuestions.json'
import Logo from '../assets/manual-symblol.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

export default function Home() {
	const [questionsIsOpen, setIsOpen] = useState(false);

	const openQuestions = () => {
		setIsOpen(true);
	}

	const closeQuestions = () => {
		setIsOpen(false);
	}

	return (
		<div className="container mx-auto">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
			</Head>
			{questionsIsOpen && <body
				className="text-gray-700 bg-white"
				style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
			>
				<Questions closeQuestions={closeQuestions} className="flex flex-col p-10" {...importedQuestions} />
			</body>}
			{!questionsIsOpen && <body
				className="text-gray-700 bg-white"
				style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
			>
				<div
					className="container mx-auto px-6 h-xxl w-max flex flex-col justify-center"
					style={{
						backgroundColor: '#B8E6E3',
						backgroundImage: 'url(/hair-cat-header.png)',
					}}>
					<h2 className="text-4xl font-bold mb-2 text-pine-green uppercase">
						be good
					</h2>
					<h2 className="text-4xl font-bold mb-2 text-white uppercase">
						to yourself
					</h2>
					<div className="flex flex-col">
						<span className="text-xl mb-8 text-gray-200 w-6/12">
							We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.
						</span>
						<button
							className="text-white bg-hero-button font-bold rounded-full py-3 px-8 shadow-lg uppercase tracking-wider w-4/12"
							onClick={openQuestions}
						>
							take the quiz
						</button>
					</div>
				</div>
				<section className="container mx-auto px-6 p-10">
					<h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
						What we can help with
					</h2>
					<InfoBlock layout='image-left' />
					<InfoBlock layout='image-right' />
				</section>
				<footer className="bg-gray-100">
					<div className="container mx-auto px-6 pt-10 pb-6">
						<div className="flex flex-wrap">
							<div className="w-full md:w-1/3">
								<Image src={Logo} width={80} height={75} />
							</div>
							<div className="w-full md:w-1/6 text-center md:text-left ">
								<h5 className="uppercase mb-6 text-hero-button font-montserrat">Product</h5>
								<ul className="mb-4">
									<li className="mt-2">
										<a
											href="#"
											className="hover:underline hover:text-orange-500 font-helvetica text-pine-green"
										>Popular</a
										>
									</li>
									<li className="mt-2">
										<a
											href="#"
											className="hover:underline hover:text-orange-500 font-helvetica text-pine-green"
										>Trending</a
										>
									</li>
									<li className="mt-2">
										<a
											href="#"
											className="hover:underline hover:text-orange-500 font-helvetica text-pine-green"
										>Guided</a
										>
									</li>
									<li className="mt-2">
										<a
											href="#"
											className="hover:underline hover:text-orange-500 font-helvetica text-pine-green"
										>Products</a
										>
									</li>
								</ul>
							</div>
							<div className="w-full md:w-1/6 text-center md:text-left ">
								<h5 className="uppercase mb-6 text-hero-button font-montserrat">Company</h5>
								<ul className="mb-4">
									<li className="mt-2">
										<a
											href="#"
											className="hover:underline hover:text-orange-500 font-helvetica text-pine-green"
										>Press Releases</a
										>
									</li>
									<li className="mt-2">
										<a
											href="#"
											className="hover:underline hover:text-orange-500 font-helvetica text-pine-green"
										>Mission</a
										>
									</li>
									<li className="mt-2">
										<a
											href="#"
											className="hover:underline hover:text-orange-500 font-helvetica text-pine-green"
										>Strategy</a
										>
									</li>
									<li className="mt-2">
										<a
											href="#"
											className="hover:underline hover:text-orange-500 font-helvetica text-pine-green"
										>About</a
										>
									</li>
								</ul>
							</div>
							<div className="w-full md:w-1/6 text-center md:text-left ">
								<h5 className="uppercase mb-6 text-hero-button font-montserrat">Info</h5>
								<ul className="mb-4">
									<li className="mt-2">
										<a
											href="#"
											className="hover:underline hover:text-orange-500 font-helvetica text-pine-green"
										>Support</a
										>
									</li>
									<li className="mt-2">
										<a
											href="#"
											className="hover:underline hover:text-orange-500 font-helvetica text-pine-green"
										>Customer Service</a
										>
									</li>
									<li className="mt-2">
										<a
											href="#"
											className="hover:underline hover:text-orange-500 font-helvetica text-pine-green"
										>Get Started Guide</a
										>
									</li>
								</ul>
							</div>
							<div className="w-full md:w-1/6 text-center md:text-left ">
								<h5 className="uppercase mb-6 text-hero-button font-montserrat">Follow Us</h5>
								<ul className="mb-4 flex">
									<li className="mt-2 pr-8">
										<Image src={facebook} width={20} height={20} />
									</li>
									<li className="mt-2 pr-8">
										<Image src={twitter} width={20} height={20} />
									</li>
									<li className="mt-2 pr-8">
										<Image src={linkedin} width={20} height={20} />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</footer>
			</body>}
		</div>
	)
}
