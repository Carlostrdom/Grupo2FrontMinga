import { createReducer } from "@reduxjs/toolkit";
import { newCompany } from "../../action/actionnewcompany/actionnewcompany";

const initialState = {
  company: [],
  error: null,
  loading: false,
};

const newCompanyReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(newCompany.pending, (state) => {
      state.loading = true;
    })
    .addCase(newCompany.fulfilled, (state, action) => {
      state.company = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(newCompany.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default newCompanyReducer;