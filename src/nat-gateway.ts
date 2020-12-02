// https://www.terraform.io/docs/providers/azurerm/r/nat_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NatGatewayConfig extends TerraformMetaArguments {
  readonly idleTimeoutInMinutes?: number;
  readonly location: string;
  readonly name: string;
  readonly publicIpAddressIds?: string[];
  readonly publicIpPrefixIds?: string[];
  readonly resourceGroupName: string;
  readonly skuName?: string;
  readonly tags?: { [key: string]: string };
  readonly zones?: string[];
  /** timeouts block */
  readonly timeouts?: NatGatewayTimeouts;
}
export interface NatGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NatGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NatGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_nat_gateway',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._idleTimeoutInMinutes = config.idleTimeoutInMinutes;
    this._location = config.location;
    this._name = config.name;
    this._publicIpAddressIds = config.publicIpAddressIds;
    this._publicIpPrefixIds = config.publicIpPrefixIds;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._zones = config.zones;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number;
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number ) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // public_ip_address_ids - computed: true, optional: true, required: false
  private _publicIpAddressIds?: string[];
  public get publicIpAddressIds() {
    return this.getListAttribute('public_ip_address_ids');
  }
  public set publicIpAddressIds(value: string[]) {
    this._publicIpAddressIds = value;
  }
  public resetPublicIpAddressIds() {
    this._publicIpAddressIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdsInput() {
    return this._publicIpAddressIds
  }

  // public_ip_prefix_ids - computed: false, optional: true, required: false
  private _publicIpPrefixIds?: string[];
  public get publicIpPrefixIds() {
    return this.getListAttribute('public_ip_prefix_ids');
  }
  public set publicIpPrefixIds(value: string[] ) {
    this._publicIpPrefixIds = value;
  }
  public resetPublicIpPrefixIds() {
    this._publicIpPrefixIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpPrefixIdsInput() {
    return this._publicIpPrefixIds
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

  // resource_guid - computed: true, optional: false, required: false
  public get resourceGuid() {
    return this.getStringAttribute('resource_guid');
  }

  // sku_name - computed: false, optional: true, required: false
  private _skuName?: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string ) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] ) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NatGatewayTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NatGatewayTimeouts ) {
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
      idle_timeout_in_minutes: this._idleTimeoutInMinutes,
      location: this._location,
      name: this._name,
      public_ip_address_ids: this._publicIpAddressIds,
      public_ip_prefix_ids: this._publicIpPrefixIds,
      resource_group_name: this._resourceGroupName,
      sku_name: this._skuName,
      tags: this._tags,
      zones: this._zones,
      timeouts: this._timeouts,
    };
  }
}
