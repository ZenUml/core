class Participant {
  name: string;
  private stereotype: string | undefined;
  private width: number | undefined;
  private groupId: number | string | undefined;
  private explicit: boolean | undefined;
  private isStarter: boolean | undefined;

  constructor(name: string,
              isStarter?: boolean,
              stereotype?: string,
              width?: number,
              groupId?: number | string,
              explicit?: boolean) {
    this.name = name;
    this.stereotype = stereotype;
    this.width = width;
    this.groupId = groupId;
    this.explicit = explicit;
    this.isStarter = isStarter;
  }
}

export class Participants {
  private participants = new Map();

  public Add(name: string): void;
  public Add(name: string,
             isStarter?: boolean,
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
    return Array.from(this.participants.entries())
      .map(entry => entry[1])
      .filter(p => !p.explicit && !p.isStarter)
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
