// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityCenterStorageDefenderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender#id SecurityCenterStorageDefender#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_cap_gb_per_month SecurityCenterStorageDefender#malware_scanning_on_upload_cap_gb_per_month}
  */
  readonly malwareScanningOnUploadCapGbPerMonth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_enabled SecurityCenterStorageDefender#malware_scanning_on_upload_enabled}
  */
  readonly malwareScanningOnUploadEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender#override_subscription_settings_enabled SecurityCenterStorageDefender#override_subscription_settings_enabled}
  */
  readonly overrideSubscriptionSettingsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender#scan_results_event_grid_topic_id SecurityCenterStorageDefender#scan_results_event_grid_topic_id}
  */
  readonly scanResultsEventGridTopicId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender#sensitive_data_discovery_enabled SecurityCenterStorageDefender#sensitive_data_discovery_enabled}
  */
  readonly sensitiveDataDiscoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender#storage_account_id SecurityCenterStorageDefender#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender#timeouts SecurityCenterStorageDefender#timeouts}
  */
  readonly timeouts?: SecurityCenterStorageDefenderTimeouts;
}
export interface SecurityCenterStorageDefenderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender#create SecurityCenterStorageDefender#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender#delete SecurityCenterStorageDefender#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender#read SecurityCenterStorageDefender#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender#update SecurityCenterStorageDefender#update}
  */
  readonly update?: string;
}

export function securityCenterStorageDefenderTimeoutsToTerraform(struct?: SecurityCenterStorageDefenderTimeouts | cdktf.IResolvable): any {
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


export function securityCenterStorageDefenderTimeoutsToHclTerraform(struct?: SecurityCenterStorageDefenderTimeouts | cdktf.IResolvable): any {
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

export class SecurityCenterStorageDefenderTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityCenterStorageDefenderTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityCenterStorageDefenderTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender azurerm_security_center_storage_defender}
*/
export class SecurityCenterStorageDefender extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_security_center_storage_defender";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityCenterStorageDefender resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityCenterStorageDefender to import
  * @param importFromId The id of the existing SecurityCenterStorageDefender that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityCenterStorageDefender to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_security_center_storage_defender", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/security_center_storage_defender azurerm_security_center_storage_defender} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityCenterStorageDefenderConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityCenterStorageDefenderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_security_center_storage_defender',
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
    this._id = config.id;
    this._malwareScanningOnUploadCapGbPerMonth = config.malwareScanningOnUploadCapGbPerMonth;
    this._malwareScanningOnUploadEnabled = config.malwareScanningOnUploadEnabled;
    this._overrideSubscriptionSettingsEnabled = config.overrideSubscriptionSettingsEnabled;
    this._scanResultsEventGridTopicId = config.scanResultsEventGridTopicId;
    this._sensitiveDataDiscoveryEnabled = config.sensitiveDataDiscoveryEnabled;
    this._storageAccountId = config.storageAccountId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // malware_scanning_on_upload_cap_gb_per_month - computed: false, optional: true, required: false
  private _malwareScanningOnUploadCapGbPerMonth?: number; 
  public get malwareScanningOnUploadCapGbPerMonth() {
    return this.getNumberAttribute('malware_scanning_on_upload_cap_gb_per_month');
  }
  public set malwareScanningOnUploadCapGbPerMonth(value: number) {
    this._malwareScanningOnUploadCapGbPerMonth = value;
  }
  public resetMalwareScanningOnUploadCapGbPerMonth() {
    this._malwareScanningOnUploadCapGbPerMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareScanningOnUploadCapGbPerMonthInput() {
    return this._malwareScanningOnUploadCapGbPerMonth;
  }

  // malware_scanning_on_upload_enabled - computed: false, optional: true, required: false
  private _malwareScanningOnUploadEnabled?: boolean | cdktf.IResolvable; 
  public get malwareScanningOnUploadEnabled() {
    return this.getBooleanAttribute('malware_scanning_on_upload_enabled');
  }
  public set malwareScanningOnUploadEnabled(value: boolean | cdktf.IResolvable) {
    this._malwareScanningOnUploadEnabled = value;
  }
  public resetMalwareScanningOnUploadEnabled() {
    this._malwareScanningOnUploadEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareScanningOnUploadEnabledInput() {
    return this._malwareScanningOnUploadEnabled;
  }

  // override_subscription_settings_enabled - computed: false, optional: true, required: false
  private _overrideSubscriptionSettingsEnabled?: boolean | cdktf.IResolvable; 
  public get overrideSubscriptionSettingsEnabled() {
    return this.getBooleanAttribute('override_subscription_settings_enabled');
  }
  public set overrideSubscriptionSettingsEnabled(value: boolean | cdktf.IResolvable) {
    this._overrideSubscriptionSettingsEnabled = value;
  }
  public resetOverrideSubscriptionSettingsEnabled() {
    this._overrideSubscriptionSettingsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSubscriptionSettingsEnabledInput() {
    return this._overrideSubscriptionSettingsEnabled;
  }

  // scan_results_event_grid_topic_id - computed: false, optional: true, required: false
  private _scanResultsEventGridTopicId?: string; 
  public get scanResultsEventGridTopicId() {
    return this.getStringAttribute('scan_results_event_grid_topic_id');
  }
  public set scanResultsEventGridTopicId(value: string) {
    this._scanResultsEventGridTopicId = value;
  }
  public resetScanResultsEventGridTopicId() {
    this._scanResultsEventGridTopicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanResultsEventGridTopicIdInput() {
    return this._scanResultsEventGridTopicId;
  }

  // sensitive_data_discovery_enabled - computed: false, optional: true, required: false
  private _sensitiveDataDiscoveryEnabled?: boolean | cdktf.IResolvable; 
  public get sensitiveDataDiscoveryEnabled() {
    return this.getBooleanAttribute('sensitive_data_discovery_enabled');
  }
  public set sensitiveDataDiscoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._sensitiveDataDiscoveryEnabled = value;
  }
  public resetSensitiveDataDiscoveryEnabled() {
    this._sensitiveDataDiscoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataDiscoveryEnabledInput() {
    return this._sensitiveDataDiscoveryEnabled;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecurityCenterStorageDefenderTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecurityCenterStorageDefenderTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      malware_scanning_on_upload_cap_gb_per_month: cdktf.numberToTerraform(this._malwareScanningOnUploadCapGbPerMonth),
      malware_scanning_on_upload_enabled: cdktf.booleanToTerraform(this._malwareScanningOnUploadEnabled),
      override_subscription_settings_enabled: cdktf.booleanToTerraform(this._overrideSubscriptionSettingsEnabled),
      scan_results_event_grid_topic_id: cdktf.stringToTerraform(this._scanResultsEventGridTopicId),
      sensitive_data_discovery_enabled: cdktf.booleanToTerraform(this._sensitiveDataDiscoveryEnabled),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      timeouts: securityCenterStorageDefenderTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malware_scanning_on_upload_cap_gb_per_month: {
        value: cdktf.numberToHclTerraform(this._malwareScanningOnUploadCapGbPerMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malware_scanning_on_upload_enabled: {
        value: cdktf.booleanToHclTerraform(this._malwareScanningOnUploadEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      override_subscription_settings_enabled: {
        value: cdktf.booleanToHclTerraform(this._overrideSubscriptionSettingsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_results_event_grid_topic_id: {
        value: cdktf.stringToHclTerraform(this._scanResultsEventGridTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_data_discovery_enabled: {
        value: cdktf.booleanToHclTerraform(this._sensitiveDataDiscoveryEnabled),
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
      timeouts: {
        value: securityCenterStorageDefenderTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityCenterStorageDefenderTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
