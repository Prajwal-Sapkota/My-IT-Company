import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: null, // Stores logged-in user's data
  isLoggedIn: false,  // Indicates whether the user is logged in or not
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set temporary user data (for registration)
    setTempUser: (state, action) => {
      state.loggedInUser = action.payload; // Store temporary user data
      state.isLoggedIn = false; // Not logged in yet
    },
    
    // Action to log the user in
    loginUser: (state, action) => {
      state.loggedInUser = action.payload; // Store logged-in user data
      state.isLoggedIn = true; // Set user as logged in
    },
    
    // Action to log the user out
    logout: (state) => {
      state.loggedInUser = null; // Clear user data
      state.isLoggedIn = false; // Set logged-in status to false
    },
  },
});

export const { setTempUser, loginUser, logout } = userSlice.actions;
export default userSlice.reducer;
