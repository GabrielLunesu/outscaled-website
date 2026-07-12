import type { LogosItem } from "../content";

export type Logo3Data = LogosItem;

function IntegrationMark({ integration }: Pick<Logo3Data, "integration">) {
  switch (integration) {
    case "meta":
      return <svg aria-hidden="true" className="h-9 w-12 max-md:h-7 max-md:w-9" fill="none" viewBox="0 0 48 32"><path d="M4 25c3-11 7-17 11-17 7 0 8 16 13 16 4 0 6-7 11-16 1-2 3-3 5-3" stroke="#0866FF" strokeLinecap="round" strokeWidth="5" /><path d="M4 25c4-5 8-8 12-8 8 0 11 7 16 7 5 0 8-5 12-12" stroke="#0866FF" strokeLinecap="round" strokeWidth="5" /></svg>;
    case "google":
      return <svg aria-hidden="true" className="h-10 w-10 max-md:h-7 max-md:w-7" viewBox="0 0 40 40"><path d="m9 34 13-23 7 4-13 23a4 4 0 0 1-7-4Z" fill="#4285F4" /><path d="M22 11a8 8 0 0 1 14 8l-4 7-7-4 4-7a2 2 0 1 0-3-2Z" fill="#FBBC04" /><circle cx="12" cy="32" r="6" fill="#34A853" /></svg>;
    case "shopify":
      return <svg aria-hidden="true" className="h-10 w-9 max-md:h-7 max-md:w-6" viewBox="0 0 36 42"><path d="M7 9h22l3 28H4Z" fill="#95BF47" /><path d="M13 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="#527E2C" strokeWidth="2.5" /><path d="M23 16c-2-1-6-1-8 1-2 3 4 3 5 5 1 3-4 4-7 2" fill="none" stroke="white" strokeLinecap="round" strokeWidth="2.5" /></svg>;
    case "slack":
      return <svg aria-hidden="true" className="h-10 w-10 max-md:h-7 max-md:w-7" viewBox="0 0 40 40"><path d="M13 22a4 4 0 1 1-4-4h4v4Z" fill="#36C5F0" /><path d="M15 22a4 4 0 1 1 8 0v9a4 4 0 1 1-8 0v-9Z" fill="#2EB67D" /><path d="M18 13a4 4 0 1 1 4-4v4h-4Z" fill="#ECB22E" /><path d="M18 15a4 4 0 1 1 0 8H9a4 4 0 1 1 0-8h9Z" fill="#E01E5A" /></svg>;
    case "more":
      return <svg aria-hidden="true" className="h-10 w-10 max-md:h-7 max-md:w-7" viewBox="0 0 40 40"><circle cx="10" cy="20" r="4" fill="#171717" /><circle cx="20" cy="20" r="4" fill="#171717" /><circle cx="30" cy="20" r="4" fill="#171717" /></svg>;
  }
}

export default function Logo3({ d }: { d: Logo3Data }) {
  return (
    <div className="h-full min-w-0 flex flex-1 basis-0">
      <div className="group relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[rgba(255,254,251,0.92)] p-3 shadow-[inset_10px_10px_24px_rgba(255,255,255,0.55)] outline outline-1 outline-white/35 transition-[transform,box-shadow] duration-[220ms] ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:shadow-[inset_10px_10px_24px_rgba(255,255,255,0.72),0_10px_20px_rgba(0,0,0,0.16)] focus-within:ring-2 focus-within:ring-[#0866ff] focus-within:ring-offset-2 focus-within:ring-offset-black max-md:gap-0 max-md:p-2">
        <IntegrationMark integration={d.integration} />
        <span className="text-center font-[family-name:var(--font-001)] text-[0.6875rem] font-medium leading-3 text-black/72 max-md:sr-only">
          {d.label}
        </span>
      </div>
    </div>
  );
}
