import chalk from 'chalk';

export default [
  { field: 'id', name: chalk.cyan('ID') },
  { field: 'vehicles', name: chalk.magenta('vehicles') },
  { field: 'kmTraveled', name: chalk.green('Km Traveled') },
  { field: 'from', name: chalk.blue('From') },
  { field: 'to', name: chalk.white('To') },
];
