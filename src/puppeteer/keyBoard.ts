import puppeteer from 'puppeteer';

// @see https://github.com/puppeteer/puppeteer/blob/master/lib/USKeyboardLayout.js

export enum KeyCode {
  Num_0 = '0',
  Num_1 = '1',
  Num_2 = '2',
  Num_3 = '3',
  Num_4 = '4',
  Num_5 = '5',
  Num_6 = '6',
  Num_7 = '7',
  Num_8 = '8',
  Num_9 = '9',
  Power = 'Power',
  Eject = 'Eject',
  Abort = 'Abort',
  Help = 'Help',
  Backspace = 'Backspace',
  Tab = 'Tab',
  Numpad5 = 'Numpad5',
  NumpadEnter = 'NumpadEnter',
  Enter = 'Enter',
  Carriage_Return = '\r',
  Line_Feed = '\n',
  ShiftLeft = 'ShiftLeft',
  ShiftRight = 'ShiftRight',
  ControlLeft = 'ControlLeft',
  ControlRight = 'ControlRight',
  AltLeft = 'AltLeft',
  AltRight = 'AltRight',
  Pause = 'Pause',
  CapsLock = 'CapsLock',
  Escape = 'Escape',
  Convert = 'Convert',
  NonConvert = 'NonConvert',
  Space = 'Space',
  Numpad9 = 'Numpad9',
  PageUp = 'PageUp',
  Numpad3 = 'Numpad3',
  PageDown = 'PageDown',
  End = 'End',
  Numpad1 = 'Numpad1',
  Home = 'Home',
  Numpad7 = 'Numpad7',
  ArrowLeft = 'ArrowLeft',
  Numpad4 = 'Numpad4',
  Numpad8 = 'Numpad8',
  ArrowUp = 'ArrowUp',
  ArrowRight = ' ArrowRight',
  Numpad6 = 'Numpad6',
  Numpad2 = 'Numpad2',
  ArrowDown = 'ArrowDown',
  Select = 'Select',
  Open = 'Open',
  PrintScreen = 'PrintScreen',
  Insert = 'Insert',
  Numpad0 = 'Numpad0',
  Delete = 'Delete',
  NumpadDecimal = 'NumpadDecimal',
  Digit0 = 'Digit0',
  Digit1 = 'Digit1',
  Digit2 = 'Digit2',
  Digit3 = 'Digit3',
  Digit4 = 'Digit4',
  Digit5 = 'Digit5',
  Digit6 = 'Digit6',
  Digit7 = 'Digit7',
  Digit8 = 'Digit8',
  Digit9 = 'Digit9',
  KeyA = 'KeyA',
  KeyB = 'KeyB',
  KeyC = 'KeyC',
  KeyD = 'KeyD',
  KeyE = 'KeyE',
  KeyF = 'KeyF',
  KeyG = 'KeyG',
  KeyH = 'KeyH',
  KeyI = 'KeyI',
  KeyJ = 'KeyJ',
  KeyK = 'KeyK',
  KeyL = 'KeyL',
  KeyM = 'KeyM',
  KeyN = 'KeyN',
  KeyO = 'KeyO',
  KeyP = 'KeyP',
  KeyQ = 'KeyQ',
  KeyR = 'KeyR',
  KeyS = 'KeyS',
  KeyT = 'KeyT',
  KeyU = 'KeyU',
  KeyV = 'KeyV',
  KeyW = 'KeyW',
  KeyX = 'KeyX',
  KeyY = 'KeyY',
  KeyZ = 'KeyZ',
  MetaLeft = 'MetaLeft',
  MetaRight = 'MetaRight',
  ContextMenu = 'ContextMenu',
  NumpadMultiply = 'NumpadMultipl',
  NumpadAdd = 'NumpadAdd',
  NumpadSubtract = 'NumpadSubtract',
  NumpadDivide = 'NumpadDivide',
  F1 = 'F1',
  F2 = 'F2',
  F3 = 'F3',
  F4 = 'F4',
  F5 = 'F5',
  F6 = 'F6',
  F7 = 'F7',
  F8 = 'F8',
  F9 = 'F9',
  F10 = 'F10',
  F11 = 'F11',
  F12 = 'F12',
  F13 = 'F13',
  F14 = 'F14',
  F15 = 'F15',
  F16 = 'F16',
  F17 = 'F17',
  F18 = 'F18',
  F19 = 'F19',
  F20 = 'F20',
  F21 = 'F21',
  F22 = 'F22',
  F23 = 'F23',
  F24 = 'F24',
  NumLock = 'NumLock',
  ScrollLock = 'ScrollLock',
  AudioVolumeMute = 'AudioVolumeMute',
  AudioVolumeDown = 'AudioVolumeDown',
  AudioVolumeUp = 'AudioVolumeUp',
  MediaTrackNext = 'MediaTrackNext',
  MediaTrackPrevious = 'MediaTrackPrevious',
  MediaStop = 'MediaStop',
  MediaPlayPau = 'MediaPlayPause',
  Semicolon = 'Semicolon',
  Equal = 'Equal',
  NumpadEqual = 'NumpadEqual',
  Comma = 'Comma',
  Minus = 'Minus',
  Period = 'Period',
  Slash = 'Slash',
  Backquote = 'Backquote',
  BracketLeft = 'BracketLeft',
  Backslash = 'Backslash',
  BracketRight = 'BracketRight',
  Quote = 'Quote',
  AltGraph = 'AltGraph',
  Props = 'Props',
  Cancel = 'Cancel',
  Clear = 'Clear',
  Shift = 'Shift',
  Control = 'Control',
  Alt = 'Alt',
  Accept = 'Accept',
  ModeChange = 'ModeChange',
  Print = 'Print',
  Execute = 'Execute',
  Meta = 'Meta',

  Attn = 'Attn',
  CrSel = 'CrSel',
  ExSel = 'ExSel',
  EraseEof = 'EraseEof',
  Play = 'Play',
  ZoomOut = 'ZoomOut',
  SoftLeft = 'SoftLeft',
  SoftRight = 'SoftRight',
  Camera = 'Camera',
  Call = 'Call',
  EndCall = 'EndCall',
  VolumeDown = 'VolumeDown',
  VolumeUp = 'VolumeUp',
}

export const keyPress = async (page: puppeteer.Page, key: KeyCode) => {
  await page.keyboard.press(key);
};
