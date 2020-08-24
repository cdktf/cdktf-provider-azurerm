// https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementLoggerConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly buffered?: boolean;
  readonly description?: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** application_insights block */
  readonly applicationInsights?: ApiManagementLoggerApplicationInsights[];
  /** eventhub block */
  readonly eventhub?: ApiManagementLoggerEventhub[];
  /** timeouts block */
  readonly timeouts?: ApiManagementLoggerTimeouts;
}
export interface ApiManagementLoggerApplicationInsights {
  readonly instrumentationKey: string;
}
export interface ApiManagementLoggerEventhub {
  readonly connectionString: string;
  readonly name: string;
}
export interface ApiManagementLoggerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementLogger extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementLoggerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_logger',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._buffered = config.buffered;
    this._description = config.description;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._applicationInsights = config.applicationInsights;
    this._eventhub = config.eventhub;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this._apiManagementName;
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }

  // buffered - computed: false, optional: true, required: false
  private _buffered?: boolean;
  public get buffered() {
    return this._buffered;
  }
  public set buffered(value: boolean | undefined) {
    this._buffered = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // application_insights - computed: false, optional: true, required: false
  private _applicationInsights?: ApiManagementLoggerApplicationInsights[];
  public get applicationInsights() {
    return this._applicationInsights;
  }
  public set applicationInsights(value: ApiManagementLoggerApplicationInsights[] | undefined) {
    this._applicationInsights = value;
  }

  // eventhub - computed: false, optional: true, required: false
  private _eventhub?: ApiManagementLoggerEventhub[];
  public get eventhub() {
    return this._eventhub;
  }
  public set eventhub(value: ApiManagementLoggerEventhub[] | undefined) {
    this._eventhub = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementLoggerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementLoggerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      buffered: this._buffered,
      description: this._description,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      application_insights: this._applicationInsights,
      eventhub: this._eventhub,
      timeouts: this._timeouts,
    };
  }
}
