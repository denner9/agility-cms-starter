import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isLoading: boolean;
}

const initialState: InitialState = {
  isLoading: false
}

export const rootSlice = createSlice({
  name: 'rootSlice',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  },
});

export const { setLoading } = rootSlice.actions;
export default rootSlice.reducer;
