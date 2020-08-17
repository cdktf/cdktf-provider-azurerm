// https://www.terraform.io/docs/providers/azurerm/r/bastion_host.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BastionHostConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** ip_configuration block */
  readonly ipConfiguration?: BastionHostIpConfiguration[];
  /** timeouts block */
  readonly timeouts?: BastionHostTimeouts;
}
export interface BastionHostIpConfiguration {
  readonly name: string;
  readonly publicIpAddressId: string;
  readonly subnetId: string;
}
export interface BastionHostTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class BastionHost extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BastionHostConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bastion_host',
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
    this._ipConfiguration = config.ipConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
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

  // ip_configuration - computed: false, optional: true, required: false
  private _ipConfiguration?: BastionHostIpConfiguration[];
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public set ipConfiguration(value: BastionHostIpConfiguration[] | undefined) {
    this._ipConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BastionHostTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BastionHostTimeouts | undefined) {
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
      ip_configuration: this._ipConfiguration,
      timeouts: this._timeouts,
    };
  }
}
