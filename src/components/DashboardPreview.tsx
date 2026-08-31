import { BalanceCard } from './BalanceCard';
import { BrandMark } from './BrandMark';
import { ExpenseRow } from './ExpenseRow';

export function DashboardPreview() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <BrandMark />
        <nav aria-label="Primary navigation">
          {['Overview', 'Groups', 'Friends', 'Personal', 'Activity'].map((item, index) => <a className={index === 0 ? 'active' : ''} href={`#${item.toLowerCase()}`} key={item}><span aria-hidden="true">{['⌂', '◈', '◎', '◌', '↗'][index]}</span>{item}</a>)}
        </nav>
        <button className="profile-button"><span className="avatar">NK</span><span><strong>Nabin</strong><small>Settings</small></span><span aria-hidden="true">⋯</span></button>
      </aside>
      <section className="dashboard-content">
        <header className="topbar"><div><p className="kicker">Thursday, 27 August</p><h1>Good evening, Nabin</h1></div><button className="button button-primary">＋ Add expense</button></header>
        <section className="balance-grid"><BalanceCard label="You owe" amount="NPR 1,240" tone="negative" detail="across 2 groups" /><BalanceCard label="You are owed" amount="NPR 3,860" tone="positive" detail="across 3 groups" /><BalanceCard label="Net balance" amount="+NPR 2,620" tone="positive" detail="since your last settle up" /></section>
        <div className="content-grid"><section className="panel"><div className="panel-heading"><div><p className="kicker">Latest activity</p><h2>Keep things even</h2></div><button className="button button-quiet">View all</button></div><div className="expense-list"><ExpenseRow icon="🍜" title="Dinner at Patan House" meta="Trip to Kathmandu · You paid" amount="NPR 2,400" status="You are owed NPR 1,600" /><ExpenseRow icon="🚕" title="Airport taxi" meta="Kathmandu weekend · Sita paid" amount="NPR 1,050" status="You owe NPR 350" /><ExpenseRow icon="🛒" title="Weekly groceries" meta="Flat 4B · You paid" amount="NPR 3,200" status="You are owed NPR 800" /></div></section><section className="panel settle-panel"><p className="kicker">Next best action</p><h2>Settle with Sita</h2><p>Sita covered NPR 1,600 on your Kathmandu trip. A quick transfer will close the loop.</p><button className="button button-secondary">Review settlement <span>→</span></button><div className="settle-line"><span className="avatar avatar-small">S</span><span>Sita Sherpa</span><strong>NPR 1,600</strong></div></section></div>
      </section>
    </main>
  );
}
