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
				user: action.result
			})
		case "FAILURE_LOGIN":
			return Object.assign({}, state, {
			    logging: false
			})

	}
}