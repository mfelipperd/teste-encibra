'use client'
import { Providers } from "@/providers"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const layoutStyle = {
    backgroundColor: '#f3f3f3',
  };

  return (
    <html lang="en">
      <body style={layoutStyle}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
