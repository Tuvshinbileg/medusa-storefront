import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"


const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-12 md:py-20">
      <div
        className="flex min-h-[520px] w-full flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center"
        data-alt="A stylish person wearing clothes from the new fall collection in an urban setting."
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiTjVkehq7h1UuawP2kfcw8h8eglRTUHmN2xKHBh67RP9rKKTJc-NyEm8S5UohUhjwcw-1NQWhD8BtdagRG8FV7dSpjSPHs5cKXTnUM9nYTB2CbgKhyDffU6j9zpHCi0G6276_IjG0AYR29ze4M_6WxESfMlrMKq8_CA4QFWpa72pcGm4weLmyrY-hQcfgoTnl7XUeYmxjQX-H2uutQ0NL4-h_bKnk1QsNMR8kPJckOk_t4Rse53asWzwtp06b65djH32nTbUdm_k")',
        }}
      >
        <div className="flex flex-col gap-4 max-w-xl">
          <h1 className="text-white text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl">
            The Fall Edit
          </h1>
          <h2 className="text-white/90 text-lg font-normal leading-normal">
            Discover the latest trends and essential pieces for the new season.
          </h2>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors">
          <span className="truncate">Shop New Collection</span>
        </button>
      </div>
    </section>
  )
}

export default Hero
