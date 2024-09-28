export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import SidebarCart from "@/components/SidebarCart";
import SidebarMenu from "@/components/SidebarMenu";

export default function OrderLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {/* sidebar menu */}
          <SidebarMenu />

          <div className="flex-1 bg-gray-100 min-h-screen ml-72 mr-96">
            {children}
          </div>

          {/* sidebar cart */}
          <SidebarCart />
        </div>
      </body>
    </html>
  );
}
