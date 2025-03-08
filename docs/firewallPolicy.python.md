# `firewallPolicy` Submodule <a name="`firewallPolicy` Submodule" id="@cdktf/provider-azurerm.firewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallPolicy <a name="FirewallPolicy" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy azurerm_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  auto_learn_private_ranges_enabled: typing.Union[bool, IResolvable] = None,
  base_policy_id: str = None,
  dns: FirewallPolicyDns = None,
  explicit_proxy: FirewallPolicyExplicitProxy = None,
  id: str = None,
  identity: FirewallPolicyIdentity = None,
  insights: FirewallPolicyInsights = None,
  intrusion_detection: FirewallPolicyIntrusionDetection = None,
  private_ip_ranges: typing.List[str] = None,
  sku: str = None,
  sql_redirect_allowed: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  threat_intelligence_allowlist: FirewallPolicyThreatIntelligenceAllowlistStruct = None,
  threat_intelligence_mode: str = None,
  timeouts: FirewallPolicyTimeouts = None,
  tls_certificate: FirewallPolicyTlsCertificate = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#location FirewallPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#name FirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#resource_group_name FirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.autoLearnPrivateRangesEnabled">auto_learn_private_ranges_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#auto_learn_private_ranges_enabled FirewallPolicy#auto_learn_private_ranges_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.basePolicyId">base_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#base_policy_id FirewallPolicy#base_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.dns">dns</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.explicitProxy">explicit_proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a></code> | explicit_proxy block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#id FirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.insights">insights</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a></code> | insights block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.intrusionDetection">intrusion_detection</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a></code> | intrusion_detection block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.privateIpRanges">private_ip_ranges</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#private_ip_ranges FirewallPolicy#private_ip_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#sku FirewallPolicy#sku}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.sqlRedirectAllowed">sql_redirect_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#sql_redirect_allowed FirewallPolicy#sql_redirect_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#tags FirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.threatIntelligenceAllowlist">threat_intelligence_allowlist</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a></code> | threat_intelligence_allowlist block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.threatIntelligenceMode">threat_intelligence_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#threat_intelligence_mode FirewallPolicy#threat_intelligence_mode}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts">FirewallPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.tlsCertificate">tls_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a></code> | tls_certificate block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#location FirewallPolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#name FirewallPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#resource_group_name FirewallPolicy#resource_group_name}.

---

##### `auto_learn_private_ranges_enabled`<sup>Optional</sup> <a name="auto_learn_private_ranges_enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.autoLearnPrivateRangesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#auto_learn_private_ranges_enabled FirewallPolicy#auto_learn_private_ranges_enabled}.

---

##### `base_policy_id`<sup>Optional</sup> <a name="base_policy_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.basePolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#base_policy_id FirewallPolicy#base_policy_id}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.dns"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#dns FirewallPolicy#dns}

---

##### `explicit_proxy`<sup>Optional</sup> <a name="explicit_proxy" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.explicitProxy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a>

explicit_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#explicit_proxy FirewallPolicy#explicit_proxy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#id FirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#identity FirewallPolicy#identity}

---

##### `insights`<sup>Optional</sup> <a name="insights" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.insights"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a>

insights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#insights FirewallPolicy#insights}

---

##### `intrusion_detection`<sup>Optional</sup> <a name="intrusion_detection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.intrusionDetection"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a>

intrusion_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#intrusion_detection FirewallPolicy#intrusion_detection}

---

##### `private_ip_ranges`<sup>Optional</sup> <a name="private_ip_ranges" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.privateIpRanges"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#private_ip_ranges FirewallPolicy#private_ip_ranges}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#sku FirewallPolicy#sku}.

---

##### `sql_redirect_allowed`<sup>Optional</sup> <a name="sql_redirect_allowed" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.sqlRedirectAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#sql_redirect_allowed FirewallPolicy#sql_redirect_allowed}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#tags FirewallPolicy#tags}.

---

##### `threat_intelligence_allowlist`<sup>Optional</sup> <a name="threat_intelligence_allowlist" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.threatIntelligenceAllowlist"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a>

threat_intelligence_allowlist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#threat_intelligence_allowlist FirewallPolicy#threat_intelligence_allowlist}

---

##### `threat_intelligence_mode`<sup>Optional</sup> <a name="threat_intelligence_mode" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.threatIntelligenceMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#threat_intelligence_mode FirewallPolicy#threat_intelligence_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts">FirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#timeouts FirewallPolicy#timeouts}

---

##### `tls_certificate`<sup>Optional</sup> <a name="tls_certificate" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.tlsCertificate"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a>

tls_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#tls_certificate FirewallPolicy#tls_certificate}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putDns">put_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putExplicitProxy">put_explicit_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putInsights">put_insights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIntrusionDetection">put_intrusion_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putThreatIntelligenceAllowlist">put_threat_intelligence_allowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTlsCertificate">put_tls_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetAutoLearnPrivateRangesEnabled">reset_auto_learn_private_ranges_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetBasePolicyId">reset_base_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetDns">reset_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetExplicitProxy">reset_explicit_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetInsights">reset_insights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetIntrusionDetection">reset_intrusion_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetPrivateIpRanges">reset_private_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetSku">reset_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetSqlRedirectAllowed">reset_sql_redirect_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetThreatIntelligenceAllowlist">reset_threat_intelligence_allowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetThreatIntelligenceMode">reset_threat_intelligence_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetTlsCertificate">reset_tls_certificate</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dns` <a name="put_dns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putDns"></a>

```python
def put_dns(
  proxy_enabled: typing.Union[bool, IResolvable] = None,
  servers: typing.List[str] = None
) -> None
```

###### `proxy_enabled`<sup>Optional</sup> <a name="proxy_enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putDns.parameter.proxyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#proxy_enabled FirewallPolicy#proxy_enabled}.

---

###### `servers`<sup>Optional</sup> <a name="servers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putDns.parameter.servers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#servers FirewallPolicy#servers}.

---

##### `put_explicit_proxy` <a name="put_explicit_proxy" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putExplicitProxy"></a>

```python
def put_explicit_proxy(
  enabled: typing.Union[bool, IResolvable] = None,
  enable_pac_file: typing.Union[bool, IResolvable] = None,
  http_port: typing.Union[int, float] = None,
  https_port: typing.Union[int, float] = None,
  pac_file: str = None,
  pac_file_port: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putExplicitProxy.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#enabled FirewallPolicy#enabled}.

---

###### `enable_pac_file`<sup>Optional</sup> <a name="enable_pac_file" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putExplicitProxy.parameter.enablePacFile"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#enable_pac_file FirewallPolicy#enable_pac_file}.

---

###### `http_port`<sup>Optional</sup> <a name="http_port" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putExplicitProxy.parameter.httpPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#http_port FirewallPolicy#http_port}.

---

###### `https_port`<sup>Optional</sup> <a name="https_port" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putExplicitProxy.parameter.httpsPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#https_port FirewallPolicy#https_port}.

---

###### `pac_file`<sup>Optional</sup> <a name="pac_file" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putExplicitProxy.parameter.pacFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#pac_file FirewallPolicy#pac_file}.

---

###### `pac_file_port`<sup>Optional</sup> <a name="pac_file_port" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putExplicitProxy.parameter.pacFilePort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#pac_file_port FirewallPolicy#pac_file_port}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#type FirewallPolicy#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#identity_ids FirewallPolicy#identity_ids}.

---

##### `put_insights` <a name="put_insights" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putInsights"></a>

```python
def put_insights(
  default_log_analytics_workspace_id: str,
  enabled: typing.Union[bool, IResolvable],
  log_analytics_workspace: typing.Union[IResolvable, typing.List[FirewallPolicyInsightsLogAnalyticsWorkspace]] = None,
  retention_in_days: typing.Union[int, float] = None
) -> None
```

###### `default_log_analytics_workspace_id`<sup>Required</sup> <a name="default_log_analytics_workspace_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putInsights.parameter.defaultLogAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#default_log_analytics_workspace_id FirewallPolicy#default_log_analytics_workspace_id}.

---

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putInsights.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#enabled FirewallPolicy#enabled}.

---

###### `log_analytics_workspace`<sup>Optional</sup> <a name="log_analytics_workspace" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putInsights.parameter.logAnalyticsWorkspace"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace">FirewallPolicyInsightsLogAnalyticsWorkspace</a>]]

log_analytics_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#log_analytics_workspace FirewallPolicy#log_analytics_workspace}

---

###### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putInsights.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#retention_in_days FirewallPolicy#retention_in_days}.

---

##### `put_intrusion_detection` <a name="put_intrusion_detection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIntrusionDetection"></a>

```python
def put_intrusion_detection(
  mode: str = None,
  private_ranges: typing.List[str] = None,
  signature_overrides: typing.Union[IResolvable, typing.List[FirewallPolicyIntrusionDetectionSignatureOverrides]] = None,
  traffic_bypass: typing.Union[IResolvable, typing.List[FirewallPolicyIntrusionDetectionTrafficBypass]] = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIntrusionDetection.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#mode FirewallPolicy#mode}.

---

###### `private_ranges`<sup>Optional</sup> <a name="private_ranges" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIntrusionDetection.parameter.privateRanges"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#private_ranges FirewallPolicy#private_ranges}.

---

###### `signature_overrides`<sup>Optional</sup> <a name="signature_overrides" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIntrusionDetection.parameter.signatureOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides">FirewallPolicyIntrusionDetectionSignatureOverrides</a>]]

signature_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#signature_overrides FirewallPolicy#signature_overrides}

---

###### `traffic_bypass`<sup>Optional</sup> <a name="traffic_bypass" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIntrusionDetection.parameter.trafficBypass"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass">FirewallPolicyIntrusionDetectionTrafficBypass</a>]]

traffic_bypass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#traffic_bypass FirewallPolicy#traffic_bypass}

---

##### `put_threat_intelligence_allowlist` <a name="put_threat_intelligence_allowlist" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putThreatIntelligenceAllowlist"></a>

```python
def put_threat_intelligence_allowlist(
  fqdns: typing.List[str] = None,
  ip_addresses: typing.List[str] = None
) -> None
```

###### `fqdns`<sup>Optional</sup> <a name="fqdns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putThreatIntelligenceAllowlist.parameter.fqdns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#fqdns FirewallPolicy#fqdns}.

---

###### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putThreatIntelligenceAllowlist.parameter.ipAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#ip_addresses FirewallPolicy#ip_addresses}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#create FirewallPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#delete FirewallPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#read FirewallPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#update FirewallPolicy#update}.

---

##### `put_tls_certificate` <a name="put_tls_certificate" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTlsCertificate"></a>

```python
def put_tls_certificate(
  key_vault_secret_id: str,
  name: str
) -> None
```

###### `key_vault_secret_id`<sup>Required</sup> <a name="key_vault_secret_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTlsCertificate.parameter.keyVaultSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#key_vault_secret_id FirewallPolicy#key_vault_secret_id}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTlsCertificate.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#name FirewallPolicy#name}.

---

##### `reset_auto_learn_private_ranges_enabled` <a name="reset_auto_learn_private_ranges_enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetAutoLearnPrivateRangesEnabled"></a>

```python
def reset_auto_learn_private_ranges_enabled() -> None
```

##### `reset_base_policy_id` <a name="reset_base_policy_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetBasePolicyId"></a>

```python
def reset_base_policy_id() -> None
```

##### `reset_dns` <a name="reset_dns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetDns"></a>

```python
def reset_dns() -> None
```

##### `reset_explicit_proxy` <a name="reset_explicit_proxy" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetExplicitProxy"></a>

```python
def reset_explicit_proxy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_insights` <a name="reset_insights" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetInsights"></a>

```python
def reset_insights() -> None
```

##### `reset_intrusion_detection` <a name="reset_intrusion_detection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetIntrusionDetection"></a>

```python
def reset_intrusion_detection() -> None
```

##### `reset_private_ip_ranges` <a name="reset_private_ip_ranges" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetPrivateIpRanges"></a>

```python
def reset_private_ip_ranges() -> None
```

##### `reset_sku` <a name="reset_sku" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetSku"></a>

```python
def reset_sku() -> None
```

##### `reset_sql_redirect_allowed` <a name="reset_sql_redirect_allowed" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetSqlRedirectAllowed"></a>

```python
def reset_sql_redirect_allowed() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_threat_intelligence_allowlist` <a name="reset_threat_intelligence_allowlist" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetThreatIntelligenceAllowlist"></a>

```python
def reset_threat_intelligence_allowlist() -> None
```

##### `reset_threat_intelligence_mode` <a name="reset_threat_intelligence_mode" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetThreatIntelligenceMode"></a>

```python
def reset_threat_intelligence_mode() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_certificate` <a name="reset_tls_certificate" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetTlsCertificate"></a>

```python
def reset_tls_certificate() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicy.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirewallPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.childPolicies">child_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference">FirewallPolicyDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.explicitProxy">explicit_proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference">FirewallPolicyExplicitProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.firewalls">firewalls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference">FirewallPolicyIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.insights">insights</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference">FirewallPolicyInsightsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.intrusionDetection">intrusion_detection</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference">FirewallPolicyIntrusionDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.ruleCollectionGroups">rule_collection_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceAllowlist">threat_intelligence_allowlist</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference">FirewallPolicyThreatIntelligenceAllowlistStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference">FirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tlsCertificate">tls_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference">FirewallPolicyTlsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.autoLearnPrivateRangesEnabledInput">auto_learn_private_ranges_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.basePolicyIdInput">base_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.dnsInput">dns_input</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.explicitProxyInput">explicit_proxy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.insightsInput">insights_input</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.intrusionDetectionInput">intrusion_detection_input</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.privateIpRangesInput">private_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.sqlRedirectAllowedInput">sql_redirect_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceAllowlistInput">threat_intelligence_allowlist_input</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceModeInput">threat_intelligence_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts">FirewallPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tlsCertificateInput">tls_certificate_input</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.autoLearnPrivateRangesEnabled">auto_learn_private_ranges_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.basePolicyId">base_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.privateIpRanges">private_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.sqlRedirectAllowed">sql_redirect_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceMode">threat_intelligence_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `child_policies`<sup>Required</sup> <a name="child_policies" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.childPolicies"></a>

```python
child_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.dns"></a>

```python
dns: FirewallPolicyDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference">FirewallPolicyDnsOutputReference</a>

---

##### `explicit_proxy`<sup>Required</sup> <a name="explicit_proxy" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.explicitProxy"></a>

```python
explicit_proxy: FirewallPolicyExplicitProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference">FirewallPolicyExplicitProxyOutputReference</a>

---

##### `firewalls`<sup>Required</sup> <a name="firewalls" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.firewalls"></a>

```python
firewalls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.identity"></a>

```python
identity: FirewallPolicyIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference">FirewallPolicyIdentityOutputReference</a>

---

##### `insights`<sup>Required</sup> <a name="insights" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.insights"></a>

```python
insights: FirewallPolicyInsightsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference">FirewallPolicyInsightsOutputReference</a>

---

##### `intrusion_detection`<sup>Required</sup> <a name="intrusion_detection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.intrusionDetection"></a>

```python
intrusion_detection: FirewallPolicyIntrusionDetectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference">FirewallPolicyIntrusionDetectionOutputReference</a>

---

##### `rule_collection_groups`<sup>Required</sup> <a name="rule_collection_groups" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.ruleCollectionGroups"></a>

```python
rule_collection_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `threat_intelligence_allowlist`<sup>Required</sup> <a name="threat_intelligence_allowlist" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceAllowlist"></a>

```python
threat_intelligence_allowlist: FirewallPolicyThreatIntelligenceAllowlistStructOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference">FirewallPolicyThreatIntelligenceAllowlistStructOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.timeouts"></a>

```python
timeouts: FirewallPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference">FirewallPolicyTimeoutsOutputReference</a>

---

##### `tls_certificate`<sup>Required</sup> <a name="tls_certificate" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tlsCertificate"></a>

```python
tls_certificate: FirewallPolicyTlsCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference">FirewallPolicyTlsCertificateOutputReference</a>

---

##### `auto_learn_private_ranges_enabled_input`<sup>Optional</sup> <a name="auto_learn_private_ranges_enabled_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.autoLearnPrivateRangesEnabledInput"></a>

```python
auto_learn_private_ranges_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `base_policy_id_input`<sup>Optional</sup> <a name="base_policy_id_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.basePolicyIdInput"></a>

```python
base_policy_id_input: str
```

- *Type:* str

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.dnsInput"></a>

```python
dns_input: FirewallPolicyDns
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a>

---

##### `explicit_proxy_input`<sup>Optional</sup> <a name="explicit_proxy_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.explicitProxyInput"></a>

```python
explicit_proxy_input: FirewallPolicyExplicitProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.identityInput"></a>

```python
identity_input: FirewallPolicyIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `insights_input`<sup>Optional</sup> <a name="insights_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.insightsInput"></a>

```python
insights_input: FirewallPolicyInsights
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a>

---

##### `intrusion_detection_input`<sup>Optional</sup> <a name="intrusion_detection_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.intrusionDetectionInput"></a>

```python
intrusion_detection_input: FirewallPolicyIntrusionDetection
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_ip_ranges_input`<sup>Optional</sup> <a name="private_ip_ranges_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.privateIpRangesInput"></a>

```python
private_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `sql_redirect_allowed_input`<sup>Optional</sup> <a name="sql_redirect_allowed_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.sqlRedirectAllowedInput"></a>

```python
sql_redirect_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `threat_intelligence_allowlist_input`<sup>Optional</sup> <a name="threat_intelligence_allowlist_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceAllowlistInput"></a>

```python
threat_intelligence_allowlist_input: FirewallPolicyThreatIntelligenceAllowlistStruct
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a>

---

##### `threat_intelligence_mode_input`<sup>Optional</sup> <a name="threat_intelligence_mode_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceModeInput"></a>

```python
threat_intelligence_mode_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FirewallPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts">FirewallPolicyTimeouts</a>]

---

##### `tls_certificate_input`<sup>Optional</sup> <a name="tls_certificate_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tlsCertificateInput"></a>

```python
tls_certificate_input: FirewallPolicyTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a>

---

##### `auto_learn_private_ranges_enabled`<sup>Required</sup> <a name="auto_learn_private_ranges_enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.autoLearnPrivateRangesEnabled"></a>

```python
auto_learn_private_ranges_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `base_policy_id`<sup>Required</sup> <a name="base_policy_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.basePolicyId"></a>

```python
base_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_ip_ranges`<sup>Required</sup> <a name="private_ip_ranges" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.privateIpRanges"></a>

```python
private_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `sql_redirect_allowed`<sup>Required</sup> <a name="sql_redirect_allowed" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.sqlRedirectAllowed"></a>

```python
sql_redirect_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `threat_intelligence_mode`<sup>Required</sup> <a name="threat_intelligence_mode" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceMode"></a>

```python
threat_intelligence_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallPolicyConfig <a name="FirewallPolicyConfig" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  auto_learn_private_ranges_enabled: typing.Union[bool, IResolvable] = None,
  base_policy_id: str = None,
  dns: FirewallPolicyDns = None,
  explicit_proxy: FirewallPolicyExplicitProxy = None,
  id: str = None,
  identity: FirewallPolicyIdentity = None,
  insights: FirewallPolicyInsights = None,
  intrusion_detection: FirewallPolicyIntrusionDetection = None,
  private_ip_ranges: typing.List[str] = None,
  sku: str = None,
  sql_redirect_allowed: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  threat_intelligence_allowlist: FirewallPolicyThreatIntelligenceAllowlistStruct = None,
  threat_intelligence_mode: str = None,
  timeouts: FirewallPolicyTimeouts = None,
  tls_certificate: FirewallPolicyTlsCertificate = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#location FirewallPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#name FirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#resource_group_name FirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.autoLearnPrivateRangesEnabled">auto_learn_private_ranges_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#auto_learn_private_ranges_enabled FirewallPolicy#auto_learn_private_ranges_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.basePolicyId">base_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#base_policy_id FirewallPolicy#base_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.explicitProxy">explicit_proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a></code> | explicit_proxy block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#id FirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.insights">insights</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a></code> | insights block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.intrusionDetection">intrusion_detection</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a></code> | intrusion_detection block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.privateIpRanges">private_ip_ranges</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#private_ip_ranges FirewallPolicy#private_ip_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#sku FirewallPolicy#sku}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.sqlRedirectAllowed">sql_redirect_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#sql_redirect_allowed FirewallPolicy#sql_redirect_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#tags FirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.threatIntelligenceAllowlist">threat_intelligence_allowlist</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a></code> | threat_intelligence_allowlist block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.threatIntelligenceMode">threat_intelligence_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#threat_intelligence_mode FirewallPolicy#threat_intelligence_mode}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts">FirewallPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.tlsCertificate">tls_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a></code> | tls_certificate block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#location FirewallPolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#name FirewallPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#resource_group_name FirewallPolicy#resource_group_name}.

---

##### `auto_learn_private_ranges_enabled`<sup>Optional</sup> <a name="auto_learn_private_ranges_enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.autoLearnPrivateRangesEnabled"></a>

```python
auto_learn_private_ranges_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#auto_learn_private_ranges_enabled FirewallPolicy#auto_learn_private_ranges_enabled}.

---

##### `base_policy_id`<sup>Optional</sup> <a name="base_policy_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.basePolicyId"></a>

```python
base_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#base_policy_id FirewallPolicy#base_policy_id}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.dns"></a>

```python
dns: FirewallPolicyDns
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#dns FirewallPolicy#dns}

---

##### `explicit_proxy`<sup>Optional</sup> <a name="explicit_proxy" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.explicitProxy"></a>

```python
explicit_proxy: FirewallPolicyExplicitProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a>

explicit_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#explicit_proxy FirewallPolicy#explicit_proxy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#id FirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.identity"></a>

```python
identity: FirewallPolicyIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#identity FirewallPolicy#identity}

---

##### `insights`<sup>Optional</sup> <a name="insights" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.insights"></a>

```python
insights: FirewallPolicyInsights
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a>

insights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#insights FirewallPolicy#insights}

---

##### `intrusion_detection`<sup>Optional</sup> <a name="intrusion_detection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.intrusionDetection"></a>

```python
intrusion_detection: FirewallPolicyIntrusionDetection
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a>

intrusion_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#intrusion_detection FirewallPolicy#intrusion_detection}

---

##### `private_ip_ranges`<sup>Optional</sup> <a name="private_ip_ranges" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.privateIpRanges"></a>

```python
private_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#private_ip_ranges FirewallPolicy#private_ip_ranges}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#sku FirewallPolicy#sku}.

---

##### `sql_redirect_allowed`<sup>Optional</sup> <a name="sql_redirect_allowed" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.sqlRedirectAllowed"></a>

```python
sql_redirect_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#sql_redirect_allowed FirewallPolicy#sql_redirect_allowed}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#tags FirewallPolicy#tags}.

---

##### `threat_intelligence_allowlist`<sup>Optional</sup> <a name="threat_intelligence_allowlist" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.threatIntelligenceAllowlist"></a>

```python
threat_intelligence_allowlist: FirewallPolicyThreatIntelligenceAllowlistStruct
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a>

threat_intelligence_allowlist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#threat_intelligence_allowlist FirewallPolicy#threat_intelligence_allowlist}

---

##### `threat_intelligence_mode`<sup>Optional</sup> <a name="threat_intelligence_mode" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.threatIntelligenceMode"></a>

```python
threat_intelligence_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#threat_intelligence_mode FirewallPolicy#threat_intelligence_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.timeouts"></a>

```python
timeouts: FirewallPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts">FirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#timeouts FirewallPolicy#timeouts}

---

##### `tls_certificate`<sup>Optional</sup> <a name="tls_certificate" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.tlsCertificate"></a>

```python
tls_certificate: FirewallPolicyTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a>

tls_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#tls_certificate FirewallPolicy#tls_certificate}

---

### FirewallPolicyDns <a name="FirewallPolicyDns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyDns(
  proxy_enabled: typing.Union[bool, IResolvable] = None,
  servers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns.property.proxyEnabled">proxy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#proxy_enabled FirewallPolicy#proxy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns.property.servers">servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#servers FirewallPolicy#servers}. |

---

##### `proxy_enabled`<sup>Optional</sup> <a name="proxy_enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns.property.proxyEnabled"></a>

```python
proxy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#proxy_enabled FirewallPolicy#proxy_enabled}.

---

##### `servers`<sup>Optional</sup> <a name="servers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns.property.servers"></a>

```python
servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#servers FirewallPolicy#servers}.

---

### FirewallPolicyExplicitProxy <a name="FirewallPolicyExplicitProxy" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyExplicitProxy(
  enabled: typing.Union[bool, IResolvable] = None,
  enable_pac_file: typing.Union[bool, IResolvable] = None,
  http_port: typing.Union[int, float] = None,
  https_port: typing.Union[int, float] = None,
  pac_file: str = None,
  pac_file_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#enabled FirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.enablePacFile">enable_pac_file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#enable_pac_file FirewallPolicy#enable_pac_file}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#http_port FirewallPolicy#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#https_port FirewallPolicy#https_port}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.pacFile">pac_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#pac_file FirewallPolicy#pac_file}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.pacFilePort">pac_file_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#pac_file_port FirewallPolicy#pac_file_port}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#enabled FirewallPolicy#enabled}.

---

##### `enable_pac_file`<sup>Optional</sup> <a name="enable_pac_file" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.enablePacFile"></a>

```python
enable_pac_file: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#enable_pac_file FirewallPolicy#enable_pac_file}.

---

##### `http_port`<sup>Optional</sup> <a name="http_port" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.httpPort"></a>

```python
http_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#http_port FirewallPolicy#http_port}.

---

##### `https_port`<sup>Optional</sup> <a name="https_port" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.httpsPort"></a>

```python
https_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#https_port FirewallPolicy#https_port}.

---

##### `pac_file`<sup>Optional</sup> <a name="pac_file" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.pacFile"></a>

```python
pac_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#pac_file FirewallPolicy#pac_file}.

---

##### `pac_file_port`<sup>Optional</sup> <a name="pac_file_port" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.pacFilePort"></a>

```python
pac_file_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#pac_file_port FirewallPolicy#pac_file_port}.

---

### FirewallPolicyIdentity <a name="FirewallPolicyIdentity" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#type FirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#identity_ids FirewallPolicy#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#type FirewallPolicy#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#identity_ids FirewallPolicy#identity_ids}.

---

### FirewallPolicyInsights <a name="FirewallPolicyInsights" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyInsights(
  default_log_analytics_workspace_id: str,
  enabled: typing.Union[bool, IResolvable],
  log_analytics_workspace: typing.Union[IResolvable, typing.List[FirewallPolicyInsightsLogAnalyticsWorkspace]] = None,
  retention_in_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.defaultLogAnalyticsWorkspaceId">default_log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#default_log_analytics_workspace_id FirewallPolicy#default_log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#enabled FirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.logAnalyticsWorkspace">log_analytics_workspace</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace">FirewallPolicyInsightsLogAnalyticsWorkspace</a>]]</code> | log_analytics_workspace block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#retention_in_days FirewallPolicy#retention_in_days}. |

---

##### `default_log_analytics_workspace_id`<sup>Required</sup> <a name="default_log_analytics_workspace_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.defaultLogAnalyticsWorkspaceId"></a>

```python
default_log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#default_log_analytics_workspace_id FirewallPolicy#default_log_analytics_workspace_id}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#enabled FirewallPolicy#enabled}.

---

##### `log_analytics_workspace`<sup>Optional</sup> <a name="log_analytics_workspace" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.logAnalyticsWorkspace"></a>

```python
log_analytics_workspace: typing.Union[IResolvable, typing.List[FirewallPolicyInsightsLogAnalyticsWorkspace]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace">FirewallPolicyInsightsLogAnalyticsWorkspace</a>]]

log_analytics_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#log_analytics_workspace FirewallPolicy#log_analytics_workspace}

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#retention_in_days FirewallPolicy#retention_in_days}.

---

### FirewallPolicyInsightsLogAnalyticsWorkspace <a name="FirewallPolicyInsightsLogAnalyticsWorkspace" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace(
  firewall_location: str,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace.property.firewallLocation">firewall_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#firewall_location FirewallPolicy#firewall_location}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#id FirewallPolicy#id}. |

---

##### `firewall_location`<sup>Required</sup> <a name="firewall_location" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace.property.firewallLocation"></a>

```python
firewall_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#firewall_location FirewallPolicy#firewall_location}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#id FirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FirewallPolicyIntrusionDetection <a name="FirewallPolicyIntrusionDetection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyIntrusionDetection(
  mode: str = None,
  private_ranges: typing.List[str] = None,
  signature_overrides: typing.Union[IResolvable, typing.List[FirewallPolicyIntrusionDetectionSignatureOverrides]] = None,
  traffic_bypass: typing.Union[IResolvable, typing.List[FirewallPolicyIntrusionDetectionTrafficBypass]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#mode FirewallPolicy#mode}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.privateRanges">private_ranges</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#private_ranges FirewallPolicy#private_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.signatureOverrides">signature_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides">FirewallPolicyIntrusionDetectionSignatureOverrides</a>]]</code> | signature_overrides block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.trafficBypass">traffic_bypass</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass">FirewallPolicyIntrusionDetectionTrafficBypass</a>]]</code> | traffic_bypass block. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#mode FirewallPolicy#mode}.

---

##### `private_ranges`<sup>Optional</sup> <a name="private_ranges" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.privateRanges"></a>

```python
private_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#private_ranges FirewallPolicy#private_ranges}.

---

##### `signature_overrides`<sup>Optional</sup> <a name="signature_overrides" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.signatureOverrides"></a>

```python
signature_overrides: typing.Union[IResolvable, typing.List[FirewallPolicyIntrusionDetectionSignatureOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides">FirewallPolicyIntrusionDetectionSignatureOverrides</a>]]

signature_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#signature_overrides FirewallPolicy#signature_overrides}

---

##### `traffic_bypass`<sup>Optional</sup> <a name="traffic_bypass" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.trafficBypass"></a>

```python
traffic_bypass: typing.Union[IResolvable, typing.List[FirewallPolicyIntrusionDetectionTrafficBypass]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass">FirewallPolicyIntrusionDetectionTrafficBypass</a>]]

traffic_bypass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#traffic_bypass FirewallPolicy#traffic_bypass}

---

### FirewallPolicyIntrusionDetectionSignatureOverrides <a name="FirewallPolicyIntrusionDetectionSignatureOverrides" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides(
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#id FirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#state FirewallPolicy#state}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#id FirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#state FirewallPolicy#state}.

---

### FirewallPolicyIntrusionDetectionTrafficBypass <a name="FirewallPolicyIntrusionDetectionTrafficBypass" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass(
  name: str,
  protocol: str,
  description: str = None,
  destination_addresses: typing.List[str] = None,
  destination_ip_groups: typing.List[str] = None,
  destination_ports: typing.List[str] = None,
  source_addresses: typing.List[str] = None,
  source_ip_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#name FirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#protocol FirewallPolicy#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#description FirewallPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.destinationAddresses">destination_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#destination_addresses FirewallPolicy#destination_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.destinationIpGroups">destination_ip_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#destination_ip_groups FirewallPolicy#destination_ip_groups}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.destinationPorts">destination_ports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#destination_ports FirewallPolicy#destination_ports}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.sourceAddresses">source_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#source_addresses FirewallPolicy#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.sourceIpGroups">source_ip_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#source_ip_groups FirewallPolicy#source_ip_groups}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#name FirewallPolicy#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#protocol FirewallPolicy#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#description FirewallPolicy#description}.

---

##### `destination_addresses`<sup>Optional</sup> <a name="destination_addresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.destinationAddresses"></a>

```python
destination_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#destination_addresses FirewallPolicy#destination_addresses}.

---

##### `destination_ip_groups`<sup>Optional</sup> <a name="destination_ip_groups" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.destinationIpGroups"></a>

```python
destination_ip_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#destination_ip_groups FirewallPolicy#destination_ip_groups}.

---

##### `destination_ports`<sup>Optional</sup> <a name="destination_ports" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.destinationPorts"></a>

```python
destination_ports: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#destination_ports FirewallPolicy#destination_ports}.

---

##### `source_addresses`<sup>Optional</sup> <a name="source_addresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.sourceAddresses"></a>

```python
source_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#source_addresses FirewallPolicy#source_addresses}.

---

##### `source_ip_groups`<sup>Optional</sup> <a name="source_ip_groups" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.sourceIpGroups"></a>

```python
source_ip_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#source_ip_groups FirewallPolicy#source_ip_groups}.

---

### FirewallPolicyThreatIntelligenceAllowlistStruct <a name="FirewallPolicyThreatIntelligenceAllowlistStruct" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct(
  fqdns: typing.List[str] = None,
  ip_addresses: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct.property.fqdns">fqdns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#fqdns FirewallPolicy#fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#ip_addresses FirewallPolicy#ip_addresses}. |

---

##### `fqdns`<sup>Optional</sup> <a name="fqdns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct.property.fqdns"></a>

```python
fqdns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#fqdns FirewallPolicy#fqdns}.

---

##### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#ip_addresses FirewallPolicy#ip_addresses}.

---

### FirewallPolicyTimeouts <a name="FirewallPolicyTimeouts" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#create FirewallPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#delete FirewallPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#read FirewallPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#update FirewallPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#create FirewallPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#delete FirewallPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#read FirewallPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#update FirewallPolicy#update}.

---

### FirewallPolicyTlsCertificate <a name="FirewallPolicyTlsCertificate" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyTlsCertificate(
  key_vault_secret_id: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate.property.keyVaultSecretId">key_vault_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#key_vault_secret_id FirewallPolicy#key_vault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#name FirewallPolicy#name}. |

---

##### `key_vault_secret_id`<sup>Required</sup> <a name="key_vault_secret_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate.property.keyVaultSecretId"></a>

```python
key_vault_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#key_vault_secret_id FirewallPolicy#key_vault_secret_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/firewall_policy#name FirewallPolicy#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallPolicyDnsOutputReference <a name="FirewallPolicyDnsOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.resetProxyEnabled">reset_proxy_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.resetServers">reset_servers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_proxy_enabled` <a name="reset_proxy_enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.resetProxyEnabled"></a>

```python
def reset_proxy_enabled() -> None
```

##### `reset_servers` <a name="reset_servers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.resetServers"></a>

```python
def reset_servers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.proxyEnabledInput">proxy_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.serversInput">servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.proxyEnabled">proxy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.servers">servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `proxy_enabled_input`<sup>Optional</sup> <a name="proxy_enabled_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.proxyEnabledInput"></a>

```python
proxy_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `servers_input`<sup>Optional</sup> <a name="servers_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.serversInput"></a>

```python
servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `proxy_enabled`<sup>Required</sup> <a name="proxy_enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.proxyEnabled"></a>

```python
proxy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.servers"></a>

```python
servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.internalValue"></a>

```python
internal_value: FirewallPolicyDns
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a>

---


### FirewallPolicyExplicitProxyOutputReference <a name="FirewallPolicyExplicitProxyOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyExplicitProxyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetEnablePacFile">reset_enable_pac_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetHttpPort">reset_http_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetHttpsPort">reset_https_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetPacFile">reset_pac_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetPacFilePort">reset_pac_file_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_enable_pac_file` <a name="reset_enable_pac_file" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetEnablePacFile"></a>

```python
def reset_enable_pac_file() -> None
```

##### `reset_http_port` <a name="reset_http_port" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetHttpPort"></a>

```python
def reset_http_port() -> None
```

##### `reset_https_port` <a name="reset_https_port" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetHttpsPort"></a>

```python
def reset_https_port() -> None
```

##### `reset_pac_file` <a name="reset_pac_file" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetPacFile"></a>

```python
def reset_pac_file() -> None
```

##### `reset_pac_file_port` <a name="reset_pac_file_port" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetPacFilePort"></a>

```python
def reset_pac_file_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enablePacFileInput">enable_pac_file_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpPortInput">http_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpsPortInput">https_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFileInput">pac_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFilePortInput">pac_file_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enablePacFile">enable_pac_file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFile">pac_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFilePort">pac_file_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_pac_file_input`<sup>Optional</sup> <a name="enable_pac_file_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enablePacFileInput"></a>

```python
enable_pac_file_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_port_input`<sup>Optional</sup> <a name="http_port_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpPortInput"></a>

```python
http_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `https_port_input`<sup>Optional</sup> <a name="https_port_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpsPortInput"></a>

```python
https_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pac_file_input`<sup>Optional</sup> <a name="pac_file_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFileInput"></a>

```python
pac_file_input: str
```

- *Type:* str

---

##### `pac_file_port_input`<sup>Optional</sup> <a name="pac_file_port_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFilePortInput"></a>

```python
pac_file_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_pac_file`<sup>Required</sup> <a name="enable_pac_file" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enablePacFile"></a>

```python
enable_pac_file: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_port`<sup>Required</sup> <a name="http_port" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpPort"></a>

```python
http_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `https_port`<sup>Required</sup> <a name="https_port" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpsPort"></a>

```python
https_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pac_file`<sup>Required</sup> <a name="pac_file" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFile"></a>

```python
pac_file: str
```

- *Type:* str

---

##### `pac_file_port`<sup>Required</sup> <a name="pac_file_port" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFilePort"></a>

```python
pac_file_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.internalValue"></a>

```python
internal_value: FirewallPolicyExplicitProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a>

---


### FirewallPolicyIdentityOutputReference <a name="FirewallPolicyIdentityOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.internalValue"></a>

```python
internal_value: FirewallPolicyIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a>

---


### FirewallPolicyInsightsLogAnalyticsWorkspaceList <a name="FirewallPolicyInsightsLogAnalyticsWorkspaceList" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace">FirewallPolicyInsightsLogAnalyticsWorkspace</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FirewallPolicyInsightsLogAnalyticsWorkspace]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace">FirewallPolicyInsightsLogAnalyticsWorkspace</a>]]

---


### FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference <a name="FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.firewallLocationInput">firewall_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.firewallLocation">firewall_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace">FirewallPolicyInsightsLogAnalyticsWorkspace</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `firewall_location_input`<sup>Optional</sup> <a name="firewall_location_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.firewallLocationInput"></a>

```python
firewall_location_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `firewall_location`<sup>Required</sup> <a name="firewall_location" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.firewallLocation"></a>

```python
firewall_location: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirewallPolicyInsightsLogAnalyticsWorkspace]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace">FirewallPolicyInsightsLogAnalyticsWorkspace</a>]

---


### FirewallPolicyInsightsOutputReference <a name="FirewallPolicyInsightsOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyInsightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.putLogAnalyticsWorkspace">put_log_analytics_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.resetLogAnalyticsWorkspace">reset_log_analytics_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.resetRetentionInDays">reset_retention_in_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_log_analytics_workspace` <a name="put_log_analytics_workspace" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.putLogAnalyticsWorkspace"></a>

```python
def put_log_analytics_workspace(
  value: typing.Union[IResolvable, typing.List[FirewallPolicyInsightsLogAnalyticsWorkspace]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.putLogAnalyticsWorkspace.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace">FirewallPolicyInsightsLogAnalyticsWorkspace</a>]]

---

##### `reset_log_analytics_workspace` <a name="reset_log_analytics_workspace" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.resetLogAnalyticsWorkspace"></a>

```python
def reset_log_analytics_workspace() -> None
```

##### `reset_retention_in_days` <a name="reset_retention_in_days" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.resetRetentionInDays"></a>

```python
def reset_retention_in_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.logAnalyticsWorkspace">log_analytics_workspace</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList">FirewallPolicyInsightsLogAnalyticsWorkspaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.defaultLogAnalyticsWorkspaceIdInput">default_log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.logAnalyticsWorkspaceInput">log_analytics_workspace_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace">FirewallPolicyInsightsLogAnalyticsWorkspace</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.defaultLogAnalyticsWorkspaceId">default_log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_analytics_workspace`<sup>Required</sup> <a name="log_analytics_workspace" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.logAnalyticsWorkspace"></a>

```python
log_analytics_workspace: FirewallPolicyInsightsLogAnalyticsWorkspaceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList">FirewallPolicyInsightsLogAnalyticsWorkspaceList</a>

---

##### `default_log_analytics_workspace_id_input`<sup>Optional</sup> <a name="default_log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.defaultLogAnalyticsWorkspaceIdInput"></a>

```python
default_log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_analytics_workspace_input`<sup>Optional</sup> <a name="log_analytics_workspace_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.logAnalyticsWorkspaceInput"></a>

```python
log_analytics_workspace_input: typing.Union[IResolvable, typing.List[FirewallPolicyInsightsLogAnalyticsWorkspace]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace">FirewallPolicyInsightsLogAnalyticsWorkspace</a>]]

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_log_analytics_workspace_id`<sup>Required</sup> <a name="default_log_analytics_workspace_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.defaultLogAnalyticsWorkspaceId"></a>

```python
default_log_analytics_workspace_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.internalValue"></a>

```python
internal_value: FirewallPolicyInsights
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a>

---


### FirewallPolicyIntrusionDetectionOutputReference <a name="FirewallPolicyIntrusionDetectionOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.putSignatureOverrides">put_signature_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.putTrafficBypass">put_traffic_bypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetPrivateRanges">reset_private_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetSignatureOverrides">reset_signature_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetTrafficBypass">reset_traffic_bypass</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_signature_overrides` <a name="put_signature_overrides" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.putSignatureOverrides"></a>

```python
def put_signature_overrides(
  value: typing.Union[IResolvable, typing.List[FirewallPolicyIntrusionDetectionSignatureOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.putSignatureOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides">FirewallPolicyIntrusionDetectionSignatureOverrides</a>]]

---

##### `put_traffic_bypass` <a name="put_traffic_bypass" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.putTrafficBypass"></a>

```python
def put_traffic_bypass(
  value: typing.Union[IResolvable, typing.List[FirewallPolicyIntrusionDetectionTrafficBypass]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.putTrafficBypass.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass">FirewallPolicyIntrusionDetectionTrafficBypass</a>]]

---

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_private_ranges` <a name="reset_private_ranges" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetPrivateRanges"></a>

```python
def reset_private_ranges() -> None
```

##### `reset_signature_overrides` <a name="reset_signature_overrides" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetSignatureOverrides"></a>

```python
def reset_signature_overrides() -> None
```

##### `reset_traffic_bypass` <a name="reset_traffic_bypass" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetTrafficBypass"></a>

```python
def reset_traffic_bypass() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.signatureOverrides">signature_overrides</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList">FirewallPolicyIntrusionDetectionSignatureOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.trafficBypass">traffic_bypass</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList">FirewallPolicyIntrusionDetectionTrafficBypassList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.privateRangesInput">private_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.signatureOverridesInput">signature_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides">FirewallPolicyIntrusionDetectionSignatureOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.trafficBypassInput">traffic_bypass_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass">FirewallPolicyIntrusionDetectionTrafficBypass</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.privateRanges">private_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `signature_overrides`<sup>Required</sup> <a name="signature_overrides" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.signatureOverrides"></a>

```python
signature_overrides: FirewallPolicyIntrusionDetectionSignatureOverridesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList">FirewallPolicyIntrusionDetectionSignatureOverridesList</a>

---

##### `traffic_bypass`<sup>Required</sup> <a name="traffic_bypass" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.trafficBypass"></a>

```python
traffic_bypass: FirewallPolicyIntrusionDetectionTrafficBypassList
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList">FirewallPolicyIntrusionDetectionTrafficBypassList</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `private_ranges_input`<sup>Optional</sup> <a name="private_ranges_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.privateRangesInput"></a>

```python
private_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `signature_overrides_input`<sup>Optional</sup> <a name="signature_overrides_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.signatureOverridesInput"></a>

```python
signature_overrides_input: typing.Union[IResolvable, typing.List[FirewallPolicyIntrusionDetectionSignatureOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides">FirewallPolicyIntrusionDetectionSignatureOverrides</a>]]

---

##### `traffic_bypass_input`<sup>Optional</sup> <a name="traffic_bypass_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.trafficBypassInput"></a>

```python
traffic_bypass_input: typing.Union[IResolvable, typing.List[FirewallPolicyIntrusionDetectionTrafficBypass]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass">FirewallPolicyIntrusionDetectionTrafficBypass</a>]]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `private_ranges`<sup>Required</sup> <a name="private_ranges" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.privateRanges"></a>

```python
private_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.internalValue"></a>

```python
internal_value: FirewallPolicyIntrusionDetection
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a>

---


### FirewallPolicyIntrusionDetectionSignatureOverridesList <a name="FirewallPolicyIntrusionDetectionSignatureOverridesList" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides">FirewallPolicyIntrusionDetectionSignatureOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FirewallPolicyIntrusionDetectionSignatureOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides">FirewallPolicyIntrusionDetectionSignatureOverrides</a>]]

---


### FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference <a name="FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides">FirewallPolicyIntrusionDetectionSignatureOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirewallPolicyIntrusionDetectionSignatureOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides">FirewallPolicyIntrusionDetectionSignatureOverrides</a>]

---


### FirewallPolicyIntrusionDetectionTrafficBypassList <a name="FirewallPolicyIntrusionDetectionTrafficBypassList" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirewallPolicyIntrusionDetectionTrafficBypassOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass">FirewallPolicyIntrusionDetectionTrafficBypass</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FirewallPolicyIntrusionDetectionTrafficBypass]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass">FirewallPolicyIntrusionDetectionTrafficBypass</a>]]

---


### FirewallPolicyIntrusionDetectionTrafficBypassOutputReference <a name="FirewallPolicyIntrusionDetectionTrafficBypassOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDestinationAddresses">reset_destination_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDestinationIpGroups">reset_destination_ip_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDestinationPorts">reset_destination_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetSourceAddresses">reset_source_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetSourceIpGroups">reset_source_ip_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination_addresses` <a name="reset_destination_addresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDestinationAddresses"></a>

```python
def reset_destination_addresses() -> None
```

##### `reset_destination_ip_groups` <a name="reset_destination_ip_groups" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDestinationIpGroups"></a>

```python
def reset_destination_ip_groups() -> None
```

##### `reset_destination_ports` <a name="reset_destination_ports" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDestinationPorts"></a>

```python
def reset_destination_ports() -> None
```

##### `reset_source_addresses` <a name="reset_source_addresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetSourceAddresses"></a>

```python
def reset_source_addresses() -> None
```

##### `reset_source_ip_groups` <a name="reset_source_ip_groups" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetSourceIpGroups"></a>

```python
def reset_source_ip_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationAddressesInput">destination_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationIpGroupsInput">destination_ip_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationPortsInput">destination_ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceAddressesInput">source_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceIpGroupsInput">source_ip_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationAddresses">destination_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationIpGroups">destination_ip_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationPorts">destination_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceAddresses">source_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceIpGroups">source_ip_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass">FirewallPolicyIntrusionDetectionTrafficBypass</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_addresses_input`<sup>Optional</sup> <a name="destination_addresses_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationAddressesInput"></a>

```python
destination_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_ip_groups_input`<sup>Optional</sup> <a name="destination_ip_groups_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationIpGroupsInput"></a>

```python
destination_ip_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_ports_input`<sup>Optional</sup> <a name="destination_ports_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationPortsInput"></a>

```python
destination_ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `source_addresses_input`<sup>Optional</sup> <a name="source_addresses_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceAddressesInput"></a>

```python
source_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_ip_groups_input`<sup>Optional</sup> <a name="source_ip_groups_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceIpGroupsInput"></a>

```python
source_ip_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_addresses`<sup>Required</sup> <a name="destination_addresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationAddresses"></a>

```python
destination_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_ip_groups`<sup>Required</sup> <a name="destination_ip_groups" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationIpGroups"></a>

```python
destination_ip_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_ports`<sup>Required</sup> <a name="destination_ports" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationPorts"></a>

```python
destination_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source_addresses`<sup>Required</sup> <a name="source_addresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceAddresses"></a>

```python
source_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_ip_groups`<sup>Required</sup> <a name="source_ip_groups" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceIpGroups"></a>

```python
source_ip_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirewallPolicyIntrusionDetectionTrafficBypass]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass">FirewallPolicyIntrusionDetectionTrafficBypass</a>]

---


### FirewallPolicyThreatIntelligenceAllowlistStructOutputReference <a name="FirewallPolicyThreatIntelligenceAllowlistStructOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.resetFqdns">reset_fqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.resetIpAddresses">reset_ip_addresses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fqdns` <a name="reset_fqdns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.resetFqdns"></a>

```python
def reset_fqdns() -> None
```

##### `reset_ip_addresses` <a name="reset_ip_addresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.resetIpAddresses"></a>

```python
def reset_ip_addresses() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.fqdnsInput">fqdns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.ipAddressesInput">ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.fqdns">fqdns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdns_input`<sup>Optional</sup> <a name="fqdns_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.fqdnsInput"></a>

```python
fqdns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_addresses_input`<sup>Optional</sup> <a name="ip_addresses_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.ipAddressesInput"></a>

```python
ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fqdns`<sup>Required</sup> <a name="fqdns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.fqdns"></a>

```python
fqdns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.internalValue"></a>

```python
internal_value: FirewallPolicyThreatIntelligenceAllowlistStruct
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a>

---


### FirewallPolicyTimeoutsOutputReference <a name="FirewallPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts">FirewallPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirewallPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts">FirewallPolicyTimeouts</a>]

---


### FirewallPolicyTlsCertificateOutputReference <a name="FirewallPolicyTlsCertificateOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_policy

firewallPolicy.FirewallPolicyTlsCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.keyVaultSecretIdInput">key_vault_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.keyVaultSecretId">key_vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_vault_secret_id_input`<sup>Optional</sup> <a name="key_vault_secret_id_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.keyVaultSecretIdInput"></a>

```python
key_vault_secret_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `key_vault_secret_id`<sup>Required</sup> <a name="key_vault_secret_id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.keyVaultSecretId"></a>

```python
key_vault_secret_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.internalValue"></a>

```python
internal_value: FirewallPolicyTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a>

---



