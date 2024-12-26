import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const initialState = {
	cartItems: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const existingItem = state.cartItems.find(
				(item) => item._id === action.payload._id
			);

			if (!existingItem) {
				state.cartItems.push(action.payload);
				toast.success("Book added to the cart");
			} else {
				toast.error("Book already added to the cart");
			}
		},
	},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
