import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function NotFound() {
    // This will use the default locale if no locale is provided
    const t = await getTranslations('NotFound');

    return (
        <div className="min-h-dvh bg-background-100 flex flex-col items-center justify-center">
            <div className="container">
                <div className='grid grid-cols-1 gap-8 items-center py-10'>
                    <div className='text-center'>
                        <h1 className="text-6xl sm:text-8xl font-bold text-gray-900 tracking-tight mb-4">
                            404
                        </h1>
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                            {t('title')}
                        </h2>
                        <p className="text-foreground-500 mb-8">
                            {t('description')}
                        </p>
                        <div className="space-x-4">
                            <Link
                                href="/"
                                className='min-w-64 bg-primary text-primaryInvert uppercase font-semibold px-6 py-2 rounded-full'
                            >
                                {t('homeButton')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
