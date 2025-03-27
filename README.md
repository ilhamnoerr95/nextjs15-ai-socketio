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

---
