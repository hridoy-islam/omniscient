"use client"
import Link from "next/link";
import { Icon } from '@iconify/react';
import Image from "next/image";
import whitelogo from '../../public/whitelogo.png'

export default function Footer() {
    return (
        <div className="bg-black p-10 text-white">

            <div className="flex gap-3 justify-between py-8">
                <div className="w-1/2 space-y-2">
                    <Image src={whitelogo} alt="robofx" />
                    <p>RoboFX is the world's Largest Mining factory in Singapore, Dubai, Hong Kong. RoboFX supply equipment hardware for mining product all over World, it has the option of In house Installation i.e RoboFX factory itself & next installing in Client Place.</p>
                </div>
                <div className="space-y-2">
                    <h2>Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link href={'/'}>Support</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Contact Us</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Faq</Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h2>Explore</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link href={'/'}>Packages</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Gpus</Link>
                        </li>
                       
                    </ul>
                </div>
                <div className="space-y-2">
                    <h2>Legal</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link href={'/'}>Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Cokkie Policy</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-between">
                <p>© 2024 RoboFX All Rights Reserved</p>
                <ul className="flex gap-3">
                    <li>
                        <Link href="/" >
                            <Icon icon="ic:baseline-facebook" className="text-primary" width={16} ></Icon>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            <Icon  icon="mdi:instagram" className="text-primary" width={16}></Icon>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            <Icon  icon="mdi:linkedin" className="text-primary" width={16}></Icon>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            <Icon  icon="mdi:youtube" className="text-primary" width={16}></Icon>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            <Icon  icon="mdi:pinterest" className="text-primary" width={16}></Icon>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}