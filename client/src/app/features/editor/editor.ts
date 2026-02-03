import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewChecked,
  OnDestroy,
  NgZone,
  ViewEncapsulation,
} from '@angular/core';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { markdown } from '@codemirror/lang-markdown';

@Component({
  selector: 'app-editor',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './editor.html',
  styleUrl: './editor.scss',
})
export class Editor {}
