import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [body, setBody] = useState({
		full_name: "",
		email: "",
		address: "",
		phone: ""
	});
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							value={body.full_name}
							onChange={e => {
								setBody({ ...body, full_name: e.target.value });
							}}
							type="text"
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							value={body.email}
							onChange={e => {
								setBody({ ...body, email: e.target.value });
							}}
							type="email"
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							value={body.phone}
							onChange={e => {
								setBody({ ...body, phone: e.target.value });
							}}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							value={body.address}
							onChange={e => {
								setBody({ ...body, address: e.target.value });
							}}
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button
						onClick={() => {
							console.log(body);
							if (body.address == "") {
								alert("Tiene que llenar la direccion");
							} else if (body.email == "") {
								alert("Tiene que llenar el email");
							} else if (body.full_name == "") {
								alert("Tiene que llenar el nombre");
							} else if (body.phone == "") {
								alert("Tiene que llenar el numero de celular");
							} else {
								actions.addContact(body);
							}
						}}
						type="button"
						className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
