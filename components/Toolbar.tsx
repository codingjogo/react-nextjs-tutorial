'use client';

import React from "react";
import { Button } from "./ui/button";

// To stop propagation, add e.stopPropagation() in every button component
export const Toolbar = () => {
	return (
		<div
			className="Toolbar flex gap-4"
			onClick={() => {
				alert("You clicked on the toolbar!");
			}}
		>
			<Button onClick={(e) => {
                e.stopPropagation();
                alert("Playing!")
            }}>Play Movie</Button>
			<Button onClick={(e) => {
                e.stopPropagation();
                alert("Uploading!")
            }}>Upload Image</Button>
		</div>
	);
};
