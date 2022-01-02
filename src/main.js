// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require("~/main.css");

import DefaultLayout from "~/layouts/Default.vue";
import './assets/tailwind.css'
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  if (isClient && process.env.NODE_ENV === 'production') {
    require('./registerServiceWorker')
  }
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  });
  // head.script.push({
  //   src: 'https://cdn.tailwindcss.com'
  // })
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800&display=swap",
  });
  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
  });

}
