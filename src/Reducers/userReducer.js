const initialState = {}

export function userReducer(state=initialState, action) {
	switch(action.type) {
		case "REQUEST LOGIN":
			return Object.assign({}, state, {
		        logging: true
      		})
		case "SUCCESS_LOGIN":
			return Object.assign({}, state, {
				logging: false,
				user: action.user
			})
		case "FAILURE_LOGIN":
			return Object.assign({}, state, {
			    logging: false
			})
		case "TOKEN":
			return Object.assign({}, state, {
			    token: action.token
			})
		default:
			return state
	}
}