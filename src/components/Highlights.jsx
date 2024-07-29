import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CarOne from './CarOne';
import { Suspense, useState } from 'react';

const Highlights = () => {
  const [carColor, setCarColor] = useState('#ffffff');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleChangeColor = () => {
    setCarColor(getRandomColor());
  };

  return (
    <div id='about' className='relative mt-12 max-w-[1400px] m-auto'>
      <div className='relative w-44 m-auto'>
        <h1 className="text-white font-bold text-4xl text-center after:absolute after:content-[''] after:h-1 after:w-24 after:bg-white after:left-8 after:bottom-[-14px]">
          Top Seller
        </h1>
      </div>
      <div className='flex mt-10 flex-row'>
        <div className='w-[40%]'>
          <h1 className='text-white text-3xl font-bold tracking-tighter text-center'>
            Discover the Ultimate Driving Experience
          </h1>
          <p className='text-white text-xl text-center mt-5'>
            Our latest model features a sleek, aerodynamic design paired with
            advanced technology. Enjoy the perfect blend of luxury, performance,
            and innovation with every drive.
          </p>
          <ul className='ml-20 mt-5'>
            <li className='text-white  list-disc'>
              High-performance engine for superior power.
            </li>
            <li className='text-white list-disc'>
              State-of-the-art infotainment system.
            </li>
            <li className='text-white list-disc'>
              Luxurious interior with premium materials.
            </li>
            <li className='text-white list-disc'>
              Advanced safety features for peace of mind.
            </li>
          </ul>
        </div>
        <div className='w-[60%] text-right'>
          <button
            onClick={handleChangeColor}
            className='h-10 w-10 bg-white rounded-full cursor-pointer z-10'
            style={{ position: 'relative', zIndex: 10 }}
          ></button>
        </div>
      </div>
      <div className='flex flex-row justify-center w-full h-[500px] absolute top-4'>
        <Canvas>
          <Suspense fallback={null}>
            <Stage environment='city' intensity={0.3}>
              <CarOne color={carColor} />
            </Stage>
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default Highlights;
