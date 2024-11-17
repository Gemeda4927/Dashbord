import { SignedIn } from "@clerk/nextjs";
import Head from "next/head";
import './globals.css';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SummaryCards from "./components/SummeryCard";
import GraphSection from "./components/GraphSection";
import TopProducts from "./components/TopPayers";
import ExpensesList from "./components/ExpessessList";
import Advertisement from "./components/Advertisement";
import TopCustomersTable from "./components/TopCustomersTable";

export default function Home({ children }) {
  return (
    <div>
      <Head>
        <title>Your Page Title</title>
        {/* Add any additional metadata or links here */}
      </Head>
      <main>
        <section>
          <SignedIn>
            <div className="flex">
              <Sidebar />
              <div className="flex-1 p-6 bg-gray-100 min-h-screen">
                <Header />
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <SummaryCards />
                    <GraphSection />
                  </div>
                  <div className="space-y-6">
                    <TopProducts />
                    <ExpensesList />
                    <Advertisement />
                  </div>
                </div>
                <TopCustomersTable />
              </div>
            </div>
          </SignedIn>
        </section>
      </main>
    </div>
  );
}