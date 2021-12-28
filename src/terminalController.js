import readline from 'readline';
import Person from './person.js';
import DraftLog from 'draftlog';
import Table from './table.js';

export default class TerminalController {
  constructor() {
    this.print = {};
    this.data = {};
  }

  initializeTerminal(database, language, Class) {
    DraftLog(console).addLineListener(process.stdin);
    this.terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.table = new Table();
    this.table.initializeTable(database, language, Class);
  }

  question(msg = '') {
    return new Promise((resolve) => this.terminal.question(msg, resolve));
  }

  closeTerminal() {
    this.terminal.close();
  }
}
