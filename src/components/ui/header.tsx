import { ModeToggle } from "./mode-toggle"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

function Header(){
  return(
    <div className="py-2 flex flex-row justify-between px-2 py-1 bg-background border content-center">
			<div className="">
				<p className="inline font-bold text-3xl text-primary">
					Unbias
				</p>
			</div>
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
