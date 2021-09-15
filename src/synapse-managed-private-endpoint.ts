// https://www.terraform.io/docs/providers/azurerm/r/synapse_managed_private_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseManagedPrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_managed_private_endpoint.html#name SynapseManagedPrivateEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_managed_private_endpoint.html#subresource_name SynapseManagedPrivateEndpoint#subresource_name}
  */
  readonly subresourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_managed_private_endpoint.html#synapse_workspace_id SynapseManagedPrivateEndpoint#synapse_workspace_id}
  */
  readonly synapseWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_managed_private_endpoint.html#target_resource_id SynapseManagedPrivateEndpoint#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_managed_private_endpoint.html#timeouts SynapseManagedPrivateEndpoint#timeouts}
  */
  readonly timeouts?: SynapseManagedPrivateEndpointTimeouts;
}
export interface SynapseManagedPrivateEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_managed_private_endpoint.html#create SynapseManagedPrivateEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_managed_private_endpoint.html#delete SynapseManagedPrivateEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_managed_private_endpoint.html#read SynapseManagedPrivateEndpoint#read}
  */
  readonly read?: string;
}

function synapseManagedPrivateEndpointTimeoutsToTerraform(struct?: SynapseManagedPrivateEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_managed_private_endpoint.html azurerm_synapse_managed_private_endpoint}
*/
export class SynapseManagedPrivateEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_synapse_managed_private_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_managed_private_endpoint.html azurerm_synapse_managed_private_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseManagedPrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseManagedPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_managed_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._subresourceName = config.subresourceName;
    this._synapseWorkspaceId = config.synapseWorkspaceId;
    this._targetResourceId = config.targetResourceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // subresource_name - computed: false, optional: false, required: true
  private _subresourceName: string;
  public get subresourceName() {
    return this.getStringAttribute('subresource_name');
  }
  public set subresourceName(value: string) {
    this._subresourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subresourceNameInput() {
    return this._subresourceName
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

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId: string;
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SynapseManagedPrivateEndpointTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SynapseManagedPrivateEndpointTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      subresource_name: cdktf.stringToTerraform(this._subresourceName),
      synapse_workspace_id: cdktf.stringToTerraform(this._synapseWorkspaceId),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      timeouts: synapseManagedPrivateEndpointTimeoutsToTerraform(this._timeouts),
    };
  }
}
