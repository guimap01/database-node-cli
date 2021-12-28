import chalkTable from 'chalk-table';

const DEFAULT_CONFIG_FILE = 'defaultDatabaseColumns.js';

export default class Table {
  constructor() {
    this.data = {};
    this.print = {};
  }

  initializeTable(database, language, Class) {
    const data = database.map((item) => new Class(item).formatted(language));
    const table = chalkTable(this.getTableOptions(), data);
    this.print = console.draft(table);
    this.data = data;
  }
  updateTable(item) {
    this.data.push(item);
    this.print(chalkTable(this.getTableOptions(), this.data));
  }
  async getTableOptions(configFileName = DEFAULT_CONFIG_FILE) {
    const path = `../config/${configFileName}`;

    const columns = await import(path);
    return {
      leftPad: 2,
      columns,
    };
  }
}
