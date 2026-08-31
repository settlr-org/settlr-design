export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand ${compact ? 'brand-compact' : ''}`} aria-label="Settlr">
      <span className="brand-mark" aria-hidden="true"><i /><i /></span>
      {!compact && <span className="brand-name">Settlr</span>}
    </div>
  );
}
