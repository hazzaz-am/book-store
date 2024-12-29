import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../utils/baseUrl";

const baseQuery = fetchBaseQuery({
	baseUrl: `${getBaseUrl()}/api/books`,
	credentials: "include",
	prepareHeaders: (Headers) => {
		const token = localStorage.getItem("token");
		if (token) {
			Headers.set("Authorization", `Bearer ${token}`);
		}
		return Headers;
	},
});

const booksApi = createApi({
	reducerPath: "booksApi",
	baseQuery,
	tagTypes: ["Books"],
	endpoints: (builder) => ({
		fetchAllBooks: builder.query({
			query: () => "/",
			providesTags: ["Books"],
		}),
		fetchBookById: builder.query({
			query: (id) => `/${id}`,
			providesTags: (_result, _error, id) => [{ type: "Books", id }],
		}),
		addNewBook: builder.mutation({
			query: (newBook) => ({
				url: "/add-book",
				method: "POST",
				body: newBook,
			}),
			invalidatesTags: ["Books"],
		}),
		updateBookById: builder.mutation({
			query: ({ id, ...rest }) => ({
				url: `/edit/${id}`,
				method: "PUT",
				body: rest,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			invalidatesTags: ["Books"],
		}),
		deleteBookById: builder.mutation({
			query: (id) => ({
				url: `/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Books"],
		}),
	}),
});

export const {
	useFetchAllBooksQuery,
	useFetchBookByIdQuery,
	useAddNewBookMutation,
	useUpdateBookByIdMutation,
	useDeleteBookByIdMutation,
} = booksApi;
export default booksApi;
