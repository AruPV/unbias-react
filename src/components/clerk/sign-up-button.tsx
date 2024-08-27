import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import BrutalistButton from '../ui/brutalist-button'
import { SignUp } from '@clerk/clerk-react'
import { Link } from "react-router-dom"

function SignUpButton(){
	return(
		<>
		<div className="self-center hidden md:block">
		<Dialog>
			<DialogTrigger className='text-xs'>
				<BrutalistButton>Join</BrutalistButton>
			</DialogTrigger>
			<DialogContent>
				<SignUp/>
			</DialogContent>
		</Dialog>
		</div>
		<div className="block md:hidden">
			<Link to={"/sign-up"}>
				<BrutalistButton>Join</BrutalistButton>
			</Link>
		</div>
		</>
	)
}

export default SignUpButton
