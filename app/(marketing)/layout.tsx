export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="flex min-h-svh p-6">{children}</main>
}
