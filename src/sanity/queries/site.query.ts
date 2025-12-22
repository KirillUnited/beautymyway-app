import { defineQuery } from "next-sanity";

export const salesQuery = defineQuery(`*[_type == "salesType" && isActive][0] {
    _id,
    title,
    description,
    isActive,
    discountPercentage,
    products[0]->
}`);

export const NAVIGATION_QUERY =
  defineQuery(`*[_type == "navigation" && language == $language] {
    _id,
    title,
    language,
    links[]{
      title,
      "slug": slug.current,
      submenu[]{
        title,
        "slug": slug.current,
        services[]->{
            title,
            description,
            "slug": slug.current,
            image
        }
      }
    },
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      _id,
      title,
      language,
      links[]{
        title,
        "slug": slug.current,
        submenu[]{
          title,
          "slug": slug.current,
          services[]->{
              title,
              description,
              "slug": slug.current,
              image
          }
        }
      },
    },
  }`);

export const SITE_SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings"][0] {
    siteContactInfo
  }`);
