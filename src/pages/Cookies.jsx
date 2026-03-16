import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';

export function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy — OpEx6</title>
        <meta
          name="description"
          content="Information about how OpEx6 uses cookies and similar technologies on this website."
        />
      </Helmet>

      {/* HERO */}
      <section className="py-24 border-b border-black/10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Cookie Policy
          </h1>
          <p className="text-black/70 text-sm">
            Last updated: [TO BE INSERTED BY CLIENT BEFORE LAUNCH]
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[220px_1fr] gap-12">

          {/* TABLE OF CONTENTS */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28 text-sm space-y-3">
              <p className="font-semibold text-black mb-2">On this page</p>

              <a href="#overview" className="block text-black/70 hover:text-accent">
                Overview
              </a>

              <a href="#categories" className="block text-black/70 hover:text-accent">
                Cookie categories
              </a>

              <a href="#nonessential" className="block text-black/70 hover:text-accent">
                Non-essential cookies
              </a>

              <a href="#preferences" className="block text-black/70 hover:text-accent">
                Changing preferences
              </a>

              <a href="#information" className="block text-black/70 hover:text-accent">
                More information
              </a>
            </nav>
          </aside>

          {/* CONTENT */}
          <div className="bg-white border border-black/10 rounded-xl p-8 shadow-sm space-y-10 text-sm text-black/70">

            {/* SECTION 1 */}
            <section id="overview">
              <h2 className="text-lg font-semibold text-black mb-3">
                1. Overview
              </h2>

              <p>
                This site currently uses only strictly necessary cookies and similar technologies that are required for basic site
                functionality (for example, remembering that you have dismissed the cookie banner). We do not use analytics, advertising, or
                other non-essential tracking cookies at launch.
              </p>
            </section>


            {/* SECTION 2 */}
            <section id="categories">
              <h2 className="text-lg font-semibold text-black mb-4">
                2. Cookie categories and purpose
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">

                  <thead className="bg-gray-50">

                    <tr>
                      <th className="py-3 px-3 font-semibold text-black border-b border-black/10">
                        Category
                      </th>

                      <th className="py-3 px-3 font-semibold text-black border-b border-black/10">
                        Purpose
                      </th>

                      <th className="py-3 px-3 font-semibold text-black border-b border-black/10">
                        Provider
                      </th>

                      <th className="py-3 px-3 font-semibold text-black border-b border-black/10">
                        Example name / duration
                      </th>
                    </tr>

                  </thead>

                  <tbody>

                    <tr>

                      <td className="py-3 px-3 border-b border-black/10 align-top">
                        Strictly necessary
                      </td>

                      <td className="py-3 px-3 border-b border-black/10 align-top">
                        Used to remember choices you make that are essential to how the site functions, such as whether you have dismissed
                        the cookie banner.
                      </td>

                      <td className="py-3 px-3 border-b border-black/10 align-top">
                        OpEx6 (first-party)
                      </td>

                      <td className="py-3 px-3 border-b border-black/10 align-top">
                        <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                          opex6_cookie_banner_dismissed
                        </code>{" "}
                        — stored in local storage to remember that you have seen the banner (persistently until you clear your browser storage).
                      </td>

                    </tr>

                  </tbody>

                </table>
              </div>

            </section>


            {/* SECTION 3 */}
            <section id="nonessential">
              <h2 className="text-lg font-semibold text-black mb-3">
                3. Non-essential cookies
              </h2>

              <p>
                At launch, we do not set analytics, advertising, or other non-essential cookies. If we introduce non-essential cookies in
                future, we will update this policy and present a cookie banner that allows you to choose to accept all, reject all, or
                manage your preferences before any non-essential cookies are set.
              </p>
            </section>


            {/* SECTION 4 */}
            <section id="preferences">
              <h2 className="text-lg font-semibold text-black mb-3">
                4. How to withdraw or change your preferences
              </h2>

              <p>
                Because only strictly necessary cookies are currently used, there is no separate preference panel at launch. If we add
                analytics or other non-essential cookies in future, we will provide a way to reopen the cookie banner or preferences from
                this page or from the footer so you can change your choices at any time.
              </p>

              <p>
                You can also control cookies and local storage more generally through your browser settings, for example by clearing stored
                data or blocking certain types of cookies. For more detail, see your browser&apos;s help documentation.
              </p>
            </section>


            {/* SECTION 5 */}
            <section id="information">
              <h2 className="text-lg font-semibold text-black mb-3">
                5. More information
              </h2>

              <p>
                For more information about how we handle personal data more broadly, please see our{" "}
                <Link to="/privacy" className="text-accent hover:underline">
                  Privacy Notice
                </Link>.
              </p>

            </section>

          </div>

        </div>
      </Section>
    </>
  );
}