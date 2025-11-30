import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { Adjustments } from "@medusajs/icons"



export default async function NavCategory() {
    const regions = await listRegions().then((regions: StoreRegion[]) => regions)

    return (
        <div className="sticky top-0 inset-x-0 group">
            <header className="relative h-11 mx-auto border-b duration-200 bg-white border-ui-border-base">
                <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
                    <div className="flex-1 basis-0 h-full flex items-center">
                        <div className="h-full">
                            <div className="hidden small:flex items-center gap-x-6 h-full">
                                <LocalizedClientLink
                                    className="hover:text-ui-fg-base flex"
                                    href="/#"
                                    data-testid="nav-account-link"
                                >
                                    <Adjustments className="mr-2"/>
                                    Brands
                                </LocalizedClientLink>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
                        <div className="hidden small:flex items-center gap-x-6 h-full">
                            <LocalizedClientLink
                                className="hover:text-ui-fg-base"
                                href="/account"
                                data-testid="nav-account-link"
                            >
                                Brands
                            </LocalizedClientLink>
                        </div>
                        <Suspense
                            fallback={
                                <LocalizedClientLink
                                    className="hover:text-ui-fg-base flex gap-2"
                                    href="/cart"
                                    data-testid="nav-cart-link"
                                >
                                    Contact us
                                </LocalizedClientLink>
                            }
                        >
                            <CartButton />
                        </Suspense>
                    </div>
                </nav>
            </header>
        </div>
    )
}

