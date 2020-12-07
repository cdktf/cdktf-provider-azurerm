// https://www.terraform.io/docs/providers/azurerm/r/policy_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyAssignmentConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly displayName?: string;
  readonly enforcementMode?: boolean;
  readonly location?: string;
  readonly metadata?: string;
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

function policyAssignmentIdentityToTerraform(struct?: PolicyAssignmentIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface PolicyAssignmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function policyAssignmentTimeoutsToTerraform(struct?: PolicyAssignmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class PolicyAssignment extends cdktf.TerraformResource {

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
    this._enforcementMode = config.enforcementMode;
    this._location = config.location;
    this._metadata = config.metadata;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // enforcement_mode - computed: false, optional: true, required: false
  private _enforcementMode?: boolean;
  public get enforcementMode() {
    return this.getBooleanAttribute('enforcement_mode');
  }
  public set enforcementMode(value: boolean ) {
    this._enforcementMode = value;
  }
  public resetEnforcementMode() {
    this._enforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string ) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // not_scopes - computed: false, optional: true, required: false
  private _notScopes?: string[];
  public get notScopes() {
    return this.getListAttribute('not_scopes');
  }
  public set notScopes(value: string[] ) {
    this._notScopes = value;
  }
  public resetNotScopes() {
    this._notScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notScopesInput() {
    return this._notScopes
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

  // policy_definition_id - computed: false, optional: false, required: true
  private _policyDefinitionId: string;
  public get policyDefinitionId() {
    return this.getStringAttribute('policy_definition_id');
  }
  public set policyDefinitionId(value: string) {
    this._policyDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionIdInput() {
    return this._policyDefinitionId
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: PolicyAssignmentIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: PolicyAssignmentIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PolicyAssignmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PolicyAssignmentTimeouts ) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      enforcement_mode: cdktf.booleanToTerraform(this._enforcementMode),
      location: cdktf.stringToTerraform(this._location),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      not_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._notScopes),
      parameters: cdktf.stringToTerraform(this._parameters),
      policy_definition_id: cdktf.stringToTerraform(this._policyDefinitionId),
      scope: cdktf.stringToTerraform(this._scope),
      identity: cdktf.listMapper(policyAssignmentIdentityToTerraform)(this._identity),
      timeouts: policyAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
