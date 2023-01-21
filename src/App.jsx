 
function App() {
	return (
		<div className="min-h-screen flex flex-col text-gray-800">
			<main className="container mx-auto px-6 pt-6 flex-1 text-center">

				<h3 className="text-2xl md:text-4xl lg:text-6xl uppercase">The Next Level of</h3>
				<h2 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">Dropshipping</h2>

				<p className="text-base md:text-lg lg:text-4xl mb-8">
					The world's only dropshipping website where anyone can sell anything by connecting with suppliers instead of using Ali-Express.
				</p>

				<div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-black bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
					Coming Soon!
				</div>

				<form 
					method="POST" 
					id="storox-form"
					name="storox-form"
					action="https://sheetdb.io/api/v1/7khjhbg6k1vtb"
					target="hiddenFrame"
          >

					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="Your email address..."
							type="email"
							name="data[email]"
							id="member_email"
							className="text-2xl placeholder:text-gray-500 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-black bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
						/>
						<input
							type="submit"
							value="Join Waitlist"
							name="member[subscribe]"
							id="member_submit"
							className="bg-gradient-to-r from-amber-200 to-yellow-600 hover:from-amber-200 hover:to-yellow-500 md:rounded-tl-none md:rounded-bl-none text-gray-700 rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-85 duration-150"
							onClick="submitForm()"
						/>
            
					</div>
					<div className="opacity-75 italic">
						By joining the waitlist, you can gain an upperhand over other dropshippers
					</div>

				</form>
			</main>

			<footer className="container mx-auto p-6">
				<div className="flex flex-col md:flex-row justify-between items-center ">
					<p className="mb-4 md:mb-0 mr-0 md:text-xl h-16 w-16">
						<a href="https://twitter.com/joinstorox" target="_blank"><img src="src\assets\twttrlogo.png" alt=""/></a>
					</p>
					{/*<p className="mb-4 md:mb-0 ml-0 md:text-xl h-8 w-8 justify-items-start">
						<a href="https://twitter.com/joinstorox" target="_blank"><img src="src\assets\ttlogo.png" alt=""/></a>
					</p>*/}
					<div className="flex -mx-6 ">
						<a href="careers.html" className="mx-3 hover:opacity-80 duration-150">Careers</a> | 
						<a href="privacy.html" target="_blank" className="mx-3 hover:opacity-80 duration-150">Privacy</a> | 
						<a href="javascript:void(0)" onClick={contactAlert} className="mx-3 hover:opacity-80 duration-150">Contact</a> |
						<a href="credits.html" className="mx-3 hover:opacity-80 duration-150">Credits</a>
					</div>
				</div>
			</footer>
     
		</div>	
	)

}
  
export default App
