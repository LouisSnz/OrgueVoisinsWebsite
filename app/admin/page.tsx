import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Administration - Les Amis de l\'Orgue',
  robots: 'noindex',
}

export default function AdminPage() {
  return (
    <>
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        strategy="afterInteractive"
      />
      <Script id="netlify-identity-init" strategy="afterInteractive">
        {`
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            });
          }
        `}
      </Script>
    </>
  )
}
