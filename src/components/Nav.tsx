import { useLocation } from "@solidjs/router";

export default function Nav() {
	const location = useLocation();
	const active = (path: string) =>
		path == location.pathname
			? "border-sky-600"
			: "border-transparent hover:border-sky-600";
	return (
		<nav class="bg-sky-800 absolute bottom-0 w-full">
			<ul class="container flex items-center justify-between p-3 text-gray-200">
				<li class={`border-b-2 ${active("/projects")} mx-1.5 sm:mx-6`}>
					<a href="/projects">Projects</a>
				</li>
				<li class={`border-b-2 ${active("/settings")} mx-1.5 sm:mx-6`}>
					<a href="/settings">Settings</a>
				</li>
			</ul>
		</nav>
	);
}
