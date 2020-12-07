// https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_workspace_application_group_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualDesktopWorkspaceApplicationGroupAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly applicationGroupId: string;
  readonly workspaceId: string;
  /** timeouts block */
  readonly timeouts?: VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts;
}
export interface VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function virtualDesktopWorkspaceApplicationGroupAssociationTimeoutsToTerraform(struct?: VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class VirtualDesktopWorkspaceApplicationGroupAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualDesktopWorkspaceApplicationGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_desktop_workspace_application_group_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationGroupId = config.applicationGroupId;
    this._workspaceId = config.workspaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_group_id - computed: false, optional: false, required: true
  private _applicationGroupId: string;
  public get applicationGroupId() {
    return this.getStringAttribute('application_group_id');
  }
  public set applicationGroupId(value: string) {
    this._applicationGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGroupIdInput() {
    return this._applicationGroupId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId: string;
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts ) {
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
      application_group_id: cdktf.stringToTerraform(this._applicationGroupId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      timeouts: virtualDesktopWorkspaceApplicationGroupAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
