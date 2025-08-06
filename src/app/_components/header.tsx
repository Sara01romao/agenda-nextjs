import Image from "next/image"
import Logo from "../../../public/logo.svg"
export function Header(){
  return(
    <header className="pt-8">
      <Image src={Logo} alt="Logo Local" className="m-auto"/>
    </header>
  )
}