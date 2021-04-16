// https://www.terraform.io/docs/providers/azurerm/r/kusto_eventgrid_data_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoEventgridDataConnectionConfig extends cdktf.TerraformMetaArguments {
  readonly blobStorageEventType?: string;
  readonly clusterName: string;
  readonly dataFormat?: string;
  readonly databaseName: string;
  readonly eventhubConsumerGroupName: string;
  readonly eventhubId: string;
  readonly location: string;
  readonly mappingRuleName?: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly skipFirstRecord?: boolean;
  readonly storageAccountId: string;
  readonly tableName?: string;
  /** timeouts block */
  readonly timeouts?: KustoEventgridDataConnectionTimeouts;
}
export interface KustoEventgridDataConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function kustoEventgridDataConnectionTimeoutsToTerraform(struct?: KustoEventgridDataConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class KustoEventgridDataConnection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _blobStorageEventType?: string;
  public get blobStorageEventType() {
    return this.getStringAttribute('blob_storage_event_type');
  }
  public set blobStorageEventType(value: string ) {
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
  private _clusterName: string;
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
  private _dataFormat?: string;
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string ) {
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
  private _databaseName: string;
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
  private _eventhubConsumerGroupName: string;
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
  private _eventhubId: string;
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
  private _location: string;
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
  private _mappingRuleName?: string;
  public get mappingRuleName() {
    return this.getStringAttribute('mapping_rule_name');
  }
  public set mappingRuleName(value: string ) {
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
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
  private _skipFirstRecord?: boolean;
  public get skipFirstRecord() {
    return this.getBooleanAttribute('skip_first_record');
  }
  public set skipFirstRecord(value: boolean ) {
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
  private _storageAccountId: string;
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
  private _tableName?: string;
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string ) {
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
  private _timeouts?: KustoEventgridDataConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KustoEventgridDataConnectionTimeouts ) {
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
