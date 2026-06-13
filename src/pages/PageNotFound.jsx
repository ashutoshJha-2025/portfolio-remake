import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <>
            <div className='w-full h-full flex flex-col justify-center items-center text-center p-5'>
                <h1 style={{ fontSize: "5rem", margin: 0 }}>404</h1>

                <h2>Page Not Found</h2>

                <p>
                    The page you're looking for doesn't exist or the link may be incorrect.
                </p>

                <Link
                    to="/"
                    className='mt-5 py-4 px-6 rounded-lg bg-[#f59e0b] text-white font-semibold'
                >
                    Go to Home
                </Link>
            </div>
        </>
    )
}

export default PageNotFound