// https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryIntegrationRuntimeAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#cleanup_enabled DataFactoryIntegrationRuntimeAzure#cleanup_enabled}
  */
  readonly cleanupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#compute_type DataFactoryIntegrationRuntimeAzure#compute_type}
  */
  readonly computeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#core_count DataFactoryIntegrationRuntimeAzure#core_count}
  */
  readonly coreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#data_factory_name DataFactoryIntegrationRuntimeAzure#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#description DataFactoryIntegrationRuntimeAzure#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#location DataFactoryIntegrationRuntimeAzure#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#name DataFactoryIntegrationRuntimeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#resource_group_name DataFactoryIntegrationRuntimeAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#time_to_live_min DataFactoryIntegrationRuntimeAzure#time_to_live_min}
  */
  readonly timeToLiveMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#virtual_network_enabled DataFactoryIntegrationRuntimeAzure#virtual_network_enabled}
  */
  readonly virtualNetworkEnabled?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#timeouts DataFactoryIntegrationRuntimeAzure#timeouts}
  */
  readonly timeouts?: DataFactoryIntegrationRuntimeAzureTimeouts;
}
export interface DataFactoryIntegrationRuntimeAzureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#create DataFactoryIntegrationRuntimeAzure#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#delete DataFactoryIntegrationRuntimeAzure#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#read DataFactoryIntegrationRuntimeAzure#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html#update DataFactoryIntegrationRuntimeAzure#update}
  */
  readonly update?: string;
}

function dataFactoryIntegrationRuntimeAzureTimeoutsToTerraform(struct?: DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference | DataFactoryIntegrationRuntimeAzureTimeouts): any {
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

export class DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html azurerm_data_factory_integration_runtime_azure}
*/
export class DataFactoryIntegrationRuntimeAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_integration_runtime_azure";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure.html azurerm_data_factory_integration_runtime_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryIntegrationRuntimeAzureConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryIntegrationRuntimeAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_integration_runtime_azure',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cleanupEnabled = config.cleanupEnabled;
    this._computeType = config.computeType;
    this._coreCount = config.coreCount;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeToLiveMin = config.timeToLiveMin;
    this._virtualNetworkEnabled = config.virtualNetworkEnabled;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cleanup_enabled - computed: true, optional: true, required: false
  private _cleanupEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get cleanupEnabled() {
    return this.getBooleanAttribute('cleanup_enabled') as any;
  }
  public set cleanupEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._cleanupEnabled = value;
  }
  public resetCleanupEnabled() {
    this._cleanupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupEnabledInput() {
    return this._cleanupEnabled
  }

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

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName?: string; 
  public get dataFactoryName() {
    return this.getStringAttribute('data_factory_name');
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryNameInput() {
    return this._dataFactoryName
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
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

  // virtual_network_enabled - computed: false, optional: true, required: false
  private _virtualNetworkEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get virtualNetworkEnabled() {
    return this.getBooleanAttribute('virtual_network_enabled') as any;
  }
  public set virtualNetworkEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._virtualNetworkEnabled = value;
  }
  public resetVirtualNetworkEnabled() {
    this._virtualNetworkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkEnabledInput() {
    return this._virtualNetworkEnabled
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryIntegrationRuntimeAzureTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryIntegrationRuntimeAzureTimeouts | undefined) {
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
      cleanup_enabled: cdktf.booleanToTerraform(this._cleanupEnabled),
      compute_type: cdktf.stringToTerraform(this._computeType),
      core_count: cdktf.numberToTerraform(this._coreCount),
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      time_to_live_min: cdktf.numberToTerraform(this._timeToLiveMin),
      virtual_network_enabled: cdktf.booleanToTerraform(this._virtualNetworkEnabled),
      timeouts: dataFactoryIntegrationRuntimeAzureTimeoutsToTerraform(this._timeouts),
    };
  }
}
