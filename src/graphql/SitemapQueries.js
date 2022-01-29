/* ----------------- products queries ----------------- */
export const productsCategoryGql = `
query ParentProductsParams{
    firstSubCategories{
      name
      parentCategory{
        slug
      }
      productFirstSubCategory{
        id
        title
        slug
      }
    }
  }
`;

export const productsGql = `
query ProductsParams {
    products {
      productParentCategory {
        slug
      }
      productFirstSubCategory {
        name
      }
      id
      slug
      title
    }
}  
`;

export const blogPostGql = `
query ProductsParams {
  BlogPosts {
    id
    title
    slug
    category {
      slug
    }
  }
}
`;

export const eventsPostGql = `
query GetEventPosts {
  events {
    id
    title
    slug
    category {
      slug
    }
  }
}
`;
