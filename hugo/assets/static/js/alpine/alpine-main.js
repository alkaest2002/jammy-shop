import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import cartStore from "./cartStore";
import useCart from "./useCart";
import useCartSummary from "./useCartSummary";
import useSearch from "./useSearch";
import { useCarousel } from "./useCarousel";
import { formatCurrency } from "./alpine-custom";

window.Alpine = Alpine;
Alpine.directive("currency", formatCurrency);
Alpine.plugin(persist);
Alpine.store("cartStore", cartStore(Alpine));
Alpine.data("useCart", useCart);
Alpine.data("useCartSummary", useCartSummary);
Alpine.data("useCarousel", useCarousel);
Alpine.data("useSearch", useSearch);
Alpine.start();
