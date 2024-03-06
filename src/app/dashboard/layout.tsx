import React from 'react'

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                {/* Header content */}
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout