import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
  query {
    products {
      id
      title
      price(currency: NGN),
      image_url
    }
  }
`;
