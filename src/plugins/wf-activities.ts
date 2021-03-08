// Generated on 2/15/2021 8:47:14 AM

import { OutcomeNames } from "../models/outcome-names";
import { WorkflowPlugin } from "../models";
import { ActivityDefinition } from "../models";
import pluginStore from '../services/workflow-plugin-store';

export class WorkflowActivities implements WorkflowPlugin {
  private static readonly Category: string = "Activity";

  getName = (): string => "WorkflowActivities";
  getActivityDefinitions = (): Array<ActivityDefinition> => ([
    this.call(),
this.delay(),
this.end(),
this.fork(),
this.ifelse(),
this.join(),
this.switch(),
this.task(),
this.continueon(),
this.onerror(),
this.onoverdue(),
this.do(),
this.storeuse(),
this.set()
  ]);

   private call = (): ActivityDefinition => ({ type: 'call',  displayName: 'call,',  description: 'Starts a workflow,',  runtimeDescription: 'x => !!x.state.workflow ? `Starts <strong>${ x.state.workflow.expression }</strong>` : x.definition.description',  category: 'Action',  icon: 'fas fa-dot-circle',  outcomes: [OutcomeNames.Done,OutcomeNames.OnError],   properties: [{ name: 'workflow', type: 'expression', label: 'Workflow', hint: 'The workflow to start'}, { name: 'name', type: 'text', label: 'Name', hint: 'The user defined name'}, { name: 'store', type: 'expression', label: 'Store', hint: 'The store to pass'}, { name: 'if', type: 'expression', label: 'If', hint: 'Execute if'}, { name: 'comment', type: 'text', label: 'Comment', hint: 'What does this step accomplish'}]});

 private delay = (): ActivityDefinition => ({ type: 'delay',  displayName: 'delay,',  description: 'Delays for a specified duration,',  runtimeDescription: 'x => !!x.state.duration ? `Delay for <strong>${ x.state.duration.expression }</strong>` : x.definition.description',  category: 'Action',  icon: 'fas fa-dot-circle',  outcomes: [OutcomeNames.Done],   properties: [{ name: 'duration', type: 'expression', label: 'Duration', hint: 'The duration length'}, { name: 'if', type: 'expression', label: 'If', hint: 'Execute if'}, { name: 'comment', type: 'text', label: 'Comment', hint: 'What does this step accomplish'}]});

 private end = (): ActivityDefinition => ({ type: 'end',  displayName: 'end,',  description: 'Ends the workflow,',  category: 'Flow',  icon: 'fas fa-code-branch',  outcomes: [],   properties: [{ name: 'comment', type: 'text', label: 'Comment', hint: 'What does this step accomplish'}]});

 private fork = (): ActivityDefinition => ({ type: 'fork',  displayName: 'fork,',  description: 'Fork workflow execution into multiple branches,',  category: 'Flow',  icon: 'fas fa-code-branch',  outcomes: 'x => x.state.branches',   properties: [{ name: 'branches', type: 'list', label: 'Branches', hint: 'A comma-separated list of names representing branches'}, { name: 'comment', type: 'text', label: 'Comment', hint: 'What does this step accomplish'}]});

 private ifelse = (): ActivityDefinition => ({ type: 'ifelse',  displayName: 'ifelse,',  description: 'Evaluate a Boolean expression and continue execution depending on the result,',  runtimeDescription: 'x => !!x.state.expression ? `Evaluate <strong>${ x.state.expression.expression }</strong> and continue execution depending on the result.` : x.definition.description',  category: 'Flow',  icon: 'fas fa-code-branch',  outcomes: [OutcomeNames.True,OutcomeNames.False],   properties: [{ name: 'expression', type: 'expression', label: 'Expression', hint: 'The expression to evaluate. The evaluated value will be used to switch on'}]});

 private join = (): ActivityDefinition => ({ type: 'join',  displayName: 'join,',  description: 'Merge workflow execution back into a single branch,',  runtimeDescription: 'x => !!x.state.joinMode ? `Merge workflow execution back into a single branch using mode <strong>${ x.state.joinMode }</strong>` : x.definition.description',  category: 'Flow',  icon: 'fas fa-code-branch',  outcomes: [OutcomeNames.Done],   properties: [{ name: 'joinMode', type: 'select', label: 'JoinMode', options: { items: ["WaitAll","WaitAny"] }, hint: 'Either wait for all or any'}, { name: 'comment', type: 'text', label: 'Comment', hint: 'What does this step accomplish'}]});

 private switch = (): ActivityDefinition => ({ type: 'switch',  displayName: 'switch,',  description: 'Switch execution based on a given expression,',  runtimeDescription: 'x => !!x.state.expression ? `Switch execution based on <strong>${ x.state.expression.expression }</strong>.` : x.definition.description',  category: 'Flow',  icon: 'fas fa-code-branch',  outcomes: 'x => x.state.cases',   properties: [{ name: 'expression', type: 'expression', label: 'Expression', hint: 'The expression to evaluate. The evaluated value will be used to switch on'}, { name: 'cases', type: 'list', label: 'Cases', hint: 'A comma-separated list of possible outcomes of the expression'}]});

 private task = (): ActivityDefinition => ({ type: 'task',  displayName: 'task,',  description: 'Calls a task,',  runtimeDescription: 'x => !!x.state.task ? `Calls <strong>${ x.state.task.expression }</strong>` : x.definition.description',  category: 'Action',  icon: 'fas fa-dot-circle',  outcomes: [OutcomeNames.Done],   properties: [{ name: 'task', type: 'expression', label: 'Task', hint: 'The task to call'}, { name: 'store', type: 'expression', label: 'Store', hint: 'The store to pass'}, { name: 'return', type: 'expression', label: 'Return', hint: 'The store to use for the return'}, { name: 'if', type: 'expression', label: 'If', hint: 'Execute if'}, { name: 'comment', type: 'text', label: 'Comment', hint: 'What does this step accomplish'}]});

 private continueon = (): ActivityDefinition => ({ type: 'continue.on',  displayName: 'continue.on,',  description: 'Continues an an on.xxx call,',  category: 'Flow',  icon: 'fas fa-code-branch',  outcomes: [],   properties: [{ name: 'comment', type: 'text', label: 'Comment', hint: 'What does this step accomplish'}]});

 private onerror = (): ActivityDefinition => ({ type: 'on.error',  displayName: 'on.error,',  description: 'Sets the default process to handle errors,',  category: 'Flow',  icon: 'fas fa-code-branch',  outcomes: [OutcomeNames.Done,OutcomeNames.OnError],   properties: [{ name: 'comment', type: 'text', label: 'Comment', hint: 'What does this step accomplish'}]});

 private onoverdue = (): ActivityDefinition => ({ type: 'on.overdue',  displayName: 'on.overdue,',  description: 'Sets the default process to handle overdues,',  category: 'Flow',  icon: 'fas fa-code-branch',  outcomes: [OutcomeNames.Done,OutcomeNames.OnOverdue],   properties: [{ name: 'comment', type: 'text', label: 'Comment', hint: 'What does this step accomplish'}]});

 private do = (): ActivityDefinition => ({ type: 'do',  displayName: 'do,',  description: 'Creates activity,',  runtimeDescription: 'x => !!x.state.subject ? \`<strong>\${ x.state.subject }</strong>\` : x.definition.description',  category: 'Action',  icon: 'fas fa-dot-circle',  outcomes: [OutcomeNames.Done,OutcomeNames.Fail,OutcomeNames.OnOverdue,OutcomeNames.OnError],   properties: [{ name: 'subject', type: 'expression', label: 'Subject', hint: 'The subject line'}, { name: 'message', type: 'expression', label: 'Message', hint: 'The message line'}, { name: 'assignedTo', type: 'expression', label: 'AssignedTo', hint: 'The group to whom the activity is assigned to'}, { name: 'duration', type: 'expression', label: 'Duration', hint: 'The duration length'}, { name: 'if', type: 'expression', label: 'If', hint: 'Execute if'}, { name: 'comment', type: 'text', label: 'Comment', hint: 'What does this step accomplish'}]});

 private storeuse = (): ActivityDefinition => ({ type: 'store.use',  displayName: 'store.use,',  description: 'Sets the default store,',  category: 'Store',  icon: 'fas fa-database',  outcomes: [OutcomeNames.Done],   properties: [{ name: 'store', type: 'expression', label: 'Store', hint: 'The store to use'}, { name: 'if', type: 'expression', label: 'If', hint: 'Execute if'}, { name: 'comment', type: 'text', label: 'Comment', hint: 'What does this step accomplish'}]});

 private set = (): ActivityDefinition => ({ type: 'set',  displayName: 'set,',  description: 'Sets a value,',  category: 'Ops',  icon: 'fas fa-plus-square',  outcomes: [OutcomeNames.Done],   properties: [{ name: 'field', type: 'expression', label: 'Field', hint: 'The field'}, { name: 'value', type: 'expression', label: 'Value', hint: 'The value'}, { name: 'if', type: 'expression', label: 'If', hint: 'Execute if'}, { name: 'comment', type: 'text', label: 'Comment', hint: 'What does this step accomplish'}]});


}

pluginStore.add(new WorkflowActivities());
