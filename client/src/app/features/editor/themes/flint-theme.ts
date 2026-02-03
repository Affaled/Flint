import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';
import { EditorView } from '@codemirror/view';

const baseTheme = EditorView.theme({
  '&': {
    fontSize: '16px',
    height: '100%',
  },
  '.cm-content': {
    fontFamily: "'Inter', sans-serif",
    caretColor: '#a855f7',
  },
  '&.cm-focused .cm-cursor': {
    borderLeftColor: 'a855f7',
  },
  '.cm-activeLine': {
    backgroundColor: 'rgba(168, 85, 247, 0.05)',
  },
});

const markdownHighlighting = HighlightStyle.define([
  {
    tag: tags.heading1,
    fontSize: '2.2em',
    fontWeight: 'bold',
    color: '#2e0f46',
    fontFamily: 'inherit',
  },
]);

export const flintTheme = [baseTheme, syntaxHighlighting(markdownHighlighting)];
