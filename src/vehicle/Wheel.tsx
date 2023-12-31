import type { CylinderProps } from '@react-three/cannon'
import { useCompoundBody } from '@react-three/cannon'
import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import type { Group } from 'three'
import { Wheels } from '../models/Wheels'

useGLTF.preload('/wheel.glb')

// Initially Auto-generated by: https://github.com/pmndrs/gltfjsx



type WheelProps = CylinderProps & {
  leftSide?: boolean
  radius: number
}

export const Wheel = forwardRef<Group, WheelProps>(({ leftSide, radius = 0.1, ...props }, ref) => {
  // const {
  //   materials: { Chrom, Rubber, Steel },
  //   nodes,
  // } = useGLTF('/wheel.glb') as WheelGLTF

  useCompoundBody(
    () => ({
      collisionFilterGroup: 0,
      mass: 1,
      material: 'wheel',
      shapes: [{ args: [radius, radius, 0.2, 16], rotation: [0, 0, -Math.PI / 2], type: 'Cylinder' }],
      type: 'Kinematic',
      ...props,
    }),
    ref,
  )

  return (
    <group ref={ref}>
      <group rotation={[0, 0, 0]}>
       <Wheels scale={[.005, .005, .005]} position={[0.0, -0.15, -.01]}/>
      </group>
    </group>
  )
})
