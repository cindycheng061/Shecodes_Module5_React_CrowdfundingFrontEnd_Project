import NavBar from "../components/NavBar";
import "./AboutPage.css"
import Footer from "../components/Footer";

function AboutPage() {
    return (
      <div>
        <NavBar />
        <div className="about-content">
          <h1>About Gift A Seed</h1>
          <p>
            Welcome to GiftASeed, a crowdfunding platform with a noble mission
            to nurture our planet's natural wonders and foster a sustainable
            future. At GiftASeed, we believe that every small act has the
            potential to create a profound impact on the environment. Our
            platform serves as a digital garden where individuals, communities,
            and organizations can come together to support environmental
            projects focused on conservation, reforestation, and sustainable
            practices.
          </p>
          <h1>Our Vision</h1>
          <p>
            Our vision is to inspire a global community that cares for the Earth
            and its diverse ecosystems. Through GiftASeed, we empower passionate
            environmentalists, changemakers, and dreamers to turn their visions
            into reality. Each project showcased on our platform represents a
            seed of hope, symbolizing the potential to grow into something
            extraordinary. -Whether you're an individual seeking to make a
            difference, a community determined to protect its natural heritage,
            or an organization dedicated to environmental causes, GiftASeed
            provides the perfect space to connect with like-minded individuals
            and contribute to meaningful projects.
          </p>
          <h1>Let's Gift A Seed Together!</h1>
          <p>
            Join us on this extraordinary journey of giving back to our planet,
            one seed at a time. Together, we can create a flourishing landscape
            of positive change and ensure a brighter and greener future for
            generations to come.
          </p>
        </div>
        <Footer />
      </div>
    );
}

export default AboutPage;