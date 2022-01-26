// https://www.terraform.io/docs/providers/azurerm/r/firewall_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#base_policy_id FirewallPolicy#base_policy_id}
  */
  readonly basePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#location FirewallPolicy#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#name FirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#private_ip_ranges FirewallPolicy#private_ip_ranges}
  */
  readonly privateIpRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#resource_group_name FirewallPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#sku FirewallPolicy#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#tags FirewallPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#threat_intelligence_mode FirewallPolicy#threat_intelligence_mode}
  */
  readonly threatIntelligenceMode?: string;
  /**
  * dns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#dns FirewallPolicy#dns}
  */
  readonly dns?: FirewallPolicyDns;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#identity FirewallPolicy#identity}
  */
  readonly identity?: FirewallPolicyIdentity;
  /**
  * insights block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#insights FirewallPolicy#insights}
  */
  readonly insights?: FirewallPolicyInsights;
  /**
  * intrusion_detection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#intrusion_detection FirewallPolicy#intrusion_detection}
  */
  readonly intrusionDetection?: FirewallPolicyIntrusionDetection;
  /**
  * threat_intelligence_allowlist block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#threat_intelligence_allowlist FirewallPolicy#threat_intelligence_allowlist}
  */
  readonly threatIntelligenceAllowlist?: FirewallPolicyThreatIntelligenceAllowlist;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#timeouts FirewallPolicy#timeouts}
  */
  readonly timeouts?: FirewallPolicyTimeouts;
  /**
  * tls_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#tls_certificate FirewallPolicy#tls_certificate}
  */
  readonly tlsCertificate?: FirewallPolicyTlsCertificate;
}
export interface FirewallPolicyDns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#network_rule_fqdn_enabled FirewallPolicy#network_rule_fqdn_enabled}
  */
  readonly networkRuleFqdnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#proxy_enabled FirewallPolicy#proxy_enabled}
  */
  readonly proxyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#servers FirewallPolicy#servers}
  */
  readonly servers?: string[];
}

export function firewallPolicyDnsToTerraform(struct?: FirewallPolicyDnsOutputReference | FirewallPolicyDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FirewallPolicyDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkRuleFqdnEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkRuleFqdnEnabled = this._networkRuleFqdnEnabled;
    }
    if (this._proxyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyEnabled = this._proxyEnabled;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkRuleFqdnEnabled = undefined;
      this._proxyEnabled = undefined;
      this._servers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkRuleFqdnEnabled = value.networkRuleFqdnEnabled;
      this._proxyEnabled = value.proxyEnabled;
      this._servers = value.servers;
    }
  }

  // network_rule_fqdn_enabled - computed: true, optional: true, required: false
  private _networkRuleFqdnEnabled?: boolean | cdktf.IResolvable; 
  public get networkRuleFqdnEnabled() {
    return this.getBooleanAttribute('network_rule_fqdn_enabled');
  }
  public set networkRuleFqdnEnabled(value: boolean | cdktf.IResolvable) {
    this._networkRuleFqdnEnabled = value;
  }
  public resetNetworkRuleFqdnEnabled() {
    this._networkRuleFqdnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRuleFqdnEnabledInput() {
    return this._networkRuleFqdnEnabled;
  }

  // proxy_enabled - computed: false, optional: true, required: false
  private _proxyEnabled?: boolean | cdktf.IResolvable; 
  public get proxyEnabled() {
    return this.getBooleanAttribute('proxy_enabled');
  }
  public set proxyEnabled(value: boolean | cdktf.IResolvable) {
    this._proxyEnabled = value;
  }
  public resetProxyEnabled() {
    this._proxyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyEnabledInput() {
    return this._proxyEnabled;
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return cdktf.Fn.tolist(this.getListAttribute('servers'));
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }
}
export interface FirewallPolicyIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#type FirewallPolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#user_assigned_identity_ids FirewallPolicy#user_assigned_identity_ids}
  */
  readonly userAssignedIdentityIds?: string[];
}

export function firewallPolicyIdentityToTerraform(struct?: FirewallPolicyIdentityOutputReference | FirewallPolicyIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userAssignedIdentityIds),
  }
}

export class FirewallPolicyIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FirewallPolicyIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAssignedIdentityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityIds = this._userAssignedIdentityIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._userAssignedIdentityIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._userAssignedIdentityIds = value.userAssignedIdentityIds;
    }
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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
    return this._type;
  }

  // user_assigned_identity_ids - computed: false, optional: true, required: false
  private _userAssignedIdentityIds?: string[]; 
  public get userAssignedIdentityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('user_assigned_identity_ids'));
  }
  public set userAssignedIdentityIds(value: string[]) {
    this._userAssignedIdentityIds = value;
  }
  public resetUserAssignedIdentityIds() {
    this._userAssignedIdentityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdsInput() {
    return this._userAssignedIdentityIds;
  }
}
export interface FirewallPolicyInsightsLogAnalyticsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#firewall_location FirewallPolicy#firewall_location}
  */
  readonly firewallLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#id FirewallPolicy#id}
  */
  readonly id: string;
}

export function firewallPolicyInsightsLogAnalyticsWorkspaceToTerraform(struct?: FirewallPolicyInsightsLogAnalyticsWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#default_log_analytics_workspace_id FirewallPolicy#default_log_analytics_workspace_id}
  */
  readonly defaultLogAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#enabled FirewallPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#retention_in_days FirewallPolicy#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * log_analytics_workspace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#log_analytics_workspace FirewallPolicy#log_analytics_workspace}
  */
  readonly logAnalyticsWorkspace?: FirewallPolicyInsightsLogAnalyticsWorkspace[] | cdktf.IResolvable;
}

export function firewallPolicyInsightsToTerraform(struct?: FirewallPolicyInsightsOutputReference | FirewallPolicyInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FirewallPolicyInsights | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLogAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLogAnalyticsWorkspaceId = this._defaultLogAnalyticsWorkspaceId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInDays = this._retentionInDays;
    }
    if (this._logAnalyticsWorkspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspace = this._logAnalyticsWorkspace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInsights | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultLogAnalyticsWorkspaceId = undefined;
      this._enabled = undefined;
      this._retentionInDays = undefined;
      this._logAnalyticsWorkspace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultLogAnalyticsWorkspaceId = value.defaultLogAnalyticsWorkspaceId;
      this._enabled = value.enabled;
      this._retentionInDays = value.retentionInDays;
      this._logAnalyticsWorkspace = value.logAnalyticsWorkspace;
    }
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
    return this._defaultLogAnalyticsWorkspaceId;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays;
  }

  // log_analytics_workspace - computed: false, optional: true, required: false
  private _logAnalyticsWorkspace?: FirewallPolicyInsightsLogAnalyticsWorkspace[] | cdktf.IResolvable; 
  public get logAnalyticsWorkspace() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('log_analytics_workspace');
  }
  public set logAnalyticsWorkspace(value: FirewallPolicyInsightsLogAnalyticsWorkspace[] | cdktf.IResolvable) {
    this._logAnalyticsWorkspace = value;
  }
  public resetLogAnalyticsWorkspace() {
    this._logAnalyticsWorkspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceInput() {
    return this._logAnalyticsWorkspace;
  }
}
export interface FirewallPolicyIntrusionDetectionSignatureOverrides {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#id FirewallPolicy#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#state FirewallPolicy#state}
  */
  readonly state?: string;
}

export function firewallPolicyIntrusionDetectionSignatureOverridesToTerraform(struct?: FirewallPolicyIntrusionDetectionSignatureOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#description FirewallPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#destination_addresses FirewallPolicy#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#destination_ip_groups FirewallPolicy#destination_ip_groups}
  */
  readonly destinationIpGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#destination_ports FirewallPolicy#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#name FirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#protocol FirewallPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#source_addresses FirewallPolicy#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#source_ip_groups FirewallPolicy#source_ip_groups}
  */
  readonly sourceIpGroups?: string[];
}

export function firewallPolicyIntrusionDetectionTrafficBypassToTerraform(struct?: FirewallPolicyIntrusionDetectionTrafficBypass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#mode FirewallPolicy#mode}
  */
  readonly mode?: string;
  /**
  * signature_overrides block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#signature_overrides FirewallPolicy#signature_overrides}
  */
  readonly signatureOverrides?: FirewallPolicyIntrusionDetectionSignatureOverrides[] | cdktf.IResolvable;
  /**
  * traffic_bypass block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#traffic_bypass FirewallPolicy#traffic_bypass}
  */
  readonly trafficBypass?: FirewallPolicyIntrusionDetectionTrafficBypass[] | cdktf.IResolvable;
}

export function firewallPolicyIntrusionDetectionToTerraform(struct?: FirewallPolicyIntrusionDetectionOutputReference | FirewallPolicyIntrusionDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FirewallPolicyIntrusionDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._signatureOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureOverrides = this._signatureOverrides;
    }
    if (this._trafficBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficBypass = this._trafficBypass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyIntrusionDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._signatureOverrides = undefined;
      this._trafficBypass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._signatureOverrides = value.signatureOverrides;
      this._trafficBypass = value.trafficBypass;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // signature_overrides - computed: false, optional: true, required: false
  private _signatureOverrides?: FirewallPolicyIntrusionDetectionSignatureOverrides[] | cdktf.IResolvable; 
  public get signatureOverrides() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('signature_overrides');
  }
  public set signatureOverrides(value: FirewallPolicyIntrusionDetectionSignatureOverrides[] | cdktf.IResolvable) {
    this._signatureOverrides = value;
  }
  public resetSignatureOverrides() {
    this._signatureOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureOverridesInput() {
    return this._signatureOverrides;
  }

  // traffic_bypass - computed: false, optional: true, required: false
  private _trafficBypass?: FirewallPolicyIntrusionDetectionTrafficBypass[] | cdktf.IResolvable; 
  public get trafficBypass() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('traffic_bypass');
  }
  public set trafficBypass(value: FirewallPolicyIntrusionDetectionTrafficBypass[] | cdktf.IResolvable) {
    this._trafficBypass = value;
  }
  public resetTrafficBypass() {
    this._trafficBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficBypassInput() {
    return this._trafficBypass;
  }
}
export interface FirewallPolicyThreatIntelligenceAllowlist {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#fqdns FirewallPolicy#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#ip_addresses FirewallPolicy#ip_addresses}
  */
  readonly ipAddresses?: string[];
}

export function firewallPolicyThreatIntelligenceAllowlistToTerraform(struct?: FirewallPolicyThreatIntelligenceAllowlistOutputReference | FirewallPolicyThreatIntelligenceAllowlist): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fqdns),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipAddresses),
  }
}

export class FirewallPolicyThreatIntelligenceAllowlistOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FirewallPolicyThreatIntelligenceAllowlist | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdns = this._fqdns;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyThreatIntelligenceAllowlist | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fqdns = undefined;
      this._ipAddresses = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fqdns = value.fqdns;
      this._ipAddresses = value.ipAddresses;
    }
  }

  // fqdns - computed: false, optional: true, required: false
  private _fqdns?: string[]; 
  public get fqdns() {
    return cdktf.Fn.tolist(this.getListAttribute('fqdns'));
  }
  public set fqdns(value: string[]) {
    this._fqdns = value;
  }
  public resetFqdns() {
    this._fqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }
}
export interface FirewallPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#create FirewallPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#delete FirewallPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#read FirewallPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#update FirewallPolicy#update}
  */
  readonly update?: string;
}

export function firewallPolicyTimeoutsToTerraform(struct?: FirewallPolicyTimeoutsOutputReference | FirewallPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FirewallPolicyTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface FirewallPolicyTlsCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#key_vault_secret_id FirewallPolicy#key_vault_secret_id}
  */
  readonly keyVaultSecretId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy#name FirewallPolicy#name}
  */
  readonly name: string;
}

export function firewallPolicyTlsCertificateToTerraform(struct?: FirewallPolicyTlsCertificateOutputReference | FirewallPolicyTlsCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_secret_id: cdktf.stringToTerraform(struct!.keyVaultSecretId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class FirewallPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FirewallPolicyTlsCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyVaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultSecretId = this._keyVaultSecretId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyTlsCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyVaultSecretId = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyVaultSecretId = value.keyVaultSecretId;
      this._name = value.name;
    }
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
    return this._keyVaultSecretId;
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
    return this._name;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy azurerm_firewall_policy}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy azurerm_firewall_policy} Resource
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
    this._dns.internalValue = config.dns;
    this._identity.internalValue = config.identity;
    this._insights.internalValue = config.insights;
    this._intrusionDetection.internalValue = config.intrusionDetection;
    this._threatIntelligenceAllowlist.internalValue = config.threatIntelligenceAllowlist;
    this._timeouts.internalValue = config.timeouts;
    this._tlsCertificate.internalValue = config.tlsCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_policy_id - computed: false, optional: true, required: false
  private _basePolicyId?: string; 
  public get basePolicyId() {
    return this.getStringAttribute('base_policy_id');
  }
  public set basePolicyId(value: string) {
    this._basePolicyId = value;
  }
  public resetBasePolicyId() {
    this._basePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePolicyIdInput() {
    return this._basePolicyId;
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
    return this._location;
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
    return this._name;
  }

  // private_ip_ranges - computed: false, optional: true, required: false
  private _privateIpRanges?: string[]; 
  public get privateIpRanges() {
    return this.getListAttribute('private_ip_ranges');
  }
  public set privateIpRanges(value: string[]) {
    this._privateIpRanges = value;
  }
  public resetPrivateIpRanges() {
    this._privateIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpRangesInput() {
    return this._privateIpRanges;
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
    return this._resourceGroupName;
  }

  // rule_collection_groups - computed: true, optional: false, required: false
  public get ruleCollectionGroups() {
    return this.getListAttribute('rule_collection_groups');
  }

  // sku - computed: true, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // threat_intelligence_mode - computed: false, optional: true, required: false
  private _threatIntelligenceMode?: string; 
  public get threatIntelligenceMode() {
    return this.getStringAttribute('threat_intelligence_mode');
  }
  public set threatIntelligenceMode(value: string) {
    this._threatIntelligenceMode = value;
  }
  public resetThreatIntelligenceMode() {
    this._threatIntelligenceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelligenceModeInput() {
    return this._threatIntelligenceMode;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new FirewallPolicyDnsOutputReference(this, "dns", true);
  public get dns() {
    return this._dns;
  }
  public putDns(value: FirewallPolicyDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new FirewallPolicyIdentityOutputReference(this, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: FirewallPolicyIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // insights - computed: false, optional: true, required: false
  private _insights = new FirewallPolicyInsightsOutputReference(this, "insights", true);
  public get insights() {
    return this._insights;
  }
  public putInsights(value: FirewallPolicyInsights) {
    this._insights.internalValue = value;
  }
  public resetInsights() {
    this._insights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsInput() {
    return this._insights.internalValue;
  }

  // intrusion_detection - computed: false, optional: true, required: false
  private _intrusionDetection = new FirewallPolicyIntrusionDetectionOutputReference(this, "intrusion_detection", true);
  public get intrusionDetection() {
    return this._intrusionDetection;
  }
  public putIntrusionDetection(value: FirewallPolicyIntrusionDetection) {
    this._intrusionDetection.internalValue = value;
  }
  public resetIntrusionDetection() {
    this._intrusionDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intrusionDetectionInput() {
    return this._intrusionDetection.internalValue;
  }

  // threat_intelligence_allowlist - computed: false, optional: true, required: false
  private _threatIntelligenceAllowlist = new FirewallPolicyThreatIntelligenceAllowlistOutputReference(this, "threat_intelligence_allowlist", true);
  public get threatIntelligenceAllowlist() {
    return this._threatIntelligenceAllowlist;
  }
  public putThreatIntelligenceAllowlist(value: FirewallPolicyThreatIntelligenceAllowlist) {
    this._threatIntelligenceAllowlist.internalValue = value;
  }
  public resetThreatIntelligenceAllowlist() {
    this._threatIntelligenceAllowlist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelligenceAllowlistInput() {
    return this._threatIntelligenceAllowlist.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FirewallPolicyTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FirewallPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tls_certificate - computed: false, optional: true, required: false
  private _tlsCertificate = new FirewallPolicyTlsCertificateOutputReference(this, "tls_certificate", true);
  public get tlsCertificate() {
    return this._tlsCertificate;
  }
  public putTlsCertificate(value: FirewallPolicyTlsCertificate) {
    this._tlsCertificate.internalValue = value;
  }
  public resetTlsCertificate() {
    this._tlsCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateInput() {
    return this._tlsCertificate.internalValue;
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
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      threat_intelligence_mode: cdktf.stringToTerraform(this._threatIntelligenceMode),
      dns: firewallPolicyDnsToTerraform(this._dns.internalValue),
      identity: firewallPolicyIdentityToTerraform(this._identity.internalValue),
      insights: firewallPolicyInsightsToTerraform(this._insights.internalValue),
      intrusion_detection: firewallPolicyIntrusionDetectionToTerraform(this._intrusionDetection.internalValue),
      threat_intelligence_allowlist: firewallPolicyThreatIntelligenceAllowlistToTerraform(this._threatIntelligenceAllowlist.internalValue),
      timeouts: firewallPolicyTimeoutsToTerraform(this._timeouts.internalValue),
      tls_certificate: firewallPolicyTlsCertificateToTerraform(this._tlsCertificate.internalValue),
    };
  }
}
