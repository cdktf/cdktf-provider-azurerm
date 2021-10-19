// https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConnectionMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#auto_start NetworkConnectionMonitor#auto_start}
  */
  readonly autoStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#interval_in_seconds NetworkConnectionMonitor#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#location NetworkConnectionMonitor#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#network_watcher_id NetworkConnectionMonitor#network_watcher_id}
  */
  readonly networkWatcherId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#notes NetworkConnectionMonitor#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#output_workspace_resource_ids NetworkConnectionMonitor#output_workspace_resource_ids}
  */
  readonly outputWorkspaceResourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#tags NetworkConnectionMonitor#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#destination NetworkConnectionMonitor#destination}
  */
  readonly destination?: NetworkConnectionMonitorDestination;
  /**
  * endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#endpoint NetworkConnectionMonitor#endpoint}
  */
  readonly endpoint: NetworkConnectionMonitorEndpoint[];
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#source NetworkConnectionMonitor#source}
  */
  readonly source?: NetworkConnectionMonitorSource;
  /**
  * test_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#test_configuration NetworkConnectionMonitor#test_configuration}
  */
  readonly testConfiguration: NetworkConnectionMonitorTestConfiguration[];
  /**
  * test_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#test_group NetworkConnectionMonitor#test_group}
  */
  readonly testGroup: NetworkConnectionMonitorTestGroup[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#timeouts NetworkConnectionMonitor#timeouts}
  */
  readonly timeouts?: NetworkConnectionMonitorTimeouts;
}
export interface NetworkConnectionMonitorDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#address NetworkConnectionMonitor#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#port NetworkConnectionMonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#virtual_machine_id NetworkConnectionMonitor#virtual_machine_id}
  */
  readonly virtualMachineId?: string;
}

function networkConnectionMonitorDestinationToTerraform(struct?: NetworkConnectionMonitorDestinationOutputReference | NetworkConnectionMonitorDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
    virtual_machine_id: cdktf.stringToTerraform(struct!.virtualMachineId),
  }
}

export class NetworkConnectionMonitorDestinationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // address - computed: true, optional: true, required: false
  private _address?: string | undefined; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address
  }

  // port - computed: true, optional: true, required: false
  private _port?: number | undefined; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // virtual_machine_id - computed: true, optional: true, required: false
  private _virtualMachineId?: string | undefined; 
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string | undefined) {
    this._virtualMachineId = value;
  }
  public resetVirtualMachineId() {
    this._virtualMachineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId
  }
}
export interface NetworkConnectionMonitorEndpointFilterItem {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#address NetworkConnectionMonitor#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#type NetworkConnectionMonitor#type}
  */
  readonly type?: string;
}

function networkConnectionMonitorEndpointFilterItemToTerraform(struct?: NetworkConnectionMonitorEndpointFilterItem): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface NetworkConnectionMonitorEndpointFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#type NetworkConnectionMonitor#type}
  */
  readonly type?: string;
  /**
  * item block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#item NetworkConnectionMonitor#item}
  */
  readonly item?: NetworkConnectionMonitorEndpointFilterItem[];
}

function networkConnectionMonitorEndpointFilterToTerraform(struct?: NetworkConnectionMonitorEndpointFilterOutputReference | NetworkConnectionMonitorEndpointFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    item: cdktf.listMapper(networkConnectionMonitorEndpointFilterItemToTerraform)(struct!.item),
  }
}

export class NetworkConnectionMonitorEndpointFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // item - computed: false, optional: true, required: false
  private _item?: NetworkConnectionMonitorEndpointFilterItem[] | undefined; 
  public get item() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('item') as any;
  }
  public set item(value: NetworkConnectionMonitorEndpointFilterItem[] | undefined) {
    this._item = value;
  }
  public resetItem() {
    this._item = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item
  }
}
export interface NetworkConnectionMonitorEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#address NetworkConnectionMonitor#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#coverage_level NetworkConnectionMonitor#coverage_level}
  */
  readonly coverageLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#excluded_ip_addresses NetworkConnectionMonitor#excluded_ip_addresses}
  */
  readonly excludedIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#included_ip_addresses NetworkConnectionMonitor#included_ip_addresses}
  */
  readonly includedIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#target_resource_id NetworkConnectionMonitor#target_resource_id}
  */
  readonly targetResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#target_resource_type NetworkConnectionMonitor#target_resource_type}
  */
  readonly targetResourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#virtual_machine_id NetworkConnectionMonitor#virtual_machine_id}
  */
  readonly virtualMachineId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#filter NetworkConnectionMonitor#filter}
  */
  readonly filter?: NetworkConnectionMonitorEndpointFilter;
}

function networkConnectionMonitorEndpointToTerraform(struct?: NetworkConnectionMonitorEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    coverage_level: cdktf.stringToTerraform(struct!.coverageLevel),
    excluded_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedIpAddresses),
    included_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedIpAddresses),
    name: cdktf.stringToTerraform(struct!.name),
    target_resource_id: cdktf.stringToTerraform(struct!.targetResourceId),
    target_resource_type: cdktf.stringToTerraform(struct!.targetResourceType),
    virtual_machine_id: cdktf.stringToTerraform(struct!.virtualMachineId),
    filter: networkConnectionMonitorEndpointFilterToTerraform(struct!.filter),
  }
}

export interface NetworkConnectionMonitorSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#port NetworkConnectionMonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#virtual_machine_id NetworkConnectionMonitor#virtual_machine_id}
  */
  readonly virtualMachineId?: string;
}

function networkConnectionMonitorSourceToTerraform(struct?: NetworkConnectionMonitorSourceOutputReference | NetworkConnectionMonitorSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    virtual_machine_id: cdktf.stringToTerraform(struct!.virtualMachineId),
  }
}

export class NetworkConnectionMonitorSourceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // port - computed: true, optional: true, required: false
  private _port?: number | undefined; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // virtual_machine_id - computed: true, optional: true, required: false
  private _virtualMachineId?: string | undefined; 
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string | undefined) {
    this._virtualMachineId = value;
  }
  public resetVirtualMachineId() {
    this._virtualMachineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId
  }
}
export interface NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#value NetworkConnectionMonitor#value}
  */
  readonly value: string;
}

function networkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderToTerraform(struct?: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface NetworkConnectionMonitorTestConfigurationHttpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#method NetworkConnectionMonitor#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#path NetworkConnectionMonitor#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#port NetworkConnectionMonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#prefer_https NetworkConnectionMonitor#prefer_https}
  */
  readonly preferHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#valid_status_code_ranges NetworkConnectionMonitor#valid_status_code_ranges}
  */
  readonly validStatusCodeRanges?: string[];
  /**
  * request_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#request_header NetworkConnectionMonitor#request_header}
  */
  readonly requestHeader?: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader[];
}

function networkConnectionMonitorTestConfigurationHttpConfigurationToTerraform(struct?: NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference | NetworkConnectionMonitorTestConfigurationHttpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    prefer_https: cdktf.booleanToTerraform(struct!.preferHttps),
    valid_status_code_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.validStatusCodeRanges),
    request_header: cdktf.listMapper(networkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderToTerraform)(struct!.requestHeader),
  }
}

export class NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // method - computed: false, optional: true, required: false
  private _method?: string | undefined; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: false, optional: true, required: false
  private _port?: number | undefined; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // prefer_https - computed: false, optional: true, required: false
  private _preferHttps?: boolean | cdktf.IResolvable | undefined; 
  public get preferHttps() {
    return this.getBooleanAttribute('prefer_https') as any;
  }
  public set preferHttps(value: boolean | cdktf.IResolvable | undefined) {
    this._preferHttps = value;
  }
  public resetPreferHttps() {
    this._preferHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferHttpsInput() {
    return this._preferHttps
  }

  // valid_status_code_ranges - computed: false, optional: true, required: false
  private _validStatusCodeRanges?: string[] | undefined; 
  public get validStatusCodeRanges() {
    return this.getListAttribute('valid_status_code_ranges');
  }
  public set validStatusCodeRanges(value: string[] | undefined) {
    this._validStatusCodeRanges = value;
  }
  public resetValidStatusCodeRanges() {
    this._validStatusCodeRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validStatusCodeRangesInput() {
    return this._validStatusCodeRanges
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader?: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader[] | undefined; 
  public get requestHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_header') as any;
  }
  public set requestHeader(value: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader[] | undefined) {
    this._requestHeader = value;
  }
  public resetRequestHeader() {
    this._requestHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader
  }
}
export interface NetworkConnectionMonitorTestConfigurationIcmpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}
  */
  readonly traceRouteEnabled?: boolean | cdktf.IResolvable;
}

function networkConnectionMonitorTestConfigurationIcmpConfigurationToTerraform(struct?: NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference | NetworkConnectionMonitorTestConfigurationIcmpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trace_route_enabled: cdktf.booleanToTerraform(struct!.traceRouteEnabled),
  }
}

export class NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // trace_route_enabled - computed: false, optional: true, required: false
  private _traceRouteEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get traceRouteEnabled() {
    return this.getBooleanAttribute('trace_route_enabled') as any;
  }
  public set traceRouteEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._traceRouteEnabled = value;
  }
  public resetTraceRouteEnabled() {
    this._traceRouteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceRouteEnabledInput() {
    return this._traceRouteEnabled
  }
}
export interface NetworkConnectionMonitorTestConfigurationSuccessThreshold {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#checks_failed_percent NetworkConnectionMonitor#checks_failed_percent}
  */
  readonly checksFailedPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#round_trip_time_ms NetworkConnectionMonitor#round_trip_time_ms}
  */
  readonly roundTripTimeMs?: number;
}

function networkConnectionMonitorTestConfigurationSuccessThresholdToTerraform(struct?: NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference | NetworkConnectionMonitorTestConfigurationSuccessThreshold): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checks_failed_percent: cdktf.numberToTerraform(struct!.checksFailedPercent),
    round_trip_time_ms: cdktf.numberToTerraform(struct!.roundTripTimeMs),
  }
}

export class NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // checks_failed_percent - computed: false, optional: true, required: false
  private _checksFailedPercent?: number | undefined; 
  public get checksFailedPercent() {
    return this.getNumberAttribute('checks_failed_percent');
  }
  public set checksFailedPercent(value: number | undefined) {
    this._checksFailedPercent = value;
  }
  public resetChecksFailedPercent() {
    this._checksFailedPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksFailedPercentInput() {
    return this._checksFailedPercent
  }

  // round_trip_time_ms - computed: false, optional: true, required: false
  private _roundTripTimeMs?: number | undefined; 
  public get roundTripTimeMs() {
    return this.getNumberAttribute('round_trip_time_ms');
  }
  public set roundTripTimeMs(value: number | undefined) {
    this._roundTripTimeMs = value;
  }
  public resetRoundTripTimeMs() {
    this._roundTripTimeMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundTripTimeMsInput() {
    return this._roundTripTimeMs
  }
}
export interface NetworkConnectionMonitorTestConfigurationTcpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#destination_port_behavior NetworkConnectionMonitor#destination_port_behavior}
  */
  readonly destinationPortBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#port NetworkConnectionMonitor#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}
  */
  readonly traceRouteEnabled?: boolean | cdktf.IResolvable;
}

function networkConnectionMonitorTestConfigurationTcpConfigurationToTerraform(struct?: NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference | NetworkConnectionMonitorTestConfigurationTcpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_port_behavior: cdktf.stringToTerraform(struct!.destinationPortBehavior),
    port: cdktf.numberToTerraform(struct!.port),
    trace_route_enabled: cdktf.booleanToTerraform(struct!.traceRouteEnabled),
  }
}

export class NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // destination_port_behavior - computed: false, optional: true, required: false
  private _destinationPortBehavior?: string | undefined; 
  public get destinationPortBehavior() {
    return this.getStringAttribute('destination_port_behavior');
  }
  public set destinationPortBehavior(value: string | undefined) {
    this._destinationPortBehavior = value;
  }
  public resetDestinationPortBehavior() {
    this._destinationPortBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortBehaviorInput() {
    return this._destinationPortBehavior
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // trace_route_enabled - computed: false, optional: true, required: false
  private _traceRouteEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get traceRouteEnabled() {
    return this.getBooleanAttribute('trace_route_enabled') as any;
  }
  public set traceRouteEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._traceRouteEnabled = value;
  }
  public resetTraceRouteEnabled() {
    this._traceRouteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceRouteEnabledInput() {
    return this._traceRouteEnabled
  }
}
export interface NetworkConnectionMonitorTestConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#preferred_ip_version NetworkConnectionMonitor#preferred_ip_version}
  */
  readonly preferredIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#protocol NetworkConnectionMonitor#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#test_frequency_in_seconds NetworkConnectionMonitor#test_frequency_in_seconds}
  */
  readonly testFrequencyInSeconds?: number;
  /**
  * http_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#http_configuration NetworkConnectionMonitor#http_configuration}
  */
  readonly httpConfiguration?: NetworkConnectionMonitorTestConfigurationHttpConfiguration;
  /**
  * icmp_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#icmp_configuration NetworkConnectionMonitor#icmp_configuration}
  */
  readonly icmpConfiguration?: NetworkConnectionMonitorTestConfigurationIcmpConfiguration;
  /**
  * success_threshold block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#success_threshold NetworkConnectionMonitor#success_threshold}
  */
  readonly successThreshold?: NetworkConnectionMonitorTestConfigurationSuccessThreshold;
  /**
  * tcp_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#tcp_configuration NetworkConnectionMonitor#tcp_configuration}
  */
  readonly tcpConfiguration?: NetworkConnectionMonitorTestConfigurationTcpConfiguration;
}

function networkConnectionMonitorTestConfigurationToTerraform(struct?: NetworkConnectionMonitorTestConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    preferred_ip_version: cdktf.stringToTerraform(struct!.preferredIpVersion),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    test_frequency_in_seconds: cdktf.numberToTerraform(struct!.testFrequencyInSeconds),
    http_configuration: networkConnectionMonitorTestConfigurationHttpConfigurationToTerraform(struct!.httpConfiguration),
    icmp_configuration: networkConnectionMonitorTestConfigurationIcmpConfigurationToTerraform(struct!.icmpConfiguration),
    success_threshold: networkConnectionMonitorTestConfigurationSuccessThresholdToTerraform(struct!.successThreshold),
    tcp_configuration: networkConnectionMonitorTestConfigurationTcpConfigurationToTerraform(struct!.tcpConfiguration),
  }
}

export interface NetworkConnectionMonitorTestGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#destination_endpoints NetworkConnectionMonitor#destination_endpoints}
  */
  readonly destinationEndpoints: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#enabled NetworkConnectionMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#source_endpoints NetworkConnectionMonitor#source_endpoints}
  */
  readonly sourceEndpoints: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#test_configuration_names NetworkConnectionMonitor#test_configuration_names}
  */
  readonly testConfigurationNames: string[];
}

function networkConnectionMonitorTestGroupToTerraform(struct?: NetworkConnectionMonitorTestGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_endpoints: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationEndpoints),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    source_endpoints: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceEndpoints),
    test_configuration_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.testConfigurationNames),
  }
}

export interface NetworkConnectionMonitorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#create NetworkConnectionMonitor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#delete NetworkConnectionMonitor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#read NetworkConnectionMonitor#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html#update NetworkConnectionMonitor#update}
  */
  readonly update?: string;
}

function networkConnectionMonitorTimeoutsToTerraform(struct?: NetworkConnectionMonitorTimeoutsOutputReference | NetworkConnectionMonitorTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class NetworkConnectionMonitorTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html azurerm_network_connection_monitor}
*/
export class NetworkConnectionMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_network_connection_monitor";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html azurerm_network_connection_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConnectionMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConnectionMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_connection_monitor',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoStart = config.autoStart;
    this._intervalInSeconds = config.intervalInSeconds;
    this._location = config.location;
    this._name = config.name;
    this._networkWatcherId = config.networkWatcherId;
    this._notes = config.notes;
    this._outputWorkspaceResourceIds = config.outputWorkspaceResourceIds;
    this._tags = config.tags;
    this._destination = config.destination;
    this._endpoint = config.endpoint;
    this._source = config.source;
    this._testConfiguration = config.testConfiguration;
    this._testGroup = config.testGroup;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_start - computed: true, optional: true, required: false
  private _autoStart?: boolean | cdktf.IResolvable | undefined; 
  public get autoStart() {
    return this.getBooleanAttribute('auto_start') as any;
  }
  public set autoStart(value: boolean | cdktf.IResolvable | undefined) {
    this._autoStart = value;
  }
  public resetAutoStart() {
    this._autoStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStartInput() {
    return this._autoStart
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval_in_seconds - computed: true, optional: true, required: false
  private _intervalInSeconds?: number | undefined; 
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number | undefined) {
    this._intervalInSeconds = value;
  }
  public resetIntervalInSeconds() {
    this._intervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInSecondsInput() {
    return this._intervalInSeconds
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
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
  private _name?: string; 
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

  // network_watcher_id - computed: false, optional: false, required: true
  private _networkWatcherId?: string; 
  public get networkWatcherId() {
    return this.getStringAttribute('network_watcher_id');
  }
  public set networkWatcherId(value: string) {
    this._networkWatcherId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkWatcherIdInput() {
    return this._networkWatcherId
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string | undefined; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string | undefined) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes
  }

  // output_workspace_resource_ids - computed: true, optional: true, required: false
  private _outputWorkspaceResourceIds?: string[] | undefined; 
  public get outputWorkspaceResourceIds() {
    return this.getListAttribute('output_workspace_resource_ids');
  }
  public set outputWorkspaceResourceIds(value: string[] | undefined) {
    this._outputWorkspaceResourceIds = value;
  }
  public resetOutputWorkspaceResourceIds() {
    this._outputWorkspaceResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputWorkspaceResourceIdsInput() {
    return this._outputWorkspaceResourceIds
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: NetworkConnectionMonitorDestination | undefined; 
  private __destinationOutput = new NetworkConnectionMonitorDestinationOutputReference(this as any, "destination", true);
  public get destination() {
    return this.__destinationOutput;
  }
  public putDestination(value: NetworkConnectionMonitorDestination | undefined) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: NetworkConnectionMonitorEndpoint[]; 
  public get endpoint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('endpoint') as any;
  }
  public set endpoint(value: NetworkConnectionMonitorEndpoint[]) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint
  }

  // source - computed: false, optional: true, required: false
  private _source?: NetworkConnectionMonitorSource | undefined; 
  private __sourceOutput = new NetworkConnectionMonitorSourceOutputReference(this as any, "source", true);
  public get source() {
    return this.__sourceOutput;
  }
  public putSource(value: NetworkConnectionMonitorSource | undefined) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // test_configuration - computed: false, optional: false, required: true
  private _testConfiguration?: NetworkConnectionMonitorTestConfiguration[]; 
  public get testConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('test_configuration') as any;
  }
  public set testConfiguration(value: NetworkConnectionMonitorTestConfiguration[]) {
    this._testConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testConfigurationInput() {
    return this._testConfiguration
  }

  // test_group - computed: false, optional: false, required: true
  private _testGroup?: NetworkConnectionMonitorTestGroup[]; 
  public get testGroup() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('test_group') as any;
  }
  public set testGroup(value: NetworkConnectionMonitorTestGroup[]) {
    this._testGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testGroupInput() {
    return this._testGroup
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkConnectionMonitorTimeouts | undefined; 
  private __timeoutsOutput = new NetworkConnectionMonitorTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NetworkConnectionMonitorTimeouts | undefined) {
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
      auto_start: cdktf.booleanToTerraform(this._autoStart),
      interval_in_seconds: cdktf.numberToTerraform(this._intervalInSeconds),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_watcher_id: cdktf.stringToTerraform(this._networkWatcherId),
      notes: cdktf.stringToTerraform(this._notes),
      output_workspace_resource_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._outputWorkspaceResourceIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      destination: networkConnectionMonitorDestinationToTerraform(this._destination),
      endpoint: cdktf.listMapper(networkConnectionMonitorEndpointToTerraform)(this._endpoint),
      source: networkConnectionMonitorSourceToTerraform(this._source),
      test_configuration: cdktf.listMapper(networkConnectionMonitorTestConfigurationToTerraform)(this._testConfiguration),
      test_group: cdktf.listMapper(networkConnectionMonitorTestGroupToTerraform)(this._testGroup),
      timeouts: networkConnectionMonitorTimeoutsToTerraform(this._timeouts),
    };
  }
}
