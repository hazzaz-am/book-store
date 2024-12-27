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
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item) => item._id !== action.payload._id
			);
			toast.success("Successfully remove from the cart");
		},
		clearCart(state) {
			if (state.cartItems.length === 0) {
				toast.error("Cart is already empty");
				return;		
			}
			state.cartItems = [];
			toast.success("Cart cleared successfully");
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
