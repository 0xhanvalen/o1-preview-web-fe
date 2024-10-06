import {
	createSignal,
	createResource,
	Switch,
	Match,
	Show,
	For,
} from "solid-js";
import api from "~/functions/api";
import ProjectCard from "./_components/projectCard";
import { Title } from "@solidjs/meta";
import Nav from "~/components/Nav";

const [projectName, setProjectName] = createSignal("");

export default function Projects() {
	const [projects] = createResource(api.projects.list);
	return (
		<>
			<Title>Projects Overview</Title>
			<main class="text-center mx-auto text-gray-700 p-4 w-fit mb-8 relative min-h-screen">
				<Nav />
				<h1 class="text-2xl">Mackenzie's AI Playground</h1>
				<h2 class="text-xl">Projects</h2>
				<div class="my-8 mx-auto flex flex-col gap-4">
					<h3 class="text-xl">Create Project</h3>
					<input
						placeholder="new project name"
						value={projectName()}
						onChange={(evt) => setProjectName(evt.target.value)}
					/>
					<button
						class="px-8 py-4 bg-gray-100"
						onMouseDown={() => api.projects.create({ name: projectName() })}
					>
						Create
					</button>
				</div>
				<div class="my-8 mx-auto flex flex-col gap-4">
					<Show when={projects.loading}>
						<p>Loading...</p>
					</Show>
					<For each={projects()}>
						{(project) => (
							<ProjectCard
								name={project.name}
								costEstimate={project.number}
								projectId={project.id}
							/>
						)}
					</For>
				</div>
			</main>
		</>
	);
}
