export type ExpenseRowProps = { icon: string; title: string; meta: string; amount: string; status: string };

export function ExpenseRow({ icon, title, meta, amount, status }: ExpenseRowProps) {
  return (
    <div className="expense-row">
      <div className="expense-icon" aria-hidden="true">{icon}</div>
      <div className="expense-copy"><strong>{title}</strong><span>{meta}</span></div>
      <div className="expense-amount"><strong>{amount}</strong><span>{status}</span></div>
    </div>
  );
}
