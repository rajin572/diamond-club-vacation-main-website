import Link from "next/link";
import { DesignButton, DetailHero, Wrap } from "@/components/shared/design";
import { PRIMARY_NAV } from "@/components/shared/nav.data";
import { AllImages } from "../../../public/images/AllImages";

/** 404 content in the client's hero + content-block style. */
export function NotFoundView() {
  return (
    <>
      <DetailHero
        image={AllImages.home1}
        kicker="Error 404"
        title="Page not found"
        subtitle="The page you are looking for has moved or no longer exists."
      />
      <Wrap>
        <div className="dcv-content2">
          <div>
            <h2>Let us help you find your way</h2>
            <p className="dcv-lead">Try one of these pages, or start an inquiry and we will help you directly.</p>
            <nav className="dcv-gallery-tabs" aria-label="Popular pages">
              {PRIMARY_NAV.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <aside>
            <p style={{ margin: "0 0 16px" }}>
              <DesignButton href="/">Back to home</DesignButton>
            </p>
            <DesignButton href="/inquire">Start an inquiry</DesignButton>
          </aside>
        </div>
      </Wrap>
    </>
  );
}

export default NotFoundView;
