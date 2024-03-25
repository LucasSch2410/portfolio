import { AnimatedTabs } from "../AnimatedTabs/AnimatedTabs";

export function Header() {
    return (
        <header>
            <div className="max-w-5xl mx-auto">
                <div className="flex text-neutral-100">
                    <div className="flex align-middle justify-center cursor-pointer">
                        <h1><span className="text-[50px] mr-1 font-medium">S</span>chroeder</h1>
                    </div>
                    <AnimatedTabs/>
                </div>
            </div>
            <div className="h-[1px] bg-neutral-800"></div>
        </header>
    )
}