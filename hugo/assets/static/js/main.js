import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import Htmx from "htmx.org";
import cartStore from "./cartStore";
import { formatCurrency } from "./custom-alpine";
import useCart from "./useCart";
import useCartSummary from "./useCartSummary";

Alpine.directive("currency", formatCurrency);
window.Htmx = Htmx;
window.Alpine = Alpine;
Alpine.plugin(persist);
Alpine.store("cartStore", cartStore(Alpine));
Alpine.data("useCart", useCart);
Alpine.data("useCartSummary", useCartSummary);
Alpine.start();