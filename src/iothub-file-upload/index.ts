// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IothubFileUploadAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#authentication_type IothubFileUploadA#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#connection_string IothubFileUploadA#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#container_name IothubFileUploadA#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#default_ttl IothubFileUploadA#default_ttl}
  */
  readonly defaultTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#id IothubFileUploadA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#identity_id IothubFileUploadA#identity_id}
  */
  readonly identityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#iothub_id IothubFileUploadA#iothub_id}
  */
  readonly iothubId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#lock_duration IothubFileUploadA#lock_duration}
  */
  readonly lockDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#max_delivery_count IothubFileUploadA#max_delivery_count}
  */
  readonly maxDeliveryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#notifications_enabled IothubFileUploadA#notifications_enabled}
  */
  readonly notificationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#sas_ttl IothubFileUploadA#sas_ttl}
  */
  readonly sasTtl?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#timeouts IothubFileUploadA#timeouts}
  */
  readonly timeouts?: IothubFileUploadTimeouts;
}
export interface IothubFileUploadTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#create IothubFileUploadA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#delete IothubFileUploadA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#read IothubFileUploadA#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#update IothubFileUploadA#update}
  */
  readonly update?: string;
}

export function iothubFileUploadTimeoutsToTerraform(struct?: IothubFileUploadTimeouts | cdktf.IResolvable): any {
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


export function iothubFileUploadTimeoutsToHclTerraform(struct?: IothubFileUploadTimeouts | cdktf.IResolvable): any {
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

export class IothubFileUploadTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IothubFileUploadTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IothubFileUploadTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload azurerm_iothub_file_upload}
*/
export class IothubFileUploadA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_iothub_file_upload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IothubFileUploadA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IothubFileUploadA to import
  * @param importFromId The id of the existing IothubFileUploadA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IothubFileUploadA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_iothub_file_upload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_file_upload azurerm_iothub_file_upload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IothubFileUploadAConfig
  */
  public constructor(scope: Construct, id: string, config: IothubFileUploadAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_file_upload',
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
    this._authenticationType = config.authenticationType;
    this._connectionString = config.connectionString;
    this._containerName = config.containerName;
    this._defaultTtl = config.defaultTtl;
    this._id = config.id;
    this._identityId = config.identityId;
    this._iothubId = config.iothubId;
    this._lockDuration = config.lockDuration;
    this._maxDeliveryCount = config.maxDeliveryCount;
    this._notificationsEnabled = config.notificationsEnabled;
    this._sasTtl = config.sasTtl;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
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

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: string; 
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }
  public set defaultTtl(value: string) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
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

  // identity_id - computed: false, optional: true, required: false
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  public resetIdentityId() {
    this._identityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
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

  // lock_duration - computed: false, optional: true, required: false
  private _lockDuration?: string; 
  public get lockDuration() {
    return this.getStringAttribute('lock_duration');
  }
  public set lockDuration(value: string) {
    this._lockDuration = value;
  }
  public resetLockDuration() {
    this._lockDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockDurationInput() {
    return this._lockDuration;
  }

  // max_delivery_count - computed: false, optional: true, required: false
  private _maxDeliveryCount?: number; 
  public get maxDeliveryCount() {
    return this.getNumberAttribute('max_delivery_count');
  }
  public set maxDeliveryCount(value: number) {
    this._maxDeliveryCount = value;
  }
  public resetMaxDeliveryCount() {
    this._maxDeliveryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryCountInput() {
    return this._maxDeliveryCount;
  }

  // notifications_enabled - computed: false, optional: true, required: false
  private _notificationsEnabled?: boolean | cdktf.IResolvable; 
  public get notificationsEnabled() {
    return this.getBooleanAttribute('notifications_enabled');
  }
  public set notificationsEnabled(value: boolean | cdktf.IResolvable) {
    this._notificationsEnabled = value;
  }
  public resetNotificationsEnabled() {
    this._notificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsEnabledInput() {
    return this._notificationsEnabled;
  }

  // sas_ttl - computed: false, optional: true, required: false
  private _sasTtl?: string; 
  public get sasTtl() {
    return this.getStringAttribute('sas_ttl');
  }
  public set sasTtl(value: string) {
    this._sasTtl = value;
  }
  public resetSasTtl() {
    this._sasTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTtlInput() {
    return this._sasTtl;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IothubFileUploadTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IothubFileUploadTimeouts) {
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
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      connection_string: cdktf.stringToTerraform(this._connectionString),
      container_name: cdktf.stringToTerraform(this._containerName),
      default_ttl: cdktf.stringToTerraform(this._defaultTtl),
      id: cdktf.stringToTerraform(this._id),
      identity_id: cdktf.stringToTerraform(this._identityId),
      iothub_id: cdktf.stringToTerraform(this._iothubId),
      lock_duration: cdktf.stringToTerraform(this._lockDuration),
      max_delivery_count: cdktf.numberToTerraform(this._maxDeliveryCount),
      notifications_enabled: cdktf.booleanToTerraform(this._notificationsEnabled),
      sas_ttl: cdktf.stringToTerraform(this._sasTtl),
      timeouts: iothubFileUploadTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_string: {
        value: cdktf.stringToHclTerraform(this._connectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_name: {
        value: cdktf.stringToHclTerraform(this._containerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_ttl: {
        value: cdktf.stringToHclTerraform(this._defaultTtl),
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
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
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
      lock_duration: {
        value: cdktf.stringToHclTerraform(this._lockDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_delivery_count: {
        value: cdktf.numberToHclTerraform(this._maxDeliveryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notifications_enabled: {
        value: cdktf.booleanToHclTerraform(this._notificationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sas_ttl: {
        value: cdktf.stringToHclTerraform(this._sasTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: iothubFileUploadTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IothubFileUploadTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
