// https://www.terraform.io/docs/providers/azurerm/r/disk_encryption_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DiskEncryptionSetConfig extends TerraformMetaArguments {
  readonly keyVaultKeyId: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** identity block */
  readonly identity: DiskEncryptionSetIdentity[];
  /** timeouts block */
  readonly timeouts?: DiskEncryptionSetTimeouts;
}
export interface DiskEncryptionSetIdentity {
  readonly type: string;
}
export interface DiskEncryptionSetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DiskEncryptionSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DiskEncryptionSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_disk_encryption_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyVaultKeyId = config.keyVaultKeyId;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._identity = config.identity;
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

  // key_vault_key_id - computed: false, optional: false, required: true
  private _keyVaultKeyId: string;
  public get keyVaultKeyId() {
    return this._keyVaultKeyId;
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
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

  // identity - computed: false, optional: false, required: true
  private _identity: DiskEncryptionSetIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: DiskEncryptionSetIdentity[]) {
    this._identity = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DiskEncryptionSetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DiskEncryptionSetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      key_vault_key_id: this._keyVaultKeyId,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      identity: this._identity,
      timeouts: this._timeouts,
    };
  }
}
