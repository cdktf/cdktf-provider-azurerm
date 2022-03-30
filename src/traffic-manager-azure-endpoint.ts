// https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficManagerAzureEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#enabled TrafficManagerAzureEndpoint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#geo_mappings TrafficManagerAzureEndpoint#geo_mappings}
  */
  readonly geoMappings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#name TrafficManagerAzureEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#priority TrafficManagerAzureEndpoint#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#profile_id TrafficManagerAzureEndpoint#profile_id}
  */
  readonly profileId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#target_resource_id TrafficManagerAzureEndpoint#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#weight TrafficManagerAzureEndpoint#weight}
  */
  readonly weight: number;
  /**
  * custom_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#custom_header TrafficManagerAzureEndpoint#custom_header}
  */
  readonly customHeader?: TrafficManagerAzureEndpointCustomHeader[] | cdktf.IResolvable;
  /**
  * subnet block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#subnet TrafficManagerAzureEndpoint#subnet}
  */
  readonly subnet?: TrafficManagerAzureEndpointSubnet[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#timeouts TrafficManagerAzureEndpoint#timeouts}
  */
  readonly timeouts?: TrafficManagerAzureEndpointTimeouts;
}
export interface TrafficManagerAzureEndpointCustomHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#name TrafficManagerAzureEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#value TrafficManagerAzureEndpoint#value}
  */
  readonly value: string;
}

export function trafficManagerAzureEndpointCustomHeaderToTerraform(struct?: TrafficManagerAzureEndpointCustomHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface TrafficManagerAzureEndpointSubnet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#first TrafficManagerAzureEndpoint#first}
  */
  readonly first: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#last TrafficManagerAzureEndpoint#last}
  */
  readonly last?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#scope TrafficManagerAzureEndpoint#scope}
  */
  readonly scope?: number;
}

export function trafficManagerAzureEndpointSubnetToTerraform(struct?: TrafficManagerAzureEndpointSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first: cdktf.stringToTerraform(struct!.first),
    last: cdktf.stringToTerraform(struct!.last),
    scope: cdktf.numberToTerraform(struct!.scope),
  }
}

export interface TrafficManagerAzureEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#create TrafficManagerAzureEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#delete TrafficManagerAzureEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#read TrafficManagerAzureEndpoint#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint#update TrafficManagerAzureEndpoint#update}
  */
  readonly update?: string;
}

export function trafficManagerAzureEndpointTimeoutsToTerraform(struct?: TrafficManagerAzureEndpointTimeoutsOutputReference | TrafficManagerAzureEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class TrafficManagerAzureEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficManagerAzureEndpointTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficManagerAzureEndpointTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint azurerm_traffic_manager_azure_endpoint}
*/
export class TrafficManagerAzureEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_traffic_manager_azure_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_azure_endpoint azurerm_traffic_manager_azure_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficManagerAzureEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficManagerAzureEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_traffic_manager_azure_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '2.99.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._geoMappings = config.geoMappings;
    this._name = config.name;
    this._priority = config.priority;
    this._profileId = config.profileId;
    this._targetResourceId = config.targetResourceId;
    this._weight = config.weight;
    this._customHeader = config.customHeader;
    this._subnet = config.subnet;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // geo_mappings - computed: false, optional: true, required: false
  private _geoMappings?: string[]; 
  public get geoMappings() {
    return this.getListAttribute('geo_mappings');
  }
  public set geoMappings(value: string[]) {
    this._geoMappings = value;
  }
  public resetGeoMappings() {
    this._geoMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMappingsInput() {
    return this._geoMappings;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // custom_header - computed: false, optional: true, required: false
  private _customHeader?: TrafficManagerAzureEndpointCustomHeader[] | cdktf.IResolvable; 
  public get customHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_header');
  }
  public set customHeader(value: TrafficManagerAzureEndpointCustomHeader[] | cdktf.IResolvable) {
    this._customHeader = value;
  }
  public resetCustomHeader() {
    this._customHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderInput() {
    return this._customHeader;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: TrafficManagerAzureEndpointSubnet[] | cdktf.IResolvable; 
  public get subnet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subnet');
  }
  public set subnet(value: TrafficManagerAzureEndpointSubnet[] | cdktf.IResolvable) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TrafficManagerAzureEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TrafficManagerAzureEndpointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      geo_mappings: cdktf.listMapper(cdktf.stringToTerraform)(this._geoMappings),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      profile_id: cdktf.stringToTerraform(this._profileId),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      weight: cdktf.numberToTerraform(this._weight),
      custom_header: cdktf.listMapper(trafficManagerAzureEndpointCustomHeaderToTerraform)(this._customHeader),
      subnet: cdktf.listMapper(trafficManagerAzureEndpointSubnetToTerraform)(this._subnet),
      timeouts: trafficManagerAzureEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
