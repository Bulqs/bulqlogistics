// components/DashboardLayout.tsx
"use client"
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation'; // Use next/navigation
import Link from 'next/link';

interface UserDashboardLayoutProps {
    children: ReactNode;
}

const UserDashboardLayout = ({ children }: UserDashboardLayoutProps) => {
    const pathname = usePathname(); // Replaces router.pathname

    return (
        <div className="flex h-screen">
            {/* Side Navigation */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
                <div className="text-2xl font-semibold mb-6 ">Dashboard</div>
                <nav className="flex flex-col space-y-4">
                    <Link href="/pages/userdashboard" className={`px-3 py-2 rounded-md ${pathname === '/pagesuserdashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                       Home
                    </Link>
                    <Link href="/pages/userdashboard/profile" className={`px-3 py-2 rounded-md ${pathname === '/pages/userdashboard/profile' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        Profile
                    </Link>
                    <Link href="/pages/userdashboard/notification" className={`px-3 py-2 rounded-md ${pathname === '/pages/userdashboard/notification' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        Notification
                    </Link>
                    <Link href="/pages/userdashboard/settings" className={`px-3 py-2 rounded-md ${pathname === '/pages/userdashboard/settings' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        Settings
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-gray-100 p-4 shadow-md">
                    <h1 className="text-xl font-semibold text-black">User Dashboard</h1>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-4">
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-gray-100 p-4 text-center shadow-md">
                    <p>&copy; {new Date().getFullYear()} Your Company</p>
                </footer>
            </div>
        </div>
    );
};

export default UserDashboardLayout;
