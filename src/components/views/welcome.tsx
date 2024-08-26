import coverPhoto from "@/assets/png/gradient_object.png"
import { SignUpButton } from "@clerk/clerk-react"
import { Sparkles } from "lucide-react"



export default function WelcomeView(){
	return(
		<>
      <div className="h-[32rem] relative"> 
        <div className="container-xl relative">
          <img
            className="z-10 absolute top-0 right-0 height-auto events-none size-[32rem] mr-10"
            src={coverPhoto}
            alt=""
          />
        </div> 
        <div 
					className="size-[32rem] z-20 flex flex-col pt-32 pl-32 bg-gradient-to-r from-background/90  from-65% to-transparent/0 absolute top-0 left-0 w-full"
				> 
          <p className="text-6xl font-roboto font-medium opacity-90">
            Your <i className="font-serif text-[4rem]">news</i>, your <span className="font-mono tracking-tighter">terms</span>
						<span className="relative">
							<Sparkles className="inline size-10 p-1 m-0 absolute top-0 left-0 animate-pulse stroke-primary"/>
						</span>
          </p>
					<SignUpButton>
						<button className="outline outline-secondary/80 outline-1 outline-offset-2 rounded-lg bg-secondary transition-all hover:bg-primary w-20 m-4 p-1 hover:outline-primary/40 font-roboto hover:text-white"> 
						Join
						</button>
					</SignUpButton>
        </div>
      </div>
			<div className="h-96 w-full border border-transparent  border-t-secondary/40"></div>
		</>
	)
}
