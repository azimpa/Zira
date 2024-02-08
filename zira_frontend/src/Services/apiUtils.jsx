import api from "./api";

export const fetchUser = async () => {
    try {
        const response = await api.get(
            `${import.meta.env.VITE_APP_BASE_URL}users/`
            // `${import.meta.env.VITE_APP_BASE_URL}admins/api/users/`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchSingleUser = async (user_id) => {
    try {
        const response = await api.get(
            `${import.meta.env.VITE_APP_BASE_URL}users/${user_id}/`
            // `${import.meta.env.VITE_APP_BASE_URL}admins/api/edit/${user_id}/`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
