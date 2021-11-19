// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbCassandraDatacenterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html#availability_zones_enabled CosmosdbCassandraDatacenter#availability_zones_enabled}
  */
  readonly availabilityZonesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html#cassandra_cluster_id CosmosdbCassandraDatacenter#cassandra_cluster_id}
  */
  readonly cassandraClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html#delegated_management_subnet_id CosmosdbCassandraDatacenter#delegated_management_subnet_id}
  */
  readonly delegatedManagementSubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html#disk_count CosmosdbCassandraDatacenter#disk_count}
  */
  readonly diskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html#location CosmosdbCassandraDatacenter#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html#name CosmosdbCassandraDatacenter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html#node_count CosmosdbCassandraDatacenter#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html#sku_name CosmosdbCassandraDatacenter#sku_name}
  */
  readonly skuName?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html#timeouts CosmosdbCassandraDatacenter#timeouts}
  */
  readonly timeouts?: CosmosdbCassandraDatacenterTimeouts;
}
export interface CosmosdbCassandraDatacenterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html#create CosmosdbCassandraDatacenter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html#delete CosmosdbCassandraDatacenter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html#read CosmosdbCassandraDatacenter#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html#update CosmosdbCassandraDatacenter#update}
  */
  readonly update?: string;
}

function cosmosdbCassandraDatacenterTimeoutsToTerraform(struct?: CosmosdbCassandraDatacenterTimeoutsOutputReference | CosmosdbCassandraDatacenterTimeouts): any {
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

export class CosmosdbCassandraDatacenterTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html azurerm_cosmosdb_cassandra_datacenter}
*/
export class CosmosdbCassandraDatacenter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_cosmosdb_cassandra_datacenter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_datacenter.html azurerm_cosmosdb_cassandra_datacenter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosmosdbCassandraDatacenterConfig
  */
  public constructor(scope: Construct, id: string, config: CosmosdbCassandraDatacenterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_cassandra_datacenter',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZonesEnabled = config.availabilityZonesEnabled;
    this._cassandraClusterId = config.cassandraClusterId;
    this._delegatedManagementSubnetId = config.delegatedManagementSubnetId;
    this._diskCount = config.diskCount;
    this._location = config.location;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._skuName = config.skuName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones_enabled - computed: false, optional: true, required: false
  private _availabilityZonesEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get availabilityZonesEnabled() {
    return this.getBooleanAttribute('availability_zones_enabled') as any;
  }
  public set availabilityZonesEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._availabilityZonesEnabled = value;
  }
  public resetAvailabilityZonesEnabled() {
    this._availabilityZonesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesEnabledInput() {
    return this._availabilityZonesEnabled
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
    return this._cassandraClusterId
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
    return this._delegatedManagementSubnetId
  }

  // disk_count - computed: false, optional: true, required: false
  private _diskCount?: number | undefined; 
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }
  public set diskCount(value: number | undefined) {
    this._diskCount = value;
  }
  public resetDiskCount() {
    this._diskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount
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

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number | undefined; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number | undefined) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount
  }

  // sku_name - computed: false, optional: true, required: false
  private _skuName?: string | undefined; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string | undefined) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CosmosdbCassandraDatacenterTimeouts | undefined; 
  private __timeoutsOutput = new CosmosdbCassandraDatacenterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CosmosdbCassandraDatacenterTimeouts | undefined) {
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
      availability_zones_enabled: cdktf.booleanToTerraform(this._availabilityZonesEnabled),
      cassandra_cluster_id: cdktf.stringToTerraform(this._cassandraClusterId),
      delegated_management_subnet_id: cdktf.stringToTerraform(this._delegatedManagementSubnetId),
      disk_count: cdktf.numberToTerraform(this._diskCount),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      sku_name: cdktf.stringToTerraform(this._skuName),
      timeouts: cosmosdbCassandraDatacenterTimeoutsToTerraform(this._timeouts),
    };
  }
}
