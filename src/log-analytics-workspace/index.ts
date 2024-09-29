// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#allow_resource_only_permissions LogAnalyticsWorkspace#allow_resource_only_permissions}
  */
  readonly allowResourceOnlyPermissions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#cmk_for_query_forced LogAnalyticsWorkspace#cmk_for_query_forced}
  */
  readonly cmkForQueryForced?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#daily_quota_gb LogAnalyticsWorkspace#daily_quota_gb}
  */
  readonly dailyQuotaGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#data_collection_rule_id LogAnalyticsWorkspace#data_collection_rule_id}
  */
  readonly dataCollectionRuleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#id LogAnalyticsWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#immediate_data_purge_on_30_days_enabled LogAnalyticsWorkspace#immediate_data_purge_on_30_days_enabled}
  */
  readonly immediateDataPurgeOn30DaysEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#internet_ingestion_enabled LogAnalyticsWorkspace#internet_ingestion_enabled}
  */
  readonly internetIngestionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#internet_query_enabled LogAnalyticsWorkspace#internet_query_enabled}
  */
  readonly internetQueryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#local_authentication_disabled LogAnalyticsWorkspace#local_authentication_disabled}
  */
  readonly localAuthenticationDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#location LogAnalyticsWorkspace#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#name LogAnalyticsWorkspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#reservation_capacity_in_gb_per_day LogAnalyticsWorkspace#reservation_capacity_in_gb_per_day}
  */
  readonly reservationCapacityInGbPerDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#resource_group_name LogAnalyticsWorkspace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#retention_in_days LogAnalyticsWorkspace#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#sku LogAnalyticsWorkspace#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#tags LogAnalyticsWorkspace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#identity LogAnalyticsWorkspace#identity}
  */
  readonly identity?: LogAnalyticsWorkspaceIdentity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#timeouts LogAnalyticsWorkspace#timeouts}
  */
  readonly timeouts?: LogAnalyticsWorkspaceTimeouts;
}
export interface LogAnalyticsWorkspaceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#identity_ids LogAnalyticsWorkspace#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#type LogAnalyticsWorkspace#type}
  */
  readonly type: string;
}

export function logAnalyticsWorkspaceIdentityToTerraform(struct?: LogAnalyticsWorkspaceIdentityOutputReference | LogAnalyticsWorkspaceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logAnalyticsWorkspaceIdentityToHclTerraform(struct?: LogAnalyticsWorkspaceIdentityOutputReference | LogAnalyticsWorkspaceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsWorkspaceIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAnalyticsWorkspaceIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsWorkspaceIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface LogAnalyticsWorkspaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#create LogAnalyticsWorkspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#delete LogAnalyticsWorkspace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#read LogAnalyticsWorkspace#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#update LogAnalyticsWorkspace#update}
  */
  readonly update?: string;
}

export function logAnalyticsWorkspaceTimeoutsToTerraform(struct?: LogAnalyticsWorkspaceTimeouts | cdktf.IResolvable): any {
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


export function logAnalyticsWorkspaceTimeoutsToHclTerraform(struct?: LogAnalyticsWorkspaceTimeouts | cdktf.IResolvable): any {
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

export class LogAnalyticsWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogAnalyticsWorkspaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogAnalyticsWorkspaceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace azurerm_log_analytics_workspace}
*/
export class LogAnalyticsWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_log_analytics_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAnalyticsWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAnalyticsWorkspace to import
  * @param importFromId The id of the existing LogAnalyticsWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAnalyticsWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_log_analytics_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/log_analytics_workspace azurerm_log_analytics_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_log_analytics_workspace',
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
    this._allowResourceOnlyPermissions = config.allowResourceOnlyPermissions;
    this._cmkForQueryForced = config.cmkForQueryForced;
    this._dailyQuotaGb = config.dailyQuotaGb;
    this._dataCollectionRuleId = config.dataCollectionRuleId;
    this._id = config.id;
    this._immediateDataPurgeOn30DaysEnabled = config.immediateDataPurgeOn30DaysEnabled;
    this._internetIngestionEnabled = config.internetIngestionEnabled;
    this._internetQueryEnabled = config.internetQueryEnabled;
    this._localAuthenticationDisabled = config.localAuthenticationDisabled;
    this._location = config.location;
    this._name = config.name;
    this._reservationCapacityInGbPerDay = config.reservationCapacityInGbPerDay;
    this._resourceGroupName = config.resourceGroupName;
    this._retentionInDays = config.retentionInDays;
    this._sku = config.sku;
    this._tags = config.tags;
    this._identity.internalValue = config.identity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_resource_only_permissions - computed: false, optional: true, required: false
  private _allowResourceOnlyPermissions?: boolean | cdktf.IResolvable; 
  public get allowResourceOnlyPermissions() {
    return this.getBooleanAttribute('allow_resource_only_permissions');
  }
  public set allowResourceOnlyPermissions(value: boolean | cdktf.IResolvable) {
    this._allowResourceOnlyPermissions = value;
  }
  public resetAllowResourceOnlyPermissions() {
    this._allowResourceOnlyPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowResourceOnlyPermissionsInput() {
    return this._allowResourceOnlyPermissions;
  }

  // cmk_for_query_forced - computed: false, optional: true, required: false
  private _cmkForQueryForced?: boolean | cdktf.IResolvable; 
  public get cmkForQueryForced() {
    return this.getBooleanAttribute('cmk_for_query_forced');
  }
  public set cmkForQueryForced(value: boolean | cdktf.IResolvable) {
    this._cmkForQueryForced = value;
  }
  public resetCmkForQueryForced() {
    this._cmkForQueryForced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmkForQueryForcedInput() {
    return this._cmkForQueryForced;
  }

  // daily_quota_gb - computed: false, optional: true, required: false
  private _dailyQuotaGb?: number; 
  public get dailyQuotaGb() {
    return this.getNumberAttribute('daily_quota_gb');
  }
  public set dailyQuotaGb(value: number) {
    this._dailyQuotaGb = value;
  }
  public resetDailyQuotaGb() {
    this._dailyQuotaGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyQuotaGbInput() {
    return this._dailyQuotaGb;
  }

  // data_collection_rule_id - computed: false, optional: true, required: false
  private _dataCollectionRuleId?: string; 
  public get dataCollectionRuleId() {
    return this.getStringAttribute('data_collection_rule_id');
  }
  public set dataCollectionRuleId(value: string) {
    this._dataCollectionRuleId = value;
  }
  public resetDataCollectionRuleId() {
    this._dataCollectionRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionRuleIdInput() {
    return this._dataCollectionRuleId;
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

  // immediate_data_purge_on_30_days_enabled - computed: false, optional: true, required: false
  private _immediateDataPurgeOn30DaysEnabled?: boolean | cdktf.IResolvable; 
  public get immediateDataPurgeOn30DaysEnabled() {
    return this.getBooleanAttribute('immediate_data_purge_on_30_days_enabled');
  }
  public set immediateDataPurgeOn30DaysEnabled(value: boolean | cdktf.IResolvable) {
    this._immediateDataPurgeOn30DaysEnabled = value;
  }
  public resetImmediateDataPurgeOn30DaysEnabled() {
    this._immediateDataPurgeOn30DaysEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateDataPurgeOn30DaysEnabledInput() {
    return this._immediateDataPurgeOn30DaysEnabled;
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

  // primary_shared_key - computed: true, optional: false, required: false
  public get primarySharedKey() {
    return this.getStringAttribute('primary_shared_key');
  }

  // reservation_capacity_in_gb_per_day - computed: false, optional: true, required: false
  private _reservationCapacityInGbPerDay?: number; 
  public get reservationCapacityInGbPerDay() {
    return this.getNumberAttribute('reservation_capacity_in_gb_per_day');
  }
  public set reservationCapacityInGbPerDay(value: number) {
    this._reservationCapacityInGbPerDay = value;
  }
  public resetReservationCapacityInGbPerDay() {
    this._reservationCapacityInGbPerDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationCapacityInGbPerDayInput() {
    return this._reservationCapacityInGbPerDay;
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

  // retention_in_days - computed: true, optional: true, required: false
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

  // secondary_shared_key - computed: true, optional: false, required: false
  public get secondarySharedKey() {
    return this.getStringAttribute('secondary_shared_key');
  }

  // sku - computed: true, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
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

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new LogAnalyticsWorkspaceIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: LogAnalyticsWorkspaceIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogAnalyticsWorkspaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogAnalyticsWorkspaceTimeouts) {
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
      allow_resource_only_permissions: cdktf.booleanToTerraform(this._allowResourceOnlyPermissions),
      cmk_for_query_forced: cdktf.booleanToTerraform(this._cmkForQueryForced),
      daily_quota_gb: cdktf.numberToTerraform(this._dailyQuotaGb),
      data_collection_rule_id: cdktf.stringToTerraform(this._dataCollectionRuleId),
      id: cdktf.stringToTerraform(this._id),
      immediate_data_purge_on_30_days_enabled: cdktf.booleanToTerraform(this._immediateDataPurgeOn30DaysEnabled),
      internet_ingestion_enabled: cdktf.booleanToTerraform(this._internetIngestionEnabled),
      internet_query_enabled: cdktf.booleanToTerraform(this._internetQueryEnabled),
      local_authentication_disabled: cdktf.booleanToTerraform(this._localAuthenticationDisabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      reservation_capacity_in_gb_per_day: cdktf.numberToTerraform(this._reservationCapacityInGbPerDay),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      retention_in_days: cdktf.numberToTerraform(this._retentionInDays),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      identity: logAnalyticsWorkspaceIdentityToTerraform(this._identity.internalValue),
      timeouts: logAnalyticsWorkspaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_resource_only_permissions: {
        value: cdktf.booleanToHclTerraform(this._allowResourceOnlyPermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cmk_for_query_forced: {
        value: cdktf.booleanToHclTerraform(this._cmkForQueryForced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      daily_quota_gb: {
        value: cdktf.numberToHclTerraform(this._dailyQuotaGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_collection_rule_id: {
        value: cdktf.stringToHclTerraform(this._dataCollectionRuleId),
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
      immediate_data_purge_on_30_days_enabled: {
        value: cdktf.booleanToHclTerraform(this._immediateDataPurgeOn30DaysEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      reservation_capacity_in_gb_per_day: {
        value: cdktf.numberToHclTerraform(this._reservationCapacityInGbPerDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      sku: {
        value: cdktf.stringToHclTerraform(this._sku),
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
      identity: {
        value: logAnalyticsWorkspaceIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAnalyticsWorkspaceIdentityList",
      },
      timeouts: {
        value: logAnalyticsWorkspaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogAnalyticsWorkspaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
