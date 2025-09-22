import {SectionLayout} from "@/layouts/SectionLayout";
import {FAQList} from "@/components/FAQ";
import {useTranslations} from "next-intl";
import {FaqItem} from "@/components/FAQ/FAQList";

export default function FaqSection() {
    const t = useTranslations('FAQ');
    const faqItems: FaqItem[] = t.raw("data");

    return (
        <SectionLayout id='faq' className='pb-12 lg:pb-20' title={t('title')} description={t('description')}>
            <FAQList data={faqItems} className='max-w-4xl mx-auto'/>
        </SectionLayout>
    )
}