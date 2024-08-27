import { SignIn } from '@clerk/clerk-react'

export default function SignInPage(){
	return (
		<div className="flex flex-col items-center h-svh bg-background justify-center">
			<SignIn path="/sign-in"/>
		</div>
	)
}
