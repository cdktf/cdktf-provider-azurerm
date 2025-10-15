/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynatraceTagRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#id DynatraceTagRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#monitor_id DynatraceTagRules#monitor_id}
  */
  readonly monitorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}
  */
  readonly name: string;
  /**
  * log_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#log_rule DynatraceTagRules#log_rule}
  */
  readonly logRule?: DynatraceTagRulesLogRule;
  /**
  * metric_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#metric_rule DynatraceTagRules#metric_rule}
  */
  readonly metricRule?: DynatraceTagRulesMetricRule;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#timeouts DynatraceTagRules#timeouts}
  */
  readonly timeouts?: DynatraceTagRulesTimeouts;
}
export interface DynatraceTagRulesLogRuleFilteringTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}
  */
  readonly value: string;
}

export function dynatraceTagRulesLogRuleFilteringTagToTerraform(struct?: DynatraceTagRulesLogRuleFilteringTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dynatraceTagRulesLogRuleFilteringTagToHclTerraform(struct?: DynatraceTagRulesLogRuleFilteringTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynatraceTagRulesLogRuleFilteringTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DynatraceTagRulesLogRuleFilteringTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynatraceTagRulesLogRuleFilteringTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DynatraceTagRulesLogRuleFilteringTagList extends cdktf.ComplexList {
  public internalValue? : DynatraceTagRulesLogRuleFilteringTag[] | cdktf.IResolvable

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
  public get(index: number): DynatraceTagRulesLogRuleFilteringTagOutputReference {
    return new DynatraceTagRulesLogRuleFilteringTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynatraceTagRulesLogRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#send_activity_logs_enabled DynatraceTagRules#send_activity_logs_enabled}
  */
  readonly sendActivityLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#send_azure_active_directory_logs_enabled DynatraceTagRules#send_azure_active_directory_logs_enabled}
  */
  readonly sendAzureActiveDirectoryLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#send_subscription_logs_enabled DynatraceTagRules#send_subscription_logs_enabled}
  */
  readonly sendSubscriptionLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * filtering_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#filtering_tag DynatraceTagRules#filtering_tag}
  */
  readonly filteringTag: DynatraceTagRulesLogRuleFilteringTag[] | cdktf.IResolvable;
}

export function dynatraceTagRulesLogRuleToTerraform(struct?: DynatraceTagRulesLogRuleOutputReference | DynatraceTagRulesLogRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    send_activity_logs_enabled: cdktf.booleanToTerraform(struct!.sendActivityLogsEnabled),
    send_azure_active_directory_logs_enabled: cdktf.booleanToTerraform(struct!.sendAzureActiveDirectoryLogsEnabled),
    send_subscription_logs_enabled: cdktf.booleanToTerraform(struct!.sendSubscriptionLogsEnabled),
    filtering_tag: cdktf.listMapper(dynatraceTagRulesLogRuleFilteringTagToTerraform, true)(struct!.filteringTag),
  }
}


export function dynatraceTagRulesLogRuleToHclTerraform(struct?: DynatraceTagRulesLogRuleOutputReference | DynatraceTagRulesLogRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    send_activity_logs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sendActivityLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_azure_active_directory_logs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sendAzureActiveDirectoryLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_subscription_logs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sendSubscriptionLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filtering_tag: {
      value: cdktf.listMapperHcl(dynatraceTagRulesLogRuleFilteringTagToHclTerraform, true)(struct!.filteringTag),
      isBlock: true,
      type: "list",
      storageClassType: "DynatraceTagRulesLogRuleFilteringTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynatraceTagRulesLogRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DynatraceTagRulesLogRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sendActivityLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendActivityLogsEnabled = this._sendActivityLogsEnabled;
    }
    if (this._sendAzureActiveDirectoryLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendAzureActiveDirectoryLogsEnabled = this._sendAzureActiveDirectoryLogsEnabled;
    }
    if (this._sendSubscriptionLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendSubscriptionLogsEnabled = this._sendSubscriptionLogsEnabled;
    }
    if (this._filteringTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filteringTag = this._filteringTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynatraceTagRulesLogRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sendActivityLogsEnabled = undefined;
      this._sendAzureActiveDirectoryLogsEnabled = undefined;
      this._sendSubscriptionLogsEnabled = undefined;
      this._filteringTag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sendActivityLogsEnabled = value.sendActivityLogsEnabled;
      this._sendAzureActiveDirectoryLogsEnabled = value.sendAzureActiveDirectoryLogsEnabled;
      this._sendSubscriptionLogsEnabled = value.sendSubscriptionLogsEnabled;
      this._filteringTag.internalValue = value.filteringTag;
    }
  }

  // send_activity_logs_enabled - computed: false, optional: true, required: false
  private _sendActivityLogsEnabled?: boolean | cdktf.IResolvable; 
  public get sendActivityLogsEnabled() {
    return this.getBooleanAttribute('send_activity_logs_enabled');
  }
  public set sendActivityLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._sendActivityLogsEnabled = value;
  }
  public resetSendActivityLogsEnabled() {
    this._sendActivityLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendActivityLogsEnabledInput() {
    return this._sendActivityLogsEnabled;
  }

  // send_azure_active_directory_logs_enabled - computed: false, optional: true, required: false
  private _sendAzureActiveDirectoryLogsEnabled?: boolean | cdktf.IResolvable; 
  public get sendAzureActiveDirectoryLogsEnabled() {
    return this.getBooleanAttribute('send_azure_active_directory_logs_enabled');
  }
  public set sendAzureActiveDirectoryLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._sendAzureActiveDirectoryLogsEnabled = value;
  }
  public resetSendAzureActiveDirectoryLogsEnabled() {
    this._sendAzureActiveDirectoryLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAzureActiveDirectoryLogsEnabledInput() {
    return this._sendAzureActiveDirectoryLogsEnabled;
  }

  // send_subscription_logs_enabled - computed: false, optional: true, required: false
  private _sendSubscriptionLogsEnabled?: boolean | cdktf.IResolvable; 
  public get sendSubscriptionLogsEnabled() {
    return this.getBooleanAttribute('send_subscription_logs_enabled');
  }
  public set sendSubscriptionLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._sendSubscriptionLogsEnabled = value;
  }
  public resetSendSubscriptionLogsEnabled() {
    this._sendSubscriptionLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendSubscriptionLogsEnabledInput() {
    return this._sendSubscriptionLogsEnabled;
  }

  // filtering_tag - computed: false, optional: false, required: true
  private _filteringTag = new DynatraceTagRulesLogRuleFilteringTagList(this, "filtering_tag", false);
  public get filteringTag() {
    return this._filteringTag;
  }
  public putFilteringTag(value: DynatraceTagRulesLogRuleFilteringTag[] | cdktf.IResolvable) {
    this._filteringTag.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringTagInput() {
    return this._filteringTag.internalValue;
  }
}
export interface DynatraceTagRulesMetricRuleFilteringTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}
  */
  readonly value: string;
}

export function dynatraceTagRulesMetricRuleFilteringTagToTerraform(struct?: DynatraceTagRulesMetricRuleFilteringTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dynatraceTagRulesMetricRuleFilteringTagToHclTerraform(struct?: DynatraceTagRulesMetricRuleFilteringTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynatraceTagRulesMetricRuleFilteringTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DynatraceTagRulesMetricRuleFilteringTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynatraceTagRulesMetricRuleFilteringTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DynatraceTagRulesMetricRuleFilteringTagList extends cdktf.ComplexList {
  public internalValue? : DynatraceTagRulesMetricRuleFilteringTag[] | cdktf.IResolvable

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
  public get(index: number): DynatraceTagRulesMetricRuleFilteringTagOutputReference {
    return new DynatraceTagRulesMetricRuleFilteringTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynatraceTagRulesMetricRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#sending_metrics_enabled DynatraceTagRules#sending_metrics_enabled}
  */
  readonly sendingMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * filtering_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#filtering_tag DynatraceTagRules#filtering_tag}
  */
  readonly filteringTag: DynatraceTagRulesMetricRuleFilteringTag[] | cdktf.IResolvable;
}

export function dynatraceTagRulesMetricRuleToTerraform(struct?: DynatraceTagRulesMetricRuleOutputReference | DynatraceTagRulesMetricRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sending_metrics_enabled: cdktf.booleanToTerraform(struct!.sendingMetricsEnabled),
    filtering_tag: cdktf.listMapper(dynatraceTagRulesMetricRuleFilteringTagToTerraform, true)(struct!.filteringTag),
  }
}


export function dynatraceTagRulesMetricRuleToHclTerraform(struct?: DynatraceTagRulesMetricRuleOutputReference | DynatraceTagRulesMetricRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sending_metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sendingMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filtering_tag: {
      value: cdktf.listMapperHcl(dynatraceTagRulesMetricRuleFilteringTagToHclTerraform, true)(struct!.filteringTag),
      isBlock: true,
      type: "list",
      storageClassType: "DynatraceTagRulesMetricRuleFilteringTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynatraceTagRulesMetricRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DynatraceTagRulesMetricRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sendingMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingMetricsEnabled = this._sendingMetricsEnabled;
    }
    if (this._filteringTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filteringTag = this._filteringTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynatraceTagRulesMetricRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sendingMetricsEnabled = undefined;
      this._filteringTag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sendingMetricsEnabled = value.sendingMetricsEnabled;
      this._filteringTag.internalValue = value.filteringTag;
    }
  }

  // sending_metrics_enabled - computed: false, optional: true, required: false
  private _sendingMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get sendingMetricsEnabled() {
    return this.getBooleanAttribute('sending_metrics_enabled');
  }
  public set sendingMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._sendingMetricsEnabled = value;
  }
  public resetSendingMetricsEnabled() {
    this._sendingMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingMetricsEnabledInput() {
    return this._sendingMetricsEnabled;
  }

  // filtering_tag - computed: false, optional: false, required: true
  private _filteringTag = new DynatraceTagRulesMetricRuleFilteringTagList(this, "filtering_tag", false);
  public get filteringTag() {
    return this._filteringTag;
  }
  public putFilteringTag(value: DynatraceTagRulesMetricRuleFilteringTag[] | cdktf.IResolvable) {
    this._filteringTag.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringTagInput() {
    return this._filteringTag.internalValue;
  }
}
export interface DynatraceTagRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#create DynatraceTagRules#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#delete DynatraceTagRules#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#read DynatraceTagRules#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#update DynatraceTagRules#update}
  */
  readonly update?: string;
}

export function dynatraceTagRulesTimeoutsToTerraform(struct?: DynatraceTagRulesTimeouts | cdktf.IResolvable): any {
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


export function dynatraceTagRulesTimeoutsToHclTerraform(struct?: DynatraceTagRulesTimeouts | cdktf.IResolvable): any {
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

export class DynatraceTagRulesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynatraceTagRulesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynatraceTagRulesTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules azurerm_dynatrace_tag_rules}
*/
export class DynatraceTagRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_dynatrace_tag_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynatraceTagRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynatraceTagRules to import
  * @param importFromId The id of the existing DynatraceTagRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynatraceTagRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_dynatrace_tag_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/dynatrace_tag_rules azurerm_dynatrace_tag_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynatraceTagRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DynatraceTagRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dynatrace_tag_rules',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.48.0',
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
    this._monitorId = config.monitorId;
    this._name = config.name;
    this._logRule.internalValue = config.logRule;
    this._metricRule.internalValue = config.metricRule;
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

  // monitor_id - computed: false, optional: false, required: true
  private _monitorId?: string; 
  public get monitorId() {
    return this.getStringAttribute('monitor_id');
  }
  public set monitorId(value: string) {
    this._monitorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdInput() {
    return this._monitorId;
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

  // log_rule - computed: false, optional: true, required: false
  private _logRule = new DynatraceTagRulesLogRuleOutputReference(this, "log_rule");
  public get logRule() {
    return this._logRule;
  }
  public putLogRule(value: DynatraceTagRulesLogRule) {
    this._logRule.internalValue = value;
  }
  public resetLogRule() {
    this._logRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRuleInput() {
    return this._logRule.internalValue;
  }

  // metric_rule - computed: false, optional: true, required: false
  private _metricRule = new DynatraceTagRulesMetricRuleOutputReference(this, "metric_rule");
  public get metricRule() {
    return this._metricRule;
  }
  public putMetricRule(value: DynatraceTagRulesMetricRule) {
    this._metricRule.internalValue = value;
  }
  public resetMetricRule() {
    this._metricRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRuleInput() {
    return this._metricRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DynatraceTagRulesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DynatraceTagRulesTimeouts) {
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
      monitor_id: cdktf.stringToTerraform(this._monitorId),
      name: cdktf.stringToTerraform(this._name),
      log_rule: dynatraceTagRulesLogRuleToTerraform(this._logRule.internalValue),
      metric_rule: dynatraceTagRulesMetricRuleToTerraform(this._metricRule.internalValue),
      timeouts: dynatraceTagRulesTimeoutsToTerraform(this._timeouts.internalValue),
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
      monitor_id: {
        value: cdktf.stringToHclTerraform(this._monitorId),
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
      log_rule: {
        value: dynatraceTagRulesLogRuleToHclTerraform(this._logRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DynatraceTagRulesLogRuleList",
      },
      metric_rule: {
        value: dynatraceTagRulesMetricRuleToHclTerraform(this._metricRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DynatraceTagRulesMetricRuleList",
      },
      timeouts: {
        value: dynatraceTagRulesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynatraceTagRulesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
