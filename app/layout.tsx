import '../styles/globals.css';
import { Nunito } from 'next/font/google';

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1
	},
	title: 'Wooden Ships',
	description: 'hard rock-blues Jičín',
	icons: {
		icon: {
		  url: "/icon.ico",
		  type: "image/ico",
		},
		shortcut: { url: "/icon.ico", type: "image/ico" },
	  },
}


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (

		<html lang="cs">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body className={font.className}>
				{children}
			</body>
		</html>

	)
}
