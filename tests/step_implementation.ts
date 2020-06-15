import { Step } from 'gauge-ts'
import { strictEqual} from 'assert'

import { RootContext } from '../src/parser'
let ToCollector = require('../src/parser/ToCollector')

export default class StepImplementation {
  @Step("Extract participants from DSL <arg0>")
  extract(table: any) {
    for(const row of  table.rows) {
      let dsl = row.cells[0].replace('\\n', '\n');
      let rootContext = RootContext(dsl);
      let toCollector = new ToCollector();
      const participants = toCollector.getAllTos2(toCollector)(rootContext);
      let actualKeys = `[${Object.keys(participants).join(',')}]`;
      strictEqual(actualKeys, row.cells[1])
    }
  }
}
