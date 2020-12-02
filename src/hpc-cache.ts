// https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HpcCacheConfig extends TerraformMetaArguments {
  readonly cacheSizeInGb: number;
  readonly location: string;
  readonly mtu?: number;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly rootSquashEnabled?: boolean;
  readonly skuName: string;
  readonly subnetId: string;
  /** timeouts block */
  readonly timeouts?: HpcCacheTimeouts;
}
export interface HpcCacheTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class HpcCache extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HpcCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hpc_cache',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cacheSizeInGb = config.cacheSizeInGb;
    this._location = config.location;
    this._mtu = config.mtu;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._rootSquashEnabled = config.rootSquashEnabled;
    this._skuName = config.skuName;
    this._subnetId = config.subnetId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_size_in_gb - computed: false, optional: false, required: true
  private _cacheSizeInGb: number;
  public get cacheSizeInGb() {
    return this.getNumberAttribute('cache_size_in_gb');
  }
  public set cacheSizeInGb(value: number) {
    this._cacheSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInGbInput() {
    return this._cacheSizeInGb
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // mount_addresses - computed: true, optional: false, required: false
  public get mountAddresses() {
    return this.getListAttribute('mount_addresses');
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number;
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number ) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu
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

  // root_squash_enabled - computed: true, optional: true, required: false
  private _rootSquashEnabled?: boolean;
  public get rootSquashEnabled() {
    return this.getBooleanAttribute('root_squash_enabled');
  }
  public set rootSquashEnabled(value: boolean) {
    this._rootSquashEnabled = value;
  }
  public resetRootSquashEnabled() {
    this._rootSquashEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSquashEnabledInput() {
    return this._rootSquashEnabled
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HpcCacheTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HpcCacheTimeouts ) {
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
      cache_size_in_gb: this._cacheSizeInGb,
      location: this._location,
      mtu: this._mtu,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      root_squash_enabled: this._rootSquashEnabled,
      sku_name: this._skuName,
      subnet_id: this._subnetId,
      timeouts: this._timeouts,
    };
  }
}
