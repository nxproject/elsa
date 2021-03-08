import {jsPlumb, jsPlumbInstance} from "jsplumb";

export class JsPlumbUtils {
  static createInstance = (container: any, readonly: boolean): jsPlumbInstance =>
    jsPlumb.getInstance({
      ConnectionsDetachable: !readonly,
      DragOptions: { cursor: 'pointer', zIndex: 2000 },
      ConnectionOverlays: [
        ['Arrow', {
          location: 1,
          visible: true,
          width: 11,
          length: 11
        }],
        ['Label', {
          location: 0.5,
          id: 'label',
          cssClass: 'connection-label'
        }]
      ],
      Container: container
    });

  static createEndpointUuid = (activityId: string, outcome: string) => `activity-${activityId}-${outcome}`;

  static colorEndpoint = (label: string): any => {

    var color = '#7da7f2';
    switch (label) {
      case 'Done':
      case 'True':
        color = '#7CFC00';
        break;
      case 'False':
      case 'Fail':
        color = '#FF4500';
        break;
      case 'Call':
        color = '#1E90FF';
        break;
      case 'Other':
        color = '#FFEBCD';
        break;
      case 'OnOverdue':
        color = '#FFD700';
        break;
      case 'OnError':
        color = '#B22222';
        break;
    }
    return color;
  };

  static getSourceEndpointOptions = (activityId: string, outcome: string, executed: boolean): any => {
    const fill = JsPlumbUtils.colorEndpoint(outcome); //'#7da7f2';
    const stroke = fill;
    const connectorFill = executed ? '#6faa44' : '#999999';

    return {
      type: "Dot",
      anchor: 'Continuous',
      paintStyle: {
        stroke: stroke,
        fill: fill,
        strokeWidth: 2
      },
      isSource: true,
      connector: ['Flowchart', { stub: [40, 60], gap: 0, cornerRadius: 5, alwaysRespectStubs: true }],
      connectorStyle: {
        strokeWidth: 2,
        stroke: connectorFill
      },
      connectorHoverStyle: {
        strokeWidth: 2,
        stroke: connectorFill
      },
      connectorOverlays: [['Label', { location: [3, -1.5], cssClass: 'endpointSourceLabel' }]],
      hoverPaintStyle: {
        fill: stroke,
        stroke: fill
      },
      dragOptions: {},
      uuid: JsPlumbUtils.createEndpointUuid(activityId, outcome),
      parameters: {
        outcome
      },
      scope: null,
      reattachConnections: true,
      maxConnections: 1
    };
  };
}
