import PropertyEditor from "./src/index.vue";

PropertyEditor.install = function(Vue) {
  Vue.component(PropertyEditor.name, PropertyEditor);
};

export default PropertyEditor;
