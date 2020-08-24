// https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DatabricksWorkspaceConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly managedResourceGroupName?: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sku: string;
  readonly tags?: { [key: string]: string };
  /** custom_parameters block */
  readonly customParameters?: DatabricksWorkspaceCustomParameters[];
  /** timeouts block */
  readonly timeouts?: DatabricksWorkspaceTimeouts;
}
export interface DatabricksWorkspaceCustomParameters {
  readonly noPublicIp?: boolean;
  readonly privateSubnetName?: string;
  readonly publicSubnetName?: string;
  readonly virtualNetworkId?: string;
}
export interface DatabricksWorkspaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DatabricksWorkspace extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabricksWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_databricks_workspace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._managedResourceGroupName = config.managedResourceGroupName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._customParameters = config.customParameters;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // managed_resource_group_id - computed: true, optional: false, required: true
  public get managedResourceGroupId() {
    return this.getStringAttribute('managed_resource_group_id');
  }

  // managed_resource_group_name - computed: true, optional: true, required: false
  private _managedResourceGroupName?: string;
  public get managedResourceGroupName() {
    return this._managedResourceGroupName ?? this.getStringAttribute('managed_resource_group_name');
  }
  public set managedResourceGroupName(value: string | undefined) {
    this._managedResourceGroupName = value;
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

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string) {
    this._sku = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // custom_parameters - computed: false, optional: true, required: false
  private _customParameters?: DatabricksWorkspaceCustomParameters[];
  public get customParameters() {
    return this._customParameters;
  }
  public set customParameters(value: DatabricksWorkspaceCustomParameters[] | undefined) {
    this._customParameters = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabricksWorkspaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabricksWorkspaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      managed_resource_group_name: this._managedResourceGroupName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      sku: this._sku,
      tags: this._tags,
      custom_parameters: this._customParameters,
      timeouts: this._timeouts,
    };
  }
}
