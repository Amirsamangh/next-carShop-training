'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='container error_page'>
            <h2>Something went wrong!</h2>
            <hr />
            <p className='text-danger'>
                {error.message}
            </p>
            <hr />
            <button
            className='btn btn-info mt-2'
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}