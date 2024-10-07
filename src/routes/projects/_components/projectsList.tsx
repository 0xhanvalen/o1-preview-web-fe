import { createSignal, onMount, Show, For } from "solid-js";
import api from "~/functions/api";
import ProjectCard from "./projectCard";

export default function ProjectList() {
	const [projects, set_projects] = createSignal<any>([]);
	const [loading, setLoading] = createSignal(true);
	const [error, setError] = createSignal(null);
	onMount(async () => {
		try {
			const data = await api.projects.list();
			set_projects(data);
		} catch (err: Error | any) {
			console.error("Error fetching projects:", err);
			setError(err.message || "An error occurred");
		} finally {
			setLoading(false);
		}
	});

	return (
		<div class="my-8 mx-auto flex flex-col gap-4">
			<Show when={loading()}>
				<p>Loading...</p>
			</Show>
			<Show when={error()}>
				<p>Error: {error()}</p>
			</Show>
			<Show when={!loading() && !error() && projects().length > 0}>
				<For each={projects()}>
					{(project) => (
						<ProjectCard
							name={project.name}
							costEstimate={project.number}
							projectId={project.id}
						/>
					)}
				</For>
			</Show>
		</div>
	);
}
