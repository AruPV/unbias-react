import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SignIn } from '@clerk/clerk-react'
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

function SignInButton(){
	return(
		<div className="shadow-lg self-center">
			<div className="self-center hidden md:block">
			<Dialog>
				<DialogTrigger className='text-xs'>
					<Button variant="secondary" className="w-14 h-7 text-xs">Sign-In</Button>
				</DialogTrigger>
				<DialogContent>
					<SignIn/>
				</DialogContent>
			</Dialog>
			</div>
			<div className="block md:hidden">
				<Link to={"/Sign-In"}>
					<Button variant="outline" className="text-primary">Sign-In</Button>
				</Link>
			</div>
		</div>
	)
}

export default SignInButton
