import Image from "next/image";
import { MediaBlock } from "../media";
import { ServiceHeroProps } from "./service.props";
import { JSX } from "react";
import classNames from "classnames";
import styles from './service.module.css';

/**
 * A strongly typed function that renders a hero section for a service.
 *
 * @param title
 * @param description
 * @param mediaBlock
 * @param image
 * @param {ServiceHeroProps} props - The props object with required properties.
 * @returns {JSX.Element} A JSX element that represents the hero section.
 */

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  description,
  mediaBlock,
  image,
  footerSection,
  ...props
}): JSX.Element => {
  return (
    <section className={classNames(styles.HeroSection, props.className)}>
      {/* Background service image */}
      {mediaBlock?.mediaType ? (
        <div className="absolute inset-0">
          <Image
            alt={title}
            className="absolute inset-0 object-cover w-full h-full blur"
            height={1080}
            src={`${image}`}
            width={1920}
            quality={50}
          />
          <MediaBlock {...mediaBlock} />
        </div>
      ) : (
        <Image
          priority
          alt={title}
          className="absolute inset-0 object-cover w-full h-full"
          height={1080}
          src={`${image}`}
          width={1920}
        />
      )}
      {/* Hero content */}
      <div className={classNames(styles['HeroSection-container'], props.className)}>
        <div className={classNames(styles['HeroSection-inner'])}>
          <h1 className="text-4xl font-semibold text-background sm:text-6xl text-balance leading-none">
            {title}
          </h1>
          <p className="md:text-lg text-pretty leading-snug">
            {description}
          </p>
          {footerSection && (
            <div className="flex flex-wrap gap-2 mt-6">
              {footerSection}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
