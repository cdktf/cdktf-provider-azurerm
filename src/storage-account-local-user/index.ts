// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageAccountLocalUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#home_directory StorageAccountLocalUser#home_directory}
  */
  readonly homeDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#id StorageAccountLocalUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#name StorageAccountLocalUser#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#ssh_key_enabled StorageAccountLocalUser#ssh_key_enabled}
  */
  readonly sshKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#ssh_password_enabled StorageAccountLocalUser#ssh_password_enabled}
  */
  readonly sshPasswordEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#storage_account_id StorageAccountLocalUser#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * permission_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#permission_scope StorageAccountLocalUser#permission_scope}
  */
  readonly permissionScope?: StorageAccountLocalUserPermissionScope[] | cdktf.IResolvable;
  /**
  * ssh_authorized_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#ssh_authorized_key StorageAccountLocalUser#ssh_authorized_key}
  */
  readonly sshAuthorizedKey?: StorageAccountLocalUserSshAuthorizedKey[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#timeouts StorageAccountLocalUser#timeouts}
  */
  readonly timeouts?: StorageAccountLocalUserTimeouts;
}
export interface StorageAccountLocalUserPermissionScopePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#list StorageAccountLocalUser#list}
  */
  readonly list?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}
  */
  readonly read?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#write StorageAccountLocalUser#write}
  */
  readonly write?: boolean | cdktf.IResolvable;
}

export function storageAccountLocalUserPermissionScopePermissionsToTerraform(struct?: StorageAccountLocalUserPermissionScopePermissionsOutputReference | StorageAccountLocalUserPermissionScopePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    delete: cdktf.booleanToTerraform(struct!.delete),
    list: cdktf.booleanToTerraform(struct!.list),
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function storageAccountLocalUserPermissionScopePermissionsToHclTerraform(struct?: StorageAccountLocalUserPermissionScopePermissionsOutputReference | StorageAccountLocalUserPermissionScopePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete: {
      value: cdktf.booleanToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    list: {
      value: cdktf.booleanToHclTerraform(struct!.list),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountLocalUserPermissionScopePermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountLocalUserPermissionScopePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountLocalUserPermissionScopePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._list = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._list = value.list;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // list - computed: false, optional: true, required: false
  private _list?: boolean | cdktf.IResolvable; 
  public get list() {
    return this.getBooleanAttribute('list');
  }
  public set list(value: boolean | cdktf.IResolvable) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // read - computed: false, optional: true, required: false
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: true, required: false
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  public resetWrite() {
    this._write = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface StorageAccountLocalUserPermissionScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#resource_name StorageAccountLocalUser#resource_name}
  */
  readonly resourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#service StorageAccountLocalUser#service}
  */
  readonly service: string;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#permissions StorageAccountLocalUser#permissions}
  */
  readonly permissions: StorageAccountLocalUserPermissionScopePermissions;
}

export function storageAccountLocalUserPermissionScopeToTerraform(struct?: StorageAccountLocalUserPermissionScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    service: cdktf.stringToTerraform(struct!.service),
    permissions: storageAccountLocalUserPermissionScopePermissionsToTerraform(struct!.permissions),
  }
}


export function storageAccountLocalUserPermissionScopeToHclTerraform(struct?: StorageAccountLocalUserPermissionScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: storageAccountLocalUserPermissionScopePermissionsToHclTerraform(struct!.permissions),
      isBlock: true,
      type: "list",
      storageClassType: "StorageAccountLocalUserPermissionScopePermissionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountLocalUserPermissionScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StorageAccountLocalUserPermissionScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountLocalUserPermissionScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceName = undefined;
      this._service = undefined;
      this._permissions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceName = value.resourceName;
      this._service = value.service;
      this._permissions.internalValue = value.permissions;
    }
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions = new StorageAccountLocalUserPermissionScopePermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: StorageAccountLocalUserPermissionScopePermissions) {
    this._permissions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }
}

export class StorageAccountLocalUserPermissionScopeList extends cdktf.ComplexList {
  public internalValue? : StorageAccountLocalUserPermissionScope[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StorageAccountLocalUserPermissionScopeOutputReference {
    return new StorageAccountLocalUserPermissionScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageAccountLocalUserSshAuthorizedKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#description StorageAccountLocalUser#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#key StorageAccountLocalUser#key}
  */
  readonly key: string;
}

export function storageAccountLocalUserSshAuthorizedKeyToTerraform(struct?: StorageAccountLocalUserSshAuthorizedKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function storageAccountLocalUserSshAuthorizedKeyToHclTerraform(struct?: StorageAccountLocalUserSshAuthorizedKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountLocalUserSshAuthorizedKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StorageAccountLocalUserSshAuthorizedKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountLocalUserSshAuthorizedKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._key = value.key;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class StorageAccountLocalUserSshAuthorizedKeyList extends cdktf.ComplexList {
  public internalValue? : StorageAccountLocalUserSshAuthorizedKey[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StorageAccountLocalUserSshAuthorizedKeyOutputReference {
    return new StorageAccountLocalUserSshAuthorizedKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageAccountLocalUserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#update StorageAccountLocalUser#update}
  */
  readonly update?: string;
}

export function storageAccountLocalUserTimeoutsToTerraform(struct?: StorageAccountLocalUserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function storageAccountLocalUserTimeoutsToHclTerraform(struct?: StorageAccountLocalUserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountLocalUserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageAccountLocalUserTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountLocalUserTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user azurerm_storage_account_local_user}
*/
export class StorageAccountLocalUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_storage_account_local_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageAccountLocalUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageAccountLocalUser to import
  * @param importFromId The id of the existing StorageAccountLocalUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageAccountLocalUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_storage_account_local_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_local_user azurerm_storage_account_local_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageAccountLocalUserConfig
  */
  public constructor(scope: Construct, id: string, config: StorageAccountLocalUserConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account_local_user',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._homeDirectory = config.homeDirectory;
    this._id = config.id;
    this._name = config.name;
    this._sshKeyEnabled = config.sshKeyEnabled;
    this._sshPasswordEnabled = config.sshPasswordEnabled;
    this._storageAccountId = config.storageAccountId;
    this._permissionScope.internalValue = config.permissionScope;
    this._sshAuthorizedKey.internalValue = config.sshAuthorizedKey;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // home_directory - computed: false, optional: true, required: false
  private _homeDirectory?: string; 
  public get homeDirectory() {
    return this.getStringAttribute('home_directory');
  }
  public set homeDirectory(value: string) {
    this._homeDirectory = value;
  }
  public resetHomeDirectory() {
    this._homeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryInput() {
    return this._homeDirectory;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._name;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // ssh_key_enabled - computed: false, optional: true, required: false
  private _sshKeyEnabled?: boolean | cdktf.IResolvable; 
  public get sshKeyEnabled() {
    return this.getBooleanAttribute('ssh_key_enabled');
  }
  public set sshKeyEnabled(value: boolean | cdktf.IResolvable) {
    this._sshKeyEnabled = value;
  }
  public resetSshKeyEnabled() {
    this._sshKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyEnabledInput() {
    return this._sshKeyEnabled;
  }

  // ssh_password_enabled - computed: false, optional: true, required: false
  private _sshPasswordEnabled?: boolean | cdktf.IResolvable; 
  public get sshPasswordEnabled() {
    return this.getBooleanAttribute('ssh_password_enabled');
  }
  public set sshPasswordEnabled(value: boolean | cdktf.IResolvable) {
    this._sshPasswordEnabled = value;
  }
  public resetSshPasswordEnabled() {
    this._sshPasswordEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPasswordEnabledInput() {
    return this._sshPasswordEnabled;
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // permission_scope - computed: false, optional: true, required: false
  private _permissionScope = new StorageAccountLocalUserPermissionScopeList(this, "permission_scope", false);
  public get permissionScope() {
    return this._permissionScope;
  }
  public putPermissionScope(value: StorageAccountLocalUserPermissionScope[] | cdktf.IResolvable) {
    this._permissionScope.internalValue = value;
  }
  public resetPermissionScope() {
    this._permissionScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionScopeInput() {
    return this._permissionScope.internalValue;
  }

  // ssh_authorized_key - computed: false, optional: true, required: false
  private _sshAuthorizedKey = new StorageAccountLocalUserSshAuthorizedKeyList(this, "ssh_authorized_key", false);
  public get sshAuthorizedKey() {
    return this._sshAuthorizedKey;
  }
  public putSshAuthorizedKey(value: StorageAccountLocalUserSshAuthorizedKey[] | cdktf.IResolvable) {
    this._sshAuthorizedKey.internalValue = value;
  }
  public resetSshAuthorizedKey() {
    this._sshAuthorizedKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthorizedKeyInput() {
    return this._sshAuthorizedKey.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageAccountLocalUserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageAccountLocalUserTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      home_directory: cdktf.stringToTerraform(this._homeDirectory),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ssh_key_enabled: cdktf.booleanToTerraform(this._sshKeyEnabled),
      ssh_password_enabled: cdktf.booleanToTerraform(this._sshPasswordEnabled),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      permission_scope: cdktf.listMapper(storageAccountLocalUserPermissionScopeToTerraform, true)(this._permissionScope.internalValue),
      ssh_authorized_key: cdktf.listMapper(storageAccountLocalUserSshAuthorizedKeyToTerraform, true)(this._sshAuthorizedKey.internalValue),
      timeouts: storageAccountLocalUserTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      home_directory: {
        value: cdktf.stringToHclTerraform(this._homeDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_enabled: {
        value: cdktf.booleanToHclTerraform(this._sshKeyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_password_enabled: {
        value: cdktf.booleanToHclTerraform(this._sshPasswordEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_account_id: {
        value: cdktf.stringToHclTerraform(this._storageAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_scope: {
        value: cdktf.listMapperHcl(storageAccountLocalUserPermissionScopeToHclTerraform, true)(this._permissionScope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountLocalUserPermissionScopeList",
      },
      ssh_authorized_key: {
        value: cdktf.listMapperHcl(storageAccountLocalUserSshAuthorizedKeyToHclTerraform, true)(this._sshAuthorizedKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountLocalUserSshAuthorizedKeyList",
      },
      timeouts: {
        value: storageAccountLocalUserTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageAccountLocalUserTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
