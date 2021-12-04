// https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicySetDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#description PolicySetDefinition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#display_name PolicySetDefinition#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#management_group_id PolicySetDefinition#management_group_id}
  */
  readonly managementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#management_group_name PolicySetDefinition#management_group_name}
  */
  readonly managementGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#metadata PolicySetDefinition#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#name PolicySetDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#parameters PolicySetDefinition#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#policy_definitions PolicySetDefinition#policy_definitions}
  */
  readonly policyDefinitions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#policy_type PolicySetDefinition#policy_type}
  */
  readonly policyType: string;
  /**
  * policy_definition_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#policy_definition_group PolicySetDefinition#policy_definition_group}
  */
  readonly policyDefinitionGroup?: PolicySetDefinitionPolicyDefinitionGroup[];
  /**
  * policy_definition_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#policy_definition_reference PolicySetDefinition#policy_definition_reference}
  */
  readonly policyDefinitionReference?: PolicySetDefinitionPolicyDefinitionReference[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#timeouts PolicySetDefinition#timeouts}
  */
  readonly timeouts?: PolicySetDefinitionTimeouts;
}
export interface PolicySetDefinitionPolicyDefinitionGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#additional_metadata_resource_id PolicySetDefinition#additional_metadata_resource_id}
  */
  readonly additionalMetadataResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#category PolicySetDefinition#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#description PolicySetDefinition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#display_name PolicySetDefinition#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#name PolicySetDefinition#name}
  */
  readonly name: string;
}

export function policySetDefinitionPolicyDefinitionGroupToTerraform(struct?: PolicySetDefinitionPolicyDefinitionGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_metadata_resource_id: cdktf.stringToTerraform(struct!.additionalMetadataResourceId),
    category: cdktf.stringToTerraform(struct!.category),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface PolicySetDefinitionPolicyDefinitionReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#parameter_values PolicySetDefinition#parameter_values}
  */
  readonly parameterValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#parameters PolicySetDefinition#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#policy_definition_id PolicySetDefinition#policy_definition_id}
  */
  readonly policyDefinitionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#policy_group_names PolicySetDefinition#policy_group_names}
  */
  readonly policyGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#reference_id PolicySetDefinition#reference_id}
  */
  readonly referenceId?: string;
}

export function policySetDefinitionPolicyDefinitionReferenceToTerraform(struct?: PolicySetDefinitionPolicyDefinitionReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_values: cdktf.stringToTerraform(struct!.parameterValues),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    policy_definition_id: cdktf.stringToTerraform(struct!.policyDefinitionId),
    policy_group_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.policyGroupNames),
    reference_id: cdktf.stringToTerraform(struct!.referenceId),
  }
}

export interface PolicySetDefinitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#create PolicySetDefinition#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#delete PolicySetDefinition#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#read PolicySetDefinition#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html#update PolicySetDefinition#update}
  */
  readonly update?: string;
}

export function policySetDefinitionTimeoutsToTerraform(struct?: PolicySetDefinitionTimeoutsOutputReference | PolicySetDefinitionTimeouts): any {
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

export class PolicySetDefinitionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PolicySetDefinitionTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
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

  public set internalValue(value: PolicySetDefinitionTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html azurerm_policy_set_definition}
*/
export class PolicySetDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_policy_set_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html azurerm_policy_set_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicySetDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: PolicySetDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_policy_set_definition',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._managementGroupId = config.managementGroupId;
    this._managementGroupName = config.managementGroupName;
    this._metadata = config.metadata;
    this._name = config.name;
    this._parameters = config.parameters;
    this._policyDefinitions = config.policyDefinitions;
    this._policyType = config.policyType;
    this._policyDefinitionGroup = config.policyDefinitionGroup;
    this._policyDefinitionReference = config.policyDefinitionReference;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // management_group_id - computed: true, optional: true, required: false
  private _managementGroupId?: string; 
  public get managementGroupId() {
    return this.getStringAttribute('management_group_id');
  }
  public set managementGroupId(value: string) {
    this._managementGroupId = value;
  }
  public resetManagementGroupId() {
    this._managementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupIdInput() {
    return this._managementGroupId;
  }

  // management_group_name - computed: true, optional: true, required: false
  private _managementGroupName?: string; 
  public get managementGroupName() {
    return this.getStringAttribute('management_group_name');
  }
  public set managementGroupName(value: string) {
    this._managementGroupName = value;
  }
  public resetManagementGroupName() {
    this._managementGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupNameInput() {
    return this._managementGroupName;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // policy_definitions - computed: true, optional: true, required: false
  private _policyDefinitions?: string; 
  public get policyDefinitions() {
    return this.getStringAttribute('policy_definitions');
  }
  public set policyDefinitions(value: string) {
    this._policyDefinitions = value;
  }
  public resetPolicyDefinitions() {
    this._policyDefinitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionsInput() {
    return this._policyDefinitions;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // policy_definition_group - computed: false, optional: true, required: false
  private _policyDefinitionGroup?: PolicySetDefinitionPolicyDefinitionGroup[]; 
  public get policyDefinitionGroup() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('policy_definition_group') as any;
  }
  public set policyDefinitionGroup(value: PolicySetDefinitionPolicyDefinitionGroup[]) {
    this._policyDefinitionGroup = value;
  }
  public resetPolicyDefinitionGroup() {
    this._policyDefinitionGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionGroupInput() {
    return this._policyDefinitionGroup;
  }

  // policy_definition_reference - computed: false, optional: true, required: false
  private _policyDefinitionReference?: PolicySetDefinitionPolicyDefinitionReference[]; 
  public get policyDefinitionReference() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('policy_definition_reference') as any;
  }
  public set policyDefinitionReference(value: PolicySetDefinitionPolicyDefinitionReference[]) {
    this._policyDefinitionReference = value;
  }
  public resetPolicyDefinitionReference() {
    this._policyDefinitionReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionReferenceInput() {
    return this._policyDefinitionReference;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PolicySetDefinitionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PolicySetDefinitionTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      management_group_id: cdktf.stringToTerraform(this._managementGroupId),
      management_group_name: cdktf.stringToTerraform(this._managementGroupName),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.stringToTerraform(this._parameters),
      policy_definitions: cdktf.stringToTerraform(this._policyDefinitions),
      policy_type: cdktf.stringToTerraform(this._policyType),
      policy_definition_group: cdktf.listMapper(policySetDefinitionPolicyDefinitionGroupToTerraform)(this._policyDefinitionGroup),
      policy_definition_reference: cdktf.listMapper(policySetDefinitionPolicyDefinitionReferenceToTerraform)(this._policyDefinitionReference),
      timeouts: policySetDefinitionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
