import { gql } from "@apollo/client";

// export const LOAD_PRODUCTS = gql`
//   query {
//     products {
//       id
//       title
//       price(currency: NGN),
//       image_url
//     }
//   }
// `;
export const LOAD_PRODUCTS = gql`
  query Products($currency: Currency!) {
    products {
      id
      title
      price(currency: $currency)
      image_url
    }
  }
`;
export const LOAD_CURRENCY = gql`
  query {
    currency 
  }
`;
