/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import FeaturedCollection from "./components/FeaturedCollection";

export default function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black">
      <Hero />
      <FeaturedCollection />
    </div>
  );
}
