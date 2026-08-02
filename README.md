# Support To Able website

Production-ready TanStack Start website configured for Vercel with Nitro.

## Deploy on Vercel

1. Upload this folder to a new GitHub repository, or import the ZIP contents into a repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel should detect **TanStack Start** automatically.
4. Keep the defaults and select **Deploy**.

No environment variables are required for the current website.

## Connect supporttoable.com.au

After deployment, open the Vercel project and go to **Settings → Domains**. Add:

- `supporttoable.com.au`
- `www.supporttoable.com.au`

Vercel will show the DNS records that must be added at the registrar where the domain was purchased. Make one hostname redirect to the other so there is one canonical version of the site.

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Production test:

```bash
npm run build
```

## Important form note

The contact, referral and careers forms currently show success messages in the browser but do not send or store submissions. Add a secure form backend before accepting real participant, health, NDIS or application information.

## Form delivery

The contact, referral and careers forms now open the visitor's default email application with a pre-filled message addressed to `Supporttoable@gmail.com`. The visitor must press **Send** in their email application.

Referral document names are included in the draft, but browsers cannot automatically attach local files to a `mailto:` email. Visitors are prompted to attach those files manually before sending.
# support_to_able
# support_to_able
