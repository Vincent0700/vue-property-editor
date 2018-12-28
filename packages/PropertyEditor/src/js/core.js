import bus from "./bus";
import Factory from "./factory";

export default class Core {
  constructor(root, config) {
    this.root = root;
    this.bus = bus;
    this.factory = new Factory(this);
    this.manifest = this.factory.CreateManifest(config);
    this.event = this.factory.CreateEventSystem(this.bus);
    this.handlers = this.event.handlers;
    this.event.RegisterDefaultHandlers();
  }
}
