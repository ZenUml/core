class Participant {
  get width(): number {
    return this._width || 0;
  }
  name: string;
  private stereotype: string | undefined;
  private _width: number | undefined;
  private groupId: number | string | undefined;
  private explicit: boolean | undefined;
  private isStarter: boolean | undefined;
  private _left: number | undefined;

  get top(): number {
    return this._top || 0;
  }
  private _top: number | undefined;
  get left(): number {
    return this._left || 0;
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

  public Posit(left: number, top?: number, width?: number) {
    this._left = left;
    this._top = top;
    this._width = width;
  }

  public Center(): number {
    return this.left + this.width / 2;
  }

  public Right(): number {
    return this.left + this.width;
  }
}

export class Participants {
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
    this.participants.set(participant.name, this.Get(name) || participant)
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

  First() {
    return this.participants.values().next().value
  }
  Get(name: string) {
    return this.participants.get(name);
  }

  Size() {
    return this.participants.size;
  }
}
