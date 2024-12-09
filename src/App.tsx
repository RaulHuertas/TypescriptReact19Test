import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BasicKey } from './keebs/key';

import * as THREE from 'three'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

let firstKey = new BasicKey(
  '1',
  '!',
  '|',
  1,
  [0, 0]
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Nuty Configurator 🐾</h1>
      </header>


      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>

    </div>
  );
}

export default App;
