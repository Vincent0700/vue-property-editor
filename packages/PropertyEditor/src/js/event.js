export default class Event {
  constructor(core, bus) {
    this.core = core;
    this.bus = bus;
    this.handlers = {};
  }

  RegisterEventHandler(eventName, handler) {
    this.handlers[eventName] = handler;
    this.bus.$on(eventName, handler);
  }

  RegisterDefaultHandlers() {
    this.RegisterDefaultUIEventHandlers();
  }

  RegisterDefaultUIEventHandlers() {
    /**
     * Toggle panel by clicking Header icon
     * change icon panel size, icon style and hide panel content
     * @ref components/Header.vue
     */
    this.RegisterEventHandler("UIEvent.TogglePanel", () => {
      this.core.manifest.closed = !this.core.manifest.closed;
    });
  }
}
