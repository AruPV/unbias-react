import { ModeToggle } from "./mode-toggle"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Button } from "./button"
import { Link } from "react-router-dom"
import Logo from "./logo"

function Header(){
  return(
    <div className="relative sticky z-50 bg-background/70 backdrop-blur top-0 py-2 flex flex-row justify-between px-2 py-1 bg-background border border-secondary/30 border-x-transparent border-t-transparent content-center">
			<div className="">
				<Link to={"/"}>
					<Logo className="fill-primary w-32 h-10 pl-2" />
				</Link>
			</div>
			<Link to={"/new"}>
				<SignedIn>
					<Button variant={"outline"}> 
						New
					</Button>
				</SignedIn>
			</Link>
			<div className="flex flex-row">
				<ModeToggle/>
				<SignedOut>
					<Button variant={"secondary"}>
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
