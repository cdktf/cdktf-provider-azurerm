// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkWatcherFlowLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#id NetworkWatcherFlowLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#location NetworkWatcherFlowLog#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#name NetworkWatcherFlowLog#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#network_security_group_id NetworkWatcherFlowLog#network_security_group_id}
  */
  readonly networkSecurityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#network_watcher_name NetworkWatcherFlowLog#network_watcher_name}
  */
  readonly networkWatcherName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#resource_group_name NetworkWatcherFlowLog#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#storage_account_id NetworkWatcherFlowLog#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#tags NetworkWatcherFlowLog#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#version NetworkWatcherFlowLog#version}
  */
  readonly version?: number;
  /**
  * retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#retention_policy NetworkWatcherFlowLog#retention_policy}
  */
  readonly retentionPolicy: NetworkWatcherFlowLogRetentionPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#timeouts NetworkWatcherFlowLog#timeouts}
  */
  readonly timeouts?: NetworkWatcherFlowLogTimeouts;
  /**
  * traffic_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#traffic_analytics NetworkWatcherFlowLog#traffic_analytics}
  */
  readonly trafficAnalytics?: NetworkWatcherFlowLogTrafficAnalytics;
}
export interface NetworkWatcherFlowLogRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#days NetworkWatcherFlowLog#days}
  */
  readonly days: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function networkWatcherFlowLogRetentionPolicyToTerraform(struct?: NetworkWatcherFlowLogRetentionPolicyOutputReference | NetworkWatcherFlowLogRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function networkWatcherFlowLogRetentionPolicyToHclTerraform(struct?: NetworkWatcherFlowLogRetentionPolicyOutputReference | NetworkWatcherFlowLogRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkWatcherFlowLogRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkWatcherFlowLogRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkWatcherFlowLogRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._enabled = value.enabled;
    }
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
    return this._days;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface NetworkWatcherFlowLogTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#create NetworkWatcherFlowLog#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#delete NetworkWatcherFlowLog#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#read NetworkWatcherFlowLog#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#update NetworkWatcherFlowLog#update}
  */
  readonly update?: string;
}

export function networkWatcherFlowLogTimeoutsToTerraform(struct?: NetworkWatcherFlowLogTimeouts | cdktf.IResolvable): any {
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


export function networkWatcherFlowLogTimeoutsToHclTerraform(struct?: NetworkWatcherFlowLogTimeouts | cdktf.IResolvable): any {
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

export class NetworkWatcherFlowLogTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkWatcherFlowLogTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkWatcherFlowLogTimeouts | cdktf.IResolvable | undefined) {
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
export interface NetworkWatcherFlowLogTrafficAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#interval_in_minutes NetworkWatcherFlowLog#interval_in_minutes}
  */
  readonly intervalInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#workspace_id NetworkWatcherFlowLog#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#workspace_region NetworkWatcherFlowLog#workspace_region}
  */
  readonly workspaceRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#workspace_resource_id NetworkWatcherFlowLog#workspace_resource_id}
  */
  readonly workspaceResourceId: string;
}

export function networkWatcherFlowLogTrafficAnalyticsToTerraform(struct?: NetworkWatcherFlowLogTrafficAnalyticsOutputReference | NetworkWatcherFlowLogTrafficAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function networkWatcherFlowLogTrafficAnalyticsToHclTerraform(struct?: NetworkWatcherFlowLogTrafficAnalyticsOutputReference | NetworkWatcherFlowLogTrafficAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.intervalInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_region: {
      value: cdktf.stringToHclTerraform(struct!.workspaceRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkWatcherFlowLogTrafficAnalyticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkWatcherFlowLogTrafficAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._intervalInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalInMinutes = this._intervalInMinutes;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    if (this._workspaceRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceRegion = this._workspaceRegion;
    }
    if (this._workspaceResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceResourceId = this._workspaceResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkWatcherFlowLogTrafficAnalytics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._intervalInMinutes = undefined;
      this._workspaceId = undefined;
      this._workspaceRegion = undefined;
      this._workspaceResourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._intervalInMinutes = value.intervalInMinutes;
      this._workspaceId = value.workspaceId;
      this._workspaceRegion = value.workspaceRegion;
      this._workspaceResourceId = value.workspaceResourceId;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // interval_in_minutes - computed: false, optional: true, required: false
  private _intervalInMinutes?: number; 
  public get intervalInMinutes() {
    return this.getNumberAttribute('interval_in_minutes');
  }
  public set intervalInMinutes(value: number) {
    this._intervalInMinutes = value;
  }
  public resetIntervalInMinutes() {
    this._intervalInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInMinutesInput() {
    return this._intervalInMinutes;
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
    return this._workspaceId;
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
    return this._workspaceRegion;
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
    return this._workspaceResourceId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log azurerm_network_watcher_flow_log}
*/
export class NetworkWatcherFlowLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_network_watcher_flow_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkWatcherFlowLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkWatcherFlowLog to import
  * @param importFromId The id of the existing NetworkWatcherFlowLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkWatcherFlowLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_network_watcher_flow_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_watcher_flow_log azurerm_network_watcher_flow_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkWatcherFlowLogConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkWatcherFlowLogConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_watcher_flow_log',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._networkSecurityGroupId = config.networkSecurityGroupId;
    this._networkWatcherName = config.networkWatcherName;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountId = config.storageAccountId;
    this._tags = config.tags;
    this._version = config.version;
    this._retentionPolicy.internalValue = config.retentionPolicy;
    this._timeouts.internalValue = config.timeouts;
    this._trafficAnalytics.internalValue = config.trafficAnalytics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
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
    return this._networkSecurityGroupId;
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
    return this._networkWatcherName;
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

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // retention_policy - computed: false, optional: false, required: true
  private _retentionPolicy = new NetworkWatcherFlowLogRetentionPolicyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: NetworkWatcherFlowLogRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkWatcherFlowLogTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkWatcherFlowLogTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // traffic_analytics - computed: false, optional: true, required: false
  private _trafficAnalytics = new NetworkWatcherFlowLogTrafficAnalyticsOutputReference(this, "traffic_analytics");
  public get trafficAnalytics() {
    return this._trafficAnalytics;
  }
  public putTrafficAnalytics(value: NetworkWatcherFlowLogTrafficAnalytics) {
    this._trafficAnalytics.internalValue = value;
  }
  public resetTrafficAnalytics() {
    this._trafficAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficAnalyticsInput() {
    return this._trafficAnalytics.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_security_group_id: cdktf.stringToTerraform(this._networkSecurityGroupId),
      network_watcher_name: cdktf.stringToTerraform(this._networkWatcherName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version: cdktf.numberToTerraform(this._version),
      retention_policy: networkWatcherFlowLogRetentionPolicyToTerraform(this._retentionPolicy.internalValue),
      timeouts: networkWatcherFlowLogTimeoutsToTerraform(this._timeouts.internalValue),
      traffic_analytics: networkWatcherFlowLogTrafficAnalyticsToTerraform(this._trafficAnalytics.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      network_security_group_id: {
        value: cdktf.stringToHclTerraform(this._networkSecurityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_watcher_name: {
        value: cdktf.stringToHclTerraform(this._networkWatcherName),
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
      storage_account_id: {
        value: cdktf.stringToHclTerraform(this._storageAccountId),
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
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_policy: {
        value: networkWatcherFlowLogRetentionPolicyToHclTerraform(this._retentionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkWatcherFlowLogRetentionPolicyList",
      },
      timeouts: {
        value: networkWatcherFlowLogTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkWatcherFlowLogTimeouts",
      },
      traffic_analytics: {
        value: networkWatcherFlowLogTrafficAnalyticsToHclTerraform(this._trafficAnalytics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkWatcherFlowLogTrafficAnalyticsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
