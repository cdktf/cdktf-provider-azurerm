// https://www.terraform.io/docs/providers/azurerm/d/spring_cloud_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermSpringCloudServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/spring_cloud_service.html#name DataAzurermSpringCloudService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/spring_cloud_service.html#resource_group_name DataAzurermSpringCloudService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/spring_cloud_service.html#timeouts DataAzurermSpringCloudService#timeouts}
  */
  readonly timeouts?: DataAzurermSpringCloudServiceTimeouts;
}
export class DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth extends cdktf.ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth extends cdktf.ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth extends cdktf.ComplexComputedList {

  // host_key - computed: true, optional: false, required: false
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }

  // host_key_algorithm - computed: true, optional: false, required: false
  public get hostKeyAlgorithm() {
    return this.getStringAttribute('host_key_algorithm');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // strict_host_key_checking_enabled - computed: true, optional: false, required: false
  public get strictHostKeyCheckingEnabled() {
    return this.getBooleanAttribute('strict_host_key_checking_enabled');
  }
}
export class DataAzurermSpringCloudServiceConfigServerGitSettingRepository extends cdktf.ComplexComputedList {

  // http_basic_auth - computed: true, optional: false, required: false
  public get httpBasicAuth() {
    return this.interpolationForAttribute('http_basic_auth') as any;
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getListAttribute('pattern');
  }

  // search_paths - computed: true, optional: false, required: false
  public get searchPaths() {
    return this.getListAttribute('search_paths');
  }

  // ssh_auth - computed: true, optional: false, required: false
  public get sshAuth() {
    return this.interpolationForAttribute('ssh_auth') as any;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export class DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth extends cdktf.ComplexComputedList {

  // host_key - computed: true, optional: false, required: false
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }

  // host_key_algorithm - computed: true, optional: false, required: false
  public get hostKeyAlgorithm() {
    return this.getStringAttribute('host_key_algorithm');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // strict_host_key_checking_enabled - computed: true, optional: false, required: false
  public get strictHostKeyCheckingEnabled() {
    return this.getBooleanAttribute('strict_host_key_checking_enabled');
  }
}
export class DataAzurermSpringCloudServiceConfigServerGitSetting extends cdktf.ComplexComputedList {

  // http_basic_auth - computed: true, optional: false, required: false
  public get httpBasicAuth() {
    return this.interpolationForAttribute('http_basic_auth') as any;
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.interpolationForAttribute('repository') as any;
  }

  // search_paths - computed: true, optional: false, required: false
  public get searchPaths() {
    return this.getListAttribute('search_paths');
  }

  // ssh_auth - computed: true, optional: false, required: false
  public get sshAuth() {
    return this.interpolationForAttribute('ssh_auth') as any;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export class DataAzurermSpringCloudServiceRequiredNetworkTrafficRules extends cdktf.ComplexComputedList {

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
export interface DataAzurermSpringCloudServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/spring_cloud_service.html#read DataAzurermSpringCloudService#read}
  */
  readonly read?: string;
}

function dataAzurermSpringCloudServiceTimeoutsToTerraform(struct?: DataAzurermSpringCloudServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/spring_cloud_service.html azurerm_spring_cloud_service}
*/
export class DataAzurermSpringCloudService extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/spring_cloud_service.html azurerm_spring_cloud_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermSpringCloudServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermSpringCloudServiceConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_server_git_setting - computed: true, optional: false, required: false
  public configServerGitSetting(index: string) {
    return new DataAzurermSpringCloudServiceConfigServerGitSetting(this, 'config_server_git_setting', index);
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
    return new DataAzurermSpringCloudServiceRequiredNetworkTrafficRules(this, 'required_network_traffic_rules', index);
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

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermSpringCloudServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermSpringCloudServiceTimeouts ) {
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
      timeouts: dataAzurermSpringCloudServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
