// https://www.terraform.io/docs/providers/azurerm/r/security_center_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SecurityCenterWorkspaceConfig extends TerraformMetaArguments {
  readonly scope: string;
  readonly workspaceId: string;
  /** timeouts block */
  readonly timeouts?: SecurityCenterWorkspaceTimeouts;
}
export interface SecurityCenterWorkspaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SecurityCenterWorkspace extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecurityCenterWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_security_center_workspace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._scope = config.scope;
    this._workspaceId = config.workspaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this._scope;
  }
  public set scope(value: string) {
    this._scope = value;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId: string;
  public get workspaceId() {
    return this._workspaceId;
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityCenterWorkspaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SecurityCenterWorkspaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      scope: this._scope,
      workspace_id: this._workspaceId,
      timeouts: this._timeouts,
    };
  }
}
