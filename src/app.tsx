import { Router } from "preact-router";
import { Home } from "./pages/home/home";
import { Layout } from "./layout/layout";
import { Menu } from "./pages/menu/menu";
import ChristmasMenu from "./pages/menu/christmas_menu_app";
import { Gallery } from "./pages/gallery/gallery";
import { Events } from "./pages/events/events"; 
import SpecialOffers from "./pages/Especials/specials";
import { Christmas } from "./pages/Christmas/christmas";
import { PrivacyPolicy } from "./Documents/privacy-policy";
import { CookieBanner } from "./pages/cookies/cookies";
import { TermsAndConditions } from "./Documents/terms&condiction";


const ChristmasMenuRoute = (_props: { path: string }) => <ChristmasMenu />;
const PrivacyPolicyRoute = (_props: { path: string }) => <PrivacyPolicy />;
const CookieBannerRoute = (_props: { path: string }) => <CookieBanner />;
const TermsAndConditionsRoute = (_props: { path: string }) => <TermsAndConditions />;

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
        <PrivacyPolicyRoute path="/privacy-policy" />
        <TermsAndConditionsRoute path="/terms-and-conditions" />

      </Router>
        <CookieBannerRoute path="/cookie-banner" />
    </Layout>
  );
}
