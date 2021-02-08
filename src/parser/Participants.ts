class Participant {
  name: string;
  private stereotype: string | undefined;
  private width: number | undefined;

  constructor(name: string, stereotype?: string, width?: number) {
    this.name = name;
    this.stereotype = stereotype;
    this.width = width;
  }
}

export class Participants {
  private participants = new Map();

  public Add(name: string): void;
  public Add(name: string, stereotype?: string, width?: number): void {
    const participant = new Participant(name, stereotype, width);
    this.participants.set(participant.name, participant)
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
