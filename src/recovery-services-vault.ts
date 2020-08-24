// https://www.terraform.io/docs/providers/azurerm/r/recovery_services_vault.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RecoveryServicesVaultConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sku: string;
  readonly softDeleteEnabled?: boolean;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: RecoveryServicesVaultTimeouts;
}
export interface RecoveryServicesVaultTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class RecoveryServicesVault extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RecoveryServicesVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_recovery_services_vault',
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
    this._softDeleteEnabled = config.softDeleteEnabled;
    this._tags = config.tags;
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

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string) {
    this._sku = value;
  }

  // soft_delete_enabled - computed: false, optional: true, required: false
  private _softDeleteEnabled?: boolean;
  public get softDeleteEnabled() {
    return this._softDeleteEnabled;
  }
  public set softDeleteEnabled(value: boolean | undefined) {
    this._softDeleteEnabled = value;
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
  private _timeouts?: RecoveryServicesVaultTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: RecoveryServicesVaultTimeouts | undefined) {
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
      soft_delete_enabled: this._softDeleteEnabled,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
