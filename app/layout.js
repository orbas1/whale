export const metadata = {
  title: 'Whale',
  description: 'A simple one-page Next.js site for Vercel deployment.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
