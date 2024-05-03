# `paloAltoNextGenerationFirewallVirtualHubLocalRulestack` Submodule <a name="`paloAltoNextGenerationFirewallVirtualHubLocalRulestack` Submodule" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoNextGenerationFirewallVirtualHubLocalRulestack <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack azurerm_palo_alto_next_generation_firewall_virtual_hub_local_rulestack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_profile: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile,
  resource_group_name: str,
  rulestack_id: str,
  destination_nat: typing.Union[IResolvable, typing.List[PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat]] = None,
  dns_settings: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#name PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.networkProfile">network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#resource_group_name PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.rulestackId">rulestack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#rulestack_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#rulestack_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.destinationNat">destination_nat</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat</a>]]</code> | destination_nat block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.dnsSettings">dns_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#tags PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#tags}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#name PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#name}.

---

##### `network_profile`<sup>Required</sup> <a name="network_profile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.networkProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#network_profile PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#network_profile}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#resource_group_name PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#resource_group_name}.

---

##### `rulestack_id`<sup>Required</sup> <a name="rulestack_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.rulestackId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#rulestack_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#rulestack_id}.

---

##### `destination_nat`<sup>Optional</sup> <a name="destination_nat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.destinationNat"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat</a>]]

destination_nat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#destination_nat PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#destination_nat}

---

##### `dns_settings`<sup>Optional</sup> <a name="dns_settings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.dnsSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#dns_settings PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#dns_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#tags PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#timeouts PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putDestinationNat">put_destination_nat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putDnsSettings">put_dns_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putNetworkProfile">put_network_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.resetDestinationNat">reset_destination_nat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.resetDnsSettings">reset_dns_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_nat` <a name="put_destination_nat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putDestinationNat"></a>

```python
def put_destination_nat(
  value: typing.Union[IResolvable, typing.List[PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putDestinationNat.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat</a>]]

---

##### `put_dns_settings` <a name="put_dns_settings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putDnsSettings"></a>

```python
def put_dns_settings(
  dns_servers: typing.List[str] = None,
  use_azure_dns: typing.Union[bool, IResolvable] = None
) -> None
```

###### `dns_servers`<sup>Optional</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putDnsSettings.parameter.dnsServers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#dns_servers PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#dns_servers}.

---

###### `use_azure_dns`<sup>Optional</sup> <a name="use_azure_dns" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putDnsSettings.parameter.useAzureDns"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#use_azure_dns PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#use_azure_dns}.

---

##### `put_network_profile` <a name="put_network_profile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putNetworkProfile"></a>

```python
def put_network_profile(
  network_virtual_appliance_id: str,
  public_ip_address_ids: typing.List[str],
  virtual_hub_id: str,
  egress_nat_ip_address_ids: typing.List[str] = None,
  trusted_address_ranges: typing.List[str] = None
) -> None
```

###### `network_virtual_appliance_id`<sup>Required</sup> <a name="network_virtual_appliance_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putNetworkProfile.parameter.networkVirtualApplianceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#network_virtual_appliance_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#network_virtual_appliance_id}.

---

###### `public_ip_address_ids`<sup>Required</sup> <a name="public_ip_address_ids" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putNetworkProfile.parameter.publicIpAddressIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#public_ip_address_ids PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#public_ip_address_ids}.

---

###### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putNetworkProfile.parameter.virtualHubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#virtual_hub_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#virtual_hub_id}.

---

###### `egress_nat_ip_address_ids`<sup>Optional</sup> <a name="egress_nat_ip_address_ids" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putNetworkProfile.parameter.egressNatIpAddressIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#egress_nat_ip_address_ids PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#egress_nat_ip_address_ids}.

---

###### `trusted_address_ranges`<sup>Optional</sup> <a name="trusted_address_ranges" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putNetworkProfile.parameter.trustedAddressRanges"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#trusted_address_ranges PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#trusted_address_ranges}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#create PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#delete PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#read PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#update PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#update}.

---

##### `reset_destination_nat` <a name="reset_destination_nat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.resetDestinationNat"></a>

```python
def reset_destination_nat() -> None
```

##### `reset_dns_settings` <a name="reset_dns_settings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.resetDnsSettings"></a>

```python
def reset_dns_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PaloAltoNextGenerationFirewallVirtualHubLocalRulestack resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PaloAltoNextGenerationFirewallVirtualHubLocalRulestack resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PaloAltoNextGenerationFirewallVirtualHubLocalRulestack to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PaloAltoNextGenerationFirewallVirtualHubLocalRulestack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PaloAltoNextGenerationFirewallVirtualHubLocalRulestack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.destinationNat">destination_nat</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.dnsSettings">dns_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.networkProfile">network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.destinationNatInput">destination_nat_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.dnsSettingsInput">dns_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.networkProfileInput">network_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.rulestackIdInput">rulestack_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.rulestackId">rulestack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_nat`<sup>Required</sup> <a name="destination_nat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.destinationNat"></a>

```python
destination_nat: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList</a>

---

##### `dns_settings`<sup>Required</sup> <a name="dns_settings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.dnsSettings"></a>

```python
dns_settings: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference</a>

---

##### `network_profile`<sup>Required</sup> <a name="network_profile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.networkProfile"></a>

```python
network_profile: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.timeouts"></a>

```python
timeouts: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference</a>

---

##### `destination_nat_input`<sup>Optional</sup> <a name="destination_nat_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.destinationNatInput"></a>

```python
destination_nat_input: typing.Union[IResolvable, typing.List[PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat</a>]]

---

##### `dns_settings_input`<sup>Optional</sup> <a name="dns_settings_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.dnsSettingsInput"></a>

```python
dns_settings_input: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_profile_input`<sup>Optional</sup> <a name="network_profile_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.networkProfileInput"></a>

```python
network_profile_input: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `rulestack_id_input`<sup>Optional</sup> <a name="rulestack_id_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.rulestackIdInput"></a>

```python
rulestack_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `rulestack_id`<sup>Required</sup> <a name="rulestack_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.rulestackId"></a>

```python
rulestack_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestack.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_profile: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile,
  resource_group_name: str,
  rulestack_id: str,
  destination_nat: typing.Union[IResolvable, typing.List[PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat]] = None,
  dns_settings: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#name PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.networkProfile">network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#resource_group_name PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.rulestackId">rulestack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#rulestack_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#rulestack_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.destinationNat">destination_nat</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat</a>]]</code> | destination_nat block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.dnsSettings">dns_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#tags PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#tags}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#name PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#name}.

---

##### `network_profile`<sup>Required</sup> <a name="network_profile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.networkProfile"></a>

```python
network_profile: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#network_profile PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#network_profile}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#resource_group_name PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#resource_group_name}.

---

##### `rulestack_id`<sup>Required</sup> <a name="rulestack_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.rulestackId"></a>

```python
rulestack_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#rulestack_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#rulestack_id}.

---

##### `destination_nat`<sup>Optional</sup> <a name="destination_nat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.destinationNat"></a>

```python
destination_nat: typing.Union[IResolvable, typing.List[PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat</a>]]

destination_nat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#destination_nat PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#destination_nat}

---

##### `dns_settings`<sup>Optional</sup> <a name="dns_settings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.dnsSettings"></a>

```python
dns_settings: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#dns_settings PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#dns_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#tags PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig.property.timeouts"></a>

```python
timeouts: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#timeouts PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#timeouts}

---

### PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat(
  name: str,
  protocol: str,
  backend_config: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig = None,
  frontend_config: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#name PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#protocol PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat.property.backendConfig">backend_config</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig</a></code> | backend_config block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat.property.frontendConfig">frontend_config</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig</a></code> | frontend_config block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#name PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#protocol PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#protocol}.

---

##### `backend_config`<sup>Optional</sup> <a name="backend_config" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat.property.backendConfig"></a>

```python
backend_config: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig</a>

backend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#backend_config PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#backend_config}

---

##### `frontend_config`<sup>Optional</sup> <a name="frontend_config" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat.property.frontendConfig"></a>

```python
frontend_config: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig</a>

frontend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#frontend_config PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#frontend_config}

---

### PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig(
  port: typing.Union[int, float],
  public_ip_address: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#port PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#port}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#public_ip_address PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#public_ip_address}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#port PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#port}.

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#public_ip_address PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#public_ip_address}.

---

### PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig(
  port: typing.Union[int, float],
  public_ip_address_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#port PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#port}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig.property.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#public_ip_address_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#public_ip_address_id}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#port PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#port}.

---

##### `public_ip_address_id`<sup>Required</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig.property.publicIpAddressId"></a>

```python
public_ip_address_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#public_ip_address_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#public_ip_address_id}.

---

### PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings(
  dns_servers: typing.List[str] = None,
  use_azure_dns: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#dns_servers PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings.property.useAzureDns">use_azure_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#use_azure_dns PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#use_azure_dns}. |

---

##### `dns_servers`<sup>Optional</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#dns_servers PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#dns_servers}.

---

##### `use_azure_dns`<sup>Optional</sup> <a name="use_azure_dns" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings.property.useAzureDns"></a>

```python
use_azure_dns: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#use_azure_dns PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#use_azure_dns}.

---

### PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile(
  network_virtual_appliance_id: str,
  public_ip_address_ids: typing.List[str],
  virtual_hub_id: str,
  egress_nat_ip_address_ids: typing.List[str] = None,
  trusted_address_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile.property.networkVirtualApplianceId">network_virtual_appliance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#network_virtual_appliance_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#network_virtual_appliance_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile.property.publicIpAddressIds">public_ip_address_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#public_ip_address_ids PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#public_ip_address_ids}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile.property.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#virtual_hub_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile.property.egressNatIpAddressIds">egress_nat_ip_address_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#egress_nat_ip_address_ids PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#egress_nat_ip_address_ids}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile.property.trustedAddressRanges">trusted_address_ranges</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#trusted_address_ranges PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#trusted_address_ranges}. |

---

##### `network_virtual_appliance_id`<sup>Required</sup> <a name="network_virtual_appliance_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile.property.networkVirtualApplianceId"></a>

```python
network_virtual_appliance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#network_virtual_appliance_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#network_virtual_appliance_id}.

---

##### `public_ip_address_ids`<sup>Required</sup> <a name="public_ip_address_ids" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile.property.publicIpAddressIds"></a>

```python
public_ip_address_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#public_ip_address_ids PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#public_ip_address_ids}.

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile.property.virtualHubId"></a>

```python
virtual_hub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#virtual_hub_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#virtual_hub_id}.

---

##### `egress_nat_ip_address_ids`<sup>Optional</sup> <a name="egress_nat_ip_address_ids" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile.property.egressNatIpAddressIds"></a>

```python
egress_nat_ip_address_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#egress_nat_ip_address_ids PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#egress_nat_ip_address_ids}.

---

##### `trusted_address_ranges`<sup>Optional</sup> <a name="trusted_address_ranges" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile.property.trustedAddressRanges"></a>

```python
trusted_address_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#trusted_address_ranges PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#trusted_address_ranges}.

---

### PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#create PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#create}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#delete PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#delete}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#read PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#read}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#update PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#create PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#delete PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#read PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#update PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.property.publicIpAddressInput">public_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_ip_address_input`<sup>Optional</sup> <a name="public_ip_address_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.property.publicIpAddressInput"></a>

```python
public_ip_address_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference.property.internalValue"></a>

```python
internal_value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig</a>

---


### PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.property.publicIpAddressIdInput">public_ip_address_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.property.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_ip_address_id_input`<sup>Optional</sup> <a name="public_ip_address_id_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.property.publicIpAddressIdInput"></a>

```python
public_ip_address_id_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_ip_address_id`<sup>Required</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.property.publicIpAddressId"></a>

```python
public_ip_address_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference.property.internalValue"></a>

```python
internal_value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig</a>

---


### PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat</a>]]

---


### PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.putBackendConfig">put_backend_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.putFrontendConfig">put_frontend_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.resetBackendConfig">reset_backend_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.resetFrontendConfig">reset_frontend_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backend_config` <a name="put_backend_config" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.putBackendConfig"></a>

```python
def put_backend_config(
  port: typing.Union[int, float],
  public_ip_address: str
) -> None
```

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.putBackendConfig.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#port PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#port}.

---

###### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.putBackendConfig.parameter.publicIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#public_ip_address PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#public_ip_address}.

---

##### `put_frontend_config` <a name="put_frontend_config" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.putFrontendConfig"></a>

```python
def put_frontend_config(
  port: typing.Union[int, float],
  public_ip_address_id: str
) -> None
```

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.putFrontendConfig.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#port PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#port}.

---

###### `public_ip_address_id`<sup>Required</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.putFrontendConfig.parameter.publicIpAddressId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#public_ip_address_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#public_ip_address_id}.

---

##### `reset_backend_config` <a name="reset_backend_config" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.resetBackendConfig"></a>

```python
def reset_backend_config() -> None
```

##### `reset_frontend_config` <a name="reset_frontend_config" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.resetFrontendConfig"></a>

```python
def reset_frontend_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.backendConfig">backend_config</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.frontendConfig">frontend_config</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.backendConfigInput">backend_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.frontendConfigInput">frontend_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_config`<sup>Required</sup> <a name="backend_config" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.backendConfig"></a>

```python
backend_config: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference</a>

---

##### `frontend_config`<sup>Required</sup> <a name="frontend_config" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.frontendConfig"></a>

```python
frontend_config: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference</a>

---

##### `backend_config_input`<sup>Optional</sup> <a name="backend_config_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.backendConfigInput"></a>

```python
backend_config_input: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig</a>

---

##### `frontend_config_input`<sup>Optional</sup> <a name="frontend_config_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.frontendConfigInput"></a>

```python
frontend_config_input: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat</a>]

---


### PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.resetDnsServers">reset_dns_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.resetUseAzureDns">reset_use_azure_dns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_servers` <a name="reset_dns_servers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.resetDnsServers"></a>

```python
def reset_dns_servers() -> None
```

##### `reset_use_azure_dns` <a name="reset_use_azure_dns" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.resetUseAzureDns"></a>

```python
def reset_use_azure_dns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.azureDnsServers">azure_dns_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.dnsServersInput">dns_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.useAzureDnsInput">use_azure_dns_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.useAzureDns">use_azure_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_dns_servers`<sup>Required</sup> <a name="azure_dns_servers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.azureDnsServers"></a>

```python
azure_dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_servers_input`<sup>Optional</sup> <a name="dns_servers_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.dnsServersInput"></a>

```python
dns_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_azure_dns_input`<sup>Optional</sup> <a name="use_azure_dns_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.useAzureDnsInput"></a>

```python
use_azure_dns_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dns_servers`<sup>Required</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_azure_dns`<sup>Required</sup> <a name="use_azure_dns" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.useAzureDns"></a>

```python
use_azure_dns: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings</a>

---


### PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.resetEgressNatIpAddressIds">reset_egress_nat_ip_address_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.resetTrustedAddressRanges">reset_trusted_address_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_egress_nat_ip_address_ids` <a name="reset_egress_nat_ip_address_ids" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.resetEgressNatIpAddressIds"></a>

```python
def reset_egress_nat_ip_address_ids() -> None
```

##### `reset_trusted_address_ranges` <a name="reset_trusted_address_ranges" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.resetTrustedAddressRanges"></a>

```python
def reset_trusted_address_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.egressNatIpAddresses">egress_nat_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.ipOfTrustForUserDefinedRoutes">ip_of_trust_for_user_defined_routes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.publicIpAddresses">public_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.trustedSubnetId">trusted_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.untrustedSubnetId">untrusted_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.egressNatIpAddressIdsInput">egress_nat_ip_address_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.networkVirtualApplianceIdInput">network_virtual_appliance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.publicIpAddressIdsInput">public_ip_address_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.trustedAddressRangesInput">trusted_address_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.virtualHubIdInput">virtual_hub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.egressNatIpAddressIds">egress_nat_ip_address_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.networkVirtualApplianceId">network_virtual_appliance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.publicIpAddressIds">public_ip_address_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.trustedAddressRanges">trusted_address_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `egress_nat_ip_addresses`<sup>Required</sup> <a name="egress_nat_ip_addresses" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.egressNatIpAddresses"></a>

```python
egress_nat_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_of_trust_for_user_defined_routes`<sup>Required</sup> <a name="ip_of_trust_for_user_defined_routes" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.ipOfTrustForUserDefinedRoutes"></a>

```python
ip_of_trust_for_user_defined_routes: str
```

- *Type:* str

---

##### `public_ip_addresses`<sup>Required</sup> <a name="public_ip_addresses" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.publicIpAddresses"></a>

```python
public_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_subnet_id`<sup>Required</sup> <a name="trusted_subnet_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.trustedSubnetId"></a>

```python
trusted_subnet_id: str
```

- *Type:* str

---

##### `untrusted_subnet_id`<sup>Required</sup> <a name="untrusted_subnet_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.untrustedSubnetId"></a>

```python
untrusted_subnet_id: str
```

- *Type:* str

---

##### `egress_nat_ip_address_ids_input`<sup>Optional</sup> <a name="egress_nat_ip_address_ids_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.egressNatIpAddressIdsInput"></a>

```python
egress_nat_ip_address_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_virtual_appliance_id_input`<sup>Optional</sup> <a name="network_virtual_appliance_id_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.networkVirtualApplianceIdInput"></a>

```python
network_virtual_appliance_id_input: str
```

- *Type:* str

---

##### `public_ip_address_ids_input`<sup>Optional</sup> <a name="public_ip_address_ids_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.publicIpAddressIdsInput"></a>

```python
public_ip_address_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_address_ranges_input`<sup>Optional</sup> <a name="trusted_address_ranges_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.trustedAddressRangesInput"></a>

```python
trusted_address_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_hub_id_input`<sup>Optional</sup> <a name="virtual_hub_id_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.virtualHubIdInput"></a>

```python
virtual_hub_id_input: str
```

- *Type:* str

---

##### `egress_nat_ip_address_ids`<sup>Required</sup> <a name="egress_nat_ip_address_ids" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.egressNatIpAddressIds"></a>

```python
egress_nat_ip_address_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_virtual_appliance_id`<sup>Required</sup> <a name="network_virtual_appliance_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.networkVirtualApplianceId"></a>

```python
network_virtual_appliance_id: str
```

- *Type:* str

---

##### `public_ip_address_ids`<sup>Required</sup> <a name="public_ip_address_ids" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.publicIpAddressIds"></a>

```python
public_ip_address_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_address_ranges`<sup>Required</sup> <a name="trusted_address_ranges" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.trustedAddressRanges"></a>

```python
trusted_address_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.virtualHubId"></a>

```python
virtual_hub_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference.property.internalValue"></a>

```python
internal_value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile</a>

---


### PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference <a name="PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_next_generation_firewall_virtual_hub_local_rulestack

paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubLocalRulestack.PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts">PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts</a>]

---



