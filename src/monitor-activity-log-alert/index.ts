// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorActivityLogAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#description MonitorActivityLogAlert#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#enabled MonitorActivityLogAlert#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#id MonitorActivityLogAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#location MonitorActivityLogAlert#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#name MonitorActivityLogAlert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#resource_group_name MonitorActivityLogAlert#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#scopes MonitorActivityLogAlert#scopes}
  */
  readonly scopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#tags MonitorActivityLogAlert#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#action MonitorActivityLogAlert#action}
  */
  readonly action?: MonitorActivityLogAlertAction[] | cdktf.IResolvable;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#criteria MonitorActivityLogAlert#criteria}
  */
  readonly criteria: MonitorActivityLogAlertCriteria;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#timeouts MonitorActivityLogAlert#timeouts}
  */
  readonly timeouts?: MonitorActivityLogAlertTimeouts;
}
export interface MonitorActivityLogAlertAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#action_group_id MonitorActivityLogAlert#action_group_id}
  */
  readonly actionGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#webhook_properties MonitorActivityLogAlert#webhook_properties}
  */
  readonly webhookProperties?: { [key: string]: string };
}

export function monitorActivityLogAlertActionToTerraform(struct?: MonitorActivityLogAlertAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_group_id: cdktf.stringToTerraform(struct!.actionGroupId),
    webhook_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.webhookProperties),
  }
}


export function monitorActivityLogAlertActionToHclTerraform(struct?: MonitorActivityLogAlertAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_group_id: {
      value: cdktf.stringToHclTerraform(struct!.actionGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.webhookProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActivityLogAlertActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitorActivityLogAlertAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionGroupId = this._actionGroupId;
    }
    if (this._webhookProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookProperties = this._webhookProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActivityLogAlertAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionGroupId = undefined;
      this._webhookProperties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionGroupId = value.actionGroupId;
      this._webhookProperties = value.webhookProperties;
    }
  }

  // action_group_id - computed: false, optional: false, required: true
  private _actionGroupId?: string; 
  public get actionGroupId() {
    return this.getStringAttribute('action_group_id');
  }
  public set actionGroupId(value: string) {
    this._actionGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupIdInput() {
    return this._actionGroupId;
  }

  // webhook_properties - computed: false, optional: true, required: false
  private _webhookProperties?: { [key: string]: string }; 
  public get webhookProperties() {
    return this.getStringMapAttribute('webhook_properties');
  }
  public set webhookProperties(value: { [key: string]: string }) {
    this._webhookProperties = value;
  }
  public resetWebhookProperties() {
    this._webhookProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookPropertiesInput() {
    return this._webhookProperties;
  }
}

export class MonitorActivityLogAlertActionList extends cdktf.ComplexList {
  public internalValue? : MonitorActivityLogAlertAction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorActivityLogAlertActionOutputReference {
    return new MonitorActivityLogAlertActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorActivityLogAlertCriteriaResourceHealth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#current MonitorActivityLogAlert#current}
  */
  readonly current?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#previous MonitorActivityLogAlert#previous}
  */
  readonly previous?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#reason MonitorActivityLogAlert#reason}
  */
  readonly reason?: string[];
}

export function monitorActivityLogAlertCriteriaResourceHealthToTerraform(struct?: MonitorActivityLogAlertCriteriaResourceHealthOutputReference | MonitorActivityLogAlertCriteriaResourceHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.current),
    previous: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.previous),
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
  }
}


export function monitorActivityLogAlertCriteriaResourceHealthToHclTerraform(struct?: MonitorActivityLogAlertCriteriaResourceHealthOutputReference | MonitorActivityLogAlertCriteriaResourceHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.current),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    previous: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.previous),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActivityLogAlertCriteriaResourceHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorActivityLogAlertCriteriaResourceHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._current !== undefined) {
      hasAnyValues = true;
      internalValueResult.current = this._current;
    }
    if (this._previous !== undefined) {
      hasAnyValues = true;
      internalValueResult.previous = this._previous;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActivityLogAlertCriteriaResourceHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._current = undefined;
      this._previous = undefined;
      this._reason = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._current = value.current;
      this._previous = value.previous;
      this._reason = value.reason;
    }
  }

  // current - computed: false, optional: true, required: false
  private _current?: string[]; 
  public get current() {
    return cdktf.Fn.tolist(this.getListAttribute('current'));
  }
  public set current(value: string[]) {
    this._current = value;
  }
  public resetCurrent() {
    this._current = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentInput() {
    return this._current;
  }

  // previous - computed: false, optional: true, required: false
  private _previous?: string[]; 
  public get previous() {
    return cdktf.Fn.tolist(this.getListAttribute('previous'));
  }
  public set previous(value: string[]) {
    this._previous = value;
  }
  public resetPrevious() {
    this._previous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousInput() {
    return this._previous;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return cdktf.Fn.tolist(this.getListAttribute('reason'));
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface MonitorActivityLogAlertCriteriaServiceHealth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#events MonitorActivityLogAlert#events}
  */
  readonly events?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#locations MonitorActivityLogAlert#locations}
  */
  readonly locations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#services MonitorActivityLogAlert#services}
  */
  readonly services?: string[];
}

export function monitorActivityLogAlertCriteriaServiceHealthToTerraform(struct?: MonitorActivityLogAlertCriteriaServiceHealthOutputReference | MonitorActivityLogAlertCriteriaServiceHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function monitorActivityLogAlertCriteriaServiceHealthToHclTerraform(struct?: MonitorActivityLogAlertCriteriaServiceHealthOutputReference | MonitorActivityLogAlertCriteriaServiceHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActivityLogAlertCriteriaServiceHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorActivityLogAlertCriteriaServiceHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActivityLogAlertCriteriaServiceHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._events = undefined;
      this._locations = undefined;
      this._services = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._events = value.events;
      this._locations = value.locations;
      this._services = value.services;
    }
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return cdktf.Fn.tolist(this.getListAttribute('locations'));
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface MonitorActivityLogAlertCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#caller MonitorActivityLogAlert#caller}
  */
  readonly caller?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#category MonitorActivityLogAlert#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#level MonitorActivityLogAlert#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#levels MonitorActivityLogAlert#levels}
  */
  readonly levels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#operation_name MonitorActivityLogAlert#operation_name}
  */
  readonly operationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#recommendation_category MonitorActivityLogAlert#recommendation_category}
  */
  readonly recommendationCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#recommendation_impact MonitorActivityLogAlert#recommendation_impact}
  */
  readonly recommendationImpact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#recommendation_type MonitorActivityLogAlert#recommendation_type}
  */
  readonly recommendationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#resource_group MonitorActivityLogAlert#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#resource_groups MonitorActivityLogAlert#resource_groups}
  */
  readonly resourceGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#resource_id MonitorActivityLogAlert#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#resource_ids MonitorActivityLogAlert#resource_ids}
  */
  readonly resourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#resource_provider MonitorActivityLogAlert#resource_provider}
  */
  readonly resourceProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#resource_providers MonitorActivityLogAlert#resource_providers}
  */
  readonly resourceProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#resource_type MonitorActivityLogAlert#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#resource_types MonitorActivityLogAlert#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#status MonitorActivityLogAlert#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#statuses MonitorActivityLogAlert#statuses}
  */
  readonly statuses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#sub_status MonitorActivityLogAlert#sub_status}
  */
  readonly subStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#sub_statuses MonitorActivityLogAlert#sub_statuses}
  */
  readonly subStatuses?: string[];
  /**
  * resource_health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#resource_health MonitorActivityLogAlert#resource_health}
  */
  readonly resourceHealth?: MonitorActivityLogAlertCriteriaResourceHealth;
  /**
  * service_health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#service_health MonitorActivityLogAlert#service_health}
  */
  readonly serviceHealth?: MonitorActivityLogAlertCriteriaServiceHealth;
}

export function monitorActivityLogAlertCriteriaToTerraform(struct?: MonitorActivityLogAlertCriteriaOutputReference | MonitorActivityLogAlertCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caller: cdktf.stringToTerraform(struct!.caller),
    category: cdktf.stringToTerraform(struct!.category),
    level: cdktf.stringToTerraform(struct!.level),
    levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.levels),
    operation_name: cdktf.stringToTerraform(struct!.operationName),
    recommendation_category: cdktf.stringToTerraform(struct!.recommendationCategory),
    recommendation_impact: cdktf.stringToTerraform(struct!.recommendationImpact),
    recommendation_type: cdktf.stringToTerraform(struct!.recommendationType),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceIds),
    resource_provider: cdktf.stringToTerraform(struct!.resourceProvider),
    resource_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceProviders),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
    status: cdktf.stringToTerraform(struct!.status),
    statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statuses),
    sub_status: cdktf.stringToTerraform(struct!.subStatus),
    sub_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subStatuses),
    resource_health: monitorActivityLogAlertCriteriaResourceHealthToTerraform(struct!.resourceHealth),
    service_health: monitorActivityLogAlertCriteriaServiceHealthToTerraform(struct!.serviceHealth),
  }
}


export function monitorActivityLogAlertCriteriaToHclTerraform(struct?: MonitorActivityLogAlertCriteriaOutputReference | MonitorActivityLogAlertCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caller: {
      value: cdktf.stringToHclTerraform(struct!.caller),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    levels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.levels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operation_name: {
      value: cdktf.stringToHclTerraform(struct!.operationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recommendation_category: {
      value: cdktf.stringToHclTerraform(struct!.recommendationCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recommendation_impact: {
      value: cdktf.stringToHclTerraform(struct!.recommendationImpact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recommendation_type: {
      value: cdktf.stringToHclTerraform(struct!.recommendationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_provider: {
      value: cdktf.stringToHclTerraform(struct!.resourceProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceProviders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sub_status: {
      value: cdktf.stringToHclTerraform(struct!.subStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_health: {
      value: monitorActivityLogAlertCriteriaResourceHealthToHclTerraform(struct!.resourceHealth),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorActivityLogAlertCriteriaResourceHealthList",
    },
    service_health: {
      value: monitorActivityLogAlertCriteriaServiceHealthToHclTerraform(struct!.serviceHealth),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorActivityLogAlertCriteriaServiceHealthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActivityLogAlertCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorActivityLogAlertCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caller !== undefined) {
      hasAnyValues = true;
      internalValueResult.caller = this._caller;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._levels !== undefined) {
      hasAnyValues = true;
      internalValueResult.levels = this._levels;
    }
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    if (this._recommendationCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendationCategory = this._recommendationCategory;
    }
    if (this._recommendationImpact !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendationImpact = this._recommendationImpact;
    }
    if (this._recommendationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendationType = this._recommendationType;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIds = this._resourceIds;
    }
    if (this._resourceProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceProvider = this._resourceProvider;
    }
    if (this._resourceProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceProviders = this._resourceProviders;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._statuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.statuses = this._statuses;
    }
    if (this._subStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.subStatus = this._subStatus;
    }
    if (this._subStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.subStatuses = this._subStatuses;
    }
    if (this._resourceHealth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceHealth = this._resourceHealth?.internalValue;
    }
    if (this._serviceHealth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceHealth = this._serviceHealth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActivityLogAlertCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caller = undefined;
      this._category = undefined;
      this._level = undefined;
      this._levels = undefined;
      this._operationName = undefined;
      this._recommendationCategory = undefined;
      this._recommendationImpact = undefined;
      this._recommendationType = undefined;
      this._resourceGroup = undefined;
      this._resourceGroups = undefined;
      this._resourceId = undefined;
      this._resourceIds = undefined;
      this._resourceProvider = undefined;
      this._resourceProviders = undefined;
      this._resourceType = undefined;
      this._resourceTypes = undefined;
      this._status = undefined;
      this._statuses = undefined;
      this._subStatus = undefined;
      this._subStatuses = undefined;
      this._resourceHealth.internalValue = undefined;
      this._serviceHealth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caller = value.caller;
      this._category = value.category;
      this._level = value.level;
      this._levels = value.levels;
      this._operationName = value.operationName;
      this._recommendationCategory = value.recommendationCategory;
      this._recommendationImpact = value.recommendationImpact;
      this._recommendationType = value.recommendationType;
      this._resourceGroup = value.resourceGroup;
      this._resourceGroups = value.resourceGroups;
      this._resourceId = value.resourceId;
      this._resourceIds = value.resourceIds;
      this._resourceProvider = value.resourceProvider;
      this._resourceProviders = value.resourceProviders;
      this._resourceType = value.resourceType;
      this._resourceTypes = value.resourceTypes;
      this._status = value.status;
      this._statuses = value.statuses;
      this._subStatus = value.subStatus;
      this._subStatuses = value.subStatuses;
      this._resourceHealth.internalValue = value.resourceHealth;
      this._serviceHealth.internalValue = value.serviceHealth;
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

  // levels - computed: false, optional: true, required: false
  private _levels?: string[]; 
  public get levels() {
    return this.getListAttribute('levels');
  }
  public set levels(value: string[]) {
    this._levels = value;
  }
  public resetLevels() {
    this._levels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelsInput() {
    return this._levels;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
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

  // resource_ids - computed: false, optional: true, required: false
  private _resourceIds?: string[]; 
  public get resourceIds() {
    return this.getListAttribute('resource_ids');
  }
  public set resourceIds(value: string[]) {
    this._resourceIds = value;
  }
  public resetResourceIds() {
    this._resourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsInput() {
    return this._resourceIds;
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

  // resource_providers - computed: false, optional: true, required: false
  private _resourceProviders?: string[]; 
  public get resourceProviders() {
    return this.getListAttribute('resource_providers');
  }
  public set resourceProviders(value: string[]) {
    this._resourceProviders = value;
  }
  public resetResourceProviders() {
    this._resourceProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceProvidersInput() {
    return this._resourceProviders;
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

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
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

  // statuses - computed: false, optional: true, required: false
  private _statuses?: string[]; 
  public get statuses() {
    return this.getListAttribute('statuses');
  }
  public set statuses(value: string[]) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
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

  // sub_statuses - computed: false, optional: true, required: false
  private _subStatuses?: string[]; 
  public get subStatuses() {
    return this.getListAttribute('sub_statuses');
  }
  public set subStatuses(value: string[]) {
    this._subStatuses = value;
  }
  public resetSubStatuses() {
    this._subStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subStatusesInput() {
    return this._subStatuses;
  }

  // resource_health - computed: false, optional: true, required: false
  private _resourceHealth = new MonitorActivityLogAlertCriteriaResourceHealthOutputReference(this, "resource_health");
  public get resourceHealth() {
    return this._resourceHealth;
  }
  public putResourceHealth(value: MonitorActivityLogAlertCriteriaResourceHealth) {
    this._resourceHealth.internalValue = value;
  }
  public resetResourceHealth() {
    this._resourceHealth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceHealthInput() {
    return this._resourceHealth.internalValue;
  }

  // service_health - computed: false, optional: true, required: false
  private _serviceHealth = new MonitorActivityLogAlertCriteriaServiceHealthOutputReference(this, "service_health");
  public get serviceHealth() {
    return this._serviceHealth;
  }
  public putServiceHealth(value: MonitorActivityLogAlertCriteriaServiceHealth) {
    this._serviceHealth.internalValue = value;
  }
  public resetServiceHealth() {
    this._serviceHealth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceHealthInput() {
    return this._serviceHealth.internalValue;
  }
}
export interface MonitorActivityLogAlertTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#create MonitorActivityLogAlert#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#delete MonitorActivityLogAlert#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#read MonitorActivityLogAlert#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#update MonitorActivityLogAlert#update}
  */
  readonly update?: string;
}

export function monitorActivityLogAlertTimeoutsToTerraform(struct?: MonitorActivityLogAlertTimeouts | cdktf.IResolvable): any {
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


export function monitorActivityLogAlertTimeoutsToHclTerraform(struct?: MonitorActivityLogAlertTimeouts | cdktf.IResolvable): any {
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

export class MonitorActivityLogAlertTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorActivityLogAlertTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorActivityLogAlertTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert azurerm_monitor_activity_log_alert}
*/
export class MonitorActivityLogAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_monitor_activity_log_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorActivityLogAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorActivityLogAlert to import
  * @param importFromId The id of the existing MonitorActivityLogAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorActivityLogAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_monitor_activity_log_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_activity_log_alert azurerm_monitor_activity_log_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorActivityLogAlertConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorActivityLogAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_activity_log_alert',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._scopes = config.scopes;
    this._tags = config.tags;
    this._action.internalValue = config.action;
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

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

  // action - computed: false, optional: true, required: false
  private _action = new MonitorActivityLogAlertActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: MonitorActivityLogAlertAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new MonitorActivityLogAlertCriteriaOutputReference(this, "criteria");
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
  private _timeouts = new MonitorActivityLogAlertTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      action: cdktf.listMapper(monitorActivityLogAlertActionToTerraform, true)(this._action.internalValue),
      criteria: monitorActivityLogAlertCriteriaToTerraform(this._criteria.internalValue),
      timeouts: monitorActivityLogAlertTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      action: {
        value: cdktf.listMapperHcl(monitorActivityLogAlertActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActivityLogAlertActionList",
      },
      criteria: {
        value: monitorActivityLogAlertCriteriaToHclTerraform(this._criteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActivityLogAlertCriteriaList",
      },
      timeouts: {
        value: monitorActivityLogAlertTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorActivityLogAlertTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
