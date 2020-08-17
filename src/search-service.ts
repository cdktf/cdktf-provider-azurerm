// https://www.terraform.io/docs/providers/azurerm/r/search_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface SearchServiceConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly partitionCount?: number;
  readonly replicaCount?: number;
  readonly resourceGroupName: string;
  readonly sku: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: SearchServiceTimeouts;
}
export class SearchServiceQueryKeys extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface SearchServiceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SearchService extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SearchServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_search_service',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._partitionCount = config.partitionCount;
    this._replicaCount = config.replicaCount;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
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

  // partition_count - computed: true, optional: true, required: false
  private _partitionCount?: number;
  public get partitionCount() {
    return this._partitionCount ?? this.getNumberAttribute('partition_count');
  }
  public set partitionCount(value: number | undefined) {
    this._partitionCount = value;
  }

  // primary_key - computed: true, optional: false, required: true
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // query_keys - computed: true, optional: false, required: true
  public queryKeys(index: string) {
    return new SearchServiceQueryKeys(this, 'query_keys', index);
  }

  // replica_count - computed: true, optional: true, required: false
  private _replicaCount?: number;
  public get replicaCount() {
    return this._replicaCount ?? this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number | undefined) {
    this._replicaCount = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_key - computed: true, optional: false, required: true
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string) {
    this._sku = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SearchServiceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SearchServiceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      partition_count: this._partitionCount,
      replica_count: this._replicaCount,
      resource_group_name: this._resourceGroupName,
      sku: this._sku,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
