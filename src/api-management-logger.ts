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
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName
  }

  // buffered - computed: false, optional: true, required: false
  private _buffered?: boolean;
  public get buffered() {
    return this.getBooleanAttribute('buffered');
  }
  public set buffered(value: boolean ) {
    this._buffered = value;
  }
  public resetBuffered() {
    this._buffered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferedInput() {
    return this._buffered
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // application_insights - computed: false, optional: true, required: false
  private _applicationInsights?: ApiManagementLoggerApplicationInsights[];
  public get applicationInsights() {
    return this.interpolationForAttribute('application_insights') as any;
  }
  public set applicationInsights(value: ApiManagementLoggerApplicationInsights[] ) {
    this._applicationInsights = value;
  }
  public resetApplicationInsights() {
    this._applicationInsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsInput() {
    return this._applicationInsights
  }

  // eventhub - computed: false, optional: true, required: false
  private _eventhub?: ApiManagementLoggerEventhub[];
  public get eventhub() {
    return this.interpolationForAttribute('eventhub') as any;
  }
  public set eventhub(value: ApiManagementLoggerEventhub[] ) {
    this._eventhub = value;
  }
  public resetEventhub() {
    this._eventhub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubInput() {
    return this._eventhub
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementLoggerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementLoggerTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
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
