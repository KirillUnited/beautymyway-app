import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { JSX } from "react";
import { locales } from "@/i18n.config";
import { SectionButton } from "@/components/Sections/SectionButton";
import Section, {
  SectionDescription,
  SectionHeading,
  SectionSubtitle,
  SectionTitle,
} from "@/components/Sections/Section";
import { ServiceHero } from "@/components/shared/service";
import { client } from "@/sanity/lib/client";
import { SERVICE_QUERY } from "@/sanity/queries/service.query";
import { notFound } from "next/navigation";

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
  const service = await client.fetch(SERVICE_QUERY, { slug, language: locale });
  const serviceImageUrl = service?.image
    ? urlFor(service.image)?.width(1200).height(600).url()
    : "/";
  // const relatedProjectsArray = Array.isArray(relatedProjects)
  //   ? relatedProjects
  //   : [relatedProjects];
  console.log(service);
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
      />

      {/* Main content wrapper */}
      <div className="">
        {/* Breadcrumb navigation */}
        <section>
          <div className="container">
            <div className="mt-10 mb-6">
              {/*<BreadcrumbListJsonLd name={service.title} />*/}
              {/*<ServiceBreadcrumb*/}
              {/*  service="Услуги"*/}
              {/*  serviceSlug="services"*/}
              {/*  title={service.title}*/}
              {/*/>*/}
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
          {/*<ServiceDetails*/}
          {/*  advantages={service.advantages}*/}
          {/*  gallery={service.gallery}*/}
          {/*  image={getUrlFor(service.image)}*/}
          {/*  layoutRequirements={*/}
          {/*    service.layoutRequirements && (*/}
          {/*      <PortableText*/}
          {/*        value={service.layoutRequirements}*/}
          {/*        onMissingComponent={false}*/}
          {/*      />*/}
          {/*    )*/}
          {/*  }*/}
          {/*  name={service.title}*/}
          {/*  paymentMethods={service.paymentOptions}*/}
          {/*  price={service.price}*/}
          {/*  priceTable={service.priceTable}*/}
          {/*>*/}
          {/*  {Array.isArray(service.body) && (*/}
          {/*    <PortableText value={service.body} onMissingComponent={false} />*/}
          {/*  )}*/}
          {/*</ServiceDetails>*/}
        </Section>
      </div>

      {/* Portfolio section */}
      {/*{relatedProjectsArray.length > 0 && (*/}
      {/*  <Section className="bg-[#F9F9F9]">*/}
      {/*    <div className="flex flex-col gap-6 px-4">*/}
      {/*      <SectionHeading className="items-center text-center mx-auto">*/}
      {/*        <SectionSubtitle>{"галерея"}</SectionSubtitle>*/}
      {/*        <SectionTitle>{"Примеры работ"}</SectionTitle>*/}
      {/*        <SectionDescription>*/}
      {/*          {"Портфолио выполненных работ"}*/}
      {/*        </SectionDescription>*/}
      {/*      </SectionHeading>*/}

      {/*      /!*<ProjectList bentoGrid={false} projectList={relatedProjectsArray} />*!/*/}

      {/*      /!* Mobile-only projects button *!/*/}
      {/*      <SectionButton*/}
      {/*        className="lg:hidden flex"*/}
      {/*        href={"/projects"}*/}
      {/*        label="Все проекты"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </Section>*/}
      {/*)}*/}

      {/* FAQ section */}
      {service.faqs && (
        <p>FAQ Section</p>
        // <FAQSection className="bg-[#F9F9F9]" faqs={service.faqs} />
      )}

      {/* Contact form section */}
      {/*<Section className="max-w-3xl mx-auto" id="contacts">*/}
      {/*	<SectionHeading className="items-center text-center mx-auto">*/}
      {/*		<SectionSubtitle>{'обратная связь'}</SectionSubtitle>*/}
      {/*		<SectionTitle>{'Оставить заявку'}</SectionTitle>*/}
      {/*		<SectionDescription>{'Оставьте заявку и мы свяжемся с Вами в ближайшее время'}</SectionDescription>*/}
      {/*	</SectionHeading>*/}
      {/*	<Card className={clsx('flex flex-col gap-6', 'p-4 bg-background sticky top-16')} radius="sm" shadow="sm">*/}
      {/*		<OrderForm className="w-full" />*/}
      {/*	</Card>*/}
      {/*</Section>*/}

      {/* Structured data for service */}
      {/*<ServiceJsonLd description={service.description} name={service.title} url={`${process.env.NEXT_PUBLIC_SERVER_URL}/services/${slug}`} imageUrl={service.seo?.ogImage} />*/}
    </>
  );
}
