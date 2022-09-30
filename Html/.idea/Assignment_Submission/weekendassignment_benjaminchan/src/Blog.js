import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export default function Blog(){

	const[blogList, setBlogList] = useState([
		{"title":"NEW CHILLS FOR SUMMER","content":"You can replace all this text with your own text.", "date": "MAY 20, 2023", "username":"Adam", "image":"images/new-chills.png"},
		{"title":"BEAT THE SUMMER HEAT","content":"You can replace all this text with your own text.", "date": "JUNE 14, 2023", "username":"Bob", "image":"images/berries.png"},
		{"title":"BEAT THE BLUES","content":"You can replace all this text with your own text.", "date": "AUGUST 28, 2023", "username":"Charles", "image":"images/new-chills.png"},
		{"title":"WINTER IS COMING","content":"You can replace all this text with your own text.", "date": "OCTOBER 28, 2023", "username":"Devon", "image":"images/berries.png"},
		
	
		]);

    return(
        <>
        <Header/>
        <div id="body">
			<div className="header">
				<div>
					<h1>Blog</h1>
				</div>
			</div>
			<div className="blog">
				<div className="featured">
				{
					blogList.map((blogObj, index)=>{
						return(
							<ul>
								<li>
									<img src={blogObj.image} alt=""/>
									<div>
										<h1>{blogObj.title}</h1>
										<span>By {blogObj.username} on {blogObj.date}</span>
										<p>{blogObj.content}</p>
										<a href="singlepost.html" className="more">Read More</a>
									</div>
								</li>
							</ul>
						)
					})
				}
				
					<a href="blog.html" className="load">Load More</a>
				</div>
				<div className="sidebar">
					<h1>Recent Posts</h1>
					<img src="images/on-diet.png" alt=""/>
					<h2>ON THE DIET</h2>
					<span>By Admin on November 28, 2023</span>
					<p>You can replace all this text with your own text. You can remove any link to our website from this website template.</p>
					<a href="singlepost.html" className="more">Read More</a>
				</div>
			</div>
		</div>


        <Footer/>
        
        
        </>

    )
}