import Htmx from "htmx.org";
import { jsonEnc } from "./htmx-custom";

window.Htmx = Htmx;
Htmx.defineExtension("json-enc", jsonEnc);