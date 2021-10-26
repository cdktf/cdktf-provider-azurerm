// https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotSecuritySolutionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#disabled_data_sources IotSecuritySolution#disabled_data_sources}
  */
  readonly disabledDataSources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#display_name IotSecuritySolution#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#enabled IotSecuritySolution#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#events_to_export IotSecuritySolution#events_to_export}
  */
  readonly eventsToExport?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#iothub_ids IotSecuritySolution#iothub_ids}
  */
  readonly iothubIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#location IotSecuritySolution#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}
  */
  readonly logUnmaskedIpsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#name IotSecuritySolution#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#query_for_resources IotSecuritySolution#query_for_resources}
  */
  readonly queryForResources?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#query_subscription_ids IotSecuritySolution#query_subscription_ids}
  */
  readonly querySubscriptionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#resource_group_name IotSecuritySolution#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#tags IotSecuritySolution#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * additional_workspace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#additional_workspace IotSecuritySolution#additional_workspace}
  */
  readonly additionalWorkspace?: IotSecuritySolutionAdditionalWorkspace[];
  /**
  * recommendations_enabled block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#recommendations_enabled IotSecuritySolution#recommendations_enabled}
  */
  readonly recommendationsEnabled?: IotSecuritySolutionRecommendationsEnabled;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#timeouts IotSecuritySolution#timeouts}
  */
  readonly timeouts?: IotSecuritySolutionTimeouts;
}
export interface IotSecuritySolutionAdditionalWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#data_types IotSecuritySolution#data_types}
  */
  readonly dataTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#workspace_id IotSecuritySolution#workspace_id}
  */
  readonly workspaceId: string;
}

function iotSecuritySolutionAdditionalWorkspaceToTerraform(struct?: IotSecuritySolutionAdditionalWorkspace): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dataTypes),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}

export interface IotSecuritySolutionRecommendationsEnabled {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#acr_authentication IotSecuritySolution#acr_authentication}
  */
  readonly acrAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#agent_send_unutilized_msg IotSecuritySolution#agent_send_unutilized_msg}
  */
  readonly agentSendUnutilizedMsg?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#baseline IotSecuritySolution#baseline}
  */
  readonly baseline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#edge_hub_mem_optimize IotSecuritySolution#edge_hub_mem_optimize}
  */
  readonly edgeHubMemOptimize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#edge_logging_option IotSecuritySolution#edge_logging_option}
  */
  readonly edgeLoggingOption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#inconsistent_module_settings IotSecuritySolution#inconsistent_module_settings}
  */
  readonly inconsistentModuleSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#install_agent IotSecuritySolution#install_agent}
  */
  readonly installAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#ip_filter_deny_all IotSecuritySolution#ip_filter_deny_all}
  */
  readonly ipFilterDenyAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#ip_filter_permissive_rule IotSecuritySolution#ip_filter_permissive_rule}
  */
  readonly ipFilterPermissiveRule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#open_ports IotSecuritySolution#open_ports}
  */
  readonly openPorts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#permissive_firewall_policy IotSecuritySolution#permissive_firewall_policy}
  */
  readonly permissiveFirewallPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#permissive_input_firewall_rules IotSecuritySolution#permissive_input_firewall_rules}
  */
  readonly permissiveInputFirewallRules?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#permissive_output_firewall_rules IotSecuritySolution#permissive_output_firewall_rules}
  */
  readonly permissiveOutputFirewallRules?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#privileged_docker_options IotSecuritySolution#privileged_docker_options}
  */
  readonly privilegedDockerOptions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#shared_credentials IotSecuritySolution#shared_credentials}
  */
  readonly sharedCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#vulnerable_tls_cipher_suite IotSecuritySolution#vulnerable_tls_cipher_suite}
  */
  readonly vulnerableTlsCipherSuite?: boolean | cdktf.IResolvable;
}

function iotSecuritySolutionRecommendationsEnabledToTerraform(struct?: IotSecuritySolutionRecommendationsEnabledOutputReference | IotSecuritySolutionRecommendationsEnabled): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class IotSecuritySolutionRecommendationsEnabledOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // acr_authentication - computed: false, optional: true, required: false
  private _acrAuthentication?: boolean | cdktf.IResolvable | undefined; 
  public get acrAuthentication() {
    return this.getBooleanAttribute('acr_authentication') as any;
  }
  public set acrAuthentication(value: boolean | cdktf.IResolvable | undefined) {
    this._acrAuthentication = value;
  }
  public resetAcrAuthentication() {
    this._acrAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrAuthenticationInput() {
    return this._acrAuthentication
  }

  // agent_send_unutilized_msg - computed: false, optional: true, required: false
  private _agentSendUnutilizedMsg?: boolean | cdktf.IResolvable | undefined; 
  public get agentSendUnutilizedMsg() {
    return this.getBooleanAttribute('agent_send_unutilized_msg') as any;
  }
  public set agentSendUnutilizedMsg(value: boolean | cdktf.IResolvable | undefined) {
    this._agentSendUnutilizedMsg = value;
  }
  public resetAgentSendUnutilizedMsg() {
    this._agentSendUnutilizedMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentSendUnutilizedMsgInput() {
    return this._agentSendUnutilizedMsg
  }

  // baseline - computed: false, optional: true, required: false
  private _baseline?: boolean | cdktf.IResolvable | undefined; 
  public get baseline() {
    return this.getBooleanAttribute('baseline') as any;
  }
  public set baseline(value: boolean | cdktf.IResolvable | undefined) {
    this._baseline = value;
  }
  public resetBaseline() {
    this._baseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineInput() {
    return this._baseline
  }

  // edge_hub_mem_optimize - computed: false, optional: true, required: false
  private _edgeHubMemOptimize?: boolean | cdktf.IResolvable | undefined; 
  public get edgeHubMemOptimize() {
    return this.getBooleanAttribute('edge_hub_mem_optimize') as any;
  }
  public set edgeHubMemOptimize(value: boolean | cdktf.IResolvable | undefined) {
    this._edgeHubMemOptimize = value;
  }
  public resetEdgeHubMemOptimize() {
    this._edgeHubMemOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeHubMemOptimizeInput() {
    return this._edgeHubMemOptimize
  }

  // edge_logging_option - computed: false, optional: true, required: false
  private _edgeLoggingOption?: boolean | cdktf.IResolvable | undefined; 
  public get edgeLoggingOption() {
    return this.getBooleanAttribute('edge_logging_option') as any;
  }
  public set edgeLoggingOption(value: boolean | cdktf.IResolvable | undefined) {
    this._edgeLoggingOption = value;
  }
  public resetEdgeLoggingOption() {
    this._edgeLoggingOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLoggingOptionInput() {
    return this._edgeLoggingOption
  }

  // inconsistent_module_settings - computed: false, optional: true, required: false
  private _inconsistentModuleSettings?: boolean | cdktf.IResolvable | undefined; 
  public get inconsistentModuleSettings() {
    return this.getBooleanAttribute('inconsistent_module_settings') as any;
  }
  public set inconsistentModuleSettings(value: boolean | cdktf.IResolvable | undefined) {
    this._inconsistentModuleSettings = value;
  }
  public resetInconsistentModuleSettings() {
    this._inconsistentModuleSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inconsistentModuleSettingsInput() {
    return this._inconsistentModuleSettings
  }

  // install_agent - computed: false, optional: true, required: false
  private _installAgent?: boolean | cdktf.IResolvable | undefined; 
  public get installAgent() {
    return this.getBooleanAttribute('install_agent') as any;
  }
  public set installAgent(value: boolean | cdktf.IResolvable | undefined) {
    this._installAgent = value;
  }
  public resetInstallAgent() {
    this._installAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installAgentInput() {
    return this._installAgent
  }

  // ip_filter_deny_all - computed: false, optional: true, required: false
  private _ipFilterDenyAll?: boolean | cdktf.IResolvable | undefined; 
  public get ipFilterDenyAll() {
    return this.getBooleanAttribute('ip_filter_deny_all') as any;
  }
  public set ipFilterDenyAll(value: boolean | cdktf.IResolvable | undefined) {
    this._ipFilterDenyAll = value;
  }
  public resetIpFilterDenyAll() {
    this._ipFilterDenyAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterDenyAllInput() {
    return this._ipFilterDenyAll
  }

  // ip_filter_permissive_rule - computed: false, optional: true, required: false
  private _ipFilterPermissiveRule?: boolean | cdktf.IResolvable | undefined; 
  public get ipFilterPermissiveRule() {
    return this.getBooleanAttribute('ip_filter_permissive_rule') as any;
  }
  public set ipFilterPermissiveRule(value: boolean | cdktf.IResolvable | undefined) {
    this._ipFilterPermissiveRule = value;
  }
  public resetIpFilterPermissiveRule() {
    this._ipFilterPermissiveRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterPermissiveRuleInput() {
    return this._ipFilterPermissiveRule
  }

  // open_ports - computed: false, optional: true, required: false
  private _openPorts?: boolean | cdktf.IResolvable | undefined; 
  public get openPorts() {
    return this.getBooleanAttribute('open_ports') as any;
  }
  public set openPorts(value: boolean | cdktf.IResolvable | undefined) {
    this._openPorts = value;
  }
  public resetOpenPorts() {
    this._openPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openPortsInput() {
    return this._openPorts
  }

  // permissive_firewall_policy - computed: false, optional: true, required: false
  private _permissiveFirewallPolicy?: boolean | cdktf.IResolvable | undefined; 
  public get permissiveFirewallPolicy() {
    return this.getBooleanAttribute('permissive_firewall_policy') as any;
  }
  public set permissiveFirewallPolicy(value: boolean | cdktf.IResolvable | undefined) {
    this._permissiveFirewallPolicy = value;
  }
  public resetPermissiveFirewallPolicy() {
    this._permissiveFirewallPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissiveFirewallPolicyInput() {
    return this._permissiveFirewallPolicy
  }

  // permissive_input_firewall_rules - computed: false, optional: true, required: false
  private _permissiveInputFirewallRules?: boolean | cdktf.IResolvable | undefined; 
  public get permissiveInputFirewallRules() {
    return this.getBooleanAttribute('permissive_input_firewall_rules') as any;
  }
  public set permissiveInputFirewallRules(value: boolean | cdktf.IResolvable | undefined) {
    this._permissiveInputFirewallRules = value;
  }
  public resetPermissiveInputFirewallRules() {
    this._permissiveInputFirewallRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissiveInputFirewallRulesInput() {
    return this._permissiveInputFirewallRules
  }

  // permissive_output_firewall_rules - computed: false, optional: true, required: false
  private _permissiveOutputFirewallRules?: boolean | cdktf.IResolvable | undefined; 
  public get permissiveOutputFirewallRules() {
    return this.getBooleanAttribute('permissive_output_firewall_rules') as any;
  }
  public set permissiveOutputFirewallRules(value: boolean | cdktf.IResolvable | undefined) {
    this._permissiveOutputFirewallRules = value;
  }
  public resetPermissiveOutputFirewallRules() {
    this._permissiveOutputFirewallRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissiveOutputFirewallRulesInput() {
    return this._permissiveOutputFirewallRules
  }

  // privileged_docker_options - computed: false, optional: true, required: false
  private _privilegedDockerOptions?: boolean | cdktf.IResolvable | undefined; 
  public get privilegedDockerOptions() {
    return this.getBooleanAttribute('privileged_docker_options') as any;
  }
  public set privilegedDockerOptions(value: boolean | cdktf.IResolvable | undefined) {
    this._privilegedDockerOptions = value;
  }
  public resetPrivilegedDockerOptions() {
    this._privilegedDockerOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedDockerOptionsInput() {
    return this._privilegedDockerOptions
  }

  // shared_credentials - computed: false, optional: true, required: false
  private _sharedCredentials?: boolean | cdktf.IResolvable | undefined; 
  public get sharedCredentials() {
    return this.getBooleanAttribute('shared_credentials') as any;
  }
  public set sharedCredentials(value: boolean | cdktf.IResolvable | undefined) {
    this._sharedCredentials = value;
  }
  public resetSharedCredentials() {
    this._sharedCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCredentialsInput() {
    return this._sharedCredentials
  }

  // vulnerable_tls_cipher_suite - computed: false, optional: true, required: false
  private _vulnerableTlsCipherSuite?: boolean | cdktf.IResolvable | undefined; 
  public get vulnerableTlsCipherSuite() {
    return this.getBooleanAttribute('vulnerable_tls_cipher_suite') as any;
  }
  public set vulnerableTlsCipherSuite(value: boolean | cdktf.IResolvable | undefined) {
    this._vulnerableTlsCipherSuite = value;
  }
  public resetVulnerableTlsCipherSuite() {
    this._vulnerableTlsCipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerableTlsCipherSuiteInput() {
    return this._vulnerableTlsCipherSuite
  }
}
export interface IotSecuritySolutionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#create IotSecuritySolution#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#delete IotSecuritySolution#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#read IotSecuritySolution#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html#update IotSecuritySolution#update}
  */
  readonly update?: string;
}

function iotSecuritySolutionTimeoutsToTerraform(struct?: IotSecuritySolutionTimeoutsOutputReference | IotSecuritySolutionTimeouts): any {
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

export class IotSecuritySolutionTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html azurerm_iot_security_solution}
*/
export class IotSecuritySolution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_iot_security_solution";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_solution.html azurerm_iot_security_solution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotSecuritySolutionConfig
  */
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
    this._disabledDataSources = config.disabledDataSources;
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
    this._additionalWorkspace = config.additionalWorkspace;
    this._recommendationsEnabled = config.recommendationsEnabled;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled_data_sources - computed: false, optional: true, required: false
  private _disabledDataSources?: string[] | undefined; 
  public get disabledDataSources() {
    return this.getListAttribute('disabled_data_sources');
  }
  public set disabledDataSources(value: string[] | undefined) {
    this._disabledDataSources = value;
  }
  public resetDisabledDataSources() {
    this._disabledDataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledDataSourcesInput() {
    return this._disabledDataSources
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
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

  // events_to_export - computed: false, optional: true, required: false
  private _eventsToExport?: string[] | undefined; 
  public get eventsToExport() {
    return this.getListAttribute('events_to_export');
  }
  public set eventsToExport(value: string[] | undefined) {
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
  private _iothubIds?: string[]; 
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

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string | undefined; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string | undefined) {
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
  private _logUnmaskedIpsEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get logUnmaskedIpsEnabled() {
    return this.getBooleanAttribute('log_unmasked_ips_enabled') as any;
  }
  public set logUnmaskedIpsEnabled(value: boolean | cdktf.IResolvable | undefined) {
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

  // query_for_resources - computed: true, optional: true, required: false
  private _queryForResources?: string | undefined; 
  public get queryForResources() {
    return this.getStringAttribute('query_for_resources');
  }
  public set queryForResources(value: string | undefined) {
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
  private _querySubscriptionIds?: string[] | undefined; 
  public get querySubscriptionIds() {
    return this.getListAttribute('query_subscription_ids');
  }
  public set querySubscriptionIds(value: string[] | undefined) {
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

  // additional_workspace - computed: false, optional: true, required: false
  private _additionalWorkspace?: IotSecuritySolutionAdditionalWorkspace[] | undefined; 
  public get additionalWorkspace() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_workspace') as any;
  }
  public set additionalWorkspace(value: IotSecuritySolutionAdditionalWorkspace[] | undefined) {
    this._additionalWorkspace = value;
  }
  public resetAdditionalWorkspace() {
    this._additionalWorkspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalWorkspaceInput() {
    return this._additionalWorkspace
  }

  // recommendations_enabled - computed: false, optional: true, required: false
  private _recommendationsEnabled?: IotSecuritySolutionRecommendationsEnabled | undefined; 
  private __recommendationsEnabledOutput = new IotSecuritySolutionRecommendationsEnabledOutputReference(this as any, "recommendations_enabled", true);
  public get recommendationsEnabled() {
    return this.__recommendationsEnabledOutput;
  }
  public putRecommendationsEnabled(value: IotSecuritySolutionRecommendationsEnabled | undefined) {
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
  private _timeouts?: IotSecuritySolutionTimeouts | undefined; 
  private __timeoutsOutput = new IotSecuritySolutionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: IotSecuritySolutionTimeouts | undefined) {
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
      disabled_data_sources: cdktf.listMapper(cdktf.stringToTerraform)(this._disabledDataSources),
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
      additional_workspace: cdktf.listMapper(iotSecuritySolutionAdditionalWorkspaceToTerraform)(this._additionalWorkspace),
      recommendations_enabled: iotSecuritySolutionRecommendationsEnabledToTerraform(this._recommendationsEnabled),
      timeouts: iotSecuritySolutionTimeoutsToTerraform(this._timeouts),
    };
  }
}
