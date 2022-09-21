import Footer from "./Footer";
import Header from "./Header";
import './App.css';

function Contact(){
    return(
        <div align='center'>
            <Header/>
            <h1 >Contact Us</h1>
            <div className="contactForm">
                <textarea id='queryInput' placeholder="Insert query here"></textarea>
            </div>
            <div>
                <button className="btn" type="submit">Submit Query</button>
            </div>
            <div >
                <p className="otherContact">Alternatively, you can contact us directly by calling 1800-1111-1111</p>
                <p>This is my First React Application with 3 Hyperlinks to <a href='./home'>Home</a>, <a href='./about'>About</a> & <a href='./contact'>Contact</a></p>
            </div>
            
            <Footer/>
        </div>
    )
}
//export the function to use in other component
export default Contact;