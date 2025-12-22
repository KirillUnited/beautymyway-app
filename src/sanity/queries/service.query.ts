import { defineQuery } from "next-sanity";

export const SERVICES_QUERY = defineQuery(`*[
    _type == "service"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{title,
      description,
      image, 
      price,
      "currentSlug": slug.current}
      `);

export const SERVICE_QUERY =
  defineQuery(`*[_type == "service" && slug.current == $slug && language == $language ][0]{
  ...,
  _id,
  title,
  description,
  slug,
  language,
  seo {
    title,
    description,
    "ogImage": image.asset->url
  },
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      _id,
      title,
      description,
      slug,
      language,
      seo {
        title,
        description,
        "ogImage": image.asset->url
      }
    },
}`);
