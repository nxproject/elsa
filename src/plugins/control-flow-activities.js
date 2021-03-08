"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var outcome_names_1 = require("../models/outcome-names");
var workflow_plugin_store_1 = require("../services/workflow-plugin-store");
var ControlFlowActivities = /** @class */ (function () {
    function ControlFlowActivities() {
        var _this = this;
        this.getName = function () { return "ControlFlowActivities"; };
        this.getActivityDefinitions = function () { return ([
            _this.fork(),
            _this.ifElse(),
            _this.join(),
            _this.switch()
        ]); };
        this.fork = function () { return ({
            type: "Fork",
            displayName: "Fork",
            description: "Fork workflow execution into multiple branches.",
            category: ControlFlowActivities.Category,
            icon: 'fas fa-code-branch fa-rotate-180',
            outcomes: 'x => x.state.branches',
            properties: [{
                    name: 'branches',
                    type: 'slist',
                    label: 'Branches',
                    hint: 'Enter one or more names representing branches, separated with a space. Example: main overflow other'
                }]
        }); };
        this.ifElse = function () { return ({
            type: "IfElse",
            displayName: "If/Else",
            description: "Evaluate a Boolean expression and continue execution depending on the result.",
            category: ControlFlowActivities.Category,
            runtimeDescription: 'x => !!x.state.expression ? `Evaluate <strong>${ x.state.expression.expression }</strong> and continue execution depending on the result.` : x.definition.description',
            outcomes: [outcome_names_1.OutcomeNames.True, outcome_names_1.OutcomeNames.False],
            properties: [{
                    name: 'expression',
                    type: 'expression',
                    label: 'Expression',
                    hint: 'The expression to evaluate. The evaluated value will be used to switch on.'
                }]
        }); };
        this.join = function () { return ({
            type: "Join",
            displayName: "Join",
            description: "Merge workflow execution back into a single branch.",
            category: ControlFlowActivities.Category,
            icon: 'fas fa-code-branch',
            runtimeDescription: 'x => !!x.state.joinMode ? `Merge workflow execution back into a single branch using mode <strong>${ x.state.joinMode }</strong>` : x.definition.description',
            outcomes: [outcome_names_1.OutcomeNames.Done],
            properties: [{
                    name: 'joinMode',
                    type: 'text',
                    label: 'Join Mode',
                    hint: 'Either \'WaitAll\' or \'WaitAny\''
                }]
        }); };
        this.switch = function () { return ({
            type: "Switch",
            displayName: "Switch",
            description: "Switch execution based on a given expression.",
            category: ControlFlowActivities.Category,
            icon: 'far fa-list-alt',
            runtimeDescription: 'x => !!x.state.expression ? `Switch execution based on <strong>${ x.state.expression.expression }</strong>.` : x.definition.description',
            outcomes: 'x => x.state.cases.map(c => c.toString())',
            properties: [{
                    name: 'expression',
                    type: 'expression',
                    label: 'Expression',
                    hint: 'The expression to evaluate. The evaluated value will be used to switch on.'
                },
                {
                    name: 'cases',
                    type: 'list',
                    label: 'Cases',
                    hint: 'A comma-separated list of possible outcomes of the expression.'
                }]
        }); };
    }
    ControlFlowActivities.Category = "Control Flow";
    return ControlFlowActivities;
}());
exports.ControlFlowActivities = ControlFlowActivities;
workflow_plugin_store_1.default.add(new ControlFlowActivities());
//# sourceMappingURL=control-flow-activities.js.map