// https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaServicesAccountConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly storageAuthenticationType?: string;
  readonly tags?: { [key: string]: string };
  /** identity block */
  readonly identity?: MediaServicesAccountIdentity[];
  /** storage_account block */
  readonly storageAccount: MediaServicesAccountStorageAccount[];
  /** timeouts block */
  readonly timeouts?: MediaServicesAccountTimeouts;
}
export interface MediaServicesAccountIdentity {
  readonly type?: string;
}

function mediaServicesAccountIdentityToTerraform(struct?: MediaServicesAccountIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface MediaServicesAccountStorageAccount {
  readonly id: string;
  readonly isPrimary?: boolean;
}

function mediaServicesAccountStorageAccountToTerraform(struct?: MediaServicesAccountStorageAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
  }
}

export interface MediaServicesAccountTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function mediaServicesAccountTimeoutsToTerraform(struct?: MediaServicesAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MediaServicesAccount extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MediaServicesAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_services_account',
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
    this._storageAuthenticationType = config.storageAuthenticationType;
    this._tags = config.tags;
    this._identity = config.identity;
    this._storageAccount = config.storageAccount;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // storage_authentication_type - computed: true, optional: true, required: false
  private _storageAuthenticationType?: string;
  public get storageAuthenticationType() {
    return this.getStringAttribute('storage_authentication_type');
  }
  public set storageAuthenticationType(value: string) {
    this._storageAuthenticationType = value;
  }
  public resetStorageAuthenticationType() {
    this._storageAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAuthenticationTypeInput() {
    return this._storageAuthenticationType
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

  // identity - computed: false, optional: true, required: false
  private _identity?: MediaServicesAccountIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: MediaServicesAccountIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // storage_account - computed: false, optional: false, required: true
  private _storageAccount: MediaServicesAccountStorageAccount[];
  public get storageAccount() {
    return this.interpolationForAttribute('storage_account') as any;
  }
  public set storageAccount(value: MediaServicesAccountStorageAccount[]) {
    this._storageAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MediaServicesAccountTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MediaServicesAccountTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_authentication_type: cdktf.stringToTerraform(this._storageAuthenticationType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      identity: cdktf.listMapper(mediaServicesAccountIdentityToTerraform)(this._identity),
      storage_account: cdktf.listMapper(mediaServicesAccountStorageAccountToTerraform)(this._storageAccount),
      timeouts: mediaServicesAccountTimeoutsToTerraform(this._timeouts),
    };
  }
}
