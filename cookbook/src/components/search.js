import React, { useState } from "react";

export default function Search(props) {
	const [search, setSearch] = useState("");

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setSearch({ name, value });
	};

	return (
		<div>
			<input type="text" value={search} onChange={handleChange} />
			{props.userRecipes.filter((val) => {
				if (search === "") {
					return val;
				} else if (
					val.title.toLowerCase().includes(search.toLowerCase())
				) {
					return val;
				}
			})}
		</div>
	);
}
