import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-light-primary dark:text-dark-primary">
              Customer Service
            </h4>
            <LocalizedClientLink
              className="text-sm text-text-light-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors"
              href="/contact-us"
            >
              Contact Us
            </LocalizedClientLink>
            <LocalizedClientLink
              className="text-sm text-text-light-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors"
              href="/faq"
            >
              FAQ
            </LocalizedClientLink>
            <LocalizedClientLink
              className="text-sm text-text-light-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors"
              href="/shipping-returns"
            >
              Shipping & Returns
            </LocalizedClientLink>
            <LocalizedClientLink
              className="text-sm text-text-light-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors"
              href="/order-status"
            >
              Order Status
            </LocalizedClientLink>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-light-primary dark:text-dark-primary">
              Company
            </h4>
            <LocalizedClientLink
              className="text-sm text-text-light-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors"
              href="/about-us"
            >
              About Us
            </LocalizedClientLink>
            <LocalizedClientLink
              className="text-sm text-text-light-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors"
              href="/careers"
            >
              Careers
            </LocalizedClientLink>
            <LocalizedClientLink
              className="text-sm text-text-light-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors"
              href="/press"
            >
              Press
            </LocalizedClientLink>
            <LocalizedClientLink
              className="text-sm text-text-light-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors"
              href="/affiliates"
            >
              Affiliates
            </LocalizedClientLink>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-light-primary dark:text-dark-primary">
              Legal
            </h4>
            <LocalizedClientLink
              className="text-sm text-text-light-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors"
              href="/terms-of-service"
            >
              Terms of Service
            </LocalizedClientLink>
            <LocalizedClientLink
              className="text-sm text-text-light-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors"
              href="/privacy-policy"
            >
              Privacy Policy
            </LocalizedClientLink>
            <LocalizedClientLink
              className="text-sm text-text-light-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors"
              href="/cookie-policy"
            >
              Cookie Policy
            </LocalizedClientLink>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-light-primary dark:text-dark-primary">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                className="text-text-light-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16.03 6.02,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>
                </svg>
              </a>
              <a
                className="text-text-light-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,4H15.5C14.04,4 13.06,4.43 12.29,5.21C11.5,6 11,7 11,8.5V11H8V15H11V23H15V15H18.5L19,11H15V9C15,8.45 15.22,8.17 15.67,8.08C15.89,8.04 16.11,8 16.33,8H19V4Z"></path>
                </svg>
              </a>
              <a
                className="text-text-light-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border-light dark:border-border-dark pt-8 text-center text-sm text-text-light-secondary dark:text-dark-secondary">
          <p>© 2024 Apparel Co. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
