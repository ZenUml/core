class Participant {
  name: string;
  private stereotype: string | undefined;
  private _width: number | undefined;
  private groupId: number | string | undefined;
  private explicit: boolean | undefined;
  private isStarter: boolean | undefined;
  private _top: number | undefined;
  private _left: number | undefined;

  get top(): number | undefined{
    return this._top;
  }
  get width(): number | undefined {
    return this._width;
  }
  get left(): number | undefined {
    return this._left;
  }

  constructor(name: string,
              isStarter?: boolean,
              stereotype?: string,
              width?: number,
              groupId?: number | string,
              explicit?: boolean) {
    this.name = name;
    this.stereotype = stereotype;
    this._width = width;
    this.groupId = groupId;
    this.explicit = explicit;
    this.isStarter = isStarter;
  }

  public IsPositioned(): boolean {
    return this._left !== undefined && this._top !== undefined && this._width !== undefined;
  }

  public Posit(left: number, top?: number, width?: number) {
    this._left = left;
    this._top = top;
    this._width = width;
  }

  public Center(): number | undefined {
    if (this.left && this.width) {
      return this.left + this.width / 2;
    }
    return undefined
  }

  public Right(): number | undefined {
    if (this.left && this.width) {
      return this.left + this.width;
    }
    return undefined
  }
}

export class Participants {
  private NULL_PARTICIPANT = new Participant('__NULL__');
  private participants = new Map();

  public Add(name: string): void;
  public Add(name: string, isStarter: boolean): void;
  public Add(name: string,
             isStarter = false,
             stereotype?: string,
             width?: number,
             groupId?: number | string,
             explicit?: boolean): void {
    const participant = new Participant(name, isStarter, stereotype, width, groupId, explicit);
    if (this.Get(name).name === '__NULL__') {
      this.participants.set(participant.name, participant)
    }
  }

  // Returns an array of participants that are deduced from messages
  // It does not included the Starter.
  ImplicitArray() {
    return this.Array()
      .filter(p => !p.explicit && !p.isStarter)
  }

  private Array() {
    return Array.from(this.participants.entries())
      .map(entry => entry[1]);
  }

  Names() {
    return Array.from(this.participants.keys())
  }

  First(): Participant {
    return this.participants.values().next().value
  }
  Get(name: string): Participant {
    return this.participants.get(name) || this.NULL_PARTICIPANT;
  }

  Size(): number {
    return this.participants.size;
  }
  // It returns an abs
  Distance(from: string, to: string) {
    if (this.Get(from).IsPositioned() && this.Get(to).IsPositioned()) {
      // @ts-ignore
      return Math.abs(this.Get(from).Center() - this.Get(to).Center())
    }
    return undefined;
  }
}
