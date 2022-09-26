import Footer from "./Footer";
import Header from "./Header";

function About(){
    return(
        <div align='center'>
            <Header/>
            <h1>This is the About Page</h1>
            <div>
                <p>This is my First React Application with 3 Hyperlinks to <a href='./home'>Home</a>, <a href='./about'>About</a> & <a href='./contact'>Contact</a></p>
            </div>
            <Footer/>
        </div>
    )
}
//export the function to use in other component
export default About;