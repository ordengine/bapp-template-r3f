import React, {useEffect, useRef} from 'react';
import {Canvas} from "@react-three/fiber";
import {CameraControls, Environment} from "@react-three/drei";

const App = () => {

    const CameraComponent = () => {

        const ref = useRef()

        useEffect(() => {
            if (ref.current) {
                ref.current.rotateTo(0.6, 0.9, true)
            }
        }, [])

        return (
            <CameraControls ref={ref} />
        )
    }

    return (
        <div className={'w-full h-full'}>
            <Canvas>
                <CameraComponent />
                <Environment files={'/content/8c4ea8f9fafef081345ba8a72c08efed2373d0ba33ac92aca5f043071fc42909i0?.hdr'} />

                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial color={'orange'} />
                </mesh>

                <mesh scale={0.4} position={[-0.3, -0.3, 0.8]}>
                    <boxGeometry />
                    <meshStandardMaterial color={'orange'} />
                </mesh>
            </Canvas>
        </div>
    )
};

export default App;
