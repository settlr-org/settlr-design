# Settlr design document

## Product promise

Settlr makes shared money feel calm: every expense explains who paid, who owes, and what action closes the loop. The first audience is Nepal-first and globally ready: NPR is the default, but every amount carries a currency and locale-aware formatting.

## Identity

The new identity is **Settlr** (no terminal punctuation), with the tagline **“Shared money, settled clearly.”** The Balanced S mark is two reciprocal ledger strokes converging toward equilibrium. It must work as a 16px favicon, a one-colour print mark, and an app icon without relying on the wordmark.

Typography is Manrope variable for display, body, and tabular numeric amounts. Use 4px spacing increments, 8/14/22px radii, restrained shadows, and motion between 160–240ms. Honor `prefers-reduced-motion` and native reduced-motion settings.

Light semantic palette: canvas `#F5F7F3`, surface `#FFFFFF`, muted surface `#EAF0EC`, ink `#16231D`, muted text `#66736D`, border `#D4DED8`, primary pine `#0B6B57`, strong pine `#074A3D`, mint `#82D9B7`, positive `#167653`, negative `#B94A42`, warning `#8A5A0A`. Dark mode swaps to canvas `#0B1411`, surface `#121F1A`, ink `#F2F7F4`, muted `#A2B4AB`, border `#2B4036`, primary mint `#82D9B7`, and negative `#F28B80`.

## Information architecture

Web uses a persistent left rail: Overview, Groups, Friends, Personal, Activity, Notifications, and Profile. Mobile uses Home, Groups, a prominent Add action, Activity, and Account tabs; Friends and Personal are reachable from Home and their own deep links. Every protected screen has loading, empty, error, and session-expired states.

## Screen inventory

Stories and compositions cover welcome, login, registration, email verification, password reset, dashboard, group list/detail, expense creation and editing for equal/exact/percentage/shares, balances, debt simplification, settle-up and payment QR, friends and requests, direct ledgers, comments, receipts, recurring expenses, personal expenses, budgets, stats, exports, notifications, search, profile, sessions, preferences, and account deletion.

Financial UI uses plain-language labels (“You owe”, “You are owed”, “Net balance”), explicit currency codes, sign/label redundancy, and never uses color alone to communicate a state. Long names, zero balances, large amounts, multi-currency conversions, missing avatars, offline drafts, and destructive confirmations are first-class stories.

## Accessibility and review

The target is WCAG 2.2 AA: semantic headings and landmarks, keyboard-complete web flows, visible non-obscured focus, minimum 24px web targets, 44pt native targets, screen-reader labels for icon controls, reduced motion, contrast-tested semantic colors, and accessible authentication errors. Storybook a11y checks and Playwright screenshots run at desktop, tablet, iOS, and Android reference sizes.
