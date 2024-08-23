import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { Data } from "@/lib/types";

// #2 Define
// #5 Write down props inside of the parenthesis (props)
// #6 Define data types of props
// #7 Install Card Component from [ShadcnUI](https://ui.shadcn.com/docs/components/card)
// #8 Import Card Component from SdhacnUI
// #9 Initialize Card Component
// #10 Define data type of @props "data"

export const Post = ({
	title,
	image,
	data,
}: {
	title: string;
	image: StaticImageData;
	data: Data; // Assuming 'data' is an object with various properties
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-2xl">{title}</CardTitle>
			</CardHeader>
			<CardContent>
                {/* Card Image */}
				<div className="relative w-[250px] h-[300px]">
                    {/* [How to write image in react/next.js?](https://nextjs.org/docs/app/building-your-application/optimizing/images) */}
					<Image
						src={image}
						fill
						sizes="(min-width: 808px) 50vw, 100vw"
						style={{
							objectFit: "cover", // cover, contain, none
						}}
						alt="my-first-image"
					/>
				</div>

                {/* Card Main Content */}
                <div>
                    <p>{data.content}</p>
                </div>
			</CardContent>
			<CardFooter>
				<p><span className="font-bold">Author:</span> {data.author}</p>
			</CardFooter>
		</Card>
	);
};
