// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlServerMicrosoftSupportAuditingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy#blob_storage_endpoint MssqlServerMicrosoftSupportAuditingPolicy#blob_storage_endpoint}
  */
  readonly blobStorageEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy#enabled MssqlServerMicrosoftSupportAuditingPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy#id MssqlServerMicrosoftSupportAuditingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy#log_monitoring_enabled MssqlServerMicrosoftSupportAuditingPolicy#log_monitoring_enabled}
  */
  readonly logMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy#server_id MssqlServerMicrosoftSupportAuditingPolicy#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_access_key MssqlServerMicrosoftSupportAuditingPolicy#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_subscription_id MssqlServerMicrosoftSupportAuditingPolicy#storage_account_subscription_id}
  */
  readonly storageAccountSubscriptionId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy#timeouts MssqlServerMicrosoftSupportAuditingPolicy#timeouts}
  */
  readonly timeouts?: MssqlServerMicrosoftSupportAuditingPolicyTimeouts;
}
export interface MssqlServerMicrosoftSupportAuditingPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy#create MssqlServerMicrosoftSupportAuditingPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy#delete MssqlServerMicrosoftSupportAuditingPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy#read MssqlServerMicrosoftSupportAuditingPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy#update MssqlServerMicrosoftSupportAuditingPolicy#update}
  */
  readonly update?: string;
}

export function mssqlServerMicrosoftSupportAuditingPolicyTimeoutsToTerraform(struct?: MssqlServerMicrosoftSupportAuditingPolicyTimeouts | cdktf.IResolvable): any {
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


export function mssqlServerMicrosoftSupportAuditingPolicyTimeoutsToHclTerraform(struct?: MssqlServerMicrosoftSupportAuditingPolicyTimeouts | cdktf.IResolvable): any {
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

export class MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MssqlServerMicrosoftSupportAuditingPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MssqlServerMicrosoftSupportAuditingPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy azurerm_mssql_server_microsoft_support_auditing_policy}
*/
export class MssqlServerMicrosoftSupportAuditingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mssql_server_microsoft_support_auditing_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MssqlServerMicrosoftSupportAuditingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MssqlServerMicrosoftSupportAuditingPolicy to import
  * @param importFromId The id of the existing MssqlServerMicrosoftSupportAuditingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MssqlServerMicrosoftSupportAuditingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mssql_server_microsoft_support_auditing_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_server_microsoft_support_auditing_policy azurerm_mssql_server_microsoft_support_auditing_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlServerMicrosoftSupportAuditingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlServerMicrosoftSupportAuditingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_server_microsoft_support_auditing_policy',
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
    this._blobStorageEndpoint = config.blobStorageEndpoint;
    this._enabled = config.enabled;
    this._id = config.id;
    this._logMonitoringEnabled = config.logMonitoringEnabled;
    this._serverId = config.serverId;
    this._storageAccountAccessKey = config.storageAccountAccessKey;
    this._storageAccountSubscriptionId = config.storageAccountSubscriptionId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blob_storage_endpoint - computed: false, optional: true, required: false
  private _blobStorageEndpoint?: string; 
  public get blobStorageEndpoint() {
    return this.getStringAttribute('blob_storage_endpoint');
  }
  public set blobStorageEndpoint(value: string) {
    this._blobStorageEndpoint = value;
  }
  public resetBlobStorageEndpoint() {
    this._blobStorageEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobStorageEndpointInput() {
    return this._blobStorageEndpoint;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // log_monitoring_enabled - computed: false, optional: true, required: false
  private _logMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get logMonitoringEnabled() {
    return this.getBooleanAttribute('log_monitoring_enabled');
  }
  public set logMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._logMonitoringEnabled = value;
  }
  public resetLogMonitoringEnabled() {
    this._logMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMonitoringEnabledInput() {
    return this._logMonitoringEnabled;
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // storage_account_access_key - computed: false, optional: true, required: false
  private _storageAccountAccessKey?: string; 
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }
  public set storageAccountAccessKey(value: string) {
    this._storageAccountAccessKey = value;
  }
  public resetStorageAccountAccessKey() {
    this._storageAccountAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyInput() {
    return this._storageAccountAccessKey;
  }

  // storage_account_subscription_id - computed: false, optional: true, required: false
  private _storageAccountSubscriptionId?: string; 
  public get storageAccountSubscriptionId() {
    return this.getStringAttribute('storage_account_subscription_id');
  }
  public set storageAccountSubscriptionId(value: string) {
    this._storageAccountSubscriptionId = value;
  }
  public resetStorageAccountSubscriptionId() {
    this._storageAccountSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountSubscriptionIdInput() {
    return this._storageAccountSubscriptionId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MssqlServerMicrosoftSupportAuditingPolicyTimeouts) {
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
      blob_storage_endpoint: cdktf.stringToTerraform(this._blobStorageEndpoint),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      log_monitoring_enabled: cdktf.booleanToTerraform(this._logMonitoringEnabled),
      server_id: cdktf.stringToTerraform(this._serverId),
      storage_account_access_key: cdktf.stringToTerraform(this._storageAccountAccessKey),
      storage_account_subscription_id: cdktf.stringToTerraform(this._storageAccountSubscriptionId),
      timeouts: mssqlServerMicrosoftSupportAuditingPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blob_storage_endpoint: {
        value: cdktf.stringToHclTerraform(this._blobStorageEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      log_monitoring_enabled: {
        value: cdktf.booleanToHclTerraform(this._logMonitoringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_access_key: {
        value: cdktf.stringToHclTerraform(this._storageAccountAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_subscription_id: {
        value: cdktf.stringToHclTerraform(this._storageAccountSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: mssqlServerMicrosoftSupportAuditingPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MssqlServerMicrosoftSupportAuditingPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
