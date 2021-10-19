// https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityCenterAutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#description SecurityCenterAutomation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#enabled SecurityCenterAutomation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#location SecurityCenterAutomation#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#name SecurityCenterAutomation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#resource_group_name SecurityCenterAutomation#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#scopes SecurityCenterAutomation#scopes}
  */
  readonly scopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#tags SecurityCenterAutomation#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#action SecurityCenterAutomation#action}
  */
  readonly action: SecurityCenterAutomationAction[];
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#source SecurityCenterAutomation#source}
  */
  readonly source: SecurityCenterAutomationSource[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#timeouts SecurityCenterAutomation#timeouts}
  */
  readonly timeouts?: SecurityCenterAutomationTimeouts;
}
export interface SecurityCenterAutomationAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#connection_string SecurityCenterAutomation#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#resource_id SecurityCenterAutomation#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#trigger_url SecurityCenterAutomation#trigger_url}
  */
  readonly triggerUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#type SecurityCenterAutomation#type}
  */
  readonly type: string;
}

function securityCenterAutomationActionToTerraform(struct?: SecurityCenterAutomationAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    trigger_url: cdktf.stringToTerraform(struct!.triggerUrl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface SecurityCenterAutomationSourceRuleSetRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#expected_value SecurityCenterAutomation#expected_value}
  */
  readonly expectedValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#operator SecurityCenterAutomation#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#property_path SecurityCenterAutomation#property_path}
  */
  readonly propertyPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#property_type SecurityCenterAutomation#property_type}
  */
  readonly propertyType: string;
}

function securityCenterAutomationSourceRuleSetRuleToTerraform(struct?: SecurityCenterAutomationSourceRuleSetRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_value: cdktf.stringToTerraform(struct!.expectedValue),
    operator: cdktf.stringToTerraform(struct!.operator),
    property_path: cdktf.stringToTerraform(struct!.propertyPath),
    property_type: cdktf.stringToTerraform(struct!.propertyType),
  }
}

export interface SecurityCenterAutomationSourceRuleSet {
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#rule SecurityCenterAutomation#rule}
  */
  readonly rule: SecurityCenterAutomationSourceRuleSetRule[];
}

function securityCenterAutomationSourceRuleSetToTerraform(struct?: SecurityCenterAutomationSourceRuleSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(securityCenterAutomationSourceRuleSetRuleToTerraform)(struct!.rule),
  }
}

export interface SecurityCenterAutomationSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#event_source SecurityCenterAutomation#event_source}
  */
  readonly eventSource: string;
  /**
  * rule_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#rule_set SecurityCenterAutomation#rule_set}
  */
  readonly ruleSet?: SecurityCenterAutomationSourceRuleSet[];
}

function securityCenterAutomationSourceToTerraform(struct?: SecurityCenterAutomationSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_source: cdktf.stringToTerraform(struct!.eventSource),
    rule_set: cdktf.listMapper(securityCenterAutomationSourceRuleSetToTerraform)(struct!.ruleSet),
  }
}

export interface SecurityCenterAutomationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#create SecurityCenterAutomation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#delete SecurityCenterAutomation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#read SecurityCenterAutomation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html#update SecurityCenterAutomation#update}
  */
  readonly update?: string;
}

function securityCenterAutomationTimeoutsToTerraform(struct?: SecurityCenterAutomationTimeoutsOutputReference | SecurityCenterAutomationTimeouts): any {
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

export class SecurityCenterAutomationTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html azurerm_security_center_automation}
*/
export class SecurityCenterAutomation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_security_center_automation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_automation.html azurerm_security_center_automation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityCenterAutomationConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityCenterAutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_security_center_automation',
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
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._scopes = config.scopes;
    this._tags = config.tags;
    this._action = config.action;
    this._source = config.source;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._scopes
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

  // action - computed: false, optional: false, required: true
  private _action?: SecurityCenterAutomationAction[]; 
  public get action() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('action') as any;
  }
  public set action(value: SecurityCenterAutomationAction[]) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // source - computed: false, optional: false, required: true
  private _source?: SecurityCenterAutomationSource[]; 
  public get source() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('source') as any;
  }
  public set source(value: SecurityCenterAutomationSource[]) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityCenterAutomationTimeouts | undefined; 
  private __timeoutsOutput = new SecurityCenterAutomationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SecurityCenterAutomationTimeouts | undefined) {
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
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._scopes),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      action: cdktf.listMapper(securityCenterAutomationActionToTerraform)(this._action),
      source: cdktf.listMapper(securityCenterAutomationSourceToTerraform)(this._source),
      timeouts: securityCenterAutomationTimeoutsToTerraform(this._timeouts),
    };
  }
}
