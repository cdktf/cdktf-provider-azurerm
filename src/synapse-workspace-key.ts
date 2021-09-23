// https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseWorkspaceKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#active SynapseWorkspaceKey#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#cusomter_managed_key_name SynapseWorkspaceKey#cusomter_managed_key_name}
  */
  readonly cusomterManagedKeyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#customer_managed_key_versionless_id SynapseWorkspaceKey#customer_managed_key_versionless_id}
  */
  readonly customerManagedKeyVersionlessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#synapse_workspace_id SynapseWorkspaceKey#synapse_workspace_id}
  */
  readonly synapseWorkspaceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#timeouts SynapseWorkspaceKey#timeouts}
  */
  readonly timeouts?: SynapseWorkspaceKeyTimeouts;
}
export interface SynapseWorkspaceKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#create SynapseWorkspaceKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#delete SynapseWorkspaceKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#read SynapseWorkspaceKey#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#update SynapseWorkspaceKey#update}
  */
  readonly update?: string;
}

function synapseWorkspaceKeyTimeoutsToTerraform(struct?: SynapseWorkspaceKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html azurerm_synapse_workspace_key}
*/
export class SynapseWorkspaceKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_synapse_workspace_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html azurerm_synapse_workspace_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseWorkspaceKeyConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseWorkspaceKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_workspace_key',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._active = config.active;
    this._cusomterManagedKeyName = config.cusomterManagedKeyName;
    this._customerManagedKeyVersionlessId = config.customerManagedKeyVersionlessId;
    this._synapseWorkspaceId = config.synapseWorkspaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active: boolean | cdktf.IResolvable;
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active
  }

  // cusomter_managed_key_name - computed: false, optional: false, required: true
  private _cusomterManagedKeyName: string;
  public get cusomterManagedKeyName() {
    return this.getStringAttribute('cusomter_managed_key_name');
  }
  public set cusomterManagedKeyName(value: string) {
    this._cusomterManagedKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cusomterManagedKeyNameInput() {
    return this._cusomterManagedKeyName
  }

  // customer_managed_key_versionless_id - computed: false, optional: true, required: false
  private _customerManagedKeyVersionlessId?: string;
  public get customerManagedKeyVersionlessId() {
    return this.getStringAttribute('customer_managed_key_versionless_id');
  }
  public set customerManagedKeyVersionlessId(value: string ) {
    this._customerManagedKeyVersionlessId = value;
  }
  public resetCustomerManagedKeyVersionlessId() {
    this._customerManagedKeyVersionlessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyVersionlessIdInput() {
    return this._customerManagedKeyVersionlessId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _timeouts?: SynapseWorkspaceKeyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SynapseWorkspaceKeyTimeouts ) {
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
      active: cdktf.booleanToTerraform(this._active),
      cusomter_managed_key_name: cdktf.stringToTerraform(this._cusomterManagedKeyName),
      customer_managed_key_versionless_id: cdktf.stringToTerraform(this._customerManagedKeyVersionlessId),
      synapse_workspace_id: cdktf.stringToTerraform(this._synapseWorkspaceId),
      timeouts: synapseWorkspaceKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}
