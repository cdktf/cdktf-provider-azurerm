// https://www.terraform.io/docs/providers/azurerm/r/dedicated_host.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DedicatedHostConfig extends TerraformMetaArguments {
  readonly autoReplaceOnFailure?: boolean;
  readonly dedicatedHostGroupId: string;
  readonly licenseType?: string;
  readonly location: string;
  readonly name: string;
  readonly platformFaultDomain: number;
  readonly skuName: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: DedicatedHostTimeouts;
}
export interface DedicatedHostTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DedicatedHost extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DedicatedHostConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dedicated_host',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoReplaceOnFailure = config.autoReplaceOnFailure;
    this._dedicatedHostGroupId = config.dedicatedHostGroupId;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._name = config.name;
    this._platformFaultDomain = config.platformFaultDomain;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_replace_on_failure - computed: false, optional: true, required: false
  private _autoReplaceOnFailure?: boolean;
  public get autoReplaceOnFailure() {
    return this._autoReplaceOnFailure;
  }
  public set autoReplaceOnFailure(value: boolean | undefined) {
    this._autoReplaceOnFailure = value;
  }

  // dedicated_host_group_id - computed: false, optional: false, required: true
  private _dedicatedHostGroupId: string;
  public get dedicatedHostGroupId() {
    return this._dedicatedHostGroupId;
  }
  public set dedicatedHostGroupId(value: string) {
    this._dedicatedHostGroupId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string;
  public get licenseType() {
    return this._licenseType;
  }
  public set licenseType(value: string | undefined) {
    this._licenseType = value;
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

  // platform_fault_domain - computed: false, optional: false, required: true
  private _platformFaultDomain: number;
  public get platformFaultDomain() {
    return this._platformFaultDomain;
  }
  public set platformFaultDomain(value: number) {
    this._platformFaultDomain = value;
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this._skuName;
  }
  public set skuName(value: string) {
    this._skuName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DedicatedHostTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DedicatedHostTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_replace_on_failure: this._autoReplaceOnFailure,
      dedicated_host_group_id: this._dedicatedHostGroupId,
      license_type: this._licenseType,
      location: this._location,
      name: this._name,
      platform_fault_domain: this._platformFaultDomain,
      sku_name: this._skuName,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
