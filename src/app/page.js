"use client";
import Content from "./HomePage/Content/content";
import Header from "./HomePage/Header/header";
import Service from "./HomePage/Service/Service";
import Projects from "./HomePage/Projects/Projects";
import Industries from "./HomePage/Industries/Industries";
import Customers from "./HomePage/Customers/Customers";
import FundedCompanies from "./HomePage/FundedCompanies/FundedCompanies";
import TeamMember from "./HomePage/TeamMember/TeamMember";
import LatestInsight from "./HomePage/LatestInsight/LatestInsight";
import Business from "./HomePage/Business/Business";
import Contact from "./HomePage/Contact/Contact";
import Footer from "./HomePage/Footer/Footer";
export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Content />
      <Service />
      <Projects />
      <Industries />
      <Customers />
      <FundedCompanies />
      <TeamMember />
      <LatestInsight />
      <Contact />
      <Business />
      <Footer />
    </main>
  );
}
