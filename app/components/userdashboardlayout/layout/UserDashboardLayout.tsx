// components/DashboardLayout.tsx
"use client"
import { ReactNode, useState } from 'react';
import UserAsideNav from './UserAsideNav';
import UserHeader from './UserHeader';

interface UserDashboardLayoutProps {
    children: ReactNode;
}

const UserDashboardLayout = ({ children }: UserDashboardLayoutProps) => {

   

    return (
        <div className="flex h-screen">
            {/* Side Navigation */}
            <UserAsideNav />
            {/* Side Navigation */}

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                
                {/* Header */}
                <UserHeader />
                {/* Header */}

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
