export type BalanceCardProps = {
  label: string;
  amount: string;
  tone?: 'positive' | 'negative' | 'neutral';
  detail: string;
};

export function BalanceCard({ label, amount, tone = 'neutral', detail }: BalanceCardProps) {
  return (
    <article className="balance-card">
      <span className="eyebrow">{label}</span>
      <strong className={`money money-${tone}`}>{amount}</strong>
      <span className="detail">{detail}</span>
    </article>
  );
}
