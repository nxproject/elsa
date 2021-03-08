"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkflowPluginStore = /** @class */ (function () {
    function WorkflowPluginStore() {
        var _this = this;
        this.plugins = [];
        this.add = function (plugin) {
            _this.plugins = _this.plugins.concat([plugin]);
        };
        this.list = function () { return _this.plugins.slice(); };
    }
    return WorkflowPluginStore;
}());
exports.WorkflowPluginStore = WorkflowPluginStore;
var pluginStore = new WorkflowPluginStore();
var win = window;
var elsa = win.elsa || {};
elsa.pluginStore = pluginStore;
win.elsa = elsa;
exports.default = pluginStore;
//# sourceMappingURL=workflow-plugin-store.js.map