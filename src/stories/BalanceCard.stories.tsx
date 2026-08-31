import type { Meta, StoryObj } from '@storybook/react-vite';
import { BalanceCard } from '../components/BalanceCard';
import '../styles/dashboard.css';

const meta = { title: 'Financial/BalanceCard', component: BalanceCard, tags: ['autodocs'], args: { label: 'You are owed', amount: 'NPR 3,860', detail: 'across 3 groups' } } satisfies Meta<typeof BalanceCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Positive: Story = { args: { tone: 'positive' } };
export const Negative: Story = { args: { label: 'You owe', amount: 'NPR 1,240', tone: 'negative' } };
export const Neutral: Story = { args: { label: 'Net balance', amount: 'NPR 0', tone: 'neutral', detail: 'all settled' } };
