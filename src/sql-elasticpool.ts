// https://www.terraform.io/docs/providers/azurerm/r/sql_elasticpool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SqlElasticpoolConfig extends TerraformMetaArguments {
  readonly dbDtuMax?: number;
  readonly dbDtuMin?: number;
  readonly dtu: number;
  readonly edition: string;
  readonly location: string;
  readonly name: string;
  readonly poolSize?: number;
  readonly resourceGroupName: string;
  readonly serverName: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: SqlElasticpoolTimeouts;
}
export interface SqlElasticpoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SqlElasticpool extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SqlElasticpoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sql_elasticpool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbDtuMax = config.dbDtuMax;
    this._dbDtuMin = config.dbDtuMin;
    this._dtu = config.dtu;
    this._edition = config.edition;
    this._location = config.location;
    this._name = config.name;
    this._poolSize = config.poolSize;
    this._resourceGroupName = config.resourceGroupName;
    this._serverName = config.serverName;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // db_dtu_max - computed: true, optional: true, required: false
  private _dbDtuMax?: number;
  public get dbDtuMax() {
    return this.getNumberAttribute('db_dtu_max');
  }
  public set dbDtuMax(value: number) {
    this._dbDtuMax = value;
  }
  public resetDbDtuMax() {
    this._dbDtuMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbDtuMaxInput() {
    return this._dbDtuMax
  }

  // db_dtu_min - computed: true, optional: true, required: false
  private _dbDtuMin?: number;
  public get dbDtuMin() {
    return this.getNumberAttribute('db_dtu_min');
  }
  public set dbDtuMin(value: number) {
    this._dbDtuMin = value;
  }
  public resetDbDtuMin() {
    this._dbDtuMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbDtuMinInput() {
    return this._dbDtuMin
  }

  // dtu - computed: false, optional: false, required: true
  private _dtu: number;
  public get dtu() {
    return this.getNumberAttribute('dtu');
  }
  public set dtu(value: number) {
    this._dtu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dtuInput() {
    return this._dtu
  }

  // edition - computed: false, optional: false, required: true
  private _edition: string;
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition
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

  // pool_size - computed: true, optional: true, required: false
  private _poolSize?: number;
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }
  public set poolSize(value: number) {
    this._poolSize = value;
  }
  public resetPoolSize() {
    this._poolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeInput() {
    return this._poolSize
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

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlElasticpoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SqlElasticpoolTimeouts ) {
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
      db_dtu_max: this._dbDtuMax,
      db_dtu_min: this._dbDtuMin,
      dtu: this._dtu,
      edition: this._edition,
      location: this._location,
      name: this._name,
      pool_size: this._poolSize,
      resource_group_name: this._resourceGroupName,
      server_name: this._serverName,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
