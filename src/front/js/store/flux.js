const urlBackend = "https://alopez022-scaling-space-goggles-qjv6w6656x4fx474-3001.preview.app.github.dev/api";
					
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		},
		actions: {
			userSignup: (user) => {
				console.log("User received: " + JSON.stringify(user));
				return fetch(urlBackend + "/user/signup", {
					body: JSON.stringify(user),
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(response => {
					if(!response.ok) {
						return "Something was wrong";
					} else {
						return response.json();
					}
				})
				.catch(error => {
					console.log("Error during user signup: " + error);
					throw new Error("Unexpected error");
				});
			}
		}
	};
};

export default getState;
