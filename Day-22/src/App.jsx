import './App.css';
import LandingPage from './components/LandingPage';
import ShowCase from './components/ShowCase';
import Testimonial from './components/Testimonial';
import testOne from "./assets/testimonials-1.jpg";
import testTwo from "./assets/testimonials-2.jpg";
import testThree from "./assets/testimonials-3.jpg";
import Footer from './components/Footer';

// App container to display the Landing page

function App() {

  const testData = [
    {
      image: testOne,
      name: "Margaret E.",
      message: "\"This is fantastic! Thanks so much guys!\""
    },{
      image: testTwo,
      name: "Fred S.",
      message: "\"Bootstrap is amazing. I've been using it to create lots of super nice landing pages.\""
    },{
      image: testThree,
      name: "Sarah W.",
      message: "\"Thanks so much for making these free resources available to us!\""
    },
  ]
  return(
    <div>
      <LandingPage/>
      <ShowCase/>
      <div className="testimonial-container">
        {
          testData.map((data, index) => <Testimonial data={data}/>)
        }
      </div>
      <Footer/>
    </div>

  )
}
export default App
