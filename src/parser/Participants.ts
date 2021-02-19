export enum ParticipantType {
  Actor = 1,
  Boundary,
  Collection,
  Control,
  Database,
  Entity,
  Queue,
  EC2,
  ECS,
  IAM,
  Lambda,
  RDS,
  S3,
  Undefined
}
export class Participant {
  name: string;
  private stereotype: string | undefined;
  private width: number | undefined;
  private groupId: number | string | undefined;
  private explicit: boolean | undefined;
  isStarter: boolean | undefined;
  private label: string | undefined;
  private type: string | undefined;

  constructor(name: string,
              isStarter?: boolean,
              stereotype?: string,
              width?: number,
              groupId?: number | string,
              label?: string,
              explicit?: boolean,
              type?: string
  ) {
    this.name = name;
    this.stereotype = stereotype;
    this.width = width;
    this.groupId = groupId;
    this.explicit = explicit;
    this.isStarter = isStarter;
    this.label = label;
    this.type = type;
  }

  public Type(): ParticipantType {
    switch (this.type?.toLowerCase()) {
      case '@actor':
        return ParticipantType.Actor;
      case '@boundary':
        return ParticipantType.Boundary;
      case '@collection':
        return ParticipantType.Collection;
      case '@control':
        return ParticipantType.Control;
      case '@database':
        return ParticipantType.Database;
      case '@entity':
        return ParticipantType.Entity;
      case '@queue':
        return ParticipantType.Queue;

      case '@ec2':
        return ParticipantType.EC2;
      case '@ecs':
        return ParticipantType.ECS;
      case '@iam':
        return ParticipantType.IAM;
      case '@lambda':
        return ParticipantType.Lambda;
      case '@rds':
        return ParticipantType.RDS;
      case '@s3':
        return ParticipantType.S3;
    }
    return ParticipantType.Undefined;
  }
}

export class Participants {
  private participants = new Map();

  public Add(name: string): void;
  public Add(name: string, isStarter: boolean): void;
  public Add(name: string,
             isStarter?: boolean,
             stereotype?: string,
             width?: number,
             groupId?: number | string,
             label?: string,
             explicit?: boolean): void;
  public Add(name: string,
             isStarter?: boolean,
             stereotype?: string,
             width?: number,
             groupId?: number | string,
             label?: string,
             explicit?: boolean,
             type?: string): void {
    const participant = new Participant(name, isStarter, stereotype, width, groupId, label, explicit, type);
    if (this.Get(name)?.isStarter && explicit) {
      participant.isStarter = true;
      this.participants.set(participant.name, participant)
    } else {
      this.participants.set(participant.name, this.Get(name) || participant)
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

  First() {
    return this.participants.values().next().value
  }

  Get(name: string) {
    return this.participants.get(name);
  }

  Size() {
    return this.participants.size;
  }

  Starter() {
    const first = this.First();
    // const type = first.name === 'User' || first.name === 'Actor' ? 'actor' : undefined;
    return first.isStarter? first : undefined;
  }
}
