'use client'

import React from 'react'
import { Link } from 'react-router-dom'
// import Link from 'next/link'
type footerProps = {
    className?: string
}

function Footer({className}: footerProps) {
    return (
            <footer className={className}>
                <div>I am great</div>
            </footer>
    )
}

export default Footer
