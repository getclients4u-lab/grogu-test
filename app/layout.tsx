export const metadata = {
  title: 'Grogu Test',
  description: 'Test deployment from GitHub to Vercel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
