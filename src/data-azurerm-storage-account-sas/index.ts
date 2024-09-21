// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermStorageAccountSasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#connection_string DataAzurermStorageAccountSas#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#expiry DataAzurermStorageAccountSas#expiry}
  */
  readonly expiry: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#https_only DataAzurermStorageAccountSas#https_only}
  */
  readonly httpsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#id DataAzurermStorageAccountSas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#ip_addresses DataAzurermStorageAccountSas#ip_addresses}
  */
  readonly ipAddresses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#signed_version DataAzurermStorageAccountSas#signed_version}
  */
  readonly signedVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#start DataAzurermStorageAccountSas#start}
  */
  readonly start: string;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#permissions DataAzurermStorageAccountSas#permissions}
  */
  readonly permissions: DataAzurermStorageAccountSasPermissions;
  /**
  * resource_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#resource_types DataAzurermStorageAccountSas#resource_types}
  */
  readonly resourceTypes: DataAzurermStorageAccountSasResourceTypes;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#services DataAzurermStorageAccountSas#services}
  */
  readonly services: DataAzurermStorageAccountSasServices;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#timeouts DataAzurermStorageAccountSas#timeouts}
  */
  readonly timeouts?: DataAzurermStorageAccountSasTimeouts;
}
export interface DataAzurermStorageAccountSasPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#add DataAzurermStorageAccountSas#add}
  */
  readonly add: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#create DataAzurermStorageAccountSas#create}
  */
  readonly create: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#delete DataAzurermStorageAccountSas#delete}
  */
  readonly delete: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#filter DataAzurermStorageAccountSas#filter}
  */
  readonly filter: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#list DataAzurermStorageAccountSas#list}
  */
  readonly list: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#process DataAzurermStorageAccountSas#process}
  */
  readonly process: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#tag DataAzurermStorageAccountSas#tag}
  */
  readonly tag: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#update DataAzurermStorageAccountSas#update}
  */
  readonly update: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#write DataAzurermStorageAccountSas#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function dataAzurermStorageAccountSasPermissionsToTerraform(struct?: DataAzurermStorageAccountSasPermissionsOutputReference | DataAzurermStorageAccountSasPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.booleanToTerraform(struct!.add),
    create: cdktf.booleanToTerraform(struct!.create),
    delete: cdktf.booleanToTerraform(struct!.delete),
    filter: cdktf.booleanToTerraform(struct!.filter),
    list: cdktf.booleanToTerraform(struct!.list),
    process: cdktf.booleanToTerraform(struct!.process),
    read: cdktf.booleanToTerraform(struct!.read),
    tag: cdktf.booleanToTerraform(struct!.tag),
    update: cdktf.booleanToTerraform(struct!.update),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function dataAzurermStorageAccountSasPermissionsToHclTerraform(struct?: DataAzurermStorageAccountSasPermissionsOutputReference | DataAzurermStorageAccountSasPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.booleanToHclTerraform(struct!.add),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    filter: {
      value: cdktf.booleanToHclTerraform(struct!.filter),
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
    process: {
      value: cdktf.booleanToHclTerraform(struct!.process),
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
    tag: {
      value: cdktf.booleanToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update: {
      value: cdktf.booleanToHclTerraform(struct!.update),
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

export class DataAzurermStorageAccountSasPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAzurermStorageAccountSasPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._process !== undefined) {
      hasAnyValues = true;
      internalValueResult.process = this._process;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageAccountSasPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._add = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._filter = undefined;
      this._list = undefined;
      this._process = undefined;
      this._read = undefined;
      this._tag = undefined;
      this._update = undefined;
      this._write = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._add = value.add;
      this._create = value.create;
      this._delete = value.delete;
      this._filter = value.filter;
      this._list = value.list;
      this._process = value.process;
      this._read = value.read;
      this._tag = value.tag;
      this._update = value.update;
      this._write = value.write;
    }
  }

  // add - computed: false, optional: false, required: true
  private _add?: boolean | cdktf.IResolvable; 
  public get add() {
    return this.getBooleanAttribute('add');
  }
  public set add(value: boolean | cdktf.IResolvable) {
    this._add = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // create - computed: false, optional: false, required: true
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: false, required: true
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: boolean | cdktf.IResolvable; 
  public get filter() {
    return this.getBooleanAttribute('filter');
  }
  public set filter(value: boolean | cdktf.IResolvable) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // list - computed: false, optional: false, required: true
  private _list?: boolean | cdktf.IResolvable; 
  public get list() {
    return this.getBooleanAttribute('list');
  }
  public set list(value: boolean | cdktf.IResolvable) {
    this._list = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // process - computed: false, optional: false, required: true
  private _process?: boolean | cdktf.IResolvable; 
  public get process() {
    return this.getBooleanAttribute('process');
  }
  public set process(value: boolean | cdktf.IResolvable) {
    this._process = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processInput() {
    return this._process;
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: boolean | cdktf.IResolvable; 
  public get tag() {
    return this.getBooleanAttribute('tag');
  }
  public set tag(value: boolean | cdktf.IResolvable) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // update - computed: false, optional: false, required: true
  private _update?: boolean | cdktf.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktf.IResolvable) {
    this._update = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface DataAzurermStorageAccountSasResourceTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#container DataAzurermStorageAccountSas#container}
  */
  readonly container: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#object DataAzurermStorageAccountSas#object}
  */
  readonly object: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#service DataAzurermStorageAccountSas#service}
  */
  readonly service: boolean | cdktf.IResolvable;
}

export function dataAzurermStorageAccountSasResourceTypesToTerraform(struct?: DataAzurermStorageAccountSasResourceTypesOutputReference | DataAzurermStorageAccountSasResourceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.booleanToTerraform(struct!.container),
    object: cdktf.booleanToTerraform(struct!.object),
    service: cdktf.booleanToTerraform(struct!.service),
  }
}


export function dataAzurermStorageAccountSasResourceTypesToHclTerraform(struct?: DataAzurermStorageAccountSasResourceTypesOutputReference | DataAzurermStorageAccountSasResourceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.booleanToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object: {
      value: cdktf.booleanToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service: {
      value: cdktf.booleanToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermStorageAccountSasResourceTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAzurermStorageAccountSasResourceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageAccountSasResourceTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container = undefined;
      this._object = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container = value.container;
      this._object = value.object;
      this._service = value.service;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: boolean | cdktf.IResolvable; 
  public get container() {
    return this.getBooleanAttribute('container');
  }
  public set container(value: boolean | cdktf.IResolvable) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // object - computed: false, optional: false, required: true
  private _object?: boolean | cdktf.IResolvable; 
  public get object() {
    return this.getBooleanAttribute('object');
  }
  public set object(value: boolean | cdktf.IResolvable) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // service - computed: false, optional: false, required: true
  private _service?: boolean | cdktf.IResolvable; 
  public get service() {
    return this.getBooleanAttribute('service');
  }
  public set service(value: boolean | cdktf.IResolvable) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataAzurermStorageAccountSasServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#blob DataAzurermStorageAccountSas#blob}
  */
  readonly blob: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#file DataAzurermStorageAccountSas#file}
  */
  readonly file: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#queue DataAzurermStorageAccountSas#queue}
  */
  readonly queue: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#table DataAzurermStorageAccountSas#table}
  */
  readonly table: boolean | cdktf.IResolvable;
}

export function dataAzurermStorageAccountSasServicesToTerraform(struct?: DataAzurermStorageAccountSasServicesOutputReference | DataAzurermStorageAccountSasServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob: cdktf.booleanToTerraform(struct!.blob),
    file: cdktf.booleanToTerraform(struct!.file),
    queue: cdktf.booleanToTerraform(struct!.queue),
    table: cdktf.booleanToTerraform(struct!.table),
  }
}


export function dataAzurermStorageAccountSasServicesToHclTerraform(struct?: DataAzurermStorageAccountSasServicesOutputReference | DataAzurermStorageAccountSasServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blob: {
      value: cdktf.booleanToHclTerraform(struct!.blob),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file: {
      value: cdktf.booleanToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    queue: {
      value: cdktf.booleanToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    table: {
      value: cdktf.booleanToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermStorageAccountSasServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAzurermStorageAccountSasServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blob !== undefined) {
      hasAnyValues = true;
      internalValueResult.blob = this._blob;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageAccountSasServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blob = undefined;
      this._file = undefined;
      this._queue = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blob = value.blob;
      this._file = value.file;
      this._queue = value.queue;
      this._table = value.table;
    }
  }

  // blob - computed: false, optional: false, required: true
  private _blob?: boolean | cdktf.IResolvable; 
  public get blob() {
    return this.getBooleanAttribute('blob');
  }
  public set blob(value: boolean | cdktf.IResolvable) {
    this._blob = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blobInput() {
    return this._blob;
  }

  // file - computed: false, optional: false, required: true
  private _file?: boolean | cdktf.IResolvable; 
  public get file() {
    return this.getBooleanAttribute('file');
  }
  public set file(value: boolean | cdktf.IResolvable) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // queue - computed: false, optional: false, required: true
  private _queue?: boolean | cdktf.IResolvable; 
  public get queue() {
    return this.getBooleanAttribute('queue');
  }
  public set queue(value: boolean | cdktf.IResolvable) {
    this._queue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // table - computed: false, optional: false, required: true
  private _table?: boolean | cdktf.IResolvable; 
  public get table() {
    return this.getBooleanAttribute('table');
  }
  public set table(value: boolean | cdktf.IResolvable) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface DataAzurermStorageAccountSasTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}
  */
  readonly read?: string;
}

export function dataAzurermStorageAccountSasTimeoutsToTerraform(struct?: DataAzurermStorageAccountSasTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermStorageAccountSasTimeoutsToHclTerraform(struct?: DataAzurermStorageAccountSasTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermStorageAccountSasTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermStorageAccountSasTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageAccountSasTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas azurerm_storage_account_sas}
*/
export class DataAzurermStorageAccountSas extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_storage_account_sas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermStorageAccountSas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermStorageAccountSas to import
  * @param importFromId The id of the existing DataAzurermStorageAccountSas that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermStorageAccountSas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_storage_account_sas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account_sas azurerm_storage_account_sas} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermStorageAccountSasConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermStorageAccountSasConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account_sas',
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
    this._connectionString = config.connectionString;
    this._expiry = config.expiry;
    this._httpsOnly = config.httpsOnly;
    this._id = config.id;
    this._ipAddresses = config.ipAddresses;
    this._signedVersion = config.signedVersion;
    this._start = config.start;
    this._permissions.internalValue = config.permissions;
    this._resourceTypes.internalValue = config.resourceTypes;
    this._services.internalValue = config.services;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // expiry - computed: false, optional: false, required: true
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // https_only - computed: false, optional: true, required: false
  private _httpsOnly?: boolean | cdktf.IResolvable; 
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only');
  }
  public set httpsOnly(value: boolean | cdktf.IResolvable) {
    this._httpsOnly = value;
  }
  public resetHttpsOnly() {
    this._httpsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsOnlyInput() {
    return this._httpsOnly;
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

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string; 
  public get ipAddresses() {
    return this.getStringAttribute('ip_addresses');
  }
  public set ipAddresses(value: string) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // sas - computed: true, optional: false, required: false
  public get sas() {
    return this.getStringAttribute('sas');
  }

  // signed_version - computed: false, optional: true, required: false
  private _signedVersion?: string; 
  public get signedVersion() {
    return this.getStringAttribute('signed_version');
  }
  public set signedVersion(value: string) {
    this._signedVersion = value;
  }
  public resetSignedVersion() {
    this._signedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedVersionInput() {
    return this._signedVersion;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions = new DataAzurermStorageAccountSasPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: DataAzurermStorageAccountSasPermissions) {
    this._permissions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes = new DataAzurermStorageAccountSasResourceTypesOutputReference(this, "resource_types");
  public get resourceTypes() {
    return this._resourceTypes;
  }
  public putResourceTypes(value: DataAzurermStorageAccountSasResourceTypes) {
    this._resourceTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes.internalValue;
  }

  // services - computed: false, optional: false, required: true
  private _services = new DataAzurermStorageAccountSasServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: DataAzurermStorageAccountSasServices) {
    this._services.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermStorageAccountSasTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermStorageAccountSasTimeouts) {
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
      connection_string: cdktf.stringToTerraform(this._connectionString),
      expiry: cdktf.stringToTerraform(this._expiry),
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      id: cdktf.stringToTerraform(this._id),
      ip_addresses: cdktf.stringToTerraform(this._ipAddresses),
      signed_version: cdktf.stringToTerraform(this._signedVersion),
      start: cdktf.stringToTerraform(this._start),
      permissions: dataAzurermStorageAccountSasPermissionsToTerraform(this._permissions.internalValue),
      resource_types: dataAzurermStorageAccountSasResourceTypesToTerraform(this._resourceTypes.internalValue),
      services: dataAzurermStorageAccountSasServicesToTerraform(this._services.internalValue),
      timeouts: dataAzurermStorageAccountSasTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_string: {
        value: cdktf.stringToHclTerraform(this._connectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry: {
        value: cdktf.stringToHclTerraform(this._expiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_only: {
        value: cdktf.booleanToHclTerraform(this._httpsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_addresses: {
        value: cdktf.stringToHclTerraform(this._ipAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signed_version: {
        value: cdktf.stringToHclTerraform(this._signedVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start: {
        value: cdktf.stringToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: dataAzurermStorageAccountSasPermissionsToHclTerraform(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAzurermStorageAccountSasPermissionsList",
      },
      resource_types: {
        value: dataAzurermStorageAccountSasResourceTypesToHclTerraform(this._resourceTypes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAzurermStorageAccountSasResourceTypesList",
      },
      services: {
        value: dataAzurermStorageAccountSasServicesToHclTerraform(this._services.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAzurermStorageAccountSasServicesList",
      },
      timeouts: {
        value: dataAzurermStorageAccountSasTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermStorageAccountSasTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
