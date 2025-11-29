import { CustomCursor } from "../common/CustomCursor";
import { Preloader } from "../common/Preloader";
import { ChatPopup } from "../common/ChatPopup";
import { Sidebar } from "../common/Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileNav } from "../common/MobileNav";
import { SearchPopup } from "../common/SearchPopup";
import { ScrollToTop } from "../common/ScrollToTop";

interface PageWrapperProps {
  children: React.ReactNode;
  headerVariant?: "default" | "two";
}

export function PageWrapper({ children, headerVariant = "default" }: PageWrapperProps) {
  return (
    <div>
      <CustomCursor />
      <Preloader />
      <ChatPopup />
      <Sidebar />
      <div className="page-wrapper">
        <Header variant={headerVariant} />
        {children}
        <Footer />
      </div>
      <MobileNav />
      <SearchPopup />
      <ScrollToTop />
    </div>
  );
}

