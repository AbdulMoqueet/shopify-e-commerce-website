import React from 'react';

const NavBar = () => {
    return(
        <nav id="main-nav-container">
            <div className="row">

                <div class="desktop-nav hidden-xs">
                    <div class="logo"><span>S</span>hopify</div>
                    <ul class="main-nav">
                        <li><a href="#home" class="nav-active scroll-easing">Home</a></li>
                        <li><a href="#Pages" class="scroll-easing">Pages</a></li>
                        <li><a href="#Products" class="scroll-easing">Products</a></li>
                        <li><a href="#Shop" class="scroll-easing">Shop</a></li>
                        <li><a href="#contact" class="scroll-easing">Contact Me</a></li>
                    </ul>
                </div>

            </div>

            <div class="mobile-nav visible-xs">
                <div class="row flex">
                    <div class="logo"><span>S</span>hopify</div>

                    <div class="nav-burger">
                        <div class="line-1"></div>
                        <div class="line-2"></div>
                        <div class="line-3"></div>
                    </div>

                    <ul>
                        <li><a class="logo"><span>S</span>hopify</a></li>
                        <li><a href="#home" class="nav-active scroll-easing mob-nav">Home</a></li>
                        <li><a href="#about" class="scroll-easing mob-nav">About</a></li>
                        <li><a href="#skills" class="scroll-easing mob-nav">Skill</a></li>
                        <li><a href="#projects" class="scroll-easing mob-nav">Projects</a></li>
                        <li><a href="#contact" class="scroll-easing mob-nav">Contact Me</a></li>
                        {/* <li><a style="opacity: 0;">Dummy</a></li> */}
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;