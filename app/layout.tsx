import NavMenu from './NavMenu';
import './globals.css';

export const metadata = {
	title: 'Myspace',
	description: 'Fireship nextjs13 course',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<NavMenu />
				{children}
			</body>
		</html>
	);
}
