import { Component } from '@angular/core';
import { Editor } from './features/editor/editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Editor],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
