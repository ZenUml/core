import { VueConstructor } from "vue";

export interface VueSequence {
  Version: string;
  BuildTime: string;
  Store: any;
  SeqDiagram: VueConstructor;
  DiagramFrame: VueConstructor;
}
