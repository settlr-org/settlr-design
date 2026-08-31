import type { Preview } from '@storybook/react-vite';
import '../src/styles/tokens.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      options: {
        light: { name: 'Light', value: '#F5F7F3' },
        dark: { name: 'Dark', value: '#0B1411' }
      }
    },
    a11y: { test: 'todo' }
  },
  globalTypes: {
    theme: {
      description: 'Settlr theme',
      defaultValue: 'light',
      toolbar: { title: 'Theme', icon: 'paintbrush', items: ['light', 'dark'] }
    }
  },
  decorators: [
    (Story, context) => (
      <div className={`theme-${context.globals.theme}`} style={{ minHeight: '100vh' }}>
        <Story />
      </div>
    )
  ]
};

export default preview;
