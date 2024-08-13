import { ModeToggle } from "./mode-toggle"
import { Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

function Header(){
  return(
    <div className="py-2 flex flex-row justify-between px-2 py-1 bg-background border content-center">
			<div className="">
				<p className="inline font-bold text-3xl text-primary">
					Unbiased
				</p>
			</div>
			<div className="flex flex-row">
				<ModeToggle/>
				<Avatar>
					<AvatarImage src="https://i.pinimg.com/564x/09/43/c3/0943c3d3e6dd5e8afe32813e4286542a.jpg"/>
					<AvatarFallback>KZ</AvatarFallback>
				</Avatar>
			</div>
    </div>
  )
}

export default Header
