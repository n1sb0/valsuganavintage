"use client"
import { api } from "../utils/api";
import ProvidersWrapper from "~/ProvidersWrapper";

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <head></head>
        <body>
          <main>   
          <ProvidersWrapper>
            {children}
          </ProvidersWrapper>
          </main>
        </body>
      </html>
    </>
  );
}

export default api.withTRPC(RootLayout);