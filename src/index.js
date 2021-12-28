import database from '../database.json';
import Person from './person.js';
import { save } from './repository.js';
import TerminalController from './terminalController.js';

const DEFAULT_LANG = 'pt-BR';
const STOP_TERM = ':q';

const terminalController = new TerminalController();

terminalController.initializeTerminal(database, DEFAULT_LANG, Person);

async function mainLoop() {
  try {
    const answer = await terminalController.question();
    if (answer === STOP_TERM) {
      terminalController.closeTerminal();
      console.log('Process finished');
      return;
    }
    const person = Person.generateInstanceFromString(answer);

    save(person);

    terminalController.table.updateTable(person.formatted(DEFAULT_LANG));

    return mainLoop();
  } catch (error) {
    console.log('Something went wrong', error);
    return mainLoop();
  }
}

await mainLoop();
