"use client"; 
import PageFooter from "@/components/organisms/footer";
import PageHeader from "@/components/organisms/header";

import store from "@/store/store";
import { Provider } from "react-redux";

import Homepage from "@/components/templates/home.tsx";

export default function Home() {
  return (
    <main>
        <Provider store={store}>
            <PageHeader />
            <Homepage />
            <PageFooter />
        </Provider>
    </main>
  )
}
