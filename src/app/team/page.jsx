"use client"
import React, { useState, useRef } from 'react'

const teamMembers = [
  {
    id: 1,
    name: 'Jay Pawar',
    role: 'Founder & CEO',
    bio: 'Product visionary focused on growth, strategy and customer experience.',
    skills: ["Full Stack Developer",'Product', 'Strategy', 'Leadership'],
    photo: '/photos/my img.png'
  },
  {
    id: 2,
    name: 'Manish Sharma',
    role: 'CTO',
    bio: 'Builds reliable systems and leads the engineering efforts.',
    skills: ['React', 'Node.js', 'Architecture'],
    photo: '/photos/manishIMG.jpg'
  },
  {
    id: 3,
    name: 'Abhishek',
    role: 'CMO',
    bio: 'Create the overall marketing plan aligned with business goals.',
    skills: ['Brand Management', 'Product Marketing', 'Sales Alignment'],
    photo: '/photos/AbhishekImg.jpeg'
  },
  {
    id: 4,
    name: 'Vishal Kamdi',
    role: 'Full Stack developer',
    bio: 'Implements accessible, high-performance frontends.',
    skills: ['React', 'Tailwind', 'Testing', 'backend', 'APIs', 'Databases',  'DevOps', 'CI/CD'],
    photo: '/photos/VishalIMG.jpeg'
  },
  {
    id: 5,
    name: 'Hemant Mandal',
    role: 'Video Editor & Animator',
    bio: 'Creates engaging video content and animations.',
    skills: ['Video Editing', 'Animation', 'Motion Graphics'],
    photo: 'https://i.pravatar.cc/300?img=30'
  },
  {
    id: 6,
    name: 'Afraz Raza',
    role: 'UI/UX Designer',
    bio: 'Designs user-friendly interfaces and experiences.',
    skills: ['UI Design', 'UX Research', 'Prototyping'],
    photo: 'https://i.pravatar.cc/300?img=7'
  },
  {
    id: 7,
    name: 'Vikram Rao',
    role: 'Growth & Marketing',
    bio: 'Drives user acquisition and marketing strategy.',
    skills: ['Growth', 'Content', 'Analytics'],
    photo: 'https://i.pravatar.cc/300?img=9'
  },
  {
    id: 8,
    name: 'Anika Bose',
    role: 'Customer Success',
    bio: 'Supports customers and ensures successful onboarding.',
    skills: ['Support', 'Onboarding', 'Empathy'],
    photo: 'https://i.pravatar.cc/300?img=18'
  }
]

const page = () => {
  const [selected, setSelected] = useState(null)
  const [tilt, setTilt] = useState({})
  const cardRefs = useRef({})

  // tilt handler: calculates small rotate values and a subtle translate
  const handleMouseMove = (e, id) => {
    const el = cardRefs.current[id]
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = (x / rect.width) - 0.5
    const py = (y / rect.height) - 0.5
    const rotateY = px * 10 // tilt amount
    const rotateX = -py * 10
    setTilt(prev => ({ ...prev, [id]: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)` }))
  }

  const handleMouseLeave = (id) => {
    setTilt(prev => ({ ...prev, [id]: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)' }))
  }

  return (
    <div className='w-full bg-zinc-900 py-12 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-white text-4xl font-semibold mb-6 mt-10'>Our Team</h1>
        {/* <p className='text-zinc-300 mb-8'>Click a card to see full details. Hover to see a tilt effect.</p> */}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {teamMembers.map(member => (
            <div
              key={member.id}
              ref={el => (cardRefs.current[member.id] = el)}
              onMouseMove={(e) => handleMouseMove(e, member.id)}
              onMouseLeave={() => handleMouseLeave(member.id)}
              onClick={() => setSelected(member)}
              role='button'
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelected(member) }}
              className='relative cursor-pointer'
            >
              <div
                style={{ transform: tilt[member.id] || 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)', transition: 'transform 200ms ease' }}
                className='bg-zinc-800 rounded-xl p-5 shadow-lg hover:shadow-2xl transform-gpu will-change-transform'
              >
                <div className='flex items-center gap-4'>
                  <img src={member.photo} alt={member.name} className='w-16 h-16 rounded-full object-cover border-2 border-zinc-700' />
                  <div>
                    <h3 className='text-white text-lg font-medium'>{member.name}</h3>
                    <p className='text-zinc-400 text-sm'>{member.role}</p>
                  </div>
                </div>

                <p className='text-zinc-300 text-sm mt-3 line-clamp-3'>{member.bio}</p>

                <div className='mt-4 flex flex-wrap gap-2'>
                  {member.skills.slice(0,3).map((s, i) => (
                    <span key={i} className='text-xs bg-zinc-700 text-zinc-200 px-2 py-1 rounded'>#{s}</span>
                  ))}
                </div>

                <div className='mt-4 text-zinc-400 text-xs'>Click to view details</div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / expanded card */}
        {selected && (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center p-6'
            aria-modal='true'
            role='dialog'
          >
            <div
              className='absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity'
              onClick={() => setSelected(null)}
            />
            <div className='relative max-w-3xl w-full bg-zinc-800 rounded-2xl p-6 shadow-2xl transform transition-all duration-300 scale-100'>
              <button
                onClick={() => setSelected(null)}
                className='absolute top-4 right-4 text-zinc-300 hover:text-white'
                aria-label='Close'
              >
                ✕
              </button>

              <div className='flex flex-col md:flex-row gap-6 items-start'>
                <img src={selected.photo} alt={selected.name} className='w-36 h-36 rounded-xl object-cover border-2 border-zinc-700' />
                <div>
                  <h2 className='text-white text-2xl font-semibold'>{selected.name}</h2>
                  <p className='text-zinc-300 mb-2'>{selected.role}</p>
                  <p className='text-zinc-200'>{selected.bio}</p>

                  <div className='mt-4'>
                    <h4 className='text-zinc-300 text-sm mb-2'>Skills</h4>
                    <div className='flex flex-wrap gap-2'>
                      {selected.skills.map((s, i) => (
                        <span key={i} className='text-xs bg-zinc-700 text-zinc-200 px-3 py-1 rounded'>{s}</span>
                      ))}
                    </div>
                  </div>

                  <div className='mt-6 flex gap-3'>
                    <a className='px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm'>Contact</a>
                    <button onClick={() => setSelected(null)} className='px-4 py-2 border border-zinc-600 text-zinc-200 rounded text-sm'>Close</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default page