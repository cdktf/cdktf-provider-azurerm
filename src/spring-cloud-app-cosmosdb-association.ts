// https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudAppCosmosdbAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#api_type SpringCloudAppCosmosdbAssociation#api_type}
  */
  readonly apiType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#cosmosdb_access_key SpringCloudAppCosmosdbAssociation#cosmosdb_access_key}
  */
  readonly cosmosdbAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#cosmosdb_account_id SpringCloudAppCosmosdbAssociation#cosmosdb_account_id}
  */
  readonly cosmosdbAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#cosmosdb_cassandra_keyspace_name SpringCloudAppCosmosdbAssociation#cosmosdb_cassandra_keyspace_name}
  */
  readonly cosmosdbCassandraKeyspaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#cosmosdb_gremlin_database_name SpringCloudAppCosmosdbAssociation#cosmosdb_gremlin_database_name}
  */
  readonly cosmosdbGremlinDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#cosmosdb_gremlin_graph_name SpringCloudAppCosmosdbAssociation#cosmosdb_gremlin_graph_name}
  */
  readonly cosmosdbGremlinGraphName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#cosmosdb_mongo_database_name SpringCloudAppCosmosdbAssociation#cosmosdb_mongo_database_name}
  */
  readonly cosmosdbMongoDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#cosmosdb_sql_database_name SpringCloudAppCosmosdbAssociation#cosmosdb_sql_database_name}
  */
  readonly cosmosdbSqlDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#name SpringCloudAppCosmosdbAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#spring_cloud_app_id SpringCloudAppCosmosdbAssociation#spring_cloud_app_id}
  */
  readonly springCloudAppId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#timeouts SpringCloudAppCosmosdbAssociation#timeouts}
  */
  readonly timeouts?: SpringCloudAppCosmosdbAssociationTimeouts;
}
export interface SpringCloudAppCosmosdbAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#create SpringCloudAppCosmosdbAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#delete SpringCloudAppCosmosdbAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#read SpringCloudAppCosmosdbAssociation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html#update SpringCloudAppCosmosdbAssociation#update}
  */
  readonly update?: string;
}

function springCloudAppCosmosdbAssociationTimeoutsToTerraform(struct?: SpringCloudAppCosmosdbAssociationTimeoutsOutputReference | SpringCloudAppCosmosdbAssociationTimeouts): any {
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

export class SpringCloudAppCosmosdbAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html azurerm_spring_cloud_app_cosmosdb_association}
*/
export class SpringCloudAppCosmosdbAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_spring_cloud_app_cosmosdb_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_cosmosdb_association.html azurerm_spring_cloud_app_cosmosdb_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudAppCosmosdbAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudAppCosmosdbAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_app_cosmosdb_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiType = config.apiType;
    this._cosmosdbAccessKey = config.cosmosdbAccessKey;
    this._cosmosdbAccountId = config.cosmosdbAccountId;
    this._cosmosdbCassandraKeyspaceName = config.cosmosdbCassandraKeyspaceName;
    this._cosmosdbGremlinDatabaseName = config.cosmosdbGremlinDatabaseName;
    this._cosmosdbGremlinGraphName = config.cosmosdbGremlinGraphName;
    this._cosmosdbMongoDatabaseName = config.cosmosdbMongoDatabaseName;
    this._cosmosdbSqlDatabaseName = config.cosmosdbSqlDatabaseName;
    this._name = config.name;
    this._springCloudAppId = config.springCloudAppId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_type - computed: false, optional: false, required: true
  private _apiType?: string; 
  public get apiType() {
    return this.getStringAttribute('api_type');
  }
  public set apiType(value: string) {
    this._apiType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTypeInput() {
    return this._apiType
  }

  // cosmosdb_access_key - computed: false, optional: false, required: true
  private _cosmosdbAccessKey?: string; 
  public get cosmosdbAccessKey() {
    return this.getStringAttribute('cosmosdb_access_key');
  }
  public set cosmosdbAccessKey(value: string) {
    this._cosmosdbAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosdbAccessKeyInput() {
    return this._cosmosdbAccessKey
  }

  // cosmosdb_account_id - computed: false, optional: false, required: true
  private _cosmosdbAccountId?: string; 
  public get cosmosdbAccountId() {
    return this.getStringAttribute('cosmosdb_account_id');
  }
  public set cosmosdbAccountId(value: string) {
    this._cosmosdbAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosdbAccountIdInput() {
    return this._cosmosdbAccountId
  }

  // cosmosdb_cassandra_keyspace_name - computed: false, optional: true, required: false
  private _cosmosdbCassandraKeyspaceName?: string | undefined; 
  public get cosmosdbCassandraKeyspaceName() {
    return this.getStringAttribute('cosmosdb_cassandra_keyspace_name');
  }
  public set cosmosdbCassandraKeyspaceName(value: string | undefined) {
    this._cosmosdbCassandraKeyspaceName = value;
  }
  public resetCosmosdbCassandraKeyspaceName() {
    this._cosmosdbCassandraKeyspaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosdbCassandraKeyspaceNameInput() {
    return this._cosmosdbCassandraKeyspaceName
  }

  // cosmosdb_gremlin_database_name - computed: false, optional: true, required: false
  private _cosmosdbGremlinDatabaseName?: string | undefined; 
  public get cosmosdbGremlinDatabaseName() {
    return this.getStringAttribute('cosmosdb_gremlin_database_name');
  }
  public set cosmosdbGremlinDatabaseName(value: string | undefined) {
    this._cosmosdbGremlinDatabaseName = value;
  }
  public resetCosmosdbGremlinDatabaseName() {
    this._cosmosdbGremlinDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosdbGremlinDatabaseNameInput() {
    return this._cosmosdbGremlinDatabaseName
  }

  // cosmosdb_gremlin_graph_name - computed: false, optional: true, required: false
  private _cosmosdbGremlinGraphName?: string | undefined; 
  public get cosmosdbGremlinGraphName() {
    return this.getStringAttribute('cosmosdb_gremlin_graph_name');
  }
  public set cosmosdbGremlinGraphName(value: string | undefined) {
    this._cosmosdbGremlinGraphName = value;
  }
  public resetCosmosdbGremlinGraphName() {
    this._cosmosdbGremlinGraphName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosdbGremlinGraphNameInput() {
    return this._cosmosdbGremlinGraphName
  }

  // cosmosdb_mongo_database_name - computed: false, optional: true, required: false
  private _cosmosdbMongoDatabaseName?: string | undefined; 
  public get cosmosdbMongoDatabaseName() {
    return this.getStringAttribute('cosmosdb_mongo_database_name');
  }
  public set cosmosdbMongoDatabaseName(value: string | undefined) {
    this._cosmosdbMongoDatabaseName = value;
  }
  public resetCosmosdbMongoDatabaseName() {
    this._cosmosdbMongoDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosdbMongoDatabaseNameInput() {
    return this._cosmosdbMongoDatabaseName
  }

  // cosmosdb_sql_database_name - computed: false, optional: true, required: false
  private _cosmosdbSqlDatabaseName?: string | undefined; 
  public get cosmosdbSqlDatabaseName() {
    return this.getStringAttribute('cosmosdb_sql_database_name');
  }
  public set cosmosdbSqlDatabaseName(value: string | undefined) {
    this._cosmosdbSqlDatabaseName = value;
  }
  public resetCosmosdbSqlDatabaseName() {
    this._cosmosdbSqlDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosdbSqlDatabaseNameInput() {
    return this._cosmosdbSqlDatabaseName
  }

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

  // spring_cloud_app_id - computed: false, optional: false, required: true
  private _springCloudAppId?: string; 
  public get springCloudAppId() {
    return this.getStringAttribute('spring_cloud_app_id');
  }
  public set springCloudAppId(value: string) {
    this._springCloudAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudAppIdInput() {
    return this._springCloudAppId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpringCloudAppCosmosdbAssociationTimeouts | undefined; 
  private __timeoutsOutput = new SpringCloudAppCosmosdbAssociationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SpringCloudAppCosmosdbAssociationTimeouts | undefined) {
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
      api_type: cdktf.stringToTerraform(this._apiType),
      cosmosdb_access_key: cdktf.stringToTerraform(this._cosmosdbAccessKey),
      cosmosdb_account_id: cdktf.stringToTerraform(this._cosmosdbAccountId),
      cosmosdb_cassandra_keyspace_name: cdktf.stringToTerraform(this._cosmosdbCassandraKeyspaceName),
      cosmosdb_gremlin_database_name: cdktf.stringToTerraform(this._cosmosdbGremlinDatabaseName),
      cosmosdb_gremlin_graph_name: cdktf.stringToTerraform(this._cosmosdbGremlinGraphName),
      cosmosdb_mongo_database_name: cdktf.stringToTerraform(this._cosmosdbMongoDatabaseName),
      cosmosdb_sql_database_name: cdktf.stringToTerraform(this._cosmosdbSqlDatabaseName),
      name: cdktf.stringToTerraform(this._name),
      spring_cloud_app_id: cdktf.stringToTerraform(this._springCloudAppId),
      timeouts: springCloudAppCosmosdbAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
