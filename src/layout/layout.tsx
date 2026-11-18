import { Header } from './header.tsx'
import { Footer } from './footer.tsx'

export function Layout({ children }: { children: preact.ComponentChildren }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}