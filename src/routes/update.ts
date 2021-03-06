import { Append, Plus } from "@thothom/core";
import { getExampleRepository } from "entity";

export const update = async (_: any, reply: any) => {
	const exampleRepository = getExampleRepository();

	const example = await exampleRepository.upsert(
		{
			id: "472cbfbe-d7e4-487e-acd8-b045466a826c",
		},
		{
			string: "bar",
			list: Append("fooBar"),
			subEntity: {
				foo: Plus(1),
			},
		},
	);

	reply.send(example);
};
