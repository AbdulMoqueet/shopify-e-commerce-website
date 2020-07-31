import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="row">
                <div className="flex-container">
                    <div className="logo"><span>S</span>hopify</div>
                    <div className="flex">

                        <div className="search-holder">
                            <div className="category">All <ion-icon name="chevron-down-outline"></ion-icon></div>
                            <input type="text" placeholder="Search Products..." />
                            <div className="search-btn">
                                <ion-icon name="search-outline"></ion-icon>
                            </div>
                        </div>

                        <div className="login">LOGIN</div>
                        <span>/</span>
                        <div className="sing-up">SIGN UP</div>

                        <div className="wish-list holder">
                            <ion-icon name="heart-outline"></ion-icon>
                            <div className="counter">0</div>
                        </div>

                        <div className="cart holder">
                            <ion-icon name="cart-outline"></ion-icon>
                            <div className="counter">0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;