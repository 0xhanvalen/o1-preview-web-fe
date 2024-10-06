import Nav from "./Nav";

export default function Layout(props: { children: any }) {
	return (
		<main class="text-center mx-auto text-gray-700 p-4 w-fit min-h-screen mb-8 relative">
			<h1 class="text-2xl">Mackenzie's AI Playground</h1>
			{props.children}
			<Nav />
		</main>
	);
}
