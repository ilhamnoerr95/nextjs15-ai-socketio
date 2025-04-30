This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Layout.tsx Vs Template.tsx

> layout shared between multiple pages in app, layout only mount hte new page conten while keeping common element intact they don't remount shared components which leads to better performance
> Tempalte similar to layouts in that they are also ui share between multiple pages in app, whenever user navigates between routes sharing a template, they will get completely fresh start such as: new template component instance is mounted, Dom Element are recreated, state is cleared , effects are re-synchronized

## Special files

1. page.tsx
2. layout.tsx
3. template.tsx
4. not-found.tsx
5. loading.tsx - loading states - loading file will be wrapped into page file
6. error.tsx - error handling
7. global-error.tsx - global error handling - only occurs in production mode -requires html and body tags to be rendered

---

## Paraller routes

pararel route is multiple route rendering parerel in the same layout.

- using slots are not route segments dont affect url structure

### use case of paralle routes

1. dashboard with multiple sections
2. split-view interafaces
3. multi-pane layouts
4. complex admin interface

### paraller routes benefits

1. paraller routes are great for splitting a layout into manageable slots (especially when different team work on diffrent parts)
2. independent route handling
3. sub-navigation

### independet route handling

Each slot in layout,such as users, revenue and notif can handle its own loading and error states that like each folder/file isolated.
this granular control is particulary useful in scenarios where differet sections of the page loading at varying speeds or encounter unique errors

### sub-navitaion in routes

Each slot can essentially funciton as mini application, complete with its own navigation and state management.
users can interact with each section separately, applying filters, sorting data, or navigating through pages without affection other parts.

### unmatching routes

- navigating from UI: when navigating click through ui, nextjs keep showing content before
- page reload: when reload occured, nextjs look for 'default.tsx' file for default each slot, default.tsx is critical file that as it serve as fallback render content that cannot retrieve slots from the current url.

---

---

### Intercepting Routes

- this function render the page without move the real page. this just like preview the page before refresh to get a real page (same like pop up/modal) for seamless display perfomance. Best practice fit for modal, drawer, overlay.
- interceepting routes convention (.) or (..) or (..)(..) or (...) to match segments router folder

---

---

### ROUTE HANDLERS

Route handlers are similar to APIs running on the server, like when using Node.js and Express. The convention for route handlers in the App Router is different from that of page components, but route handlers are very flexible.
The convention follows this structure: folder/route.ts. However, if both a page file and a route handler exist in the same folder, a conflict will occur. In such cases, the route handler will take precedence and be displayed instead of the page route.

---

### Headers in Route handlers

HTTP headers represnet hte metadata associated with an API request and response.

## Request Headers

These are sent by the client, such as a web brwoser, to the server. they contain essential information about the request, which helps the server understand and process it correctly.

'user-agent' which identifies the browser and OS to the server.

'Accept' which indicates the content types like text, video or image formats that the client can process.

'Authorization' header used by the client to authenticate itself to the server

## Response Headers

These are sent back from the server to client. they provide information about the server and the data being sent in the reponse.

'Content-Type' header which indicate the media type of the response. it tells the client what the data type of the returned content is, such as text/html for html documents, application/json for JSON data, etc.

### caching in route handler

Caching in route handler coul using export const dynamic = "force-static" this will be running when application already build, then this will be change when the application rebuild. When we want to revalidate it, just using ISR (incrementar static regeneration) => using epoxrt const revalidate = 10;

### MIDDLEWARE

intercepted request, in this session will check all over where we need before continue the request.

middleware lets specify paths where it shoud be active:

1. custom matcher config.
2. conditional statements

---

### RENDER

## CSR (CLIENT SIDE RENDERING)

Client side rendering is popular for SPA, this approach - where browser (client ) transform react component into what u see on screen - thats what call client-side rendering. But csr have drawbacks like SEO, browser has to do everything: fetch data, build UI make everythin intercative in client, Users often end up staring at a blank screen or loading spinner while all this happens, everyting time add new feature, that js bundle get bigger making users wait even longer.
Process of csr => user request => server will send html & js bunde in clien => client get blank screen => client req js => server sent js to client => html initial render.

## SSR (SERVER SIDE RENDERING)

this recollecting drawbacks of Csr, because ssr will generate html first in server so users see actual htmlc content right away instead of blank screen or spinners. So this make Seo better than CSR, and perfoamcne and UX much better to avoiding from suffering slow load time when their browser download, execute js before seeing any meaningful content.

process of ssr => user request => fetch all data in server and genrate html in server => sent to client with full html and js code bundler => js requeset from client to server => server sending back js to load full on client => hydration => interacice ui.

Although ssr so fast, still have drawbacks such as:

1. fetch everyting before show anyting, when u wanna display html in client, data must be fetched done before generate html.
2. Hydrate began when js full loaded in client.
3. Hydrate all component before intreact with anything.

to overcome all this drawbacks:

1. using suspense talk to react, dont wait the content have suspense when wanna show anything. if particular section is slow and could potentially delay the intial html, no problem. it can be seamlessly integrated into the stream later when its ready
2. Using react lazy, tell the react these part of code are'nt urgent - split them into separate script. using react.lazy for code splitting separates main sections code from the core js bundle. so Nextjs no need to wait to hydrate before all js loaded.
