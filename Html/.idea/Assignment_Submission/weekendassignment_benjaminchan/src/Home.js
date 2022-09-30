import Header from "./Header";
import Footer from "./Footer";
import { a } from "react-router-dom";

export default function Home(){

    return(
        <>
        <Header/>
        {/* <body>
        <div id="page">
            <div id="body" classNameName="home">
                <div className="header">
                    <img src="images/bg-home.jpg" alt=""/>
                    <div>
                        <a href="product.html">Freeze Delight</a>
                    </div>
                </div>
                <div className="body">
                    <div>
                        <div>
                            <h1>NEW PRODUCT</h1>
                            <h2>The Twist of Healthy Yogurt</h2>
                            <p>This website template has been designed by freewebsitetemplates.com for you, for free. You can replace all this text with your own text.</p>
                        </div>
                        <img src="images/yogurt.jpg" alt=""/>
                    </div>
                </div>
            </div>

            <div className="footer">
				<div>
					<ul>
						<li>
							<a href="/products" className="product"></a>
							<h1>PRODUCTS</h1>
						</li>
						<li>
							<a href="/about" className="about"></a>
							<h1>OUR STORY</h1>
						</li>
						<li>
							<a href="/products" className="flavor"></a>
							<h1>FLAVORS</h1>
						</li>
						<li>
							<a href="/contact" className="contact"></a>
							<h1>OUR LOCATION</h1>
						</li>
					</ul>
				</div>
			</div>
		</div>
        </body> */}
        <body>
	<div id="page">
	
		<div id="body" className="home">
			<div className="header">
				<img src="images/bg-home.jpg" alt=""/>
				<div>
					<a href="product.html">Freeze Delight</a>
				</div>
			</div>
			<div className="body">
				<div>
					<div>
						<h1>NEW PRODUCT</h1>
						<h2>The Twist of Healthy Yogurt</h2>
						<p>This website template has been designed by freewebsitetemplates.com for you, for free. You can replace all this text with your own text.</p>
					</div>
					<img src="images/yogurt.jpg" alt=""/>
				</div>
			</div>
			<div className="footer">
				<div>
					<ul>
						<li>
							<a href="/products" className="product"></a>
							<h1>PRODUCTS</h1>
						</li>
						<li>
							<a href="/about" className="about"></a>
							<h1>OUR STORY</h1>
						</li>
						<li>
							<a href="/products" className="flavor"></a>
							<h1>FLAVORS</h1>
						</li>
						<li>
							<a href="/contact" className="contact"></a>
							<h1>OUR LOCATION</h1>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</body>
        
        
            <Footer/>
        </>
    )
}