// https://www.terraform.io/docs/providers/azurerm/r/storage_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#metadata StorageShare#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#name StorageShare#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#quota StorageShare#quota}
  */
  readonly quota?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#storage_account_name StorageShare#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * acl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#acl StorageShare#acl}
  */
  readonly acl?: StorageShareAcl[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#timeouts StorageShare#timeouts}
  */
  readonly timeouts?: StorageShareTimeouts;
}
export interface StorageShareAclAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#expiry StorageShare#expiry}
  */
  readonly expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#permissions StorageShare#permissions}
  */
  readonly permissions: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#start StorageShare#start}
  */
  readonly start?: string;
}

function storageShareAclAccessPolicyToTerraform(struct?: StorageShareAclAccessPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expiry: cdktf.stringToTerraform(struct!.expiry),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    start: cdktf.stringToTerraform(struct!.start),
  }
}

export interface StorageShareAcl {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#id StorageShare#id}
  */
  readonly id: string;
  /**
  * access_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#access_policy StorageShare#access_policy}
  */
  readonly accessPolicy?: StorageShareAclAccessPolicy[];
}

function storageShareAclToTerraform(struct?: StorageShareAcl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    access_policy: cdktf.listMapper(storageShareAclAccessPolicyToTerraform)(struct!.accessPolicy),
  }
}

export interface StorageShareTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#create StorageShare#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#delete StorageShare#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#read StorageShare#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html#update StorageShare#update}
  */
  readonly update?: string;
}

function storageShareTimeoutsToTerraform(struct?: StorageShareTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html azurerm_storage_share}
*/
export class StorageShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_share";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share.html azurerm_storage_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageShareConfig
  */
  public constructor(scope: Construct, id: string, config: StorageShareConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_share',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._name = config.name;
    this._quota = config.quota;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable
  public get metadata(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('metadata') as any; // Getting the computed value is not yet implemented
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // quota - computed: false, optional: true, required: false
  private _quota?: number;
  public get quota() {
    return this.getNumberAttribute('quota');
  }
  public set quota(value: number ) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota
  }

  // resource_manager_id - computed: true, optional: false, required: false
  public get resourceManagerId() {
    return this.getStringAttribute('resource_manager_id');
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: StorageShareAcl[];
  public get acl() {
    return this.interpolationForAttribute('acl') as any;
  }
  public set acl(value: StorageShareAcl[] ) {
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
  private _timeouts?: StorageShareTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageShareTimeouts ) {
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
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      quota: cdktf.numberToTerraform(this._quota),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      acl: cdktf.listMapper(storageShareAclToTerraform)(this._acl),
      timeouts: storageShareTimeoutsToTerraform(this._timeouts),
    };
  }
}
