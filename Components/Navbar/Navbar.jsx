import React, { useState, useEffect, useContext } from 'react'
import Image from "next/image"
import Link from "next/link"
import Style from './Navbar.module.css'
import images from '../../assets'
import { Model, TokenList } from '../index'

const Navbar = () => {
    const menuItems = [
        {
            name: "Swap",
            link: "/"
        },
        {
            name: "Tokens",
            link: "/"
        },
        {
            name: "Pools",
            link: "/"
        }
    ]

    //UseState
    const [openModel, setOpenModel] = useState(false)
    const [openTokenBox, setOpenTokenBox] = useState(false)
    
    return (
        <div className={Style.Navbar}>
            <div className={Style.Navbar_box}>
                <div className={Style.Navbar_box_left}> 
                    {/** //LOGO IMAGE */}
                    <div className={Style.Navbar_box_left_img}>
                        <Image src={images.uniswap} alt="logo" width={50} height={50}/>
                    </div>    
                    {/** //MENU ITEMS */}
                    <div className={Style.Navbar_box_left_menu}>
                        {menuItems.map((elt, i) => 
                            (
                                <Link key={i+1} href={{pathname: `${elt.name}`, query: `${elt.link}`}}>
                                    <p className={Style.Navbar_box_left_menu_item}>{elt.name}</p>
                                </Link>
                            )
                        
                        )}
                    </div>    
                </div>
                {/** //MIDDLE SECTION */}
                <div className={Style.Navbar_box_middle}>
                    <div className={Style.Navbar_box_middle_search}>
                        <div className={Style.Navbar_box_middle_search_img}>
                            <Image src={images.search} alt="search" width={20} height={20}/>
                        </div>
                        <input type="text" placeholder='Search Tokens'/>
                    </div>
                </div>

                {/** //RIGHT SECTION */}
                <div className={Style.Navbar_box_right}>
                    <div className={Style.Navbar_box_right_box}>
                        <div className={Style.Navbar_box_right_box_img }>
                            <Image src={images.ether} alt="Network" width={30} height={30}/>
                        </div>        
                        <p>Network Name</p>
                        
                        <button onClick={()=> {}}>Address</button> 
                    </div>   
                    

                    {/** If openModel is true, we must display the Model Seection */}
                    {openModel && (
                        <Model setOpenModel={setOpenModel} connectWallet="Connect"/>
                    )}
                </div>

            </div>

            {/** //TOKENS LIST COMPONENT*/}

            {openTokenBox && (
                <TokenList tokenDate="hey" setOpenTokenBox={setOpenTokenBox}/>
            )

            }
        </div>
    )
}

export default Navbar