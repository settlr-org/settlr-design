import type { Meta, StoryObj } from '@storybook/react-vite';
import { DashboardPreview } from '../components/DashboardPreview';
import '../styles/dashboard.css';

const meta = { title: 'Screens/Dashboard', component: DashboardPreview, parameters: { layout: 'fullscreen' }, tags: ['autodocs'] } satisfies Meta<typeof DashboardPreview>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
