import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://plexuspharmaco.eu';

  return {
    title: 'Press Releases | Plexuspharmaco Europe',
    description: 'Stay informed with the latest official announcements, corporate developments, and strategic updates from Plexuspharmaco Group.',
    alternates: {
      canonical: `/${locale}/press-release`,
    },
    openGraph: {
      title: 'Press Releases | Plexuspharmaco Europe',
      description: 'Latest corporate announcements and strategic updates from Plexuspharmaco Group.',
      url: `${baseUrl}/${locale}/press-release`,
      images: [
        {
          url: "/assets/images/pharma_hero_mfg.png",
          width: 1200,
          height: 630,
          alt: "Plexuspharmaco Press Releases",
        },
      ],
    },
  };
}

export default function PressReleaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
