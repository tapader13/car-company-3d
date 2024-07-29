import { Sphere, MeshDistortMaterial, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const Navbar = () => {
  return (
    <div className=' flex h-40 flex-col sm:flex-row justify-between items-center py-8'>
      <ul>
        <li>
          <div className='relative h-40 w-60'>
            <Canvas>
              <Suspense fallback={null}>
                <Stage environment={'sunset'} intensity={0.6}>
                  <Sphere args={[1, 180, 120]} scale={12}>
                    <MeshDistortMaterial
                      color={'#0c3259'}
                      distort={0.5}
                      speed={2}
                      attach={'material'}
                    />
                  </Sphere>
                </Stage>
              </Suspense>
            </Canvas>
            <img
              className='absolute inset-0  w-full h-full object-contain'
              src='/img/White-modern-car-on-transparent-background-PNG-removebg-preview.png'
              alt='Car'
            />
          </div>
        </li>
      </ul>
      <ul className='flex flex-row items-center gap-10'>
        <li>
          <a href='#' className='text-2xl font-bold text-white'>
            Home
          </a>
        </li>
        <li>
          <a href='#about' className='text-2xl font-bold text-white'>
            About
          </a>
        </li>
        <li>
          <a href='#contact' className='text-2xl font-bold text-white'>
            Contact
          </a>
        </li>
        <li>
          <a href='' className='text-2xl font-bold text-white'>
            Features
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
