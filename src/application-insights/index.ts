// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationInsightsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#application_type ApplicationInsights#application_type}
  */
  readonly applicationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#daily_data_cap_in_gb ApplicationInsights#daily_data_cap_in_gb}
  */
  readonly dailyDataCapInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#daily_data_cap_notifications_disabled ApplicationInsights#daily_data_cap_notifications_disabled}
  */
  readonly dailyDataCapNotificationsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#disable_ip_masking ApplicationInsights#disable_ip_masking}
  */
  readonly disableIpMasking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#force_customer_storage_for_profiler ApplicationInsights#force_customer_storage_for_profiler}
  */
  readonly forceCustomerStorageForProfiler?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#id ApplicationInsights#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#internet_ingestion_enabled ApplicationInsights#internet_ingestion_enabled}
  */
  readonly internetIngestionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#internet_query_enabled ApplicationInsights#internet_query_enabled}
  */
  readonly internetQueryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#local_authentication_disabled ApplicationInsights#local_authentication_disabled}
  */
  readonly localAuthenticationDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#location ApplicationInsights#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#name ApplicationInsights#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#resource_group_name ApplicationInsights#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#retention_in_days ApplicationInsights#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#sampling_percentage ApplicationInsights#sampling_percentage}
  */
  readonly samplingPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#tags ApplicationInsights#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#workspace_id ApplicationInsights#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#timeouts ApplicationInsights#timeouts}
  */
  readonly timeouts?: ApplicationInsightsTimeouts;
}
export interface ApplicationInsightsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#create ApplicationInsights#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#delete ApplicationInsights#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#read ApplicationInsights#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#update ApplicationInsights#update}
  */
  readonly update?: string;
}

export function applicationInsightsTimeoutsToTerraform(struct?: ApplicationInsightsTimeouts | cdktf.IResolvable): any {
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


export function applicationInsightsTimeoutsToHclTerraform(struct?: ApplicationInsightsTimeouts | cdktf.IResolvable): any {
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

export class ApplicationInsightsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationInsightsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationInsightsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights azurerm_application_insights}
*/
export class ApplicationInsights extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_application_insights";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationInsights resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationInsights to import
  * @param importFromId The id of the existing ApplicationInsights that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationInsights to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_application_insights", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights azurerm_application_insights} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationInsightsConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationInsightsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_application_insights',
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
    this._applicationType = config.applicationType;
    this._dailyDataCapInGb = config.dailyDataCapInGb;
    this._dailyDataCapNotificationsDisabled = config.dailyDataCapNotificationsDisabled;
    this._disableIpMasking = config.disableIpMasking;
    this._forceCustomerStorageForProfiler = config.forceCustomerStorageForProfiler;
    this._id = config.id;
    this._internetIngestionEnabled = config.internetIngestionEnabled;
    this._internetQueryEnabled = config.internetQueryEnabled;
    this._localAuthenticationDisabled = config.localAuthenticationDisabled;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._retentionInDays = config.retentionInDays;
    this._samplingPercentage = config.samplingPercentage;
    this._tags = config.tags;
    this._workspaceId = config.workspaceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // application_type - computed: false, optional: false, required: true
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // daily_data_cap_in_gb - computed: false, optional: true, required: false
  private _dailyDataCapInGb?: number; 
  public get dailyDataCapInGb() {
    return this.getNumberAttribute('daily_data_cap_in_gb');
  }
  public set dailyDataCapInGb(value: number) {
    this._dailyDataCapInGb = value;
  }
  public resetDailyDataCapInGb() {
    this._dailyDataCapInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyDataCapInGbInput() {
    return this._dailyDataCapInGb;
  }

  // daily_data_cap_notifications_disabled - computed: false, optional: true, required: false
  private _dailyDataCapNotificationsDisabled?: boolean | cdktf.IResolvable; 
  public get dailyDataCapNotificationsDisabled() {
    return this.getBooleanAttribute('daily_data_cap_notifications_disabled');
  }
  public set dailyDataCapNotificationsDisabled(value: boolean | cdktf.IResolvable) {
    this._dailyDataCapNotificationsDisabled = value;
  }
  public resetDailyDataCapNotificationsDisabled() {
    this._dailyDataCapNotificationsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyDataCapNotificationsDisabledInput() {
    return this._dailyDataCapNotificationsDisabled;
  }

  // disable_ip_masking - computed: false, optional: true, required: false
  private _disableIpMasking?: boolean | cdktf.IResolvable; 
  public get disableIpMasking() {
    return this.getBooleanAttribute('disable_ip_masking');
  }
  public set disableIpMasking(value: boolean | cdktf.IResolvable) {
    this._disableIpMasking = value;
  }
  public resetDisableIpMasking() {
    this._disableIpMasking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIpMaskingInput() {
    return this._disableIpMasking;
  }

  // force_customer_storage_for_profiler - computed: false, optional: true, required: false
  private _forceCustomerStorageForProfiler?: boolean | cdktf.IResolvable; 
  public get forceCustomerStorageForProfiler() {
    return this.getBooleanAttribute('force_customer_storage_for_profiler');
  }
  public set forceCustomerStorageForProfiler(value: boolean | cdktf.IResolvable) {
    this._forceCustomerStorageForProfiler = value;
  }
  public resetForceCustomerStorageForProfiler() {
    this._forceCustomerStorageForProfiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCustomerStorageForProfilerInput() {
    return this._forceCustomerStorageForProfiler;
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

  // instrumentation_key - computed: true, optional: false, required: false
  public get instrumentationKey() {
    return this.getStringAttribute('instrumentation_key');
  }

  // internet_ingestion_enabled - computed: false, optional: true, required: false
  private _internetIngestionEnabled?: boolean | cdktf.IResolvable; 
  public get internetIngestionEnabled() {
    return this.getBooleanAttribute('internet_ingestion_enabled');
  }
  public set internetIngestionEnabled(value: boolean | cdktf.IResolvable) {
    this._internetIngestionEnabled = value;
  }
  public resetInternetIngestionEnabled() {
    this._internetIngestionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetIngestionEnabledInput() {
    return this._internetIngestionEnabled;
  }

  // internet_query_enabled - computed: false, optional: true, required: false
  private _internetQueryEnabled?: boolean | cdktf.IResolvable; 
  public get internetQueryEnabled() {
    return this.getBooleanAttribute('internet_query_enabled');
  }
  public set internetQueryEnabled(value: boolean | cdktf.IResolvable) {
    this._internetQueryEnabled = value;
  }
  public resetInternetQueryEnabled() {
    this._internetQueryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetQueryEnabledInput() {
    return this._internetQueryEnabled;
  }

  // local_authentication_disabled - computed: false, optional: true, required: false
  private _localAuthenticationDisabled?: boolean | cdktf.IResolvable; 
  public get localAuthenticationDisabled() {
    return this.getBooleanAttribute('local_authentication_disabled');
  }
  public set localAuthenticationDisabled(value: boolean | cdktf.IResolvable) {
    this._localAuthenticationDisabled = value;
  }
  public resetLocalAuthenticationDisabled() {
    this._localAuthenticationDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthenticationDisabledInput() {
    return this._localAuthenticationDisabled;
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
    return this._location;
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
    return this._resourceGroupName;
  }

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays;
  }

  // sampling_percentage - computed: false, optional: true, required: false
  private _samplingPercentage?: number; 
  public get samplingPercentage() {
    return this.getNumberAttribute('sampling_percentage');
  }
  public set samplingPercentage(value: number) {
    this._samplingPercentage = value;
  }
  public resetSamplingPercentage() {
    this._samplingPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentageInput() {
    return this._samplingPercentage;
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

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApplicationInsightsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApplicationInsightsTimeouts) {
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
      application_type: cdktf.stringToTerraform(this._applicationType),
      daily_data_cap_in_gb: cdktf.numberToTerraform(this._dailyDataCapInGb),
      daily_data_cap_notifications_disabled: cdktf.booleanToTerraform(this._dailyDataCapNotificationsDisabled),
      disable_ip_masking: cdktf.booleanToTerraform(this._disableIpMasking),
      force_customer_storage_for_profiler: cdktf.booleanToTerraform(this._forceCustomerStorageForProfiler),
      id: cdktf.stringToTerraform(this._id),
      internet_ingestion_enabled: cdktf.booleanToTerraform(this._internetIngestionEnabled),
      internet_query_enabled: cdktf.booleanToTerraform(this._internetQueryEnabled),
      local_authentication_disabled: cdktf.booleanToTerraform(this._localAuthenticationDisabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      retention_in_days: cdktf.numberToTerraform(this._retentionInDays),
      sampling_percentage: cdktf.numberToTerraform(this._samplingPercentage),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      timeouts: applicationInsightsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_type: {
        value: cdktf.stringToHclTerraform(this._applicationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daily_data_cap_in_gb: {
        value: cdktf.numberToHclTerraform(this._dailyDataCapInGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      daily_data_cap_notifications_disabled: {
        value: cdktf.booleanToHclTerraform(this._dailyDataCapNotificationsDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_ip_masking: {
        value: cdktf.booleanToHclTerraform(this._disableIpMasking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_customer_storage_for_profiler: {
        value: cdktf.booleanToHclTerraform(this._forceCustomerStorageForProfiler),
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
      internet_ingestion_enabled: {
        value: cdktf.booleanToHclTerraform(this._internetIngestionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      internet_query_enabled: {
        value: cdktf.booleanToHclTerraform(this._internetQueryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_authentication_disabled: {
        value: cdktf.booleanToHclTerraform(this._localAuthenticationDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_in_days: {
        value: cdktf.numberToHclTerraform(this._retentionInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sampling_percentage: {
        value: cdktf.numberToHclTerraform(this._samplingPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: applicationInsightsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationInsightsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
