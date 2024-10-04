// components/DashboardLayout.tsx
"use client"
import { ReactNode, useState } from 'react';
import UserAsideNav from './UserAsideNav';
import UserHeader from './UserHeader';
import Image from 'next/image';
import twitter from '../../../../public/images/twitter.svg';
import instagram from '../../../../public/images/instagram.svg';
import facebook from '../../../../public/images/facebook.svg';
import linkedin from '../../../../public/images/linkedin.svg';
import tiktok from '../../../../public/images/tiktok.svg';

import Link from 'next/link';

interface UserDashboardLayoutProps {
    children: ReactNode;
}

const UserDashboardLayout = ({ children }: UserDashboardLayoutProps) => {

   

    return (
        <div className="flex h-screen bg-pink-200 overflow-hidden">
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
                <footer className="bg-appTitleBgColor p-4 text-center shadow-md flex justify-between">
                    <div className="flex items-center justify-between gap-2">
                        <Link href="#" className="flex items-center justify-center">
                            <Image
                                src={twitter}
                                alt="Description of the image"
                                width={30} // The width of the displayed image
                                height={30} // The height of the displayed image
                            />
                        </Link>
                        <Link href="#" className="flex items-center justify-center">
                            <Image
                                src={instagram}
                                alt="Description of the image"
                                width={30} // The width of the displayed image
                                height={30} // The height of the displayed image
                            />
                        </Link>
                        <Link href="#" className="flex items-center justify-center">
                            <Image
                                src={facebook}
                                alt="Description of the image"
                                width={30} // The width of the displayed image
                                height={30} // The height of the displayed image
                            />
                        </Link>
                        <Link href="#" className="flex items-center justify-center">
                            <Image
                                src={linkedin}
                                alt="Description of the image"
                                width={30} // The width of the displayed image
                                height={30} // The height of the displayed image
                            />
                        </Link>
                        <Link href="#" className="flex items-center justify-center">
                            <Image
                                src={tiktok}
                                alt="Description of the image"
                                width={30} // The width of the displayed image
                                height={30} // The height of the displayed image
                            />
                        </Link>
                    </div>
                    <p className='font-bold text-white'>&copy; {new Date().getFullYear()} BULQ LOGISTICS </p>
                    <p className="text-white">
                        <span className="font-semibold"> Powered By: </span>
                        <span className="font-bold"> coming soon </span>
                    </p> 
                </footer>
            </div>
        </div>
    );
};

export default UserDashboardLayout;
