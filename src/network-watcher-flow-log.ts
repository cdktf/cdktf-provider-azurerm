// https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkWatcherFlowLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#enabled NetworkWatcherFlowLog#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#location NetworkWatcherFlowLog#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#network_security_group_id NetworkWatcherFlowLog#network_security_group_id}
  */
  readonly networkSecurityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#network_watcher_name NetworkWatcherFlowLog#network_watcher_name}
  */
  readonly networkWatcherName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#resource_group_name NetworkWatcherFlowLog#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#storage_account_id NetworkWatcherFlowLog#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#tags NetworkWatcherFlowLog#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#version NetworkWatcherFlowLog#version}
  */
  readonly version?: number;
  /**
  * retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#retention_policy NetworkWatcherFlowLog#retention_policy}
  */
  readonly retentionPolicy: NetworkWatcherFlowLogRetentionPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#timeouts NetworkWatcherFlowLog#timeouts}
  */
  readonly timeouts?: NetworkWatcherFlowLogTimeouts;
  /**
  * traffic_analytics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#traffic_analytics NetworkWatcherFlowLog#traffic_analytics}
  */
  readonly trafficAnalytics?: NetworkWatcherFlowLogTrafficAnalytics;
}
export interface NetworkWatcherFlowLogRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#days NetworkWatcherFlowLog#days}
  */
  readonly days: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#enabled NetworkWatcherFlowLog#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

function networkWatcherFlowLogRetentionPolicyToTerraform(struct?: NetworkWatcherFlowLogRetentionPolicyOutputReference | NetworkWatcherFlowLogRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class NetworkWatcherFlowLogRetentionPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // days - computed: false, optional: false, required: true
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }
}
export interface NetworkWatcherFlowLogTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#create NetworkWatcherFlowLog#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#delete NetworkWatcherFlowLog#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#read NetworkWatcherFlowLog#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#update NetworkWatcherFlowLog#update}
  */
  readonly update?: string;
}

function networkWatcherFlowLogTimeoutsToTerraform(struct?: NetworkWatcherFlowLogTimeoutsOutputReference | NetworkWatcherFlowLogTimeouts): any {
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

export class NetworkWatcherFlowLogTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface NetworkWatcherFlowLogTrafficAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#enabled NetworkWatcherFlowLog#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#interval_in_minutes NetworkWatcherFlowLog#interval_in_minutes}
  */
  readonly intervalInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#workspace_id NetworkWatcherFlowLog#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#workspace_region NetworkWatcherFlowLog#workspace_region}
  */
  readonly workspaceRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html#workspace_resource_id NetworkWatcherFlowLog#workspace_resource_id}
  */
  readonly workspaceResourceId: string;
}

function networkWatcherFlowLogTrafficAnalyticsToTerraform(struct?: NetworkWatcherFlowLogTrafficAnalyticsOutputReference | NetworkWatcherFlowLogTrafficAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval_in_minutes: cdktf.numberToTerraform(struct!.intervalInMinutes),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
    workspace_region: cdktf.stringToTerraform(struct!.workspaceRegion),
    workspace_resource_id: cdktf.stringToTerraform(struct!.workspaceResourceId),
  }
}

export class NetworkWatcherFlowLogTrafficAnalyticsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // interval_in_minutes - computed: false, optional: true, required: false
  private _intervalInMinutes?: number | undefined; 
  public get intervalInMinutes() {
    return this.getNumberAttribute('interval_in_minutes');
  }
  public set intervalInMinutes(value: number | undefined) {
    this._intervalInMinutes = value;
  }
  public resetIntervalInMinutes() {
    this._intervalInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInMinutesInput() {
    return this._intervalInMinutes
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId
  }

  // workspace_region - computed: false, optional: false, required: true
  private _workspaceRegion?: string; 
  public get workspaceRegion() {
    return this.getStringAttribute('workspace_region');
  }
  public set workspaceRegion(value: string) {
    this._workspaceRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceRegionInput() {
    return this._workspaceRegion
  }

  // workspace_resource_id - computed: false, optional: false, required: true
  private _workspaceResourceId?: string; 
  public get workspaceResourceId() {
    return this.getStringAttribute('workspace_resource_id');
  }
  public set workspaceResourceId(value: string) {
    this._workspaceResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceResourceIdInput() {
    return this._workspaceResourceId
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html azurerm_network_watcher_flow_log}
*/
export class NetworkWatcherFlowLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_network_watcher_flow_log";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/network_watcher_flow_log.html azurerm_network_watcher_flow_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkWatcherFlowLogConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkWatcherFlowLogConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_watcher_flow_log',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._location = config.location;
    this._networkSecurityGroupId = config.networkSecurityGroupId;
    this._networkWatcherName = config.networkWatcherName;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountId = config.storageAccountId;
    this._tags = config.tags;
    this._version = config.version;
    this._retentionPolicy = config.retentionPolicy;
    this._timeouts = config.timeouts;
    this._trafficAnalytics = config.trafficAnalytics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: true, required: false
  private _location?: string | undefined; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string | undefined) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_security_group_id - computed: false, optional: false, required: true
  private _networkSecurityGroupId?: string; 
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
  }
  public set networkSecurityGroupId(value: string) {
    this._networkSecurityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupIdInput() {
    return this._networkSecurityGroupId
  }

  // network_watcher_name - computed: false, optional: false, required: true
  private _networkWatcherName?: string; 
  public get networkWatcherName() {
    return this.getStringAttribute('network_watcher_name');
  }
  public set networkWatcherName(value: string) {
    this._networkWatcherName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkWatcherNameInput() {
    return this._networkWatcherName
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
    return this._storageAccountId
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

  // version - computed: true, optional: true, required: false
  private _version?: number | undefined; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // retention_policy - computed: false, optional: false, required: true
  private _retentionPolicy?: NetworkWatcherFlowLogRetentionPolicy; 
  private __retentionPolicyOutput = new NetworkWatcherFlowLogRetentionPolicyOutputReference(this as any, "retention_policy", true);
  public get retentionPolicy() {
    return this.__retentionPolicyOutput;
  }
  public putRetentionPolicy(value: NetworkWatcherFlowLogRetentionPolicy) {
    this._retentionPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkWatcherFlowLogTimeouts | undefined; 
  private __timeoutsOutput = new NetworkWatcherFlowLogTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NetworkWatcherFlowLogTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // traffic_analytics - computed: false, optional: true, required: false
  private _trafficAnalytics?: NetworkWatcherFlowLogTrafficAnalytics | undefined; 
  private __trafficAnalyticsOutput = new NetworkWatcherFlowLogTrafficAnalyticsOutputReference(this as any, "traffic_analytics", true);
  public get trafficAnalytics() {
    return this.__trafficAnalyticsOutput;
  }
  public putTrafficAnalytics(value: NetworkWatcherFlowLogTrafficAnalytics | undefined) {
    this._trafficAnalytics = value;
  }
  public resetTrafficAnalytics() {
    this._trafficAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficAnalyticsInput() {
    return this._trafficAnalytics
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      location: cdktf.stringToTerraform(this._location),
      network_security_group_id: cdktf.stringToTerraform(this._networkSecurityGroupId),
      network_watcher_name: cdktf.stringToTerraform(this._networkWatcherName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version: cdktf.numberToTerraform(this._version),
      retention_policy: networkWatcherFlowLogRetentionPolicyToTerraform(this._retentionPolicy),
      timeouts: networkWatcherFlowLogTimeoutsToTerraform(this._timeouts),
      traffic_analytics: networkWatcherFlowLogTrafficAnalyticsToTerraform(this._trafficAnalytics),
    };
  }
}
