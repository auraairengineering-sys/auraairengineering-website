import { Button } from "./ui";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";
import { Phone } from "lucide-react";

export function CtaSection({
  title = "Start Your Project with Precision Engineering",
  intro = "Engage with our experts for advanced climate control, misting, and automation solutions tailored to your application.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="bg-primary text-surface">
      <div className="grid-texture">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-surface sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-surface/80">{intro}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact#quote" variant="accent" withArrow>
                Get a Quote
              </Button>
              <Button href="/contact#expert" variant="outline">
                Talk to an Expert
              </Button>
            </div>
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-surface/70">
              <Phone className="h-4 w-4 text-accent" />
              Immediate assistance:{" "}
              <a href={`tel:${site.phones.usaHref}`} className="font-medium text-surface hover:text-accent">
                {site.phones.usa}
              </a>
              <span className="text-surface/40">·</span>
              <a href={`tel:${site.phones.indiaHref}`} className="font-medium text-surface hover:text-accent">
                {site.phones.india}
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
