// https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#base_policy_id FirewallPolicy#base_policy_id}
  */
  readonly basePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#location FirewallPolicy#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#name FirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#private_ip_ranges FirewallPolicy#private_ip_ranges}
  */
  readonly privateIpRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#resource_group_name FirewallPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#sku FirewallPolicy#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#tags FirewallPolicy#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#threat_intelligence_mode FirewallPolicy#threat_intelligence_mode}
  */
  readonly threatIntelligenceMode?: string;
  /**
  * dns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#dns FirewallPolicy#dns}
  */
  readonly dns?: FirewallPolicyDns;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#identity FirewallPolicy#identity}
  */
  readonly identity?: FirewallPolicyIdentity;
  /**
  * insights block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#insights FirewallPolicy#insights}
  */
  readonly insights?: FirewallPolicyInsights;
  /**
  * intrusion_detection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#intrusion_detection FirewallPolicy#intrusion_detection}
  */
  readonly intrusionDetection?: FirewallPolicyIntrusionDetection;
  /**
  * threat_intelligence_allowlist block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#threat_intelligence_allowlist FirewallPolicy#threat_intelligence_allowlist}
  */
  readonly threatIntelligenceAllowlist?: FirewallPolicyThreatIntelligenceAllowlist;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#timeouts FirewallPolicy#timeouts}
  */
  readonly timeouts?: FirewallPolicyTimeouts;
  /**
  * tls_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#tls_certificate FirewallPolicy#tls_certificate}
  */
  readonly tlsCertificate?: FirewallPolicyTlsCertificate;
}
export interface FirewallPolicyDns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#network_rule_fqdn_enabled FirewallPolicy#network_rule_fqdn_enabled}
  */
  readonly networkRuleFqdnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#proxy_enabled FirewallPolicy#proxy_enabled}
  */
  readonly proxyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#servers FirewallPolicy#servers}
  */
  readonly servers?: string[];
}

function firewallPolicyDnsToTerraform(struct?: FirewallPolicyDnsOutputReference | FirewallPolicyDns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_rule_fqdn_enabled: cdktf.booleanToTerraform(struct!.networkRuleFqdnEnabled),
    proxy_enabled: cdktf.booleanToTerraform(struct!.proxyEnabled),
    servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.servers),
  }
}

export class FirewallPolicyDnsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // network_rule_fqdn_enabled - computed: true, optional: true, required: false
  private _networkRuleFqdnEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get networkRuleFqdnEnabled() {
    return this.getBooleanAttribute('network_rule_fqdn_enabled') as any;
  }
  public set networkRuleFqdnEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._networkRuleFqdnEnabled = value;
  }
  public resetNetworkRuleFqdnEnabled() {
    this._networkRuleFqdnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRuleFqdnEnabledInput() {
    return this._networkRuleFqdnEnabled
  }

  // proxy_enabled - computed: false, optional: true, required: false
  private _proxyEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get proxyEnabled() {
    return this.getBooleanAttribute('proxy_enabled') as any;
  }
  public set proxyEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._proxyEnabled = value;
  }
  public resetProxyEnabled() {
    this._proxyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyEnabledInput() {
    return this._proxyEnabled
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string[] | undefined; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[] | undefined) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers
  }
}
export interface FirewallPolicyIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#type FirewallPolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#user_assigned_identity_ids FirewallPolicy#user_assigned_identity_ids}
  */
  readonly userAssignedIdentityIds?: string[];
}

function firewallPolicyIdentityToTerraform(struct?: FirewallPolicyIdentityOutputReference | FirewallPolicyIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userAssignedIdentityIds),
  }
}

export class FirewallPolicyIdentityOutputReference extends cdktf.ComplexObject {
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

  // user_assigned_identity_ids - computed: false, optional: true, required: false
  private _userAssignedIdentityIds?: string[] | undefined; 
  public get userAssignedIdentityIds() {
    return this.getListAttribute('user_assigned_identity_ids');
  }
  public set userAssignedIdentityIds(value: string[] | undefined) {
    this._userAssignedIdentityIds = value;
  }
  public resetUserAssignedIdentityIds() {
    this._userAssignedIdentityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdsInput() {
    return this._userAssignedIdentityIds
  }
}
export interface FirewallPolicyInsightsLogAnalyticsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#firewall_location FirewallPolicy#firewall_location}
  */
  readonly firewallLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#id FirewallPolicy#id}
  */
  readonly id: string;
}

function firewallPolicyInsightsLogAnalyticsWorkspaceToTerraform(struct?: FirewallPolicyInsightsLogAnalyticsWorkspace): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firewall_location: cdktf.stringToTerraform(struct!.firewallLocation),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface FirewallPolicyInsights {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#default_log_analytics_workspace_id FirewallPolicy#default_log_analytics_workspace_id}
  */
  readonly defaultLogAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#enabled FirewallPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#retention_in_days FirewallPolicy#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * log_analytics_workspace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#log_analytics_workspace FirewallPolicy#log_analytics_workspace}
  */
  readonly logAnalyticsWorkspace?: FirewallPolicyInsightsLogAnalyticsWorkspace[];
}

function firewallPolicyInsightsToTerraform(struct?: FirewallPolicyInsightsOutputReference | FirewallPolicyInsights): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_log_analytics_workspace_id: cdktf.stringToTerraform(struct!.defaultLogAnalyticsWorkspaceId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    log_analytics_workspace: cdktf.listMapper(firewallPolicyInsightsLogAnalyticsWorkspaceToTerraform)(struct!.logAnalyticsWorkspace),
  }
}

export class FirewallPolicyInsightsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default_log_analytics_workspace_id - computed: false, optional: false, required: true
  private _defaultLogAnalyticsWorkspaceId?: string; 
  public get defaultLogAnalyticsWorkspaceId() {
    return this.getStringAttribute('default_log_analytics_workspace_id');
  }
  public set defaultLogAnalyticsWorkspaceId(value: string) {
    this._defaultLogAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLogAnalyticsWorkspaceIdInput() {
    return this._defaultLogAnalyticsWorkspaceId
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number | undefined; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number | undefined) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays
  }

  // log_analytics_workspace - computed: false, optional: true, required: false
  private _logAnalyticsWorkspace?: FirewallPolicyInsightsLogAnalyticsWorkspace[] | undefined; 
  public get logAnalyticsWorkspace() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('log_analytics_workspace') as any;
  }
  public set logAnalyticsWorkspace(value: FirewallPolicyInsightsLogAnalyticsWorkspace[] | undefined) {
    this._logAnalyticsWorkspace = value;
  }
  public resetLogAnalyticsWorkspace() {
    this._logAnalyticsWorkspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceInput() {
    return this._logAnalyticsWorkspace
  }
}
export interface FirewallPolicyIntrusionDetectionSignatureOverrides {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#id FirewallPolicy#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#state FirewallPolicy#state}
  */
  readonly state?: string;
}

function firewallPolicyIntrusionDetectionSignatureOverridesToTerraform(struct?: FirewallPolicyIntrusionDetectionSignatureOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    state: cdktf.stringToTerraform(struct!.state),
  }
}

export interface FirewallPolicyIntrusionDetectionTrafficBypass {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#description FirewallPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#destination_addresses FirewallPolicy#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#destination_ip_groups FirewallPolicy#destination_ip_groups}
  */
  readonly destinationIpGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#destination_ports FirewallPolicy#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#name FirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#protocol FirewallPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#source_addresses FirewallPolicy#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#source_ip_groups FirewallPolicy#source_ip_groups}
  */
  readonly sourceIpGroups?: string[];
}

function firewallPolicyIntrusionDetectionTrafficBypassToTerraform(struct?: FirewallPolicyIntrusionDetectionTrafficBypass): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddresses),
    destination_ip_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationIpGroups),
    destination_ports: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationPorts),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_ip_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceIpGroups),
  }
}

export interface FirewallPolicyIntrusionDetection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#mode FirewallPolicy#mode}
  */
  readonly mode?: string;
  /**
  * signature_overrides block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#signature_overrides FirewallPolicy#signature_overrides}
  */
  readonly signatureOverrides?: FirewallPolicyIntrusionDetectionSignatureOverrides[];
  /**
  * traffic_bypass block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#traffic_bypass FirewallPolicy#traffic_bypass}
  */
  readonly trafficBypass?: FirewallPolicyIntrusionDetectionTrafficBypass[];
}

function firewallPolicyIntrusionDetectionToTerraform(struct?: FirewallPolicyIntrusionDetectionOutputReference | FirewallPolicyIntrusionDetection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    signature_overrides: cdktf.listMapper(firewallPolicyIntrusionDetectionSignatureOverridesToTerraform)(struct!.signatureOverrides),
    traffic_bypass: cdktf.listMapper(firewallPolicyIntrusionDetectionTrafficBypassToTerraform)(struct!.trafficBypass),
  }
}

export class FirewallPolicyIntrusionDetectionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string | undefined; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string | undefined) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }

  // signature_overrides - computed: false, optional: true, required: false
  private _signatureOverrides?: FirewallPolicyIntrusionDetectionSignatureOverrides[] | undefined; 
  public get signatureOverrides() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('signature_overrides') as any;
  }
  public set signatureOverrides(value: FirewallPolicyIntrusionDetectionSignatureOverrides[] | undefined) {
    this._signatureOverrides = value;
  }
  public resetSignatureOverrides() {
    this._signatureOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureOverridesInput() {
    return this._signatureOverrides
  }

  // traffic_bypass - computed: false, optional: true, required: false
  private _trafficBypass?: FirewallPolicyIntrusionDetectionTrafficBypass[] | undefined; 
  public get trafficBypass() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('traffic_bypass') as any;
  }
  public set trafficBypass(value: FirewallPolicyIntrusionDetectionTrafficBypass[] | undefined) {
    this._trafficBypass = value;
  }
  public resetTrafficBypass() {
    this._trafficBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficBypassInput() {
    return this._trafficBypass
  }
}
export interface FirewallPolicyThreatIntelligenceAllowlist {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#fqdns FirewallPolicy#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#ip_addresses FirewallPolicy#ip_addresses}
  */
  readonly ipAddresses?: string[];
}

function firewallPolicyThreatIntelligenceAllowlistToTerraform(struct?: FirewallPolicyThreatIntelligenceAllowlistOutputReference | FirewallPolicyThreatIntelligenceAllowlist): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fqdns),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipAddresses),
  }
}

export class FirewallPolicyThreatIntelligenceAllowlistOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // fqdns - computed: false, optional: true, required: false
  private _fqdns?: string[] | undefined; 
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }
  public set fqdns(value: string[] | undefined) {
    this._fqdns = value;
  }
  public resetFqdns() {
    this._fqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[] | undefined; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[] | undefined) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses
  }
}
export interface FirewallPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#create FirewallPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#delete FirewallPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#read FirewallPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#update FirewallPolicy#update}
  */
  readonly update?: string;
}

function firewallPolicyTimeoutsToTerraform(struct?: FirewallPolicyTimeoutsOutputReference | FirewallPolicyTimeouts): any {
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

export class FirewallPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface FirewallPolicyTlsCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#key_vault_secret_id FirewallPolicy#key_vault_secret_id}
  */
  readonly keyVaultSecretId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#name FirewallPolicy#name}
  */
  readonly name: string;
}

function firewallPolicyTlsCertificateToTerraform(struct?: FirewallPolicyTlsCertificateOutputReference | FirewallPolicyTlsCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_secret_id: cdktf.stringToTerraform(struct!.keyVaultSecretId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class FirewallPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key_vault_secret_id - computed: false, optional: false, required: true
  private _keyVaultSecretId?: string; 
  public get keyVaultSecretId() {
    return this.getStringAttribute('key_vault_secret_id');
  }
  public set keyVaultSecretId(value: string) {
    this._keyVaultSecretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultSecretIdInput() {
    return this._keyVaultSecretId
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html azurerm_firewall_policy}
*/
export class FirewallPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_firewall_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html azurerm_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._basePolicyId = config.basePolicyId;
    this._location = config.location;
    this._name = config.name;
    this._privateIpRanges = config.privateIpRanges;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._threatIntelligenceMode = config.threatIntelligenceMode;
    this._dns = config.dns;
    this._identity = config.identity;
    this._insights = config.insights;
    this._intrusionDetection = config.intrusionDetection;
    this._threatIntelligenceAllowlist = config.threatIntelligenceAllowlist;
    this._timeouts = config.timeouts;
    this._tlsCertificate = config.tlsCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_policy_id - computed: false, optional: true, required: false
  private _basePolicyId?: string | undefined; 
  public get basePolicyId() {
    return this.getStringAttribute('base_policy_id');
  }
  public set basePolicyId(value: string | undefined) {
    this._basePolicyId = value;
  }
  public resetBasePolicyId() {
    this._basePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePolicyIdInput() {
    return this._basePolicyId
  }

  // child_policies - computed: true, optional: false, required: false
  public get childPolicies() {
    return this.getListAttribute('child_policies');
  }

  // firewalls - computed: true, optional: false, required: false
  public get firewalls() {
    return this.getListAttribute('firewalls');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // private_ip_ranges - computed: false, optional: true, required: false
  private _privateIpRanges?: string[] | undefined; 
  public get privateIpRanges() {
    return this.getListAttribute('private_ip_ranges');
  }
  public set privateIpRanges(value: string[] | undefined) {
    this._privateIpRanges = value;
  }
  public resetPrivateIpRanges() {
    this._privateIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpRangesInput() {
    return this._privateIpRanges
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

  // rule_collection_groups - computed: true, optional: false, required: false
  public get ruleCollectionGroups() {
    return this.getListAttribute('rule_collection_groups');
  }

  // sku - computed: true, optional: true, required: false
  private _sku?: string | undefined; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string | undefined) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
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

  // threat_intelligence_mode - computed: false, optional: true, required: false
  private _threatIntelligenceMode?: string | undefined; 
  public get threatIntelligenceMode() {
    return this.getStringAttribute('threat_intelligence_mode');
  }
  public set threatIntelligenceMode(value: string | undefined) {
    this._threatIntelligenceMode = value;
  }
  public resetThreatIntelligenceMode() {
    this._threatIntelligenceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelligenceModeInput() {
    return this._threatIntelligenceMode
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: FirewallPolicyDns | undefined; 
  private __dnsOutput = new FirewallPolicyDnsOutputReference(this as any, "dns", true);
  public get dns() {
    return this.__dnsOutput;
  }
  public putDns(value: FirewallPolicyDns | undefined) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: FirewallPolicyIdentity | undefined; 
  private __identityOutput = new FirewallPolicyIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: FirewallPolicyIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // insights - computed: false, optional: true, required: false
  private _insights?: FirewallPolicyInsights | undefined; 
  private __insightsOutput = new FirewallPolicyInsightsOutputReference(this as any, "insights", true);
  public get insights() {
    return this.__insightsOutput;
  }
  public putInsights(value: FirewallPolicyInsights | undefined) {
    this._insights = value;
  }
  public resetInsights() {
    this._insights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsInput() {
    return this._insights
  }

  // intrusion_detection - computed: false, optional: true, required: false
  private _intrusionDetection?: FirewallPolicyIntrusionDetection | undefined; 
  private __intrusionDetectionOutput = new FirewallPolicyIntrusionDetectionOutputReference(this as any, "intrusion_detection", true);
  public get intrusionDetection() {
    return this.__intrusionDetectionOutput;
  }
  public putIntrusionDetection(value: FirewallPolicyIntrusionDetection | undefined) {
    this._intrusionDetection = value;
  }
  public resetIntrusionDetection() {
    this._intrusionDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intrusionDetectionInput() {
    return this._intrusionDetection
  }

  // threat_intelligence_allowlist - computed: false, optional: true, required: false
  private _threatIntelligenceAllowlist?: FirewallPolicyThreatIntelligenceAllowlist | undefined; 
  private __threatIntelligenceAllowlistOutput = new FirewallPolicyThreatIntelligenceAllowlistOutputReference(this as any, "threat_intelligence_allowlist", true);
  public get threatIntelligenceAllowlist() {
    return this.__threatIntelligenceAllowlistOutput;
  }
  public putThreatIntelligenceAllowlist(value: FirewallPolicyThreatIntelligenceAllowlist | undefined) {
    this._threatIntelligenceAllowlist = value;
  }
  public resetThreatIntelligenceAllowlist() {
    this._threatIntelligenceAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelligenceAllowlistInput() {
    return this._threatIntelligenceAllowlist
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FirewallPolicyTimeouts | undefined; 
  private __timeoutsOutput = new FirewallPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: FirewallPolicyTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // tls_certificate - computed: false, optional: true, required: false
  private _tlsCertificate?: FirewallPolicyTlsCertificate | undefined; 
  private __tlsCertificateOutput = new FirewallPolicyTlsCertificateOutputReference(this as any, "tls_certificate", true);
  public get tlsCertificate() {
    return this.__tlsCertificateOutput;
  }
  public putTlsCertificate(value: FirewallPolicyTlsCertificate | undefined) {
    this._tlsCertificate = value;
  }
  public resetTlsCertificate() {
    this._tlsCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateInput() {
    return this._tlsCertificate
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_policy_id: cdktf.stringToTerraform(this._basePolicyId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      private_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform)(this._privateIpRanges),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      threat_intelligence_mode: cdktf.stringToTerraform(this._threatIntelligenceMode),
      dns: firewallPolicyDnsToTerraform(this._dns),
      identity: firewallPolicyIdentityToTerraform(this._identity),
      insights: firewallPolicyInsightsToTerraform(this._insights),
      intrusion_detection: firewallPolicyIntrusionDetectionToTerraform(this._intrusionDetection),
      threat_intelligence_allowlist: firewallPolicyThreatIntelligenceAllowlistToTerraform(this._threatIntelligenceAllowlist),
      timeouts: firewallPolicyTimeoutsToTerraform(this._timeouts),
      tls_certificate: firewallPolicyTlsCertificateToTerraform(this._tlsCertificate),
    };
  }
}
