// https://www.terraform.io/docs/providers/azurerm/r/kusto_eventhub_data_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KustoEventhubDataConnectionConfig extends TerraformMetaArguments {
  readonly clusterName: string;
  readonly consumerGroup: string;
  readonly dataFormat?: string;
  readonly databaseName: string;
  readonly eventhubId: string;
  readonly location: string;
  readonly mappingRuleName?: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tableName?: string;
  /** timeouts block */
  readonly timeouts?: KustoEventhubDataConnectionTimeouts;
}
export interface KustoEventhubDataConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class KustoEventhubDataConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._consumerGroup = config.consumerGroup;
    this._dataFormat = config.dataFormat;
    this._databaseName = config.databaseName;
    this._eventhubId = config.eventhubId;
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
  private _clusterName: string;
  public get clusterName() {
    return this._clusterName;
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }

  // consumer_group - computed: false, optional: false, required: true
  private _consumerGroup: string;
  public get consumerGroup() {
    return this._consumerGroup;
  }
  public set consumerGroup(value: string) {
    this._consumerGroup = value;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat?: string;
  public get dataFormat() {
    return this._dataFormat;
  }
  public set dataFormat(value: string | undefined) {
    this._dataFormat = value;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
  public get databaseName() {
    return this._databaseName;
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }

  // eventhub_id - computed: false, optional: false, required: true
  private _eventhubId: string;
  public get eventhubId() {
    return this._eventhubId;
  }
  public set eventhubId(value: string) {
    this._eventhubId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // mapping_rule_name - computed: false, optional: true, required: false
  private _mappingRuleName?: string;
  public get mappingRuleName() {
    return this._mappingRuleName;
  }
  public set mappingRuleName(value: string | undefined) {
    this._mappingRuleName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string;
  public get tableName() {
    return this._tableName;
  }
  public set tableName(value: string | undefined) {
    this._tableName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoEventhubDataConnectionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KustoEventhubDataConnectionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: this._clusterName,
      consumer_group: this._consumerGroup,
      data_format: this._dataFormat,
      database_name: this._databaseName,
      eventhub_id: this._eventhubId,
      location: this._location,
      mapping_rule_name: this._mappingRuleName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      table_name: this._tableName,
      timeouts: this._timeouts,
    };
  }
}
