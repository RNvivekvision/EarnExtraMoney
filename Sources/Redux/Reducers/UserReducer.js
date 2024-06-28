import { createSlice } from '@reduxjs/toolkit';
import { getAdData } from '../ExtraReducers';

const initialState = {
  clickCount: 0,
  adLoading: false,
  adData: null,
};

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState: initialState,
  reducers: {
    increaseCount: (s, a) => {
      s.clickCount = a.payload;
    },
  },
  extraReducers: b => {
    b.addCase(getAdData.pending, s => {
      s.adLoading = true;
    });
    b.addCase(getAdData.fulfilled, (s, a) => {
      s.adLoading = false;
      s.adData = a.payload;
      s.Admob = a.payload?.placement?.Admob;
      s.Admanager1 = a.payload?.placement?.Admanager1;
      s.Admanager2 = a.payload?.placement?.Admanager2;
    });
    b.addCase(getAdData.rejected, (s, a) => {
      s.adLoading = false;
      s.adData = a.payload;
      // s = a.payload;
    });
  },
});

export const { increaseCount } = UserReducer.actions;

export default UserReducer.reducer;
