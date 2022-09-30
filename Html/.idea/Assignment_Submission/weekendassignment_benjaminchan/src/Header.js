import './App.css';
import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Header(prop){
    return(
       <>
       <div id="header">
			<div>
                <NavLink to="/home"><img src="images/logo.png" alt=""/></NavLink>

				<ul id="navigation">
					<li className="selected">
						<NavLink to="/home">Home</NavLink>
					</li>
					<li className="menu">
						<NavLink to="/about">About</NavLink>
						<ul className="primary">
							<li>
								<NavLink to="/products">Products</NavLink>
							</li>
						</ul>
					</li>
					<li className="menu">
						<NavLink to="/blog">Blog</NavLink>
						<ul className="secondary">
							<li>
								<NavLink to="/singlepost">Single post</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>
			</div>
		</div>
       
       </>

    );
    

}

