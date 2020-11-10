// https://www.terraform.io/docs/providers/azurerm/r/analysis_services_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AnalysisServicesServerConfig extends TerraformMetaArguments {
  readonly adminUsers?: string[];
  readonly backupBlobContainerUri?: string;
  readonly enablePowerBiService?: boolean;
  readonly location: string;
  readonly name: string;
  readonly querypoolConnectionMode?: string;
  readonly resourceGroupName: string;
  readonly sku: string;
  readonly tags?: { [key: string]: string };
  /** ipv4_firewall_rule block */
  readonly ipv4FirewallRule?: AnalysisServicesServerIpv4FirewallRule[];
  /** timeouts block */
  readonly timeouts?: AnalysisServicesServerTimeouts;
}
export interface AnalysisServicesServerIpv4FirewallRule {
  readonly name: string;
  readonly rangeEnd: string;
  readonly rangeStart: string;
}
export interface AnalysisServicesServerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AnalysisServicesServer extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AnalysisServicesServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_analysis_services_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminUsers = config.adminUsers;
    this._backupBlobContainerUri = config.backupBlobContainerUri;
    this._enablePowerBiService = config.enablePowerBiService;
    this._location = config.location;
    this._name = config.name;
    this._querypoolConnectionMode = config.querypoolConnectionMode;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._ipv4FirewallRule = config.ipv4FirewallRule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_users - computed: false, optional: true, required: false
  private _adminUsers?: string[];
  public get adminUsers() {
    return this.getListAttribute('admin_users');
  }
  public set adminUsers(value: string[] ) {
    this._adminUsers = value;
  }
  public resetAdminUsers() {
    this._adminUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers
  }

  // backup_blob_container_uri - computed: false, optional: true, required: false
  private _backupBlobContainerUri?: string;
  public get backupBlobContainerUri() {
    return this.getStringAttribute('backup_blob_container_uri');
  }
  public set backupBlobContainerUri(value: string ) {
    this._backupBlobContainerUri = value;
  }
  public resetBackupBlobContainerUri() {
    this._backupBlobContainerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupBlobContainerUriInput() {
    return this._backupBlobContainerUri
  }

  // enable_power_bi_service - computed: false, optional: true, required: false
  private _enablePowerBiService?: boolean;
  public get enablePowerBiService() {
    return this.getBooleanAttribute('enable_power_bi_service');
  }
  public set enablePowerBiService(value: boolean ) {
    this._enablePowerBiService = value;
  }
  public resetEnablePowerBiService() {
    this._enablePowerBiService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePowerBiServiceInput() {
    return this._enablePowerBiService
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

  // querypool_connection_mode - computed: true, optional: true, required: false
  private _querypoolConnectionMode?: string;
  public get querypoolConnectionMode() {
    return this.getStringAttribute('querypool_connection_mode');
  }
  public set querypoolConnectionMode(value: string) {
    this._querypoolConnectionMode = value;
  }
  public resetQuerypoolConnectionMode() {
    this._querypoolConnectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querypoolConnectionModeInput() {
    return this._querypoolConnectionMode
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

  // server_full_name - computed: true, optional: false, required: false
  public get serverFullName() {
    return this.getStringAttribute('server_full_name');
  }

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
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

  // ipv4_firewall_rule - computed: false, optional: true, required: false
  private _ipv4FirewallRule?: AnalysisServicesServerIpv4FirewallRule[];
  public get ipv4FirewallRule() {
    return this.interpolationForAttribute('ipv4_firewall_rule') as any;
  }
  public set ipv4FirewallRule(value: AnalysisServicesServerIpv4FirewallRule[] ) {
    this._ipv4FirewallRule = value;
  }
  public resetIpv4FirewallRule() {
    this._ipv4FirewallRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FirewallRuleInput() {
    return this._ipv4FirewallRule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AnalysisServicesServerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AnalysisServicesServerTimeouts ) {
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
      admin_users: this._adminUsers,
      backup_blob_container_uri: this._backupBlobContainerUri,
      enable_power_bi_service: this._enablePowerBiService,
      location: this._location,
      name: this._name,
      querypool_connection_mode: this._querypoolConnectionMode,
      resource_group_name: this._resourceGroupName,
      sku: this._sku,
      tags: this._tags,
      ipv4_firewall_rule: this._ipv4FirewallRule,
      timeouts: this._timeouts,
    };
  }
}
