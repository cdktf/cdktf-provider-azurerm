// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#daily_quota_gb LogAnalyticsWorkspace#daily_quota_gb}
  */
  readonly dailyQuotaGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#internet_ingestion_enabled LogAnalyticsWorkspace#internet_ingestion_enabled}
  */
  readonly internetIngestionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#internet_query_enabled LogAnalyticsWorkspace#internet_query_enabled}
  */
  readonly internetQueryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#location LogAnalyticsWorkspace#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#name LogAnalyticsWorkspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#reservation_capcity_in_gb_per_day LogAnalyticsWorkspace#reservation_capcity_in_gb_per_day}
  */
  readonly reservationCapcityInGbPerDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#resource_group_name LogAnalyticsWorkspace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#retention_in_days LogAnalyticsWorkspace#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#sku LogAnalyticsWorkspace#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#tags LogAnalyticsWorkspace#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#timeouts LogAnalyticsWorkspace#timeouts}
  */
  readonly timeouts?: LogAnalyticsWorkspaceTimeouts;
}
export interface LogAnalyticsWorkspaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#create LogAnalyticsWorkspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#delete LogAnalyticsWorkspace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#read LogAnalyticsWorkspace#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html#update LogAnalyticsWorkspace#update}
  */
  readonly update?: string;
}

function logAnalyticsWorkspaceTimeoutsToTerraform(struct?: LogAnalyticsWorkspaceTimeoutsOutputReference | LogAnalyticsWorkspaceTimeouts): any {
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

export class LogAnalyticsWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html azurerm_log_analytics_workspace}
*/
export class LogAnalyticsWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_log_analytics_workspace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html azurerm_log_analytics_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_log_analytics_workspace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dailyQuotaGb = config.dailyQuotaGb;
    this._internetIngestionEnabled = config.internetIngestionEnabled;
    this._internetQueryEnabled = config.internetQueryEnabled;
    this._location = config.location;
    this._name = config.name;
    this._reservationCapcityInGbPerDay = config.reservationCapcityInGbPerDay;
    this._resourceGroupName = config.resourceGroupName;
    this._retentionInDays = config.retentionInDays;
    this._sku = config.sku;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // daily_quota_gb - computed: false, optional: true, required: false
  private _dailyQuotaGb?: number | undefined; 
  public get dailyQuotaGb() {
    return this.getNumberAttribute('daily_quota_gb');
  }
  public set dailyQuotaGb(value: number | undefined) {
    this._dailyQuotaGb = value;
  }
  public resetDailyQuotaGb() {
    this._dailyQuotaGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyQuotaGbInput() {
    return this._dailyQuotaGb
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_ingestion_enabled - computed: false, optional: true, required: false
  private _internetIngestionEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get internetIngestionEnabled() {
    return this.getBooleanAttribute('internet_ingestion_enabled') as any;
  }
  public set internetIngestionEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._internetIngestionEnabled = value;
  }
  public resetInternetIngestionEnabled() {
    this._internetIngestionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetIngestionEnabledInput() {
    return this._internetIngestionEnabled
  }

  // internet_query_enabled - computed: false, optional: true, required: false
  private _internetQueryEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get internetQueryEnabled() {
    return this.getBooleanAttribute('internet_query_enabled') as any;
  }
  public set internetQueryEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._internetQueryEnabled = value;
  }
  public resetInternetQueryEnabled() {
    this._internetQueryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetQueryEnabledInput() {
    return this._internetQueryEnabled
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

  // portal_url - computed: true, optional: false, required: false
  public get portalUrl() {
    return this.getStringAttribute('portal_url');
  }

  // primary_shared_key - computed: true, optional: false, required: false
  public get primarySharedKey() {
    return this.getStringAttribute('primary_shared_key');
  }

  // reservation_capcity_in_gb_per_day - computed: false, optional: true, required: false
  private _reservationCapcityInGbPerDay?: number | undefined; 
  public get reservationCapcityInGbPerDay() {
    return this.getNumberAttribute('reservation_capcity_in_gb_per_day');
  }
  public set reservationCapcityInGbPerDay(value: number | undefined) {
    this._reservationCapcityInGbPerDay = value;
  }
  public resetReservationCapcityInGbPerDay() {
    this._reservationCapcityInGbPerDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationCapcityInGbPerDayInput() {
    return this._reservationCapcityInGbPerDay
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

  // retention_in_days - computed: true, optional: true, required: false
  private _retentionInDays?: number | undefined; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number | undefined) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays
  }

  // secondary_shared_key - computed: true, optional: false, required: false
  public get secondarySharedKey() {
    return this.getStringAttribute('secondary_shared_key');
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string | undefined; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string | undefined) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
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

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogAnalyticsWorkspaceTimeouts | undefined; 
  private __timeoutsOutput = new LogAnalyticsWorkspaceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LogAnalyticsWorkspaceTimeouts | undefined) {
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
      daily_quota_gb: cdktf.numberToTerraform(this._dailyQuotaGb),
      internet_ingestion_enabled: cdktf.booleanToTerraform(this._internetIngestionEnabled),
      internet_query_enabled: cdktf.booleanToTerraform(this._internetQueryEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      reservation_capcity_in_gb_per_day: cdktf.numberToTerraform(this._reservationCapcityInGbPerDay),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      retention_in_days: cdktf.numberToTerraform(this._retentionInDays),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: logAnalyticsWorkspaceTimeoutsToTerraform(this._timeouts),
    };
  }
}
