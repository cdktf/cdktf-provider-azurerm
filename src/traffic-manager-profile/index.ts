// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficManagerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#id TrafficManagerProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#max_return TrafficManagerProfile#max_return}
  */
  readonly maxReturn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#name TrafficManagerProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#profile_status TrafficManagerProfile#profile_status}
  */
  readonly profileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#resource_group_name TrafficManagerProfile#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#tags TrafficManagerProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#traffic_routing_method TrafficManagerProfile#traffic_routing_method}
  */
  readonly trafficRoutingMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#traffic_view_enabled TrafficManagerProfile#traffic_view_enabled}
  */
  readonly trafficViewEnabled?: boolean | cdktf.IResolvable;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#dns_config TrafficManagerProfile#dns_config}
  */
  readonly dnsConfig: TrafficManagerProfileDnsConfig;
  /**
  * monitor_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#monitor_config TrafficManagerProfile#monitor_config}
  */
  readonly monitorConfig: TrafficManagerProfileMonitorConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#timeouts TrafficManagerProfile#timeouts}
  */
  readonly timeouts?: TrafficManagerProfileTimeouts;
}
export interface TrafficManagerProfileDnsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#relative_name TrafficManagerProfile#relative_name}
  */
  readonly relativeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#ttl TrafficManagerProfile#ttl}
  */
  readonly ttl: number;
}

export function trafficManagerProfileDnsConfigToTerraform(struct?: TrafficManagerProfileDnsConfigOutputReference | TrafficManagerProfileDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_name: cdktf.stringToTerraform(struct!.relativeName),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function trafficManagerProfileDnsConfigToHclTerraform(struct?: TrafficManagerProfileDnsConfigOutputReference | TrafficManagerProfileDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relative_name: {
      value: cdktf.stringToHclTerraform(struct!.relativeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficManagerProfileDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficManagerProfileDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeName = this._relativeName;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficManagerProfileDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativeName = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativeName = value.relativeName;
      this._ttl = value.ttl;
    }
  }

  // relative_name - computed: false, optional: false, required: true
  private _relativeName?: string; 
  public get relativeName() {
    return this.getStringAttribute('relative_name');
  }
  public set relativeName(value: string) {
    this._relativeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeNameInput() {
    return this._relativeName;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface TrafficManagerProfileMonitorConfigCustomHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#name TrafficManagerProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#value TrafficManagerProfile#value}
  */
  readonly value: string;
}

export function trafficManagerProfileMonitorConfigCustomHeaderToTerraform(struct?: TrafficManagerProfileMonitorConfigCustomHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function trafficManagerProfileMonitorConfigCustomHeaderToHclTerraform(struct?: TrafficManagerProfileMonitorConfigCustomHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficManagerProfileMonitorConfigCustomHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TrafficManagerProfileMonitorConfigCustomHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficManagerProfileMonitorConfigCustomHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TrafficManagerProfileMonitorConfigCustomHeaderList extends cdktf.ComplexList {
  public internalValue? : TrafficManagerProfileMonitorConfigCustomHeader[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TrafficManagerProfileMonitorConfigCustomHeaderOutputReference {
    return new TrafficManagerProfileMonitorConfigCustomHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrafficManagerProfileMonitorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#expected_status_code_ranges TrafficManagerProfile#expected_status_code_ranges}
  */
  readonly expectedStatusCodeRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#interval_in_seconds TrafficManagerProfile#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#path TrafficManagerProfile#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#port TrafficManagerProfile#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#protocol TrafficManagerProfile#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#timeout_in_seconds TrafficManagerProfile#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#tolerated_number_of_failures TrafficManagerProfile#tolerated_number_of_failures}
  */
  readonly toleratedNumberOfFailures?: number;
  /**
  * custom_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#custom_header TrafficManagerProfile#custom_header}
  */
  readonly customHeader?: TrafficManagerProfileMonitorConfigCustomHeader[] | cdktf.IResolvable;
}

export function trafficManagerProfileMonitorConfigToTerraform(struct?: TrafficManagerProfileMonitorConfigOutputReference | TrafficManagerProfileMonitorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_status_code_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expectedStatusCodeRanges),
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
    tolerated_number_of_failures: cdktf.numberToTerraform(struct!.toleratedNumberOfFailures),
    custom_header: cdktf.listMapper(trafficManagerProfileMonitorConfigCustomHeaderToTerraform, true)(struct!.customHeader),
  }
}


export function trafficManagerProfileMonitorConfigToHclTerraform(struct?: TrafficManagerProfileMonitorConfigOutputReference | TrafficManagerProfileMonitorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_status_code_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expectedStatusCodeRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerated_number_of_failures: {
      value: cdktf.numberToHclTerraform(struct!.toleratedNumberOfFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_header: {
      value: cdktf.listMapperHcl(trafficManagerProfileMonitorConfigCustomHeaderToHclTerraform, true)(struct!.customHeader),
      isBlock: true,
      type: "list",
      storageClassType: "TrafficManagerProfileMonitorConfigCustomHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficManagerProfileMonitorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficManagerProfileMonitorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedStatusCodeRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedStatusCodeRanges = this._expectedStatusCodeRanges;
    }
    if (this._intervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalInSeconds = this._intervalInSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    if (this._toleratedNumberOfFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleratedNumberOfFailures = this._toleratedNumberOfFailures;
    }
    if (this._customHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeader = this._customHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficManagerProfileMonitorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedStatusCodeRanges = undefined;
      this._intervalInSeconds = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._timeoutInSeconds = undefined;
      this._toleratedNumberOfFailures = undefined;
      this._customHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedStatusCodeRanges = value.expectedStatusCodeRanges;
      this._intervalInSeconds = value.intervalInSeconds;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._timeoutInSeconds = value.timeoutInSeconds;
      this._toleratedNumberOfFailures = value.toleratedNumberOfFailures;
      this._customHeader.internalValue = value.customHeader;
    }
  }

  // expected_status_code_ranges - computed: false, optional: true, required: false
  private _expectedStatusCodeRanges?: string[]; 
  public get expectedStatusCodeRanges() {
    return this.getListAttribute('expected_status_code_ranges');
  }
  public set expectedStatusCodeRanges(value: string[]) {
    this._expectedStatusCodeRanges = value;
  }
  public resetExpectedStatusCodeRanges() {
    this._expectedStatusCodeRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusCodeRangesInput() {
    return this._expectedStatusCodeRanges;
  }

  // interval_in_seconds - computed: false, optional: true, required: false
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // timeout_in_seconds - computed: false, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // tolerated_number_of_failures - computed: false, optional: true, required: false
  private _toleratedNumberOfFailures?: number; 
  public get toleratedNumberOfFailures() {
    return this.getNumberAttribute('tolerated_number_of_failures');
  }
  public set toleratedNumberOfFailures(value: number) {
    this._toleratedNumberOfFailures = value;
  }
  public resetToleratedNumberOfFailures() {
    this._toleratedNumberOfFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleratedNumberOfFailuresInput() {
    return this._toleratedNumberOfFailures;
  }

  // custom_header - computed: false, optional: true, required: false
  private _customHeader = new TrafficManagerProfileMonitorConfigCustomHeaderList(this, "custom_header", false);
  public get customHeader() {
    return this._customHeader;
  }
  public putCustomHeader(value: TrafficManagerProfileMonitorConfigCustomHeader[] | cdktf.IResolvable) {
    this._customHeader.internalValue = value;
  }
  public resetCustomHeader() {
    this._customHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderInput() {
    return this._customHeader.internalValue;
  }
}
export interface TrafficManagerProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#create TrafficManagerProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#delete TrafficManagerProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#read TrafficManagerProfile#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#update TrafficManagerProfile#update}
  */
  readonly update?: string;
}

export function trafficManagerProfileTimeoutsToTerraform(struct?: TrafficManagerProfileTimeouts | cdktf.IResolvable): any {
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


export function trafficManagerProfileTimeoutsToHclTerraform(struct?: TrafficManagerProfileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficManagerProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrafficManagerProfileTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: TrafficManagerProfileTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile azurerm_traffic_manager_profile}
*/
export class TrafficManagerProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_traffic_manager_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrafficManagerProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrafficManagerProfile to import
  * @param importFromId The id of the existing TrafficManagerProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrafficManagerProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_traffic_manager_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/traffic_manager_profile azurerm_traffic_manager_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficManagerProfileConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficManagerProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_traffic_manager_profile',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._maxReturn = config.maxReturn;
    this._name = config.name;
    this._profileStatus = config.profileStatus;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._trafficRoutingMethod = config.trafficRoutingMethod;
    this._trafficViewEnabled = config.trafficViewEnabled;
    this._dnsConfig.internalValue = config.dnsConfig;
    this._monitorConfig.internalValue = config.monitorConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_return - computed: false, optional: true, required: false
  private _maxReturn?: number; 
  public get maxReturn() {
    return this.getNumberAttribute('max_return');
  }
  public set maxReturn(value: number) {
    this._maxReturn = value;
  }
  public resetMaxReturn() {
    this._maxReturn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReturnInput() {
    return this._maxReturn;
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

  // profile_status - computed: false, optional: true, required: false
  private _profileStatus?: string; 
  public get profileStatus() {
    return this.getStringAttribute('profile_status');
  }
  public set profileStatus(value: string) {
    this._profileStatus = value;
  }
  public resetProfileStatus() {
    this._profileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileStatusInput() {
    return this._profileStatus;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
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

  // traffic_routing_method - computed: false, optional: false, required: true
  private _trafficRoutingMethod?: string; 
  public get trafficRoutingMethod() {
    return this.getStringAttribute('traffic_routing_method');
  }
  public set trafficRoutingMethod(value: string) {
    this._trafficRoutingMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRoutingMethodInput() {
    return this._trafficRoutingMethod;
  }

  // traffic_view_enabled - computed: false, optional: true, required: false
  private _trafficViewEnabled?: boolean | cdktf.IResolvable; 
  public get trafficViewEnabled() {
    return this.getBooleanAttribute('traffic_view_enabled');
  }
  public set trafficViewEnabled(value: boolean | cdktf.IResolvable) {
    this._trafficViewEnabled = value;
  }
  public resetTrafficViewEnabled() {
    this._trafficViewEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficViewEnabledInput() {
    return this._trafficViewEnabled;
  }

  // dns_config - computed: false, optional: false, required: true
  private _dnsConfig = new TrafficManagerProfileDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: TrafficManagerProfileDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // monitor_config - computed: false, optional: false, required: true
  private _monitorConfig = new TrafficManagerProfileMonitorConfigOutputReference(this, "monitor_config");
  public get monitorConfig() {
    return this._monitorConfig;
  }
  public putMonitorConfig(value: TrafficManagerProfileMonitorConfig) {
    this._monitorConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorConfigInput() {
    return this._monitorConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TrafficManagerProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TrafficManagerProfileTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      max_return: cdktf.numberToTerraform(this._maxReturn),
      name: cdktf.stringToTerraform(this._name),
      profile_status: cdktf.stringToTerraform(this._profileStatus),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      traffic_routing_method: cdktf.stringToTerraform(this._trafficRoutingMethod),
      traffic_view_enabled: cdktf.booleanToTerraform(this._trafficViewEnabled),
      dns_config: trafficManagerProfileDnsConfigToTerraform(this._dnsConfig.internalValue),
      monitor_config: trafficManagerProfileMonitorConfigToTerraform(this._monitorConfig.internalValue),
      timeouts: trafficManagerProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_return: {
        value: cdktf.numberToHclTerraform(this._maxReturn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_status: {
        value: cdktf.stringToHclTerraform(this._profileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      traffic_routing_method: {
        value: cdktf.stringToHclTerraform(this._trafficRoutingMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_view_enabled: {
        value: cdktf.booleanToHclTerraform(this._trafficViewEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_config: {
        value: trafficManagerProfileDnsConfigToHclTerraform(this._dnsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrafficManagerProfileDnsConfigList",
      },
      monitor_config: {
        value: trafficManagerProfileMonitorConfigToHclTerraform(this._monitorConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrafficManagerProfileMonitorConfigList",
      },
      timeouts: {
        value: trafficManagerProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrafficManagerProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
