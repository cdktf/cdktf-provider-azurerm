// https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoEventhubDataConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#cluster_name KustoEventhubDataConnection#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#compression KustoEventhubDataConnection#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#consumer_group KustoEventhubDataConnection#consumer_group}
  */
  readonly consumerGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#data_format KustoEventhubDataConnection#data_format}
  */
  readonly dataFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#database_name KustoEventhubDataConnection#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#event_system_properties KustoEventhubDataConnection#event_system_properties}
  */
  readonly eventSystemProperties?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#eventhub_id KustoEventhubDataConnection#eventhub_id}
  */
  readonly eventhubId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#identity_id KustoEventhubDataConnection#identity_id}
  */
  readonly identityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#location KustoEventhubDataConnection#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#mapping_rule_name KustoEventhubDataConnection#mapping_rule_name}
  */
  readonly mappingRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#name KustoEventhubDataConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#resource_group_name KustoEventhubDataConnection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#table_name KustoEventhubDataConnection#table_name}
  */
  readonly tableName?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#timeouts KustoEventhubDataConnection#timeouts}
  */
  readonly timeouts?: KustoEventhubDataConnectionTimeouts;
}
export interface KustoEventhubDataConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#create KustoEventhubDataConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#delete KustoEventhubDataConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#read KustoEventhubDataConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html#update KustoEventhubDataConnection#update}
  */
  readonly update?: string;
}

function kustoEventhubDataConnectionTimeoutsToTerraform(struct?: KustoEventhubDataConnectionTimeoutsOutputReference | KustoEventhubDataConnectionTimeouts): any {
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

export class KustoEventhubDataConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html azurerm_kusto_eventhub_data_connection}
*/
export class KustoEventhubDataConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_kusto_eventhub_data_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html azurerm_kusto_eventhub_data_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KustoEventhubDataConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: KustoEventhubDataConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_eventhub_data_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._compression = config.compression;
    this._consumerGroup = config.consumerGroup;
    this._dataFormat = config.dataFormat;
    this._databaseName = config.databaseName;
    this._eventSystemProperties = config.eventSystemProperties;
    this._eventhubId = config.eventhubId;
    this._identityId = config.identityId;
    this._location = config.location;
    this._mappingRuleName = config.mappingRuleName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tableName = config.tableName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string | undefined; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string | undefined) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression
  }

  // consumer_group - computed: false, optional: false, required: true
  private _consumerGroup?: string; 
  public get consumerGroup() {
    return this.getStringAttribute('consumer_group');
  }
  public set consumerGroup(value: string) {
    this._consumerGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupInput() {
    return this._consumerGroup
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat?: string | undefined; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string | undefined) {
    this._dataFormat = value;
  }
  public resetDataFormat() {
    this._dataFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // event_system_properties - computed: true, optional: true, required: false
  private _eventSystemProperties?: string[] | undefined; 
  public get eventSystemProperties() {
    return this.getListAttribute('event_system_properties');
  }
  public set eventSystemProperties(value: string[] | undefined) {
    this._eventSystemProperties = value;
  }
  public resetEventSystemProperties() {
    this._eventSystemProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSystemPropertiesInput() {
    return this._eventSystemProperties
  }

  // eventhub_id - computed: false, optional: false, required: true
  private _eventhubId?: string; 
  public get eventhubId() {
    return this.getStringAttribute('eventhub_id');
  }
  public set eventhubId(value: string) {
    this._eventhubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubIdInput() {
    return this._eventhubId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_id - computed: false, optional: true, required: false
  private _identityId?: string | undefined; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string | undefined) {
    this._identityId = value;
  }
  public resetIdentityId() {
    this._identityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId
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

  // mapping_rule_name - computed: false, optional: true, required: false
  private _mappingRuleName?: string | undefined; 
  public get mappingRuleName() {
    return this.getStringAttribute('mapping_rule_name');
  }
  public set mappingRuleName(value: string | undefined) {
    this._mappingRuleName = value;
  }
  public resetMappingRuleName() {
    this._mappingRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingRuleNameInput() {
    return this._mappingRuleName
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

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string | undefined; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string | undefined) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoEventhubDataConnectionTimeouts | undefined; 
  private __timeoutsOutput = new KustoEventhubDataConnectionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KustoEventhubDataConnectionTimeouts | undefined) {
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
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      compression: cdktf.stringToTerraform(this._compression),
      consumer_group: cdktf.stringToTerraform(this._consumerGroup),
      data_format: cdktf.stringToTerraform(this._dataFormat),
      database_name: cdktf.stringToTerraform(this._databaseName),
      event_system_properties: cdktf.listMapper(cdktf.stringToTerraform)(this._eventSystemProperties),
      eventhub_id: cdktf.stringToTerraform(this._eventhubId),
      identity_id: cdktf.stringToTerraform(this._identityId),
      location: cdktf.stringToTerraform(this._location),
      mapping_rule_name: cdktf.stringToTerraform(this._mappingRuleName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      table_name: cdktf.stringToTerraform(this._tableName),
      timeouts: kustoEventhubDataConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
