// https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#location SpringCloudService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#name SpringCloudService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#resource_group_name SpringCloudService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#sku_name SpringCloudService#sku_name}
  */
  readonly skuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#tags SpringCloudService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * config_server_git_setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#config_server_git_setting SpringCloudService#config_server_git_setting}
  */
  readonly configServerGitSetting?: SpringCloudServiceConfigServerGitSetting[];
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#network SpringCloudService#network}
  */
  readonly network?: SpringCloudServiceNetwork[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#timeouts SpringCloudService#timeouts}
  */
  readonly timeouts?: SpringCloudServiceTimeouts;
  /**
  * trace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#trace SpringCloudService#trace}
  */
  readonly trace?: SpringCloudServiceTrace[];
}
export class SpringCloudServiceRequiredNetworkTrafficRules extends cdktf.ComplexComputedList {

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // fqdns - computed: true, optional: false, required: false
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export interface SpringCloudServiceConfigServerGitSettingHttpBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#password SpringCloudService#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#username SpringCloudService#username}
  */
  readonly username: string;
}

function springCloudServiceConfigServerGitSettingHttpBasicAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingHttpBasicAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#password SpringCloudService#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#username SpringCloudService#username}
  */
  readonly username: string;
}

function springCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface SpringCloudServiceConfigServerGitSettingRepositorySshAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#host_key SpringCloudService#host_key}
  */
  readonly hostKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#host_key_algorithm SpringCloudService#host_key_algorithm}
  */
  readonly hostKeyAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#private_key SpringCloudService#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}
  */
  readonly strictHostKeyCheckingEnabled?: boolean;
}

function springCloudServiceConfigServerGitSettingRepositorySshAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepositorySshAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_key: cdktf.stringToTerraform(struct!.hostKey),
    host_key_algorithm: cdktf.stringToTerraform(struct!.hostKeyAlgorithm),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    strict_host_key_checking_enabled: cdktf.booleanToTerraform(struct!.strictHostKeyCheckingEnabled),
  }
}

export interface SpringCloudServiceConfigServerGitSettingRepository {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#label SpringCloudService#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#name SpringCloudService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#pattern SpringCloudService#pattern}
  */
  readonly pattern?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#search_paths SpringCloudService#search_paths}
  */
  readonly searchPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#uri SpringCloudService#uri}
  */
  readonly uri: string;
  /**
  * http_basic_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#http_basic_auth SpringCloudService#http_basic_auth}
  */
  readonly httpBasicAuth?: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth[];
  /**
  * ssh_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#ssh_auth SpringCloudService#ssh_auth}
  */
  readonly sshAuth?: SpringCloudServiceConfigServerGitSettingRepositorySshAuth[];
}

function springCloudServiceConfigServerGitSettingRepositoryToTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.listMapper(cdktf.stringToTerraform)(struct!.pattern),
    search_paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searchPaths),
    uri: cdktf.stringToTerraform(struct!.uri),
    http_basic_auth: cdktf.listMapper(springCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthToTerraform)(struct!.httpBasicAuth),
    ssh_auth: cdktf.listMapper(springCloudServiceConfigServerGitSettingRepositorySshAuthToTerraform)(struct!.sshAuth),
  }
}

export interface SpringCloudServiceConfigServerGitSettingSshAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#host_key SpringCloudService#host_key}
  */
  readonly hostKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#host_key_algorithm SpringCloudService#host_key_algorithm}
  */
  readonly hostKeyAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#private_key SpringCloudService#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}
  */
  readonly strictHostKeyCheckingEnabled?: boolean;
}

function springCloudServiceConfigServerGitSettingSshAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingSshAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_key: cdktf.stringToTerraform(struct!.hostKey),
    host_key_algorithm: cdktf.stringToTerraform(struct!.hostKeyAlgorithm),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    strict_host_key_checking_enabled: cdktf.booleanToTerraform(struct!.strictHostKeyCheckingEnabled),
  }
}

export interface SpringCloudServiceConfigServerGitSetting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#label SpringCloudService#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#search_paths SpringCloudService#search_paths}
  */
  readonly searchPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#uri SpringCloudService#uri}
  */
  readonly uri: string;
  /**
  * http_basic_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#http_basic_auth SpringCloudService#http_basic_auth}
  */
  readonly httpBasicAuth?: SpringCloudServiceConfigServerGitSettingHttpBasicAuth[];
  /**
  * repository block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#repository SpringCloudService#repository}
  */
  readonly repository?: SpringCloudServiceConfigServerGitSettingRepository[];
  /**
  * ssh_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#ssh_auth SpringCloudService#ssh_auth}
  */
  readonly sshAuth?: SpringCloudServiceConfigServerGitSettingSshAuth[];
}

function springCloudServiceConfigServerGitSettingToTerraform(struct?: SpringCloudServiceConfigServerGitSetting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    search_paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searchPaths),
    uri: cdktf.stringToTerraform(struct!.uri),
    http_basic_auth: cdktf.listMapper(springCloudServiceConfigServerGitSettingHttpBasicAuthToTerraform)(struct!.httpBasicAuth),
    repository: cdktf.listMapper(springCloudServiceConfigServerGitSettingRepositoryToTerraform)(struct!.repository),
    ssh_auth: cdktf.listMapper(springCloudServiceConfigServerGitSettingSshAuthToTerraform)(struct!.sshAuth),
  }
}

export interface SpringCloudServiceNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#app_network_resource_group SpringCloudService#app_network_resource_group}
  */
  readonly appNetworkResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#app_subnet_id SpringCloudService#app_subnet_id}
  */
  readonly appSubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#cidr_ranges SpringCloudService#cidr_ranges}
  */
  readonly cidrRanges: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#service_runtime_network_resource_group SpringCloudService#service_runtime_network_resource_group}
  */
  readonly serviceRuntimeNetworkResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#service_runtime_subnet_id SpringCloudService#service_runtime_subnet_id}
  */
  readonly serviceRuntimeSubnetId: string;
}

function springCloudServiceNetworkToTerraform(struct?: SpringCloudServiceNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_network_resource_group: cdktf.stringToTerraform(struct!.appNetworkResourceGroup),
    app_subnet_id: cdktf.stringToTerraform(struct!.appSubnetId),
    cidr_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrRanges),
    service_runtime_network_resource_group: cdktf.stringToTerraform(struct!.serviceRuntimeNetworkResourceGroup),
    service_runtime_subnet_id: cdktf.stringToTerraform(struct!.serviceRuntimeSubnetId),
  }
}

export interface SpringCloudServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#create SpringCloudService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#delete SpringCloudService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#read SpringCloudService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#update SpringCloudService#update}
  */
  readonly update?: string;
}

function springCloudServiceTimeoutsToTerraform(struct?: SpringCloudServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface SpringCloudServiceTrace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#instrumentation_key SpringCloudService#instrumentation_key}
  */
  readonly instrumentationKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#sample_rate SpringCloudService#sample_rate}
  */
  readonly sampleRate?: number;
}

function springCloudServiceTraceToTerraform(struct?: SpringCloudServiceTrace): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instrumentation_key: cdktf.stringToTerraform(struct!.instrumentationKey),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html azurerm_spring_cloud_service}
*/
export class SpringCloudService extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html azurerm_spring_cloud_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudServiceConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_service',
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
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._configServerGitSetting = config.configServerGitSetting;
    this._network = config.network;
    this._timeouts = config.timeouts;
    this._trace = config.trace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // outbound_public_ip_addresses - computed: true, optional: false, required: false
  public get outboundPublicIpAddresses() {
    return this.getListAttribute('outbound_public_ip_addresses');
  }

  // required_network_traffic_rules - computed: true, optional: false, required: false
  public requiredNetworkTrafficRules(index: string) {
    return new SpringCloudServiceRequiredNetworkTrafficRules(this, 'required_network_traffic_rules', index);
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

  // sku_name - computed: false, optional: true, required: false
  private _skuName?: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string ) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
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

  // config_server_git_setting - computed: false, optional: true, required: false
  private _configServerGitSetting?: SpringCloudServiceConfigServerGitSetting[];
  public get configServerGitSetting() {
    return this.interpolationForAttribute('config_server_git_setting') as any;
  }
  public set configServerGitSetting(value: SpringCloudServiceConfigServerGitSetting[] ) {
    this._configServerGitSetting = value;
  }
  public resetConfigServerGitSetting() {
    this._configServerGitSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configServerGitSettingInput() {
    return this._configServerGitSetting
  }

  // network - computed: false, optional: true, required: false
  private _network?: SpringCloudServiceNetwork[];
  public get network() {
    return this.interpolationForAttribute('network') as any;
  }
  public set network(value: SpringCloudServiceNetwork[] ) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpringCloudServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SpringCloudServiceTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // trace - computed: false, optional: true, required: false
  private _trace?: SpringCloudServiceTrace[];
  public get trace() {
    return this.interpolationForAttribute('trace') as any;
  }
  public set trace(value: SpringCloudServiceTrace[] ) {
    this._trace = value;
  }
  public resetTrace() {
    this._trace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      config_server_git_setting: cdktf.listMapper(springCloudServiceConfigServerGitSettingToTerraform)(this._configServerGitSetting),
      network: cdktf.listMapper(springCloudServiceNetworkToTerraform)(this._network),
      timeouts: springCloudServiceTimeoutsToTerraform(this._timeouts),
      trace: cdktf.listMapper(springCloudServiceTraceToTerraform)(this._trace),
    };
  }
}
