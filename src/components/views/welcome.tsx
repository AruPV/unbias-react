import { Sparkles } from "lucide-react"
import { useState } from "react"
import SignUpButton from "../clerk/sign-up-button";

export default function WelcomeView(){
	const [value, changeValue] = useState("terms");

	return(
		<>
      <div className={`h-[32rem] bg-graph_light dark:bg-graph_dark`}>
        <div className="size-[32rem] flex flex-col pt-32 p-3 md:pl-32" > 
					<div className="drop-shadow-2xl text-6xl font-roboto font-medium opacity-90 text-foreground inline">
						<p className="">
							Your <i className="font-serif text-[4rem]">news</i>,
						</p>
						<div className="flex flex-row items-center">
							<span className="mt-1">your</span>
							<input 
								style={{width: Math.min(Math.max(value.length+.5, 2), 50) + 'ch'}}
								className="pl-4 bg-transparent animate-all outline-none font-roboto_mono " 
								autoFocus
								value={value}
								onChange={(event) => {
									changeValue(event.target.value)
								}}
							/>
						<div className="">
							<Sparkles className="inline size-8 pb-2 self-align-top animate-pulse stroke-primary"/>
						</div>
					</div>
							<SignUpButton/>
					</div>
        </div>
      </div>
			<div className="h-96 w-full border border-transparent  border-t-secondary/40"></div>
		</>
	)
}
