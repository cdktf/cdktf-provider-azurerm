// https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_system_shapes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermOracleDbSystemShapesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_system_shapes#id DataAzurermOracleDbSystemShapes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_system_shapes#location DataAzurermOracleDbSystemShapes#location}
  */
  readonly location: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_system_shapes#timeouts DataAzurermOracleDbSystemShapes#timeouts}
  */
  readonly timeouts?: DataAzurermOracleDbSystemShapesTimeouts;
}
export interface DataAzurermOracleDbSystemShapesDbSystemShapes {
}

export function dataAzurermOracleDbSystemShapesDbSystemShapesToTerraform(struct?: DataAzurermOracleDbSystemShapesDbSystemShapes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermOracleDbSystemShapesDbSystemShapesToHclTerraform(struct?: DataAzurermOracleDbSystemShapesDbSystemShapes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermOracleDbSystemShapesDbSystemShapes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermOracleDbSystemShapesDbSystemShapes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_core_count - computed: true, optional: false, required: false
  public get availableCoreCount() {
    return this.getNumberAttribute('available_core_count');
  }

  // available_core_count_per_node - computed: true, optional: false, required: false
  public get availableCoreCountPerNode() {
    return this.getNumberAttribute('available_core_count_per_node');
  }

  // available_data_storage_in_tbs - computed: true, optional: false, required: false
  public get availableDataStorageInTbs() {
    return this.getNumberAttribute('available_data_storage_in_tbs');
  }

  // available_data_storage_per_server_in_tbs - computed: true, optional: false, required: false
  public get availableDataStoragePerServerInTbs() {
    return this.getNumberAttribute('available_data_storage_per_server_in_tbs');
  }

  // available_db_node_per_node_in_gbs - computed: true, optional: false, required: false
  public get availableDbNodePerNodeInGbs() {
    return this.getNumberAttribute('available_db_node_per_node_in_gbs');
  }

  // available_db_node_storage_in_gbs - computed: true, optional: false, required: false
  public get availableDbNodeStorageInGbs() {
    return this.getNumberAttribute('available_db_node_storage_in_gbs');
  }

  // available_memory_in_gbs - computed: true, optional: false, required: false
  public get availableMemoryInGbs() {
    return this.getNumberAttribute('available_memory_in_gbs');
  }

  // available_memory_per_node_in_gbs - computed: true, optional: false, required: false
  public get availableMemoryPerNodeInGbs() {
    return this.getNumberAttribute('available_memory_per_node_in_gbs');
  }

  // core_count_increment - computed: true, optional: false, required: false
  public get coreCountIncrement() {
    return this.getNumberAttribute('core_count_increment');
  }

  // maximum_node_count - computed: true, optional: false, required: false
  public get maximumNodeCount() {
    return this.getNumberAttribute('maximum_node_count');
  }

  // maximum_storage_count - computed: true, optional: false, required: false
  public get maximumStorageCount() {
    return this.getNumberAttribute('maximum_storage_count');
  }

  // minimum_core_count - computed: true, optional: false, required: false
  public get minimumCoreCount() {
    return this.getNumberAttribute('minimum_core_count');
  }

  // minimum_core_count_per_node - computed: true, optional: false, required: false
  public get minimumCoreCountPerNode() {
    return this.getNumberAttribute('minimum_core_count_per_node');
  }

  // minimum_data_storage_in_tbs - computed: true, optional: false, required: false
  public get minimumDataStorageInTbs() {
    return this.getNumberAttribute('minimum_data_storage_in_tbs');
  }

  // minimum_db_node_storage_per_node_in_gbs - computed: true, optional: false, required: false
  public get minimumDbNodeStoragePerNodeInGbs() {
    return this.getNumberAttribute('minimum_db_node_storage_per_node_in_gbs');
  }

  // minimum_memory_per_node_in_gbs - computed: true, optional: false, required: false
  public get minimumMemoryPerNodeInGbs() {
    return this.getNumberAttribute('minimum_memory_per_node_in_gbs');
  }

  // minimum_node_count - computed: true, optional: false, required: false
  public get minimumNodeCount() {
    return this.getNumberAttribute('minimum_node_count');
  }

  // minimum_storage_count - computed: true, optional: false, required: false
  public get minimumStorageCount() {
    return this.getNumberAttribute('minimum_storage_count');
  }

  // runtime_minimum_core_count - computed: true, optional: false, required: false
  public get runtimeMinimumCoreCount() {
    return this.getNumberAttribute('runtime_minimum_core_count');
  }

  // shape_family - computed: true, optional: false, required: false
  public get shapeFamily() {
    return this.getStringAttribute('shape_family');
  }
}

export class DataAzurermOracleDbSystemShapesDbSystemShapesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference {
    return new DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermOracleDbSystemShapesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_system_shapes#read DataAzurermOracleDbSystemShapes#read}
  */
  readonly read?: string;
}

export function dataAzurermOracleDbSystemShapesTimeoutsToTerraform(struct?: DataAzurermOracleDbSystemShapesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermOracleDbSystemShapesTimeoutsToHclTerraform(struct?: DataAzurermOracleDbSystemShapesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermOracleDbSystemShapesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermOracleDbSystemShapesTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermOracleDbSystemShapesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_system_shapes azurerm_oracle_db_system_shapes}
*/
export class DataAzurermOracleDbSystemShapes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_oracle_db_system_shapes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermOracleDbSystemShapes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermOracleDbSystemShapes to import
  * @param importFromId The id of the existing DataAzurermOracleDbSystemShapes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_system_shapes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermOracleDbSystemShapes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_oracle_db_system_shapes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_db_system_shapes azurerm_oracle_db_system_shapes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermOracleDbSystemShapesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermOracleDbSystemShapesConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_oracle_db_system_shapes',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.19.0',
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
    this._id = config.id;
    this._location = config.location;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_system_shapes - computed: true, optional: false, required: false
  private _dbSystemShapes = new DataAzurermOracleDbSystemShapesDbSystemShapesList(this, "db_system_shapes", false);
  public get dbSystemShapes() {
    return this._dbSystemShapes;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermOracleDbSystemShapesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermOracleDbSystemShapesTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      timeouts: dataAzurermOracleDbSystemShapesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      timeouts: {
        value: dataAzurermOracleDbSystemShapesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermOracleDbSystemShapesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
