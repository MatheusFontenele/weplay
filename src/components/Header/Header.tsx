import {GoSearch} from "react-icons/go"
import {HiOutlineMenuAlt1} from "react-icons/hi"
import {FiBell} from "react-icons/fi"
import {BiMessageSquareDetail} from "react-icons/bi"
import Image from "next/image"
import Logo from "../../../public/images/Logo.png"

import { Container } from "./HeaderStyle"

export default function Header (){
  return(
    <Container> 
      <div className='navLogo'>
        <button><HiOutlineMenuAlt1 size={25} /></button>
        <Image src={Logo} width={80} height={60}/>
      </div>

      <div className='navSearch'>
        <input type="text" placeholder='Buscar'/> 
        <button><GoSearch size={20} /></button> 
      </div>        
        
      <div className='navProfile'>
        <button><FiBell size={25} /></button>
        <button><BiMessageSquareDetail size={25} /></button>
        <img src="https://avatars.githubusercontent.com/u/94790993?v=4"/>
      </div>        
    </Container>
  )
}
