import { Container } from "@/components/atoms";

const items = [
  "Est. 2012",
  "South West, USA",
  "4M+ Participants",
  "52-Person Production Team",
  "Licensed & Insured",
  "RRCA Certified",
];

export function ProofBar() {
  return (
    <div style={{ background: "#f5f5f5" }}>
      <Container>
        <div className="flex items-center justify-between" style={{ paddingTop: 16, paddingBottom: 16 }}>
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-6">
              <span className="text-[0.68rem] font-sans tracking-[0.14em] uppercase whitespace-nowrap" style={{ color: "#08080f" }}>
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="text-xs" style={{ color: "#aaaaaa" }}>·</span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
