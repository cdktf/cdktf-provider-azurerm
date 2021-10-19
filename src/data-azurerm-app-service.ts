// https://www.terraform.io/docs/providers/azurerm/d/app_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermAppServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service.html#name DataAzurermAppService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service.html#resource_group_name DataAzurermAppService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service.html#timeouts DataAzurermAppService#timeouts}
  */
  readonly timeouts?: DataAzurermAppServiceTimeouts;
}
export class DataAzurermAppServiceConnectionString extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataAzurermAppServiceSiteConfigCors extends cdktf.ComplexComputedList {

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // support_credentials - computed: true, optional: false, required: false
  public get supportCredentials() {
    return this.getBooleanAttribute('support_credentials') as any;
  }
}
export class DataAzurermAppServiceSiteConfigIpRestrictionHeaders extends cdktf.ComplexComputedList {

  // x_azure_fdid - computed: true, optional: false, required: false
  public get xAzureFdid() {
    return this.getListAttribute('x_azure_fdid');
  }

  // x_fd_health_probe - computed: true, optional: false, required: false
  public get xFdHealthProbe() {
    return this.getListAttribute('x_fd_health_probe');
  }

  // x_forwarded_for - computed: true, optional: false, required: false
  public get xForwardedFor() {
    return this.getListAttribute('x_forwarded_for');
  }

  // x_forwarded_host - computed: true, optional: false, required: false
  public get xForwardedHost() {
    return this.getListAttribute('x_forwarded_host');
  }
}
export class DataAzurermAppServiceSiteConfigIpRestriction extends cdktf.ComplexComputedList {

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // service_tag - computed: true, optional: false, required: false
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }

  // virtual_network_subnet_id - computed: true, optional: false, required: false
  public get virtualNetworkSubnetId() {
    return this.getStringAttribute('virtual_network_subnet_id');
  }
}
export class DataAzurermAppServiceSiteConfigScmIpRestrictionHeaders extends cdktf.ComplexComputedList {

  // x_azure_fdid - computed: true, optional: false, required: false
  public get xAzureFdid() {
    return this.getListAttribute('x_azure_fdid');
  }

  // x_fd_health_probe - computed: true, optional: false, required: false
  public get xFdHealthProbe() {
    return this.getListAttribute('x_fd_health_probe');
  }

  // x_forwarded_for - computed: true, optional: false, required: false
  public get xForwardedFor() {
    return this.getListAttribute('x_forwarded_for');
  }

  // x_forwarded_host - computed: true, optional: false, required: false
  public get xForwardedHost() {
    return this.getListAttribute('x_forwarded_host');
  }
}
export class DataAzurermAppServiceSiteConfigScmIpRestriction extends cdktf.ComplexComputedList {

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // service_tag - computed: true, optional: false, required: false
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }

  // virtual_network_subnet_id - computed: true, optional: false, required: false
  public get virtualNetworkSubnetId() {
    return this.getStringAttribute('virtual_network_subnet_id');
  }
}
export class DataAzurermAppServiceSiteConfig extends cdktf.ComplexComputedList {

  // acr_use_managed_identity_credentials - computed: true, optional: false, required: false
  public get acrUseManagedIdentityCredentials() {
    return this.getBooleanAttribute('acr_use_managed_identity_credentials') as any;
  }

  // acr_user_managed_identity_client_id - computed: true, optional: false, required: false
  public get acrUserManagedIdentityClientId() {
    return this.getStringAttribute('acr_user_managed_identity_client_id');
  }

  // always_on - computed: true, optional: false, required: false
  public get alwaysOn() {
    return this.getBooleanAttribute('always_on') as any;
  }

  // app_command_line - computed: true, optional: false, required: false
  public get appCommandLine() {
    return this.getStringAttribute('app_command_line');
  }

  // cors - computed: true, optional: false, required: false
  public get cors() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cors') as any;
  }

  // default_documents - computed: true, optional: false, required: false
  public get defaultDocuments() {
    return this.getListAttribute('default_documents');
  }

  // dotnet_framework_version - computed: true, optional: false, required: false
  public get dotnetFrameworkVersion() {
    return this.getStringAttribute('dotnet_framework_version');
  }

  // ftps_state - computed: true, optional: false, required: false
  public get ftpsState() {
    return this.getStringAttribute('ftps_state');
  }

  // health_check_path - computed: true, optional: false, required: false
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }

  // http2_enabled - computed: true, optional: false, required: false
  public get http2Enabled() {
    return this.getBooleanAttribute('http2_enabled') as any;
  }

  // ip_restriction - computed: true, optional: false, required: false
  public get ipRestriction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_restriction') as any;
  }

  // java_container - computed: true, optional: false, required: false
  public get javaContainer() {
    return this.getStringAttribute('java_container');
  }

  // java_container_version - computed: true, optional: false, required: false
  public get javaContainerVersion() {
    return this.getStringAttribute('java_container_version');
  }

  // java_version - computed: true, optional: false, required: false
  public get javaVersion() {
    return this.getStringAttribute('java_version');
  }

  // linux_fx_version - computed: true, optional: false, required: false
  public get linuxFxVersion() {
    return this.getStringAttribute('linux_fx_version');
  }

  // local_mysql_enabled - computed: true, optional: false, required: false
  public get localMysqlEnabled() {
    return this.getBooleanAttribute('local_mysql_enabled') as any;
  }

  // managed_pipeline_mode - computed: true, optional: false, required: false
  public get managedPipelineMode() {
    return this.getStringAttribute('managed_pipeline_mode');
  }

  // min_tls_version - computed: true, optional: false, required: false
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }

  // number_of_workers - computed: true, optional: false, required: false
  public get numberOfWorkers() {
    return this.getNumberAttribute('number_of_workers');
  }

  // php_version - computed: true, optional: false, required: false
  public get phpVersion() {
    return this.getStringAttribute('php_version');
  }

  // python_version - computed: true, optional: false, required: false
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }

  // remote_debugging_enabled - computed: true, optional: false, required: false
  public get remoteDebuggingEnabled() {
    return this.getBooleanAttribute('remote_debugging_enabled') as any;
  }

  // remote_debugging_version - computed: true, optional: false, required: false
  public get remoteDebuggingVersion() {
    return this.getStringAttribute('remote_debugging_version');
  }

  // scm_ip_restriction - computed: true, optional: false, required: false
  public get scmIpRestriction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scm_ip_restriction') as any;
  }

  // scm_type - computed: true, optional: false, required: false
  public get scmType() {
    return this.getStringAttribute('scm_type');
  }

  // scm_use_main_ip_restriction - computed: true, optional: false, required: false
  public get scmUseMainIpRestriction() {
    return this.getBooleanAttribute('scm_use_main_ip_restriction') as any;
  }

  // use_32_bit_worker_process - computed: true, optional: false, required: false
  public get use32BitWorkerProcess() {
    return this.getBooleanAttribute('use_32_bit_worker_process') as any;
  }

  // vnet_route_all_enabled - computed: true, optional: false, required: false
  public get vnetRouteAllEnabled() {
    return this.getBooleanAttribute('vnet_route_all_enabled') as any;
  }

  // websockets_enabled - computed: true, optional: false, required: false
  public get websocketsEnabled() {
    return this.getBooleanAttribute('websockets_enabled') as any;
  }

  // windows_fx_version - computed: true, optional: false, required: false
  public get windowsFxVersion() {
    return this.getStringAttribute('windows_fx_version');
  }
}
export class DataAzurermAppServiceSiteCredential extends cdktf.ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class DataAzurermAppServiceSourceControl extends cdktf.ComplexComputedList {

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // manual_integration - computed: true, optional: false, required: false
  public get manualIntegration() {
    return this.getBooleanAttribute('manual_integration') as any;
  }

  // repo_url - computed: true, optional: false, required: false
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }

  // rollback_enabled - computed: true, optional: false, required: false
  public get rollbackEnabled() {
    return this.getBooleanAttribute('rollback_enabled') as any;
  }

  // use_mercurial - computed: true, optional: false, required: false
  public get useMercurial() {
    return this.getBooleanAttribute('use_mercurial') as any;
  }
}
export interface DataAzurermAppServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service.html#read DataAzurermAppService#read}
  */
  readonly read?: string;
}

function dataAzurermAppServiceTimeoutsToTerraform(struct?: DataAzurermAppServiceTimeoutsOutputReference | DataAzurermAppServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermAppServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/app_service.html azurerm_app_service}
*/
export class DataAzurermAppService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_app_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/app_service.html azurerm_app_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermAppServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermAppServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service',
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

  // app_service_plan_id - computed: true, optional: false, required: false
  public get appServicePlanId() {
    return this.getStringAttribute('app_service_plan_id');
  }

  // app_settings - computed: true, optional: false, required: false
  public appSettings(key: string): string {
    return new cdktf.StringMap(this, 'app_settings').lookup(key);
  }

  // client_affinity_enabled - computed: true, optional: false, required: false
  public get clientAffinityEnabled() {
    return this.getBooleanAttribute('client_affinity_enabled') as any;
  }

  // client_cert_enabled - computed: true, optional: false, required: false
  public get clientCertEnabled() {
    return this.getBooleanAttribute('client_cert_enabled') as any;
  }

  // connection_string - computed: true, optional: false, required: false
  public connectionString(index: string) {
    return new DataAzurermAppServiceConnectionString(this, 'connection_string', index);
  }

  // custom_domain_verification_id - computed: true, optional: false, required: false
  public get customDomainVerificationId() {
    return this.getStringAttribute('custom_domain_verification_id');
  }

  // default_site_hostname - computed: true, optional: false, required: false
  public get defaultSiteHostname() {
    return this.getStringAttribute('default_site_hostname');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // https_only - computed: true, optional: false, required: false
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // outbound_ip_address_list - computed: true, optional: false, required: false
  public get outboundIpAddressList() {
    return this.getListAttribute('outbound_ip_address_list');
  }

  // outbound_ip_addresses - computed: true, optional: false, required: false
  public get outboundIpAddresses() {
    return this.getStringAttribute('outbound_ip_addresses');
  }

  // possible_outbound_ip_address_list - computed: true, optional: false, required: false
  public get possibleOutboundIpAddressList() {
    return this.getListAttribute('possible_outbound_ip_address_list');
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

  // site_config - computed: true, optional: false, required: false
  public siteConfig(index: string) {
    return new DataAzurermAppServiceSiteConfig(this, 'site_config', index);
  }

  // site_credential - computed: true, optional: false, required: false
  public siteCredential(index: string) {
    return new DataAzurermAppServiceSiteCredential(this, 'site_credential', index);
  }

  // source_control - computed: true, optional: false, required: false
  public sourceControl(index: string) {
    return new DataAzurermAppServiceSourceControl(this, 'source_control', index);
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermAppServiceTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermAppServiceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermAppServiceTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermAppServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
