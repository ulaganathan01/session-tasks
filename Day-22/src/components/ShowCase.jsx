import showcaseOne from "../assets/bg-showcase-1.jpg";
import showcaseTwo from "../assets/bg-showcase-2.jpg";
import showcaseThree from "../assets/bg-showcase-3.jpg";

export default function ShowCase(){
    return(
        <div className="body-content">
                <div className="content">
                    <div className="text-content">
                        <h2>Fully Responsive Design</h2>
                        <p>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>
                    <div className="image-content">
                        <img src={showcaseOne} alt="Showcase Image" />
                    </div>
                </div>
                <div className="content">
                    <div className="image-content">
                        <img src={showcaseTwo} alt="Showcase Image" />
                    </div>
                    <div className="text-content">
                        <h2>Updated For Bootstrap 5</h2>
                        <p>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>
                </div>
                <div className="content">
                    <div className="text-content">
                        <h2>Easy to Use & Customize</h2>
                        <p>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>
                    <div className="image-content">
                        <img src={showcaseThree} alt="Showcase Image" />
                    </div>
                </div>
                <div className="test-header">
                    <h2>What people are saying...</h2>
                </div>
            </div>
    )
}