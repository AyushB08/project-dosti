"use client";
import { useState, createContext, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
	pages: Map<string, string>;
};
interface NavContext {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	pages: Map<string, string>;
}

const NavContext = createContext<NavContext | undefined>(undefined);

function useNavContext() {
	const context = useContext(NavContext);
	if (context === undefined) {
		throw new Error("Context must be used within a Provider");
	}
	return context;
}

function Logo() {
	return (
		<Link href="#" className="z-10 flex items-center justify-center flex-row expand">
			
			<span className="logo font-bold text-xl text-white">
				DOSTI
			</span>
		</Link>
	);
}

function DesktopNav() {
	const { pages } = useNavContext();
	return (
		<div className="hidden md:flex flex-row space-x-12 h-full items-center">
			<ul className="flex flex-row justify-between space-x-8">
				{Array.from(pages).map(([route, text], index) => (
					<li key={index} className="text-white expand">
						<Link key={route} href={route}>
							<span>{text}</span>
						</Link>
					</li>
				))}
			</ul>
			
            <button className="enabled:expand outline-2 outline text-white outline-white py-2 w-fit outline-offset-[-2px] text-white px-8 rounded-lg">
                <span>Donate</span>
            </button>
				
			
		</div>
	);
}
function MobileNav() {
	const { isOpen, pages } = useNavContext();
	return (
		<div
			className={`bg-navy z-0 absolute flex flex-col py-20 justify-center items-center top-0 left-0 w-full min-h-screen transition-all duration-300 ${
				isOpen
					? "translate-y-0 opacity-100"
					: "-translate-y-full opacity-0"
			}`}
		>
			<ul className="flex increment-delay flex-col w-full justify-center items-center h-full space-y-10">
				{Array.from(pages).map(([route, text], index) => (
					<li key={index}
					style={{'animationDelay': (200*index).toString()+"ms"}}
						className={`text-white font-semibold text-3xl py-10 -translate-y-[10px] opacity-0 ${isOpen ? "translate-fade-in" : ""}`}
					>
						<Link key={route} href={route}>
							<span className="expand hover:text-white">
								{text}
							</span>
						</Link>
					</li>
				))}
			</ul>
			<div className="bottom-0  absolute w-full h-fit py-8 flex flex-row justify-around ">
				<div className="w-full flex">
					<button className="enabled:expand mr-2 ml-4 outline-2 w-full outline outline-yellow py-2 outline-offset-[-2px] text-white px-4 rounded-lg">
						<span>Donate</span>
					</button>
				</div>
				
			</div>
		</div>
	);
}
function MobileNavButton() {
	const { isOpen, setIsOpen } = useNavContext();
	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<button
			id="navbutton"
			onClick={handleClick}
			className="max-md:flex  hidden"
		>
			<div className="z-10 grid justify-items-center gap-1.5 expand">
				<span
					className={`h-1 w-8 rounded-full bg-white transition ${
						isOpen ? "rotate-45 translate-y-2.5" : ""
					} "`}
				></span>
				<span
					className={`h-1 w-8 rounded-full bg-white ${
						isOpen ? "scale-x-0" : ""
					} transition`}
				></span>
				<span
					className={`h-1 w-8 rounded-full bg-white ${
						isOpen ? "-rotate-45 -translate-y-2.5" : ""
					}`}
				></span>
			</div>
		</button>
	);
}
export default function Navbar({ pages }: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [width, setWidth] = useState(0);
	useEffect(() => {
		const handleResize = () => {
			if (width != window.innerWidth){
				setWidth(window.innerWidth)
				console.log(width, window.innerWidth)
				setIsOpen(false)
			}
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [width, setWidth]);
	return (
		<nav id="navbar" className="top-0 absolute w-full">
			<div className=" max-w-screen-2xl mx-auto p-4">
				<div className="flex justify-between items-center w-full">
					<NavContext.Provider value={{ isOpen, setIsOpen, pages }}>
						<Logo />
						<DesktopNav />
						<MobileNavButton />
						<MobileNav />
					</NavContext.Provider>
				</div>
			</div>
		</nav>
	);
}
