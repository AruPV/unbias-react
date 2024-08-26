import { ModeToggle } from "./mode-toggle"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Button } from "./button"
import { Link } from "react-router-dom"
import Logo from "./logo"

function Header(){
  return(
    <div className="relative sticky z-50 bg-background/70 backdrop-blur top-0 py-2 grid grid-cols-3 justify-between px-2 py-1 bg-background border border-secondary/30 border-x-transparent border-t-transparent content-center">
			<div className="">
				<Link to={"/"}>
					<Logo className="animate-all transition-all ease-in-out fill-primary hover:fill-primary/70 w-32 h-10 pl-2" />
				</Link>
			</div>
			<Link to={"/new"} className="self-center justify-self-center">
				<SignedIn>
					<Button variant={"outline"} className="text-primary"> 
						New
					</Button>
				</SignedIn>
			</Link>
			<div className="flex flex-row self-right justify-end">
				<ModeToggle/>
				<SignedOut>
					<Button className="ml-3" variant={"secondary"}>
					<SignInButton/>
					</Button>
				</SignedOut>
				<SignedIn>
					<UserButton/>
				</SignedIn>
			</div>
    </div>
  )
}

export default Header
