import { style } from '@vanilla-extract/css';
import { vars } from '@/utils/themes.css';

export const headerClass = style({
  height: '4rem',
  padding: '0 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${vars.color.divide}`
});

export const iconClass = style({
  marginRight: 12,
  color: `${vars.color.icon} !important`
})
