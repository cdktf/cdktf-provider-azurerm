// https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_db_nodes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermOracleDbNodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_db_nodes#cloud_vm_cluster_id DataAzurermOracleDbNodes#cloud_vm_cluster_id}
  */
  readonly cloudVmClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_db_nodes#id DataAzurermOracleDbNodes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_db_nodes#timeouts DataAzurermOracleDbNodes#timeouts}
  */
  readonly timeouts?: DataAzurermOracleDbNodesTimeouts;
}
export interface DataAzurermOracleDbNodesDbNodes {
}

export function dataAzurermOracleDbNodesDbNodesToTerraform(struct?: DataAzurermOracleDbNodesDbNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermOracleDbNodesDbNodesToHclTerraform(struct?: DataAzurermOracleDbNodesDbNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermOracleDbNodesDbNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermOracleDbNodesDbNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermOracleDbNodesDbNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_details - computed: true, optional: false, required: false
  public get additionalDetails() {
    return this.getStringAttribute('additional_details');
  }

  // backup_ip_id - computed: true, optional: false, required: false
  public get backupIpId() {
    return this.getStringAttribute('backup_ip_id');
  }

  // backup_vnic_2_id - computed: true, optional: false, required: false
  public get backupVnic2Id() {
    return this.getStringAttribute('backup_vnic_2_id');
  }

  // backup_vnic_id - computed: true, optional: false, required: false
  public get backupVnicId() {
    return this.getStringAttribute('backup_vnic_id');
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // db_node_storage_size_in_gbs - computed: true, optional: false, required: false
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }

  // db_server_id - computed: true, optional: false, required: false
  public get dbServerId() {
    return this.getStringAttribute('db_server_id');
  }

  // db_system_id - computed: true, optional: false, required: false
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // host_ip_id - computed: true, optional: false, required: false
  public get hostIpId() {
    return this.getStringAttribute('host_ip_id');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // maintenance_type - computed: true, optional: false, required: false
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }

  // memory_size_in_gbs - computed: true, optional: false, required: false
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // software_storage_size_in_gb - computed: true, optional: false, required: false
  public get softwareStorageSizeInGb() {
    return this.getNumberAttribute('software_storage_size_in_gb');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_maintenance_window_end - computed: true, optional: false, required: false
  public get timeMaintenanceWindowEnd() {
    return this.getStringAttribute('time_maintenance_window_end');
  }

  // time_maintenance_window_start - computed: true, optional: false, required: false
  public get timeMaintenanceWindowStart() {
    return this.getStringAttribute('time_maintenance_window_start');
  }

  // vnic_2_id - computed: true, optional: false, required: false
  public get vnic2Id() {
    return this.getStringAttribute('vnic_2_id');
  }

  // vnic_id - computed: true, optional: false, required: false
  public get vnicId() {
    return this.getStringAttribute('vnic_id');
  }
}

export class DataAzurermOracleDbNodesDbNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermOracleDbNodesDbNodesOutputReference {
    return new DataAzurermOracleDbNodesDbNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermOracleDbNodesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_db_nodes#read DataAzurermOracleDbNodes#read}
  */
  readonly read?: string;
}

export function dataAzurermOracleDbNodesTimeoutsToTerraform(struct?: DataAzurermOracleDbNodesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermOracleDbNodesTimeoutsToHclTerraform(struct?: DataAzurermOracleDbNodesTimeouts | cdktf.IResolvable): any {
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

export class DataAzurermOracleDbNodesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermOracleDbNodesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAzurermOracleDbNodesTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_db_nodes azurerm_oracle_db_nodes}
*/
export class DataAzurermOracleDbNodes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_oracle_db_nodes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermOracleDbNodes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermOracleDbNodes to import
  * @param importFromId The id of the existing DataAzurermOracleDbNodes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_db_nodes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermOracleDbNodes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_oracle_db_nodes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_db_nodes azurerm_oracle_db_nodes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermOracleDbNodesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermOracleDbNodesConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_oracle_db_nodes',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.31.0',
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
    this._cloudVmClusterId = config.cloudVmClusterId;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_vm_cluster_id - computed: false, optional: false, required: true
  private _cloudVmClusterId?: string; 
  public get cloudVmClusterId() {
    return this.getStringAttribute('cloud_vm_cluster_id');
  }
  public set cloudVmClusterId(value: string) {
    this._cloudVmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudVmClusterIdInput() {
    return this._cloudVmClusterId;
  }

  // db_nodes - computed: true, optional: false, required: false
  private _dbNodes = new DataAzurermOracleDbNodesDbNodesList(this, "db_nodes", false);
  public get dbNodes() {
    return this._dbNodes;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermOracleDbNodesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermOracleDbNodesTimeouts) {
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
      cloud_vm_cluster_id: cdktf.stringToTerraform(this._cloudVmClusterId),
      id: cdktf.stringToTerraform(this._id),
      timeouts: dataAzurermOracleDbNodesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._cloudVmClusterId),
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
      timeouts: {
        value: dataAzurermOracleDbNodesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermOracleDbNodesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
