const initialState = {
    user: null,
    isAuthenticated: false,
    isAdmin: false,
    isInstrucutor: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER_SUCCESS":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isAdmin: action.payload.is_superuser,
                isInstrucutor: action.payload.is_instructor,
                error: null,
            };

        case "FETCH_USER_FAILURE":
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isAdmin: false,
                isInstrucutor: false,
                error: action.payload,
            };

        case "LOGOUT_USER":
            console.log("Logout Action Received");
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isAdmin: false,
                isInstrucutor: false,
                error: null,
            };

        default:
            return state;
    }
};

export default userReducer;
