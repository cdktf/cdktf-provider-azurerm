// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbCassandraDatacenterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#availability_zones_enabled CosmosdbCassandraDatacenter#availability_zones_enabled}
  */
  readonly availabilityZonesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#backup_storage_customer_key_uri CosmosdbCassandraDatacenter#backup_storage_customer_key_uri}
  */
  readonly backupStorageCustomerKeyUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#base64_encoded_yaml_fragment CosmosdbCassandraDatacenter#base64_encoded_yaml_fragment}
  */
  readonly base64EncodedYamlFragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#cassandra_cluster_id CosmosdbCassandraDatacenter#cassandra_cluster_id}
  */
  readonly cassandraClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#delegated_management_subnet_id CosmosdbCassandraDatacenter#delegated_management_subnet_id}
  */
  readonly delegatedManagementSubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#disk_count CosmosdbCassandraDatacenter#disk_count}
  */
  readonly diskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#disk_sku CosmosdbCassandraDatacenter#disk_sku}
  */
  readonly diskSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#id CosmosdbCassandraDatacenter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#location CosmosdbCassandraDatacenter#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#managed_disk_customer_key_uri CosmosdbCassandraDatacenter#managed_disk_customer_key_uri}
  */
  readonly managedDiskCustomerKeyUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#name CosmosdbCassandraDatacenter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#node_count CosmosdbCassandraDatacenter#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#sku_name CosmosdbCassandraDatacenter#sku_name}
  */
  readonly skuName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#timeouts CosmosdbCassandraDatacenter#timeouts}
  */
  readonly timeouts?: CosmosdbCassandraDatacenterTimeouts;
}
export interface CosmosdbCassandraDatacenterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#create CosmosdbCassandraDatacenter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#delete CosmosdbCassandraDatacenter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#read CosmosdbCassandraDatacenter#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#update CosmosdbCassandraDatacenter#update}
  */
  readonly update?: string;
}

export function cosmosdbCassandraDatacenterTimeoutsToTerraform(struct?: CosmosdbCassandraDatacenterTimeouts | cdktf.IResolvable): any {
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


export function cosmosdbCassandraDatacenterTimeoutsToHclTerraform(struct?: CosmosdbCassandraDatacenterTimeouts | cdktf.IResolvable): any {
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

export class CosmosdbCassandraDatacenterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CosmosdbCassandraDatacenterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CosmosdbCassandraDatacenterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter azurerm_cosmosdb_cassandra_datacenter}
*/
export class CosmosdbCassandraDatacenter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cosmosdb_cassandra_datacenter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CosmosdbCassandraDatacenter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CosmosdbCassandraDatacenter to import
  * @param importFromId The id of the existing CosmosdbCassandraDatacenter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CosmosdbCassandraDatacenter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cosmosdb_cassandra_datacenter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_cassandra_datacenter azurerm_cosmosdb_cassandra_datacenter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosmosdbCassandraDatacenterConfig
  */
  public constructor(scope: Construct, id: string, config: CosmosdbCassandraDatacenterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_cassandra_datacenter',
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
    this._availabilityZonesEnabled = config.availabilityZonesEnabled;
    this._backupStorageCustomerKeyUri = config.backupStorageCustomerKeyUri;
    this._base64EncodedYamlFragment = config.base64EncodedYamlFragment;
    this._cassandraClusterId = config.cassandraClusterId;
    this._delegatedManagementSubnetId = config.delegatedManagementSubnetId;
    this._diskCount = config.diskCount;
    this._diskSku = config.diskSku;
    this._id = config.id;
    this._location = config.location;
    this._managedDiskCustomerKeyUri = config.managedDiskCustomerKeyUri;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._skuName = config.skuName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones_enabled - computed: false, optional: true, required: false
  private _availabilityZonesEnabled?: boolean | cdktf.IResolvable; 
  public get availabilityZonesEnabled() {
    return this.getBooleanAttribute('availability_zones_enabled');
  }
  public set availabilityZonesEnabled(value: boolean | cdktf.IResolvable) {
    this._availabilityZonesEnabled = value;
  }
  public resetAvailabilityZonesEnabled() {
    this._availabilityZonesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesEnabledInput() {
    return this._availabilityZonesEnabled;
  }

  // backup_storage_customer_key_uri - computed: false, optional: true, required: false
  private _backupStorageCustomerKeyUri?: string; 
  public get backupStorageCustomerKeyUri() {
    return this.getStringAttribute('backup_storage_customer_key_uri');
  }
  public set backupStorageCustomerKeyUri(value: string) {
    this._backupStorageCustomerKeyUri = value;
  }
  public resetBackupStorageCustomerKeyUri() {
    this._backupStorageCustomerKeyUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStorageCustomerKeyUriInput() {
    return this._backupStorageCustomerKeyUri;
  }

  // base64_encoded_yaml_fragment - computed: false, optional: true, required: false
  private _base64EncodedYamlFragment?: string; 
  public get base64EncodedYamlFragment() {
    return this.getStringAttribute('base64_encoded_yaml_fragment');
  }
  public set base64EncodedYamlFragment(value: string) {
    this._base64EncodedYamlFragment = value;
  }
  public resetBase64EncodedYamlFragment() {
    this._base64EncodedYamlFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodedYamlFragmentInput() {
    return this._base64EncodedYamlFragment;
  }

  // cassandra_cluster_id - computed: false, optional: false, required: true
  private _cassandraClusterId?: string; 
  public get cassandraClusterId() {
    return this.getStringAttribute('cassandra_cluster_id');
  }
  public set cassandraClusterId(value: string) {
    this._cassandraClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraClusterIdInput() {
    return this._cassandraClusterId;
  }

  // delegated_management_subnet_id - computed: false, optional: false, required: true
  private _delegatedManagementSubnetId?: string; 
  public get delegatedManagementSubnetId() {
    return this.getStringAttribute('delegated_management_subnet_id');
  }
  public set delegatedManagementSubnetId(value: string) {
    this._delegatedManagementSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedManagementSubnetIdInput() {
    return this._delegatedManagementSubnetId;
  }

  // disk_count - computed: false, optional: true, required: false
  private _diskCount?: number; 
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }
  public set diskCount(value: number) {
    this._diskCount = value;
  }
  public resetDiskCount() {
    this._diskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount;
  }

  // disk_sku - computed: false, optional: true, required: false
  private _diskSku?: string; 
  public get diskSku() {
    return this.getStringAttribute('disk_sku');
  }
  public set diskSku(value: string) {
    this._diskSku = value;
  }
  public resetDiskSku() {
    this._diskSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSkuInput() {
    return this._diskSku;
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

  // managed_disk_customer_key_uri - computed: false, optional: true, required: false
  private _managedDiskCustomerKeyUri?: string; 
  public get managedDiskCustomerKeyUri() {
    return this.getStringAttribute('managed_disk_customer_key_uri');
  }
  public set managedDiskCustomerKeyUri(value: string) {
    this._managedDiskCustomerKeyUri = value;
  }
  public resetManagedDiskCustomerKeyUri() {
    this._managedDiskCustomerKeyUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskCustomerKeyUriInput() {
    return this._managedDiskCustomerKeyUri;
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

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // seed_node_ip_addresses - computed: true, optional: false, required: false
  public get seedNodeIpAddresses() {
    return this.getListAttribute('seed_node_ip_addresses');
  }

  // sku_name - computed: false, optional: true, required: false
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CosmosdbCassandraDatacenterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CosmosdbCassandraDatacenterTimeouts) {
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
      availability_zones_enabled: cdktf.booleanToTerraform(this._availabilityZonesEnabled),
      backup_storage_customer_key_uri: cdktf.stringToTerraform(this._backupStorageCustomerKeyUri),
      base64_encoded_yaml_fragment: cdktf.stringToTerraform(this._base64EncodedYamlFragment),
      cassandra_cluster_id: cdktf.stringToTerraform(this._cassandraClusterId),
      delegated_management_subnet_id: cdktf.stringToTerraform(this._delegatedManagementSubnetId),
      disk_count: cdktf.numberToTerraform(this._diskCount),
      disk_sku: cdktf.stringToTerraform(this._diskSku),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      managed_disk_customer_key_uri: cdktf.stringToTerraform(this._managedDiskCustomerKeyUri),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      sku_name: cdktf.stringToTerraform(this._skuName),
      timeouts: cosmosdbCassandraDatacenterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zones_enabled: {
        value: cdktf.booleanToHclTerraform(this._availabilityZonesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_storage_customer_key_uri: {
        value: cdktf.stringToHclTerraform(this._backupStorageCustomerKeyUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base64_encoded_yaml_fragment: {
        value: cdktf.stringToHclTerraform(this._base64EncodedYamlFragment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cassandra_cluster_id: {
        value: cdktf.stringToHclTerraform(this._cassandraClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegated_management_subnet_id: {
        value: cdktf.stringToHclTerraform(this._delegatedManagementSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_count: {
        value: cdktf.numberToHclTerraform(this._diskCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_sku: {
        value: cdktf.stringToHclTerraform(this._diskSku),
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
      managed_disk_customer_key_uri: {
        value: cdktf.stringToHclTerraform(this._managedDiskCustomerKeyUri),
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
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sku_name: {
        value: cdktf.stringToHclTerraform(this._skuName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cosmosdbCassandraDatacenterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CosmosdbCassandraDatacenterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
