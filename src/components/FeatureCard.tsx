type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p style={{ marginTop: "0.5rem", color: "#475569" }}>{description}</p>
    </div>
  );
}
