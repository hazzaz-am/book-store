import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../utils/baseUrl";



const ordersApi = createApi({
	reducerPath: "ordersApi",
	baseQuery: fetchBaseQuery({
		baseUrl: `${getBaseUrl()}/api/orders`,
		credentials: "include",
	}),
	tagTypes: ["Orders"],
	endpoints: (builder) => ({
    // create new order
		createOrder: builder.mutation({
			query: (newOrder) => ({
				url: "/",
				method: "POST",
				body: newOrder,
				credentials: "include",
			}),
			invalidatesTags: ["Orders"],
		}),
    // get all Orders
    getOrdersByEmail: builder.query({
      query: (email) => `/email/${email}`,
      providesTags: ['Orders']
    })
	}),
});

export const { useCreateOrderMutation, useGetOrdersByEmailQuery } = ordersApi;
export default ordersApi;
