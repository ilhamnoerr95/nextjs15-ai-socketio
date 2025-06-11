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

## RENDER

### CSR (CLIENT SIDE RENDERING)

Client side rendering is popular for SPA, this approach - where browser (client ) transform react component into what u see on screen - thats what call client-side rendering. But csr have drawbacks like SEO, browser has to do everything: fetch data, build UI make everythin intercative in client, Users often end up staring at a blank screen or loading spinner while all this happens, everyting time add new feature, that js bundle get bigger making users wait even longer.
Process of csr => user request => server will send html & js bunde in clien => client get blank screen => client req js => server sent js to client => html initial render.

### SSR (SERVER SIDE RENDERING)

this recollecting drawbacks of Csr, because ssr will generate html first in server so users see actual htmlc content right away instead of blank screen or spinners. So this make Seo better than CSR, and perfoamcne and UX much better to avoiding from suffering slow load time when their browser download, execute js before seeing any meaningful content.

process of ssr => user request => fetch all data in server and genrate html in server => sent to client with full html and js code bundler => js requeset from client to server => server sending back js to load full on client => hydration => interacice ui.

Although ssr so fast, still have drawbacks such as:

1. fetch everyting before show anyting, when u wanna display html in client, data must be fetched done before generate html.
2. Hydrate began when js full loaded in client.
3. Hydrate all component before intreact with anything.

to overcome all this drawbacks:

1. using suspense talk to react, dont wait the content have suspense when wanna show anything. if particular section is slow and could potentially delay the intial html, no problem. it can be seamlessly integrated into the stream later when its ready
2. Using react lazy, tell the react these part of code are'nt urgent - split them into separate script. using react.lazy for code splitting separates main sections code from the core js bundle. so Nextjs no need to wait to hydrate before all js loaded.

## REACT SERVER COMPONENT (RSC)

RSC represnt a new architecture designed by reac team. This approach leverages the strenghts of both server and client environments to optimize efficeency, load time and interactivity. The artchitecture introduces a dual-component model: Client and Server component. This distinction is based not on the components functionality but rather on their execution env and the specific systems they are designed to interact with. Key of React server component: Browser, nextjs ,reactjs

### Client Components

Typically renderen on the client-side (CSR) , but can also be rendered to HTML on the server (ssr), allowing users to immediately see the page's html content rather than a blank screen. Client component can render on the server, optimization strategy, client component primarily operate on the client but cant (and should) also run once on the server for better perfonace.

Client component have full access to the client env, such as the browser, allowing them to use state, effects , event listener for handling interactivity. also access browser-exclusive API LIKE GEOLOCATION or localStorage allowing u to build ui for specofct ise cases, The term of Client component doeesnt signify anything new; it simply help differntiate these component from newly introduced server components.

### Server components

Code stays on the server and never downloaded to the client.

### Benefit of Server components

1. Smaller bundle sizes. Since Server components stay on the server, all their dependencies stay there too. This is fantastic for users with slower connection or less powerful devices since they don't need to download, parse and execute that js. There's no hydarion step, making app load an become interactive faster.
2. Direct access to server-side resources. Server component can talk directly to db and file systems, makin data fetching super efficient without any client-sside processing. use server power and proximity to data sources to manage compute-intensisve rendering tasks.
3. enhanced security, since server component can only run on server, sensitive data and logic - like api key and token never leave the server.
4. imporved data fecthin. Server component allow to move data fetching to the server, close to your data source. can imporove perfomance by reducing time it takes to fetch data needed for rendering and the number of requests the client needs to make.
5. caching. when render on the server, can cahe the resuls and reuse them for diffrent users and requests. it means better perfomance and lower costs since not re-rendering and re-fetching data all the time.
6. faster initial page load and first contentful paint. By generating html on the server, users see content immediately - no waiting for js to dwonload and execute.
7. imporved seo, search engines bots can easily read the server-rendered html, makinng your pages more indexable.
8. efficient streaming, server components can split the rendering process into chunks that stream to the client as they're ready. this means users start seeing content faster instead of waiting for the entire page to render on the server.

## LIFECYCLE OF REACT SERVER COMPONENT (RSC)

there are 3 keys of lifecyle redering: client/browser, nextjs and react. this diffrent from csr and ssr lifecyle.

### Render for client

note: if server components suspend react will be paused rendering substree instead give a placeholder value and react will prepare for instructions to client component later.

1. initial Sequence: user request with url -> next js will be matches the url to the server compontents -> next js instruct react to render server component. react will render server component any child component to convert into json format as RSC payload -> react send to next js and next js will be take both of rsc payload and client component instruction to generate html on server -> html will be stream right away to browser to give uninteractive ui preveiw of the route at the same time next js will be streams rsc payload as react render each piece of ui, once reaches the browser next js will be process everything streamed at over, reactjs uses rsc payload and client component instruction to progressively render ui -> after all client and server component output the final ui, all state display to users -> client component undergo hydration to make static ui become interactive ui.
2. Update Sequence: refetch from brwoser sent route to nextjs => nextjs receive it and matches that routes to server component => next js will tel to reacts render server compnent this part same as initial sequence => react will render everthing and send rsc payload to next js => but instead next js not will generate html it will be streams progressively the response data straight forward back to the client and trigger rerender of the route using new content, and react will reconcile carefully to merge the new rendered output with the existion component on the screen then updated everthing UI.

### 3 strategies render on server

1. Static: server rendering strategy where generate html pages when building applicaiton. this pages will preparing all content in advance, before users visit the page. Once built, pages can be cached by cdns and served instaNntly to user. This approach, same pre-rendered page can be shared among different users, giving app a significant perf boost. Static rendering perfect for blog post, e-commerce product listing, documentation and marketing pages. static rendering is default strategy for app router thatt all routes are autmotically prepared at build time without any addtional setup.

   > ### Production vs dev server
   >
   > In production, create one optimized build and deploy it - no on-the-fly changes after deployment
   > A development server, focues on the developer experience, need to changes immadiately in browser without rebuilding app everytime
   > production, pages are pre-rendered once during the build.
   > development, pages are pre-rendered on every request.

   > [!NOTE]
   > Summary:
   >
   > 1. static rendereing is a strategy where the html is generated at build time
   > 2. along with the html, rsc payloads for components and javascript chunks for client-side hydration are created
   > 3. direct route visits serve htmls files
   > 4. client-side navigations uses RSC payloads and Javascroipt chunks without additional server requests

2. Dynamic: Dynamic renderngin is strategy just only renderin in server,available when make request time. best practice for this strategy is: news websites, personalized shopping page, social media feeds.
   > [!NOTE]
   > how to dynamic routes work: nextjs will be switches to dynamic rendering for entire routes when it detects what we call "dynamic function" or "dynamic api"
   > in nextjs, dynamic function are: cookies(), headers(), connection(), draftmode(), searchparams props, after() => when using these function it will be automaticcaly entire route into dynamic rendering at request time.
   > dynamic rendering render in build time you will know how the route will be dynamic or not, it will marked by f symbol
3. Streaming: Strategy that allow progressive UI rendering from server, that break down into smaller chunks and streamed to client as soon as ready. this means user can see the part of page ui without waiting for everything to load. this to imporove intial page load times, although the page fetch is slower that makes normally hold up the entire route -> this example is like using "suspend boundaries"

### server and client component composition patern

1. server components : fetching data, accessing backend resources directly, keeping secret information like token, api keys secure on the server, handling large dependeching, which means less javascript to client download it. #note when the component just only run in server you must be install "npm -i server-only" so the component just run in server only, why have to separate from client component because in real case server component to secure the sensitive data, perfomance , reliability.
2. client components: adding interactivity, handling event listener (onClick, onChange), manage state & life cylce effect (useState, useEffect), implenting cusomt hook, working with browser-specifics api, using react class component. client component have "client-only" code that just running in client, this prevent to running in server component. #note: when parent of component running with client-component all the child will be working on client-side to and will be losing the benefit of server-side components, make the client-component to using as far down the tree as possible.
3. third party Packages: third-party packages are starting to add the "use client" directive to component that need client-side features, making it clear where they should run, many npm packages haven't made this transition yet, this means while they work fine in client components, they might break or fail compltely in server components, we can wrap the third-party components that need client-side feature in our own client components.
4. context providers: context providers typically live near the root of an app to share global state and logic, React context isn't supported in server components. This solution to create context and render its provider inside a dedicated client component
5. interleaving server and client components: using a server component as a parent of a client component, this means the server component will be rendered on the server, and the client component will be rendered on the client, this allow to use client component in server component and vice versa, this is useful when you want to use client component in server component but you want to avoid the hydration process. By default component will runnin in server, when using server component inside client it will be get an errors because of when u create a component that using client component the children will be make client to, but this could be resolve the server component will be wrapped as slot/childrend of client component.

## FETCHING SERVER COMPONENTS

1. The rsc architecture supports async and await keywords in Server Components, this means can write data fetching code just like reguler js.
2. Req memouization its means can fetch data wherever u need it in your components tree without worrying about duplicate network requests. React will only make the actual fetch once and reuse the result for subsequent calls during the sam render pass

> [!NOTE]
> When fetching data inside components, need to be aware of 2 data fetching patterns: 1. Sequential , 2. Parallel
>
> Sequential: Requeset in a component tree are dpendent on each other. this can lead to longer loading times.
>
> Parallel: request in a route are eagerly initated and will load data the same time. reduces the total time i takes to load data.

## SERVER ACTIONS

server action is asyncrhonous function that executed on the server, and can be used to handle user interactions, such as submitting forms or handling API requests. server action can be used to fetch data, validate user input, and perform any other server-side operations that require a response.

benefit: 1. simplified code => the code no need for separate api routes or client-side state managmenet for form data, 2.improved security: boost security by keeping sensitive operaton server-side, away from potential threats, 3. Better performance: improve perf because there's less js running on the cliend, leading to faster load times and better core web vitals, 4. progressive enhancement: forms keep working even js is turned off in browser - making app more accessible and resilient.

## useFormStatus

React hook that give status information about the last form submission, this hook just only work inside <form> tag and client side.

ex: const status = useFormStatus();
useFormStatus() returns an object with the following properties:

1. pending: a boolean that indicate if the parent <> is currently submiting
2. data: an object containing the forms submission data
3. method: a string (either "get" or post) showing the http method being used
4. action: a reference to the function that was passed to the parent form action prop

## useActionState

Is react hook that allows to update state based on the result of a form action, it is particulary helpful for handling form validation and error messsages. This only work in client side.

useActionState() havee 2 params: server action & initial form state. this hook return an array with 3 things: the current form state, a new form action, boolean indicates if action currently is being executed.

## useFromStatus vs useActionState (pending vs isPending)

Both of these hooks are determine if a form is being submitted. The pending state from useFormStatus() is specially for form submission. isPending from useActionSate() can be used with any action, not just form submissions.

1. when u using pending in useFormStatus() it will good to building reusable compnent that are meant to live inside form, example: a loading spinner that can be used across diffrent form in applicaitons.
2. when using isPending => when need to keep track of  server actions that aren't necessary related to form submissions. it give extra flexibilty.

## useOptimistic Hook

is React hooks that provides a way to optimistically update the UI while an asyn action is underway, this technique helps make app more responsive, especially when working with FORM, instead of making users wait for server responses, we can show them the expected result right away.

the hooks takes 2 parameters: 1. initial state that u want to optimistically update, 2. function determines how to update the state optimisically and this function takes 2 argument,first argument is current state, and the second to help create new state.

the hooks will return 2 value of array, 1. result of optimistic state, 2. trigger to update optimistic state that will be bring a parameter for the parameter.

> [!NOTE]
> The useOptimistic hook will running before the server action is complete.