import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import focus from '@alpinejs/focus'
import cartStore from "./cartStore";
import useCart from "./useCart";
import useCartSummary from "./useCartSummary";
import useSearch from "./useSearch";
import { useCarousel } from "./useCarousel";
import { formatCurrencyDirective } from "./alpine-directives";
import { destroyDirective } from "./alpine-directives";

window.Alpine = Alpine;
Alpine.directive("currency", formatCurrencyDirective);
Alpine.directive("destroy", destroyDirective);
Alpine.plugin(persist);
Alpine.plugin(focus);
Alpine.store("cartStore", cartStore(Alpine));
Alpine.data("useCart", useCart);
Alpine.data("useCartSummary", useCartSummary);
Alpine.data("useCarousel", useCarousel);
Alpine.data("useSearch", useSearch);
Alpine.start();
