import Image from "next/image";
import image28 from '../../public/image28.png'
import image29 from '../../public/image29.png'
import image30 from '../../public/image30.png'
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function WhyChooseUs() {
    return (
        <div className="bg-primaryLight p-10">
            <div className="text-center px-10 space-y-4">
                <h2>Why Choose Us</h2>
                <h3 className="text-primary text-4xl font-semibold">Elevate Your Earnings: The Mining Farm Advantage!</h3>
                <p className="px-20">Dive into a realm where every choice propels you towards maximum profits and efficiency. Why settle for less? Choose excellence with Mining Farm and let your investments thrive! 💎🚀</p>
            </div>
            <div className="grid grid-cols-3 gap-4 my-6">
                <div>
                    <Image src={image29} alt="" className="bg-white p-16 w-[376px] h-[376px] rounded-xl border-primary border" />
                    <div className="space-y-3 my-4">
                        <h3 className="text-lg font-semibold">NVIDIA GeForce RTX 3060</h3>
                        <ol className="space-y-3 overflow:none">
                            <li>Hashrate-46 mh/s</li>
                            <li>Power- 115w</li>
                            <li>Profitability- 0.00005809 BTC/24h</li>
                            <li>Approx estd</li>
                        </ol>
                        <Link href={'/'}>
                            <Button className="btn-basic px-5 py-2 rounded-md mt-2">
                                Buy Now</Button></Link>
                    </div>
                </div>
                <div>
                    <Image src={image29} alt="" className="bg-white p-16 w-[376px] h-[376px] rounded-xl border-primary border" />
                    <div className="space-y-3 my-4">
                        <h3 className="text-lg font-semibold">NVIDIA GeForce RTX 3060</h3>
                        <ol className="space-y-3 overflow:none">
                            <li>Hashrate-46 mh/s</li>
                            <li>Power- 115w</li>
                            <li>Profitability- 0.00005809 BTC/24h</li>
                            <li>Approx estd</li>
                        </ol>
                        <Link href={'/'}>
                            <Button className="btn-basic px-5 py-2 rounded-md mt-2">
                                Buy Now</Button></Link>
                    </div>
                </div>
                <div>
                    <Image src={image30} alt="" className="bg-white p-16 w-[376px] h-[376px] rounded-xl border-primary border" />
                    <div className="space-y-3 my-4">
                        <h3 className="text-lg font-semibold">NVIDIA GeForce RTX 3060</h3>
                        <ol className="space-y-3 overflow:none">
                            <li>Hashrate-46 mh/s</li>
                            <li>Power- 115w</li>
                            <li>Profitability- 0.00005809 BTC/24h</li>
                            <li>Approx estd</li>
                        </ol>
                        <Link href={'/'}>
                            <Button className="btn-basic px-5 py-2 rounded-md mt-2">
                                Buy Now</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}