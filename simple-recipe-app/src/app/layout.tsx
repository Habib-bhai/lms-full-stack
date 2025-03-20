export const metadata = {
  title: 'SIMPLE-RECIPE-APP',
  description: 'A SIMPLE RECIPE APP BY HABIB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
