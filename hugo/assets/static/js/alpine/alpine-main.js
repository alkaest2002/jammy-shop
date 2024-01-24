import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import focus from '@alpinejs/focus'
import cartStore from "./cartStore";
import useCart from "./useCart";
import useCartSummary from "./useCartSummary";
import useSearch from "./useSearch";
import { useCarousel } from "./useCarousel";
import { formatCurrencyDirective } from "./alpine-extend";

window.Alpine = Alpine;
Alpine.directive("currency", formatCurrencyDirective);
Alpine.plugin(persist);
Alpine.plugin(focus);
Alpine.store("cartStore", cartStore(Alpine));
Alpine.data("useCart", useCart);
Alpine.data("useCartSummary", useCartSummary);
Alpine.data("useCarousel", useCarousel);
Alpine.data("useSearch", useSearch);
Alpine.start();
