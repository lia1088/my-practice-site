import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  outerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  outerClassName?: string;
}) {
  return (
    <div className={cn(outerClassName)} style={{ paddingLeft: 40, paddingRight: 40, width: "100%" }}>
      <div
        className={cn(className)}
        style={{ maxWidth: 1920, marginLeft: "auto", marginRight: "auto" }}
      >
        {children}
      </div>
    </div>
  );
}

export function Eyebrow({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <span
      className={cn(
        "text-[0.62rem] font-mono tracking-[0.22em] uppercase block",
        accent ? "text-[--accent]" : "text-muted-foreground"
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-heading font-black leading-[1.02] tracking-tight",
        className
      )}
      style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "0" }}
    >
      {children}
    </h2>
  );
}
