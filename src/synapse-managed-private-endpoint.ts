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

function synapseManagedPrivateEndpointTimeoutsToTerraform(struct?: SynapseManagedPrivateEndpointTimeoutsOutputReference | SynapseManagedPrivateEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class SynapseManagedPrivateEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
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
  private _name?: string; 
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
  private _subresourceName?: string; 
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
  private _synapseWorkspaceId?: string; 
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
  private _targetResourceId?: string; 
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
  private _timeouts?: SynapseManagedPrivateEndpointTimeouts | undefined; 
  private __timeoutsOutput = new SynapseManagedPrivateEndpointTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SynapseManagedPrivateEndpointTimeouts | undefined) {
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
