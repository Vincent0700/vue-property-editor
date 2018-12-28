import Event from "./event";
import get_config from "./config";

export default class Factory {
  constructor(core) {
    this.core = core;
  }

  CreateManifest(config) {
    const default_cfg = get_config();
    let { theme = default_cfg.theme, title = default_cfg.title } = config;
    return {
      theme,
      closed,
      title
    };
  }

  CreateEventSystem(bus) {
    return new Event(this.core, bus);
  }
}
