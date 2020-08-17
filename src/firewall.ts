// https://www.terraform.io/docs/providers/azurerm/r/firewall.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface FirewallConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly zones?: string[];
  /** ip_configuration block */
  readonly ipConfiguration: FirewallIpConfiguration[];
  /** timeouts block */
  readonly timeouts?: FirewallTimeouts;
}
export interface FirewallIpConfiguration {
  readonly name: string;
  readonly publicIpAddressId: string;
  readonly subnetId?: string;
}
export interface FirewallTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class Firewall extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_firewall',
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
    this._zones = config.zones;
    this._ipConfiguration = config.ipConfiguration;
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this._zones;
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }

  // ip_configuration - computed: false, optional: false, required: true
  private _ipConfiguration: FirewallIpConfiguration[];
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public set ipConfiguration(value: FirewallIpConfiguration[]) {
    this._ipConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FirewallTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: FirewallTimeouts | undefined) {
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
      zones: this._zones,
      ip_configuration: this._ipConfiguration,
      timeouts: this._timeouts,
    };
  }
}
