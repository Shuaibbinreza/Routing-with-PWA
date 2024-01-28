import React from 'react'
import MainNavigation from '../components/MainNavigation'

function ErrorPage() {
    return (
        <>
            <MainNavigation/>
            <main>
                <h1>An error Occured</h1>
                <p>Could Not find this page</p>
            </main>
        </>
    );
}

export default ErrorPage;