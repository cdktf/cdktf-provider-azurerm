// https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_workspace_application_group_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualDesktopWorkspaceApplicationGroupAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_workspace_application_group_association.html#application_group_id VirtualDesktopWorkspaceApplicationGroupAssociation#application_group_id}
  */
  readonly applicationGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_workspace_application_group_association.html#workspace_id VirtualDesktopWorkspaceApplicationGroupAssociation#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_workspace_application_group_association.html#timeouts VirtualDesktopWorkspaceApplicationGroupAssociation#timeouts}
  */
  readonly timeouts?: VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts;
}
export interface VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_workspace_application_group_association.html#create VirtualDesktopWorkspaceApplicationGroupAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_workspace_application_group_association.html#delete VirtualDesktopWorkspaceApplicationGroupAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_workspace_application_group_association.html#read VirtualDesktopWorkspaceApplicationGroupAssociation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_workspace_application_group_association.html#update VirtualDesktopWorkspaceApplicationGroupAssociation#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_workspace_application_group_association.html azurerm_virtual_desktop_workspace_application_group_association}
*/
export class VirtualDesktopWorkspaceApplicationGroupAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_desktop_workspace_application_group_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_workspace_application_group_association.html azurerm_virtual_desktop_workspace_application_group_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualDesktopWorkspaceApplicationGroupAssociationConfig
  */
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
