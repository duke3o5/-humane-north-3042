import ham from '../../Images/hamburger.png'
import Close from '../../Images/close.png'
import login from '../../Images/user.png'
import React, { useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import '../../Styling/User/nav.css'
import logo from '../../Images/main_logo.jpg'
import cart from '../../Images/shopping-cart.png'
import { Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/popover'
import { Button } from '@chakra-ui/button'
import { FiSearch } from 'react-fi'
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from '@chakra-ui/modal'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input';
import {Logout} from '../../Redux/AuthReducer/action';
import { useDispatch, useSelector } from "react-redux";


const Nav = () => {
  const [open, close]=useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef();

  const dispatch=useDispatch();

  const isAuth = useSelector((store) => store.AuthReducer.isAuth)
   console.log(isAuth);

   const handleLogout=()=>{
    dispatch(Logout);
    console.log('HE')
   }

  return (
  <>
    <header className="site-header">
        <div className="wrapper site-header__wrapper">
            <div className="site-header__start">
                <Link to='/' className="brand">
                   <img src={logo}/>
                </Link>
            </div>
            <div className="site-header__middle">
                <nav className="nav">
                    <button onClick={()=>close(pre=>!pre)} className="nav__toggle" aria-expanded="false" type="button">
                        {open?<img src={Close}width={'30px'}style={{margin:'15px 0 0'}}/>:<img src={ham}width={'30px'}style={{margin:'15px 0 0'}}/>}
                    </button>
                    <ul className={open?"nav__wrapper active":"nav__wrapper"}>
                    <p className="nav__item"  ref={btnRef} onClick={onOpen}>
                      {open?<a>Search</a>:<FiSearch/>}
                    </p>
                    <Drawer
                      isOpen={isOpen}
                      placement='top'
                      onClose={onClose}
                      finalFocusRef={btnRef}
                    >
                      <DrawerHeader>
                      </DrawerHeader>
                      <DrawerContent height={'90px'}>

                        <DrawerBody>
                          <Input focusBorderColor='#84c225' height={'70px'} variant={'flushed'} placeholder='Type here...' />
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                    <Popover trigger='hover'>
                      <PopoverTrigger>
                      <li className="nav__item"><Link to='/products'>Vegetables</Link></li>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverBody>
                          <ul>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Potato, Onion & Tomato</li>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Cucumber & Capsicum</li>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Leafy Vegetables</li>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Root Vegetables</li>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Beans, Brinjals & Okra</li>
                          </ul>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                    <Popover trigger='hover'>
                      <PopoverTrigger>
                      <li className="nav__item"><Link to='/products'>Dairy</Link></li>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverBody>
                          <ul>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Curd</li>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Paneer, Tofu & Cream</li>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Butter & Margarine</li>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Condensed, Powdered Milk</li>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Cheese</li>
                          </ul>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                    <Popover trigger='hover'>
                      <PopoverTrigger>
                      <li className="nav__item"><Link to='/products'>Fruits</Link></li>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverBody>
                          <ul>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Banana, Sapota & Papaya</li>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Kiwi, Melon, Citrus Fruit</li>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Apples & Pomegranate</li>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Seasonal Fruits</li>
                            <li style={{lineHeight:'40px',fontSize:'18px'}}>Mangoes</li>
                          </ul>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                    <li className="nav__item"><Link to='/cart'>{open?'Cart':<img width="35px"src={cart}/>}</Link></li>
                    <li className="nav__item"> {isAuth? <Button onClick={handleLogout}>Logout</Button> :<Link to={isAuth? "/":'/login'}>{ open?'Sign In / Sign Up':<img width="30px"src={login}/>}</Link>}</li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  </>
    // <DIV>
    //     <div>
    //         <img src={logo}/>
    //         <p>{'Anubhav'}</p>
    //     </div>
    //     <div>
    //         <div>
    //             <Link to='/' home'>Home</Link>
    //         </div>
    //         <div>
    //             <Link to='/' about'>About</Link>
    //         </div>
    //         <div>
    //             <Link to='/' skills'>Skills</Link>
    //         </div>
    //         <div>
    //             <Link to='/' projects'>Projects</Link>
    //         </div>
    //         <div>
    //             <Link to='/' contact'>Contact</Link>
    //         </div>
    //         <div>
    //             <button onClick={viewResume}>Resume</button>
    //         </div>
    //         <div id='ham'>
    //             {open?<CloseIcon/>:<HamburgerIcon/>}
    //         </div>
    //     </div>
    // </DIV>
  )
}

export default Nav

// const DIV=styled.div`
//     padding: 20px 30px;
//     border: 1px solid red;
//     display: flex;
//     /* justify-content: space-between; */
//     align-items: center;
//     height: 70px;
//     gap:48%;
    
//     div:first-child{
//         display: flex;
//         justify-content: flex-start;
//         align-items: center;

//         img{
//             width: 60px;
//             padding: 0 10px;
//         }
//         p{
//             font-size: 35px;
//             font-family: cursive;
//             font-weight: 600;
//         }
//     }
//     div:last-child{
//         /* width: 50%; */
//         display: flex;
//         align-items: center;
        
//         div{
//             padding: 0 4.4%;
//             height:70px;
//             line-height: 70px;
//             font-size: 16px;
//             font-weight: 600;

            // button{
            //     font-size: 18px;
            //     font-weight: 600;
            //     margin: auto;
            //     line-height: normal;
            //     background-color: #FFD500;
            //     padding:10px 25px;
            //     border-radius: 10px;
            // }
//         }

//         #ham{
//             display: none;
//         }
//     }
// `