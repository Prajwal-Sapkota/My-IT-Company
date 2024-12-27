import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  tempUser: null,
  otp: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.tempUser = action.payload;
    },
    generateOtp: (state, action) => {
      state.otp = action.payload;
    },
    verifyOtp: (state, action) => {
      if (state.otp === action.payload) {
        state.user = state.tempUser;
        state.tempUser = null;
        state.otp = null;
      } else {
        throw new Error("Invalid OTP");
      }
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      if (state.user && state.user.email === email && state.user.password === password) {
        return; // Login successful
      }
      throw new Error("Invalid email or password");
    },
  },
});

export const { registerUser, generateOtp, verifyOtp, loginUser } = userSlice.actions;
export default userSlice.reducer;
