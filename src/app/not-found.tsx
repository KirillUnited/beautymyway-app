import Link from 'next/link';

// Default fallback text in case translations fail
const defaultTranslations = {
    title: 'Page Not Found',
    description: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
    homeButton: 'Go to Home'
};

export default function NotFound() {
    // Use default translations directly since we can't use getTranslations in the root not-found
    return (
        <div className="min-h-dvh bg-background-100 flex flex-col items-center justify-center">
            <div className="container">
                <div className='grid grid-cols-1 gap-8 items-center py-10'>
                    <div className='text-center'>
                        <h1 className="text-6xl sm:text-8xl font-bold text-gray-900 tracking-tight mb-4">
                            404
                        </h1>
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                            {defaultTranslations.title}
                        </h2>
                        <p className="text-foreground-500 mb-8">
                            {defaultTranslations.description}
                        </p>
                        <div className="space-x-4">
                            <Link
                                href="/"
                                className='min-w-64 bg-primary text-primaryInvert uppercase font-semibold px-6 py-2 rounded-full hover:bg-primary/90 transition-colors'
                            >
                                {defaultTranslations.homeButton}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
