// https://www.terraform.io/docs/providers/azurerm/r/search_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface SearchServiceConfig extends TerraformMetaArguments {
  readonly allowedIps?: string[];
  readonly location: string;
  readonly name: string;
  readonly partitionCount?: number;
  readonly publicNetworkAccessEnabled?: boolean;
  readonly replicaCount?: number;
  readonly resourceGroupName: string;
  readonly sku: string;
  readonly tags?: { [key: string]: string };
  /** identity block */
  readonly identity?: SearchServiceIdentity[];
  /** timeouts block */
  readonly timeouts?: SearchServiceTimeouts;
}
export class SearchServiceQueryKeys extends ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface SearchServiceIdentity {
  readonly type: string;
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
    this._allowedIps = config.allowedIps;
    this._location = config.location;
    this._name = config.name;
    this._partitionCount = config.partitionCount;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._replicaCount = config.replicaCount;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._identity = config.identity;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_ips - computed: false, optional: true, required: false
  private _allowedIps?: string[];
  public get allowedIps() {
    return this.getListAttribute('allowed_ips');
  }
  public set allowedIps(value: string[] ) {
    this._allowedIps = value;
  }
  public resetAllowedIps() {
    this._allowedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpsInput() {
    return this._allowedIps
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

  // partition_count - computed: true, optional: true, required: false
  private _partitionCount?: number;
  public get partitionCount() {
    return this.getNumberAttribute('partition_count');
  }
  public set partitionCount(value: number) {
    this._partitionCount = value;
  }
  public resetPartitionCount() {
    this._partitionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionCountInput() {
    return this._partitionCount
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean;
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean ) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled
  }

  // query_keys - computed: true, optional: false, required: false
  public queryKeys(index: string) {
    return new SearchServiceQueryKeys(this, 'query_keys', index);
  }

  // replica_count - computed: true, optional: true, required: false
  private _replicaCount?: number;
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount
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

  // secondary_key - computed: true, optional: false, required: false
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
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

  // identity - computed: false, optional: true, required: false
  private _identity?: SearchServiceIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: SearchServiceIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SearchServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SearchServiceTimeouts ) {
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
      allowed_ips: this._allowedIps,
      location: this._location,
      name: this._name,
      partition_count: this._partitionCount,
      public_network_access_enabled: this._publicNetworkAccessEnabled,
      replica_count: this._replicaCount,
      resource_group_name: this._resourceGroupName,
      sku: this._sku,
      tags: this._tags,
      identity: this._identity,
      timeouts: this._timeouts,
    };
  }
}
