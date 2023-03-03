import StyledComponentsRegistry from "./lib/registry";
import "./global.css";

export const metadata = {
  title: "Test",
  description: "Test Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
