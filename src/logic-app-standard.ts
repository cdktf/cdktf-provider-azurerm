// https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppStandardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#app_service_plan_id LogicAppStandard#app_service_plan_id}
  */
  readonly appServicePlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#app_settings LogicAppStandard#app_settings}
  */
  readonly appSettings?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#bundle_version LogicAppStandard#bundle_version}
  */
  readonly bundleVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#client_affinity_enabled LogicAppStandard#client_affinity_enabled}
  */
  readonly clientAffinityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#client_certificate_mode LogicAppStandard#client_certificate_mode}
  */
  readonly clientCertificateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#enabled LogicAppStandard#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#https_only LogicAppStandard#https_only}
  */
  readonly httpsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#location LogicAppStandard#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#name LogicAppStandard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#resource_group_name LogicAppStandard#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#storage_account_access_key LogicAppStandard#storage_account_access_key}
  */
  readonly storageAccountAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#storage_account_name LogicAppStandard#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#storage_account_share_name LogicAppStandard#storage_account_share_name}
  */
  readonly storageAccountShareName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#tags LogicAppStandard#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#use_extension_bundle LogicAppStandard#use_extension_bundle}
  */
  readonly useExtensionBundle?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#version LogicAppStandard#version}
  */
  readonly version?: string;
  /**
  * connection_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#connection_string LogicAppStandard#connection_string}
  */
  readonly connectionString?: LogicAppStandardConnectionString[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#identity LogicAppStandard#identity}
  */
  readonly identity?: LogicAppStandardIdentity;
  /**
  * site_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#site_config LogicAppStandard#site_config}
  */
  readonly siteConfig?: LogicAppStandardSiteConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#timeouts LogicAppStandard#timeouts}
  */
  readonly timeouts?: LogicAppStandardTimeouts;
}
export class LogicAppStandardSiteCredential extends cdktf.ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface LogicAppStandardConnectionString {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#name LogicAppStandard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#type LogicAppStandard#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#value LogicAppStandard#value}
  */
  readonly value: string;
}

function logicAppStandardConnectionStringToTerraform(struct?: LogicAppStandardConnectionString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LogicAppStandardIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#type LogicAppStandard#type}
  */
  readonly type: string;
}

function logicAppStandardIdentityToTerraform(struct?: LogicAppStandardIdentityOutputReference | LogicAppStandardIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class LogicAppStandardIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface LogicAppStandardSiteConfigIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#x_azure_fdid LogicAppStandard#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#x_fd_health_probe LogicAppStandard#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#x_forwarded_for LogicAppStandard#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#x_forwarded_host LogicAppStandard#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

function logicAppStandardSiteConfigIpRestrictionHeadersToTerraform(struct?: LogicAppStandardSiteConfigIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x_azure_fdid: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xAzureFdid),
    x_fd_health_probe: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xFdHealthProbe),
    x_forwarded_for: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedFor),
    x_forwarded_host: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedHost),
  }
}

export interface LogicAppStandardSiteConfigIpRestriction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#action LogicAppStandard#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#headers LogicAppStandard#headers}
  */
  readonly headers?: LogicAppStandardSiteConfigIpRestrictionHeaders[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#ip_address LogicAppStandard#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#name LogicAppStandard#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#priority LogicAppStandard#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#service_tag LogicAppStandard#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

function logicAppStandardSiteConfigIpRestrictionToTerraform(struct?: LogicAppStandardSiteConfigIpRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    headers: cdktf.listMapper(logicAppStandardSiteConfigIpRestrictionHeadersToTerraform)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}

export interface LogicAppStandardSiteConfigCors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#allowed_origins LogicAppStandard#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#support_credentials LogicAppStandard#support_credentials}
  */
  readonly supportCredentials?: boolean | cdktf.IResolvable;
}

function logicAppStandardSiteConfigCorsToTerraform(struct?: LogicAppStandardSiteConfigCorsOutputReference | LogicAppStandardSiteConfigCors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}

export class LogicAppStandardSiteConfigCorsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins
  }

  // support_credentials - computed: false, optional: true, required: false
  private _supportCredentials?: boolean | cdktf.IResolvable | undefined; 
  public get supportCredentials() {
    return this.getBooleanAttribute('support_credentials') as any;
  }
  public set supportCredentials(value: boolean | cdktf.IResolvable | undefined) {
    this._supportCredentials = value;
  }
  public resetSupportCredentials() {
    this._supportCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportCredentialsInput() {
    return this._supportCredentials
  }
}
export interface LogicAppStandardSiteConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#always_on LogicAppStandard#always_on}
  */
  readonly alwaysOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#app_scale_limit LogicAppStandard#app_scale_limit}
  */
  readonly appScaleLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#dotnet_framework_version LogicAppStandard#dotnet_framework_version}
  */
  readonly dotnetFrameworkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#elastic_instance_minimum LogicAppStandard#elastic_instance_minimum}
  */
  readonly elasticInstanceMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#ftps_state LogicAppStandard#ftps_state}
  */
  readonly ftpsState?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#health_check_path LogicAppStandard#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#http2_enabled LogicAppStandard#http2_enabled}
  */
  readonly http2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#ip_restriction LogicAppStandard#ip_restriction}
  */
  readonly ipRestriction?: LogicAppStandardSiteConfigIpRestriction[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#linux_fx_version LogicAppStandard#linux_fx_version}
  */
  readonly linuxFxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#min_tls_version LogicAppStandard#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#pre_warmed_instance_count LogicAppStandard#pre_warmed_instance_count}
  */
  readonly preWarmedInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#runtime_scale_monitoring_enabled LogicAppStandard#runtime_scale_monitoring_enabled}
  */
  readonly runtimeScaleMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#use_32_bit_worker_process LogicAppStandard#use_32_bit_worker_process}
  */
  readonly use32BitWorkerProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#vnet_route_all_enabled LogicAppStandard#vnet_route_all_enabled}
  */
  readonly vnetRouteAllEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#websockets_enabled LogicAppStandard#websockets_enabled}
  */
  readonly websocketsEnabled?: boolean | cdktf.IResolvable;
  /**
  * cors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#cors LogicAppStandard#cors}
  */
  readonly cors?: LogicAppStandardSiteConfigCors;
}

function logicAppStandardSiteConfigToTerraform(struct?: LogicAppStandardSiteConfigOutputReference | LogicAppStandardSiteConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_on: cdktf.booleanToTerraform(struct!.alwaysOn),
    app_scale_limit: cdktf.numberToTerraform(struct!.appScaleLimit),
    dotnet_framework_version: cdktf.stringToTerraform(struct!.dotnetFrameworkVersion),
    elastic_instance_minimum: cdktf.numberToTerraform(struct!.elasticInstanceMinimum),
    ftps_state: cdktf.stringToTerraform(struct!.ftpsState),
    health_check_path: cdktf.stringToTerraform(struct!.healthCheckPath),
    http2_enabled: cdktf.booleanToTerraform(struct!.http2Enabled),
    ip_restriction: cdktf.listMapper(logicAppStandardSiteConfigIpRestrictionToTerraform)(struct!.ipRestriction),
    linux_fx_version: cdktf.stringToTerraform(struct!.linuxFxVersion),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    pre_warmed_instance_count: cdktf.numberToTerraform(struct!.preWarmedInstanceCount),
    runtime_scale_monitoring_enabled: cdktf.booleanToTerraform(struct!.runtimeScaleMonitoringEnabled),
    use_32_bit_worker_process: cdktf.booleanToTerraform(struct!.use32BitWorkerProcess),
    vnet_route_all_enabled: cdktf.booleanToTerraform(struct!.vnetRouteAllEnabled),
    websockets_enabled: cdktf.booleanToTerraform(struct!.websocketsEnabled),
    cors: logicAppStandardSiteConfigCorsToTerraform(struct!.cors),
  }
}

export class LogicAppStandardSiteConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // always_on - computed: false, optional: true, required: false
  private _alwaysOn?: boolean | cdktf.IResolvable | undefined; 
  public get alwaysOn() {
    return this.getBooleanAttribute('always_on') as any;
  }
  public set alwaysOn(value: boolean | cdktf.IResolvable | undefined) {
    this._alwaysOn = value;
  }
  public resetAlwaysOn() {
    this._alwaysOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysOnInput() {
    return this._alwaysOn
  }

  // app_scale_limit - computed: true, optional: true, required: false
  private _appScaleLimit?: number | undefined; 
  public get appScaleLimit() {
    return this.getNumberAttribute('app_scale_limit');
  }
  public set appScaleLimit(value: number | undefined) {
    this._appScaleLimit = value;
  }
  public resetAppScaleLimit() {
    this._appScaleLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appScaleLimitInput() {
    return this._appScaleLimit
  }

  // dotnet_framework_version - computed: false, optional: true, required: false
  private _dotnetFrameworkVersion?: string | undefined; 
  public get dotnetFrameworkVersion() {
    return this.getStringAttribute('dotnet_framework_version');
  }
  public set dotnetFrameworkVersion(value: string | undefined) {
    this._dotnetFrameworkVersion = value;
  }
  public resetDotnetFrameworkVersion() {
    this._dotnetFrameworkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotnetFrameworkVersionInput() {
    return this._dotnetFrameworkVersion
  }

  // elastic_instance_minimum - computed: true, optional: true, required: false
  private _elasticInstanceMinimum?: number | undefined; 
  public get elasticInstanceMinimum() {
    return this.getNumberAttribute('elastic_instance_minimum');
  }
  public set elasticInstanceMinimum(value: number | undefined) {
    this._elasticInstanceMinimum = value;
  }
  public resetElasticInstanceMinimum() {
    this._elasticInstanceMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticInstanceMinimumInput() {
    return this._elasticInstanceMinimum
  }

  // ftps_state - computed: true, optional: true, required: false
  private _ftpsState?: string | undefined; 
  public get ftpsState() {
    return this.getStringAttribute('ftps_state');
  }
  public set ftpsState(value: string | undefined) {
    this._ftpsState = value;
  }
  public resetFtpsState() {
    this._ftpsState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpsStateInput() {
    return this._ftpsState
  }

  // health_check_path - computed: false, optional: true, required: false
  private _healthCheckPath?: string | undefined; 
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string | undefined) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath
  }

  // http2_enabled - computed: false, optional: true, required: false
  private _http2Enabled?: boolean | cdktf.IResolvable | undefined; 
  public get http2Enabled() {
    return this.getBooleanAttribute('http2_enabled') as any;
  }
  public set http2Enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._http2Enabled = value;
  }
  public resetHttp2Enabled() {
    this._http2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2EnabledInput() {
    return this._http2Enabled
  }

  // ip_restriction - computed: true, optional: true, required: false
  private _ipRestriction?: LogicAppStandardSiteConfigIpRestriction[] | undefined; 
  public get ipRestriction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_restriction') as any;
  }
  public set ipRestriction(value: LogicAppStandardSiteConfigIpRestriction[] | undefined) {
    this._ipRestriction = value;
  }
  public resetIpRestriction() {
    this._ipRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionInput() {
    return this._ipRestriction
  }

  // linux_fx_version - computed: true, optional: true, required: false
  private _linuxFxVersion?: string | undefined; 
  public get linuxFxVersion() {
    return this.getStringAttribute('linux_fx_version');
  }
  public set linuxFxVersion(value: string | undefined) {
    this._linuxFxVersion = value;
  }
  public resetLinuxFxVersion() {
    this._linuxFxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxFxVersionInput() {
    return this._linuxFxVersion
  }

  // min_tls_version - computed: true, optional: true, required: false
  private _minTlsVersion?: string | undefined; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string | undefined) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion
  }

  // pre_warmed_instance_count - computed: true, optional: true, required: false
  private _preWarmedInstanceCount?: number | undefined; 
  public get preWarmedInstanceCount() {
    return this.getNumberAttribute('pre_warmed_instance_count');
  }
  public set preWarmedInstanceCount(value: number | undefined) {
    this._preWarmedInstanceCount = value;
  }
  public resetPreWarmedInstanceCount() {
    this._preWarmedInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preWarmedInstanceCountInput() {
    return this._preWarmedInstanceCount
  }

  // runtime_scale_monitoring_enabled - computed: false, optional: true, required: false
  private _runtimeScaleMonitoringEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get runtimeScaleMonitoringEnabled() {
    return this.getBooleanAttribute('runtime_scale_monitoring_enabled') as any;
  }
  public set runtimeScaleMonitoringEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._runtimeScaleMonitoringEnabled = value;
  }
  public resetRuntimeScaleMonitoringEnabled() {
    this._runtimeScaleMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeScaleMonitoringEnabledInput() {
    return this._runtimeScaleMonitoringEnabled
  }

  // use_32_bit_worker_process - computed: false, optional: true, required: false
  private _use32BitWorkerProcess?: boolean | cdktf.IResolvable | undefined; 
  public get use32BitWorkerProcess() {
    return this.getBooleanAttribute('use_32_bit_worker_process') as any;
  }
  public set use32BitWorkerProcess(value: boolean | cdktf.IResolvable | undefined) {
    this._use32BitWorkerProcess = value;
  }
  public resetUse32BitWorkerProcess() {
    this._use32BitWorkerProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get use32BitWorkerProcessInput() {
    return this._use32BitWorkerProcess
  }

  // vnet_route_all_enabled - computed: true, optional: true, required: false
  private _vnetRouteAllEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get vnetRouteAllEnabled() {
    return this.getBooleanAttribute('vnet_route_all_enabled') as any;
  }
  public set vnetRouteAllEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._vnetRouteAllEnabled = value;
  }
  public resetVnetRouteAllEnabled() {
    this._vnetRouteAllEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetRouteAllEnabledInput() {
    return this._vnetRouteAllEnabled
  }

  // websockets_enabled - computed: false, optional: true, required: false
  private _websocketsEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get websocketsEnabled() {
    return this.getBooleanAttribute('websockets_enabled') as any;
  }
  public set websocketsEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._websocketsEnabled = value;
  }
  public resetWebsocketsEnabled() {
    this._websocketsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketsEnabledInput() {
    return this._websocketsEnabled
  }

  // cors - computed: false, optional: true, required: false
  private _cors?: LogicAppStandardSiteConfigCors | undefined; 
  private __corsOutput = new LogicAppStandardSiteConfigCorsOutputReference(this as any, "cors", true);
  public get cors() {
    return this.__corsOutput;
  }
  public putCors(value: LogicAppStandardSiteConfigCors | undefined) {
    this._cors = value;
  }
  public resetCors() {
    this._cors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors
  }
}
export interface LogicAppStandardTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#create LogicAppStandard#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#delete LogicAppStandard#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#read LogicAppStandard#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html#update LogicAppStandard#update}
  */
  readonly update?: string;
}

function logicAppStandardTimeoutsToTerraform(struct?: LogicAppStandardTimeoutsOutputReference | LogicAppStandardTimeouts): any {
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

export class LogicAppStandardTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html azurerm_logic_app_standard}
*/
export class LogicAppStandard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_logic_app_standard";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard.html azurerm_logic_app_standard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicAppStandardConfig
  */
  public constructor(scope: Construct, id: string, config: LogicAppStandardConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_standard',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appServicePlanId = config.appServicePlanId;
    this._appSettings = config.appSettings;
    this._bundleVersion = config.bundleVersion;
    this._clientAffinityEnabled = config.clientAffinityEnabled;
    this._clientCertificateMode = config.clientCertificateMode;
    this._enabled = config.enabled;
    this._httpsOnly = config.httpsOnly;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountAccessKey = config.storageAccountAccessKey;
    this._storageAccountName = config.storageAccountName;
    this._storageAccountShareName = config.storageAccountShareName;
    this._tags = config.tags;
    this._useExtensionBundle = config.useExtensionBundle;
    this._version = config.version;
    this._connectionString = config.connectionString;
    this._identity = config.identity;
    this._siteConfig = config.siteConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_plan_id - computed: false, optional: false, required: true
  private _appServicePlanId?: string; 
  public get appServicePlanId() {
    return this.getStringAttribute('app_service_plan_id');
  }
  public set appServicePlanId(value: string) {
    this._appServicePlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServicePlanIdInput() {
    return this._appServicePlanId
  }

  // app_settings - computed: true, optional: true, required: false
  private _appSettings?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get appSettings() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('app_settings') as any;
  }
  public set appSettings(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._appSettings = value;
  }
  public resetAppSettings() {
    this._appSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSettingsInput() {
    return this._appSettings
  }

  // bundle_version - computed: false, optional: true, required: false
  private _bundleVersion?: string | undefined; 
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }
  public set bundleVersion(value: string | undefined) {
    this._bundleVersion = value;
  }
  public resetBundleVersion() {
    this._bundleVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleVersionInput() {
    return this._bundleVersion
  }

  // client_affinity_enabled - computed: true, optional: true, required: false
  private _clientAffinityEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get clientAffinityEnabled() {
    return this.getBooleanAttribute('client_affinity_enabled') as any;
  }
  public set clientAffinityEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._clientAffinityEnabled = value;
  }
  public resetClientAffinityEnabled() {
    this._clientAffinityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAffinityEnabledInput() {
    return this._clientAffinityEnabled
  }

  // client_certificate_mode - computed: false, optional: true, required: false
  private _clientCertificateMode?: string | undefined; 
  public get clientCertificateMode() {
    return this.getStringAttribute('client_certificate_mode');
  }
  public set clientCertificateMode(value: string | undefined) {
    this._clientCertificateMode = value;
  }
  public resetClientCertificateMode() {
    this._clientCertificateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateModeInput() {
    return this._clientCertificateMode
  }

  // custom_domain_verification_id - computed: true, optional: false, required: false
  public get customDomainVerificationId() {
    return this.getStringAttribute('custom_domain_verification_id');
  }

  // default_hostname - computed: true, optional: false, required: false
  public get defaultHostname() {
    return this.getStringAttribute('default_hostname');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // https_only - computed: false, optional: true, required: false
  private _httpsOnly?: boolean | cdktf.IResolvable | undefined; 
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only') as any;
  }
  public set httpsOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._httpsOnly = value;
  }
  public resetHttpsOnly() {
    this._httpsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsOnlyInput() {
    return this._httpsOnly
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // outbound_ip_addresses - computed: true, optional: false, required: false
  public get outboundIpAddresses() {
    return this.getStringAttribute('outbound_ip_addresses');
  }

  // possible_outbound_ip_addresses - computed: true, optional: false, required: false
  public get possibleOutboundIpAddresses() {
    return this.getStringAttribute('possible_outbound_ip_addresses');
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
    return this._resourceGroupName
  }

  // site_credential - computed: true, optional: false, required: false
  public siteCredential(index: string) {
    return new LogicAppStandardSiteCredential(this, 'site_credential', index);
  }

  // storage_account_access_key - computed: false, optional: false, required: true
  private _storageAccountAccessKey?: string; 
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }
  public set storageAccountAccessKey(value: string) {
    this._storageAccountAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyInput() {
    return this._storageAccountAccessKey
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName
  }

  // storage_account_share_name - computed: true, optional: true, required: false
  private _storageAccountShareName?: string | undefined; 
  public get storageAccountShareName() {
    return this.getStringAttribute('storage_account_share_name');
  }
  public set storageAccountShareName(value: string | undefined) {
    this._storageAccountShareName = value;
  }
  public resetStorageAccountShareName() {
    this._storageAccountShareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountShareNameInput() {
    return this._storageAccountShareName
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

  // use_extension_bundle - computed: false, optional: true, required: false
  private _useExtensionBundle?: boolean | cdktf.IResolvable | undefined; 
  public get useExtensionBundle() {
    return this.getBooleanAttribute('use_extension_bundle') as any;
  }
  public set useExtensionBundle(value: boolean | cdktf.IResolvable | undefined) {
    this._useExtensionBundle = value;
  }
  public resetUseExtensionBundle() {
    this._useExtensionBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExtensionBundleInput() {
    return this._useExtensionBundle
  }

  // version - computed: false, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: LogicAppStandardConnectionString[] | undefined; 
  public get connectionString() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('connection_string') as any;
  }
  public set connectionString(value: LogicAppStandardConnectionString[] | undefined) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: LogicAppStandardIdentity | undefined; 
  private __identityOutput = new LogicAppStandardIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: LogicAppStandardIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // site_config - computed: false, optional: true, required: false
  private _siteConfig?: LogicAppStandardSiteConfig | undefined; 
  private __siteConfigOutput = new LogicAppStandardSiteConfigOutputReference(this as any, "site_config", true);
  public get siteConfig() {
    return this.__siteConfigOutput;
  }
  public putSiteConfig(value: LogicAppStandardSiteConfig | undefined) {
    this._siteConfig = value;
  }
  public resetSiteConfig() {
    this._siteConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteConfigInput() {
    return this._siteConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppStandardTimeouts | undefined; 
  private __timeoutsOutput = new LogicAppStandardTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LogicAppStandardTimeouts | undefined) {
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
      app_service_plan_id: cdktf.stringToTerraform(this._appServicePlanId),
      app_settings: cdktf.hashMapper(cdktf.anyToTerraform)(this._appSettings),
      bundle_version: cdktf.stringToTerraform(this._bundleVersion),
      client_affinity_enabled: cdktf.booleanToTerraform(this._clientAffinityEnabled),
      client_certificate_mode: cdktf.stringToTerraform(this._clientCertificateMode),
      enabled: cdktf.booleanToTerraform(this._enabled),
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_access_key: cdktf.stringToTerraform(this._storageAccountAccessKey),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      storage_account_share_name: cdktf.stringToTerraform(this._storageAccountShareName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      use_extension_bundle: cdktf.booleanToTerraform(this._useExtensionBundle),
      version: cdktf.stringToTerraform(this._version),
      connection_string: cdktf.listMapper(logicAppStandardConnectionStringToTerraform)(this._connectionString),
      identity: logicAppStandardIdentityToTerraform(this._identity),
      site_config: logicAppStandardSiteConfigToTerraform(this._siteConfig),
      timeouts: logicAppStandardTimeoutsToTerraform(this._timeouts),
    };
  }
}
