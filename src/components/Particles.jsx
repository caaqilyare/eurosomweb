import { useEffect } from 'react'

const Particles = () => {
    useEffect(() => {
        const particlesContainer = document.querySelector('.particles')
        const particleCount = 50

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div')
            particle.className = 'particle'
            particle.style.left = `${Math.random() * 100}%`
            particle.style.animationDelay = `${Math.random() * 20}s`
            particle.style.animationDuration = `${15 + Math.random() * 10}s`
            particlesContainer.appendChild(particle)
        }
    }, [])

    return <div className="particles"></div>
}

export default Particles
