# `cdnFrontdoorFirewallPolicy` Submodule <a name="`cdnFrontdoorFirewallPolicy` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorFirewallPolicy <a name="CdnFrontdoorFirewallPolicy" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy azurerm_cdn_frontdoor_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mode: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  custom_block_response_body: str = None,
  custom_block_response_status_code: typing.Union[int, float] = None,
  custom_rule: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyCustomRule]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  managed_rule: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRule]] = None,
  redirect_url: str = None,
  request_body_check_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: CdnFrontdoorFirewallPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#mode CdnFrontdoorFirewallPolicy#mode}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#name CdnFrontdoorFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#resource_group_name CdnFrontdoorFirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#sku_name CdnFrontdoorFirewallPolicy#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.customBlockResponseBody">custom_block_response_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#custom_block_response_body CdnFrontdoorFirewallPolicy#custom_block_response_body}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.customBlockResponseStatusCode">custom_block_response_status_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#custom_block_response_status_code CdnFrontdoorFirewallPolicy#custom_block_response_status_code}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.customRule">custom_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>]]</code> | custom_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#enabled CdnFrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#id CdnFrontdoorFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.managedRule">managed_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>]]</code> | managed_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.redirectUrl">redirect_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#redirect_url CdnFrontdoorFirewallPolicy#redirect_url}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.requestBodyCheckEnabled">request_body_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#request_body_check_enabled CdnFrontdoorFirewallPolicy#request_body_check_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#tags CdnFrontdoorFirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#mode CdnFrontdoorFirewallPolicy#mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#name CdnFrontdoorFirewallPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#resource_group_name CdnFrontdoorFirewallPolicy#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#sku_name CdnFrontdoorFirewallPolicy#sku_name}.

---

##### `custom_block_response_body`<sup>Optional</sup> <a name="custom_block_response_body" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.customBlockResponseBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#custom_block_response_body CdnFrontdoorFirewallPolicy#custom_block_response_body}.

---

##### `custom_block_response_status_code`<sup>Optional</sup> <a name="custom_block_response_status_code" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.customBlockResponseStatusCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#custom_block_response_status_code CdnFrontdoorFirewallPolicy#custom_block_response_status_code}.

---

##### `custom_rule`<sup>Optional</sup> <a name="custom_rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.customRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>]]

custom_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#custom_rule CdnFrontdoorFirewallPolicy#custom_rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#enabled CdnFrontdoorFirewallPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#id CdnFrontdoorFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_rule`<sup>Optional</sup> <a name="managed_rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.managedRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>]]

managed_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#managed_rule CdnFrontdoorFirewallPolicy#managed_rule}

---

##### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.redirectUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#redirect_url CdnFrontdoorFirewallPolicy#redirect_url}.

---

##### `request_body_check_enabled`<sup>Optional</sup> <a name="request_body_check_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.requestBodyCheckEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#request_body_check_enabled CdnFrontdoorFirewallPolicy#request_body_check_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#tags CdnFrontdoorFirewallPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#timeouts CdnFrontdoorFirewallPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putCustomRule">put_custom_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putManagedRule">put_managed_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetCustomBlockResponseBody">reset_custom_block_response_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetCustomBlockResponseStatusCode">reset_custom_block_response_status_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetCustomRule">reset_custom_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetManagedRule">reset_managed_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetRedirectUrl">reset_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetRequestBodyCheckEnabled">reset_request_body_check_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_rule` <a name="put_custom_rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putCustomRule"></a>

```python
def put_custom_rule(
  value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyCustomRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putCustomRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>]]

---

##### `put_managed_rule` <a name="put_managed_rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putManagedRule"></a>

```python
def put_managed_rule(
  value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putManagedRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#create CdnFrontdoorFirewallPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#delete CdnFrontdoorFirewallPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#read CdnFrontdoorFirewallPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#update CdnFrontdoorFirewallPolicy#update}.

---

##### `reset_custom_block_response_body` <a name="reset_custom_block_response_body" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetCustomBlockResponseBody"></a>

```python
def reset_custom_block_response_body() -> None
```

##### `reset_custom_block_response_status_code` <a name="reset_custom_block_response_status_code" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetCustomBlockResponseStatusCode"></a>

```python
def reset_custom_block_response_status_code() -> None
```

##### `reset_custom_rule` <a name="reset_custom_rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetCustomRule"></a>

```python
def reset_custom_rule() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed_rule` <a name="reset_managed_rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetManagedRule"></a>

```python
def reset_managed_rule() -> None
```

##### `reset_redirect_url` <a name="reset_redirect_url" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetRedirectUrl"></a>

```python
def reset_redirect_url() -> None
```

##### `reset_request_body_check_enabled` <a name="reset_request_body_check_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetRequestBodyCheckEnabled"></a>

```python
def reset_request_body_check_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CdnFrontdoorFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CdnFrontdoorFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CdnFrontdoorFirewallPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CdnFrontdoorFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customRule">custom_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList">CdnFrontdoorFirewallPolicyCustomRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.frontendEndpointIds">frontend_endpoint_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.managedRule">managed_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList">CdnFrontdoorFirewallPolicyManagedRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference">CdnFrontdoorFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseBodyInput">custom_block_response_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseStatusCodeInput">custom_block_response_status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customRuleInput">custom_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.managedRuleInput">managed_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.redirectUrlInput">redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.requestBodyCheckEnabledInput">request_body_check_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseBody">custom_block_response_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseStatusCode">custom_block_response_status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.requestBodyCheckEnabled">request_body_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_rule`<sup>Required</sup> <a name="custom_rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customRule"></a>

```python
custom_rule: CdnFrontdoorFirewallPolicyCustomRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList">CdnFrontdoorFirewallPolicyCustomRuleList</a>

---

##### `frontend_endpoint_ids`<sup>Required</sup> <a name="frontend_endpoint_ids" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.frontendEndpointIds"></a>

```python
frontend_endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_rule`<sup>Required</sup> <a name="managed_rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.managedRule"></a>

```python
managed_rule: CdnFrontdoorFirewallPolicyManagedRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList">CdnFrontdoorFirewallPolicyManagedRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.timeouts"></a>

```python
timeouts: CdnFrontdoorFirewallPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference">CdnFrontdoorFirewallPolicyTimeoutsOutputReference</a>

---

##### `custom_block_response_body_input`<sup>Optional</sup> <a name="custom_block_response_body_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseBodyInput"></a>

```python
custom_block_response_body_input: str
```

- *Type:* str

---

##### `custom_block_response_status_code_input`<sup>Optional</sup> <a name="custom_block_response_status_code_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseStatusCodeInput"></a>

```python
custom_block_response_status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_rule_input`<sup>Optional</sup> <a name="custom_rule_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customRuleInput"></a>

```python
custom_rule_input: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyCustomRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_rule_input`<sup>Optional</sup> <a name="managed_rule_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.managedRuleInput"></a>

```python
managed_rule_input: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>]]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `redirect_url_input`<sup>Optional</sup> <a name="redirect_url_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.redirectUrlInput"></a>

```python
redirect_url_input: str
```

- *Type:* str

---

##### `request_body_check_enabled_input`<sup>Optional</sup> <a name="request_body_check_enabled_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.requestBodyCheckEnabledInput"></a>

```python
request_body_check_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CdnFrontdoorFirewallPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a>]

---

##### `custom_block_response_body`<sup>Required</sup> <a name="custom_block_response_body" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseBody"></a>

```python
custom_block_response_body: str
```

- *Type:* str

---

##### `custom_block_response_status_code`<sup>Required</sup> <a name="custom_block_response_status_code" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.customBlockResponseStatusCode"></a>

```python
custom_block_response_status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `request_body_check_enabled`<sup>Required</sup> <a name="request_body_check_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.requestBodyCheckEnabled"></a>

```python
request_body_check_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorFirewallPolicyConfig <a name="CdnFrontdoorFirewallPolicyConfig" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mode: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  custom_block_response_body: str = None,
  custom_block_response_status_code: typing.Union[int, float] = None,
  custom_rule: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyCustomRule]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  managed_rule: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRule]] = None,
  redirect_url: str = None,
  request_body_check_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: CdnFrontdoorFirewallPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#mode CdnFrontdoorFirewallPolicy#mode}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#name CdnFrontdoorFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#resource_group_name CdnFrontdoorFirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#sku_name CdnFrontdoorFirewallPolicy#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.customBlockResponseBody">custom_block_response_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#custom_block_response_body CdnFrontdoorFirewallPolicy#custom_block_response_body}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.customBlockResponseStatusCode">custom_block_response_status_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#custom_block_response_status_code CdnFrontdoorFirewallPolicy#custom_block_response_status_code}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.customRule">custom_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>]]</code> | custom_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#enabled CdnFrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#id CdnFrontdoorFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.managedRule">managed_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>]]</code> | managed_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.redirectUrl">redirect_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#redirect_url CdnFrontdoorFirewallPolicy#redirect_url}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.requestBodyCheckEnabled">request_body_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#request_body_check_enabled CdnFrontdoorFirewallPolicy#request_body_check_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#tags CdnFrontdoorFirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#mode CdnFrontdoorFirewallPolicy#mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#name CdnFrontdoorFirewallPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#resource_group_name CdnFrontdoorFirewallPolicy#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#sku_name CdnFrontdoorFirewallPolicy#sku_name}.

---

##### `custom_block_response_body`<sup>Optional</sup> <a name="custom_block_response_body" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.customBlockResponseBody"></a>

```python
custom_block_response_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#custom_block_response_body CdnFrontdoorFirewallPolicy#custom_block_response_body}.

---

##### `custom_block_response_status_code`<sup>Optional</sup> <a name="custom_block_response_status_code" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.customBlockResponseStatusCode"></a>

```python
custom_block_response_status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#custom_block_response_status_code CdnFrontdoorFirewallPolicy#custom_block_response_status_code}.

---

##### `custom_rule`<sup>Optional</sup> <a name="custom_rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.customRule"></a>

```python
custom_rule: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyCustomRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>]]

custom_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#custom_rule CdnFrontdoorFirewallPolicy#custom_rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#enabled CdnFrontdoorFirewallPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#id CdnFrontdoorFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_rule`<sup>Optional</sup> <a name="managed_rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.managedRule"></a>

```python
managed_rule: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>]]

managed_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#managed_rule CdnFrontdoorFirewallPolicy#managed_rule}

---

##### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#redirect_url CdnFrontdoorFirewallPolicy#redirect_url}.

---

##### `request_body_check_enabled`<sup>Optional</sup> <a name="request_body_check_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.requestBodyCheckEnabled"></a>

```python
request_body_check_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#request_body_check_enabled CdnFrontdoorFirewallPolicy#request_body_check_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#tags CdnFrontdoorFirewallPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyConfig.property.timeouts"></a>

```python
timeouts: CdnFrontdoorFirewallPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#timeouts CdnFrontdoorFirewallPolicy#timeouts}

---

### CdnFrontdoorFirewallPolicyCustomRule <a name="CdnFrontdoorFirewallPolicyCustomRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule(
  action: str,
  name: str,
  type: str,
  enabled: typing.Union[bool, IResolvable] = None,
  match_condition: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyCustomRuleMatchCondition]] = None,
  priority: typing.Union[int, float] = None,
  rate_limit_duration_in_minutes: typing.Union[int, float] = None,
  rate_limit_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#action CdnFrontdoorFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#name CdnFrontdoorFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#type CdnFrontdoorFirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#enabled CdnFrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.matchCondition">match_condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>]]</code> | match_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#priority CdnFrontdoorFirewallPolicy#priority}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.rateLimitDurationInMinutes">rate_limit_duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#rate_limit_duration_in_minutes CdnFrontdoorFirewallPolicy#rate_limit_duration_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.rateLimitThreshold">rate_limit_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#rate_limit_threshold CdnFrontdoorFirewallPolicy#rate_limit_threshold}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#action CdnFrontdoorFirewallPolicy#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#name CdnFrontdoorFirewallPolicy#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#type CdnFrontdoorFirewallPolicy#type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#enabled CdnFrontdoorFirewallPolicy#enabled}.

---

##### `match_condition`<sup>Optional</sup> <a name="match_condition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.matchCondition"></a>

```python
match_condition: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyCustomRuleMatchCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>]]

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#match_condition CdnFrontdoorFirewallPolicy#match_condition}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#priority CdnFrontdoorFirewallPolicy#priority}.

---

##### `rate_limit_duration_in_minutes`<sup>Optional</sup> <a name="rate_limit_duration_in_minutes" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.rateLimitDurationInMinutes"></a>

```python
rate_limit_duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#rate_limit_duration_in_minutes CdnFrontdoorFirewallPolicy#rate_limit_duration_in_minutes}.

---

##### `rate_limit_threshold`<sup>Optional</sup> <a name="rate_limit_threshold" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule.property.rateLimitThreshold"></a>

```python
rate_limit_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#rate_limit_threshold CdnFrontdoorFirewallPolicy#rate_limit_threshold}.

---

### CdnFrontdoorFirewallPolicyCustomRuleMatchCondition <a name="CdnFrontdoorFirewallPolicyCustomRuleMatchCondition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition(
  match_values: typing.List[str],
  match_variable: str,
  operator: str,
  negation_condition: typing.Union[bool, IResolvable] = None,
  selector: str = None,
  transforms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchValues">match_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#match_values CdnFrontdoorFirewallPolicy#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchVariable">match_variable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.negationCondition">negation_condition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#negation_condition CdnFrontdoorFirewallPolicy#negation_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.selector">selector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.transforms">transforms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#transforms CdnFrontdoorFirewallPolicy#transforms}. |

---

##### `match_values`<sup>Required</sup> <a name="match_values" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchValues"></a>

```python
match_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#match_values CdnFrontdoorFirewallPolicy#match_values}.

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}.

---

##### `negation_condition`<sup>Optional</sup> <a name="negation_condition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.negationCondition"></a>

```python
negation_condition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#negation_condition CdnFrontdoorFirewallPolicy#negation_condition}.

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.selector"></a>

```python
selector: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition.property.transforms"></a>

```python
transforms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#transforms CdnFrontdoorFirewallPolicy#transforms}.

---

### CdnFrontdoorFirewallPolicyManagedRule <a name="CdnFrontdoorFirewallPolicyManagedRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule(
  action: str,
  type: str,
  version: str,
  exclusion: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleExclusion]] = None,
  override: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverride]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#action CdnFrontdoorFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#type CdnFrontdoorFirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#version CdnFrontdoorFirewallPolicy#version}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.exclusion">exclusion</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>]]</code> | exclusion block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.override">override</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>]]</code> | override block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#action CdnFrontdoorFirewallPolicy#action}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#type CdnFrontdoorFirewallPolicy#type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#version CdnFrontdoorFirewallPolicy#version}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.exclusion"></a>

```python
exclusion: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>]]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#exclusion CdnFrontdoorFirewallPolicy#exclusion}

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule.property.override"></a>

```python
override: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>]]

override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#override CdnFrontdoorFirewallPolicy#override}

---

### CdnFrontdoorFirewallPolicyManagedRuleExclusion <a name="CdnFrontdoorFirewallPolicyManagedRuleExclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion(
  match_variable: str,
  operator: str,
  selector: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion.property.matchVariable">match_variable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion.property.selector">selector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}. |

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion.property.selector"></a>

```python
selector: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}.

---

### CdnFrontdoorFirewallPolicyManagedRuleOverride <a name="CdnFrontdoorFirewallPolicyManagedRuleOverride" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride(
  rule_group_name: str,
  exclusion: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion]] = None,
  rule: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideRule]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride.property.ruleGroupName">rule_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#rule_group_name CdnFrontdoorFirewallPolicy#rule_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride.property.exclusion">exclusion</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]]</code> | exclusion block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>]]</code> | rule block. |

---

##### `rule_group_name`<sup>Required</sup> <a name="rule_group_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride.property.ruleGroupName"></a>

```python
rule_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#rule_group_name CdnFrontdoorFirewallPolicy#rule_group_name}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride.property.exclusion"></a>

```python
exclusion: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#exclusion CdnFrontdoorFirewallPolicy#exclusion}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#rule CdnFrontdoorFirewallPolicy#rule}

---

### CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion(
  match_variable: str,
  operator: str,
  selector: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.matchVariable">match_variable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.selector">selector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}. |

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.selector"></a>

```python
selector: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}.

---

### CdnFrontdoorFirewallPolicyManagedRuleOverrideRule <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideRule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule(
  action: str,
  rule_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  exclusion: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#action CdnFrontdoorFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.ruleId">rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#rule_id CdnFrontdoorFirewallPolicy#rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#enabled CdnFrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.exclusion">exclusion</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]]</code> | exclusion block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#action CdnFrontdoorFirewallPolicy#action}.

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#rule_id CdnFrontdoorFirewallPolicy#rule_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#enabled CdnFrontdoorFirewallPolicy#enabled}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule.property.exclusion"></a>

```python
exclusion: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#exclusion CdnFrontdoorFirewallPolicy#exclusion}

---

### CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion(
  match_variable: str,
  operator: str,
  selector: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.matchVariable">match_variable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.selector">selector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}. |

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#match_variable CdnFrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#operator CdnFrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.selector"></a>

```python
selector: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#selector CdnFrontdoorFirewallPolicy#selector}.

---

### CdnFrontdoorFirewallPolicyTimeouts <a name="CdnFrontdoorFirewallPolicyTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#create CdnFrontdoorFirewallPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#delete CdnFrontdoorFirewallPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#read CdnFrontdoorFirewallPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#update CdnFrontdoorFirewallPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#create CdnFrontdoorFirewallPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#delete CdnFrontdoorFirewallPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#read CdnFrontdoorFirewallPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cdn_frontdoor_firewall_policy#update CdnFrontdoorFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorFirewallPolicyCustomRuleList <a name="CdnFrontdoorFirewallPolicyCustomRuleList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CdnFrontdoorFirewallPolicyCustomRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyCustomRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>]]

---


### CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList <a name="CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyCustomRuleMatchCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>]]

---


### CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference <a name="CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetNegationCondition">reset_negation_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetSelector">reset_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetTransforms">reset_transforms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_negation_condition` <a name="reset_negation_condition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetNegationCondition"></a>

```python
def reset_negation_condition() -> None
```

##### `reset_selector` <a name="reset_selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetSelector"></a>

```python
def reset_selector() -> None
```

##### `reset_transforms` <a name="reset_transforms" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetTransforms"></a>

```python
def reset_transforms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValuesInput">match_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariableInput">match_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationConditionInput">negation_condition_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transformsInput">transforms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValues">match_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariable">match_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationCondition">negation_condition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transforms">transforms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_values_input`<sup>Optional</sup> <a name="match_values_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValuesInput"></a>

```python
match_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_variable_input`<sup>Optional</sup> <a name="match_variable_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariableInput"></a>

```python
match_variable_input: str
```

- *Type:* str

---

##### `negation_condition_input`<sup>Optional</sup> <a name="negation_condition_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationConditionInput"></a>

```python
negation_condition_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `transforms_input`<sup>Optional</sup> <a name="transforms_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transformsInput"></a>

```python
transforms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_values`<sup>Required</sup> <a name="match_values" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValues"></a>

```python
match_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

---

##### `negation_condition`<sup>Required</sup> <a name="negation_condition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationCondition"></a>

```python
negation_condition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transforms"></a>

```python
transforms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CdnFrontdoorFirewallPolicyCustomRuleMatchCondition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>]

---


### CdnFrontdoorFirewallPolicyCustomRuleOutputReference <a name="CdnFrontdoorFirewallPolicyCustomRuleOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition">put_match_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetMatchCondition">reset_match_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitDurationInMinutes">reset_rate_limit_duration_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitThreshold">reset_rate_limit_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_condition` <a name="put_match_condition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition"></a>

```python
def put_match_condition(
  value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyCustomRuleMatchCondition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_match_condition` <a name="reset_match_condition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetMatchCondition"></a>

```python
def reset_match_condition() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_rate_limit_duration_in_minutes` <a name="reset_rate_limit_duration_in_minutes" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitDurationInMinutes"></a>

```python
def reset_rate_limit_duration_in_minutes() -> None
```

##### `reset_rate_limit_threshold` <a name="reset_rate_limit_threshold" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitThreshold"></a>

```python
def reset_rate_limit_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.matchCondition">match_condition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList">CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.matchConditionInput">match_condition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutesInput">rate_limit_duration_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThresholdInput">rate_limit_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutes">rate_limit_duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThreshold">rate_limit_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_condition`<sup>Required</sup> <a name="match_condition" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.matchCondition"></a>

```python
match_condition: CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList">CdnFrontdoorFirewallPolicyCustomRuleMatchConditionList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `match_condition_input`<sup>Optional</sup> <a name="match_condition_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.matchConditionInput"></a>

```python
match_condition_input: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyCustomRuleMatchCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleMatchCondition">CdnFrontdoorFirewallPolicyCustomRuleMatchCondition</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit_duration_in_minutes_input`<sup>Optional</sup> <a name="rate_limit_duration_in_minutes_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutesInput"></a>

```python
rate_limit_duration_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit_threshold_input`<sup>Optional</sup> <a name="rate_limit_threshold_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThresholdInput"></a>

```python
rate_limit_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit_duration_in_minutes`<sup>Required</sup> <a name="rate_limit_duration_in_minutes" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutes"></a>

```python
rate_limit_duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit_threshold`<sup>Required</sup> <a name="rate_limit_threshold" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThreshold"></a>

```python
rate_limit_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CdnFrontdoorFirewallPolicyCustomRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyCustomRule">CdnFrontdoorFirewallPolicyCustomRule</a>]

---


### CdnFrontdoorFirewallPolicyManagedRuleExclusionList <a name="CdnFrontdoorFirewallPolicyManagedRuleExclusionList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>]]

---


### CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference <a name="CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariableInput">match_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariable">match_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_variable_input`<sup>Optional</sup> <a name="match_variable_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariableInput"></a>

```python
match_variable_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CdnFrontdoorFirewallPolicyManagedRuleExclusion]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>]

---


### CdnFrontdoorFirewallPolicyManagedRuleList <a name="CdnFrontdoorFirewallPolicyManagedRuleList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CdnFrontdoorFirewallPolicyManagedRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>]]

---


### CdnFrontdoorFirewallPolicyManagedRuleOutputReference <a name="CdnFrontdoorFirewallPolicyManagedRuleOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion">put_exclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.putOverride">put_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.resetExclusion">reset_exclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.resetOverride">reset_override</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclusion` <a name="put_exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion"></a>

```python
def put_exclusion(
  value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleExclusion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>]]

---

##### `put_override` <a name="put_override" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.putOverride"></a>

```python
def put_override(
  value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverride]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.putOverride.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>]]

---

##### `reset_exclusion` <a name="reset_exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.resetExclusion"></a>

```python
def reset_exclusion() -> None
```

##### `reset_override` <a name="reset_override" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.resetOverride"></a>

```python
def reset_override() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList">CdnFrontdoorFirewallPolicyManagedRuleExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.override">override</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList">CdnFrontdoorFirewallPolicyManagedRuleOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusionInput">exclusion_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.overrideInput">override_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusion"></a>

```python
exclusion: CdnFrontdoorFirewallPolicyManagedRuleExclusionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusionList">CdnFrontdoorFirewallPolicyManagedRuleExclusionList</a>

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.override"></a>

```python
override: CdnFrontdoorFirewallPolicyManagedRuleOverrideList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList">CdnFrontdoorFirewallPolicyManagedRuleOverrideList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `exclusion_input`<sup>Optional</sup> <a name="exclusion_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusionInput"></a>

```python
exclusion_input: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleExclusion</a>]]

---

##### `override_input`<sup>Optional</sup> <a name="override_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.overrideInput"></a>

```python
override_input: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CdnFrontdoorFirewallPolicyManagedRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRule">CdnFrontdoorFirewallPolicyManagedRule</a>]

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]]

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariableInput">match_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariable">match_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_variable_input`<sup>Optional</sup> <a name="match_variable_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariableInput"></a>

```python
match_variable_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideList <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>]]

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion">put_exclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetExclusion">reset_exclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetRule">reset_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclusion` <a name="put_exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion"></a>

```python
def put_exclusion(
  value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]]

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>]]

---

##### `reset_exclusion` <a name="reset_exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetExclusion"></a>

```python
def reset_exclusion() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusionInput">exclusion_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupNameInput">rule_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupName">rule_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusion"></a>

```python
exclusion: CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusionList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.rule"></a>

```python
rule: CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList</a>

---

##### `exclusion_input`<sup>Optional</sup> <a name="exclusion_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusionInput"></a>

```python
exclusion_input: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]]

---

##### `rule_group_name_input`<sup>Optional</sup> <a name="rule_group_name_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupNameInput"></a>

```python
rule_group_name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>]]

---

##### `rule_group_name`<sup>Required</sup> <a name="rule_group_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupName"></a>

```python
rule_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CdnFrontdoorFirewallPolicyManagedRuleOverride]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverride">CdnFrontdoorFirewallPolicyManagedRuleOverride</a>]

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]]

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariableInput">match_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariable">match_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_variable_input`<sup>Optional</sup> <a name="match_variable_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariableInput"></a>

```python
match_variable_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>]]

---


### CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference <a name="CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion">put_exclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetExclusion">reset_exclusion</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclusion` <a name="put_exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion"></a>

```python
def put_exclusion(
  value: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_exclusion` <a name="reset_exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetExclusion"></a>

```python
def reset_exclusion() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusionInput">exclusion_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusion"></a>

```python
exclusion: CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclusion_input`<sup>Optional</sup> <a name="exclusion_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusionInput"></a>

```python
exclusion_input: typing.Union[IResolvable, typing.List[CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]]

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CdnFrontdoorFirewallPolicyManagedRuleOverrideRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyManagedRuleOverrideRule">CdnFrontdoorFirewallPolicyManagedRuleOverrideRule</a>]

---


### CdnFrontdoorFirewallPolicyTimeoutsOutputReference <a name="CdnFrontdoorFirewallPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_firewall_policy

cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CdnFrontdoorFirewallPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorFirewallPolicy.CdnFrontdoorFirewallPolicyTimeouts">CdnFrontdoorFirewallPolicyTimeouts</a>]

---



