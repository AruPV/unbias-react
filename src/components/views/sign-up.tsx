import { SignUp } from '@clerk/clerk-react'


export default function SignUpPage(){
	return(
		<div className="flex flex-col items-center h-svh bg-background justify-center flex-shrink">
			<SignUp path="/sign-up" />
		</div>
	)
}
