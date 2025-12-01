import React from "react"

const Newsletter = () => {
    return (
        <section className="container mx-auto px-6 py-12 md:py-20">
            <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-10 md:p-16 flex flex-col items-center text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-text-light-primary dark:text-dark-primary max-w-lg">
                    Get 10% Off Your First Order
                </h3>
                <p className="text-text-light-secondary dark:text-dark-secondary mt-2 mb-6 max-w-md">
                    Be the first to know about new drops, exclusive offers, and style news
                    by joining our newsletter.
                </p>
                <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                    <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary/50 h-12 px-4 placeholder:text-text-light-secondary dark:placeholder:text-dark-secondary text-base"
                        placeholder="Enter your email address"
                        type="email"
                    />
                    <button
                        className="flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors"
                        type="submit"
                    >
                        <span className="truncate">Subscribe</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter
