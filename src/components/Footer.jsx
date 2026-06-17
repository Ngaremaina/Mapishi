import { GitHubIcon, LinkedInIcon, MailIcon, HomeIcon, InfoIcon } from "./icons";

const Footer = () => {
  return (
    <footer className="mt-8 w-full border-t border-white/10 py-8 text-white">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Company Info */}
          <div className="md:col-span-5">
            <h2 className="mb-2 text-lg font-semibold">Mapishi</h2>
            <p className="text-sm">
              Find Recipes That Nourish and Delight. Mapishi allows you to search
              cooking recipes based on dish names.
            </p>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-3">
            <h2 className="mb-2 text-lg font-semibold">Useful Links</h2>
            <div className="mb-1 flex items-center gap-2">
              <HomeIcon width={18} height={18} />
              <a href="/" className="text-gray-300 transition hover:text-brand-400 hover:underline">Home</a>
            </div>
            <div className="mb-1 flex items-center gap-2">
              <InfoIcon width={18} height={18} />
              <a href="/about" className="text-gray-300 transition hover:text-brand-400 hover:underline">About Us</a>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h2 className="mb-2 text-lg font-semibold">Contact</h2>
            <div className="mb-1 flex items-center gap-2">
              <GitHubIcon width={18} height={18} />
              <a
                href="https://github.com/Ngaremaina"
                className="text-gray-300 transition hover:text-brand-400 hover:underline"
              >
                Github
              </a>
            </div>
            <div className="flex items-center gap-2">
              <LinkedInIcon width={18} height={18} />
              <a
                href="https://www.linkedin.com/in/owen-ngare-maina/"
                className="text-gray-300 transition hover:text-brand-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white/20" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">© 2025 Mapishi. All rights reserved.</p>
          <div className="flex items-center">
            <a
              href="https://github.com/Ngaremaina"
              aria-label="GitHub"
              className="rounded-full p-2 text-gray-300 transition hover:bg-white/10 hover:text-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/owen-ngare-maina/"
              aria-label="LinkedIn"
              className="rounded-full p-2 text-gray-300 transition hover:bg-white/10 hover:text-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:ngaremaina4@gmail.com"
              aria-label="Email"
              className="rounded-full p-2 text-gray-300 transition hover:bg-white/10 hover:text-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
