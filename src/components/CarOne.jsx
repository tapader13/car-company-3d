import React from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

export default function CarOne({ color, ...props }) {
  const { nodes, materials } = useGLTF('/carOne-transformed.glb');

  const coloredMaterial = new MeshStandardMaterial({ color });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.body_car_body_0.geometry}
        material={coloredMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.front_bumper_carbon_fiber_0.geometry}
        material={materials.carbon_fiber}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane008_window_0.geometry}
        material={materials.PaletteMaterial002}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.headlight_glass_headlight_glass_0.geometry}
        material={materials.headlight_glass}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.front_right_wheel_wheel_0.geometry}
        material={materials.wheel}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.intercooler_intercooler_0.geometry}
        material={materials.intercooler}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/carOne-transformed.glb');
