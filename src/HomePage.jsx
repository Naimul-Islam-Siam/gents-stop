import React from 'react';
import './HomePage.scss';


const HomePage = () => (
   <div className="homepage">
      <div className="directory-menu">
         <div className="menu-item">
            <div className="content">
               <h1 className="title">SHIRTS</h1>
               <span className="subtitle">Shop Now</span>
            </div>
         </div>

         <div className="menu-item">
            <div className="content">
               <h1 className="title">JACKETS</h1>
               <span className="subtitle">Shop Now</span>
            </div>
         </div>

         <div className="menu-item">
            <div className="content">
               <h1 className="title">SHOES</h1>
               <span className="subtitle">Shop Now</span>
            </div>
         </div>

         <div className="menu-item">
            <div className="content">
               <h1 className="title">WATCHES</h1>
               <span className="subtitle">Shop Now</span>
            </div>
         </div>

         <div className="menu-item">
            <div className="content">
               <h1 className="title">HAIR CARE</h1>
               <span className="subtitle">Shop Now</span>
            </div>
         </div>
      </div>
   </div>
);

export default HomePage;