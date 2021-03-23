// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require("~/main.css");
import DefaultLayout from "~/layouts/Default.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800&display=swap",
  });
  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  });
  
  if (process.isClient) {
    AOS.init();
  }
  Vue.component("Layout", DefaultLayout);
}
