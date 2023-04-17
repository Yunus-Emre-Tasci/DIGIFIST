import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgImage from "./assests/images/bgImage.png"
import ScrollingCarousel from './components/ScrollingCarousel';

function App() {
  return (
    <div className = "container-fluid flex flex-col lg:flex-row">
      <div className='image w-full lg:w-1/2'>
        <img src={bgImage} alt='bgImage' className='w-full h-full object-cover' />
      </div>
      <div className = 'lg:w-1/2 flex flex-col overflow-hidden' >
        <div className = 'title w-[85%] lg:w-[494px] lg:mt-[11%] mx-auto' >
          <h1 className='lg:h-[123px]'>Everyday <span className='hidden lg:inline'>items</span> <span className='lg:hidden'>tops</span>, we have something to suit every occasion.</h1>
          <p className='mt-[12px] hidden xl:block'>At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.</p>
          <div>
            <button className='mt-[32px] underline underline-offset-8'>Shop all everyday items</button>
          </div>
        </div>
           <ScrollingCarousel/>
      </div>
    </div>
  );
}

export default App;
