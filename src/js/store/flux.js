const BASE_URL = "http://localhost:3000";

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			singleContact: {}
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			fetchContacts: async (id = null) => {
				let url = BASE_URL + "/contacts";
				if (id != null) {
					url += "/" + id;
				}
				let response = await fetch(url);
				if (response.ok) {
					let body = await response.json();
					if (id == null) {
						setStore({ contacts: body });
					} else {
						setStore({ singleContact: body });
					}
					return true;
				} else {
					console.log(response.status);
					return false;
				}
			},
			deleteContacts: async id => {
				let url = BASE_URL + "/contacts/" + id;
				let actions = getActions();
				let response = await fetch(url, {
					method: "DELETE"
				});
				if (response.ok) {
					await actions.fetchContacts();
					return true;
				} else {
					console.log(response.status);
					return false;
				}
			},
			addContact: async body => {
				let url = BASE_URL + "/contacts";

				let response = await fetch(url, {
					method: "POST",
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json"
					}
				});
				if (response.ok) {
					return true;
				} else {
					console.log(response.status);
					return false;
				}
			}
		}
	};
};

export default getState;
