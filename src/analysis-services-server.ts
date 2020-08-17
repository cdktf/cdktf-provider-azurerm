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
    return this._adminUsers;
  }
  public set adminUsers(value: string[] | undefined) {
    this._adminUsers = value;
  }

  // backup_blob_container_uri - computed: false, optional: true, required: false
  private _backupBlobContainerUri?: string;
  public get backupBlobContainerUri() {
    return this._backupBlobContainerUri;
  }
  public set backupBlobContainerUri(value: string | undefined) {
    this._backupBlobContainerUri = value;
  }

  // enable_power_bi_service - computed: false, optional: true, required: false
  private _enablePowerBiService?: boolean;
  public get enablePowerBiService() {
    return this._enablePowerBiService;
  }
  public set enablePowerBiService(value: boolean | undefined) {
    this._enablePowerBiService = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // querypool_connection_mode - computed: true, optional: true, required: false
  private _querypoolConnectionMode?: string;
  public get querypoolConnectionMode() {
    return this._querypoolConnectionMode ?? this.getStringAttribute('querypool_connection_mode');
  }
  public set querypoolConnectionMode(value: string | undefined) {
    this._querypoolConnectionMode = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // server_full_name - computed: true, optional: false, required: true
  public get serverFullName() {
    return this.getStringAttribute('server_full_name');
  }

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string) {
    this._sku = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // ipv4_firewall_rule - computed: false, optional: true, required: false
  private _ipv4FirewallRule?: AnalysisServicesServerIpv4FirewallRule[];
  public get ipv4FirewallRule() {
    return this._ipv4FirewallRule;
  }
  public set ipv4FirewallRule(value: AnalysisServicesServerIpv4FirewallRule[] | undefined) {
    this._ipv4FirewallRule = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AnalysisServicesServerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AnalysisServicesServerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
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
