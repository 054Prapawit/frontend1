import CustomNavbar from '../components/navbar';
import CustomCarousel from '../components/Carousel';
import CustomCard from '../components/Card';

const Home = () => (
  <>
    <CustomNavbar />
    <div className="container mt-5">
      <CustomCarousel />
      <div className="d-flex justify-content-around mt-5">
        <CustomCard title="Card 1" text="This is card 1" buttonText="Learn more" />
        <CustomCard title="Card 2" text="This is card 2" buttonText="Learn more" />
        <CustomCard title="Card 3" text="This is card 3" buttonText="Learn more" />
      </div>
    </div>
  </>
);

export default Home;
