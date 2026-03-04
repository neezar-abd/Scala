import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
    title: 'Skala – Partner Tumbuh Bisnis Lokal Anda',
    description: 'Skala membantu bisnis lokal tampil keren di internet, mudah ditemukan pelanggan, dan mendominasi halaman pertama Google.',
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="id">
            <body className="bg-black min-h-screen font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
