'use client';

import React from "react";
import { Button } from "./ui/button";

export const Toolbar = () => {
	return (
		<div
			className="Toolbar flex gap-4"
			onClick={() => {
				alert("You clicked on the toolbar!");
			}}
		>
			<Button onClick={() => alert("Playing!")}>Play Movie</Button>
			<Button onClick={() => alert("Uploading!")}>Upload Image</Button>
		</div>
	);
};
