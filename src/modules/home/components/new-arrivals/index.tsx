import React from "react"

const NewArrivals = () => {
    return (
        <section className="container mx-auto px-6 py-12 md:py-16">
            <h2 className="text-text-light-primary dark:text-dark-primary text-3xl font-bold leading-tight tracking-tight pb-6">
                New Arrivals
            </h2>
            <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6">
                <div className="flex items-stretch gap-6 pb-4">
                    {/* Product 1 */}
                    <div className="flex h-full w-72 flex-shrink-0 flex-col gap-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark group">
                        <div className="w-full overflow-hidden rounded-t-xl">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover flex flex-col transition-transform duration-300 group-hover:scale-105"
                                data-alt="A model wearing a classic beige trench coat over a white shirt."
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2npD8K3ypjQZpzRPiFLTmkttBRU8D4yWOtBK1C3K1DeH7sxnAeI8WBMujF64t10iljSOv-AbOXdbvhxdDVGd4rpEspq4LowIAJ4qCMltO4oW3mwzEGJRjO523Vvt2URRMTQ6xFFFORCEHDmK6brc-RW2vXFNDfnoS0BmrFsXiL_icjnxBRB_LQfwYhHgrXHnw_5_iHmeQhykyuWVqzEIwsGqD5xGOOamRFFA40sPo2PXXhvr2T0S9ajqqN_5xGC9BFjlaYNq73j4")',
                                }}
                            ></div>
                        </div>
                        <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                            <div>
                                <p className="text-text-light-primary dark:text-dark-primary text-base font-medium leading-normal">
                                    Classic Trench Coat
                                </p>
                                <p className="text-text-light-secondary dark:text-dark-secondary text-sm font-normal leading-normal">
                                    $189.99
                                </p>
                            </div>
                            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-wide hover:bg-primary/20 transition-colors">
                                <span className="truncate">Add to Bag</span>
                            </button>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="flex h-full w-72 flex-shrink-0 flex-col gap-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark group">
                        <div className="w-full overflow-hidden rounded-t-xl">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover flex flex-col transition-transform duration-300 group-hover:scale-105"
                                data-alt="A soft, grey merino wool sweater folded neatly."
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTQkyJAA9BKG8EVm8qmlEt7xuSRbKjSrKhSPuvZv4oz7anfu3Gb5m3ma87Vzr2YzmiVQuB-2WpOUZ4NXyfak1I0YGslMIIR-c4jHAobC_xTej8KfJgnVC1AD-pNsIQtnavVuihUDQyDRqo41fSH6Yyjf6GcPbbc6zsv04HPKbjOanVs_jCJQ-yXoQxt0PQRTCzuXexatoQQ0uhbLe2PCTF6QuRtw_gLE9tH2v_b8LUF-kxu0adOSPVNePnc8AwaYwkGgAejGys014")',
                                }}
                            ></div>
                        </div>
                        <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                            <div>
                                <p className="text-text-light-primary dark:text-dark-primary text-base font-medium leading-normal">
                                    Merino Wool Sweater
                                </p>
                                <p className="text-text-light-secondary dark:text-dark-secondary text-sm font-normal leading-normal">
                                    $99.99
                                </p>
                            </div>
                            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-wide hover:bg-primary/20 transition-colors">
                                <span className="truncate">Add to Bag</span>
                            </button>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="flex h-full w-72 flex-shrink-0 flex-col gap-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark group">
                        <div className="w-full overflow-hidden rounded-t-xl">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover flex flex-col transition-transform duration-300 group-hover:scale-105"
                                data-alt="A woman wearing a flowing autumn floral print dress."
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0N_5HUyhMLbHxqZLbbXZfccSXnOTki0G23Rs2gyMMtWIdL-HOJ-_e_bcHz6os0cChz3mmMaQ1_Ngx_nA5_wMTSl8bfYvB0S7tkWJzd_ArSUCQ1qXJkU8sy0zC-8a2P3toIRx6QvUrSg5mPh8CPd4EJY2Qz8OpK7M7--NiwBh7ibUN0jnuWlchAiGItT6i5pc7ipLuPP3tM8zBdBbCc310Pr8fdV2_3sZ5tXIdimiCQ-sj_bNYPMd1d7Wq0L-0F_zQiSEOkcmhdnY")',
                                }}
                            ></div>
                        </div>
                        <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                            <div>
                                <p className="text-text-light-primary dark:text-dark-primary text-base font-medium leading-normal">
                                    Autumn Floral Dress
                                </p>
                                <p className="text-text-light-secondary dark:text-dark-secondary text-sm font-normal leading-normal">
                                    $129.99
                                </p>
                            </div>
                            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-wide hover:bg-primary/20 transition-colors">
                                <span className="truncate">Add to Bag</span>
                            </button>
                        </div>
                    </div>

                    {/* Product 4 */}
                    <div className="flex h-full w-72 flex-shrink-0 flex-col gap-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark group">
                        <div className="w-full overflow-hidden rounded-t-xl">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover flex flex-col transition-transform duration-300 group-hover:scale-105"
                                data-alt="A person wearing a classic blue denim jacket."
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeSmVaPYkUMHByjlezpqZLtY597l-SJ_Bwm2hHKybzYDQJQl8c2yRzSAwfSS_ySHG7OaI6Qy9ahiou8SYYKo7ZJWw4EfeUOSdP0HdQRZiOlxnR8C6vrRmtpIYB6-Hk1ctERvAUllwnaCINvyiu1d2Fc0nhs_ej2s9B3cu1-5E-ufsKenLJNthOH9QXUuqIeZchqxzYhXaXyyynJhuk_v2VHQMgXzm_IUtY59QWp_YHoTB0xbHi1JZEncZd-5BL2rt3ccdHGgd0rCY")',
                                }}
                            ></div>
                        </div>
                        <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                            <div>
                                <p className="text-text-light-primary dark:text-dark-primary text-base font-medium leading-normal">
                                    The Essential Denim Jacket
                                </p>
                                <p className="text-text-light-secondary dark:text-dark-secondary text-sm font-normal leading-normal">
                                    $119.99
                                </p>
                            </div>
                            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-wide hover:bg-primary/20 transition-colors">
                                <span className="truncate">Add to Bag</span>
                            </button>
                        </div>
                    </div>

                    {/* Product 5 */}
                    <div className="flex h-full w-72 flex-shrink-0 flex-col gap-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark group">
                        <div className="w-full overflow-hidden rounded-t-xl">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover flex flex-col transition-transform duration-300 group-hover:scale-105"
                                data-alt="A pair of comfortable leather Chelsea boots."
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDewDMYOdT0fEgUYNrT00-HqrPNtRE_qFaDToj4v-2Wn7j9P8nbO5odkDoYXpr3iInPOo7NPZiLWvrrQRT6W049j9mHxNgtsl65A2b-rOOGrYDczG2y9j5os2o06774xo9I0-ErQnLO8n_49d-wvC40u7oNae_N4VAnxQk5sCg2QCWifeLmG39R6j2qtmJ_1bMguqCQGXag8xQutLfbyl-hWzLxDFnSGgQh-YF_cHrR2LkwzlsKtoSSuP_JU7D4wKA1GT3C4MVH2ik")',
                                }}
                            ></div>
                        </div>
                        <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                            <div>
                                <p className="text-text-light-primary dark:text-dark-primary text-base font-medium leading-normal">
                                    Leather Chelsea Boots
                                </p>
                                <p className="text-text-light-secondary dark:text-dark-secondary text-sm font-normal leading-normal">
                                    $220.00
                                </p>
                            </div>
                            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-wide hover:bg-primary/20 transition-colors">
                                <span className="truncate">Add to Bag</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewArrivals
