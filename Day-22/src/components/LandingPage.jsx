import background from "../assets/bg-masthead.jpg";

export default function LandingPage(){
    return(
        <div className="page-container">
            <nav>
                <p>Start Bootstrap</p>
                <button type="button">Sign Up</button>
            </nav>
            <div className="main-head">
                {/* <img src={background} alt="Background Image" /> */}
                <div className="header-text">
                    <h1>Generate more leads with a professional landing page!</h1>
                </div>
                <form>
                    <input type="email" placeholder="Email Address"/>
                    <button type="button">Submit</button>
                </form>
            </div>
            
            <div className="body-icons">
                <div className="icon">
                    <span class="material-symbols-outlined icon-symbol">web_asset</span>
                    <h2>Fully Responsive</h2>
                    <p>This theme will look great on any device, no matter the size!</p>
                </div>
                <div className="icon">
                    <span class="material-symbols-outlined icon-symbol">layers</span>
                    <h2>Bootstrap 5 Ready</h2>
                    <p>Featuring the latest build of the new Bootstrap 5 framework!</p>
                </div>
                <div className="icon">
                    <span class="material-symbols-outlined icon-symbol">terminal</span>
                    <h2>Easy to Use</h2>
                    <p>Ready to use with your own content, or customize the source files!</p>
                </div>
            </div>
        </div>
    )
}