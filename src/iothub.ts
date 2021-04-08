// https://www.terraform.io/docs/providers/azurerm/r/iothub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IothubConfig extends cdktf.TerraformMetaArguments {
  readonly endpoint?: IothubEndpoint[];
  readonly enrichment?: IothubEnrichment[];
  readonly eventHubPartitionCount?: number;
  readonly eventHubRetentionInDays?: number;
  readonly location: string;
  readonly minTlsVersion?: string;
  readonly name: string;
  readonly publicNetworkAccessEnabled?: boolean;
  readonly resourceGroupName: string;
  readonly route?: IothubRoute[];
  readonly tags?: { [key: string]: string };
  /** fallback_route block */
  readonly fallbackRoute?: IothubFallbackRoute[];
  /** file_upload block */
  readonly fileUpload?: IothubFileUpload[];
  /** ip_filter_rule block */
  readonly ipFilterRule?: IothubIpFilterRule[];
  /** sku block */
  readonly sku: IothubSku[];
  /** timeouts block */
  readonly timeouts?: IothubTimeouts;
}
export interface IothubEndpoint {
  readonly batchFrequencyInSeconds?: number;
  readonly connectionString?: string;
  readonly containerName?: string;
  readonly encoding?: string;
  readonly fileNameFormat?: string;
  readonly maxChunkSizeInBytes?: number;
  readonly name?: string;
  readonly resourceGroupName?: string;
  readonly type?: string;
}

function iothubEndpointToTerraform(struct?: IothubEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_frequency_in_seconds: struct!.batchFrequencyInSeconds === undefined ? null : cdktf.numberToTerraform(struct!.batchFrequencyInSeconds),
    connection_string: struct!.connectionString === undefined ? null : cdktf.stringToTerraform(struct!.connectionString),
    container_name: struct!.containerName === undefined ? null : cdktf.stringToTerraform(struct!.containerName),
    encoding: struct!.encoding === undefined ? null : cdktf.stringToTerraform(struct!.encoding),
    file_name_format: struct!.fileNameFormat === undefined ? null : cdktf.stringToTerraform(struct!.fileNameFormat),
    max_chunk_size_in_bytes: struct!.maxChunkSizeInBytes === undefined ? null : cdktf.numberToTerraform(struct!.maxChunkSizeInBytes),
    name: struct!.name === undefined ? null : cdktf.stringToTerraform(struct!.name),
    resource_group_name: struct!.resourceGroupName === undefined ? null : cdktf.stringToTerraform(struct!.resourceGroupName),
    type: struct!.type === undefined ? null : cdktf.stringToTerraform(struct!.type),
  }
}

export interface IothubEnrichment {
  readonly endpointNames?: string[];
  readonly key?: string;
  readonly value?: string;
}

function iothubEnrichmentToTerraform(struct?: IothubEnrichment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_names: struct!.endpointNames === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.endpointNames),
    key: struct!.key === undefined ? null : cdktf.stringToTerraform(struct!.key),
    value: struct!.value === undefined ? null : cdktf.stringToTerraform(struct!.value),
  }
}

export interface IothubRoute {
  readonly condition?: string;
  readonly enabled?: boolean;
  readonly endpointNames?: string[];
  readonly name?: string;
  readonly source?: string;
}

function iothubRouteToTerraform(struct?: IothubRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition: struct!.condition === undefined ? null : cdktf.stringToTerraform(struct!.condition),
    enabled: struct!.enabled === undefined ? null : cdktf.booleanToTerraform(struct!.enabled),
    endpoint_names: struct!.endpointNames === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.endpointNames),
    name: struct!.name === undefined ? null : cdktf.stringToTerraform(struct!.name),
    source: struct!.source === undefined ? null : cdktf.stringToTerraform(struct!.source),
  }
}

export class IothubSharedAccessPolicy extends cdktf.ComplexComputedList {

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // secondary_key - computed: true, optional: false, required: false
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }
}
export interface IothubFallbackRoute {
  readonly condition?: string;
  readonly enabled?: boolean;
  readonly endpointNames?: string[];
  readonly source?: string;
}

function iothubFallbackRouteToTerraform(struct?: IothubFallbackRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    endpoint_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.endpointNames),
    source: cdktf.stringToTerraform(struct!.source),
  }
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

function iothubFileUploadToTerraform(struct?: IothubFileUpload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    default_ttl: cdktf.stringToTerraform(struct!.defaultTtl),
    lock_duration: cdktf.stringToTerraform(struct!.lockDuration),
    max_delivery_count: cdktf.numberToTerraform(struct!.maxDeliveryCount),
    notifications: cdktf.booleanToTerraform(struct!.notifications),
    sas_ttl: cdktf.stringToTerraform(struct!.sasTtl),
  }
}

export interface IothubIpFilterRule {
  readonly action: string;
  readonly ipMask: string;
  readonly name: string;
}

function iothubIpFilterRuleToTerraform(struct?: IothubIpFilterRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ip_mask: cdktf.stringToTerraform(struct!.ipMask),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface IothubSku {
  readonly capacity: number;
  readonly name: string;
}

function iothubSkuToTerraform(struct?: IothubSku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface IothubTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function iothubTimeoutsToTerraform(struct?: IothubTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Iothub extends cdktf.TerraformResource {

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
    this._endpoint = config.endpoint;
    this._enrichment = config.enrichment;
    this._eventHubPartitionCount = config.eventHubPartitionCount;
    this._eventHubRetentionInDays = config.eventHubRetentionInDays;
    this._location = config.location;
    this._minTlsVersion = config.minTlsVersion;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._route = config.route;
    this._tags = config.tags;
    this._fallbackRoute = config.fallbackRoute;
    this._fileUpload = config.fileUpload;
    this._ipFilterRule = config.ipFilterRule;
    this._sku = config.sku;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: IothubEndpoint[]
  public get endpoint(): IothubEndpoint[] {
    return this.interpolationForAttribute('endpoint') as any; // Getting the computed value is not yet implemented
  }
  public set endpoint(value: IothubEndpoint[]) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint
  }

  // enrichment - computed: true, optional: true, required: false
  private _enrichment?: IothubEnrichment[]
  public get enrichment(): IothubEnrichment[] {
    return this.interpolationForAttribute('enrichment') as any; // Getting the computed value is not yet implemented
  }
  public set enrichment(value: IothubEnrichment[]) {
    this._enrichment = value;
  }
  public resetEnrichment() {
    this._enrichment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentInput() {
    return this._enrichment
  }

  // event_hub_events_endpoint - computed: true, optional: false, required: false
  public get eventHubEventsEndpoint() {
    return this.getStringAttribute('event_hub_events_endpoint');
  }

  // event_hub_events_path - computed: true, optional: false, required: false
  public get eventHubEventsPath() {
    return this.getStringAttribute('event_hub_events_path');
  }

  // event_hub_operations_endpoint - computed: true, optional: false, required: false
  public get eventHubOperationsEndpoint() {
    return this.getStringAttribute('event_hub_operations_endpoint');
  }

  // event_hub_operations_path - computed: true, optional: false, required: false
  public get eventHubOperationsPath() {
    return this.getStringAttribute('event_hub_operations_path');
  }

  // event_hub_partition_count - computed: true, optional: true, required: false
  private _eventHubPartitionCount?: number;
  public get eventHubPartitionCount() {
    return this.getNumberAttribute('event_hub_partition_count');
  }
  public set eventHubPartitionCount(value: number) {
    this._eventHubPartitionCount = value;
  }
  public resetEventHubPartitionCount() {
    this._eventHubPartitionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubPartitionCountInput() {
    return this._eventHubPartitionCount
  }

  // event_hub_retention_in_days - computed: true, optional: true, required: false
  private _eventHubRetentionInDays?: number;
  public get eventHubRetentionInDays() {
    return this.getNumberAttribute('event_hub_retention_in_days');
  }
  public set eventHubRetentionInDays(value: number) {
    this._eventHubRetentionInDays = value;
  }
  public resetEventHubRetentionInDays() {
    this._eventHubRetentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubRetentionInDaysInput() {
    return this._eventHubRetentionInDays
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string;
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string ) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion
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

  // route - computed: true, optional: true, required: false
  private _route?: IothubRoute[]
  public get route(): IothubRoute[] {
    return this.interpolationForAttribute('route') as any; // Getting the computed value is not yet implemented
  }
  public set route(value: IothubRoute[]) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route
  }

  // shared_access_policy - computed: true, optional: false, required: false
  public sharedAccessPolicy(index: string) {
    return new IothubSharedAccessPolicy(this, 'shared_access_policy', index);
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // fallback_route - computed: false, optional: true, required: false
  private _fallbackRoute?: IothubFallbackRoute[];
  public get fallbackRoute() {
    return this.interpolationForAttribute('fallback_route') as any;
  }
  public set fallbackRoute(value: IothubFallbackRoute[] ) {
    this._fallbackRoute = value;
  }
  public resetFallbackRoute() {
    this._fallbackRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackRouteInput() {
    return this._fallbackRoute
  }

  // file_upload - computed: false, optional: true, required: false
  private _fileUpload?: IothubFileUpload[];
  public get fileUpload() {
    return this.interpolationForAttribute('file_upload') as any;
  }
  public set fileUpload(value: IothubFileUpload[] ) {
    this._fileUpload = value;
  }
  public resetFileUpload() {
    this._fileUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUploadInput() {
    return this._fileUpload
  }

  // ip_filter_rule - computed: false, optional: true, required: false
  private _ipFilterRule?: IothubIpFilterRule[];
  public get ipFilterRule() {
    return this.interpolationForAttribute('ip_filter_rule') as any;
  }
  public set ipFilterRule(value: IothubIpFilterRule[] ) {
    this._ipFilterRule = value;
  }
  public resetIpFilterRule() {
    this._ipFilterRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterRuleInput() {
    return this._ipFilterRule
  }

  // sku - computed: false, optional: false, required: true
  private _sku: IothubSku[];
  public get sku() {
    return this.interpolationForAttribute('sku') as any;
  }
  public set sku(value: IothubSku[]) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IothubTimeouts ) {
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
      endpoint: cdktf.listMapper(iothubEndpointToTerraform)(this._endpoint),
      enrichment: cdktf.listMapper(iothubEnrichmentToTerraform)(this._enrichment),
      event_hub_partition_count: cdktf.numberToTerraform(this._eventHubPartitionCount),
      event_hub_retention_in_days: cdktf.numberToTerraform(this._eventHubRetentionInDays),
      location: cdktf.stringToTerraform(this._location),
      min_tls_version: cdktf.stringToTerraform(this._minTlsVersion),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      route: cdktf.listMapper(iothubRouteToTerraform)(this._route),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      fallback_route: cdktf.listMapper(iothubFallbackRouteToTerraform)(this._fallbackRoute),
      file_upload: cdktf.listMapper(iothubFileUploadToTerraform)(this._fileUpload),
      ip_filter_rule: cdktf.listMapper(iothubIpFilterRuleToTerraform)(this._ipFilterRule),
      sku: cdktf.listMapper(iothubSkuToTerraform)(this._sku),
      timeouts: iothubTimeoutsToTerraform(this._timeouts),
    };
  }
}
