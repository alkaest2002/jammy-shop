import Htmx from "htmx.org";
import { jsonEnc } from "./htmx-extend";

window.Htmx = Htmx;
Htmx.defineExtension("json-enc", jsonEnc);