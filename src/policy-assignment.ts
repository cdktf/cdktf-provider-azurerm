// https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PolicyAssignmentConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly displayName?: string;
  readonly location?: string;
  readonly name: string;
  readonly notScopes?: string[];
  readonly parameters?: string;
  readonly policyDefinitionId: string;
  readonly scope: string;
  /** identity block */
  readonly identity?: PolicyAssignmentIdentity[];
  /** timeouts block */
  readonly timeouts?: PolicyAssignmentTimeouts;
}
export interface PolicyAssignmentIdentity {
  readonly type?: string;
}
export interface PolicyAssignmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class PolicyAssignment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PolicyAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_policy_assignment',
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
    this._location = config.location;
    this._name = config.name;
    this._notScopes = config.notScopes;
    this._parameters = config.parameters;
    this._policyDefinitionId = config.policyDefinitionId;
    this._scope = config.scope;
    this._identity = config.identity;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
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

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this._location;
  }
  public set location(value: string | undefined) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // not_scopes - computed: false, optional: true, required: false
  private _notScopes?: string[];
  public get notScopes() {
    return this._notScopes;
  }
  public set notScopes(value: string[] | undefined) {
    this._notScopes = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string;
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: string | undefined) {
    this._parameters = value;
  }

  // policy_definition_id - computed: false, optional: false, required: true
  private _policyDefinitionId: string;
  public get policyDefinitionId() {
    return this._policyDefinitionId;
  }
  public set policyDefinitionId(value: string) {
    this._policyDefinitionId = value;
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this._scope;
  }
  public set scope(value: string) {
    this._scope = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: PolicyAssignmentIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: PolicyAssignmentIdentity[] | undefined) {
    this._identity = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PolicyAssignmentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PolicyAssignmentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      display_name: this._displayName,
      location: this._location,
      name: this._name,
      not_scopes: this._notScopes,
      parameters: this._parameters,
      policy_definition_id: this._policyDefinitionId,
      scope: this._scope,
      identity: this._identity,
      timeouts: this._timeouts,
    };
  }
}
