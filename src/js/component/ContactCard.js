import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";

export const ContactCard = ({ item, onDelete, idToDelete }) => {
	const [state, setState] = useState({
		//initialize state here
	});

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={MikePhoto} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn">
							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn" onClick={() => onDelete()}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{item.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{item.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{item.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{item.email}</span>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	item: PropTypes.object,
	onDelete: PropTypes.func,
	idToDelete: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
