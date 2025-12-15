import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Particles from './components/Particles'
import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import DataCenter from './pages/DataCenter'
import Technology from './pages/Technology'
import Careers from './pages/Careers'
import Pricing from './pages/Pricing'
import Learning from './pages/Learning'
import Contact from './pages/Contact'
import './index.css'

function App() {
    const [activeSection, setActiveSection] = useState('home')
    const location = useLocation()

    useEffect(() => {
        // Scroll reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                }
            })
        }, observerOptions)

        // Observe all scroll reveal elements
        const revealClasses = [
            '.scroll-reveal',
            '.scroll-reveal-left',
            '.scroll-reveal-right',
            '.scroll-reveal-scale',
            '.scroll-reveal-rotate',
            '.scroll-reveal-flip',
            '.scroll-reveal-blur',
            '.grid'
        ]

        revealClasses.forEach(className => {
            setTimeout(() => {
                document.querySelectorAll(className).forEach(el => {
                    observer.observe(el)
                })
            }, 100)
        })

        return () => observer.disconnect()
    }, [location.pathname]) // Re-run on route change

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <div className="App">
            <Particles />
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/datacenter" element={<DataCenter />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
