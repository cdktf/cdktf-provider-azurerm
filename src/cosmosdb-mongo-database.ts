// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_mongo_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CosmosdbMongoDatabaseConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly throughput?: number;
  /** autoscale_settings block */
  readonly autoscaleSettings?: CosmosdbMongoDatabaseAutoscaleSettings[];
  /** timeouts block */
  readonly timeouts?: CosmosdbMongoDatabaseTimeouts;
}
export interface CosmosdbMongoDatabaseAutoscaleSettings {
  readonly maxThroughput?: number;
}
export interface CosmosdbMongoDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class CosmosdbMongoDatabase extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CosmosdbMongoDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_mongo_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._throughput = config.throughput;
    this._autoscaleSettings = config.autoscaleSettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName
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
  private _autoscaleSettings?: CosmosdbMongoDatabaseAutoscaleSettings[];
  public get autoscaleSettings() {
    return this.interpolationForAttribute('autoscale_settings') as any;
  }
  public set autoscaleSettings(value: CosmosdbMongoDatabaseAutoscaleSettings[] ) {
    this._autoscaleSettings = value;
  }
  public resetAutoscaleSettings() {
    this._autoscaleSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleSettingsInput() {
    return this._autoscaleSettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CosmosdbMongoDatabaseTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CosmosdbMongoDatabaseTimeouts ) {
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
      account_name: this._accountName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      throughput: this._throughput,
      autoscale_settings: this._autoscaleSettings,
      timeouts: this._timeouts,
    };
  }
}
