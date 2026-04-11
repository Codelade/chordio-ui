const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300">
      <div className="border-t border-slate-800/70">
        <div className="w-full px-6 py-8 sm:px-8 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-3xl flex flex-col items-center gap-6 lg:gap-10">
            {/* Mobile: compact centered logo */}
            <div className="flex flex-col items-center text-center space-y-2 lg:hidden">
              <div className="flex items-center gap-2 text-lg font-semibold text-white">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
                  C
                </div>
                <span>Chordio</span>
              </div>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                Chords made easy.
              </p>
            </div>

            {/* Link grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-center lg:text-left w-full max-w-xs mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-5 lg:gap-10">
              {/* Desktop-only logo column */}
              <div className="hidden lg:block">
                <div className="flex items-center gap-2 text-lg font-semibold text-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    C
                  </div>
                  <span>Chordio</span>
                </div>
                <p className="mt-3 text-[14px] text-slate-400 leading-relaxed">
                  Chords made easy.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xs font-semibold text-slate-100 uppercase tracking-wide">
                  Explore
                </h2>
                <ul className="space-y-1 text-[13px] text-slate-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Resources
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-xs font-semibold text-slate-100 uppercase tracking-wide">
                  Company
                </h2>
                <ul className="space-y-1 text-[13px] text-slate-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-xs font-semibold text-slate-100 uppercase tracking-wide">
                  Support
                </h2>
                <ul className="space-y-1 text-[13px] text-slate-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-xs font-semibold text-slate-100 uppercase tracking-wide">
                  Resources
                </h2>
                <ul className="space-y-1 text-[13px] text-slate-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Docs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      API
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="w-full border-t border-slate-800/70 text-xs text-slate-400 pt-4 flex flex-col sm:flex-row justify-between items-center gap-1 text-center">
              <p>© {new Date().getFullYear()} Chordio. All rights reserved.</p>
              <p>A Portfolio Project Built by Jakub K.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
