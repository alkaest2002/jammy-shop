import Htmx from "htmx.org";
import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import cartStore from "./cartStore";
import useCart from "./useCart";
import useCartSummary from "./useCartSummary";
import useSearch from "./useSearch";
import { jsonEnc } from "./custom-htmx";
import { formatCurrency } from "./custom-alpine";

window.Htmx = Htmx;
Htmx.defineExtension("json-enc", jsonEnc);

window.Alpine = Alpine;
Alpine.directive("currency", formatCurrency);
Alpine.plugin(persist);
Alpine.store("cartStore", cartStore(Alpine));
Alpine.data("useCart", useCart);
Alpine.data("useCartSummary", useCartSummary);
Alpine.data("useSearch", useSearch);
Alpine.start();
