
const My_projects = () => {
		return (
				<div id="myprojects" className="h-screen text-Last">
						<div className="font-bold text-3xl pt-10">🗃 My projects</div>
						<div className="pt-10">I create websites about things that interest me.</div>
						<div className="font-bold text-3xl mt-10">Project list:</div>
						<div className="mt-3 flex">
								<div className="w-60 h-96 border-4 relative">
										<div className="pt-5 pb-5 text-First font-bold text-center bg-Last">Roicketflights</div>
										On site was list of upcoming rocket launches, site create with clear HTML/CSS/JS
										<div className="flex m-auto text-center absolute top-80">
											<a href="https://www.rocketflights.tk/" className="bg-Last text-First h m-2 w-24">check out</a>
												<a href="https://github.com/lukasz-ciszewski/kosmiczneloty" className="bg-Last text-First h m-2 w-24">code</a>
										</div>
								</div>
								<div className="w-60 h-96 border-4 ml-10 relative">
										<div className="pt-5 pb-5 text-First font-bold text-center bg-Last">My portfolio</div>
										The page you are on right now, create with clear React
										<div className="flex m-auto text-center absolute top-80">
												<a className="bg-Last text-First h m-2 w-24">check out</a>
												<a className="bg-Last text-First h m-2 w-24">code</a>
										</div>
								</div>
						</div>
				</div>
		)
}

export default My_projects;