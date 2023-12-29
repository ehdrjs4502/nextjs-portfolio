import { ThemeProvider } from "./_components/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "김동건의 포트폴리오",
  description: "Next.js로 제작하였습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
