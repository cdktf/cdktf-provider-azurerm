// https://www.terraform.io/docs/providers/azurerm/r/policy_set_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PolicySetDefinitionConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly displayName: string;
  readonly managementGroupId?: string;
  readonly managementGroupName?: string;
  readonly metadata?: string;
  readonly name: string;
  readonly parameters?: string;
  readonly policyDefinitions?: string;
  readonly policyType: string;
  /** policy_definition_group block */
  readonly policyDefinitionGroup?: PolicySetDefinitionPolicyDefinitionGroup[];
  /** policy_definition_reference block */
  readonly policyDefinitionReference?: PolicySetDefinitionPolicyDefinitionReference[];
  /** timeouts block */
  readonly timeouts?: PolicySetDefinitionTimeouts;
}
export interface PolicySetDefinitionPolicyDefinitionGroup {
  readonly additionalMetadataResourceId?: string;
  readonly category?: string;
  readonly description?: string;
  readonly displayName?: string;
  readonly name: string;
}
export interface PolicySetDefinitionPolicyDefinitionReference {
  readonly parameterValues?: string;
  readonly parameters?: { [key: string]: string };
  readonly policyDefinitionId: string;
  readonly policyGroupNames?: string[];
  readonly referenceId?: string;
}
export interface PolicySetDefinitionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class PolicySetDefinition extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
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
    return this._managementGroupId
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
    return this._managementGroupName
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
    return this._metadata
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string;
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
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
    return this._policyDefinitions
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType: string;
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType
  }

  // policy_definition_group - computed: false, optional: true, required: false
  private _policyDefinitionGroup?: PolicySetDefinitionPolicyDefinitionGroup[];
  public get policyDefinitionGroup() {
    return this.interpolationForAttribute('policy_definition_group') as any;
  }
  public set policyDefinitionGroup(value: PolicySetDefinitionPolicyDefinitionGroup[] ) {
    this._policyDefinitionGroup = value;
  }
  public resetPolicyDefinitionGroup() {
    this._policyDefinitionGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionGroupInput() {
    return this._policyDefinitionGroup
  }

  // policy_definition_reference - computed: false, optional: true, required: false
  private _policyDefinitionReference?: PolicySetDefinitionPolicyDefinitionReference[];
  public get policyDefinitionReference() {
    return this.interpolationForAttribute('policy_definition_reference') as any;
  }
  public set policyDefinitionReference(value: PolicySetDefinitionPolicyDefinitionReference[] ) {
    this._policyDefinitionReference = value;
  }
  public resetPolicyDefinitionReference() {
    this._policyDefinitionReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionReferenceInput() {
    return this._policyDefinitionReference
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PolicySetDefinitionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PolicySetDefinitionTimeouts ) {
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
      description: this._description,
      display_name: this._displayName,
      management_group_id: this._managementGroupId,
      management_group_name: this._managementGroupName,
      metadata: this._metadata,
      name: this._name,
      parameters: this._parameters,
      policy_definitions: this._policyDefinitions,
      policy_type: this._policyType,
      policy_definition_group: this._policyDefinitionGroup,
      policy_definition_reference: this._policyDefinitionReference,
      timeouts: this._timeouts,
    };
  }
}
