// https://www.terraform.io/docs/providers/azurerm/r/lb.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LbConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sku?: string;
  readonly tags?: { [key: string]: string };
  /** frontend_ip_configuration block */
  readonly frontendIpConfiguration?: LbFrontendIpConfiguration[];
  /** timeouts block */
  readonly timeouts?: LbTimeouts;
}
export interface LbFrontendIpConfiguration {
  readonly name: string;
  readonly privateIpAddress?: string;
  readonly privateIpAddressAllocation?: string;
  readonly publicIpAddressId?: string;
  readonly publicIpPrefixId?: string;
  readonly subnetId?: string;
  readonly zones?: string[];
}
export interface LbTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class Lb extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lb',
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
    this._sku = config.sku;
    this._tags = config.tags;
    this._frontendIpConfiguration = config.frontendIpConfiguration;
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

  // private_ip_address - computed: true, optional: false, required: true
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_addresses - computed: true, optional: false, required: true
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string | undefined) {
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

  // frontend_ip_configuration - computed: false, optional: true, required: false
  private _frontendIpConfiguration?: LbFrontendIpConfiguration[];
  public get frontendIpConfiguration() {
    return this._frontendIpConfiguration;
  }
  public set frontendIpConfiguration(value: LbFrontendIpConfiguration[] | undefined) {
    this._frontendIpConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LbTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      sku: this._sku,
      tags: this._tags,
      frontend_ip_configuration: this._frontendIpConfiguration,
      timeouts: this._timeouts,
    };
  }
}
