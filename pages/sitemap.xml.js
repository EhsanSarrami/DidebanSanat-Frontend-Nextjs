import Axios from "../src/services/AxiosConfig";
import { BASE_URL, unusedPages } from "../src/sitemap-config";
import {
  productsCategoryGql,
  productsGql,
  blogPostGql,
  eventsPostGql,
} from "../src/graphql";
import { funcReplaceAll } from "../src/helper";
import * as fs from "fs";

// create sitemap component and return null
const Sitemap = () => {
  return null;
};

// declare getServerSideProps as async function
export const getServerSideProps = async ({ res }) => {
  /********************** generate static paths and filter the unused pages **********************/
  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPages) => {
      return !unusedPages.includes(staticPages);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  /********************** generate dynamic paths **********************/

  // products categories paths
  const {
    data: {
      data: { firstSubCategories },
    },
  } = await Axios(productsCategoryGql);

  const productsCategoriesPaths = firstSubCategories.map(
    ({ name, parentCategory: { slug } }) => {
      return `${BASE_URL}/products-categories/${slug}/${funcReplaceAll(
        name,
        " ",
        "-"
      )}`;
    }
  );

  // products paths
  const {
    data: {
      data: { products },
    },
  } = await Axios(productsGql);

  const productsPaths = products.map(
    ({ productParentCategory, productFirstSubCategory, id, slug, title }) => {
      return `${BASE_URL}/products-categories/${
        productParentCategory.slug
      }/${funcReplaceAll(
        productFirstSubCategory.name,
        " ",
        "-"
      )}/${slug}-${funcReplaceAll(title, " ", "-")}?id=${id}`;
    }
  );

  // blog paths
  const {
    data: {
      data: { BlogPosts },
    },
  } = await Axios(blogPostGql);

  const blogPostPaths = BlogPosts.map(
    ({ id, title, slug, category: { slug: categorySlug } }) => {
      return `${BASE_URL}/blog/${categorySlug}/${funcReplaceAll(
        title,
        " ",
        "-"
      )}-${slug}?id=${id}`;
    }
  );

  // events paths
  const {
    data: {
      data: { events },
    },
  } = await Axios(eventsPostGql);

  const eventPostPaths = events.map(
    ({ id, title, slug, category: { slug: categorySlug } }) => {
      return `${BASE_URL}/events/${categorySlug}/${funcReplaceAll(
        title,
        " ",
        "-"
      )}-${slug}?id=${id}`;
    }
  );

  // combined paths
  const combinedPaths = [
    ...staticPaths,
    ...productsCategoriesPaths,
    ...productsPaths,
    ...blogPostPaths,
    ...eventPostPaths,
  ];

  // create sitemap template with template string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${combinedPaths
              .map((url) => {
                return `
                <url>
                    <loc>${url}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                </url>
                `;
              })
              .join("")}
        </urlset>
  `;

  // set res props headers
  res.setHeader("Content-Type", "text/xml");
  // write sitemap template to res
  res.write(sitemap);
  // tel res to end
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
