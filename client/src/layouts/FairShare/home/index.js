import PageLayout from 'examples/LayoutContainers/PageLayout'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function HomePage() {
    return (
        <PageLayout>
            <div className="container">
                <h1>Welcome to FairShare</h1>
                <a href="/login"><button>Login</button></a>
                <a href="/signup"><button>Signup</button></a>
            </div>
        </PageLayout>
    )
}
