import PageWrapper from "@/components/page-wrapper";

export default function Home() {
	return (
		<main>
			<PageWrapper endpoint="/api/goodbye" />
		</main>
	);
}
