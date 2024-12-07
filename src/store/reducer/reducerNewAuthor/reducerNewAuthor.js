import { createReducer } from '@reduxjs/toolkit';
import { newAuthor } from '../../action/actionNewAuthor/actionNewAuthor';
const initialState = {
  author: [],
  error: false,
  loading: true,
};

const newAuthorReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(newAuthor.pending, (state) => {
      state.loading = true;
    })
    .addCase(newAuthor.fulfilled, (state, action) => {
      state.author = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(newAuthor.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default newAuthorReducer;