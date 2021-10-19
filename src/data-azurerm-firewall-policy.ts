// https://www.terraform.io/docs/providers/azurerm/d/firewall_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/firewall_policy.html#name DataAzurermFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/firewall_policy.html#resource_group_name DataAzurermFirewallPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/firewall_policy.html#timeouts DataAzurermFirewallPolicy#timeouts}
  */
  readonly timeouts?: DataAzurermFirewallPolicyTimeouts;
}
export class DataAzurermFirewallPolicyDns extends cdktf.ComplexComputedList {

  // network_rule_fqdn_enabled - computed: true, optional: false, required: false
  public get networkRuleFqdnEnabled() {
    return this.getBooleanAttribute('network_rule_fqdn_enabled') as any;
  }

  // proxy_enabled - computed: true, optional: false, required: false
  public get proxyEnabled() {
    return this.getBooleanAttribute('proxy_enabled') as any;
  }

  // servers - computed: true, optional: false, required: false
  public get servers() {
    return this.getListAttribute('servers');
  }
}
export class DataAzurermFirewallPolicyThreatIntelligenceAllowlist extends cdktf.ComplexComputedList {

  // fqdns - computed: true, optional: false, required: false
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
}
export interface DataAzurermFirewallPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/firewall_policy.html#read DataAzurermFirewallPolicy#read}
  */
  readonly read?: string;
}

function dataAzurermFirewallPolicyTimeoutsToTerraform(struct?: DataAzurermFirewallPolicyTimeoutsOutputReference | DataAzurermFirewallPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermFirewallPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/firewall_policy.html azurerm_firewall_policy}
*/
export class DataAzurermFirewallPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_firewall_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/firewall_policy.html azurerm_firewall_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermFirewallPolicyConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_policy_id - computed: true, optional: false, required: false
  public get basePolicyId() {
    return this.getStringAttribute('base_policy_id');
  }

  // child_policies - computed: true, optional: false, required: false
  public get childPolicies() {
    return this.getListAttribute('child_policies');
  }

  // dns - computed: true, optional: false, required: false
  public dns(index: string) {
    return new DataAzurermFirewallPolicyDns(this, 'dns', index);
  }

  // firewalls - computed: true, optional: false, required: false
  public get firewalls() {
    return this.getListAttribute('firewalls');
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

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // threat_intelligence_allowlist - computed: true, optional: false, required: false
  public threatIntelligenceAllowlist(index: string) {
    return new DataAzurermFirewallPolicyThreatIntelligenceAllowlist(this, 'threat_intelligence_allowlist', index);
  }

  // threat_intelligence_mode - computed: true, optional: false, required: false
  public get threatIntelligenceMode() {
    return this.getStringAttribute('threat_intelligence_mode');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermFirewallPolicyTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermFirewallPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermFirewallPolicyTimeouts | undefined) {
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
      timeouts: dataAzurermFirewallPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
