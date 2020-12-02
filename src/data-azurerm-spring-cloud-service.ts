// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_spring_cloud_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermSpringCloudServiceConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermSpringCloudServiceTimeouts;
}
export class DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth extends ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth extends ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth extends ComplexComputedList {

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
export class DataAzurermSpringCloudServiceConfigServerGitSettingRepository extends ComplexComputedList {

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
export class DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth extends ComplexComputedList {

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
export class DataAzurermSpringCloudServiceConfigServerGitSetting extends ComplexComputedList {

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
export interface DataAzurermSpringCloudServiceTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermSpringCloudService extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
    return new StringMap(this, 'tags').lookup(key);
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
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
