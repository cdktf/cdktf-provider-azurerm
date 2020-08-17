// https://www.terraform.io/docs/providers/azurerm/r/data_lake_analytics_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataLakeAnalyticsAccountConfig extends TerraformMetaArguments {
  readonly defaultStoreAccountName: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly tier?: string;
  /** timeouts block */
  readonly timeouts?: DataLakeAnalyticsAccountTimeouts;
}
export interface DataLakeAnalyticsAccountTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DataLakeAnalyticsAccount extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataLakeAnalyticsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_lake_analytics_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultStoreAccountName = config.defaultStoreAccountName;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._tier = config.tier;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_store_account_name - computed: false, optional: false, required: true
  private _defaultStoreAccountName: string;
  public get defaultStoreAccountName() {
    return this._defaultStoreAccountName;
  }
  public set defaultStoreAccountName(value: string) {
    this._defaultStoreAccountName = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string;
  public get tier() {
    return this._tier;
  }
  public set tier(value: string | undefined) {
    this._tier = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataLakeAnalyticsAccountTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataLakeAnalyticsAccountTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      default_store_account_name: this._defaultStoreAccountName,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      tier: this._tier,
      timeouts: this._timeouts,
    };
  }
}
