import Link from 'next/link'
import Logo from "../Assets/logo-small.png"
import Image from "next/image";
import {FaShoppingCart,FaUserCircle ,FaBeer,FaShopware ,FaFacebook, FaInstagram, FaTwitch ,FaLinkedin,FaSearch, FaTwitter,FaBehance } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className=''>
       <nav className="  bg-indigo-400  p-5 px-20">
           <div className='flex justify-between items-center'>
            {/* Logo  */}
                <div>
                  <Image src={Logo} alt="" className='w-14 ' />
                </div>
                {/* Our Links  */}
                <div className=''>
                   <ul className='flex'>
                    <li className='flex px-4 items-center text-stone-100 font-medium'> <Link href={'/'}> Home</Link> </li>
                    <li className='flex items-center px-4 '>  <Link href={'/'}>Shop</Link>  </li>
                    <li className='px-4 font-z'>  <Link href={'/'}>Contact Us</Link>  </li>
                   </ul>
                </div>
                   {/* Our Card Icons  */}
                <div >
                <ul className='flex' >
                    <li className='flex items-center text-2xl'><Link href={'/'}><FaShoppingCart/> </Link></li>
                    <li className='flex items-center text-2xl mx-3'><Link href={'/'}><FaUserCircle/> </Link></li>
                </ul>
                </div>
           </div>
        </nav>
        
        <br />

        <nav className="  bg-indigo-400  p-5 px-20  ">
           <div className='flex justify-between items-center'>
                <div>
                  <Image src={Logo} alt="" className='w-14 ' />
                </div>
                <div className=''>
                   <ul className='flex'>
                    <li className='flex px-4 border-r-2 items-center text-stone-100 font-medium'><Link href={'/'}> Home</Link> </li>
                    <li className='flex items-center px-4 border-r-2'> <FaShopware className='text-[20px] text-black' /> <Link href={'/'}>Shop</Link>  </li>
                    <li className='px-4 font-z'>  <Link href={'/'}>Contact Us</Link>  </li>
                   </ul>
                </div>
           </div>
        </nav>
<br />
        <nav className='bg-blue-900 h-[300px] pt-4'>

            <div className='mx-32  bg-slate-300 flex justify-between items-center rounded-lg ' >
                <div className='flex p-3 items-center'>
                    <div className=''>
                    <Image src={Logo} alt="" className='w-14 ' />
                    </div>
                    <ul className='flex px-3'>
                        <li className='p-2 font-semibold  active: text-orange-300'><Link href={'/'}>Home</Link></li>
                        <li className='p-2 font-semibold  hover:text-orange-300'><Link href={'/'}>Services</Link></li>
                        <li className='p-2 font-semibold  hover:text-orange-300'><Link href={'/'}>Skills</Link></li>
                        <li className='p-2 font-semibold  hover:text-orange-300'><Link href={'/'}>Projects</Link></li>
                        <li className='p-2 font-semibold  hover:text-orange-300'><Link href={'/'}>Awards</Link></li>
                        <li className='p-2  font-semibold  hover:text-orange-300'><Link href={'/'}>Contact</Link></li>
                    </ul>
                </div>

                <div className='flex px-3'>
                    <ul className='flex items-center'>
                        <li className='px-2 text-[20px]'><Link href={'/'}><FaFacebook/> </Link></li>
                        <li className='px-2 text-[20px]'><Link href={'/'}><FaTwitter/> </Link></li>
                        <li className='px-2 text-[20px]'><Link href={'/'}><FaBehance/> </Link></li>
                        <li className='px-2 text-[20px]'><Link href={'/'}><FaInstagram/></Link></li>
                        <li className='px-2 text-[20px]'><Link href={'/'}><FaLinkedin/></Link></li>
                    </ul>
                    <div className='flex items-center ml-6'>
                    <><Link href={'/'}><FaSearch/></Link></>
                        <button className='bg-orange-400 p-1 px-4 font-semibold rounded-lg ml-4'>Contact me</button>
                    </div>

                </div>

            </div>
        </nav>
    </div>
  )
}
