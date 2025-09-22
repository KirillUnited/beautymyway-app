import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

// Fallback translations in case something goes wrong
const fallbackTranslations = {
    en: {
        title: 'Page Not Found',
        description: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
        homeButton: 'Go to Home'
    },
    es: {
        title: 'Página no encontrada',
        description: 'La página que estás buscando podría haber sido eliminada, haber cambiado de nombre o no estar disponible temporalmente.',
        homeButton: 'Ir al inicio'
    },
    ru: {
        title: 'Страница не найдена',
        description: 'Возможно, она была удалена, переименована или не существует.',
        homeButton: 'На главную'
    }
} as const;

export default async function NotFound() {
    let t;
    try {
        t = await getTranslations('NotFound');
    } catch (error) {
        console.error('Error loading translations:', error);
        // Default to English if translations fail to load
        t = (key: keyof typeof fallbackTranslations.en) => fallbackTranslations.en[key];
    }

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
                                className='min-w-64 bg-primary text-primaryInvert uppercase font-semibold px-6 py-2 rounded-full hover:bg-primary/90 transition-colors'
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
