import { A } from "@solidjs/router";

const numberToDollars = (cost: number) => {
	return cost.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
};

export default function ProjectCard(args: {
	name: string;
	costEstimate: number;
	projectId: number;
}) {
	return (
		<A href={`/projects/${args.projectId}`}>
			<div class="flex flex-col gap-2 px-2 py-2 border-2 rounded-md">
				<p class="text-xl">{args.name}</p>
				<p>Cost Estimate: ${args.costEstimate}</p>
			</div>
		</A>
	);
}
