import { FaLongArrowAltRight } from "react-icons/fa";



const Home = () => {
  return (
  <main className="hero-section main">
    <div className="container grid grid-two-cols">
            <div className="hero-content align-items-center d-flex flex-wrap">
              <div>
                    <h1 className="heading-xl">
                    Explore the world, one country at a time.  
                    </h1>  
                    <p className="paragraph">
                      Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                      Start Exploring <FaLongArrowAltRight /> 
                    </button>
                    </div>
            </div>
            <div className="hero-image align-items-center d-flex">
                  <img src="/images/earth.png" alt="world beauty"
                  className="bannerImage"
                   />
            </div>
    </div>
  </main>
  );
};
export default Home;