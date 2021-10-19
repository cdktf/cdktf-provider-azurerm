// https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseIntegrationRuntimeAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html#compute_type SynapseIntegrationRuntimeAzure#compute_type}
  */
  readonly computeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html#core_count SynapseIntegrationRuntimeAzure#core_count}
  */
  readonly coreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html#description SynapseIntegrationRuntimeAzure#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html#location SynapseIntegrationRuntimeAzure#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html#name SynapseIntegrationRuntimeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html#synapse_workspace_id SynapseIntegrationRuntimeAzure#synapse_workspace_id}
  */
  readonly synapseWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html#time_to_live_min SynapseIntegrationRuntimeAzure#time_to_live_min}
  */
  readonly timeToLiveMin?: number;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html#timeouts SynapseIntegrationRuntimeAzure#timeouts}
  */
  readonly timeouts?: SynapseIntegrationRuntimeAzureTimeouts;
}
export interface SynapseIntegrationRuntimeAzureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html#create SynapseIntegrationRuntimeAzure#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html#delete SynapseIntegrationRuntimeAzure#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html#read SynapseIntegrationRuntimeAzure#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html#update SynapseIntegrationRuntimeAzure#update}
  */
  readonly update?: string;
}

function synapseIntegrationRuntimeAzureTimeoutsToTerraform(struct?: SynapseIntegrationRuntimeAzureTimeoutsOutputReference | SynapseIntegrationRuntimeAzureTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class SynapseIntegrationRuntimeAzureTimeoutsOutputReference extends cdktf.ComplexObject {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html azurerm_synapse_integration_runtime_azure}
*/
export class SynapseIntegrationRuntimeAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_synapse_integration_runtime_azure";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_integration_runtime_azure.html azurerm_synapse_integration_runtime_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseIntegrationRuntimeAzureConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseIntegrationRuntimeAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_integration_runtime_azure',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._computeType = config.computeType;
    this._coreCount = config.coreCount;
    this._description = config.description;
    this._location = config.location;
    this._name = config.name;
    this._synapseWorkspaceId = config.synapseWorkspaceId;
    this._timeToLiveMin = config.timeToLiveMin;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_type - computed: false, optional: true, required: false
  private _computeType?: string | undefined; 
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }
  public set computeType(value: string | undefined) {
    this._computeType = value;
  }
  public resetComputeType() {
    this._computeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeTypeInput() {
    return this._computeType
  }

  // core_count - computed: false, optional: true, required: false
  private _coreCount?: number | undefined; 
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }
  public set coreCount(value: number | undefined) {
    this._coreCount = value;
  }
  public resetCoreCount() {
    this._coreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreCountInput() {
    return this._coreCount
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // time_to_live_min - computed: false, optional: true, required: false
  private _timeToLiveMin?: number | undefined; 
  public get timeToLiveMin() {
    return this.getNumberAttribute('time_to_live_min');
  }
  public set timeToLiveMin(value: number | undefined) {
    this._timeToLiveMin = value;
  }
  public resetTimeToLiveMin() {
    this._timeToLiveMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveMinInput() {
    return this._timeToLiveMin
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SynapseIntegrationRuntimeAzureTimeouts | undefined; 
  private __timeoutsOutput = new SynapseIntegrationRuntimeAzureTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SynapseIntegrationRuntimeAzureTimeouts | undefined) {
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
      compute_type: cdktf.stringToTerraform(this._computeType),
      core_count: cdktf.numberToTerraform(this._coreCount),
      description: cdktf.stringToTerraform(this._description),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      synapse_workspace_id: cdktf.stringToTerraform(this._synapseWorkspaceId),
      time_to_live_min: cdktf.numberToTerraform(this._timeToLiveMin),
      timeouts: synapseIntegrationRuntimeAzureTimeoutsToTerraform(this._timeouts),
    };
  }
}
