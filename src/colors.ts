import type { LogLevel } from './levels';

export enum EscapeColors {
  Reset = '\x1b[0m',
  Bright = '\x1b[1m',
  Dim = '\x1b[2m',
  Underscore = '\x1b[4m',
  Blink = '\x1b[5m',
  Reverse = '\x1b[7m',
  Hidden = '\x1b[8m',

  FgBlack = '\x1b[30m',
  FgRed = '\x1b[31m',
  FgGreen = '\x1b[32m',
  FgYellow = '\x1b[33m',
  FgBlue = '\x1b[34m',
  FgMagenta = '\x1b[35m',
  FgCyan = '\x1b[36m',
  FgWhite = '\x1b[37m',

  BgBlack = '\x1b[40m',
  BgRed = '\x1b[41m',
  BgGreen = '\x1b[42m',
  BgYellow = '\x1b[43m',
  BgBlue = '\x1b[44m',
  BgMagenta = '\x1b[45m',
  BgCyan = '\x1b[46m',
  BgWhite = '\x1b[47m',
}

export const escapeColorToCSS: Record<EscapeColors, string> = {
  [EscapeColors.Reset]: 'background-color: unset; color: unset',
  [EscapeColors.Bright]: 'font-weight: bold',
  [EscapeColors.Dim]: 'background-color: unset; color: unset',
  [EscapeColors.Underscore]: 'text-decoration: underline',
  [EscapeColors.Blink]: 'background-color: unset; color: unset',
  [EscapeColors.Reverse]: 'background-color: unset; color: unset',
  [EscapeColors.Hidden]: 'background-color: unset; color: unset',

  [EscapeColors.FgBlack]: 'color: black',
  [EscapeColors.FgRed]: 'color: red',
  [EscapeColors.FgGreen]: 'color: green',
  [EscapeColors.FgYellow]: 'color: yellow',
  [EscapeColors.FgBlue]: 'color: blue',
  [EscapeColors.FgMagenta]: 'color: magenta',
  [EscapeColors.FgCyan]: 'color: cyan',
  [EscapeColors.FgWhite]: 'color: white',

  [EscapeColors.BgBlack]: 'background-color: black',
  [EscapeColors.BgRed]: 'background-color: red',
  [EscapeColors.BgGreen]: 'background-color: green',
  [EscapeColors.BgYellow]: 'background-color: yellow',
  [EscapeColors.BgBlue]: 'background-color: blue',
  [EscapeColors.BgMagenta]: 'background-color: magenta',
  [EscapeColors.BgCyan]: 'background-color: cyan',
  [EscapeColors.BgWhite]: 'background-color: white',
};

export function colorizeText(text: string, color: string): string {
  return `${color}${text}${EscapeColors.Reset}`;
}

export function colorizeTextByLogLevel(text: string, level: LogLevel) {
  if (level === 'info') {
    return colorizeText(text, EscapeColors.FgGreen);
  } else if (level === 'warn') {
    return colorizeText(text, EscapeColors.FgYellow);
  } else if (level === 'error') {
    return colorizeText(text, EscapeColors.FgRed);
  } else if (level === 'debug') {
    return colorizeText(text, EscapeColors.FgCyan);
  } else if (level === 'verbose') {
    return colorizeText(text, EscapeColors.FgMagenta);
  } else {
    return text;
  }
}
