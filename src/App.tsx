import Nav from "./components/Nav";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subcribe from "./sections/Subcribe";
import SuperQuality from "./sections/SuperQuality";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="pb-12 sm:pb-24 xl:pl-8 2xl:pr-8">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="px-8 py-10 sm:px-16">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="w-full px-8 py-16 sm:px-16 sm:py-32">
        <Subcribe />
      </section>
      <section className="bg-black px-8 pb-8 pt-12 sm:px-16 sm:pt-24">
        <Footer />
      </section>
    </main>
  );
}

export default App;
