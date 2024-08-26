import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SignIn } from '@clerk/clerk-react'
import { Button } from "../ui/button"

function SignInButton(){
	return(
		<Dialog>
			<DialogTrigger className='text-xs m-0'>
				<Button variant="secondary" className="w-14 h-7 text-xs">Sign-In</Button>
			</DialogTrigger>
			<DialogContent>
				<SignIn/>
			</DialogContent>
		</Dialog>

	)
}

export default SignInButton
