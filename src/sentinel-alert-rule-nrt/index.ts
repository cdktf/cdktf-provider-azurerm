// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelAlertRuleNrtConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_guid SentinelAlertRuleNrt#alert_rule_template_guid}
  */
  readonly alertRuleTemplateGuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_version SentinelAlertRuleNrt#alert_rule_template_version}
  */
  readonly alertRuleTemplateVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#custom_details SentinelAlertRuleNrt#custom_details}
  */
  readonly customDetails?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#description SentinelAlertRuleNrt#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#display_name SentinelAlertRuleNrt#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#id SentinelAlertRuleNrt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#log_analytics_workspace_id SentinelAlertRuleNrt#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#query SentinelAlertRuleNrt#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#severity SentinelAlertRuleNrt#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#suppression_duration SentinelAlertRuleNrt#suppression_duration}
  */
  readonly suppressionDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#suppression_enabled SentinelAlertRuleNrt#suppression_enabled}
  */
  readonly suppressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#tactics SentinelAlertRuleNrt#tactics}
  */
  readonly tactics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#techniques SentinelAlertRuleNrt#techniques}
  */
  readonly techniques?: string[];
  /**
  * alert_details_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#alert_details_override SentinelAlertRuleNrt#alert_details_override}
  */
  readonly alertDetailsOverride?: SentinelAlertRuleNrtAlertDetailsOverride[] | cdktf.IResolvable;
  /**
  * entity_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#entity_mapping SentinelAlertRuleNrt#entity_mapping}
  */
  readonly entityMapping?: SentinelAlertRuleNrtEntityMapping[] | cdktf.IResolvable;
  /**
  * event_grouping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#event_grouping SentinelAlertRuleNrt#event_grouping}
  */
  readonly eventGrouping: SentinelAlertRuleNrtEventGrouping;
  /**
  * incident block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#incident SentinelAlertRuleNrt#incident}
  */
  readonly incident?: SentinelAlertRuleNrtIncident;
  /**
  * sentinel_entity_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#sentinel_entity_mapping SentinelAlertRuleNrt#sentinel_entity_mapping}
  */
  readonly sentinelEntityMapping?: SentinelAlertRuleNrtSentinelEntityMapping[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#timeouts SentinelAlertRuleNrt#timeouts}
  */
  readonly timeouts?: SentinelAlertRuleNrtTimeouts;
}
export interface SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#value SentinelAlertRuleNrt#value}
  */
  readonly value: string;
}

export function sentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyToTerraform(struct?: SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyToHclTerraform(struct?: SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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

export class SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList extends cdktf.ComplexList {
  public internalValue? : SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty[] | cdktf.IResolvable

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
  public get(index: number): SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference {
    return new SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelAlertRuleNrtAlertDetailsOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#description_format SentinelAlertRuleNrt#description_format}
  */
  readonly descriptionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#display_name_format SentinelAlertRuleNrt#display_name_format}
  */
  readonly displayNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#severity_column_name SentinelAlertRuleNrt#severity_column_name}
  */
  readonly severityColumnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#tactics_column_name SentinelAlertRuleNrt#tactics_column_name}
  */
  readonly tacticsColumnName?: string;
  /**
  * dynamic_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#dynamic_property SentinelAlertRuleNrt#dynamic_property}
  */
  readonly dynamicProperty?: SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty[] | cdktf.IResolvable;
}

export function sentinelAlertRuleNrtAlertDetailsOverrideToTerraform(struct?: SentinelAlertRuleNrtAlertDetailsOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description_format: cdktf.stringToTerraform(struct!.descriptionFormat),
    display_name_format: cdktf.stringToTerraform(struct!.displayNameFormat),
    severity_column_name: cdktf.stringToTerraform(struct!.severityColumnName),
    tactics_column_name: cdktf.stringToTerraform(struct!.tacticsColumnName),
    dynamic_property: cdktf.listMapper(sentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyToTerraform, true)(struct!.dynamicProperty),
  }
}


export function sentinelAlertRuleNrtAlertDetailsOverrideToHclTerraform(struct?: SentinelAlertRuleNrtAlertDetailsOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description_format: {
      value: cdktf.stringToHclTerraform(struct!.descriptionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name_format: {
      value: cdktf.stringToHclTerraform(struct!.displayNameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity_column_name: {
      value: cdktf.stringToHclTerraform(struct!.severityColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tactics_column_name: {
      value: cdktf.stringToHclTerraform(struct!.tacticsColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_property: {
      value: cdktf.listMapperHcl(sentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyToHclTerraform, true)(struct!.dynamicProperty),
      isBlock: true,
      type: "list",
      storageClassType: "SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelAlertRuleNrtAlertDetailsOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SentinelAlertRuleNrtAlertDetailsOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionFormat = this._descriptionFormat;
    }
    if (this._displayNameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayNameFormat = this._displayNameFormat;
    }
    if (this._severityColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityColumnName = this._severityColumnName;
    }
    if (this._tacticsColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacticsColumnName = this._tacticsColumnName;
    }
    if (this._dynamicProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicProperty = this._dynamicProperty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleNrtAlertDetailsOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptionFormat = undefined;
      this._displayNameFormat = undefined;
      this._severityColumnName = undefined;
      this._tacticsColumnName = undefined;
      this._dynamicProperty.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptionFormat = value.descriptionFormat;
      this._displayNameFormat = value.displayNameFormat;
      this._severityColumnName = value.severityColumnName;
      this._tacticsColumnName = value.tacticsColumnName;
      this._dynamicProperty.internalValue = value.dynamicProperty;
    }
  }

  // description_format - computed: false, optional: true, required: false
  private _descriptionFormat?: string; 
  public get descriptionFormat() {
    return this.getStringAttribute('description_format');
  }
  public set descriptionFormat(value: string) {
    this._descriptionFormat = value;
  }
  public resetDescriptionFormat() {
    this._descriptionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionFormatInput() {
    return this._descriptionFormat;
  }

  // display_name_format - computed: false, optional: true, required: false
  private _displayNameFormat?: string; 
  public get displayNameFormat() {
    return this.getStringAttribute('display_name_format');
  }
  public set displayNameFormat(value: string) {
    this._displayNameFormat = value;
  }
  public resetDisplayNameFormat() {
    this._displayNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameFormatInput() {
    return this._displayNameFormat;
  }

  // severity_column_name - computed: false, optional: true, required: false
  private _severityColumnName?: string; 
  public get severityColumnName() {
    return this.getStringAttribute('severity_column_name');
  }
  public set severityColumnName(value: string) {
    this._severityColumnName = value;
  }
  public resetSeverityColumnName() {
    this._severityColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityColumnNameInput() {
    return this._severityColumnName;
  }

  // tactics_column_name - computed: false, optional: true, required: false
  private _tacticsColumnName?: string; 
  public get tacticsColumnName() {
    return this.getStringAttribute('tactics_column_name');
  }
  public set tacticsColumnName(value: string) {
    this._tacticsColumnName = value;
  }
  public resetTacticsColumnName() {
    this._tacticsColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacticsColumnNameInput() {
    return this._tacticsColumnName;
  }

  // dynamic_property - computed: false, optional: true, required: false
  private _dynamicProperty = new SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList(this, "dynamic_property", false);
  public get dynamicProperty() {
    return this._dynamicProperty;
  }
  public putDynamicProperty(value: SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty[] | cdktf.IResolvable) {
    this._dynamicProperty.internalValue = value;
  }
  public resetDynamicProperty() {
    this._dynamicProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPropertyInput() {
    return this._dynamicProperty.internalValue;
  }
}

export class SentinelAlertRuleNrtAlertDetailsOverrideList extends cdktf.ComplexList {
  public internalValue? : SentinelAlertRuleNrtAlertDetailsOverride[] | cdktf.IResolvable

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
  public get(index: number): SentinelAlertRuleNrtAlertDetailsOverrideOutputReference {
    return new SentinelAlertRuleNrtAlertDetailsOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelAlertRuleNrtEntityMappingFieldMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#column_name SentinelAlertRuleNrt#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#identifier SentinelAlertRuleNrt#identifier}
  */
  readonly identifier: string;
}

export function sentinelAlertRuleNrtEntityMappingFieldMappingToTerraform(struct?: SentinelAlertRuleNrtEntityMappingFieldMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    identifier: cdktf.stringToTerraform(struct!.identifier),
  }
}


export function sentinelAlertRuleNrtEntityMappingFieldMappingToHclTerraform(struct?: SentinelAlertRuleNrtEntityMappingFieldMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SentinelAlertRuleNrtEntityMappingFieldMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleNrtEntityMappingFieldMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._identifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._identifier = value.identifier;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class SentinelAlertRuleNrtEntityMappingFieldMappingList extends cdktf.ComplexList {
  public internalValue? : SentinelAlertRuleNrtEntityMappingFieldMapping[] | cdktf.IResolvable

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
  public get(index: number): SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference {
    return new SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelAlertRuleNrtEntityMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#entity_type SentinelAlertRuleNrt#entity_type}
  */
  readonly entityType: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#field_mapping SentinelAlertRuleNrt#field_mapping}
  */
  readonly fieldMapping: SentinelAlertRuleNrtEntityMappingFieldMapping[] | cdktf.IResolvable;
}

export function sentinelAlertRuleNrtEntityMappingToTerraform(struct?: SentinelAlertRuleNrtEntityMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    field_mapping: cdktf.listMapper(sentinelAlertRuleNrtEntityMappingFieldMappingToTerraform, true)(struct!.fieldMapping),
  }
}


export function sentinelAlertRuleNrtEntityMappingToHclTerraform(struct?: SentinelAlertRuleNrtEntityMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktf.listMapperHcl(sentinelAlertRuleNrtEntityMappingFieldMappingToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "SentinelAlertRuleNrtEntityMappingFieldMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelAlertRuleNrtEntityMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SentinelAlertRuleNrtEntityMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleNrtEntityMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityType = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityType = value.entityType;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // field_mapping - computed: false, optional: false, required: true
  private _fieldMapping = new SentinelAlertRuleNrtEntityMappingFieldMappingList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: SentinelAlertRuleNrtEntityMappingFieldMapping[] | cdktf.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class SentinelAlertRuleNrtEntityMappingList extends cdktf.ComplexList {
  public internalValue? : SentinelAlertRuleNrtEntityMapping[] | cdktf.IResolvable

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
  public get(index: number): SentinelAlertRuleNrtEntityMappingOutputReference {
    return new SentinelAlertRuleNrtEntityMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelAlertRuleNrtEventGrouping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#aggregation_method SentinelAlertRuleNrt#aggregation_method}
  */
  readonly aggregationMethod: string;
}

export function sentinelAlertRuleNrtEventGroupingToTerraform(struct?: SentinelAlertRuleNrtEventGroupingOutputReference | SentinelAlertRuleNrtEventGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_method: cdktf.stringToTerraform(struct!.aggregationMethod),
  }
}


export function sentinelAlertRuleNrtEventGroupingToHclTerraform(struct?: SentinelAlertRuleNrtEventGroupingOutputReference | SentinelAlertRuleNrtEventGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_method: {
      value: cdktf.stringToHclTerraform(struct!.aggregationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelAlertRuleNrtEventGroupingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SentinelAlertRuleNrtEventGrouping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationMethod = this._aggregationMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleNrtEventGrouping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationMethod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationMethod = value.aggregationMethod;
    }
  }

  // aggregation_method - computed: false, optional: false, required: true
  private _aggregationMethod?: string; 
  public get aggregationMethod() {
    return this.getStringAttribute('aggregation_method');
  }
  public set aggregationMethod(value: string) {
    this._aggregationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationMethodInput() {
    return this._aggregationMethod;
  }
}
export interface SentinelAlertRuleNrtIncidentGrouping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#by_alert_details SentinelAlertRuleNrt#by_alert_details}
  */
  readonly byAlertDetails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#by_custom_details SentinelAlertRuleNrt#by_custom_details}
  */
  readonly byCustomDetails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#by_entities SentinelAlertRuleNrt#by_entities}
  */
  readonly byEntities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#entity_matching_method SentinelAlertRuleNrt#entity_matching_method}
  */
  readonly entityMatchingMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#lookback_duration SentinelAlertRuleNrt#lookback_duration}
  */
  readonly lookbackDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#reopen_closed_incidents SentinelAlertRuleNrt#reopen_closed_incidents}
  */
  readonly reopenClosedIncidents?: boolean | cdktf.IResolvable;
}

export function sentinelAlertRuleNrtIncidentGroupingToTerraform(struct?: SentinelAlertRuleNrtIncidentGroupingOutputReference | SentinelAlertRuleNrtIncidentGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    by_alert_details: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.byAlertDetails),
    by_custom_details: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.byCustomDetails),
    by_entities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.byEntities),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    entity_matching_method: cdktf.stringToTerraform(struct!.entityMatchingMethod),
    lookback_duration: cdktf.stringToTerraform(struct!.lookbackDuration),
    reopen_closed_incidents: cdktf.booleanToTerraform(struct!.reopenClosedIncidents),
  }
}


export function sentinelAlertRuleNrtIncidentGroupingToHclTerraform(struct?: SentinelAlertRuleNrtIncidentGroupingOutputReference | SentinelAlertRuleNrtIncidentGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    by_alert_details: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.byAlertDetails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    by_custom_details: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.byCustomDetails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    by_entities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.byEntities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    entity_matching_method: {
      value: cdktf.stringToHclTerraform(struct!.entityMatchingMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookback_duration: {
      value: cdktf.stringToHclTerraform(struct!.lookbackDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reopen_closed_incidents: {
      value: cdktf.booleanToHclTerraform(struct!.reopenClosedIncidents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelAlertRuleNrtIncidentGroupingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SentinelAlertRuleNrtIncidentGrouping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byAlertDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.byAlertDetails = this._byAlertDetails;
    }
    if (this._byCustomDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.byCustomDetails = this._byCustomDetails;
    }
    if (this._byEntities !== undefined) {
      hasAnyValues = true;
      internalValueResult.byEntities = this._byEntities;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._entityMatchingMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityMatchingMethod = this._entityMatchingMethod;
    }
    if (this._lookbackDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookbackDuration = this._lookbackDuration;
    }
    if (this._reopenClosedIncidents !== undefined) {
      hasAnyValues = true;
      internalValueResult.reopenClosedIncidents = this._reopenClosedIncidents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleNrtIncidentGrouping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._byAlertDetails = undefined;
      this._byCustomDetails = undefined;
      this._byEntities = undefined;
      this._enabled = undefined;
      this._entityMatchingMethod = undefined;
      this._lookbackDuration = undefined;
      this._reopenClosedIncidents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._byAlertDetails = value.byAlertDetails;
      this._byCustomDetails = value.byCustomDetails;
      this._byEntities = value.byEntities;
      this._enabled = value.enabled;
      this._entityMatchingMethod = value.entityMatchingMethod;
      this._lookbackDuration = value.lookbackDuration;
      this._reopenClosedIncidents = value.reopenClosedIncidents;
    }
  }

  // by_alert_details - computed: false, optional: true, required: false
  private _byAlertDetails?: string[]; 
  public get byAlertDetails() {
    return this.getListAttribute('by_alert_details');
  }
  public set byAlertDetails(value: string[]) {
    this._byAlertDetails = value;
  }
  public resetByAlertDetails() {
    this._byAlertDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byAlertDetailsInput() {
    return this._byAlertDetails;
  }

  // by_custom_details - computed: false, optional: true, required: false
  private _byCustomDetails?: string[]; 
  public get byCustomDetails() {
    return this.getListAttribute('by_custom_details');
  }
  public set byCustomDetails(value: string[]) {
    this._byCustomDetails = value;
  }
  public resetByCustomDetails() {
    this._byCustomDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byCustomDetailsInput() {
    return this._byCustomDetails;
  }

  // by_entities - computed: false, optional: true, required: false
  private _byEntities?: string[]; 
  public get byEntities() {
    return this.getListAttribute('by_entities');
  }
  public set byEntities(value: string[]) {
    this._byEntities = value;
  }
  public resetByEntities() {
    this._byEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byEntitiesInput() {
    return this._byEntities;
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

  // entity_matching_method - computed: false, optional: true, required: false
  private _entityMatchingMethod?: string; 
  public get entityMatchingMethod() {
    return this.getStringAttribute('entity_matching_method');
  }
  public set entityMatchingMethod(value: string) {
    this._entityMatchingMethod = value;
  }
  public resetEntityMatchingMethod() {
    this._entityMatchingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityMatchingMethodInput() {
    return this._entityMatchingMethod;
  }

  // lookback_duration - computed: false, optional: true, required: false
  private _lookbackDuration?: string; 
  public get lookbackDuration() {
    return this.getStringAttribute('lookback_duration');
  }
  public set lookbackDuration(value: string) {
    this._lookbackDuration = value;
  }
  public resetLookbackDuration() {
    this._lookbackDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookbackDurationInput() {
    return this._lookbackDuration;
  }

  // reopen_closed_incidents - computed: false, optional: true, required: false
  private _reopenClosedIncidents?: boolean | cdktf.IResolvable; 
  public get reopenClosedIncidents() {
    return this.getBooleanAttribute('reopen_closed_incidents');
  }
  public set reopenClosedIncidents(value: boolean | cdktf.IResolvable) {
    this._reopenClosedIncidents = value;
  }
  public resetReopenClosedIncidents() {
    this._reopenClosedIncidents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reopenClosedIncidentsInput() {
    return this._reopenClosedIncidents;
  }
}
export interface SentinelAlertRuleNrtIncident {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#create_incident_enabled SentinelAlertRuleNrt#create_incident_enabled}
  */
  readonly createIncidentEnabled: boolean | cdktf.IResolvable;
  /**
  * grouping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#grouping SentinelAlertRuleNrt#grouping}
  */
  readonly grouping: SentinelAlertRuleNrtIncidentGrouping;
}

export function sentinelAlertRuleNrtIncidentToTerraform(struct?: SentinelAlertRuleNrtIncidentOutputReference | SentinelAlertRuleNrtIncident): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_incident_enabled: cdktf.booleanToTerraform(struct!.createIncidentEnabled),
    grouping: sentinelAlertRuleNrtIncidentGroupingToTerraform(struct!.grouping),
  }
}


export function sentinelAlertRuleNrtIncidentToHclTerraform(struct?: SentinelAlertRuleNrtIncidentOutputReference | SentinelAlertRuleNrtIncident): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_incident_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.createIncidentEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grouping: {
      value: sentinelAlertRuleNrtIncidentGroupingToHclTerraform(struct!.grouping),
      isBlock: true,
      type: "list",
      storageClassType: "SentinelAlertRuleNrtIncidentGroupingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelAlertRuleNrtIncidentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SentinelAlertRuleNrtIncident | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createIncidentEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.createIncidentEnabled = this._createIncidentEnabled;
    }
    if (this._grouping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grouping = this._grouping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleNrtIncident | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createIncidentEnabled = undefined;
      this._grouping.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createIncidentEnabled = value.createIncidentEnabled;
      this._grouping.internalValue = value.grouping;
    }
  }

  // create_incident_enabled - computed: false, optional: false, required: true
  private _createIncidentEnabled?: boolean | cdktf.IResolvable; 
  public get createIncidentEnabled() {
    return this.getBooleanAttribute('create_incident_enabled');
  }
  public set createIncidentEnabled(value: boolean | cdktf.IResolvable) {
    this._createIncidentEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createIncidentEnabledInput() {
    return this._createIncidentEnabled;
  }

  // grouping - computed: false, optional: false, required: true
  private _grouping = new SentinelAlertRuleNrtIncidentGroupingOutputReference(this, "grouping");
  public get grouping() {
    return this._grouping;
  }
  public putGrouping(value: SentinelAlertRuleNrtIncidentGrouping) {
    this._grouping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingInput() {
    return this._grouping.internalValue;
  }
}
export interface SentinelAlertRuleNrtSentinelEntityMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#column_name SentinelAlertRuleNrt#column_name}
  */
  readonly columnName: string;
}

export function sentinelAlertRuleNrtSentinelEntityMappingToTerraform(struct?: SentinelAlertRuleNrtSentinelEntityMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
  }
}


export function sentinelAlertRuleNrtSentinelEntityMappingToHclTerraform(struct?: SentinelAlertRuleNrtSentinelEntityMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelAlertRuleNrtSentinelEntityMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SentinelAlertRuleNrtSentinelEntityMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleNrtSentinelEntityMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }
}

export class SentinelAlertRuleNrtSentinelEntityMappingList extends cdktf.ComplexList {
  public internalValue? : SentinelAlertRuleNrtSentinelEntityMapping[] | cdktf.IResolvable

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
  public get(index: number): SentinelAlertRuleNrtSentinelEntityMappingOutputReference {
    return new SentinelAlertRuleNrtSentinelEntityMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelAlertRuleNrtTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#create SentinelAlertRuleNrt#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#delete SentinelAlertRuleNrt#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#read SentinelAlertRuleNrt#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#update SentinelAlertRuleNrt#update}
  */
  readonly update?: string;
}

export function sentinelAlertRuleNrtTimeoutsToTerraform(struct?: SentinelAlertRuleNrtTimeouts | cdktf.IResolvable): any {
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


export function sentinelAlertRuleNrtTimeoutsToHclTerraform(struct?: SentinelAlertRuleNrtTimeouts | cdktf.IResolvable): any {
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

export class SentinelAlertRuleNrtTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SentinelAlertRuleNrtTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SentinelAlertRuleNrtTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt azurerm_sentinel_alert_rule_nrt}
*/
export class SentinelAlertRuleNrt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_sentinel_alert_rule_nrt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SentinelAlertRuleNrt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SentinelAlertRuleNrt to import
  * @param importFromId The id of the existing SentinelAlertRuleNrt that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SentinelAlertRuleNrt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_sentinel_alert_rule_nrt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/sentinel_alert_rule_nrt azurerm_sentinel_alert_rule_nrt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelAlertRuleNrtConfig
  */
  public constructor(scope: Construct, id: string, config: SentinelAlertRuleNrtConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_alert_rule_nrt',
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
    this._alertRuleTemplateGuid = config.alertRuleTemplateGuid;
    this._alertRuleTemplateVersion = config.alertRuleTemplateVersion;
    this._customDetails = config.customDetails;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._query = config.query;
    this._severity = config.severity;
    this._suppressionDuration = config.suppressionDuration;
    this._suppressionEnabled = config.suppressionEnabled;
    this._tactics = config.tactics;
    this._techniques = config.techniques;
    this._alertDetailsOverride.internalValue = config.alertDetailsOverride;
    this._entityMapping.internalValue = config.entityMapping;
    this._eventGrouping.internalValue = config.eventGrouping;
    this._incident.internalValue = config.incident;
    this._sentinelEntityMapping.internalValue = config.sentinelEntityMapping;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_rule_template_guid - computed: false, optional: true, required: false
  private _alertRuleTemplateGuid?: string; 
  public get alertRuleTemplateGuid() {
    return this.getStringAttribute('alert_rule_template_guid');
  }
  public set alertRuleTemplateGuid(value: string) {
    this._alertRuleTemplateGuid = value;
  }
  public resetAlertRuleTemplateGuid() {
    this._alertRuleTemplateGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleTemplateGuidInput() {
    return this._alertRuleTemplateGuid;
  }

  // alert_rule_template_version - computed: false, optional: true, required: false
  private _alertRuleTemplateVersion?: string; 
  public get alertRuleTemplateVersion() {
    return this.getStringAttribute('alert_rule_template_version');
  }
  public set alertRuleTemplateVersion(value: string) {
    this._alertRuleTemplateVersion = value;
  }
  public resetAlertRuleTemplateVersion() {
    this._alertRuleTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleTemplateVersionInput() {
    return this._alertRuleTemplateVersion;
  }

  // custom_details - computed: false, optional: true, required: false
  private _customDetails?: { [key: string]: string }; 
  public get customDetails() {
    return this.getStringMapAttribute('custom_details');
  }
  public set customDetails(value: { [key: string]: string }) {
    this._customDetails = value;
  }
  public resetCustomDetails() {
    this._customDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDetailsInput() {
    return this._customDetails;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // suppression_duration - computed: false, optional: true, required: false
  private _suppressionDuration?: string; 
  public get suppressionDuration() {
    return this.getStringAttribute('suppression_duration');
  }
  public set suppressionDuration(value: string) {
    this._suppressionDuration = value;
  }
  public resetSuppressionDuration() {
    this._suppressionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionDurationInput() {
    return this._suppressionDuration;
  }

  // suppression_enabled - computed: false, optional: true, required: false
  private _suppressionEnabled?: boolean | cdktf.IResolvable; 
  public get suppressionEnabled() {
    return this.getBooleanAttribute('suppression_enabled');
  }
  public set suppressionEnabled(value: boolean | cdktf.IResolvable) {
    this._suppressionEnabled = value;
  }
  public resetSuppressionEnabled() {
    this._suppressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionEnabledInput() {
    return this._suppressionEnabled;
  }

  // tactics - computed: false, optional: true, required: false
  private _tactics?: string[]; 
  public get tactics() {
    return cdktf.Fn.tolist(this.getListAttribute('tactics'));
  }
  public set tactics(value: string[]) {
    this._tactics = value;
  }
  public resetTactics() {
    this._tactics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacticsInput() {
    return this._tactics;
  }

  // techniques - computed: false, optional: true, required: false
  private _techniques?: string[]; 
  public get techniques() {
    return cdktf.Fn.tolist(this.getListAttribute('techniques'));
  }
  public set techniques(value: string[]) {
    this._techniques = value;
  }
  public resetTechniques() {
    this._techniques = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techniquesInput() {
    return this._techniques;
  }

  // alert_details_override - computed: false, optional: true, required: false
  private _alertDetailsOverride = new SentinelAlertRuleNrtAlertDetailsOverrideList(this, "alert_details_override", false);
  public get alertDetailsOverride() {
    return this._alertDetailsOverride;
  }
  public putAlertDetailsOverride(value: SentinelAlertRuleNrtAlertDetailsOverride[] | cdktf.IResolvable) {
    this._alertDetailsOverride.internalValue = value;
  }
  public resetAlertDetailsOverride() {
    this._alertDetailsOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDetailsOverrideInput() {
    return this._alertDetailsOverride.internalValue;
  }

  // entity_mapping - computed: false, optional: true, required: false
  private _entityMapping = new SentinelAlertRuleNrtEntityMappingList(this, "entity_mapping", false);
  public get entityMapping() {
    return this._entityMapping;
  }
  public putEntityMapping(value: SentinelAlertRuleNrtEntityMapping[] | cdktf.IResolvable) {
    this._entityMapping.internalValue = value;
  }
  public resetEntityMapping() {
    this._entityMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityMappingInput() {
    return this._entityMapping.internalValue;
  }

  // event_grouping - computed: false, optional: false, required: true
  private _eventGrouping = new SentinelAlertRuleNrtEventGroupingOutputReference(this, "event_grouping");
  public get eventGrouping() {
    return this._eventGrouping;
  }
  public putEventGrouping(value: SentinelAlertRuleNrtEventGrouping) {
    this._eventGrouping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventGroupingInput() {
    return this._eventGrouping.internalValue;
  }

  // incident - computed: false, optional: true, required: false
  private _incident = new SentinelAlertRuleNrtIncidentOutputReference(this, "incident");
  public get incident() {
    return this._incident;
  }
  public putIncident(value: SentinelAlertRuleNrtIncident) {
    this._incident.internalValue = value;
  }
  public resetIncident() {
    this._incident.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentInput() {
    return this._incident.internalValue;
  }

  // sentinel_entity_mapping - computed: false, optional: true, required: false
  private _sentinelEntityMapping = new SentinelAlertRuleNrtSentinelEntityMappingList(this, "sentinel_entity_mapping", false);
  public get sentinelEntityMapping() {
    return this._sentinelEntityMapping;
  }
  public putSentinelEntityMapping(value: SentinelAlertRuleNrtSentinelEntityMapping[] | cdktf.IResolvable) {
    this._sentinelEntityMapping.internalValue = value;
  }
  public resetSentinelEntityMapping() {
    this._sentinelEntityMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelEntityMappingInput() {
    return this._sentinelEntityMapping.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SentinelAlertRuleNrtTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SentinelAlertRuleNrtTimeouts) {
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
      alert_rule_template_guid: cdktf.stringToTerraform(this._alertRuleTemplateGuid),
      alert_rule_template_version: cdktf.stringToTerraform(this._alertRuleTemplateVersion),
      custom_details: cdktf.hashMapper(cdktf.stringToTerraform)(this._customDetails),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      severity: cdktf.stringToTerraform(this._severity),
      suppression_duration: cdktf.stringToTerraform(this._suppressionDuration),
      suppression_enabled: cdktf.booleanToTerraform(this._suppressionEnabled),
      tactics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tactics),
      techniques: cdktf.listMapper(cdktf.stringToTerraform, false)(this._techniques),
      alert_details_override: cdktf.listMapper(sentinelAlertRuleNrtAlertDetailsOverrideToTerraform, true)(this._alertDetailsOverride.internalValue),
      entity_mapping: cdktf.listMapper(sentinelAlertRuleNrtEntityMappingToTerraform, true)(this._entityMapping.internalValue),
      event_grouping: sentinelAlertRuleNrtEventGroupingToTerraform(this._eventGrouping.internalValue),
      incident: sentinelAlertRuleNrtIncidentToTerraform(this._incident.internalValue),
      sentinel_entity_mapping: cdktf.listMapper(sentinelAlertRuleNrtSentinelEntityMappingToTerraform, true)(this._sentinelEntityMapping.internalValue),
      timeouts: sentinelAlertRuleNrtTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_rule_template_guid: {
        value: cdktf.stringToHclTerraform(this._alertRuleTemplateGuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_rule_template_version: {
        value: cdktf.stringToHclTerraform(this._alertRuleTemplateVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_details: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customDetails),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppression_duration: {
        value: cdktf.stringToHclTerraform(this._suppressionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppression_enabled: {
        value: cdktf.booleanToHclTerraform(this._suppressionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tactics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tactics),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      techniques: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._techniques),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alert_details_override: {
        value: cdktf.listMapperHcl(sentinelAlertRuleNrtAlertDetailsOverrideToHclTerraform, true)(this._alertDetailsOverride.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelAlertRuleNrtAlertDetailsOverrideList",
      },
      entity_mapping: {
        value: cdktf.listMapperHcl(sentinelAlertRuleNrtEntityMappingToHclTerraform, true)(this._entityMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelAlertRuleNrtEntityMappingList",
      },
      event_grouping: {
        value: sentinelAlertRuleNrtEventGroupingToHclTerraform(this._eventGrouping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelAlertRuleNrtEventGroupingList",
      },
      incident: {
        value: sentinelAlertRuleNrtIncidentToHclTerraform(this._incident.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelAlertRuleNrtIncidentList",
      },
      sentinel_entity_mapping: {
        value: cdktf.listMapperHcl(sentinelAlertRuleNrtSentinelEntityMappingToHclTerraform, true)(this._sentinelEntityMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelAlertRuleNrtSentinelEntityMappingList",
      },
      timeouts: {
        value: sentinelAlertRuleNrtTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SentinelAlertRuleNrtTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
