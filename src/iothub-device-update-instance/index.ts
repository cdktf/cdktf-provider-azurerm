// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IothubDeviceUpdateInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#device_update_account_id IothubDeviceUpdateInstance#device_update_account_id}
  */
  readonly deviceUpdateAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#diagnostic_enabled IothubDeviceUpdateInstance#diagnostic_enabled}
  */
  readonly diagnosticEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#iothub_id IothubDeviceUpdateInstance#iothub_id}
  */
  readonly iothubId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#name IothubDeviceUpdateInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#tags IothubDeviceUpdateInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * diagnostic_storage_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#diagnostic_storage_account IothubDeviceUpdateInstance#diagnostic_storage_account}
  */
  readonly diagnosticStorageAccount?: IothubDeviceUpdateInstanceDiagnosticStorageAccount;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#timeouts IothubDeviceUpdateInstance#timeouts}
  */
  readonly timeouts?: IothubDeviceUpdateInstanceTimeouts;
}
export interface IothubDeviceUpdateInstanceDiagnosticStorageAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#connection_string IothubDeviceUpdateInstance#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function iothubDeviceUpdateInstanceDiagnosticStorageAccountToTerraform(struct?: IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference | IothubDeviceUpdateInstanceDiagnosticStorageAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function iothubDeviceUpdateInstanceDiagnosticStorageAccountToHclTerraform(struct?: IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference | IothubDeviceUpdateInstanceDiagnosticStorageAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_string: {
      value: cdktf.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IothubDeviceUpdateInstanceDiagnosticStorageAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubDeviceUpdateInstanceDiagnosticStorageAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionString = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionString = value.connectionString;
      this._id = value.id;
    }
  }

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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface IothubDeviceUpdateInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#create IothubDeviceUpdateInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#delete IothubDeviceUpdateInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#read IothubDeviceUpdateInstance#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#update IothubDeviceUpdateInstance#update}
  */
  readonly update?: string;
}

export function iothubDeviceUpdateInstanceTimeoutsToTerraform(struct?: IothubDeviceUpdateInstanceTimeouts | cdktf.IResolvable): any {
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


export function iothubDeviceUpdateInstanceTimeoutsToHclTerraform(struct?: IothubDeviceUpdateInstanceTimeouts | cdktf.IResolvable): any {
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

export class IothubDeviceUpdateInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IothubDeviceUpdateInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IothubDeviceUpdateInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance azurerm_iothub_device_update_instance}
*/
export class IothubDeviceUpdateInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_iothub_device_update_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IothubDeviceUpdateInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IothubDeviceUpdateInstance to import
  * @param importFromId The id of the existing IothubDeviceUpdateInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IothubDeviceUpdateInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_iothub_device_update_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_device_update_instance azurerm_iothub_device_update_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IothubDeviceUpdateInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: IothubDeviceUpdateInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_device_update_instance',
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
    this._deviceUpdateAccountId = config.deviceUpdateAccountId;
    this._diagnosticEnabled = config.diagnosticEnabled;
    this._id = config.id;
    this._iothubId = config.iothubId;
    this._name = config.name;
    this._tags = config.tags;
    this._diagnosticStorageAccount.internalValue = config.diagnosticStorageAccount;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_update_account_id - computed: false, optional: false, required: true
  private _deviceUpdateAccountId?: string; 
  public get deviceUpdateAccountId() {
    return this.getStringAttribute('device_update_account_id');
  }
  public set deviceUpdateAccountId(value: string) {
    this._deviceUpdateAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUpdateAccountIdInput() {
    return this._deviceUpdateAccountId;
  }

  // diagnostic_enabled - computed: false, optional: true, required: false
  private _diagnosticEnabled?: boolean | cdktf.IResolvable; 
  public get diagnosticEnabled() {
    return this.getBooleanAttribute('diagnostic_enabled');
  }
  public set diagnosticEnabled(value: boolean | cdktf.IResolvable) {
    this._diagnosticEnabled = value;
  }
  public resetDiagnosticEnabled() {
    this._diagnosticEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticEnabledInput() {
    return this._diagnosticEnabled;
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

  // iothub_id - computed: false, optional: false, required: true
  private _iothubId?: string; 
  public get iothubId() {
    return this.getStringAttribute('iothub_id');
  }
  public set iothubId(value: string) {
    this._iothubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubIdInput() {
    return this._iothubId;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // diagnostic_storage_account - computed: false, optional: true, required: false
  private _diagnosticStorageAccount = new IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference(this, "diagnostic_storage_account");
  public get diagnosticStorageAccount() {
    return this._diagnosticStorageAccount;
  }
  public putDiagnosticStorageAccount(value: IothubDeviceUpdateInstanceDiagnosticStorageAccount) {
    this._diagnosticStorageAccount.internalValue = value;
  }
  public resetDiagnosticStorageAccount() {
    this._diagnosticStorageAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticStorageAccountInput() {
    return this._diagnosticStorageAccount.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IothubDeviceUpdateInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IothubDeviceUpdateInstanceTimeouts) {
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
      device_update_account_id: cdktf.stringToTerraform(this._deviceUpdateAccountId),
      diagnostic_enabled: cdktf.booleanToTerraform(this._diagnosticEnabled),
      id: cdktf.stringToTerraform(this._id),
      iothub_id: cdktf.stringToTerraform(this._iothubId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      diagnostic_storage_account: iothubDeviceUpdateInstanceDiagnosticStorageAccountToTerraform(this._diagnosticStorageAccount.internalValue),
      timeouts: iothubDeviceUpdateInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_update_account_id: {
        value: cdktf.stringToHclTerraform(this._deviceUpdateAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diagnostic_enabled: {
        value: cdktf.booleanToHclTerraform(this._diagnosticEnabled),
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
      iothub_id: {
        value: cdktf.stringToHclTerraform(this._iothubId),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      diagnostic_storage_account: {
        value: iothubDeviceUpdateInstanceDiagnosticStorageAccountToHclTerraform(this._diagnosticStorageAccount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IothubDeviceUpdateInstanceDiagnosticStorageAccountList",
      },
      timeouts: {
        value: iothubDeviceUpdateInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IothubDeviceUpdateInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
