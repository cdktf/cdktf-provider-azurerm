// https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConnectionMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#auto_start NetworkConnectionMonitor#auto_start}
  */
  readonly autoStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#interval_in_seconds NetworkConnectionMonitor#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#location NetworkConnectionMonitor#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#network_watcher_id NetworkConnectionMonitor#network_watcher_id}
  */
  readonly networkWatcherId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#notes NetworkConnectionMonitor#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#output_workspace_resource_ids NetworkConnectionMonitor#output_workspace_resource_ids}
  */
  readonly outputWorkspaceResourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#tags NetworkConnectionMonitor#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#destination NetworkConnectionMonitor#destination}
  */
  readonly destination?: NetworkConnectionMonitorDestination;
  /**
  * endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#endpoint NetworkConnectionMonitor#endpoint}
  */
  readonly endpoint: NetworkConnectionMonitorEndpoint[] | cdktf.IResolvable;
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#source NetworkConnectionMonitor#source}
  */
  readonly source?: NetworkConnectionMonitorSource;
  /**
  * test_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#test_configuration NetworkConnectionMonitor#test_configuration}
  */
  readonly testConfiguration: NetworkConnectionMonitorTestConfiguration[] | cdktf.IResolvable;
  /**
  * test_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#test_group NetworkConnectionMonitor#test_group}
  */
  readonly testGroup: NetworkConnectionMonitorTestGroup[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#timeouts NetworkConnectionMonitor#timeouts}
  */
  readonly timeouts?: NetworkConnectionMonitorTimeouts;
}
export interface NetworkConnectionMonitorDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#address NetworkConnectionMonitor#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#port NetworkConnectionMonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#virtual_machine_id NetworkConnectionMonitor#virtual_machine_id}
  */
  readonly virtualMachineId?: string;
}

export function networkConnectionMonitorDestinationToTerraform(struct?: NetworkConnectionMonitorDestinationOutputReference | NetworkConnectionMonitorDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectionMonitorDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualMachineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineId = this._virtualMachineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._port = undefined;
      this._virtualMachineId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._port = value.port;
      this._virtualMachineId = value.virtualMachineId;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // virtual_machine_id - computed: true, optional: true, required: false
  private _virtualMachineId?: string; 
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  public resetVirtualMachineId() {
    this._virtualMachineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId;
  }
}
export interface NetworkConnectionMonitorEndpointFilterItem {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#address NetworkConnectionMonitor#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#type NetworkConnectionMonitor#type}
  */
  readonly type?: string;
}

export function networkConnectionMonitorEndpointFilterItemToTerraform(struct?: NetworkConnectionMonitorEndpointFilterItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#type NetworkConnectionMonitor#type}
  */
  readonly type?: string;
  /**
  * item block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#item NetworkConnectionMonitor#item}
  */
  readonly item?: NetworkConnectionMonitorEndpointFilterItem[] | cdktf.IResolvable;
}

export function networkConnectionMonitorEndpointFilterToTerraform(struct?: NetworkConnectionMonitorEndpointFilterOutputReference | NetworkConnectionMonitorEndpointFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    item: cdktf.listMapper(networkConnectionMonitorEndpointFilterItemToTerraform)(struct!.item),
  }
}

export class NetworkConnectionMonitorEndpointFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectionMonitorEndpointFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._item !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorEndpointFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._item = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._item = value.item;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // item - computed: false, optional: true, required: false
  private _item?: NetworkConnectionMonitorEndpointFilterItem[] | cdktf.IResolvable; 
  public get item() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('item')));
  }
  public set item(value: NetworkConnectionMonitorEndpointFilterItem[] | cdktf.IResolvable) {
    this._item = value;
  }
  public resetItem() {
    this._item = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item;
  }
}
export interface NetworkConnectionMonitorEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#address NetworkConnectionMonitor#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#coverage_level NetworkConnectionMonitor#coverage_level}
  */
  readonly coverageLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#excluded_ip_addresses NetworkConnectionMonitor#excluded_ip_addresses}
  */
  readonly excludedIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#included_ip_addresses NetworkConnectionMonitor#included_ip_addresses}
  */
  readonly includedIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#target_resource_id NetworkConnectionMonitor#target_resource_id}
  */
  readonly targetResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#target_resource_type NetworkConnectionMonitor#target_resource_type}
  */
  readonly targetResourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#virtual_machine_id NetworkConnectionMonitor#virtual_machine_id}
  */
  readonly virtualMachineId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#filter NetworkConnectionMonitor#filter}
  */
  readonly filter?: NetworkConnectionMonitorEndpointFilter;
}

export function networkConnectionMonitorEndpointToTerraform(struct?: NetworkConnectionMonitorEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#port NetworkConnectionMonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#virtual_machine_id NetworkConnectionMonitor#virtual_machine_id}
  */
  readonly virtualMachineId?: string;
}

export function networkConnectionMonitorSourceToTerraform(struct?: NetworkConnectionMonitorSourceOutputReference | NetworkConnectionMonitorSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    virtual_machine_id: cdktf.stringToTerraform(struct!.virtualMachineId),
  }
}

export class NetworkConnectionMonitorSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectionMonitorSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualMachineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineId = this._virtualMachineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._virtualMachineId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._virtualMachineId = value.virtualMachineId;
    }
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // virtual_machine_id - computed: true, optional: true, required: false
  private _virtualMachineId?: string; 
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  public resetVirtualMachineId() {
    this._virtualMachineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId;
  }
}
export interface NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#value NetworkConnectionMonitor#value}
  */
  readonly value: string;
}

export function networkConnectionMonitorTestConfigurationHttpConfigurationRequestHeaderToTerraform(struct?: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#method NetworkConnectionMonitor#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#path NetworkConnectionMonitor#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#port NetworkConnectionMonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#prefer_https NetworkConnectionMonitor#prefer_https}
  */
  readonly preferHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#valid_status_code_ranges NetworkConnectionMonitor#valid_status_code_ranges}
  */
  readonly validStatusCodeRanges?: string[];
  /**
  * request_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#request_header NetworkConnectionMonitor#request_header}
  */
  readonly requestHeader?: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader[] | cdktf.IResolvable;
}

export function networkConnectionMonitorTestConfigurationHttpConfigurationToTerraform(struct?: NetworkConnectionMonitorTestConfigurationHttpConfigurationOutputReference | NetworkConnectionMonitorTestConfigurationHttpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectionMonitorTestConfigurationHttpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._preferHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferHttps = this._preferHttps;
    }
    if (this._validStatusCodeRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.validStatusCodeRanges = this._validStatusCodeRanges;
    }
    if (this._requestHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorTestConfigurationHttpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
      this._path = undefined;
      this._port = undefined;
      this._preferHttps = undefined;
      this._validStatusCodeRanges = undefined;
      this._requestHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._path = value.path;
      this._port = value.port;
      this._preferHttps = value.preferHttps;
      this._validStatusCodeRanges = value.validStatusCodeRanges;
      this._requestHeader = value.requestHeader;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // prefer_https - computed: false, optional: true, required: false
  private _preferHttps?: boolean | cdktf.IResolvable; 
  public get preferHttps() {
    return this.getBooleanAttribute('prefer_https');
  }
  public set preferHttps(value: boolean | cdktf.IResolvable) {
    this._preferHttps = value;
  }
  public resetPreferHttps() {
    this._preferHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferHttpsInput() {
    return this._preferHttps;
  }

  // valid_status_code_ranges - computed: false, optional: true, required: false
  private _validStatusCodeRanges?: string[]; 
  public get validStatusCodeRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_status_code_ranges'));
  }
  public set validStatusCodeRanges(value: string[]) {
    this._validStatusCodeRanges = value;
  }
  public resetValidStatusCodeRanges() {
    this._validStatusCodeRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validStatusCodeRangesInput() {
    return this._validStatusCodeRanges;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader?: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader[] | cdktf.IResolvable; 
  public get requestHeader() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('request_header')));
  }
  public set requestHeader(value: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader[] | cdktf.IResolvable) {
    this._requestHeader = value;
  }
  public resetRequestHeader() {
    this._requestHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader;
  }
}
export interface NetworkConnectionMonitorTestConfigurationIcmpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}
  */
  readonly traceRouteEnabled?: boolean | cdktf.IResolvable;
}

export function networkConnectionMonitorTestConfigurationIcmpConfigurationToTerraform(struct?: NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference | NetworkConnectionMonitorTestConfigurationIcmpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trace_route_enabled: cdktf.booleanToTerraform(struct!.traceRouteEnabled),
  }
}

export class NetworkConnectionMonitorTestConfigurationIcmpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectionMonitorTestConfigurationIcmpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._traceRouteEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceRouteEnabled = this._traceRouteEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorTestConfigurationIcmpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._traceRouteEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._traceRouteEnabled = value.traceRouteEnabled;
    }
  }

  // trace_route_enabled - computed: false, optional: true, required: false
  private _traceRouteEnabled?: boolean | cdktf.IResolvable; 
  public get traceRouteEnabled() {
    return this.getBooleanAttribute('trace_route_enabled');
  }
  public set traceRouteEnabled(value: boolean | cdktf.IResolvable) {
    this._traceRouteEnabled = value;
  }
  public resetTraceRouteEnabled() {
    this._traceRouteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceRouteEnabledInput() {
    return this._traceRouteEnabled;
  }
}
export interface NetworkConnectionMonitorTestConfigurationSuccessThreshold {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#checks_failed_percent NetworkConnectionMonitor#checks_failed_percent}
  */
  readonly checksFailedPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#round_trip_time_ms NetworkConnectionMonitor#round_trip_time_ms}
  */
  readonly roundTripTimeMs?: number;
}

export function networkConnectionMonitorTestConfigurationSuccessThresholdToTerraform(struct?: NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference | NetworkConnectionMonitorTestConfigurationSuccessThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checks_failed_percent: cdktf.numberToTerraform(struct!.checksFailedPercent),
    round_trip_time_ms: cdktf.numberToTerraform(struct!.roundTripTimeMs),
  }
}

export class NetworkConnectionMonitorTestConfigurationSuccessThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectionMonitorTestConfigurationSuccessThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksFailedPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksFailedPercent = this._checksFailedPercent;
    }
    if (this._roundTripTimeMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.roundTripTimeMs = this._roundTripTimeMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorTestConfigurationSuccessThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checksFailedPercent = undefined;
      this._roundTripTimeMs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checksFailedPercent = value.checksFailedPercent;
      this._roundTripTimeMs = value.roundTripTimeMs;
    }
  }

  // checks_failed_percent - computed: false, optional: true, required: false
  private _checksFailedPercent?: number; 
  public get checksFailedPercent() {
    return this.getNumberAttribute('checks_failed_percent');
  }
  public set checksFailedPercent(value: number) {
    this._checksFailedPercent = value;
  }
  public resetChecksFailedPercent() {
    this._checksFailedPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksFailedPercentInput() {
    return this._checksFailedPercent;
  }

  // round_trip_time_ms - computed: false, optional: true, required: false
  private _roundTripTimeMs?: number; 
  public get roundTripTimeMs() {
    return this.getNumberAttribute('round_trip_time_ms');
  }
  public set roundTripTimeMs(value: number) {
    this._roundTripTimeMs = value;
  }
  public resetRoundTripTimeMs() {
    this._roundTripTimeMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundTripTimeMsInput() {
    return this._roundTripTimeMs;
  }
}
export interface NetworkConnectionMonitorTestConfigurationTcpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#destination_port_behavior NetworkConnectionMonitor#destination_port_behavior}
  */
  readonly destinationPortBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#port NetworkConnectionMonitor#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#trace_route_enabled NetworkConnectionMonitor#trace_route_enabled}
  */
  readonly traceRouteEnabled?: boolean | cdktf.IResolvable;
}

export function networkConnectionMonitorTestConfigurationTcpConfigurationToTerraform(struct?: NetworkConnectionMonitorTestConfigurationTcpConfigurationOutputReference | NetworkConnectionMonitorTestConfigurationTcpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectionMonitorTestConfigurationTcpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPortBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortBehavior = this._destinationPortBehavior;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._traceRouteEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceRouteEnabled = this._traceRouteEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorTestConfigurationTcpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationPortBehavior = undefined;
      this._port = undefined;
      this._traceRouteEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationPortBehavior = value.destinationPortBehavior;
      this._port = value.port;
      this._traceRouteEnabled = value.traceRouteEnabled;
    }
  }

  // destination_port_behavior - computed: false, optional: true, required: false
  private _destinationPortBehavior?: string; 
  public get destinationPortBehavior() {
    return this.getStringAttribute('destination_port_behavior');
  }
  public set destinationPortBehavior(value: string) {
    this._destinationPortBehavior = value;
  }
  public resetDestinationPortBehavior() {
    this._destinationPortBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortBehaviorInput() {
    return this._destinationPortBehavior;
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
    return this._port;
  }

  // trace_route_enabled - computed: false, optional: true, required: false
  private _traceRouteEnabled?: boolean | cdktf.IResolvable; 
  public get traceRouteEnabled() {
    return this.getBooleanAttribute('trace_route_enabled');
  }
  public set traceRouteEnabled(value: boolean | cdktf.IResolvable) {
    this._traceRouteEnabled = value;
  }
  public resetTraceRouteEnabled() {
    this._traceRouteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceRouteEnabledInput() {
    return this._traceRouteEnabled;
  }
}
export interface NetworkConnectionMonitorTestConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#preferred_ip_version NetworkConnectionMonitor#preferred_ip_version}
  */
  readonly preferredIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#protocol NetworkConnectionMonitor#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#test_frequency_in_seconds NetworkConnectionMonitor#test_frequency_in_seconds}
  */
  readonly testFrequencyInSeconds?: number;
  /**
  * http_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#http_configuration NetworkConnectionMonitor#http_configuration}
  */
  readonly httpConfiguration?: NetworkConnectionMonitorTestConfigurationHttpConfiguration;
  /**
  * icmp_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#icmp_configuration NetworkConnectionMonitor#icmp_configuration}
  */
  readonly icmpConfiguration?: NetworkConnectionMonitorTestConfigurationIcmpConfiguration;
  /**
  * success_threshold block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#success_threshold NetworkConnectionMonitor#success_threshold}
  */
  readonly successThreshold?: NetworkConnectionMonitorTestConfigurationSuccessThreshold;
  /**
  * tcp_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#tcp_configuration NetworkConnectionMonitor#tcp_configuration}
  */
  readonly tcpConfiguration?: NetworkConnectionMonitorTestConfigurationTcpConfiguration;
}

export function networkConnectionMonitorTestConfigurationToTerraform(struct?: NetworkConnectionMonitorTestConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#destination_endpoints NetworkConnectionMonitor#destination_endpoints}
  */
  readonly destinationEndpoints: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#enabled NetworkConnectionMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#name NetworkConnectionMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#source_endpoints NetworkConnectionMonitor#source_endpoints}
  */
  readonly sourceEndpoints: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#test_configuration_names NetworkConnectionMonitor#test_configuration_names}
  */
  readonly testConfigurationNames: string[];
}

export function networkConnectionMonitorTestGroupToTerraform(struct?: NetworkConnectionMonitorTestGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#create NetworkConnectionMonitor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#delete NetworkConnectionMonitor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#read NetworkConnectionMonitor#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor#update NetworkConnectionMonitor#update}
  */
  readonly update?: string;
}

export function networkConnectionMonitorTimeoutsToTerraform(struct?: NetworkConnectionMonitorTimeoutsOutputReference | NetworkConnectionMonitorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConnectionMonitorTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionMonitorTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor azurerm_network_connection_monitor}
*/
export class NetworkConnectionMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_network_connection_monitor";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor azurerm_network_connection_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConnectionMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConnectionMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_connection_monitor',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '2.99.0',
        providerVersionConstraint: '~> 2.0'
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
    this._destination.internalValue = config.destination;
    this._endpoint = config.endpoint;
    this._source.internalValue = config.source;
    this._testConfiguration = config.testConfiguration;
    this._testGroup = config.testGroup;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_start - computed: true, optional: true, required: false
  private _autoStart?: boolean | cdktf.IResolvable; 
  public get autoStart() {
    return this.getBooleanAttribute('auto_start');
  }
  public set autoStart(value: boolean | cdktf.IResolvable) {
    this._autoStart = value;
  }
  public resetAutoStart() {
    this._autoStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStartInput() {
    return this._autoStart;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval_in_seconds - computed: true, optional: true, required: false
  private _intervalInSeconds?: number; 
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number) {
    this._intervalInSeconds = value;
  }
  public resetIntervalInSeconds() {
    this._intervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInSecondsInput() {
    return this._intervalInSeconds;
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
    return this._location;
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
    return this._name;
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
    return this._networkWatcherId;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // output_workspace_resource_ids - computed: true, optional: true, required: false
  private _outputWorkspaceResourceIds?: string[]; 
  public get outputWorkspaceResourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('output_workspace_resource_ids'));
  }
  public set outputWorkspaceResourceIds(value: string[]) {
    this._outputWorkspaceResourceIds = value;
  }
  public resetOutputWorkspaceResourceIds() {
    this._outputWorkspaceResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputWorkspaceResourceIdsInput() {
    return this._outputWorkspaceResourceIds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new NetworkConnectionMonitorDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: NetworkConnectionMonitorDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: NetworkConnectionMonitorEndpoint[] | cdktf.IResolvable; 
  public get endpoint() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('endpoint')));
  }
  public set endpoint(value: NetworkConnectionMonitorEndpoint[] | cdktf.IResolvable) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // source - computed: false, optional: true, required: false
  private _source = new NetworkConnectionMonitorSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: NetworkConnectionMonitorSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // test_configuration - computed: false, optional: false, required: true
  private _testConfiguration?: NetworkConnectionMonitorTestConfiguration[] | cdktf.IResolvable; 
  public get testConfiguration() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('test_configuration')));
  }
  public set testConfiguration(value: NetworkConnectionMonitorTestConfiguration[] | cdktf.IResolvable) {
    this._testConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testConfigurationInput() {
    return this._testConfiguration;
  }

  // test_group - computed: false, optional: false, required: true
  private _testGroup?: NetworkConnectionMonitorTestGroup[] | cdktf.IResolvable; 
  public get testGroup() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('test_group')));
  }
  public set testGroup(value: NetworkConnectionMonitorTestGroup[] | cdktf.IResolvable) {
    this._testGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testGroupInput() {
    return this._testGroup;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkConnectionMonitorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkConnectionMonitorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      destination: networkConnectionMonitorDestinationToTerraform(this._destination.internalValue),
      endpoint: cdktf.listMapper(networkConnectionMonitorEndpointToTerraform)(this._endpoint),
      source: networkConnectionMonitorSourceToTerraform(this._source.internalValue),
      test_configuration: cdktf.listMapper(networkConnectionMonitorTestConfigurationToTerraform)(this._testConfiguration),
      test_group: cdktf.listMapper(networkConnectionMonitorTestGroupToTerraform)(this._testGroup),
      timeouts: networkConnectionMonitorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
