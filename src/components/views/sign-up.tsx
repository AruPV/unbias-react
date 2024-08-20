import { SignUp } from '@clerk/clerk-react'


export default function SignUpPage(){
	return(
		<div className="flex flex-col items-center">
			<SignUp path="/sign-up" />
		</div>
	)
}
