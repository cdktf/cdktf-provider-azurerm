// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbCassandraTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#analytical_storage_ttl CosmosdbCassandraTable#analytical_storage_ttl}
  */
  readonly analyticalStorageTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#cassandra_keyspace_id CosmosdbCassandraTable#cassandra_keyspace_id}
  */
  readonly cassandraKeyspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#default_ttl CosmosdbCassandraTable#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#name CosmosdbCassandraTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#throughput CosmosdbCassandraTable#throughput}
  */
  readonly throughput?: number;
  /**
  * autoscale_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#autoscale_settings CosmosdbCassandraTable#autoscale_settings}
  */
  readonly autoscaleSettings?: CosmosdbCassandraTableAutoscaleSettings[];
  /**
  * schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#schema CosmosdbCassandraTable#schema}
  */
  readonly schema: CosmosdbCassandraTableSchema[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#timeouts CosmosdbCassandraTable#timeouts}
  */
  readonly timeouts?: CosmosdbCassandraTableTimeouts;
}
export interface CosmosdbCassandraTableAutoscaleSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#max_throughput CosmosdbCassandraTable#max_throughput}
  */
  readonly maxThroughput?: number;
}

function cosmosdbCassandraTableAutoscaleSettingsToTerraform(struct?: CosmosdbCassandraTableAutoscaleSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_throughput: cdktf.numberToTerraform(struct!.maxThroughput),
  }
}

export interface CosmosdbCassandraTableSchemaClusterKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#name CosmosdbCassandraTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#order_by CosmosdbCassandraTable#order_by}
  */
  readonly orderBy: string;
}

function cosmosdbCassandraTableSchemaClusterKeyToTerraform(struct?: CosmosdbCassandraTableSchemaClusterKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    order_by: cdktf.stringToTerraform(struct!.orderBy),
  }
}

export interface CosmosdbCassandraTableSchemaColumn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#name CosmosdbCassandraTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#type CosmosdbCassandraTable#type}
  */
  readonly type: string;
}

function cosmosdbCassandraTableSchemaColumnToTerraform(struct?: CosmosdbCassandraTableSchemaColumn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CosmosdbCassandraTableSchemaPartitionKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#name CosmosdbCassandraTable#name}
  */
  readonly name: string;
}

function cosmosdbCassandraTableSchemaPartitionKeyToTerraform(struct?: CosmosdbCassandraTableSchemaPartitionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CosmosdbCassandraTableSchema {
  /**
  * cluster_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#cluster_key CosmosdbCassandraTable#cluster_key}
  */
  readonly clusterKey?: CosmosdbCassandraTableSchemaClusterKey[];
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#column CosmosdbCassandraTable#column}
  */
  readonly column: CosmosdbCassandraTableSchemaColumn[];
  /**
  * partition_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#partition_key CosmosdbCassandraTable#partition_key}
  */
  readonly partitionKey: CosmosdbCassandraTableSchemaPartitionKey[];
}

function cosmosdbCassandraTableSchemaToTerraform(struct?: CosmosdbCassandraTableSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_key: cdktf.listMapper(cosmosdbCassandraTableSchemaClusterKeyToTerraform)(struct!.clusterKey),
    column: cdktf.listMapper(cosmosdbCassandraTableSchemaColumnToTerraform)(struct!.column),
    partition_key: cdktf.listMapper(cosmosdbCassandraTableSchemaPartitionKeyToTerraform)(struct!.partitionKey),
  }
}

export interface CosmosdbCassandraTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#create CosmosdbCassandraTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#delete CosmosdbCassandraTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#read CosmosdbCassandraTable#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#update CosmosdbCassandraTable#update}
  */
  readonly update?: string;
}

function cosmosdbCassandraTableTimeoutsToTerraform(struct?: CosmosdbCassandraTableTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html azurerm_cosmosdb_cassandra_table}
*/
export class CosmosdbCassandraTable extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html azurerm_cosmosdb_cassandra_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosmosdbCassandraTableConfig
  */
  public constructor(scope: Construct, id: string, config: CosmosdbCassandraTableConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_cassandra_table',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._analyticalStorageTtl = config.analyticalStorageTtl;
    this._cassandraKeyspaceId = config.cassandraKeyspaceId;
    this._defaultTtl = config.defaultTtl;
    this._name = config.name;
    this._throughput = config.throughput;
    this._autoscaleSettings = config.autoscaleSettings;
    this._schema = config.schema;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytical_storage_ttl - computed: false, optional: true, required: false
  private _analyticalStorageTtl?: number;
  public get analyticalStorageTtl() {
    return this.getNumberAttribute('analytical_storage_ttl');
  }
  public set analyticalStorageTtl(value: number ) {
    this._analyticalStorageTtl = value;
  }
  public resetAnalyticalStorageTtl() {
    this._analyticalStorageTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticalStorageTtlInput() {
    return this._analyticalStorageTtl
  }

  // cassandra_keyspace_id - computed: false, optional: false, required: true
  private _cassandraKeyspaceId: string;
  public get cassandraKeyspaceId() {
    return this.getStringAttribute('cassandra_keyspace_id');
  }
  public set cassandraKeyspaceId(value: string) {
    this._cassandraKeyspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraKeyspaceIdInput() {
    return this._cassandraKeyspaceId
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl?: number;
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl
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

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number;
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput
  }

  // autoscale_settings - computed: false, optional: true, required: false
  private _autoscaleSettings?: CosmosdbCassandraTableAutoscaleSettings[];
  public get autoscaleSettings() {
    return this.interpolationForAttribute('autoscale_settings') as any;
  }
  public set autoscaleSettings(value: CosmosdbCassandraTableAutoscaleSettings[] ) {
    this._autoscaleSettings = value;
  }
  public resetAutoscaleSettings() {
    this._autoscaleSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleSettingsInput() {
    return this._autoscaleSettings
  }

  // schema - computed: false, optional: false, required: true
  private _schema: CosmosdbCassandraTableSchema[];
  public get schema() {
    return this.interpolationForAttribute('schema') as any;
  }
  public set schema(value: CosmosdbCassandraTableSchema[]) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CosmosdbCassandraTableTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CosmosdbCassandraTableTimeouts ) {
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
      analytical_storage_ttl: cdktf.numberToTerraform(this._analyticalStorageTtl),
      cassandra_keyspace_id: cdktf.stringToTerraform(this._cassandraKeyspaceId),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      name: cdktf.stringToTerraform(this._name),
      throughput: cdktf.numberToTerraform(this._throughput),
      autoscale_settings: cdktf.listMapper(cosmosdbCassandraTableAutoscaleSettingsToTerraform)(this._autoscaleSettings),
      schema: cdktf.listMapper(cosmosdbCassandraTableSchemaToTerraform)(this._schema),
      timeouts: cosmosdbCassandraTableTimeoutsToTerraform(this._timeouts),
    };
  }
}
