// https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_self_hosted.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseIntegrationRuntimeSelfHostedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_self_hosted.html#description SynapseIntegrationRuntimeSelfHosted#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_self_hosted.html#name SynapseIntegrationRuntimeSelfHosted#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_self_hosted.html#synapse_workspace_id SynapseIntegrationRuntimeSelfHosted#synapse_workspace_id}
  */
  readonly synapseWorkspaceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_self_hosted.html#timeouts SynapseIntegrationRuntimeSelfHosted#timeouts}
  */
  readonly timeouts?: SynapseIntegrationRuntimeSelfHostedTimeouts;
}
export interface SynapseIntegrationRuntimeSelfHostedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_self_hosted.html#create SynapseIntegrationRuntimeSelfHosted#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_self_hosted.html#delete SynapseIntegrationRuntimeSelfHosted#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_self_hosted.html#read SynapseIntegrationRuntimeSelfHosted#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_self_hosted.html#update SynapseIntegrationRuntimeSelfHosted#update}
  */
  readonly update?: string;
}

function synapseIntegrationRuntimeSelfHostedTimeoutsToTerraform(struct?: SynapseIntegrationRuntimeSelfHostedTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_self_hosted.html azurerm_synapse_integration_runtime_self_hosted}
*/
export class SynapseIntegrationRuntimeSelfHosted extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_synapse_integration_runtime_self_hosted";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_self_hosted.html azurerm_synapse_integration_runtime_self_hosted} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseIntegrationRuntimeSelfHostedConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseIntegrationRuntimeSelfHostedConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_integration_runtime_self_hosted',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._synapseWorkspaceId = config.synapseWorkspaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_key_primary - computed: true, optional: false, required: false
  public get authorizationKeyPrimary() {
    return this.getStringAttribute('authorization_key_primary');
  }

  // authorization_key_secondary - computed: true, optional: false, required: false
  public get authorizationKeySecondary() {
    return this.getStringAttribute('authorization_key_secondary');
  }

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
  private _timeouts?: SynapseIntegrationRuntimeSelfHostedTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SynapseIntegrationRuntimeSelfHostedTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      synapse_workspace_id: cdktf.stringToTerraform(this._synapseWorkspaceId),
      timeouts: synapseIntegrationRuntimeSelfHostedTimeoutsToTerraform(this._timeouts),
    };
  }
}
