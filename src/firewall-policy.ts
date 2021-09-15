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
  readonly dns?: FirewallPolicyDns[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#identity FirewallPolicy#identity}
  */
  readonly identity?: FirewallPolicyIdentity[];
  /**
  * intrusion_detection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#intrusion_detection FirewallPolicy#intrusion_detection}
  */
  readonly intrusionDetection?: FirewallPolicyIntrusionDetection[];
  /**
  * threat_intelligence_allowlist block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#threat_intelligence_allowlist FirewallPolicy#threat_intelligence_allowlist}
  */
  readonly threatIntelligenceAllowlist?: FirewallPolicyThreatIntelligenceAllowlist[];
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
  readonly tlsCertificate?: FirewallPolicyTlsCertificate[];
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

function firewallPolicyDnsToTerraform(struct?: FirewallPolicyDns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    network_rule_fqdn_enabled: cdktf.booleanToTerraform(struct!.networkRuleFqdnEnabled),
    proxy_enabled: cdktf.booleanToTerraform(struct!.proxyEnabled),
    servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.servers),
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

function firewallPolicyIdentityToTerraform(struct?: FirewallPolicyIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userAssignedIdentityIds),
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

function firewallPolicyIntrusionDetectionToTerraform(struct?: FirewallPolicyIntrusionDetection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    signature_overrides: cdktf.listMapper(firewallPolicyIntrusionDetectionSignatureOverridesToTerraform)(struct!.signatureOverrides),
    traffic_bypass: cdktf.listMapper(firewallPolicyIntrusionDetectionTrafficBypassToTerraform)(struct!.trafficBypass),
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

function firewallPolicyThreatIntelligenceAllowlistToTerraform(struct?: FirewallPolicyThreatIntelligenceAllowlist): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fqdns),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipAddresses),
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

function firewallPolicyTimeoutsToTerraform(struct?: FirewallPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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

function firewallPolicyTlsCertificateToTerraform(struct?: FirewallPolicyTlsCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_vault_secret_id: cdktf.stringToTerraform(struct!.keyVaultSecretId),
    name: cdktf.stringToTerraform(struct!.name),
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
    this._intrusionDetection = config.intrusionDetection;
    this._threatIntelligenceAllowlist = config.threatIntelligenceAllowlist;
    this._timeouts = config.timeouts;
    this._tlsCertificate = config.tlsCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_policy_id - computed: false, optional: true, required: false
  private _basePolicyId?: string;
  public get basePolicyId() {
    return this.getStringAttribute('base_policy_id');
  }
  public set basePolicyId(value: string ) {
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

  // private_ip_ranges - computed: false, optional: true, required: false
  private _privateIpRanges?: string[];
  public get privateIpRanges() {
    return this.getListAttribute('private_ip_ranges');
  }
  public set privateIpRanges(value: string[] ) {
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
    return this._sku
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _threatIntelligenceMode?: string;
  public get threatIntelligenceMode() {
    return this.getStringAttribute('threat_intelligence_mode');
  }
  public set threatIntelligenceMode(value: string ) {
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
  private _dns?: FirewallPolicyDns[];
  public get dns() {
    return this.interpolationForAttribute('dns') as any;
  }
  public set dns(value: FirewallPolicyDns[] ) {
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
  private _identity?: FirewallPolicyIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: FirewallPolicyIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // intrusion_detection - computed: false, optional: true, required: false
  private _intrusionDetection?: FirewallPolicyIntrusionDetection[];
  public get intrusionDetection() {
    return this.interpolationForAttribute('intrusion_detection') as any;
  }
  public set intrusionDetection(value: FirewallPolicyIntrusionDetection[] ) {
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
  private _threatIntelligenceAllowlist?: FirewallPolicyThreatIntelligenceAllowlist[];
  public get threatIntelligenceAllowlist() {
    return this.interpolationForAttribute('threat_intelligence_allowlist') as any;
  }
  public set threatIntelligenceAllowlist(value: FirewallPolicyThreatIntelligenceAllowlist[] ) {
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
  private _timeouts?: FirewallPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FirewallPolicyTimeouts ) {
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
  private _tlsCertificate?: FirewallPolicyTlsCertificate[];
  public get tlsCertificate() {
    return this.interpolationForAttribute('tls_certificate') as any;
  }
  public set tlsCertificate(value: FirewallPolicyTlsCertificate[] ) {
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
      dns: cdktf.listMapper(firewallPolicyDnsToTerraform)(this._dns),
      identity: cdktf.listMapper(firewallPolicyIdentityToTerraform)(this._identity),
      intrusion_detection: cdktf.listMapper(firewallPolicyIntrusionDetectionToTerraform)(this._intrusionDetection),
      threat_intelligence_allowlist: cdktf.listMapper(firewallPolicyThreatIntelligenceAllowlistToTerraform)(this._threatIntelligenceAllowlist),
      timeouts: firewallPolicyTimeoutsToTerraform(this._timeouts),
      tls_certificate: cdktf.listMapper(firewallPolicyTlsCertificateToTerraform)(this._tlsCertificate),
    };
  }
}
