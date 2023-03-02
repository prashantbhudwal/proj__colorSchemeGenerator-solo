import StyledComponentsRegistry from "./lib/registry";

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
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </html>
  );
}
