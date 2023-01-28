import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="ui fixed menu">
            <div className="ui container center">
                <Link to='/'>
                    <h2>FakeShop</h2>
                </Link>
            </div>
        </header>
    )
}