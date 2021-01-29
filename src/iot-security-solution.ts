// https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotSecuritySolutionConfig extends cdktf.TerraformMetaArguments {
  readonly displayName: string;
  readonly enabled?: boolean;
  readonly eventsToExport?: string[];
  readonly iothubIds: string[];
  readonly location: string;
  readonly logAnalyticsWorkspaceId?: string;
  readonly logUnmaskedIpsEnabled?: boolean;
  readonly name: string;
  readonly queryForResources?: string;
  readonly querySubscriptionIds?: string[];
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** recommendations_enabled block */
  readonly recommendationsEnabled?: IotSecuritySolutionRecommendationsEnabled[];
  /** timeouts block */
  readonly timeouts?: IotSecuritySolutionTimeouts;
}
export interface IotSecuritySolutionRecommendationsEnabled {
  readonly acrAuthentication?: boolean;
  readonly agentSendUnutilizedMsg?: boolean;
  readonly baseline?: boolean;
  readonly edgeHubMemOptimize?: boolean;
  readonly edgeLoggingOption?: boolean;
  readonly inconsistentModuleSettings?: boolean;
  readonly installAgent?: boolean;
  readonly ipFilterDenyAll?: boolean;
  readonly ipFilterPermissiveRule?: boolean;
  readonly openPorts?: boolean;
  readonly permissiveFirewallPolicy?: boolean;
  readonly permissiveInputFirewallRules?: boolean;
  readonly permissiveOutputFirewallRules?: boolean;
  readonly privilegedDockerOptions?: boolean;
  readonly sharedCredentials?: boolean;
  readonly vulnerableTlsCipherSuite?: boolean;
}

function iotSecuritySolutionRecommendationsEnabledToTerraform(struct?: IotSecuritySolutionRecommendationsEnabled): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acr_authentication: cdktf.booleanToTerraform(struct!.acrAuthentication),
    agent_send_unutilized_msg: cdktf.booleanToTerraform(struct!.agentSendUnutilizedMsg),
    baseline: cdktf.booleanToTerraform(struct!.baseline),
    edge_hub_mem_optimize: cdktf.booleanToTerraform(struct!.edgeHubMemOptimize),
    edge_logging_option: cdktf.booleanToTerraform(struct!.edgeLoggingOption),
    inconsistent_module_settings: cdktf.booleanToTerraform(struct!.inconsistentModuleSettings),
    install_agent: cdktf.booleanToTerraform(struct!.installAgent),
    ip_filter_deny_all: cdktf.booleanToTerraform(struct!.ipFilterDenyAll),
    ip_filter_permissive_rule: cdktf.booleanToTerraform(struct!.ipFilterPermissiveRule),
    open_ports: cdktf.booleanToTerraform(struct!.openPorts),
    permissive_firewall_policy: cdktf.booleanToTerraform(struct!.permissiveFirewallPolicy),
    permissive_input_firewall_rules: cdktf.booleanToTerraform(struct!.permissiveInputFirewallRules),
    permissive_output_firewall_rules: cdktf.booleanToTerraform(struct!.permissiveOutputFirewallRules),
    privileged_docker_options: cdktf.booleanToTerraform(struct!.privilegedDockerOptions),
    shared_credentials: cdktf.booleanToTerraform(struct!.sharedCredentials),
    vulnerable_tls_cipher_suite: cdktf.booleanToTerraform(struct!.vulnerableTlsCipherSuite),
  }
}

export interface IotSecuritySolutionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function iotSecuritySolutionTimeoutsToTerraform(struct?: IotSecuritySolutionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class IotSecuritySolution extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IotSecuritySolutionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iot_security_solution',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._eventsToExport = config.eventsToExport;
    this._iothubIds = config.iothubIds;
    this._location = config.location;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._logUnmaskedIpsEnabled = config.logUnmaskedIpsEnabled;
    this._name = config.name;
    this._queryForResources = config.queryForResources;
    this._querySubscriptionIds = config.querySubscriptionIds;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._recommendationsEnabled = config.recommendationsEnabled;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // events_to_export - computed: false, optional: true, required: false
  private _eventsToExport?: string[];
  public get eventsToExport() {
    return this.getListAttribute('events_to_export');
  }
  public set eventsToExport(value: string[] ) {
    this._eventsToExport = value;
  }
  public resetEventsToExport() {
    this._eventsToExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsToExportInput() {
    return this._eventsToExport
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iothub_ids - computed: false, optional: false, required: true
  private _iothubIds: string[];
  public get iothubIds() {
    return this.getListAttribute('iothub_ids');
  }
  public set iothubIds(value: string[]) {
    this._iothubIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubIdsInput() {
    return this._iothubIds
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

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string;
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string ) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId
  }

  // log_unmasked_ips_enabled - computed: false, optional: true, required: false
  private _logUnmaskedIpsEnabled?: boolean;
  public get logUnmaskedIpsEnabled() {
    return this.getBooleanAttribute('log_unmasked_ips_enabled');
  }
  public set logUnmaskedIpsEnabled(value: boolean ) {
    this._logUnmaskedIpsEnabled = value;
  }
  public resetLogUnmaskedIpsEnabled() {
    this._logUnmaskedIpsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUnmaskedIpsEnabledInput() {
    return this._logUnmaskedIpsEnabled
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

  // query_for_resources - computed: true, optional: true, required: false
  private _queryForResources?: string;
  public get queryForResources() {
    return this.getStringAttribute('query_for_resources');
  }
  public set queryForResources(value: string) {
    this._queryForResources = value;
  }
  public resetQueryForResources() {
    this._queryForResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryForResourcesInput() {
    return this._queryForResources
  }

  // query_subscription_ids - computed: true, optional: true, required: false
  private _querySubscriptionIds?: string[];
  public get querySubscriptionIds() {
    return this.getListAttribute('query_subscription_ids');
  }
  public set querySubscriptionIds(value: string[]) {
    this._querySubscriptionIds = value;
  }
  public resetQuerySubscriptionIds() {
    this._querySubscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querySubscriptionIdsInput() {
    return this._querySubscriptionIds
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

  // recommendations_enabled - computed: false, optional: true, required: false
  private _recommendationsEnabled?: IotSecuritySolutionRecommendationsEnabled[];
  public get recommendationsEnabled() {
    return this.interpolationForAttribute('recommendations_enabled') as any;
  }
  public set recommendationsEnabled(value: IotSecuritySolutionRecommendationsEnabled[] ) {
    this._recommendationsEnabled = value;
  }
  public resetRecommendationsEnabled() {
    this._recommendationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationsEnabledInput() {
    return this._recommendationsEnabled
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IotSecuritySolutionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IotSecuritySolutionTimeouts ) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      events_to_export: cdktf.listMapper(cdktf.stringToTerraform)(this._eventsToExport),
      iothub_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._iothubIds),
      location: cdktf.stringToTerraform(this._location),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      log_unmasked_ips_enabled: cdktf.booleanToTerraform(this._logUnmaskedIpsEnabled),
      name: cdktf.stringToTerraform(this._name),
      query_for_resources: cdktf.stringToTerraform(this._queryForResources),
      query_subscription_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._querySubscriptionIds),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      recommendations_enabled: cdktf.listMapper(iotSecuritySolutionRecommendationsEnabledToTerraform)(this._recommendationsEnabled),
      timeouts: iotSecuritySolutionTimeoutsToTerraform(this._timeouts),
    };
  }
}
