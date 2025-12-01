import React from "react"

const CategoryShowcase = () => {
    return (
        <section className="container mx-auto px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <a
                    className="group relative flex h-96 flex-col justify-end overflow-hidden rounded-xl p-6 text-white"
                    data-alt="A man wearing a stylish jacket and jeans leaning against a brick wall."
                    href="#"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                        style={{
                            backgroundImage:
                                'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrMHJoodP4_NK_cX3OSzD6zHN-ouWGJicT3j-lGKLKWrquhY6R8Ivh0V1mpWNb7m37fZ1l-9MuFRli2l8F-bH1J3SOqkXYFf7XGD6WBIuH7u2zy4q4cBoetHXC8vocD3b6dfGpm5EVYsx7_WsAImKuGVtuabwX8i76aKp5Gh5xqkEomxZyj6B61HRXvheiIy533i0ePCN0v9vRdsxRMIBwscsGfnQQhB_iZbXaEeYV5niLb3TzEQGoOn4jhU8-fcoxuMLB6lDzlXM")',
                        }}
                    ></div>
                    <p className="relative text-2xl font-bold leading-tight">
                        Shop Men's
                    </p>
                </a>
                <a
                    className="group relative flex h-96 flex-col justify-end overflow-hidden rounded-xl p-6 text-white"
                    data-alt="A woman wearing a fashionable dress and smiling in a sunlit field."
                    href="#"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                        style={{
                            backgroundImage:
                                'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrMHJoodP4_NK_cX3OSzD6zHN-ouWGJicT3j-lGKLKWrquhY6R8Ivh0V1mpWNb7m37fZ1l-9MuFRli2l8F-bH1J3SOqkXYFf7XGD6WBIuH7u2zy4q4cBoetHXC8vocD3b6dfGpm5EVYsx7_WsAImKuGVtuabwX8i76aKp5Gh5xqkEomxZyj6B61HRXvheiIy533i0ePCN0v9vRdsxRMIBwscsGfnQQhB_iZbXaEeYV5niLb3TzEQGoOn4jhU8-fcoxuMLB6lDzlXM")',
                        }}
                    ></div>
                    <p className="relative text-2xl font-bold leading-tight">
                        Shop Women's
                    </p>
                </a>
                <a
                    className="group relative flex h-96 flex-col justify-end overflow-hidden rounded-xl p-6 text-white"
                    data-alt="A close-up of a collection of accessories including a watch, sunglasses, and a leather bag."
                    href="#"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                        style={{
                            backgroundImage:
                                'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrMHJoodP4_NK_cX3OSzD6zHN-ouWGJicT3j-lGKLKWrquhY6R8Ivh0V1mpWNb7m37fZ1l-9MuFRli2l8F-bH1J3SOqkXYFf7XGD6WBIuH7u2zy4q4cBoetHXC8vocD3b6dfGpm5EVYsx7_WsAImKuGVtuabwX8i76aKp5Gh5xqkEomxZyj6B61HRXvheiIy533i0ePCN0v9vRdsxRMIBwscsGfnQQhB_iZbXaEeYV5niLb3TzEQGoOn4jhU8-fcoxuMLB6lDzlXM")',
                        }}
                    ></div>
                    <p className="relative text-2xl font-bold leading-tight">
                        Explore Accessories
                    </p>
                </a>
            </div>
        </section>
    )
}

export default CategoryShowcase
