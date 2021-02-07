export class CodeRange {
  start: number;
  end: number;

  private constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  public static from(context: any) {
    const start = context.start.start;
    const stop = context.stop.stop + 1;
    return new CodeRange(start, stop);
  }
}
