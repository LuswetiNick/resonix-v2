import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

export default async function DashboardPage() {
  await auth.protect()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <UserButton />
      <OrganizationSwitcher />
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="mt-4 text-lg text-gray-600">
        Welcome to the dashboard! This is a protected route.
      </p>
    </div>
  )
}
