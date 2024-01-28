import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    function navigateHangler () {
        navigate('products');
    }

    return (
        <>
            <div>Home</div>
            <h1>My Home Page</h1>
            <p>
                {/* Go to <a href="/products">the list of products</a>. */}
                Go to <Link to="products">the list of products</Link>.
            </p>
            <p>
                <button onClick={navigateHangler}>Navigate to ProductsPage</button>
            </p>
        </>
    )
}

export default Home