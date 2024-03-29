import { AnimatedTabs } from "../AnimatedTabs/AnimatedTabs";

export function Header() {
    return (
        <header className="">
            <div className="max-w-5xl mx-auto px-10 md:px-0">
                <div className="flex text-neutral-100">
                    <h1 className="text-[50px] font-light whitespace-nowrap">LS</h1>
                    <AnimatedTabs/>
                </div>
            </div>
            <div className="h-[1px] bg-neutral-800"></div>
        </header>
    )
}