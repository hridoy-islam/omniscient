import Image from "next/image";
import mining from '../../public/mining.png'

export default function Mining() {
    return (

        <div className="text-center px-10 space-y-4 py-10">
            <h3>About  MINING  farm</h3>
            <h2 className="text-primary text-4xl font-semibold">Mining Giants Unleashed with the Biggest Mining Farm</h2>
            <p className="px-20">
                Unleash the power of progress with the world's largest mining farm. Elevate your mining experience with unparalleled scale and efficiency. Welcome to the future of mining – welcome to Mining Giants.
            </p>
            <Image src={mining} alt="mining" />
        </div>
    )
}