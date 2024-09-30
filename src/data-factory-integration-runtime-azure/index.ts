// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryIntegrationRuntimeAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#cleanup_enabled DataFactoryIntegrationRuntimeAzure#cleanup_enabled}
  */
  readonly cleanupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#compute_type DataFactoryIntegrationRuntimeAzure#compute_type}
  */
  readonly computeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#core_count DataFactoryIntegrationRuntimeAzure#core_count}
  */
  readonly coreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#data_factory_id DataFactoryIntegrationRuntimeAzure#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#description DataFactoryIntegrationRuntimeAzure#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#id DataFactoryIntegrationRuntimeAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#location DataFactoryIntegrationRuntimeAzure#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#name DataFactoryIntegrationRuntimeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#time_to_live_min DataFactoryIntegrationRuntimeAzure#time_to_live_min}
  */
  readonly timeToLiveMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#virtual_network_enabled DataFactoryIntegrationRuntimeAzure#virtual_network_enabled}
  */
  readonly virtualNetworkEnabled?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#timeouts DataFactoryIntegrationRuntimeAzure#timeouts}
  */
  readonly timeouts?: DataFactoryIntegrationRuntimeAzureTimeouts;
}
export interface DataFactoryIntegrationRuntimeAzureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#create DataFactoryIntegrationRuntimeAzure#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#delete DataFactoryIntegrationRuntimeAzure#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#read DataFactoryIntegrationRuntimeAzure#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#update DataFactoryIntegrationRuntimeAzure#update}
  */
  readonly update?: string;
}

export function dataFactoryIntegrationRuntimeAzureTimeoutsToTerraform(struct?: DataFactoryIntegrationRuntimeAzureTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function dataFactoryIntegrationRuntimeAzureTimeoutsToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure azurerm_data_factory_integration_runtime_azure}
*/
export class DataFactoryIntegrationRuntimeAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_factory_integration_runtime_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFactoryIntegrationRuntimeAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFactoryIntegrationRuntimeAzure to import
  * @param importFromId The id of the existing DataFactoryIntegrationRuntimeAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFactoryIntegrationRuntimeAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_data_factory_integration_runtime_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure azurerm_data_factory_integration_runtime_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryIntegrationRuntimeAzureConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryIntegrationRuntimeAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_integration_runtime_azure',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cleanupEnabled = config.cleanupEnabled;
    this._computeType = config.computeType;
    this._coreCount = config.coreCount;
    this._dataFactoryId = config.dataFactoryId;
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._timeToLiveMin = config.timeToLiveMin;
    this._virtualNetworkEnabled = config.virtualNetworkEnabled;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cleanup_enabled - computed: false, optional: true, required: false
  private _cleanupEnabled?: boolean | cdktf.IResolvable; 
  public get cleanupEnabled() {
    return this.getBooleanAttribute('cleanup_enabled');
  }
  public set cleanupEnabled(value: boolean | cdktf.IResolvable) {
    this._cleanupEnabled = value;
  }
  public resetCleanupEnabled() {
    this._cleanupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupEnabledInput() {
    return this._cleanupEnabled;
  }

  // compute_type - computed: false, optional: true, required: false
  private _computeType?: string; 
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }
  public set computeType(value: string) {
    this._computeType = value;
  }
  public resetComputeType() {
    this._computeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeTypeInput() {
    return this._computeType;
  }

  // core_count - computed: false, optional: true, required: false
  private _coreCount?: number; 
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }
  public set coreCount(value: number) {
    this._coreCount = value;
  }
  public resetCoreCount() {
    this._coreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreCountInput() {
    return this._coreCount;
  }

  // data_factory_id - computed: false, optional: false, required: true
  private _dataFactoryId?: string; 
  public get dataFactoryId() {
    return this.getStringAttribute('data_factory_id');
  }
  public set dataFactoryId(value: string) {
    this._dataFactoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryIdInput() {
    return this._dataFactoryId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._location;
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
    return this._name;
  }

  // time_to_live_min - computed: false, optional: true, required: false
  private _timeToLiveMin?: number; 
  public get timeToLiveMin() {
    return this.getNumberAttribute('time_to_live_min');
  }
  public set timeToLiveMin(value: number) {
    this._timeToLiveMin = value;
  }
  public resetTimeToLiveMin() {
    this._timeToLiveMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveMinInput() {
    return this._timeToLiveMin;
  }

  // virtual_network_enabled - computed: false, optional: true, required: false
  private _virtualNetworkEnabled?: boolean | cdktf.IResolvable; 
  public get virtualNetworkEnabled() {
    return this.getBooleanAttribute('virtual_network_enabled');
  }
  public set virtualNetworkEnabled(value: boolean | cdktf.IResolvable) {
    this._virtualNetworkEnabled = value;
  }
  public resetVirtualNetworkEnabled() {
    this._virtualNetworkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkEnabledInput() {
    return this._virtualNetworkEnabled;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFactoryIntegrationRuntimeAzureTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cleanup_enabled: cdktf.booleanToTerraform(this._cleanupEnabled),
      compute_type: cdktf.stringToTerraform(this._computeType),
      core_count: cdktf.numberToTerraform(this._coreCount),
      data_factory_id: cdktf.stringToTerraform(this._dataFactoryId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      time_to_live_min: cdktf.numberToTerraform(this._timeToLiveMin),
      virtual_network_enabled: cdktf.booleanToTerraform(this._virtualNetworkEnabled),
      timeouts: dataFactoryIntegrationRuntimeAzureTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cleanup_enabled: {
        value: cdktf.booleanToHclTerraform(this._cleanupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compute_type: {
        value: cdktf.stringToHclTerraform(this._computeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_count: {
        value: cdktf.numberToHclTerraform(this._coreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_factory_id: {
        value: cdktf.stringToHclTerraform(this._dataFactoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_to_live_min: {
        value: cdktf.numberToHclTerraform(this._timeToLiveMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_network_enabled: {
        value: cdktf.booleanToHclTerraform(this._virtualNetworkEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: dataFactoryIntegrationRuntimeAzureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFactoryIntegrationRuntimeAzureTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
