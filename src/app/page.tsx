"use client"; // this is a client component

import PageFooter from "@/components/organisms/footer";
import PageHeader from "@/components/organisms/header";
import { CartProvider } from "@/context/cartContext";

import Homepage from "@/pages/home.tsx";

export default function Home() {
  return (
    <main>
        <CartProvider>
            <PageHeader />
            <Homepage />
            <PageFooter />
        </CartProvider>
    </main>
  )
}
