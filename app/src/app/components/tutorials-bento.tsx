"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cn } from "../../lib/utils";
import { pixelAvatarUri } from "./pixel-avatar-ticker";
import { useTypedPrompt } from "./chat-showcase-panel";

/* Artifact design tokens: Inter Tight 400/500, 12/13/14px,
 * #7F7F7F subtle / #5D5D5D default / #292929 strong / #F5F5F5 selected / #F2F2F2 border. */
const ARTIFACT_FONT = "[font-family:var(--font-inter-tight),sans-serif]";

const SENTENCE = ["Hire an agent that lists my products in my brand voice"];

const AGENT_CHIPS = [
  { seed: "mila-support", name: "Mila", role: "Support Agent", status: "Working now" },
  { seed: "adam-lister", name: "Adam", role: "Product Lister", status: "Waiting for approval" },
];

/* Brand glyph paths from simple-icons, rendered in brand colors
 * (Slack and Google Ads split into their official multicolor segments). */
const APP_PILLS: { name: string; paths: { d: string; fill: string }[]; animated?: boolean }[] = [
  { name: "Shopify", paths: [{ fill: "#95BF47", d: "M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" }] },
  { name: "Gmail", paths: [{ fill: "#EA4335", d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" }] },
  { name: "Slack", animated: true, paths: [
    { fill: "#E01E5A", d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" },
    { fill: "#36C5F0", d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" },
    { fill: "#2EB67D", d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" },
    { fill: "#ECB22E", d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" },
  ] },
  { name: "Meta Ads", paths: [{ fill: "#0866FF", d: "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" }] },
  { name: "Google Ads", paths: [
    { fill: "#34A853", d: "M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998z" },
    { fill: "#4285F4", d: "M23.4641 16.9287L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644z" },
    { fill: "#FBBC04", d: "M7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z" },
  ] },
];

/** SSR and the first client render use the static (reduced-motion) variant so the
 * hydrated HTML matches; motion only activates after mount, and never when the
 * user prefers reduced motion. */
function useStaticVariant() {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return !mounted || !!prefersReduced;
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}

function AppGlyph({ paths }: { paths: { d: string; fill: string }[] }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill={p.fill} />
      ))}
    </svg>
  );
}

/** Shared bento card shell. `y` is the card-plane parallax track; omitted for the static track. */
function Card({ y, className, children }: { y?: MotionValue<number>; className?: string; children: ReactNode }) {
  return (
    <motion.div style={y ? { y } : undefined} className={cn("relative flex flex-col gap-5 p-6 rounded-3xl bg-white border border-[#F2F2F2] shadow-[0px_4px_16px_rgba(28,25,23,0.06)] overflow-hidden", className)}>
      {children}
    </motion.div>
  );
}

function CardText({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-foreground [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-[1.1875rem] font-medium leading-[1.4375rem] tracking-[-0.29px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-component="heading" dir="auto">
        {title}
      </h5>
      <p className="text-muted-foreground [font-family:Switzer,_'Switzer_Placeholder',_sans-serif] text-base leading-[1.375rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
        {body}
      </p>
    </div>
  );
}

/** Artifact wrapper: applies the artifact font and the counter-drift parallax plane. */
function Artifact({ y, className, children }: { y?: MotionValue<number>; className?: string; children: ReactNode }) {
  return (
    <motion.div style={y ? { y } : undefined} className={cn(ARTIFACT_FONT, className)}>
      {children}
    </motion.div>
  );
}

/** Cell A artifact: two agent chips. */
function AgentChips() {
  return (
    <div className="flex flex-col gap-2">
      {AGENT_CHIPS.map((a) => (
        <div key={a.seed} className="flex items-center gap-2 min-w-0 bg-white border border-[#F2F2F2] rounded-lg p-2.5">
          <img className="w-6 h-6 block shrink-0" src={pixelAvatarUri(a.seed)} alt="" width={24} height={24} />
          <span className="text-[13px] font-medium leading-4 text-[#292929] whitespace-nowrap">{a.name}</span>
          <span className="text-[12px] font-normal leading-4 text-[#7F7F7F] truncate min-w-0">{a.role}</span>
          <span className="ml-auto flex items-center gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7F7F7F]" />
            <span className="text-[12px] font-normal leading-4 text-[#7F7F7F] whitespace-nowrap">{a.status}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

/** Cell B artifact: the sentence input, reusing the departments typing loop. */
function SentenceInput({ reduced }: { reduced: boolean }) {
  const typed = useTypedPrompt(SENTENCE);
  const text = reduced ? SENTENCE[0] : typed;
  return (
    <div className="w-full min-h-11 flex items-center bg-white border border-[#F2F2F2] rounded-lg p-3">
      <p className="text-[13px] font-normal leading-4 text-[#292929]">
        {"“"}
        {text}
        {!reduced && (
          <motion.span
            className="inline-block w-px h-3.5 ml-0.5 -mb-0.5 bg-[#5D5D5D]"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, times: [0, 0.5, 0.5, 1], repeat: Infinity }}
          />
        )}
        {"”"}
      </p>
    </div>
  );
}

/** Cell C artifact: three skill rule lines, the third showing an edit. */
function SkillRules() {
  return (
    <ul className="flex flex-col gap-2 [list-style-type:none] list-outside">
      <li className="flex items-center gap-2 text-[13px] font-normal leading-4 text-[#5D5D5D]">
        <IconCheck className="shrink-0 text-[#7F7F7F]" />
        Write titles under 60 characters
      </li>
      <li className="flex items-center gap-2 text-[13px] font-normal leading-4 text-[#5D5D5D]">
        <IconCheck className="shrink-0 text-[#7F7F7F]" />
        Always mention free shipping
      </li>
      <li className="flex items-center gap-2 text-[13px] font-normal leading-4">
        <IconCheck className="shrink-0 text-[#7F7F7F]" />
        <span>
          <s className="text-[#7F7F7F]">Formal tone</s>{" "}
          <span className="text-[#292929] bg-[#F5F5F5] rounded px-1.5 py-0.5">Friendly, direct tone</span>
        </span>
      </li>
    </ul>
  );
}

/** Cell D artifact: a small overlapping avatar row. */
function AvatarRow() {
  return (
    <div className="flex -space-x-1.5">
      {["remy", "isla", "theo"].map((seed) => (
        <img key={seed} className="w-5 h-5 block rounded-full bg-white border border-[#F2F2F2]" src={pixelAvatarUri(seed)} alt="" width={20} height={20} />
      ))}
    </div>
  );
}

/** Cell D artifact: shared skill rows, in the same pill language as the other cells. */
function SharedSkills() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 min-w-0 bg-white border border-[#F2F2F2] rounded-lg p-2.5">
        <span className="text-[13px] font-medium leading-4 text-[#292929] truncate min-w-0">Returns playbook</span>
        <span className="ml-auto shrink-0"><AvatarRow /></span>
      </div>
      <div className="flex items-center gap-2 min-w-0 bg-white border border-[#F2F2F2] rounded-lg p-2.5">
        <span className="text-[13px] font-medium leading-4 text-[#292929] truncate min-w-0">Holiday pricing rules</span>
        <span className="ml-auto flex items-center gap-1 text-[12px] font-normal leading-4 text-[#7F7F7F] shrink-0">
          Shared with team
          <IconCheck className="shrink-0" />
        </span>
      </div>
    </div>
  );
}

function ConnectedState() {
  return (
    <span className="flex items-center gap-1 text-[12px] font-normal leading-4 text-[#7F7F7F]">
      Connected
      <IconCheck className="shrink-0" />
    </span>
  );
}

/** The Slack pill's state, fading between "Connect" and "Connected" on a slow loop. */
function SlackPillState({ reduced }: { reduced: boolean }) {
  const [connected, setConnected] = useState(true);
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setConnected((c) => !c), 3000);
    return () => clearInterval(t);
  }, [reduced]);
  if (reduced) return <ConnectedState />;
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span key={connected ? "on" : "off"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
        {connected ? <ConnectedState /> : <span className="text-[12px] font-normal leading-4 text-[#292929]">Connect</span>}
      </motion.span>
    </AnimatePresence>
  );
}

/** Cell E artifact: connected app pills. */
function AppPillStack({ reduced }: { reduced: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      {APP_PILLS.map((app) => (
        <div key={app.name} className="flex items-center gap-2 bg-white border border-[#F2F2F2] rounded-lg p-2.5">
          <span className="shrink-0">
            <AppGlyph paths={app.paths} />
          </span>
          <span className="text-[13px] font-normal leading-4 text-[#5D5D5D] whitespace-nowrap">{app.name}</span>
          <span className="ml-auto shrink-0">{app.animated ? <SlackPillState reduced={reduced} /> : <ConnectedState />}</span>
        </div>
      ))}
    </div>
  );
}

/** Background plane: the brand sunset gradient with faint pixel-cloud motifs drifting slowest. */
export function BentoBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useStaticVariant();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-14, 14]);
  const y3 = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const clouds = [
    { src: "/assets/cloned/images/clouds/2.svg", y: y1, cls: "w-[55%] -top-[5%] -left-[10%]" },
    { src: "/assets/cloned/images/clouds/5.svg", y: y2, cls: "w-[50%] top-[30%] -right-[12%]" },
    { src: "/assets/cloned/images/clouds/3.svg", y: y3, cls: "w-[60%] -bottom-[5%] left-[15%]" },
  ];
  return (
    <div ref={ref} className="h-full relative overflow-clip bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/assets/cloned/images/why-choose-us/image.png)" }}>
      {clouds.map((c, i) => (
        <motion.img key={i} className={cn("block absolute h-auto opacity-20 pointer-events-none select-none", c.cls)} style={reduced ? undefined : { y: c.y }} src={c.src} alt="" aria-hidden="true" />
      ))}
    </div>
  );
}

/** The bento grid: 6 capability cells with live UI artifacts and two parallax card tracks
 * (left: A, C, F static; right: B, D, E drifting ~28px), artifacts counter-drifting ~12px.
 * All transforms disabled under prefers-reduced-motion. */
export default function BentoGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useStaticVariant();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rightY = useTransform(scrollYProgress, [0, 1], [14, -14]);
  const leftArtY = useTransform(scrollYProgress, [0, 1], [6, -6]);
  const rightArtY = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const cardY = reduced ? undefined : rightY;
  const artLeft = reduced ? undefined : leftArtY;
  const artRight = reduced ? undefined : rightArtY;

  return (
    <div ref={ref} className="w-full grid relative pb-15 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
      {/* A — double-wide, left track */}
      <Card className="md:col-span-2 lg:col-span-8 2xl:flex-row 2xl:items-center 2xl:gap-8">
        <div className="2xl:flex-1">
          <CardText title="Hire prebuilt agents." body="Proven agents for listing, support, ads, and reporting. Hire one, connect your apps, give it work today." />
        </div>
        <Artifact y={artLeft} className="min-w-0 2xl:w-[44%] 2xl:shrink-0">
          <AgentChips />
        </Artifact>
      </Card>
      {/* B — right track */}
      <Card y={cardY} className="lg:col-span-4">
        <CardText title="Build your own in a sentence." body="Describe the job in plain words and watch the agent take shape." />
        <Artifact y={artRight} className="mt-auto">
          <SentenceInput reduced={reduced} />
        </Artifact>
      </Card>
      {/* C — left track */}
      <Card className="lg:col-span-4">
        <CardText title="Edit any skill." body="Every skill is open. Change the rules, the tone, the steps." />
        <Artifact y={artLeft} className="mt-auto">
          <SkillRules />
        </Artifact>
      </Card>
      {/* D — right track */}
      <Card y={cardY} className="lg:col-span-4">
        <CardText title="Bring your own skills." body="Got a process that works? Turn it into a skill your whole team can use." />
        <Artifact y={artRight} className="mt-auto">
          <SharedSkills />
        </Artifact>
      </Card>
      {/* E — tall, right track */}
      <Card y={cardY} className="lg:col-span-4 lg:row-span-2">
        <CardText title="Connect your whole stack." body="One team across every app you already use." />
        <Artifact y={artRight} className="flex-1 flex flex-col justify-center">
          <AppPillStack reduced={reduced} />
        </Artifact>
      </Card>
      {/* F — wide, left track */}
      <Card className="md:col-span-2 lg:col-span-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <CardText title="Custom-built on demand." body="Tell us the job. We'll build the agent, delivered into your workspace." />
        <a
          href="https://framer.com/"
          rel="noopener"
          className={cn(ARTIFACT_FONT, "inline-flex items-center justify-center shrink-0 self-start sm:self-center px-5 py-2.5 rounded-full bg-[#171717] text-white text-sm font-medium leading-5 whitespace-nowrap cursor-pointer transition-colors hover:bg-[#333333]")}
        >
          Talk to us
        </a>
      </Card>
    </div>
  );
}
