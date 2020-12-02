// https://www.terraform.io/docs/providers/azurerm/r/synapse_role_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SynapseRoleAssignmentConfig extends TerraformMetaArguments {
  readonly principalId: string;
  readonly roleName: string;
  readonly synapseWorkspaceId: string;
  /** timeouts block */
  readonly timeouts?: SynapseRoleAssignmentTimeouts;
}
export interface SynapseRoleAssignmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

// Resource

export class SynapseRoleAssignment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SynapseRoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._principalId = config.principalId;
    this._roleName = config.roleName;
    this._synapseWorkspaceId = config.synapseWorkspaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId: string;
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName: string;
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName
  }

  // synapse_workspace_id - computed: false, optional: false, required: true
  private _synapseWorkspaceId: string;
  public get synapseWorkspaceId() {
    return this.getStringAttribute('synapse_workspace_id');
  }
  public set synapseWorkspaceId(value: string) {
    this._synapseWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get synapseWorkspaceIdInput() {
    return this._synapseWorkspaceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SynapseRoleAssignmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SynapseRoleAssignmentTimeouts ) {
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
      principal_id: this._principalId,
      role_name: this._roleName,
      synapse_workspace_id: this._synapseWorkspaceId,
      timeouts: this._timeouts,
    };
  }
}
