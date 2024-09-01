import React from 'react'
import { Article, Navbar, Feature, cta, Brand, Cta } from './components/index'
import { Footer, Header, Possibility, WhatGPT, Features, Blog } from './containers'
import './App.css'
function App() {
    return (
        <div className='App'>
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App