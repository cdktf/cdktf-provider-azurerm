// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_dns_zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermDnsZoneConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermDnsZoneTimeouts;
}
export interface DataAzurermDnsZoneTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermDnsZone extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermDnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dns_zone',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_number_of_record_sets - computed: true, optional: false, required: true
  public get maxNumberOfRecordSets() {
    return this.getNumberAttribute('max_number_of_record_sets');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // name_servers - computed: true, optional: false, required: true
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // number_of_record_sets - computed: true, optional: false, required: true
  public get numberOfRecordSets() {
    return this.getNumberAttribute('number_of_record_sets');
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string;
  public get resourceGroupName() {
    return this._resourceGroupName ?? this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string | undefined) {
    this._resourceGroupName = value;
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDnsZoneTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermDnsZoneTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
