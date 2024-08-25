import { Data } from "@/lib/types";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Person = ({ id, name, profession }: Data) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{name}</CardTitle>
				
			</CardHeader>
			<CardContent>
				<p>{profession}</p>
			</CardContent>
			<CardFooter>
				<p>ID: {id}</p>
			</CardFooter>
		</Card>
	);
};
