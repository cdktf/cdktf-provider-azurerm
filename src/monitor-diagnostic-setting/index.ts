// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorDiagnosticSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#eventhub_authorization_rule_id MonitorDiagnosticSetting#eventhub_authorization_rule_id}
  */
  readonly eventhubAuthorizationRuleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#eventhub_name MonitorDiagnosticSetting#eventhub_name}
  */
  readonly eventhubName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#id MonitorDiagnosticSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#log_analytics_destination_type MonitorDiagnosticSetting#log_analytics_destination_type}
  */
  readonly logAnalyticsDestinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#log_analytics_workspace_id MonitorDiagnosticSetting#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#name MonitorDiagnosticSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#partner_solution_id MonitorDiagnosticSetting#partner_solution_id}
  */
  readonly partnerSolutionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#storage_account_id MonitorDiagnosticSetting#storage_account_id}
  */
  readonly storageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#target_resource_id MonitorDiagnosticSetting#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * enabled_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#enabled_log MonitorDiagnosticSetting#enabled_log}
  */
  readonly enabledLog?: MonitorDiagnosticSettingEnabledLog[] | cdktf.IResolvable;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#metric MonitorDiagnosticSetting#metric}
  */
  readonly metric?: MonitorDiagnosticSettingMetric[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#timeouts MonitorDiagnosticSetting#timeouts}
  */
  readonly timeouts?: MonitorDiagnosticSettingTimeouts;
}
export interface MonitorDiagnosticSettingEnabledLogRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function monitorDiagnosticSettingEnabledLogRetentionPolicyToTerraform(struct?: MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference | MonitorDiagnosticSettingEnabledLogRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function monitorDiagnosticSettingEnabledLogRetentionPolicyToHclTerraform(struct?: MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference | MonitorDiagnosticSettingEnabledLogRetentionPolicy): any {
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

export class MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDiagnosticSettingEnabledLogRetentionPolicy | undefined {
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

  public set internalValue(value: MonitorDiagnosticSettingEnabledLogRetentionPolicy | undefined) {
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

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
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
export interface MonitorDiagnosticSettingEnabledLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#category_group MonitorDiagnosticSetting#category_group}
  */
  readonly categoryGroup?: string;
  /**
  * retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#retention_policy MonitorDiagnosticSetting#retention_policy}
  */
  readonly retentionPolicy?: MonitorDiagnosticSettingEnabledLogRetentionPolicy;
}

export function monitorDiagnosticSettingEnabledLogToTerraform(struct?: MonitorDiagnosticSettingEnabledLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    category_group: cdktf.stringToTerraform(struct!.categoryGroup),
    retention_policy: monitorDiagnosticSettingEnabledLogRetentionPolicyToTerraform(struct!.retentionPolicy),
  }
}


export function monitorDiagnosticSettingEnabledLogToHclTerraform(struct?: MonitorDiagnosticSettingEnabledLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category_group: {
      value: cdktf.stringToHclTerraform(struct!.categoryGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_policy: {
      value: monitorDiagnosticSettingEnabledLogRetentionPolicyToHclTerraform(struct!.retentionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDiagnosticSettingEnabledLogRetentionPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDiagnosticSettingEnabledLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDiagnosticSettingEnabledLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._categoryGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryGroup = this._categoryGroup;
    }
    if (this._retentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicy = this._retentionPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDiagnosticSettingEnabledLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._categoryGroup = undefined;
      this._retentionPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._categoryGroup = value.categoryGroup;
      this._retentionPolicy.internalValue = value.retentionPolicy;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // category_group - computed: false, optional: true, required: false
  private _categoryGroup?: string; 
  public get categoryGroup() {
    return this.getStringAttribute('category_group');
  }
  public set categoryGroup(value: string) {
    this._categoryGroup = value;
  }
  public resetCategoryGroup() {
    this._categoryGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryGroupInput() {
    return this._categoryGroup;
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: MonitorDiagnosticSettingEnabledLogRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }
}

export class MonitorDiagnosticSettingEnabledLogList extends cdktf.ComplexList {
  public internalValue? : MonitorDiagnosticSettingEnabledLog[] | cdktf.IResolvable

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
  public get(index: number): MonitorDiagnosticSettingEnabledLogOutputReference {
    return new MonitorDiagnosticSettingEnabledLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDiagnosticSettingMetricRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function monitorDiagnosticSettingMetricRetentionPolicyToTerraform(struct?: MonitorDiagnosticSettingMetricRetentionPolicyOutputReference | MonitorDiagnosticSettingMetricRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function monitorDiagnosticSettingMetricRetentionPolicyToHclTerraform(struct?: MonitorDiagnosticSettingMetricRetentionPolicyOutputReference | MonitorDiagnosticSettingMetricRetentionPolicy): any {
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

export class MonitorDiagnosticSettingMetricRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDiagnosticSettingMetricRetentionPolicy | undefined {
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

  public set internalValue(value: MonitorDiagnosticSettingMetricRetentionPolicy | undefined) {
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

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
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
export interface MonitorDiagnosticSettingMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#retention_policy MonitorDiagnosticSetting#retention_policy}
  */
  readonly retentionPolicy?: MonitorDiagnosticSettingMetricRetentionPolicy;
}

export function monitorDiagnosticSettingMetricToTerraform(struct?: MonitorDiagnosticSettingMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_policy: monitorDiagnosticSettingMetricRetentionPolicyToTerraform(struct!.retentionPolicy),
  }
}


export function monitorDiagnosticSettingMetricToHclTerraform(struct?: MonitorDiagnosticSettingMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_policy: {
      value: monitorDiagnosticSettingMetricRetentionPolicyToHclTerraform(struct!.retentionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDiagnosticSettingMetricRetentionPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDiagnosticSettingMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDiagnosticSettingMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicy = this._retentionPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDiagnosticSettingMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._enabled = undefined;
      this._retentionPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._enabled = value.enabled;
      this._retentionPolicy.internalValue = value.retentionPolicy;
    }
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

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new MonitorDiagnosticSettingMetricRetentionPolicyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: MonitorDiagnosticSettingMetricRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }
}

export class MonitorDiagnosticSettingMetricList extends cdktf.ComplexList {
  public internalValue? : MonitorDiagnosticSettingMetric[] | cdktf.IResolvable

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
  public get(index: number): MonitorDiagnosticSettingMetricOutputReference {
    return new MonitorDiagnosticSettingMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDiagnosticSettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#create MonitorDiagnosticSetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#delete MonitorDiagnosticSetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#read MonitorDiagnosticSetting#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#update MonitorDiagnosticSetting#update}
  */
  readonly update?: string;
}

export function monitorDiagnosticSettingTimeoutsToTerraform(struct?: MonitorDiagnosticSettingTimeouts | cdktf.IResolvable): any {
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


export function monitorDiagnosticSettingTimeoutsToHclTerraform(struct?: MonitorDiagnosticSettingTimeouts | cdktf.IResolvable): any {
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

export class MonitorDiagnosticSettingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorDiagnosticSettingTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorDiagnosticSettingTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting azurerm_monitor_diagnostic_setting}
*/
export class MonitorDiagnosticSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_monitor_diagnostic_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorDiagnosticSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorDiagnosticSetting to import
  * @param importFromId The id of the existing MonitorDiagnosticSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorDiagnosticSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_monitor_diagnostic_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_diagnostic_setting azurerm_monitor_diagnostic_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorDiagnosticSettingConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorDiagnosticSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_diagnostic_setting',
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
    this._eventhubAuthorizationRuleId = config.eventhubAuthorizationRuleId;
    this._eventhubName = config.eventhubName;
    this._id = config.id;
    this._logAnalyticsDestinationType = config.logAnalyticsDestinationType;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._partnerSolutionId = config.partnerSolutionId;
    this._storageAccountId = config.storageAccountId;
    this._targetResourceId = config.targetResourceId;
    this._enabledLog.internalValue = config.enabledLog;
    this._metric.internalValue = config.metric;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eventhub_authorization_rule_id - computed: false, optional: true, required: false
  private _eventhubAuthorizationRuleId?: string; 
  public get eventhubAuthorizationRuleId() {
    return this.getStringAttribute('eventhub_authorization_rule_id');
  }
  public set eventhubAuthorizationRuleId(value: string) {
    this._eventhubAuthorizationRuleId = value;
  }
  public resetEventhubAuthorizationRuleId() {
    this._eventhubAuthorizationRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubAuthorizationRuleIdInput() {
    return this._eventhubAuthorizationRuleId;
  }

  // eventhub_name - computed: false, optional: true, required: false
  private _eventhubName?: string; 
  public get eventhubName() {
    return this.getStringAttribute('eventhub_name');
  }
  public set eventhubName(value: string) {
    this._eventhubName = value;
  }
  public resetEventhubName() {
    this._eventhubName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubNameInput() {
    return this._eventhubName;
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

  // log_analytics_destination_type - computed: true, optional: true, required: false
  private _logAnalyticsDestinationType?: string; 
  public get logAnalyticsDestinationType() {
    return this.getStringAttribute('log_analytics_destination_type');
  }
  public set logAnalyticsDestinationType(value: string) {
    this._logAnalyticsDestinationType = value;
  }
  public resetLogAnalyticsDestinationType() {
    this._logAnalyticsDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsDestinationTypeInput() {
    return this._logAnalyticsDestinationType;
  }

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
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

  // partner_solution_id - computed: false, optional: true, required: false
  private _partnerSolutionId?: string; 
  public get partnerSolutionId() {
    return this.getStringAttribute('partner_solution_id');
  }
  public set partnerSolutionId(value: string) {
    this._partnerSolutionId = value;
  }
  public resetPartnerSolutionId() {
    this._partnerSolutionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerSolutionIdInput() {
    return this._partnerSolutionId;
  }

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // enabled_log - computed: false, optional: true, required: false
  private _enabledLog = new MonitorDiagnosticSettingEnabledLogList(this, "enabled_log", true);
  public get enabledLog() {
    return this._enabledLog;
  }
  public putEnabledLog(value: MonitorDiagnosticSettingEnabledLog[] | cdktf.IResolvable) {
    this._enabledLog.internalValue = value;
  }
  public resetEnabledLog() {
    this._enabledLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledLogInput() {
    return this._enabledLog.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new MonitorDiagnosticSettingMetricList(this, "metric", true);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: MonitorDiagnosticSettingMetric[] | cdktf.IResolvable) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorDiagnosticSettingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorDiagnosticSettingTimeouts) {
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
      eventhub_authorization_rule_id: cdktf.stringToTerraform(this._eventhubAuthorizationRuleId),
      eventhub_name: cdktf.stringToTerraform(this._eventhubName),
      id: cdktf.stringToTerraform(this._id),
      log_analytics_destination_type: cdktf.stringToTerraform(this._logAnalyticsDestinationType),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      partner_solution_id: cdktf.stringToTerraform(this._partnerSolutionId),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      enabled_log: cdktf.listMapper(monitorDiagnosticSettingEnabledLogToTerraform, true)(this._enabledLog.internalValue),
      metric: cdktf.listMapper(monitorDiagnosticSettingMetricToTerraform, true)(this._metric.internalValue),
      timeouts: monitorDiagnosticSettingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      eventhub_authorization_rule_id: {
        value: cdktf.stringToHclTerraform(this._eventhubAuthorizationRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventhub_name: {
        value: cdktf.stringToHclTerraform(this._eventhubName),
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
      log_analytics_destination_type: {
        value: cdktf.stringToHclTerraform(this._logAnalyticsDestinationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_analytics_workspace_id: {
        value: cdktf.stringToHclTerraform(this._logAnalyticsWorkspaceId),
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
      partner_solution_id: {
        value: cdktf.stringToHclTerraform(this._partnerSolutionId),
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
      target_resource_id: {
        value: cdktf.stringToHclTerraform(this._targetResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_log: {
        value: cdktf.listMapperHcl(monitorDiagnosticSettingEnabledLogToHclTerraform, true)(this._enabledLog.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorDiagnosticSettingEnabledLogList",
      },
      metric: {
        value: cdktf.listMapperHcl(monitorDiagnosticSettingMetricToHclTerraform, true)(this._metric.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorDiagnosticSettingMetricList",
      },
      timeouts: {
        value: monitorDiagnosticSettingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorDiagnosticSettingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
