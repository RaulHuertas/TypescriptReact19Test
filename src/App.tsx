import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BasicKey} from './keebs/key';
import { Keyboard } from './keebs/keyboard';

import * as THREE from 'three'
import { Canvas, useFrame, ThreeElements,  } from '@react-three/fiber'



function App() {
  const [keyboard,changeKeyboard] = useState(new Keyboard(""))
  const listOfKeys = keyboard.keys.map(
    (keyInfo) => (
        <mesh
          position={[keyInfo.coord[0],keyInfo.coord[1],0.0]}  
        >
          <boxGeometry args={[1,1,1]} />
          <meshStandardMaterial color={[100, 0, 0]} wireframe ={true} /> 
        </mesh> 
      )
  )
  return (
    <div className="App">
      <header className="App-header">
      <h1>Nuty Configurator 🐾</h1>
      </header>
      <div>
        {keyboard.keys.length}
      </div>
      <div>
        {keyboard.boundingBox[0]}
      </div>
      
      <div>
        {keyboard.boundingBox[1]}
      </div>

      <div>
        {keyboard.boundingBox[2]}
      </div>
      
      <div>
        {keyboard.boundingBox[3]}
      </div>
      <Canvas orthographic={true}>
        <pointLight position={[0,0, 3]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        {listOfKeys}
        
      
      </Canvas>

    </div>
  );
}

export default App;
