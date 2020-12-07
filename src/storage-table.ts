// https://www.terraform.io/docs/providers/azurerm/r/storage_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageTableConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly storageAccountName: string;
  /** acl block */
  readonly acl?: StorageTableAcl[];
  /** timeouts block */
  readonly timeouts?: StorageTableTimeouts;
}
export interface StorageTableAclAccessPolicy {
  readonly expiry: string;
  readonly permissions: string;
  readonly start: string;
}

function storageTableAclAccessPolicyToTerraform(struct?: StorageTableAclAccessPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expiry: cdktf.stringToTerraform(struct!.expiry),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    start: cdktf.stringToTerraform(struct!.start),
  }
}

export interface StorageTableAcl {
  readonly id: string;
  /** access_policy block */
  readonly accessPolicy?: StorageTableAclAccessPolicy[];
}

function storageTableAclToTerraform(struct?: StorageTableAcl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    access_policy: cdktf.listMapper(storageTableAclAccessPolicyToTerraform)(struct!.accessPolicy),
  }
}

export interface StorageTableTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function storageTableTimeoutsToTerraform(struct?: StorageTableTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class StorageTable extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageTableConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_table',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._storageAccountName = config.storageAccountName;
    this._acl = config.acl;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName: string;
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: StorageTableAcl[];
  public get acl() {
    return this.interpolationForAttribute('acl') as any;
  }
  public set acl(value: StorageTableAcl[] ) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageTableTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageTableTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      acl: cdktf.listMapper(storageTableAclToTerraform)(this._acl),
      timeouts: storageTableTimeoutsToTerraform(this._timeouts),
    };
  }
}
