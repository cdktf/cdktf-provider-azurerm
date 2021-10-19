// https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoEventgridDataConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#blob_storage_event_type KustoEventgridDataConnection#blob_storage_event_type}
  */
  readonly blobStorageEventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#cluster_name KustoEventgridDataConnection#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#data_format KustoEventgridDataConnection#data_format}
  */
  readonly dataFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#database_name KustoEventgridDataConnection#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#eventhub_consumer_group_name KustoEventgridDataConnection#eventhub_consumer_group_name}
  */
  readonly eventhubConsumerGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#eventhub_id KustoEventgridDataConnection#eventhub_id}
  */
  readonly eventhubId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#location KustoEventgridDataConnection#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#mapping_rule_name KustoEventgridDataConnection#mapping_rule_name}
  */
  readonly mappingRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#name KustoEventgridDataConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#resource_group_name KustoEventgridDataConnection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#skip_first_record KustoEventgridDataConnection#skip_first_record}
  */
  readonly skipFirstRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#storage_account_id KustoEventgridDataConnection#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#table_name KustoEventgridDataConnection#table_name}
  */
  readonly tableName?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#timeouts KustoEventgridDataConnection#timeouts}
  */
  readonly timeouts?: KustoEventgridDataConnectionTimeouts;
}
export interface KustoEventgridDataConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#create KustoEventgridDataConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#delete KustoEventgridDataConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#read KustoEventgridDataConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html#update KustoEventgridDataConnection#update}
  */
  readonly update?: string;
}

function kustoEventgridDataConnectionTimeoutsToTerraform(struct?: KustoEventgridDataConnectionTimeoutsOutputReference | KustoEventgridDataConnectionTimeouts): any {
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

export class KustoEventgridDataConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html azurerm_kusto_eventgrid_data_connection}
*/
export class KustoEventgridDataConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_kusto_eventgrid_data_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html azurerm_kusto_eventgrid_data_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KustoEventgridDataConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: KustoEventgridDataConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_eventgrid_data_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._blobStorageEventType = config.blobStorageEventType;
    this._clusterName = config.clusterName;
    this._dataFormat = config.dataFormat;
    this._databaseName = config.databaseName;
    this._eventhubConsumerGroupName = config.eventhubConsumerGroupName;
    this._eventhubId = config.eventhubId;
    this._location = config.location;
    this._mappingRuleName = config.mappingRuleName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._skipFirstRecord = config.skipFirstRecord;
    this._storageAccountId = config.storageAccountId;
    this._tableName = config.tableName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blob_storage_event_type - computed: false, optional: true, required: false
  private _blobStorageEventType?: string | undefined; 
  public get blobStorageEventType() {
    return this.getStringAttribute('blob_storage_event_type');
  }
  public set blobStorageEventType(value: string | undefined) {
    this._blobStorageEventType = value;
  }
  public resetBlobStorageEventType() {
    this._blobStorageEventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobStorageEventTypeInput() {
    return this._blobStorageEventType
  }

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

  // eventhub_consumer_group_name - computed: false, optional: false, required: true
  private _eventhubConsumerGroupName?: string; 
  public get eventhubConsumerGroupName() {
    return this.getStringAttribute('eventhub_consumer_group_name');
  }
  public set eventhubConsumerGroupName(value: string) {
    this._eventhubConsumerGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubConsumerGroupNameInput() {
    return this._eventhubConsumerGroupName
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

  // skip_first_record - computed: false, optional: true, required: false
  private _skipFirstRecord?: boolean | cdktf.IResolvable | undefined; 
  public get skipFirstRecord() {
    return this.getBooleanAttribute('skip_first_record') as any;
  }
  public set skipFirstRecord(value: boolean | cdktf.IResolvable | undefined) {
    this._skipFirstRecord = value;
  }
  public resetSkipFirstRecord() {
    this._skipFirstRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFirstRecordInput() {
    return this._skipFirstRecord
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
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
  private _timeouts?: KustoEventgridDataConnectionTimeouts | undefined; 
  private __timeoutsOutput = new KustoEventgridDataConnectionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KustoEventgridDataConnectionTimeouts | undefined) {
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
      blob_storage_event_type: cdktf.stringToTerraform(this._blobStorageEventType),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      data_format: cdktf.stringToTerraform(this._dataFormat),
      database_name: cdktf.stringToTerraform(this._databaseName),
      eventhub_consumer_group_name: cdktf.stringToTerraform(this._eventhubConsumerGroupName),
      eventhub_id: cdktf.stringToTerraform(this._eventhubId),
      location: cdktf.stringToTerraform(this._location),
      mapping_rule_name: cdktf.stringToTerraform(this._mappingRuleName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      skip_first_record: cdktf.booleanToTerraform(this._skipFirstRecord),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      table_name: cdktf.stringToTerraform(this._tableName),
      timeouts: kustoEventgridDataConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
