import type { Metadata } from "next";
import { LoginView } from "@/components/login/LoginView";

export const metadata: Metadata = {
  title: "Login",
  description: "Log in to Diamond Club Vacations.",
  robots: { index: false, follow: false },
};

interface LoginPageProps {
  searchParams: Promise<{ brand?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { brand } = await searchParams;
  return <LoginView forceGuettaway={brand === "guettaway"} />;
}
