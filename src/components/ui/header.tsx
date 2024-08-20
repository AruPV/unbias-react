import { ModeToggle } from "./mode-toggle"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Button } from "./button"
import { Link } from "react-router-dom"

function Header(){
  return(
    <div className="relative sticky top-0 py-2 flex flex-row justify-between px-2 py-1 bg-background border border-x-transparent border-t-transparent content-center">
			<div className="">
				<p className="inline font-bold text-3xl text-primary">
					Unbias
				</p>
			</div>
			<Link to={"/new"}>
				<Button>
					New
				</Button>
			</Link>
			<div className="flex flex-row">
				<ModeToggle/>
				<SignedOut>
					<SignInButton/>
				</SignedOut>
				<SignedIn>
					<UserButton/>
				</SignedIn>
			</div>
    </div>
  )
}

export default Header
