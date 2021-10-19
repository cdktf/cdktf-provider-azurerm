// https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaServicesAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#location MediaServicesAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#name MediaServicesAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#resource_group_name MediaServicesAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#storage_authentication_type MediaServicesAccount#storage_authentication_type}
  */
  readonly storageAuthenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#tags MediaServicesAccount#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#identity MediaServicesAccount#identity}
  */
  readonly identity?: MediaServicesAccountIdentity;
  /**
  * key_delivery_access_control block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#key_delivery_access_control MediaServicesAccount#key_delivery_access_control}
  */
  readonly keyDeliveryAccessControl?: MediaServicesAccountKeyDeliveryAccessControl;
  /**
  * storage_account block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#storage_account MediaServicesAccount#storage_account}
  */
  readonly storageAccount: MediaServicesAccountStorageAccount[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#timeouts MediaServicesAccount#timeouts}
  */
  readonly timeouts?: MediaServicesAccountTimeouts;
}
export interface MediaServicesAccountIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#type MediaServicesAccount#type}
  */
  readonly type?: string;
}

function mediaServicesAccountIdentityToTerraform(struct?: MediaServicesAccountIdentityOutputReference | MediaServicesAccountIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class MediaServicesAccountIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface MediaServicesAccountKeyDeliveryAccessControl {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#default_action MediaServicesAccount#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#ip_allow_list MediaServicesAccount#ip_allow_list}
  */
  readonly ipAllowList?: string[];
}

function mediaServicesAccountKeyDeliveryAccessControlToTerraform(struct?: MediaServicesAccountKeyDeliveryAccessControlOutputReference | MediaServicesAccountKeyDeliveryAccessControl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_allow_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipAllowList),
  }
}

export class MediaServicesAccountKeyDeliveryAccessControlOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string | undefined; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string | undefined) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction
  }

  // ip_allow_list - computed: false, optional: true, required: false
  private _ipAllowList?: string[] | undefined; 
  public get ipAllowList() {
    return this.getListAttribute('ip_allow_list');
  }
  public set ipAllowList(value: string[] | undefined) {
    this._ipAllowList = value;
  }
  public resetIpAllowList() {
    this._ipAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowListInput() {
    return this._ipAllowList
  }
}
export interface MediaServicesAccountStorageAccount {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#id MediaServicesAccount#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#is_primary MediaServicesAccount#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
}

function mediaServicesAccountStorageAccountToTerraform(struct?: MediaServicesAccountStorageAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
  }
}

export interface MediaServicesAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#create MediaServicesAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#delete MediaServicesAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#read MediaServicesAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html#update MediaServicesAccount#update}
  */
  readonly update?: string;
}

function mediaServicesAccountTimeoutsToTerraform(struct?: MediaServicesAccountTimeoutsOutputReference | MediaServicesAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class MediaServicesAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html azurerm_media_services_account}
*/
export class MediaServicesAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_media_services_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account.html azurerm_media_services_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaServicesAccountConfig
  */
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
    this._keyDeliveryAccessControl = config.keyDeliveryAccessControl;
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
  private _location?: string; 
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
  private _name?: string; 
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
  private _resourceGroupName?: string; 
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
  private _storageAuthenticationType?: string | undefined; 
  public get storageAuthenticationType() {
    return this.getStringAttribute('storage_authentication_type');
  }
  public set storageAuthenticationType(value: string | undefined) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _identity?: MediaServicesAccountIdentity | undefined; 
  private __identityOutput = new MediaServicesAccountIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: MediaServicesAccountIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // key_delivery_access_control - computed: false, optional: true, required: false
  private _keyDeliveryAccessControl?: MediaServicesAccountKeyDeliveryAccessControl | undefined; 
  private __keyDeliveryAccessControlOutput = new MediaServicesAccountKeyDeliveryAccessControlOutputReference(this as any, "key_delivery_access_control", true);
  public get keyDeliveryAccessControl() {
    return this.__keyDeliveryAccessControlOutput;
  }
  public putKeyDeliveryAccessControl(value: MediaServicesAccountKeyDeliveryAccessControl | undefined) {
    this._keyDeliveryAccessControl = value;
  }
  public resetKeyDeliveryAccessControl() {
    this._keyDeliveryAccessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDeliveryAccessControlInput() {
    return this._keyDeliveryAccessControl
  }

  // storage_account - computed: false, optional: false, required: true
  private _storageAccount?: MediaServicesAccountStorageAccount[]; 
  public get storageAccount() {
    // Getting the computed value is not yet implemented
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
  private _timeouts?: MediaServicesAccountTimeouts | undefined; 
  private __timeoutsOutput = new MediaServicesAccountTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MediaServicesAccountTimeouts | undefined) {
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
      identity: mediaServicesAccountIdentityToTerraform(this._identity),
      key_delivery_access_control: mediaServicesAccountKeyDeliveryAccessControlToTerraform(this._keyDeliveryAccessControl),
      storage_account: cdktf.listMapper(mediaServicesAccountStorageAccountToTerraform)(this._storageAccount),
      timeouts: mediaServicesAccountTimeoutsToTerraform(this._timeouts),
    };
  }
}
