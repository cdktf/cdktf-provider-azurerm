// https://www.terraform.io/docs/providers/azurerm/d/policy_set_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermPolicySetDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/policy_set_definition.html#display_name DataAzurermPolicySetDefinition#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/policy_set_definition.html#management_group_name DataAzurermPolicySetDefinition#management_group_name}
  */
  readonly managementGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/policy_set_definition.html#name DataAzurermPolicySetDefinition#name}
  */
  readonly name?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/policy_set_definition.html#timeouts DataAzurermPolicySetDefinition#timeouts}
  */
  readonly timeouts?: DataAzurermPolicySetDefinitionTimeouts;
}
export class DataAzurermPolicySetDefinitionPolicyDefinitionGroup extends cdktf.ComplexComputedList {

  // additional_metadata_resource_id - computed: true, optional: false, required: false
  public get additionalMetadataResourceId() {
    return this.getStringAttribute('additional_metadata_resource_id');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataAzurermPolicySetDefinitionPolicyDefinitionReference extends cdktf.ComplexComputedList {

  // parameter_values - computed: true, optional: false, required: false
  public get parameterValues() {
    return this.getStringAttribute('parameter_values');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }

  // policy_definition_id - computed: true, optional: false, required: false
  public get policyDefinitionId() {
    return this.getStringAttribute('policy_definition_id');
  }

  // policy_group_names - computed: true, optional: false, required: false
  public get policyGroupNames() {
    return this.getListAttribute('policy_group_names');
  }

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }
}
export interface DataAzurermPolicySetDefinitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/policy_set_definition.html#read DataAzurermPolicySetDefinition#read}
  */
  readonly read?: string;
}

function dataAzurermPolicySetDefinitionTimeoutsToTerraform(struct?: DataAzurermPolicySetDefinitionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/policy_set_definition.html azurerm_policy_set_definition}
*/
export class DataAzurermPolicySetDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_policy_set_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/policy_set_definition.html azurerm_policy_set_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermPolicySetDefinitionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzurermPolicySetDefinitionConfig = {}) {
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
    this._displayName = config.displayName;
    this._managementGroupName = config.managementGroupName;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // management_group_name - computed: false, optional: true, required: false
  private _managementGroupName?: string;
  public get managementGroupName() {
    return this.getStringAttribute('management_group_name');
  }
  public set managementGroupName(value: string ) {
    this._managementGroupName = value;
  }
  public resetManagementGroupName() {
    this._managementGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupNameInput() {
    return this._managementGroupName
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // policy_definition_group - computed: true, optional: false, required: false
  public policyDefinitionGroup(index: string) {
    return new DataAzurermPolicySetDefinitionPolicyDefinitionGroup(this, 'policy_definition_group', index);
  }

  // policy_definition_reference - computed: true, optional: false, required: false
  public policyDefinitionReference(index: string) {
    return new DataAzurermPolicySetDefinitionPolicyDefinitionReference(this, 'policy_definition_reference', index);
  }

  // policy_definitions - computed: true, optional: false, required: false
  public get policyDefinitions() {
    return this.getStringAttribute('policy_definitions');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPolicySetDefinitionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermPolicySetDefinitionTimeouts ) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      management_group_name: cdktf.stringToTerraform(this._managementGroupName),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataAzurermPolicySetDefinitionTimeoutsToTerraform(this._timeouts),
    };
  }
}
