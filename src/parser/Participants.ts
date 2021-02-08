class Participant {
  name: string;
  private stereotype: string | undefined;
  private width: number | undefined;
  private groupId: number | string | undefined;
  private explicit: boolean | undefined;

  constructor(name: string, stereotype?: string, width?: number, groupId?: number | string, explicit?: boolean) {
    this.name = name;
    this.stereotype = stereotype;
    this.width = width;
    this.groupId = groupId;
    this.explicit = explicit;
  }
}

export class Participants {
  private participants = new Map();

  public Add(name: string): void;
  public Add(name: string, stereotype?: string, width?: number, groupId?: number | string, explicit?: boolean): void {
    const participant = new Participant(name, stereotype, width, groupId, explicit);
    this.participants.set(participant.name, this.Get(name) || participant)
  }

  // Returns an array of participants that are deduced from messages
  // It does not included the Starter.
  implicitArray() {
    return Array.from(this.participants.entries())
      .map(entry => entry[1])
      .filter(p => !p.explicit)
  }

  Get(name: string) {
    return this.participants.get(name);
  }

  Size() {
    return this.participants.size;
  }
}
