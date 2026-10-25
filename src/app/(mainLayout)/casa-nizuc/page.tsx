import { redirect } from "next/navigation";
import { CASA_NIZUC_HREF } from "@/lib/routes";

/** The separate year-round Casa Nizuc page was retired (client 2026-10-25): old links lead to the Diamond Blue hotel page. */
export default function CasaNizucRedirectPage() {
  redirect(CASA_NIZUC_HREF);
}
