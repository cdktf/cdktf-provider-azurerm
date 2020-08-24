// https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone_virtual_network_link.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PrivateDnsZoneVirtualNetworkLinkConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly privateDnsZoneName: string;
  readonly registrationEnabled?: boolean;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly virtualNetworkId: string;
  /** timeouts block */
  readonly timeouts?: PrivateDnsZoneVirtualNetworkLinkTimeouts;
}
export interface PrivateDnsZoneVirtualNetworkLinkTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class PrivateDnsZoneVirtualNetworkLink extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PrivateDnsZoneVirtualNetworkLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_dns_zone_virtual_network_link',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._privateDnsZoneName = config.privateDnsZoneName;
    this._registrationEnabled = config.registrationEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._virtualNetworkId = config.virtualNetworkId;
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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // private_dns_zone_name - computed: false, optional: false, required: true
  private _privateDnsZoneName: string;
  public get privateDnsZoneName() {
    return this._privateDnsZoneName;
  }
  public set privateDnsZoneName(value: string) {
    this._privateDnsZoneName = value;
  }

  // registration_enabled - computed: false, optional: true, required: false
  private _registrationEnabled?: boolean;
  public get registrationEnabled() {
    return this._registrationEnabled;
  }
  public set registrationEnabled(value: boolean | undefined) {
    this._registrationEnabled = value;
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

  // virtual_network_id - computed: false, optional: false, required: true
  private _virtualNetworkId: string;
  public get virtualNetworkId() {
    return this._virtualNetworkId;
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PrivateDnsZoneVirtualNetworkLinkTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PrivateDnsZoneVirtualNetworkLinkTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      private_dns_zone_name: this._privateDnsZoneName,
      registration_enabled: this._registrationEnabled,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      virtual_network_id: this._virtualNetworkId,
      timeouts: this._timeouts,
    };
  }
}
