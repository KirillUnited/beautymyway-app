import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { JSX } from "react";
import { locales } from "@/i18n.config";
import Section from "@/components/Sections/Section";
import { ServiceHero } from "@/components/shared/service";
import { client } from "@/sanity/lib/client";
import { SERVICE_QUERY } from "@/sanity/queries/service.query";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbs } from "@/lib/crumbs";
import { FAQList } from "@/components/FAQ";
import { SectionLayout } from "@/layouts/SectionLayout";
import { getTranslations } from "next-intl/server";
import InfoSection from "@/components/Sections/InfoSection/InfoSection";
import { Button } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = params;
  const service = await client.fetch(SERVICE_QUERY, { slug, language: locale });
  const { title = "", description = "", ogImage = "" } = service?.seo || {};

  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/${locale}/services/${slug}`;

  if (!service) {
    return notFound();
  }

  return {
    title: `${title || ""}`,
    description: `${description}`,
    keywords: `${title?.split(" ").join(", ")}, ${description?.split(" ").join(", ")}`,
    openGraph: {
      title: `${title || ""}`,
      description: `${description}`,
      images: [
        {
          url: ogImage ? ogImage : "/apple-touch-icon.png",
          width: 1200,
          height: 630,
          alt: `Featured image for ${title || ""}`,
        },
      ],
    },
    twitter: {
      title: `${title || ""}`,
      description: `${description}`,
      images: [ogImage ? ogImage : "/apple-touch-icon.png"],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ServicePage({
  params,
}: Props): Promise<JSX.Element> {
  const { locale, slug } = params;
  const service = await client.fetch(SERVICE_QUERY, {
      slug,
      language: `${locale}`,
    });
  const t_faq = await getTranslations("FAQ");
  const t_hero = await getTranslations("Hero");
  const serviceImageUrl = service?.image
    ? urlFor(service.image)?.width(1200).height(600).url()
    : "/";
  const { crumbs, currentPage } = getBreadcrumbs(service?.title);

  if (!service) {
    return notFound();
  }

  return (
    <>
      {/* Hero section with background image and gradient overlay */}
      <ServiceHero
        description={service.description}
        image={serviceImageUrl}
        mediaBlock={service.mediaBlock}
        title={service.title}
        footerSection={
          <>
            <Button
              component="a"
              href="#info"
              color="#2b3632"
              leftSection={<FontAwesomeIcon icon={faCalendar} />}
            >{t_hero("CTA1")}</Button>
            <Button
              component="a"
              href="#serviceDetails"
              variant="default"
              color="#2b3632"
              rightSection={<FontAwesomeIcon icon={faArrowDown} />}
            >{t_hero("CTA2")}</Button>
          </>
        }
      />

      {/* Main content wrapper */}
      <div>
        {/* Breadcrumb navigation */}
        <section>
          <div className="container">
            <div className="pt-10 pb-6">
              <Breadcrumbs crumbs={crumbs} currentPage={currentPage} />
            </div>
          </div>
        </section>

        {/* Service details section */}
        <Section id="serviceDetails" innerClassname="pt-6 md:pt-6">
          {Array.isArray(service.body) && (
            <article className="prose dark:prose-invert mx-auto">
              <PortableText value={service.body} onMissingComponent={false} />
            </article>
          )}
        </Section>
      </div>

      {/* FAQ section */}
      {service.faqs && (
        <SectionLayout
          id="faq"
          className="max-w-2xl mx-auto pb-12 lg:pb-20 border-t"
          title={t_faq("title")}
          description={t_faq("description")}
        >
          <FAQList data={service.faqs} />
        </SectionLayout>
      )}

      {/* Contact section */}
      <InfoSection locale={locale} />

      {/* Structured data for service */}
      {/*<ServiceJsonLd description={service.description} name={service.title} url={`${process.env.NEXT_PUBLIC_SERVER_URL}/services/${slug}`} imageUrl={service.seo?.ogImage} />*/}
    </>
  );
}
