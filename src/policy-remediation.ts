// https://www.terraform.io/docs/providers/azurerm/r/policy_remediation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRemediationConfig extends cdktf.TerraformMetaArguments {
  readonly locationFilters?: string[];
  readonly name: string;
  readonly policyAssignmentId: string;
  readonly policyDefinitionReferenceId?: string;
  readonly resourceDiscoveryMode?: string;
  readonly scope: string;
  /** timeouts block */
  readonly timeouts?: PolicyRemediationTimeouts;
}
export interface PolicyRemediationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function policyRemediationTimeoutsToTerraform(struct?: PolicyRemediationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class PolicyRemediation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PolicyRemediationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_policy_remediation',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._locationFilters = config.locationFilters;
    this._name = config.name;
    this._policyAssignmentId = config.policyAssignmentId;
    this._policyDefinitionReferenceId = config.policyDefinitionReferenceId;
    this._resourceDiscoveryMode = config.resourceDiscoveryMode;
    this._scope = config.scope;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_filters - computed: false, optional: true, required: false
  private _locationFilters?: string[];
  public get locationFilters() {
    return this.getListAttribute('location_filters');
  }
  public set locationFilters(value: string[] ) {
    this._locationFilters = value;
  }
  public resetLocationFilters() {
    this._locationFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationFiltersInput() {
    return this._locationFilters
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

  // policy_assignment_id - computed: false, optional: false, required: true
  private _policyAssignmentId: string;
  public get policyAssignmentId() {
    return this.getStringAttribute('policy_assignment_id');
  }
  public set policyAssignmentId(value: string) {
    this._policyAssignmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyAssignmentIdInput() {
    return this._policyAssignmentId
  }

  // policy_definition_reference_id - computed: false, optional: true, required: false
  private _policyDefinitionReferenceId?: string;
  public get policyDefinitionReferenceId() {
    return this.getStringAttribute('policy_definition_reference_id');
  }
  public set policyDefinitionReferenceId(value: string ) {
    this._policyDefinitionReferenceId = value;
  }
  public resetPolicyDefinitionReferenceId() {
    this._policyDefinitionReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionReferenceIdInput() {
    return this._policyDefinitionReferenceId
  }

  // resource_discovery_mode - computed: false, optional: true, required: false
  private _resourceDiscoveryMode?: string;
  public get resourceDiscoveryMode() {
    return this.getStringAttribute('resource_discovery_mode');
  }
  public set resourceDiscoveryMode(value: string ) {
    this._resourceDiscoveryMode = value;
  }
  public resetResourceDiscoveryMode() {
    this._resourceDiscoveryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDiscoveryModeInput() {
    return this._resourceDiscoveryMode
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PolicyRemediationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PolicyRemediationTimeouts ) {
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
      location_filters: cdktf.listMapper(cdktf.stringToTerraform)(this._locationFilters),
      name: cdktf.stringToTerraform(this._name),
      policy_assignment_id: cdktf.stringToTerraform(this._policyAssignmentId),
      policy_definition_reference_id: cdktf.stringToTerraform(this._policyDefinitionReferenceId),
      resource_discovery_mode: cdktf.stringToTerraform(this._resourceDiscoveryMode),
      scope: cdktf.stringToTerraform(this._scope),
      timeouts: policyRemediationTimeoutsToTerraform(this._timeouts),
    };
  }
}
