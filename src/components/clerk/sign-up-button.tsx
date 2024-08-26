import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import BrutalistButton from '../ui/brutalist-button'
import { SignUp } from '@clerk/clerk-react'

function SignUpButton(){
	return(
		<Dialog>
			<DialogTrigger className='text-sm'>
				<BrutalistButton>Join</BrutalistButton>
			</DialogTrigger>
			<DialogContent>
				<SignUp/>
			</DialogContent>
		</Dialog>

	)
}

export default SignUpButton
