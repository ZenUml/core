import { VueConstructor } from "vue";

interface VueSequence {
  Version: string;
  BuildTime: string;
  Store: any;
  SeqDiagram: VueConstructor;
  DiagramFrame: VueConstructor;
}

export const VueSequence: VueSequence;
