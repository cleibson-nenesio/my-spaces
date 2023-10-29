// Next
import Link from 'next/link';
import Image from 'next/image';

export default function NavMenu() {
	return (
		<nav className="flex bg-[#1d4ed8] text-white h-[70px] justify-between items-center">
			<Link href={'/'}>
				<Image
					src="/logo.png"
					width={216}
					height={30}
					alt="NextSpace Logo"
					className="invert"
				/>
			</Link>

			<ul className="list-none flex mr-4">
				<li className="h-[70px] flex items-center p-1">
					<Link href={'/about'}>About</Link>
				</li>
				<li className="h-[70px] flex items-center p-1">
					<Link href={'/blog'}>Blog</Link>
				</li>
				<li className="h-[70px] flex items-center p-1">
					<Link href={'/users'}>Users</Link>
				</li>
			</ul>
		</nav>
	);
}
