"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SListFieldDriver = /** @class */ (function () {
    function SListFieldDriver() {
        this.displayEditor = function (activity, property) {
            var name = property.name;
            var label = property.label;
            var items = activity.state[name] || [];
            var value = items.join(', ');
            return "<wf-list-field name=\"" + name + "\" label=\"" + label + "\" hint=\"" + property.hint + "\" items=\"" + value + "\"></wf-list-field>";
        };
        this.updateEditor = function (activity, property, formData) {
            var value = formData.get(property.name).toString();
            activity.state[property.name] = value.split(' ').map(function (x) { return x.trim(); });
        };
    }
    return SListFieldDriver;
}());
exports.SListFieldDriver = SListFieldDriver;
//# sourceMappingURL=slist-field-driver.js.map