import axios from 'axios';

// Acción para actualizar el autor
export const updateAuthor = (authorData) => async (dispatch) => {
    try {
        // Puedes agregar un dispatch opcional para mostrar un loading state
        dispatch({ type: 'UPDATE_AUTHOR_REQUEST' });

        const response = await axios.put(
            'http://localhost:8080/api/author/update',
            authorData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        dispatch({
            type: 'UPDATE_AUTHOR_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'UPDATE_AUTHOR_FAILURE',
            payload: error.response?.data?.message || error.message,
        });
    }
};

