import { Canvas, useFrame } from '@react-three/fiber';
import CarThree from './CarThree';
import Navbar from './Navbar';
import { OrbitControls, Stage } from '@react-three/drei';

import CarTwo from './CarTwo';

const Hero = () => {
  return (
    <div className='max-w-[1400px] m-auto'>
      <Navbar />
      <div className='flex flex-col sm:flex-row items-center justify-between gap-5 h-[70vh] mt-32 sm:mt-2'>
        <div className='sm:w-1/2 w-full '>
          <h1 className='text-white text-3xl font-bold mb-7'>
            Discover the Elegance and Performance of the New Mercedes-Benz
          </h1>
          <p className='text-white font-semibold leading-6 text-[18px]'>
            Experience unparalleled luxury and cutting-edge technology with the
            latest Mercedes-Benz model. Designed for those who demand the best,
            this car combines sleek design with powerful performance.
          </p>
          <button className='bg-white text-black mt-16 py-2 px-5 rounded-xl text-xl font-medium'>
            Learn More
          </button>
        </div>
        <div className='sm:w-1/2 sm:h-full  w-full'>
          <Canvas>
            <Stage environment='city' intensity={0.6}>
              <CarTwo />
              <OrbitControls
                enableZoom={false}
                autoRotate
                enablePan={false}
                enableRotate={false}
              />
            </Stage>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Hero;
