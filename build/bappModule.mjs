import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { CameraControls, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';





///// component: App.jsx 
///// JSX source:
///
// import React, {useEffect, useRef} from 'react';
// import {Canvas} from "@react-three/fiber";
// import {CameraControls, Environment} from "@react-three/drei";
// 
// const App = () => {
// 
//     const CameraComponent = () => {
// 
//         const ref = useRef()
// 
//         useEffect(() => {
//             if (ref.current) {
//                 ref.current.rotateTo(0.6, 0.9, true)
//             }
//         }, [])
// 
//         return (
//             <CameraControls ref={ref} />
//         )
//     }
// 
//     return (
//         <div className={'w-full h-full'}>
//             <Canvas>
//                 <CameraComponent />
//                 <Environment files={'/content/8c4ea8f9fafef081345ba8a72c08efed2373d0ba33ac92aca5f043071fc42909i0?.hdr'} />
// 
//                 <mesh>
//                     <boxGeometry />
//                     <meshStandardMaterial color={'orange'} />
//                 </mesh>
// 
//                 <mesh scale={0.4} position={[-0.3, -0.3, 0.8]}>
//                     <boxGeometry />
//                     <meshStandardMaterial color={'orange'} />
//                 </mesh>
//             </Canvas>
//         </div>
//     )
// };
// 
// export default App;
// 

const App = () => {
  const CameraComponent = () => {
    const ref = useRef();
    useEffect(() => {
      if (ref.current) {
        ref.current.rotateTo(0.6, 0.9, true);
      }
    }, []);
    return /*#__PURE__*/_jsx(CameraControls, {
      ref: ref
    });
  };
  return /*#__PURE__*/_jsx("div", {
    className: 'w-full h-full',
    children: /*#__PURE__*/_jsxs(Canvas, {
      children: [/*#__PURE__*/_jsx(CameraComponent, {}), /*#__PURE__*/_jsx(Environment, {
        files: '/content/8c4ea8f9fafef081345ba8a72c08efed2373d0ba33ac92aca5f043071fc42909i0?.hdr'
      }), /*#__PURE__*/_jsxs("mesh", {
        children: [/*#__PURE__*/_jsx("boxGeometry", {}), /*#__PURE__*/_jsx("meshStandardMaterial", {
          color: 'orange'
        })]
      }), /*#__PURE__*/_jsxs("mesh", {
        scale: 0.4,
        position: [-0.3, -0.3, 0.8],
        children: [/*#__PURE__*/_jsx("boxGeometry", {}), /*#__PURE__*/_jsx("meshStandardMaterial", {
          color: 'orange'
        })]
      })]
    })
  });
};
export default App;
