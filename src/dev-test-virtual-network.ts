// https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DevTestVirtualNetworkConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly labName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** subnet block */
  readonly subnet?: DevTestVirtualNetworkSubnet[];
  /** timeouts block */
  readonly timeouts?: DevTestVirtualNetworkTimeouts;
}
export interface DevTestVirtualNetworkSubnet {
  readonly useInVirtualMachineCreation?: string;
  readonly usePublicIpAddress?: string;
}
export interface DevTestVirtualNetworkTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DevTestVirtualNetwork extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DevTestVirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_test_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._labName = config.labName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._subnet = config.subnet;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // lab_name - computed: false, optional: false, required: true
  private _labName: string;
  public get labName() {
    return this._labName;
  }
  public set labName(value: string) {
    this._labName = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // unique_identifier - computed: true, optional: false, required: true
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: DevTestVirtualNetworkSubnet[];
  public get subnet() {
    return this._subnet;
  }
  public set subnet(value: DevTestVirtualNetworkSubnet[] | undefined) {
    this._subnet = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DevTestVirtualNetworkTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DevTestVirtualNetworkTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      lab_name: this._labName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      subnet: this._subnet,
      timeouts: this._timeouts,
    };
  }
}
