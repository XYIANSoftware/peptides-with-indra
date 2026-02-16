// Inline script run beforeInteractive to set data-theme from localStorage (no flash).
export const THEME_SCRIPT_ID = 'theme-init';

export function getThemeInitScript(storageKey: string, defaultTheme: string): string {
  return `
(function() {
  try {
    var stored = localStorage.getItem('${storageKey.replace(/'/g, "\\'")}');
    var theme = stored && ['dark-synth'].indexOf(stored) >= 0 ? stored : '${defaultTheme.replace(/'/g, "\\'")}';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`.trim();
}
