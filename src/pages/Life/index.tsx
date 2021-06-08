import React from "react";

export default function Life() {
	return (
		<>
			<section className="px-4 pt-2 pb-4 sm:px-5 pt-3 pb-4 md:px-7 pt-4 pb-5 lg:px-10 pt-5 pb-6 bg-[hsl(210,60%,5%)] dark:bg-lime-300">
				<article className="font-round">
					<h1
						className="text-blueGray-500 dark:text-teal-900 border-blueGray-800 dark:border-green-900 border-b-4 w-max tracking-wider font-bold"
						style={{
							fontSize:
								"calc(27px + (60 - 27) * ((100vw - 320px) / (1080 - 320)))",
						}}
					>
						Sri Sri Ravi Shankar
					</h1>
					<h2
						className=" text-blueGray-400 dark:text-green-700 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider mt-5"
						style={{
							fontSize:
								"calc(25px + (40 - 20) * ((100vw - 320px) / (1080 - 320)))",
						}}
					>
						Life
					</h2>
					<div className="px-2 py-1 mt-2 mb-3">
						<blockquote className="bg-blueGray-900 dark:text-green-700 px-3 py-1.5 rounded-xl text-[hsl(215,50%,25%)] dark:bg-white text-xl sm:text-2xl">
							To know who sri sri is really!, we have to meet him
							once, Because through words I cannot explain
							everything about him.
						</blockquote>
					</div>
					<p className="text-[hsl(210,90%,50%)] dark:text-lime-700 mt-2 text-xl sm:text-2xl lg:text-3xl">
						He is a fountain of infinite love he is constantly
						working for this world to blossom it and making one
						world family . He is one who never takes credit for his
						work. he never says I but he says we . He is a living
						master, among us . He believe in one world family . he
						is the man who speaks for the justice and create harmony
						in this world . He do things absolutely for other
						without thinking once about himself which can be sound
						impossible but don't forget that some others like him
						are already taken birth and gone like jesus, guru nanak
						dev,buddha , mahavira, patanjali and So on . In between
						us no one is bad it's our action which makes us good or
						bad but in core of everyone there is only love, That's
						what he says . <br /> I like to suggest some of his
						discourse which can make you learn about how one can
						live his life happy, with satying productive at same
						time .
					</p>
				</article>
			</section>
		</>
	);
}
