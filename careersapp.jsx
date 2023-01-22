function Careers() {
	return (
		<footer className="container mx-auto p-6">
				<div className="flex flex-col md:flex-row justify-between items-center ">
					<p className="mb-4 md:mb-0 mr-0 md:text-xl h-16 w-16">
						<a href="https://twitter.com/joinstorox" target="_blank"><img src="src\assets\twttrlogo.png" alt=""/></a>
					</p>
					{/*<p className="mb-4 md:mb-0 ml-0 md:text-xl h-8 w-8 justify-items-start">
						<a href="https://twitter.com/joinstorox" target="_blank"><img src="src\assets\ttlogo.png" alt=""/></a>
					</p>*/}
					<div className="flex -mx-6 ">
						<a href="index.html" className="mx-3 hover:opacity-80 duration-150">Back to Home</a> | 
						<a href="privacy.html" target="_blank" className="mx-3 hover:opacity-80 duration-150">Privacy</a> |  
						<a href="javascript:void(0)" onClick={contactAlert} className="mx-3 hover:opacity-80 duration-150">Contact</a> |
						<a href="credits.html" className="mx-3 hover:opacity-80 duration-150">Credits</a>
					</div>
				</div>
			</footer>
	)
}

export default Careers
  