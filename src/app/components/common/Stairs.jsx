"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { usePathname } from 'next/navigation'

const Stairs = (props) => {

    const currentPath = usePathname()

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(function () {
        const tl = gsap.timeline()
        tl.set(stairParentRef.current, {
            display: 'block',
            zIndex: 99999
        })
        tl.from('.stair', {
            height: 0,
            duration: 0.4,
            stagger: {
                amount: 0.3,
                from: "end"
            },
            ease: "power2.inOut"
        })
        tl.to('.stair', {
            y: '100%',
            duration: 0.4,
            stagger: {
                amount: 0.3,
                from: "start"
            },
            ease: "power2.inOut"
        })
        tl.set(stairParentRef.current, {
            display: 'none'
        })
        tl.set('.stair', {
            y: '0%',
        })

        gsap.from(pageRef.current, {
            opacity: 0,
            duration: 0.3,
            delay: 0.6,
            // scale: 1.05
        })
    }, [currentPath])

    return (
        <div className="relative min-h-screen w-full">
            <div ref={stairParentRef} className='fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none'>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs