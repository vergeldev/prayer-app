import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import prayerService from "./prayerService";

const initialState = {
  prayers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create new prayers
export const createPrayer = createAsyncThunk(
  "prayers/create",
  async (prayerData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await prayerService.createPrayer(prayerData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user prayers
export const getPrayers = createAsyncThunk(
  "prayers/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await prayerService.getPrayers(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete user prayers
export const deletePrayer = createAsyncThunk(
  "prayers/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await prayerService.deletePrayer(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const prayerSlice = createSlice({
  name: "prayer",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPrayer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPrayer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.prayer.push(action.payload);
      })
      .addCase(createPrayer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getPrayers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPrayers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.prayers = action.payload;
      })
      .addCase(getPrayers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deletePrayer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePrayer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.prayers = state.prayers.filter(
          (prayer) => prayer._id !== action.payload.id
        );
      })
      .addCase(deletePrayer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = prayerSlice.actions;
export default prayerSlice.reducer;
