// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorAlertProcessingRuleActionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#add_action_group_ids MonitorAlertProcessingRuleActionGroup#add_action_group_ids}
  */
  readonly addActionGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#description MonitorAlertProcessingRuleActionGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#enabled MonitorAlertProcessingRuleActionGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#id MonitorAlertProcessingRuleActionGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#name MonitorAlertProcessingRuleActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#resource_group_name MonitorAlertProcessingRuleActionGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#scopes MonitorAlertProcessingRuleActionGroup#scopes}
  */
  readonly scopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#tags MonitorAlertProcessingRuleActionGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#condition MonitorAlertProcessingRuleActionGroup#condition}
  */
  readonly condition?: MonitorAlertProcessingRuleActionGroupCondition;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#schedule MonitorAlertProcessingRuleActionGroup#schedule}
  */
  readonly schedule?: MonitorAlertProcessingRuleActionGroupSchedule;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#timeouts MonitorAlertProcessingRuleActionGroup#timeouts}
  */
  readonly timeouts?: MonitorAlertProcessingRuleActionGroupTimeouts;
}
export interface MonitorAlertProcessingRuleActionGroupConditionAlertContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorAlertProcessingRuleActionGroupConditionAlertContextToTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference | MonitorAlertProcessingRuleActionGroupConditionAlertContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorAlertProcessingRuleActionGroupConditionAlertContextToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference | MonitorAlertProcessingRuleActionGroupConditionAlertContext): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupConditionAlertContext | undefined {
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

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupConditionAlertContext | undefined) {
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
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorAlertProcessingRuleActionGroupConditionAlertRuleId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorAlertProcessingRuleActionGroupConditionAlertRuleIdToTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference | MonitorAlertProcessingRuleActionGroupConditionAlertRuleId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorAlertProcessingRuleActionGroupConditionAlertRuleIdToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference | MonitorAlertProcessingRuleActionGroupConditionAlertRuleId): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupConditionAlertRuleId | undefined {
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

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupConditionAlertRuleId | undefined) {
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
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorAlertProcessingRuleActionGroupConditionAlertRuleName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorAlertProcessingRuleActionGroupConditionAlertRuleNameToTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference | MonitorAlertProcessingRuleActionGroupConditionAlertRuleName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorAlertProcessingRuleActionGroupConditionAlertRuleNameToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference | MonitorAlertProcessingRuleActionGroupConditionAlertRuleName): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupConditionAlertRuleName | undefined {
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

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupConditionAlertRuleName | undefined) {
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
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorAlertProcessingRuleActionGroupConditionDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorAlertProcessingRuleActionGroupConditionDescriptionToTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference | MonitorAlertProcessingRuleActionGroupConditionDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorAlertProcessingRuleActionGroupConditionDescriptionToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference | MonitorAlertProcessingRuleActionGroupConditionDescription): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupConditionDescription | undefined {
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

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupConditionDescription | undefined) {
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
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorAlertProcessingRuleActionGroupConditionMonitorCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorAlertProcessingRuleActionGroupConditionMonitorConditionToTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference | MonitorAlertProcessingRuleActionGroupConditionMonitorCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorAlertProcessingRuleActionGroupConditionMonitorConditionToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference | MonitorAlertProcessingRuleActionGroupConditionMonitorCondition): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupConditionMonitorCondition | undefined {
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

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupConditionMonitorCondition | undefined) {
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
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorAlertProcessingRuleActionGroupConditionMonitorService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorAlertProcessingRuleActionGroupConditionMonitorServiceToTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference | MonitorAlertProcessingRuleActionGroupConditionMonitorService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorAlertProcessingRuleActionGroupConditionMonitorServiceToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference | MonitorAlertProcessingRuleActionGroupConditionMonitorService): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupConditionMonitorService | undefined {
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

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupConditionMonitorService | undefined) {
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
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorAlertProcessingRuleActionGroupConditionSeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorAlertProcessingRuleActionGroupConditionSeverityToTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference | MonitorAlertProcessingRuleActionGroupConditionSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorAlertProcessingRuleActionGroupConditionSeverityToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference | MonitorAlertProcessingRuleActionGroupConditionSeverity): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupConditionSeverity | undefined {
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

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupConditionSeverity | undefined) {
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
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorAlertProcessingRuleActionGroupConditionSignalType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorAlertProcessingRuleActionGroupConditionSignalTypeToTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference | MonitorAlertProcessingRuleActionGroupConditionSignalType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorAlertProcessingRuleActionGroupConditionSignalTypeToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference | MonitorAlertProcessingRuleActionGroupConditionSignalType): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupConditionSignalType | undefined {
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

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupConditionSignalType | undefined) {
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
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorAlertProcessingRuleActionGroupConditionTargetResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorAlertProcessingRuleActionGroupConditionTargetResourceToTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference | MonitorAlertProcessingRuleActionGroupConditionTargetResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorAlertProcessingRuleActionGroupConditionTargetResourceToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference | MonitorAlertProcessingRuleActionGroupConditionTargetResource): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupConditionTargetResource | undefined {
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

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupConditionTargetResource | undefined) {
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
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorAlertProcessingRuleActionGroupConditionTargetResourceGroupToTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference | MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorAlertProcessingRuleActionGroupConditionTargetResourceGroupToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference | MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup | undefined {
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

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup | undefined) {
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
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorAlertProcessingRuleActionGroupConditionTargetResourceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}
  */
  readonly values: string[];
}

export function monitorAlertProcessingRuleActionGroupConditionTargetResourceTypeToTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference | MonitorAlertProcessingRuleActionGroupConditionTargetResourceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitorAlertProcessingRuleActionGroupConditionTargetResourceTypeToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference | MonitorAlertProcessingRuleActionGroupConditionTargetResourceType): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupConditionTargetResourceType | undefined {
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

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupConditionTargetResourceType | undefined) {
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
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MonitorAlertProcessingRuleActionGroupCondition {
  /**
  * alert_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#alert_context MonitorAlertProcessingRuleActionGroup#alert_context}
  */
  readonly alertContext?: MonitorAlertProcessingRuleActionGroupConditionAlertContext;
  /**
  * alert_rule_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#alert_rule_id MonitorAlertProcessingRuleActionGroup#alert_rule_id}
  */
  readonly alertRuleId?: MonitorAlertProcessingRuleActionGroupConditionAlertRuleId;
  /**
  * alert_rule_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#alert_rule_name MonitorAlertProcessingRuleActionGroup#alert_rule_name}
  */
  readonly alertRuleName?: MonitorAlertProcessingRuleActionGroupConditionAlertRuleName;
  /**
  * description block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#description MonitorAlertProcessingRuleActionGroup#description}
  */
  readonly description?: MonitorAlertProcessingRuleActionGroupConditionDescription;
  /**
  * monitor_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#monitor_condition MonitorAlertProcessingRuleActionGroup#monitor_condition}
  */
  readonly monitorCondition?: MonitorAlertProcessingRuleActionGroupConditionMonitorCondition;
  /**
  * monitor_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#monitor_service MonitorAlertProcessingRuleActionGroup#monitor_service}
  */
  readonly monitorService?: MonitorAlertProcessingRuleActionGroupConditionMonitorService;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#severity MonitorAlertProcessingRuleActionGroup#severity}
  */
  readonly severity?: MonitorAlertProcessingRuleActionGroupConditionSeverity;
  /**
  * signal_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#signal_type MonitorAlertProcessingRuleActionGroup#signal_type}
  */
  readonly signalType?: MonitorAlertProcessingRuleActionGroupConditionSignalType;
  /**
  * target_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#target_resource MonitorAlertProcessingRuleActionGroup#target_resource}
  */
  readonly targetResource?: MonitorAlertProcessingRuleActionGroupConditionTargetResource;
  /**
  * target_resource_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#target_resource_group MonitorAlertProcessingRuleActionGroup#target_resource_group}
  */
  readonly targetResourceGroup?: MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup;
  /**
  * target_resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#target_resource_type MonitorAlertProcessingRuleActionGroup#target_resource_type}
  */
  readonly targetResourceType?: MonitorAlertProcessingRuleActionGroupConditionTargetResourceType;
}

export function monitorAlertProcessingRuleActionGroupConditionToTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionOutputReference | MonitorAlertProcessingRuleActionGroupCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_context: monitorAlertProcessingRuleActionGroupConditionAlertContextToTerraform(struct!.alertContext),
    alert_rule_id: monitorAlertProcessingRuleActionGroupConditionAlertRuleIdToTerraform(struct!.alertRuleId),
    alert_rule_name: monitorAlertProcessingRuleActionGroupConditionAlertRuleNameToTerraform(struct!.alertRuleName),
    description: monitorAlertProcessingRuleActionGroupConditionDescriptionToTerraform(struct!.description),
    monitor_condition: monitorAlertProcessingRuleActionGroupConditionMonitorConditionToTerraform(struct!.monitorCondition),
    monitor_service: monitorAlertProcessingRuleActionGroupConditionMonitorServiceToTerraform(struct!.monitorService),
    severity: monitorAlertProcessingRuleActionGroupConditionSeverityToTerraform(struct!.severity),
    signal_type: monitorAlertProcessingRuleActionGroupConditionSignalTypeToTerraform(struct!.signalType),
    target_resource: monitorAlertProcessingRuleActionGroupConditionTargetResourceToTerraform(struct!.targetResource),
    target_resource_group: monitorAlertProcessingRuleActionGroupConditionTargetResourceGroupToTerraform(struct!.targetResourceGroup),
    target_resource_type: monitorAlertProcessingRuleActionGroupConditionTargetResourceTypeToTerraform(struct!.targetResourceType),
  }
}


export function monitorAlertProcessingRuleActionGroupConditionToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupConditionOutputReference | MonitorAlertProcessingRuleActionGroupCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_context: {
      value: monitorAlertProcessingRuleActionGroupConditionAlertContextToHclTerraform(struct!.alertContext),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupConditionAlertContextList",
    },
    alert_rule_id: {
      value: monitorAlertProcessingRuleActionGroupConditionAlertRuleIdToHclTerraform(struct!.alertRuleId),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdList",
    },
    alert_rule_name: {
      value: monitorAlertProcessingRuleActionGroupConditionAlertRuleNameToHclTerraform(struct!.alertRuleName),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameList",
    },
    description: {
      value: monitorAlertProcessingRuleActionGroupConditionDescriptionToHclTerraform(struct!.description),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupConditionDescriptionList",
    },
    monitor_condition: {
      value: monitorAlertProcessingRuleActionGroupConditionMonitorConditionToHclTerraform(struct!.monitorCondition),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupConditionMonitorConditionList",
    },
    monitor_service: {
      value: monitorAlertProcessingRuleActionGroupConditionMonitorServiceToHclTerraform(struct!.monitorService),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupConditionMonitorServiceList",
    },
    severity: {
      value: monitorAlertProcessingRuleActionGroupConditionSeverityToHclTerraform(struct!.severity),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupConditionSeverityList",
    },
    signal_type: {
      value: monitorAlertProcessingRuleActionGroupConditionSignalTypeToHclTerraform(struct!.signalType),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupConditionSignalTypeList",
    },
    target_resource: {
      value: monitorAlertProcessingRuleActionGroupConditionTargetResourceToHclTerraform(struct!.targetResource),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupConditionTargetResourceList",
    },
    target_resource_group: {
      value: monitorAlertProcessingRuleActionGroupConditionTargetResourceGroupToHclTerraform(struct!.targetResourceGroup),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupList",
    },
    target_resource_type: {
      value: monitorAlertProcessingRuleActionGroupConditionTargetResourceTypeToHclTerraform(struct!.targetResourceType),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupCondition | undefined {
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
    if (this._alertRuleName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertRuleName = this._alertRuleName?.internalValue;
    }
    if (this._description?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description?.internalValue;
    }
    if (this._monitorCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorCondition = this._monitorCondition?.internalValue;
    }
    if (this._monitorService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorService = this._monitorService?.internalValue;
    }
    if (this._severity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    if (this._signalType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signalType = this._signalType?.internalValue;
    }
    if (this._targetResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResource = this._targetResource?.internalValue;
    }
    if (this._targetResourceGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceGroup = this._targetResourceGroup?.internalValue;
    }
    if (this._targetResourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceType = this._targetResourceType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertContext.internalValue = undefined;
      this._alertRuleId.internalValue = undefined;
      this._alertRuleName.internalValue = undefined;
      this._description.internalValue = undefined;
      this._monitorCondition.internalValue = undefined;
      this._monitorService.internalValue = undefined;
      this._severity.internalValue = undefined;
      this._signalType.internalValue = undefined;
      this._targetResource.internalValue = undefined;
      this._targetResourceGroup.internalValue = undefined;
      this._targetResourceType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertContext.internalValue = value.alertContext;
      this._alertRuleId.internalValue = value.alertRuleId;
      this._alertRuleName.internalValue = value.alertRuleName;
      this._description.internalValue = value.description;
      this._monitorCondition.internalValue = value.monitorCondition;
      this._monitorService.internalValue = value.monitorService;
      this._severity.internalValue = value.severity;
      this._signalType.internalValue = value.signalType;
      this._targetResource.internalValue = value.targetResource;
      this._targetResourceGroup.internalValue = value.targetResourceGroup;
      this._targetResourceType.internalValue = value.targetResourceType;
    }
  }

  // alert_context - computed: false, optional: true, required: false
  private _alertContext = new MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference(this, "alert_context");
  public get alertContext() {
    return this._alertContext;
  }
  public putAlertContext(value: MonitorAlertProcessingRuleActionGroupConditionAlertContext) {
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
  private _alertRuleId = new MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference(this, "alert_rule_id");
  public get alertRuleId() {
    return this._alertRuleId;
  }
  public putAlertRuleId(value: MonitorAlertProcessingRuleActionGroupConditionAlertRuleId) {
    this._alertRuleId.internalValue = value;
  }
  public resetAlertRuleId() {
    this._alertRuleId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleIdInput() {
    return this._alertRuleId.internalValue;
  }

  // alert_rule_name - computed: false, optional: true, required: false
  private _alertRuleName = new MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference(this, "alert_rule_name");
  public get alertRuleName() {
    return this._alertRuleName;
  }
  public putAlertRuleName(value: MonitorAlertProcessingRuleActionGroupConditionAlertRuleName) {
    this._alertRuleName.internalValue = value;
  }
  public resetAlertRuleName() {
    this._alertRuleName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleNameInput() {
    return this._alertRuleName.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description = new MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference(this, "description");
  public get description() {
    return this._description;
  }
  public putDescription(value: MonitorAlertProcessingRuleActionGroupConditionDescription) {
    this._description.internalValue = value;
  }
  public resetDescription() {
    this._description.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description.internalValue;
  }

  // monitor_condition - computed: false, optional: true, required: false
  private _monitorCondition = new MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference(this, "monitor_condition");
  public get monitorCondition() {
    return this._monitorCondition;
  }
  public putMonitorCondition(value: MonitorAlertProcessingRuleActionGroupConditionMonitorCondition) {
    this._monitorCondition.internalValue = value;
  }
  public resetMonitorCondition() {
    this._monitorCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorConditionInput() {
    return this._monitorCondition.internalValue;
  }

  // monitor_service - computed: false, optional: true, required: false
  private _monitorService = new MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference(this, "monitor_service");
  public get monitorService() {
    return this._monitorService;
  }
  public putMonitorService(value: MonitorAlertProcessingRuleActionGroupConditionMonitorService) {
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
  private _severity = new MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference(this, "severity");
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: MonitorAlertProcessingRuleActionGroupConditionSeverity) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }

  // signal_type - computed: false, optional: true, required: false
  private _signalType = new MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference(this, "signal_type");
  public get signalType() {
    return this._signalType;
  }
  public putSignalType(value: MonitorAlertProcessingRuleActionGroupConditionSignalType) {
    this._signalType.internalValue = value;
  }
  public resetSignalType() {
    this._signalType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalTypeInput() {
    return this._signalType.internalValue;
  }

  // target_resource - computed: false, optional: true, required: false
  private _targetResource = new MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference(this, "target_resource");
  public get targetResource() {
    return this._targetResource;
  }
  public putTargetResource(value: MonitorAlertProcessingRuleActionGroupConditionTargetResource) {
    this._targetResource.internalValue = value;
  }
  public resetTargetResource() {
    this._targetResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceInput() {
    return this._targetResource.internalValue;
  }

  // target_resource_group - computed: false, optional: true, required: false
  private _targetResourceGroup = new MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference(this, "target_resource_group");
  public get targetResourceGroup() {
    return this._targetResourceGroup;
  }
  public putTargetResourceGroup(value: MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup) {
    this._targetResourceGroup.internalValue = value;
  }
  public resetTargetResourceGroup() {
    this._targetResourceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceGroupInput() {
    return this._targetResourceGroup.internalValue;
  }

  // target_resource_type - computed: false, optional: true, required: false
  private _targetResourceType = new MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference(this, "target_resource_type");
  public get targetResourceType() {
    return this._targetResourceType;
  }
  public putTargetResourceType(value: MonitorAlertProcessingRuleActionGroupConditionTargetResourceType) {
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
export interface MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}
  */
  readonly startTime: string;
}

export function monitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyToTerraform(struct?: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function monitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList extends cdktf.ComplexList {
  public internalValue? : MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference {
    return new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#days_of_month MonitorAlertProcessingRuleActionGroup#days_of_month}
  */
  readonly daysOfMonth: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}
  */
  readonly startTime?: string;
}

export function monitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyToTerraform(struct?: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_month: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.daysOfMonth),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function monitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_month: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.daysOfMonth),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfMonth = this._daysOfMonth;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysOfMonth = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysOfMonth = value.daysOfMonth;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // days_of_month - computed: false, optional: false, required: true
  private _daysOfMonth?: number[]; 
  public get daysOfMonth() {
    return this.getNumberListAttribute('days_of_month');
  }
  public set daysOfMonth(value: number[]) {
    this._daysOfMonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfMonthInput() {
    return this._daysOfMonth;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList extends cdktf.ComplexList {
  public internalValue? : MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference {
    return new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#days_of_week MonitorAlertProcessingRuleActionGroup#days_of_week}
  */
  readonly daysOfWeek: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}
  */
  readonly startTime?: string;
}

export function monitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyToTerraform(struct?: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function monitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysOfWeek = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysOfWeek = value.daysOfWeek;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // days_of_week - computed: false, optional: false, required: true
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList extends cdktf.ComplexList {
  public internalValue? : MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference {
    return new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlertProcessingRuleActionGroupScheduleRecurrence {
  /**
  * daily block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#daily MonitorAlertProcessingRuleActionGroup#daily}
  */
  readonly daily?: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily[] | cdktf.IResolvable;
  /**
  * monthly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#monthly MonitorAlertProcessingRuleActionGroup#monthly}
  */
  readonly monthly?: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly[] | cdktf.IResolvable;
  /**
  * weekly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#weekly MonitorAlertProcessingRuleActionGroup#weekly}
  */
  readonly weekly?: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly[] | cdktf.IResolvable;
}

export function monitorAlertProcessingRuleActionGroupScheduleRecurrenceToTerraform(struct?: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference | MonitorAlertProcessingRuleActionGroupScheduleRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: cdktf.listMapper(monitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyToTerraform, true)(struct!.daily),
    monthly: cdktf.listMapper(monitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyToTerraform, true)(struct!.monthly),
    weekly: cdktf.listMapper(monitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyToTerraform, true)(struct!.weekly),
  }
}


export function monitorAlertProcessingRuleActionGroupScheduleRecurrenceToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference | MonitorAlertProcessingRuleActionGroupScheduleRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: cdktf.listMapperHcl(monitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyToHclTerraform, true)(struct!.daily),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList",
    },
    monthly: {
      value: cdktf.listMapperHcl(monitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyToHclTerraform, true)(struct!.monthly),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList",
    },
    weekly: {
      value: cdktf.listMapperHcl(monitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyToHclTerraform, true)(struct!.weekly),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupScheduleRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupScheduleRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daily.internalValue = undefined;
      this._monthly.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daily.internalValue = value.daily;
      this._monthly.internalValue = value.monthly;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: false, optional: true, required: false
  private _daily = new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList(this, "daily", false);
  public get daily() {
    return this._daily;
  }
  public putDaily(value: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily[] | cdktf.IResolvable) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly = new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList(this, "monthly", false);
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly[] | cdktf.IResolvable) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList(this, "weekly", false);
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly[] | cdktf.IResolvable) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface MonitorAlertProcessingRuleActionGroupSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#effective_from MonitorAlertProcessingRuleActionGroup#effective_from}
  */
  readonly effectiveFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#effective_until MonitorAlertProcessingRuleActionGroup#effective_until}
  */
  readonly effectiveUntil?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#time_zone MonitorAlertProcessingRuleActionGroup#time_zone}
  */
  readonly timeZone?: string;
  /**
  * recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#recurrence MonitorAlertProcessingRuleActionGroup#recurrence}
  */
  readonly recurrence?: MonitorAlertProcessingRuleActionGroupScheduleRecurrence;
}

export function monitorAlertProcessingRuleActionGroupScheduleToTerraform(struct?: MonitorAlertProcessingRuleActionGroupScheduleOutputReference | MonitorAlertProcessingRuleActionGroupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effective_from: cdktf.stringToTerraform(struct!.effectiveFrom),
    effective_until: cdktf.stringToTerraform(struct!.effectiveUntil),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    recurrence: monitorAlertProcessingRuleActionGroupScheduleRecurrenceToTerraform(struct!.recurrence),
  }
}


export function monitorAlertProcessingRuleActionGroupScheduleToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupScheduleOutputReference | MonitorAlertProcessingRuleActionGroupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effective_from: {
      value: cdktf.stringToHclTerraform(struct!.effectiveFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_until: {
      value: cdktf.stringToHclTerraform(struct!.effectiveUntil),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence: {
      value: monitorAlertProcessingRuleActionGroupScheduleRecurrenceToHclTerraform(struct!.recurrence),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertProcessingRuleActionGroupScheduleRecurrenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertProcessingRuleActionGroupScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effectiveFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveFrom = this._effectiveFrom;
    }
    if (this._effectiveUntil !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveUntil = this._effectiveUntil;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._recurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._effectiveFrom = undefined;
      this._effectiveUntil = undefined;
      this._timeZone = undefined;
      this._recurrence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._effectiveFrom = value.effectiveFrom;
      this._effectiveUntil = value.effectiveUntil;
      this._timeZone = value.timeZone;
      this._recurrence.internalValue = value.recurrence;
    }
  }

  // effective_from - computed: false, optional: true, required: false
  private _effectiveFrom?: string; 
  public get effectiveFrom() {
    return this.getStringAttribute('effective_from');
  }
  public set effectiveFrom(value: string) {
    this._effectiveFrom = value;
  }
  public resetEffectiveFrom() {
    this._effectiveFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveFromInput() {
    return this._effectiveFrom;
  }

  // effective_until - computed: false, optional: true, required: false
  private _effectiveUntil?: string; 
  public get effectiveUntil() {
    return this.getStringAttribute('effective_until');
  }
  public set effectiveUntil(value: string) {
    this._effectiveUntil = value;
  }
  public resetEffectiveUntil() {
    this._effectiveUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveUntilInput() {
    return this._effectiveUntil;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence = new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference(this, "recurrence");
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: MonitorAlertProcessingRuleActionGroupScheduleRecurrence) {
    this._recurrence.internalValue = value;
  }
  public resetRecurrence() {
    this._recurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }
}
export interface MonitorAlertProcessingRuleActionGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#create MonitorAlertProcessingRuleActionGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#delete MonitorAlertProcessingRuleActionGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#read MonitorAlertProcessingRuleActionGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#update MonitorAlertProcessingRuleActionGroup#update}
  */
  readonly update?: string;
}

export function monitorAlertProcessingRuleActionGroupTimeoutsToTerraform(struct?: MonitorAlertProcessingRuleActionGroupTimeouts | cdktf.IResolvable): any {
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


export function monitorAlertProcessingRuleActionGroupTimeoutsToHclTerraform(struct?: MonitorAlertProcessingRuleActionGroupTimeouts | cdktf.IResolvable): any {
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

export class MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorAlertProcessingRuleActionGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorAlertProcessingRuleActionGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group azurerm_monitor_alert_processing_rule_action_group}
*/
export class MonitorAlertProcessingRuleActionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_monitor_alert_processing_rule_action_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorAlertProcessingRuleActionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorAlertProcessingRuleActionGroup to import
  * @param importFromId The id of the existing MonitorAlertProcessingRuleActionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorAlertProcessingRuleActionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_monitor_alert_processing_rule_action_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_alert_processing_rule_action_group azurerm_monitor_alert_processing_rule_action_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorAlertProcessingRuleActionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorAlertProcessingRuleActionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_alert_processing_rule_action_group',
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
    this._addActionGroupIds = config.addActionGroupIds;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._scopes = config.scopes;
    this._tags = config.tags;
    this._condition.internalValue = config.condition;
    this._schedule.internalValue = config.schedule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_action_group_ids - computed: false, optional: false, required: true
  private _addActionGroupIds?: string[]; 
  public get addActionGroupIds() {
    return this.getListAttribute('add_action_group_ids');
  }
  public set addActionGroupIds(value: string[]) {
    this._addActionGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addActionGroupIdsInput() {
    return this._addActionGroupIds;
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
  private _condition = new MonitorAlertProcessingRuleActionGroupConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: MonitorAlertProcessingRuleActionGroupCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new MonitorAlertProcessingRuleActionGroupScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: MonitorAlertProcessingRuleActionGroupSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorAlertProcessingRuleActionGroupTimeouts) {
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
      add_action_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addActionGroupIds),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      condition: monitorAlertProcessingRuleActionGroupConditionToTerraform(this._condition.internalValue),
      schedule: monitorAlertProcessingRuleActionGroupScheduleToTerraform(this._schedule.internalValue),
      timeouts: monitorAlertProcessingRuleActionGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_action_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addActionGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      condition: {
        value: monitorAlertProcessingRuleActionGroupConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlertProcessingRuleActionGroupConditionList",
      },
      schedule: {
        value: monitorAlertProcessingRuleActionGroupScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlertProcessingRuleActionGroupScheduleList",
      },
      timeouts: {
        value: monitorAlertProcessingRuleActionGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorAlertProcessingRuleActionGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
