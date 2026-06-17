const About = () => {
  return (
    <section className="mx-auto my-8 flex max-w-3xl flex-col rounded-2xl bg-surface p-6 text-white ring-1 ring-white/10 sm:p-8">
      <h2 className="mb-4 text-xl font-semibold leading-snug sm:text-2xl">
        Welcome to Mapishi, the recipe discovery platform built using Node and the
        Edamam API. Our mission is simple — to make cooking easy, fun, and
        accessible for everyone.
      </h2>

      <p className="mb-4 leading-relaxed text-gray-300">
        Mapishi helps home cooks, food enthusiasts, and aspiring chefs explore a
        wide range of recipes from across the globe. By leveraging the powerful
        Edamam API, we provide real-time access to thousands of recipes tailored
        to your search, whether you're looking for something quick, healthy,
        vegetarian, or indulgent.
      </p>

      <p className="mb-4 leading-relaxed text-gray-300">
        Whether you're cooking for yourself, your family, or planning a gathering,
        Mapishi is your go-to companion. Simply enter an ingredient or a dish
        name, and let our engine fetch the best recipes to match your taste and
        dietary preferences.
      </p>

      <p className="mb-4 leading-relaxed text-gray-300">
        Our platform is styled with modern frontend tools for a smooth user
        experience. We value sustainability, community, and simplicity — because
        cooking should bring joy, not stress.
      </p>

      <p className="mb-4 leading-relaxed text-gray-300">
        At Mapishi, we believe that food connects people. Through recipe sharing
        and culinary inspiration, we're creating a space where people can learn,
        grow, and enjoy cooking — together.
      </p>

      <p className="mt-4 border-t border-white/10 pt-4 text-sm text-gray-400">
        Copyright © 2025 Mapishi. All rights reserved.
      </p>
    </section>
  );
};

export default About;
