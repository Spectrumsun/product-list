import './globals.css'

export const metadata = {
  title: 'Product List',
  description: 'Product list page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
