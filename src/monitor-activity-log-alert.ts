// https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorActivityLogAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#description MonitorActivityLogAlert#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#enabled MonitorActivityLogAlert#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#name MonitorActivityLogAlert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#resource_group_name MonitorActivityLogAlert#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#scopes MonitorActivityLogAlert#scopes}
  */
  readonly scopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#tags MonitorActivityLogAlert#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#action MonitorActivityLogAlert#action}
  */
  readonly action?: MonitorActivityLogAlertAction[];
  /**
  * criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#criteria MonitorActivityLogAlert#criteria}
  */
  readonly criteria: MonitorActivityLogAlertCriteria;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#timeouts MonitorActivityLogAlert#timeouts}
  */
  readonly timeouts?: MonitorActivityLogAlertTimeouts;
}
export interface MonitorActivityLogAlertAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#action_group_id MonitorActivityLogAlert#action_group_id}
  */
  readonly actionGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#webhook_properties MonitorActivityLogAlert#webhook_properties}
  */
  readonly webhookProperties?: { [key: string]: string } | cdktf.IResolvable;
}

export function monitorActivityLogAlertActionToTerraform(struct?: MonitorActivityLogAlertAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_group_id: cdktf.stringToTerraform(struct!.actionGroupId),
    webhook_properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.webhookProperties),
  }
}

export interface MonitorActivityLogAlertCriteriaServiceHealth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#events MonitorActivityLogAlert#events}
  */
  readonly events?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#locations MonitorActivityLogAlert#locations}
  */
  readonly locations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#services MonitorActivityLogAlert#services}
  */
  readonly services?: string[];
}

export function monitorActivityLogAlertCriteriaServiceHealthToTerraform(struct?: MonitorActivityLogAlertCriteriaServiceHealth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
    locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.locations),
    services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.services),
  }
}

export interface MonitorActivityLogAlertCriteria {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#caller MonitorActivityLogAlert#caller}
  */
  readonly caller?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#category MonitorActivityLogAlert#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#level MonitorActivityLogAlert#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#operation_name MonitorActivityLogAlert#operation_name}
  */
  readonly operationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#recommendation_category MonitorActivityLogAlert#recommendation_category}
  */
  readonly recommendationCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#recommendation_impact MonitorActivityLogAlert#recommendation_impact}
  */
  readonly recommendationImpact?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#recommendation_type MonitorActivityLogAlert#recommendation_type}
  */
  readonly recommendationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#resource_group MonitorActivityLogAlert#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#resource_id MonitorActivityLogAlert#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#resource_provider MonitorActivityLogAlert#resource_provider}
  */
  readonly resourceProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#resource_type MonitorActivityLogAlert#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#status MonitorActivityLogAlert#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#sub_status MonitorActivityLogAlert#sub_status}
  */
  readonly subStatus?: string;
  /**
  * service_health block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#service_health MonitorActivityLogAlert#service_health}
  */
  readonly serviceHealth?: MonitorActivityLogAlertCriteriaServiceHealth[];
}

export function monitorActivityLogAlertCriteriaToTerraform(struct?: MonitorActivityLogAlertCriteriaOutputReference | MonitorActivityLogAlertCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caller: cdktf.stringToTerraform(struct!.caller),
    category: cdktf.stringToTerraform(struct!.category),
    level: cdktf.stringToTerraform(struct!.level),
    operation_name: cdktf.stringToTerraform(struct!.operationName),
    recommendation_category: cdktf.stringToTerraform(struct!.recommendationCategory),
    recommendation_impact: cdktf.stringToTerraform(struct!.recommendationImpact),
    recommendation_type: cdktf.stringToTerraform(struct!.recommendationType),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_provider: cdktf.stringToTerraform(struct!.resourceProvider),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    status: cdktf.stringToTerraform(struct!.status),
    sub_status: cdktf.stringToTerraform(struct!.subStatus),
    service_health: cdktf.listMapper(monitorActivityLogAlertCriteriaServiceHealthToTerraform)(struct!.serviceHealth),
  }
}

export class MonitorActivityLogAlertCriteriaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorActivityLogAlertCriteria | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._caller) {
      hasAnyValues = true;
      internalValueResult.caller = this._caller;
    }
    if (this._category) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._level) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._operationName) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    if (this._recommendationCategory) {
      hasAnyValues = true;
      internalValueResult.recommendationCategory = this._recommendationCategory;
    }
    if (this._recommendationImpact) {
      hasAnyValues = true;
      internalValueResult.recommendationImpact = this._recommendationImpact;
    }
    if (this._recommendationType) {
      hasAnyValues = true;
      internalValueResult.recommendationType = this._recommendationType;
    }
    if (this._resourceGroup) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._resourceId) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceProvider) {
      hasAnyValues = true;
      internalValueResult.resourceProvider = this._resourceProvider;
    }
    if (this._resourceType) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._status) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._subStatus) {
      hasAnyValues = true;
      internalValueResult.subStatus = this._subStatus;
    }
    if (this._serviceHealth) {
      hasAnyValues = true;
      internalValueResult.serviceHealth = this._serviceHealth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActivityLogAlertCriteria | undefined) {
    if (value === undefined) {
      this._caller = undefined;
      this._category = undefined;
      this._level = undefined;
      this._operationName = undefined;
      this._recommendationCategory = undefined;
      this._recommendationImpact = undefined;
      this._recommendationType = undefined;
      this._resourceGroup = undefined;
      this._resourceId = undefined;
      this._resourceProvider = undefined;
      this._resourceType = undefined;
      this._status = undefined;
      this._subStatus = undefined;
      this._serviceHealth = undefined;
    }
    else {
      this._caller = value.caller;
      this._category = value.category;
      this._level = value.level;
      this._operationName = value.operationName;
      this._recommendationCategory = value.recommendationCategory;
      this._recommendationImpact = value.recommendationImpact;
      this._recommendationType = value.recommendationType;
      this._resourceGroup = value.resourceGroup;
      this._resourceId = value.resourceId;
      this._resourceProvider = value.resourceProvider;
      this._resourceType = value.resourceType;
      this._status = value.status;
      this._subStatus = value.subStatus;
      this._serviceHealth = value.serviceHealth;
    }
  }

  // caller - computed: false, optional: true, required: false
  private _caller?: string; 
  public get caller() {
    return this.getStringAttribute('caller');
  }
  public set caller(value: string) {
    this._caller = value;
  }
  public resetCaller() {
    this._caller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerInput() {
    return this._caller;
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // operation_name - computed: false, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // recommendation_category - computed: false, optional: true, required: false
  private _recommendationCategory?: string; 
  public get recommendationCategory() {
    return this.getStringAttribute('recommendation_category');
  }
  public set recommendationCategory(value: string) {
    this._recommendationCategory = value;
  }
  public resetRecommendationCategory() {
    this._recommendationCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationCategoryInput() {
    return this._recommendationCategory;
  }

  // recommendation_impact - computed: false, optional: true, required: false
  private _recommendationImpact?: string; 
  public get recommendationImpact() {
    return this.getStringAttribute('recommendation_impact');
  }
  public set recommendationImpact(value: string) {
    this._recommendationImpact = value;
  }
  public resetRecommendationImpact() {
    this._recommendationImpact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationImpactInput() {
    return this._recommendationImpact;
  }

  // recommendation_type - computed: false, optional: true, required: false
  private _recommendationType?: string; 
  public get recommendationType() {
    return this.getStringAttribute('recommendation_type');
  }
  public set recommendationType(value: string) {
    this._recommendationType = value;
  }
  public resetRecommendationType() {
    this._recommendationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationTypeInput() {
    return this._recommendationType;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_provider - computed: false, optional: true, required: false
  private _resourceProvider?: string; 
  public get resourceProvider() {
    return this.getStringAttribute('resource_provider');
  }
  public set resourceProvider(value: string) {
    this._resourceProvider = value;
  }
  public resetResourceProvider() {
    this._resourceProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceProviderInput() {
    return this._resourceProvider;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // sub_status - computed: false, optional: true, required: false
  private _subStatus?: string; 
  public get subStatus() {
    return this.getStringAttribute('sub_status');
  }
  public set subStatus(value: string) {
    this._subStatus = value;
  }
  public resetSubStatus() {
    this._subStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subStatusInput() {
    return this._subStatus;
  }

  // service_health - computed: false, optional: true, required: false
  private _serviceHealth?: MonitorActivityLogAlertCriteriaServiceHealth[]; 
  public get serviceHealth() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('service_health') as any;
  }
  public set serviceHealth(value: MonitorActivityLogAlertCriteriaServiceHealth[]) {
    this._serviceHealth = value;
  }
  public resetServiceHealth() {
    this._serviceHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceHealthInput() {
    return this._serviceHealth;
  }
}
export interface MonitorActivityLogAlertTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#create MonitorActivityLogAlert#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#delete MonitorActivityLogAlert#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#read MonitorActivityLogAlert#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html#update MonitorActivityLogAlert#update}
  */
  readonly update?: string;
}

export function monitorActivityLogAlertTimeoutsToTerraform(struct?: MonitorActivityLogAlertTimeoutsOutputReference | MonitorActivityLogAlertTimeouts): any {
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

export class MonitorActivityLogAlertTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorActivityLogAlertTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActivityLogAlertTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html azurerm_monitor_activity_log_alert}
*/
export class MonitorActivityLogAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_activity_log_alert";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_activity_log_alert.html azurerm_monitor_activity_log_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorActivityLogAlertConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorActivityLogAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_activity_log_alert',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._scopes = config.scopes;
    this._tags = config.tags;
    this._action = config.action;
    this._criteria.internalValue = config.criteria;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
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
  public get id() {
    return this.getStringAttribute('id');
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

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // action - computed: false, optional: true, required: false
  private _action?: MonitorActivityLogAlertAction[]; 
  public get action() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('action') as any;
  }
  public set action(value: MonitorActivityLogAlertAction[]) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new MonitorActivityLogAlertCriteriaOutputReference(this as any, "criteria", true);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: MonitorActivityLogAlertCriteria) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorActivityLogAlertTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorActivityLogAlertTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._scopes),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      action: cdktf.listMapper(monitorActivityLogAlertActionToTerraform)(this._action),
      criteria: monitorActivityLogAlertCriteriaToTerraform(this._criteria.internalValue),
      timeouts: monitorActivityLogAlertTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
