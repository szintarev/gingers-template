import * as migration_20260505_170136 from './20260505_170136';

export const migrations = [
  {
    up: migration_20260505_170136.up,
    down: migration_20260505_170136.down,
    name: '20260505_170136'
  },
];
