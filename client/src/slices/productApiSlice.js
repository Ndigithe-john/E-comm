import { PRODUCT_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCT_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Product'],
    }),
    getProductDetails: builder.query({
      query: (productID) => ({
        url: `${PRODUCT_URL}/${productID}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } =
  productApiSlice;
