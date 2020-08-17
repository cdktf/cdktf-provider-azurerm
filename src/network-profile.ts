// https://www.terraform.io/docs/providers/azurerm/r/network_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkProfileConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** container_network_interface block */
  readonly containerNetworkInterface: NetworkProfileContainerNetworkInterface[];
  /** timeouts block */
  readonly timeouts?: NetworkProfileTimeouts;
}
export interface NetworkProfileContainerNetworkInterfaceIpConfiguration {
  readonly name: string;
  readonly subnetId: string;
}
export interface NetworkProfileContainerNetworkInterface {
  readonly name: string;
  /** ip_configuration block */
  readonly ipConfiguration: NetworkProfileContainerNetworkInterfaceIpConfiguration[];
}
export interface NetworkProfileTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NetworkProfile extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_profile',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._containerNetworkInterface = config.containerNetworkInterface;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_network_interface_ids - computed: true, optional: false, required: true
  public get containerNetworkInterfaceIds() {
    return this.getListAttribute('container_network_interface_ids');
  }

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

  // container_network_interface - computed: false, optional: false, required: true
  private _containerNetworkInterface: NetworkProfileContainerNetworkInterface[];
  public get containerNetworkInterface() {
    return this._containerNetworkInterface;
  }
  public set containerNetworkInterface(value: NetworkProfileContainerNetworkInterface[]) {
    this._containerNetworkInterface = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkProfileTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NetworkProfileTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      container_network_interface: this._containerNetworkInterface,
      timeouts: this._timeouts,
    };
  }
}
