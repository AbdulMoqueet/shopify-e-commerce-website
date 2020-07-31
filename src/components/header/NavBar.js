import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <div className="row">
                <ul>
                    <li><a href="#All"><ion-icon className="menu-burger-icon" name="menu-outline"></ion-icon> All Category <ion-icon name="chevron-down-outline"></ion-icon></a></li>
                    <li><a href="#home" class="nav-active scroll-easing">Home <ion-icon name="chevron-down-outline"></ion-icon></a></li>
                    <li><a href="#Pages" class="scroll-easing">Pages <ion-icon name="chevron-down-outline"></ion-icon></a></li>
                    <li><a href="#Products" class="scroll-easing">Products <ion-icon name="chevron-down-outline"></ion-icon></a></li>
                    <li><a href="#Shop" class="scroll-easing">Shop <ion-icon name="chevron-down-outline"></ion-icon></a></li>
                    <li><a href="#contact" class="scroll-easing">Contact Us </a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;