// https://www.terraform.io/docs/providers/azurerm/r/iothub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface IothubConfig extends TerraformMetaArguments {
  readonly eventHubPartitionCount?: number;
  readonly eventHubRetentionInDays?: number;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** endpoint block */
  readonly endpoint?: IothubEndpoint[];
  /** fallback_route block */
  readonly fallbackRoute?: IothubFallbackRoute[];
  /** file_upload block */
  readonly fileUpload?: IothubFileUpload[];
  /** ip_filter_rule block */
  readonly ipFilterRule?: IothubIpFilterRule[];
  /** route block */
  readonly route?: IothubRoute[];
  /** sku block */
  readonly sku: IothubSku[];
  /** timeouts block */
  readonly timeouts?: IothubTimeouts;
}
export class IothubSharedAccessPolicy extends ComplexComputedList {

  // key_name - computed: true, optional: false, required: true
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // permissions - computed: true, optional: false, required: true
  public get permissions() {
    return this.getStringAttribute('permissions');
  }

  // primary_key - computed: true, optional: false, required: true
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // secondary_key - computed: true, optional: false, required: true
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }
}
export interface IothubEndpoint {
  readonly batchFrequencyInSeconds?: number;
  readonly connectionString: string;
  readonly containerName?: string;
  readonly encoding?: string;
  readonly fileNameFormat?: string;
  readonly maxChunkSizeInBytes?: number;
  readonly name: string;
  readonly type: string;
}
export interface IothubFallbackRoute {
  readonly condition?: string;
  readonly enabled?: boolean;
  readonly endpointNames?: string[];
  readonly source?: string;
}
export interface IothubFileUpload {
  readonly connectionString: string;
  readonly containerName: string;
  readonly defaultTtl?: string;
  readonly lockDuration?: string;
  readonly maxDeliveryCount?: number;
  readonly notifications?: boolean;
  readonly sasTtl?: string;
}
export interface IothubIpFilterRule {
  readonly action: string;
  readonly ipMask: string;
  readonly name: string;
}
export interface IothubRoute {
  readonly condition?: string;
  readonly enabled: boolean;
  readonly endpointNames: string[];
  readonly name: string;
  readonly source: string;
}
export interface IothubSku {
  readonly capacity: number;
  readonly name: string;
}
export interface IothubTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class Iothub extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IothubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eventHubPartitionCount = config.eventHubPartitionCount;
    this._eventHubRetentionInDays = config.eventHubRetentionInDays;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._endpoint = config.endpoint;
    this._fallbackRoute = config.fallbackRoute;
    this._fileUpload = config.fileUpload;
    this._ipFilterRule = config.ipFilterRule;
    this._route = config.route;
    this._sku = config.sku;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_hub_events_endpoint - computed: true, optional: false, required: true
  public get eventHubEventsEndpoint() {
    return this.getStringAttribute('event_hub_events_endpoint');
  }

  // event_hub_events_path - computed: true, optional: false, required: true
  public get eventHubEventsPath() {
    return this.getStringAttribute('event_hub_events_path');
  }

  // event_hub_operations_endpoint - computed: true, optional: false, required: true
  public get eventHubOperationsEndpoint() {
    return this.getStringAttribute('event_hub_operations_endpoint');
  }

  // event_hub_operations_path - computed: true, optional: false, required: true
  public get eventHubOperationsPath() {
    return this.getStringAttribute('event_hub_operations_path');
  }

  // event_hub_partition_count - computed: true, optional: true, required: false
  private _eventHubPartitionCount?: number;
  public get eventHubPartitionCount() {
    return this._eventHubPartitionCount ?? this.getNumberAttribute('event_hub_partition_count');
  }
  public set eventHubPartitionCount(value: number | undefined) {
    this._eventHubPartitionCount = value;
  }

  // event_hub_retention_in_days - computed: true, optional: true, required: false
  private _eventHubRetentionInDays?: number;
  public get eventHubRetentionInDays() {
    return this._eventHubRetentionInDays ?? this.getNumberAttribute('event_hub_retention_in_days');
  }
  public set eventHubRetentionInDays(value: number | undefined) {
    this._eventHubRetentionInDays = value;
  }

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // shared_access_policy - computed: true, optional: false, required: true
  public sharedAccessPolicy(index: string) {
    return new IothubSharedAccessPolicy(this, 'shared_access_policy', index);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: IothubEndpoint[];
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: IothubEndpoint[] | undefined) {
    this._endpoint = value;
  }

  // fallback_route - computed: false, optional: true, required: false
  private _fallbackRoute?: IothubFallbackRoute[];
  public get fallbackRoute() {
    return this._fallbackRoute;
  }
  public set fallbackRoute(value: IothubFallbackRoute[] | undefined) {
    this._fallbackRoute = value;
  }

  // file_upload - computed: false, optional: true, required: false
  private _fileUpload?: IothubFileUpload[];
  public get fileUpload() {
    return this._fileUpload;
  }
  public set fileUpload(value: IothubFileUpload[] | undefined) {
    this._fileUpload = value;
  }

  // ip_filter_rule - computed: false, optional: true, required: false
  private _ipFilterRule?: IothubIpFilterRule[];
  public get ipFilterRule() {
    return this._ipFilterRule;
  }
  public set ipFilterRule(value: IothubIpFilterRule[] | undefined) {
    this._ipFilterRule = value;
  }

  // route - computed: false, optional: true, required: false
  private _route?: IothubRoute[];
  public get route() {
    return this._route;
  }
  public set route(value: IothubRoute[] | undefined) {
    this._route = value;
  }

  // sku - computed: false, optional: false, required: true
  private _sku: IothubSku[];
  public get sku() {
    return this._sku;
  }
  public set sku(value: IothubSku[]) {
    this._sku = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IothubTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_hub_partition_count: this._eventHubPartitionCount,
      event_hub_retention_in_days: this._eventHubRetentionInDays,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      endpoint: this._endpoint,
      fallback_route: this._fallbackRoute,
      file_upload: this._fileUpload,
      ip_filter_rule: this._ipFilterRule,
      route: this._route,
      sku: this._sku,
      timeouts: this._timeouts,
    };
  }
}
