// https://www.terraform.io/docs/providers/azurerm/r/application_insights_analytics_item.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApplicationInsightsAnalyticsItemConfig extends TerraformMetaArguments {
  readonly applicationInsightsId: string;
  readonly content: string;
  readonly functionAlias?: string;
  readonly name: string;
  readonly scope: string;
  readonly type: string;
  /** timeouts block */
  readonly timeouts?: ApplicationInsightsAnalyticsItemTimeouts;
}
export interface ApplicationInsightsAnalyticsItemTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApplicationInsightsAnalyticsItem extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApplicationInsightsAnalyticsItemConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_application_insights_analytics_item',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationInsightsId = config.applicationInsightsId;
    this._content = config.content;
    this._functionAlias = config.functionAlias;
    this._name = config.name;
    this._scope = config.scope;
    this._type = config.type;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_insights_id - computed: false, optional: false, required: true
  private _applicationInsightsId: string;
  public get applicationInsightsId() {
    return this._applicationInsightsId;
  }
  public set applicationInsightsId(value: string) {
    this._applicationInsightsId = value;
  }

  // content - computed: false, optional: false, required: true
  private _content: string;
  public get content() {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }

  // function_alias - computed: false, optional: true, required: false
  private _functionAlias?: string;
  public get functionAlias() {
    return this._functionAlias;
  }
  public set functionAlias(value: string | undefined) {
    this._functionAlias = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this._scope;
  }
  public set scope(value: string) {
    this._scope = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_modified - computed: true, optional: false, required: true
  public get timeModified() {
    return this.getStringAttribute('time_modified');
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApplicationInsightsAnalyticsItemTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApplicationInsightsAnalyticsItemTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      application_insights_id: this._applicationInsightsId,
      content: this._content,
      function_alias: this._functionAlias,
      name: this._name,
      scope: this._scope,
      type: this._type,
      timeouts: this._timeouts,
    };
  }
}
