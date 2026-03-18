interface SparklineProps {
  data: number[];
  accent: string;
}

const sparkMax = (arr: number[]) => Math.max(...arr);

export default function Sparkline({ data, accent }: SparklineProps) {
  const max = sparkMax(data);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "3px",
        height: "28px",
        marginTop: "2px",
      }}
    >
      {data.map((v, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            borderRadius: "3px 3px 0 0",
            minHeight: "3px",
            height: `${Math.max(12, (v / max) * 100)}%`,
            background: accent,
            opacity: i === data.length - 1 ? 0.7 : 0.25,
            transition: "opacity 0.2s",
          }}
        />
      ))}
    </div>
  );
}
