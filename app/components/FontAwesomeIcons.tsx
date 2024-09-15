import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faXTwitter, faYahoo, faSquareYoutube, faLinkedin, faInstagram, faGooglePlus, faApple } from '@fortawesome/free-brands-svg-icons';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, } from 'react-icons/fa';
import Link from 'next/link';


export const FontAwesomeIcons: React.FC = () => {
    return (
        <div className='bg-appBlack flex w-full'>
            <ul className='flex justify-between gap-3'>
                <li>
                    <Link href={'/'} className='footersocialmedialinks'>
                        <FaFacebook />
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className='footersocialmedialinks'>
                        <FaTwitter />
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className='footersocialmedialinks'>
                        <FaInstagram />
                    </Link>
                </li>

                <li>
                    <Link href={'/'} className='footersocialmedialinks'>
                        <FaLinkedin />
                    </Link>
                </li>

            </ul>
            {/* <ul>
                <li>
                    <Link href={'/'} className='text-appRed'>
                        <FontAwesomeIcon icon={faSquareYoutube} />
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className='text-appWhite'>
                        <FontAwesomeIcon icon={faYahoo} />
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className='text-appWhite'>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </Link>
                </li>

                <li>
                    <Link href={'/'} className='text-appWhite'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className='text-appWhite'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className='text-appWhite'>
                        <FontAwesomeIcon icon={faGooglePlus} />
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className='text-appWhite'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className='text-appWhite'>
                        <FontAwesomeIcon icon={faApple} />
                    </Link>
                </li>

            </ul> */}
        </div>
    )
}
