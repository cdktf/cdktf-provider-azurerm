// https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementLoggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#api_management_name ApiManagementLogger#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#buffered ApiManagementLogger#buffered}
  */
  readonly buffered?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#description ApiManagementLogger#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#name ApiManagementLogger#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#resource_group_name ApiManagementLogger#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#resource_id ApiManagementLogger#resource_id}
  */
  readonly resourceId?: string;
  /**
  * application_insights block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#application_insights ApiManagementLogger#application_insights}
  */
  readonly applicationInsights?: ApiManagementLoggerApplicationInsights[];
  /**
  * eventhub block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#eventhub ApiManagementLogger#eventhub}
  */
  readonly eventhub?: ApiManagementLoggerEventhub[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#timeouts ApiManagementLogger#timeouts}
  */
  readonly timeouts?: ApiManagementLoggerTimeouts;
}
export interface ApiManagementLoggerApplicationInsights {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#instrumentation_key ApiManagementLogger#instrumentation_key}
  */
  readonly instrumentationKey: string;
}

function apiManagementLoggerApplicationInsightsToTerraform(struct?: ApiManagementLoggerApplicationInsights): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instrumentation_key: cdktf.stringToTerraform(struct!.instrumentationKey),
  }
}

export interface ApiManagementLoggerEventhub {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#connection_string ApiManagementLogger#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#name ApiManagementLogger#name}
  */
  readonly name: string;
}

function apiManagementLoggerEventhubToTerraform(struct?: ApiManagementLoggerEventhub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ApiManagementLoggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#create ApiManagementLogger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#delete ApiManagementLogger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#read ApiManagementLogger#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html#update ApiManagementLogger#update}
  */
  readonly update?: string;
}

function apiManagementLoggerTimeoutsToTerraform(struct?: ApiManagementLoggerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html azurerm_api_management_logger}
*/
export class ApiManagementLogger extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_logger.html azurerm_api_management_logger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementLoggerConfig
  */
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
    this._resourceId = config.resourceId;
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

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string ) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
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
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      buffered: cdktf.booleanToTerraform(this._buffered),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      application_insights: cdktf.listMapper(apiManagementLoggerApplicationInsightsToTerraform)(this._applicationInsights),
      eventhub: cdktf.listMapper(apiManagementLoggerEventhubToTerraform)(this._eventhub),
      timeouts: apiManagementLoggerTimeoutsToTerraform(this._timeouts),
    };
  }
}
