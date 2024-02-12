const initialState = {
    user: null,
    is_authenticated: false,
    is_admin: false,
    is_instructor: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER_SUCCESS":
            return {
                ...state,
                user: action.payload,
                is_authenticated: true,
                is_admin: action.payload.is_superuser,
                is_instructor: action.payload.is_instructor,
                error: null,
            };

        case "FETCH_USER_FAILURE":
            return {
                ...state,
                user: null,
                is_authenticated: false,
                is_admin: false,
                is_instructor: false,
                error: action.payload,
            };

        case "LOGOUT_USER":
            console.log("Logout Action Received");
            return {
                ...state,
                user: null,
                is_authenticated: false,
                is_admin: false,
                is_instructor: false,
                error: null,
            };

        default:
            return state;
    }
};

export default userReducer;
