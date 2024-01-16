import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import Htmx from "htmx.org";
import cartStore from "./cartStore";
import { formatCurrency } from "./custom-alpine";
import { jsonEnc } from "./custom-htmx";
import useCart from "./useCart";
import useCartSummary from "./useCartSummary";

window.Htmx = Htmx;
Htmx.defineExtension('json-enc', jsonEnc);

window.Alpine = Alpine;
Alpine.directive("currency", formatCurrency);
Alpine.plugin(persist);
Alpine.store("cartStore", cartStore(Alpine));
Alpine.data("useCart", useCart);
Alpine.data("useCartSummary", useCartSummary);
Alpine.start();
