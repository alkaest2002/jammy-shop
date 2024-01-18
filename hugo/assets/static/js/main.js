import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import intersect from '@alpinejs/intersect'
import Htmx from "htmx.org";
import cartStore from "./cartStore";
import { formatCurrency } from "./custom-alpine";
import { jsonEnc } from "./custom-htmx";
import useCart from "./useCart";
import useCartSummary from "./useCartSummary";
import useSearch from "./useSearch";
import useCarousel from "./useCarousel";

window.Htmx = Htmx;
Htmx.defineExtension('json-enc', jsonEnc);

window.Alpine = Alpine;
Alpine.directive("currency", formatCurrency);
Alpine.plugin(persist);
Alpine.plugin(intersect);
Alpine.store("cartStore", cartStore(Alpine));
Alpine.data("useCart", useCart);
Alpine.data("useCartSummary", useCartSummary);
Alpine.data("useSearch", useSearch);
Alpine.data("useCarousel", useCarousel);
Alpine.start();
