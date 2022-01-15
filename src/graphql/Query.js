/* ----------------- blog queries ----------------- */
export const GET_LATEST_BLOG = `
 query GetBlogData {
    BlogPosts {
      id
      image
      altImage
      title
      author
      publish
      slug
      category {
        name
      }
    }
  }
`;

export const GET_BLOG_LIST = `
 query GetBlogData {
    BlogPostCategories {
      id
      name
    }
    BlogPosts {
      id
      image
      altImage
      title
      author
      publish
      slug
      category {
        name
      }
    }
  }
`;

export const GET_BLOG_POST = `
query GetBlogPost($id: Int) {
  BlogPost(id: $id) {
    longDescription
    title
    image
    altImage
    author
    shortDescription
    publish
    updated
    metaTitle
    metaDescription
    metaKeywords
    category {
      name
    }
  }
}
`;

/* ----------------- events queries ----------------- */
export const GET_EVENTS_DATA = `
query GetEventPosts {
  eventCategories {
    id
    name
  }
  events {
    id
    image
    altImage
    title
    publish
    author
    slug
    category {
      name
    }
  }
}
`;

export const GET_EVENT_POST = `
query GetEventPost($id: Int) {
  event(id: $id) {
    longDescription
    title
    image
    altImage
    author
    shortDescription
    publish
    updated
    metaTitle
    metaDescription
    metaKeywords
    category {
      name
    }
  }
}
`;

/* ----------------- services query ----------------- */
export const GET_SERVICES_POST = `
query GetServices {
  services {
    id
    image
    title
    shortDescription
    longDescription
  }
}
`;

/* ----------------- about us query ----------------- */
export const GET_BRANDS = `
query GetBrands {
  brands{
    id
    image
    altImage
  }
}
`;

/* ----------------- team query ----------------- */
export const GET_TEAM = `
query GetTeam {
  teams {
    id
    fullName
    image
    role
    altImage
    socialNetwork {
      id
      socialName
      link
    }
  }
}
`;

/* ----------------- products queries ----------------- */
export const GET_PRODUCTS_CATEGORIES_LIST = `
query GetProductCategoriesList {
  parentCategories{
   id
   name
   image
 }
}
`;

export const GET_PRODUCTS_CATEGORIES = `
query GetProductsCategories {
  firstSubCategories {
    id
    name
    image
    slug
    parentCategory {
      name
    }
  }
  parentCategories {
    id
    name
    slug
  }
}
`;

export const GET_PRODUCTS_SUB_CATEGORIES = `
query GetProductSubCategories($id: Int) {
  firstSubCategories(id: $id) {
    name
    image
    productFirstSubCategory {
      id
      title
      slug
      image
      altImage
      productSecondSubCategory{
        name
      }
      productFirstSubCategory{
        name
      }
    }
    firstSubCategory {
      id
      name
    }
  }
}
`;

export const GET_PRODUCT_Detail = `
query GetProductDetail($id: Int) {
  product(id: $id) {
    productFirstSubCategory{
      name
    }
    image
    altImage
    title
    productModel
    tecnicalDescription
    longDescription
    metaTitle
    metaDescription
    metaKeywords
    updated
    productGallery {
      id
      image
      altImage
    }
  }
}
`;
