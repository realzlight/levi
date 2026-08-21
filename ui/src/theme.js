// Abyssal palette
export const colors = {
  dim: '#a8bcbc',
  accent: '#2dd4bf',
  white: '#d4e8e8',
};

// Fixed total width for the whole app — bump this if it looks
// too narrow/wide on your terminal.
export const OUTER_WIDTH = 90;

// Builds a top border line with the title fused into it, e.g.
// ╭─ Claude Code v2.1.6 ─────────────────╮
export function buildTitleBorder(title, width) {
  const left = `╭─ ${title} `;
  const dashCount = Math.max(width - left.length - 1, 1);
  return left + '─'.repeat(dashCount) + '╮';
}
