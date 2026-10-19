export const SPLASH_ATTR = "data-guettaway-splash";
export const SPLASH_SEEN_KEY = "dcv-guettaway-splash-seen";

/**
 * Runs before the page paints (inline in <body>, so the plain page never flashes). It switches the splash on only
 * for visitors who arrive from the Guettaway link: `?from=guettaway` (also `src=` / `utm_source=`) or a referrer
 * whose host contains "guettaway". Once per browser tab session. Visitors from the main site go straight in.
 */
export const SPLASH_DETECT_SCRIPT = `(function(){try{
var q=new URLSearchParams(location.search);
var tag=(q.get("from")||q.get("src")||q.get("utm_source")||"").toLowerCase();
var ref="";try{ref=new URL(document.referrer).hostname.toLowerCase()}catch(e){}
if((tag==="guettaway"||ref.indexOf("guettaway")>-1)&&!sessionStorage.getItem("${SPLASH_SEEN_KEY}")){
document.documentElement.setAttribute("${SPLASH_ATTR}","1")}
}catch(e){}})();`;
