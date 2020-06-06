import { Container } from "inversify";
import { IDepC } from "./idepc";
import { TYPES } from "./types";
import { ConcreteA } from "./concretea";
import { IDepA } from "./idepa";
import { IDepB } from "./idepb";
import { ConcreteB } from "./concreteb";
import { ConcreteC } from "./concretec";

let container = new Container({
    defaultScope: 'Singleton'
});

// IDepA will be singleton
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA).inSingletonScope();

// IDepB will be transient. We will get new instance everytime we request
container.bind<IDepB>(TYPES.IDepB).to(ConcreteB).inTransientScope();

// IDebC will be request. It'll return the same instance until we call container unbind
container.bind<IDepC>(TYPES.IDepC).to(ConcreteC);

export default container;