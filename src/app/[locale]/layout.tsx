import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LocaleLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return (
		<html lang={locale}>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
