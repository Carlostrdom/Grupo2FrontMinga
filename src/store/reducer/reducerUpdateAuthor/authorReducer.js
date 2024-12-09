const initialState = {
    author: null,
    loading: false,
    error: null,
  };
  
  const authorReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_AUTHOR_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "UPDATE_AUTHOR_SUCCESS":
        return {
          ...state,
          loading: false,
          author: action.payload,
        };
      case "UPDATE_AUTHOR_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authorReducer;
  