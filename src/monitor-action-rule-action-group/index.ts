// https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorActionRuleActionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#action_group_id MonitorActionRuleActionGroup#action_group_id}
  */
  readonly actionGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#enabled MonitorActionRuleActionGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#id MonitorActionRuleActionGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#name MonitorActionRuleActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#resource_group_name MonitorActionRuleActionGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#tags MonitorActionRuleActionGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#condition MonitorActionRuleActionGroup#condition}
  */
  readonly condition?: MonitorActionRuleActionGroupCondition;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#scope MonitorActionRuleActionGroup#scope}
  */
  readonly scope?: MonitorActionRuleActionGroupScope;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#timeouts MonitorActionRuleActionGroup#timeouts}
  */
  readonly timeouts?: MonitorActionRuleActionGroupTimeouts;
}
export interface MonitorActionRuleActionGroupConditionAlertContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorActionRuleActionGroupConditionAlertContextToTerraform(struct?: MonitorActionRuleActionGroupConditionAlertContextOutputReference | MonitorActionRuleActionGroupConditionAlertContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorActionRuleActionGroupConditionAlertContextToHclTerraform(struct?: MonitorActionRuleActionGroupConditionAlertContextOutputReference | MonitorActionRuleActionGroupConditionAlertContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionRuleActionGroupConditionAlertContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorActionRuleActionGroupConditionAlertContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleActionGroupConditionAlertContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorActionRuleActionGroupConditionAlertRuleId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorActionRuleActionGroupConditionAlertRuleIdToTerraform(struct?: MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference | MonitorActionRuleActionGroupConditionAlertRuleId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorActionRuleActionGroupConditionAlertRuleIdToHclTerraform(struct?: MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference | MonitorActionRuleActionGroupConditionAlertRuleId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorActionRuleActionGroupConditionAlertRuleId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleActionGroupConditionAlertRuleId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorActionRuleActionGroupConditionDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorActionRuleActionGroupConditionDescriptionToTerraform(struct?: MonitorActionRuleActionGroupConditionDescriptionOutputReference | MonitorActionRuleActionGroupConditionDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorActionRuleActionGroupConditionDescriptionToHclTerraform(struct?: MonitorActionRuleActionGroupConditionDescriptionOutputReference | MonitorActionRuleActionGroupConditionDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionRuleActionGroupConditionDescriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorActionRuleActionGroupConditionDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleActionGroupConditionDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorActionRuleActionGroupConditionMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorActionRuleActionGroupConditionMonitorToTerraform(struct?: MonitorActionRuleActionGroupConditionMonitorOutputReference | MonitorActionRuleActionGroupConditionMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorActionRuleActionGroupConditionMonitorToHclTerraform(struct?: MonitorActionRuleActionGroupConditionMonitorOutputReference | MonitorActionRuleActionGroupConditionMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionRuleActionGroupConditionMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorActionRuleActionGroupConditionMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleActionGroupConditionMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorActionRuleActionGroupConditionMonitorService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorActionRuleActionGroupConditionMonitorServiceToTerraform(struct?: MonitorActionRuleActionGroupConditionMonitorServiceOutputReference | MonitorActionRuleActionGroupConditionMonitorService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorActionRuleActionGroupConditionMonitorServiceToHclTerraform(struct?: MonitorActionRuleActionGroupConditionMonitorServiceOutputReference | MonitorActionRuleActionGroupConditionMonitorService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionRuleActionGroupConditionMonitorServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorActionRuleActionGroupConditionMonitorService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleActionGroupConditionMonitorService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorActionRuleActionGroupConditionSeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorActionRuleActionGroupConditionSeverityToTerraform(struct?: MonitorActionRuleActionGroupConditionSeverityOutputReference | MonitorActionRuleActionGroupConditionSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorActionRuleActionGroupConditionSeverityToHclTerraform(struct?: MonitorActionRuleActionGroupConditionSeverityOutputReference | MonitorActionRuleActionGroupConditionSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionRuleActionGroupConditionSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorActionRuleActionGroupConditionSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleActionGroupConditionSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorActionRuleActionGroupConditionTargetResourceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorActionRuleActionGroupConditionTargetResourceTypeToTerraform(struct?: MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference | MonitorActionRuleActionGroupConditionTargetResourceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorActionRuleActionGroupConditionTargetResourceTypeToHclTerraform(struct?: MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference | MonitorActionRuleActionGroupConditionTargetResourceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorActionRuleActionGroupConditionTargetResourceType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleActionGroupConditionTargetResourceType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorActionRuleActionGroupCondition {
  /**
  * alert_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#alert_context MonitorActionRuleActionGroup#alert_context}
  */
  readonly alertContext?: MonitorActionRuleActionGroupConditionAlertContext;
  /**
  * alert_rule_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#alert_rule_id MonitorActionRuleActionGroup#alert_rule_id}
  */
  readonly alertRuleId?: MonitorActionRuleActionGroupConditionAlertRuleId;
  /**
  * description block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}
  */
  readonly description?: MonitorActionRuleActionGroupConditionDescription;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#monitor MonitorActionRuleActionGroup#monitor}
  */
  readonly monitor?: MonitorActionRuleActionGroupConditionMonitor;
  /**
  * monitor_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#monitor_service MonitorActionRuleActionGroup#monitor_service}
  */
  readonly monitorService?: MonitorActionRuleActionGroupConditionMonitorService;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#severity MonitorActionRuleActionGroup#severity}
  */
  readonly severity?: MonitorActionRuleActionGroupConditionSeverity;
  /**
  * target_resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#target_resource_type MonitorActionRuleActionGroup#target_resource_type}
  */
  readonly targetResourceType?: MonitorActionRuleActionGroupConditionTargetResourceType;
}

export function monitorActionRuleActionGroupConditionToTerraform(struct?: MonitorActionRuleActionGroupConditionOutputReference | MonitorActionRuleActionGroupCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_context: monitorActionRuleActionGroupConditionAlertContextToTerraform(struct!.alertContext),
    alert_rule_id: monitorActionRuleActionGroupConditionAlertRuleIdToTerraform(struct!.alertRuleId),
    description: monitorActionRuleActionGroupConditionDescriptionToTerraform(struct!.description),
    monitor: monitorActionRuleActionGroupConditionMonitorToTerraform(struct!.monitor),
    monitor_service: monitorActionRuleActionGroupConditionMonitorServiceToTerraform(struct!.monitorService),
    severity: monitorActionRuleActionGroupConditionSeverityToTerraform(struct!.severity),
    target_resource_type: monitorActionRuleActionGroupConditionTargetResourceTypeToTerraform(struct!.targetResourceType),
  }
}


export function monitorActionRuleActionGroupConditionToHclTerraform(struct?: MonitorActionRuleActionGroupConditionOutputReference | MonitorActionRuleActionGroupCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_context: {
      value: monitorActionRuleActionGroupConditionAlertContextToHclTerraform(struct!.alertContext),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorActionRuleActionGroupConditionAlertContextList",
    },
    alert_rule_id: {
      value: monitorActionRuleActionGroupConditionAlertRuleIdToHclTerraform(struct!.alertRuleId),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorActionRuleActionGroupConditionAlertRuleIdList",
    },
    description: {
      value: monitorActionRuleActionGroupConditionDescriptionToHclTerraform(struct!.description),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorActionRuleActionGroupConditionDescriptionList",
    },
    monitor: {
      value: monitorActionRuleActionGroupConditionMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorActionRuleActionGroupConditionMonitorList",
    },
    monitor_service: {
      value: monitorActionRuleActionGroupConditionMonitorServiceToHclTerraform(struct!.monitorService),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorActionRuleActionGroupConditionMonitorServiceList",
    },
    severity: {
      value: monitorActionRuleActionGroupConditionSeverityToHclTerraform(struct!.severity),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorActionRuleActionGroupConditionSeverityList",
    },
    target_resource_type: {
      value: monitorActionRuleActionGroupConditionTargetResourceTypeToHclTerraform(struct!.targetResourceType),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorActionRuleActionGroupConditionTargetResourceTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionRuleActionGroupConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorActionRuleActionGroupCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertContext = this._alertContext?.internalValue;
    }
    if (this._alertRuleId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertRuleId = this._alertRuleId?.internalValue;
    }
    if (this._description?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._monitorService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorService = this._monitorService?.internalValue;
    }
    if (this._severity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    if (this._targetResourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceType = this._targetResourceType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleActionGroupCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertContext.internalValue = undefined;
      this._alertRuleId.internalValue = undefined;
      this._description.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._monitorService.internalValue = undefined;
      this._severity.internalValue = undefined;
      this._targetResourceType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertContext.internalValue = value.alertContext;
      this._alertRuleId.internalValue = value.alertRuleId;
      this._description.internalValue = value.description;
      this._monitor.internalValue = value.monitor;
      this._monitorService.internalValue = value.monitorService;
      this._severity.internalValue = value.severity;
      this._targetResourceType.internalValue = value.targetResourceType;
    }
  }

  // alert_context - computed: false, optional: true, required: false
  private _alertContext = new MonitorActionRuleActionGroupConditionAlertContextOutputReference(this, "alert_context");
  public get alertContext() {
    return this._alertContext;
  }
  public putAlertContext(value: MonitorActionRuleActionGroupConditionAlertContext) {
    this._alertContext.internalValue = value;
  }
  public resetAlertContext() {
    this._alertContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertContextInput() {
    return this._alertContext.internalValue;
  }

  // alert_rule_id - computed: false, optional: true, required: false
  private _alertRuleId = new MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference(this, "alert_rule_id");
  public get alertRuleId() {
    return this._alertRuleId;
  }
  public putAlertRuleId(value: MonitorActionRuleActionGroupConditionAlertRuleId) {
    this._alertRuleId.internalValue = value;
  }
  public resetAlertRuleId() {
    this._alertRuleId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleIdInput() {
    return this._alertRuleId.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description = new MonitorActionRuleActionGroupConditionDescriptionOutputReference(this, "description");
  public get description() {
    return this._description;
  }
  public putDescription(value: MonitorActionRuleActionGroupConditionDescription) {
    this._description.internalValue = value;
  }
  public resetDescription() {
    this._description.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new MonitorActionRuleActionGroupConditionMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: MonitorActionRuleActionGroupConditionMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // monitor_service - computed: false, optional: true, required: false
  private _monitorService = new MonitorActionRuleActionGroupConditionMonitorServiceOutputReference(this, "monitor_service");
  public get monitorService() {
    return this._monitorService;
  }
  public putMonitorService(value: MonitorActionRuleActionGroupConditionMonitorService) {
    this._monitorService.internalValue = value;
  }
  public resetMonitorService() {
    this._monitorService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorServiceInput() {
    return this._monitorService.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity = new MonitorActionRuleActionGroupConditionSeverityOutputReference(this, "severity");
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: MonitorActionRuleActionGroupConditionSeverity) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }

  // target_resource_type - computed: false, optional: true, required: false
  private _targetResourceType = new MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference(this, "target_resource_type");
  public get targetResourceType() {
    return this._targetResourceType;
  }
  public putTargetResourceType(value: MonitorActionRuleActionGroupConditionTargetResourceType) {
    this._targetResourceType.internalValue = value;
  }
  public resetTargetResourceType() {
    this._targetResourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceTypeInput() {
    return this._targetResourceType.internalValue;
  }
}
export interface MonitorActionRuleActionGroupScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#resource_ids MonitorActionRuleActionGroup#resource_ids}
  */
  readonly resourceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#type MonitorActionRuleActionGroup#type}
  */
  readonly type: string;
}

export function monitorActionRuleActionGroupScopeToTerraform(struct?: MonitorActionRuleActionGroupScopeOutputReference | MonitorActionRuleActionGroupScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function monitorActionRuleActionGroupScopeToHclTerraform(struct?: MonitorActionRuleActionGroupScopeOutputReference | MonitorActionRuleActionGroupScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceIds),
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

export class MonitorActionRuleActionGroupScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorActionRuleActionGroupScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIds = this._resourceIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionRuleActionGroupScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceIds = value.resourceIds;
      this._type = value.type;
    }
  }

  // resource_ids - computed: false, optional: false, required: true
  private _resourceIds?: string[]; 
  public get resourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_ids'));
  }
  public set resourceIds(value: string[]) {
    this._resourceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsInput() {
    return this._resourceIds;
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
export interface MonitorActionRuleActionGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#create MonitorActionRuleActionGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#delete MonitorActionRuleActionGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#read MonitorActionRuleActionGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#update MonitorActionRuleActionGroup#update}
  */
  readonly update?: string;
}

export function monitorActionRuleActionGroupTimeoutsToTerraform(struct?: MonitorActionRuleActionGroupTimeouts | cdktf.IResolvable): any {
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


export function monitorActionRuleActionGroupTimeoutsToHclTerraform(struct?: MonitorActionRuleActionGroupTimeouts | cdktf.IResolvable): any {
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

export class MonitorActionRuleActionGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorActionRuleActionGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorActionRuleActionGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group azurerm_monitor_action_rule_action_group}
*/
export class MonitorActionRuleActionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_monitor_action_rule_action_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorActionRuleActionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorActionRuleActionGroup to import
  * @param importFromId The id of the existing MonitorActionRuleActionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorActionRuleActionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_monitor_action_rule_action_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/monitor_action_rule_action_group azurerm_monitor_action_rule_action_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorActionRuleActionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorActionRuleActionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_action_rule_action_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.93.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionGroupId = config.actionGroupId;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._condition.internalValue = config.condition;
    this._scope.internalValue = config.scope;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // condition - computed: false, optional: true, required: false
  private _condition = new MonitorActionRuleActionGroupConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: MonitorActionRuleActionGroupCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new MonitorActionRuleActionGroupScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: MonitorActionRuleActionGroupScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorActionRuleActionGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorActionRuleActionGroupTimeouts) {
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
      action_group_id: cdktf.stringToTerraform(this._actionGroupId),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      condition: monitorActionRuleActionGroupConditionToTerraform(this._condition.internalValue),
      scope: monitorActionRuleActionGroupScopeToTerraform(this._scope.internalValue),
      timeouts: monitorActionRuleActionGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_group_id: {
        value: cdktf.stringToHclTerraform(this._actionGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      condition: {
        value: monitorActionRuleActionGroupConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActionRuleActionGroupConditionList",
      },
      scope: {
        value: monitorActionRuleActionGroupScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActionRuleActionGroupScopeList",
      },
      timeouts: {
        value: monitorActionRuleActionGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorActionRuleActionGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
