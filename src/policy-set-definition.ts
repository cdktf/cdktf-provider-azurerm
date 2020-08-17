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
  readonly metadata?: string;
  readonly name: string;
  readonly parameters?: string;
  readonly policyDefinitions?: string;
  readonly policyType: string;
  /** timeouts block */
  readonly timeouts?: PolicySetDefinitionTimeouts;
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
    this._metadata = config.metadata;
    this._name = config.name;
    this._parameters = config.parameters;
    this._policyDefinitions = config.policyDefinitions;
    this._policyType = config.policyType;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // management_group_id - computed: false, optional: true, required: false
  private _managementGroupId?: string;
  public get managementGroupId() {
    return this._managementGroupId;
  }
  public set managementGroupId(value: string | undefined) {
    this._managementGroupId = value;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string;
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: string | undefined) {
    this._metadata = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string;
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: string | undefined) {
    this._parameters = value;
  }

  // policy_definitions - computed: false, optional: true, required: false
  private _policyDefinitions?: string;
  public get policyDefinitions() {
    return this._policyDefinitions;
  }
  public set policyDefinitions(value: string | undefined) {
    this._policyDefinitions = value;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType: string;
  public get policyType() {
    return this._policyType;
  }
  public set policyType(value: string) {
    this._policyType = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PolicySetDefinitionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PolicySetDefinitionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      display_name: this._displayName,
      management_group_id: this._managementGroupId,
      metadata: this._metadata,
      name: this._name,
      parameters: this._parameters,
      policy_definitions: this._policyDefinitions,
      policy_type: this._policyType,
      timeouts: this._timeouts,
    };
  }
}
