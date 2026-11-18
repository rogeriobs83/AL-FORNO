import { Router } from "preact-router";
import { Home } from "./pages/home/home";
import { Layout } from "./layout/layout";
import { Menu } from "./pages/menu/menu";
import ChristmasMenu from "./pages/menu/christmas_menu_app";
import { Gallery } from "./pages/gallery/gallery";
import { Events } from "./pages/events/events"; 
import SpecialOffers from "./pages/Especials/specials";
import { Christmas } from "./pages/Christmas/christmas";

const ChristmasMenuRoute = (_props: { path: string }) => <ChristmasMenu />;

export function App() {
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <Menu path="/menu" />
        <Gallery path="/gallery" />
        <Events path="/events" />
        <ChristmasMenuRoute path="/christmas-menu" />
        <SpecialOffers path="/special-offers" />
        <Christmas path="/christmas" />

      </Router>
    </Layout>
  );
}
