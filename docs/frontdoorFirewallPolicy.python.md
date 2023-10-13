# `azurerm_frontdoor_firewall_policy`

Refer to the Terraform Registory for docs: [`azurerm_frontdoor_firewall_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy).

# `frontdoorFirewallPolicy` Submodule <a name="`frontdoorFirewallPolicy` Submodule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrontdoorFirewallPolicy <a name="FrontdoorFirewallPolicy" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy azurerm_frontdoor_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicy(
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
  resource_group_name: str,
  custom_block_response_body: str = None,
  custom_block_response_status_code: typing.Union[int, float] = None,
  custom_rule: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyCustomRule]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  managed_rule: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRule]] = None,
  mode: str = None,
  redirect_url: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: FrontdoorFirewallPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#resource_group_name FrontdoorFirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.customBlockResponseBody">custom_block_response_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#custom_block_response_body FrontdoorFirewallPolicy#custom_block_response_body}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.customBlockResponseStatusCode">custom_block_response_status_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#custom_block_response_status_code FrontdoorFirewallPolicy#custom_block_response_status_code}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.customRule">custom_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>]]</code> | custom_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#id FrontdoorFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.managedRule">managed_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>]]</code> | managed_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#mode FrontdoorFirewallPolicy#mode}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.redirectUrl">redirect_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#redirect_url FrontdoorFirewallPolicy#redirect_url}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#tags FrontdoorFirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#resource_group_name FrontdoorFirewallPolicy#resource_group_name}.

---

##### `custom_block_response_body`<sup>Optional</sup> <a name="custom_block_response_body" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.customBlockResponseBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#custom_block_response_body FrontdoorFirewallPolicy#custom_block_response_body}.

---

##### `custom_block_response_status_code`<sup>Optional</sup> <a name="custom_block_response_status_code" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.customBlockResponseStatusCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#custom_block_response_status_code FrontdoorFirewallPolicy#custom_block_response_status_code}.

---

##### `custom_rule`<sup>Optional</sup> <a name="custom_rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.customRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>]]

custom_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#custom_rule FrontdoorFirewallPolicy#custom_rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#id FrontdoorFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_rule`<sup>Optional</sup> <a name="managed_rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.managedRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>]]

managed_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#managed_rule FrontdoorFirewallPolicy#managed_rule}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#mode FrontdoorFirewallPolicy#mode}.

---

##### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.redirectUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#redirect_url FrontdoorFirewallPolicy#redirect_url}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#tags FrontdoorFirewallPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#timeouts FrontdoorFirewallPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putCustomRule">put_custom_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putManagedRule">put_managed_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomBlockResponseBody">reset_custom_block_response_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomBlockResponseStatusCode">reset_custom_block_response_status_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomRule">reset_custom_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetManagedRule">reset_managed_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetRedirectUrl">reset_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_custom_rule` <a name="put_custom_rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putCustomRule"></a>

```python
def put_custom_rule(
  value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyCustomRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putCustomRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>]]

---

##### `put_managed_rule` <a name="put_managed_rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putManagedRule"></a>

```python
def put_managed_rule(
  value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putManagedRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#create FrontdoorFirewallPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#delete FrontdoorFirewallPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#read FrontdoorFirewallPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#update FrontdoorFirewallPolicy#update}.

---

##### `reset_custom_block_response_body` <a name="reset_custom_block_response_body" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomBlockResponseBody"></a>

```python
def reset_custom_block_response_body() -> None
```

##### `reset_custom_block_response_status_code` <a name="reset_custom_block_response_status_code" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomBlockResponseStatusCode"></a>

```python
def reset_custom_block_response_status_code() -> None
```

##### `reset_custom_rule` <a name="reset_custom_rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomRule"></a>

```python
def reset_custom_rule() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed_rule` <a name="reset_managed_rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetManagedRule"></a>

```python
def reset_managed_rule() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_redirect_url` <a name="reset_redirect_url" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetRedirectUrl"></a>

```python
def reset_redirect_url() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customRule">custom_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList">FrontdoorFirewallPolicyCustomRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.frontendEndpointIds">frontend_endpoint_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.managedRule">managed_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList">FrontdoorFirewallPolicyManagedRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference">FrontdoorFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseBodyInput">custom_block_response_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseStatusCodeInput">custom_block_response_status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customRuleInput">custom_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.managedRuleInput">managed_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.redirectUrlInput">redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseBody">custom_block_response_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseStatusCode">custom_block_response_status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_rule`<sup>Required</sup> <a name="custom_rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customRule"></a>

```python
custom_rule: FrontdoorFirewallPolicyCustomRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList">FrontdoorFirewallPolicyCustomRuleList</a>

---

##### `frontend_endpoint_ids`<sup>Required</sup> <a name="frontend_endpoint_ids" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.frontendEndpointIds"></a>

```python
frontend_endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_rule`<sup>Required</sup> <a name="managed_rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.managedRule"></a>

```python
managed_rule: FrontdoorFirewallPolicyManagedRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList">FrontdoorFirewallPolicyManagedRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.timeouts"></a>

```python
timeouts: FrontdoorFirewallPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference">FrontdoorFirewallPolicyTimeoutsOutputReference</a>

---

##### `custom_block_response_body_input`<sup>Optional</sup> <a name="custom_block_response_body_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseBodyInput"></a>

```python
custom_block_response_body_input: str
```

- *Type:* str

---

##### `custom_block_response_status_code_input`<sup>Optional</sup> <a name="custom_block_response_status_code_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseStatusCodeInput"></a>

```python
custom_block_response_status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_rule_input`<sup>Optional</sup> <a name="custom_rule_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customRuleInput"></a>

```python
custom_rule_input: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyCustomRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_rule_input`<sup>Optional</sup> <a name="managed_rule_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.managedRuleInput"></a>

```python
managed_rule_input: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>]]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `redirect_url_input`<sup>Optional</sup> <a name="redirect_url_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.redirectUrlInput"></a>

```python
redirect_url_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FrontdoorFirewallPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>]

---

##### `custom_block_response_body`<sup>Required</sup> <a name="custom_block_response_body" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseBody"></a>

```python
custom_block_response_body: str
```

- *Type:* str

---

##### `custom_block_response_status_code`<sup>Required</sup> <a name="custom_block_response_status_code" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseStatusCode"></a>

```python
custom_block_response_status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorFirewallPolicyConfig <a name="FrontdoorFirewallPolicyConfig" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  custom_block_response_body: str = None,
  custom_block_response_status_code: typing.Union[int, float] = None,
  custom_rule: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyCustomRule]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  managed_rule: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRule]] = None,
  mode: str = None,
  redirect_url: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: FrontdoorFirewallPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#resource_group_name FrontdoorFirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customBlockResponseBody">custom_block_response_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#custom_block_response_body FrontdoorFirewallPolicy#custom_block_response_body}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customBlockResponseStatusCode">custom_block_response_status_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#custom_block_response_status_code FrontdoorFirewallPolicy#custom_block_response_status_code}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customRule">custom_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>]]</code> | custom_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#id FrontdoorFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.managedRule">managed_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>]]</code> | managed_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#mode FrontdoorFirewallPolicy#mode}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.redirectUrl">redirect_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#redirect_url FrontdoorFirewallPolicy#redirect_url}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#tags FrontdoorFirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#resource_group_name FrontdoorFirewallPolicy#resource_group_name}.

---

##### `custom_block_response_body`<sup>Optional</sup> <a name="custom_block_response_body" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customBlockResponseBody"></a>

```python
custom_block_response_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#custom_block_response_body FrontdoorFirewallPolicy#custom_block_response_body}.

---

##### `custom_block_response_status_code`<sup>Optional</sup> <a name="custom_block_response_status_code" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customBlockResponseStatusCode"></a>

```python
custom_block_response_status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#custom_block_response_status_code FrontdoorFirewallPolicy#custom_block_response_status_code}.

---

##### `custom_rule`<sup>Optional</sup> <a name="custom_rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customRule"></a>

```python
custom_rule: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyCustomRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>]]

custom_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#custom_rule FrontdoorFirewallPolicy#custom_rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#id FrontdoorFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_rule`<sup>Optional</sup> <a name="managed_rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.managedRule"></a>

```python
managed_rule: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>]]

managed_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#managed_rule FrontdoorFirewallPolicy#managed_rule}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#mode FrontdoorFirewallPolicy#mode}.

---

##### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#redirect_url FrontdoorFirewallPolicy#redirect_url}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#tags FrontdoorFirewallPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.timeouts"></a>

```python
timeouts: FrontdoorFirewallPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#timeouts FrontdoorFirewallPolicy#timeouts}

---

### FrontdoorFirewallPolicyCustomRule <a name="FrontdoorFirewallPolicyCustomRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule(
  action: str,
  name: str,
  type: str,
  enabled: typing.Union[bool, IResolvable] = None,
  match_condition: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyCustomRuleMatchCondition]] = None,
  priority: typing.Union[int, float] = None,
  rate_limit_duration_in_minutes: typing.Union[int, float] = None,
  rate_limit_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#action FrontdoorFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#type FrontdoorFirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.matchCondition">match_condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>]]</code> | match_condition block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#priority FrontdoorFirewallPolicy#priority}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.rateLimitDurationInMinutes">rate_limit_duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#rate_limit_duration_in_minutes FrontdoorFirewallPolicy#rate_limit_duration_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.rateLimitThreshold">rate_limit_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#rate_limit_threshold FrontdoorFirewallPolicy#rate_limit_threshold}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#action FrontdoorFirewallPolicy#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#type FrontdoorFirewallPolicy#type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}.

---

##### `match_condition`<sup>Optional</sup> <a name="match_condition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.matchCondition"></a>

```python
match_condition: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyCustomRuleMatchCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>]]

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#match_condition FrontdoorFirewallPolicy#match_condition}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#priority FrontdoorFirewallPolicy#priority}.

---

##### `rate_limit_duration_in_minutes`<sup>Optional</sup> <a name="rate_limit_duration_in_minutes" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.rateLimitDurationInMinutes"></a>

```python
rate_limit_duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#rate_limit_duration_in_minutes FrontdoorFirewallPolicy#rate_limit_duration_in_minutes}.

---

##### `rate_limit_threshold`<sup>Optional</sup> <a name="rate_limit_threshold" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.rateLimitThreshold"></a>

```python
rate_limit_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#rate_limit_threshold FrontdoorFirewallPolicy#rate_limit_threshold}.

---

### FrontdoorFirewallPolicyCustomRuleMatchCondition <a name="FrontdoorFirewallPolicyCustomRuleMatchCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition(
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
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchValues">match_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#match_values FrontdoorFirewallPolicy#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchVariable">match_variable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.negationCondition">negation_condition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#negation_condition FrontdoorFirewallPolicy#negation_condition}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.selector">selector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.transforms">transforms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#transforms FrontdoorFirewallPolicy#transforms}. |

---

##### `match_values`<sup>Required</sup> <a name="match_values" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchValues"></a>

```python
match_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#match_values FrontdoorFirewallPolicy#match_values}.

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}.

---

##### `negation_condition`<sup>Optional</sup> <a name="negation_condition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.negationCondition"></a>

```python
negation_condition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#negation_condition FrontdoorFirewallPolicy#negation_condition}.

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.selector"></a>

```python
selector: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.transforms"></a>

```python
transforms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#transforms FrontdoorFirewallPolicy#transforms}.

---

### FrontdoorFirewallPolicyManagedRule <a name="FrontdoorFirewallPolicyManagedRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule(
  type: str,
  version: str,
  exclusion: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleExclusion]] = None,
  override: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverride]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#type FrontdoorFirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#version FrontdoorFirewallPolicy#version}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.exclusion">exclusion</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>]]</code> | exclusion block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.override">override</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>]]</code> | override block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#type FrontdoorFirewallPolicy#type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#version FrontdoorFirewallPolicy#version}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.exclusion"></a>

```python
exclusion: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>]]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#exclusion FrontdoorFirewallPolicy#exclusion}

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.override"></a>

```python
override: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>]]

override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#override FrontdoorFirewallPolicy#override}

---

### FrontdoorFirewallPolicyManagedRuleExclusion <a name="FrontdoorFirewallPolicyManagedRuleExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion(
  match_variable: str,
  operator: str,
  selector: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.matchVariable">match_variable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.selector">selector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}. |

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.selector"></a>

```python
selector: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}.

---

### FrontdoorFirewallPolicyManagedRuleOverride <a name="FrontdoorFirewallPolicyManagedRuleOverride" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride(
  rule_group_name: str,
  exclusion: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideExclusion]] = None,
  rule: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideRule]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.ruleGroupName">rule_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#rule_group_name FrontdoorFirewallPolicy#rule_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.exclusion">exclusion</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]]</code> | exclusion block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>]]</code> | rule block. |

---

##### `rule_group_name`<sup>Required</sup> <a name="rule_group_name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.ruleGroupName"></a>

```python
rule_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#rule_group_name FrontdoorFirewallPolicy#rule_group_name}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.exclusion"></a>

```python
exclusion: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#exclusion FrontdoorFirewallPolicy#exclusion}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#rule FrontdoorFirewallPolicy#rule}

---

### FrontdoorFirewallPolicyManagedRuleOverrideExclusion <a name="FrontdoorFirewallPolicyManagedRuleOverrideExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion(
  match_variable: str,
  operator: str,
  selector: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.matchVariable">match_variable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.selector">selector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}. |

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.selector"></a>

```python
selector: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}.

---

### FrontdoorFirewallPolicyManagedRuleOverrideRule <a name="FrontdoorFirewallPolicyManagedRuleOverrideRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule(
  action: str,
  rule_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  exclusion: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#action FrontdoorFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.ruleId">rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#rule_id FrontdoorFirewallPolicy#rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.exclusion">exclusion</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]]</code> | exclusion block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#action FrontdoorFirewallPolicy#action}.

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#rule_id FrontdoorFirewallPolicy#rule_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.exclusion"></a>

```python
exclusion: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#exclusion FrontdoorFirewallPolicy#exclusion}

---

### FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion(
  match_variable: str,
  operator: str,
  selector: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.matchVariable">match_variable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.selector">selector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}. |

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.selector"></a>

```python
selector: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}.

---

### FrontdoorFirewallPolicyTimeouts <a name="FrontdoorFirewallPolicyTimeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#create FrontdoorFirewallPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#delete FrontdoorFirewallPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#read FrontdoorFirewallPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#update FrontdoorFirewallPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#create FrontdoorFirewallPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#delete FrontdoorFirewallPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#read FrontdoorFirewallPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/frontdoor_firewall_policy#update FrontdoorFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorFirewallPolicyCustomRuleList <a name="FrontdoorFirewallPolicyCustomRuleList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorFirewallPolicyCustomRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyCustomRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>]]

---


### FrontdoorFirewallPolicyCustomRuleMatchConditionList <a name="FrontdoorFirewallPolicyCustomRuleMatchConditionList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyCustomRuleMatchCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>]]

---


### FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference <a name="FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetNegationCondition">reset_negation_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetSelector">reset_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetTransforms">reset_transforms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_negation_condition` <a name="reset_negation_condition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetNegationCondition"></a>

```python
def reset_negation_condition() -> None
```

##### `reset_selector` <a name="reset_selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetSelector"></a>

```python
def reset_selector() -> None
```

##### `reset_transforms` <a name="reset_transforms" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetTransforms"></a>

```python
def reset_transforms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValuesInput">match_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariableInput">match_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationConditionInput">negation_condition_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transformsInput">transforms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValues">match_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariable">match_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationCondition">negation_condition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transforms">transforms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_values_input`<sup>Optional</sup> <a name="match_values_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValuesInput"></a>

```python
match_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_variable_input`<sup>Optional</sup> <a name="match_variable_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariableInput"></a>

```python
match_variable_input: str
```

- *Type:* str

---

##### `negation_condition_input`<sup>Optional</sup> <a name="negation_condition_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationConditionInput"></a>

```python
negation_condition_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `transforms_input`<sup>Optional</sup> <a name="transforms_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transformsInput"></a>

```python
transforms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_values`<sup>Required</sup> <a name="match_values" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValues"></a>

```python
match_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

---

##### `negation_condition`<sup>Required</sup> <a name="negation_condition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationCondition"></a>

```python
negation_condition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transforms"></a>

```python
transforms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorFirewallPolicyCustomRuleMatchCondition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>]

---


### FrontdoorFirewallPolicyCustomRuleOutputReference <a name="FrontdoorFirewallPolicyCustomRuleOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition">put_match_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetMatchCondition">reset_match_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitDurationInMinutes">reset_rate_limit_duration_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitThreshold">reset_rate_limit_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_condition` <a name="put_match_condition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition"></a>

```python
def put_match_condition(
  value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyCustomRuleMatchCondition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_match_condition` <a name="reset_match_condition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetMatchCondition"></a>

```python
def reset_match_condition() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_rate_limit_duration_in_minutes` <a name="reset_rate_limit_duration_in_minutes" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitDurationInMinutes"></a>

```python
def reset_rate_limit_duration_in_minutes() -> None
```

##### `reset_rate_limit_threshold` <a name="reset_rate_limit_threshold" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitThreshold"></a>

```python
def reset_rate_limit_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.matchCondition">match_condition</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList">FrontdoorFirewallPolicyCustomRuleMatchConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.matchConditionInput">match_condition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutesInput">rate_limit_duration_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThresholdInput">rate_limit_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutes">rate_limit_duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThreshold">rate_limit_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_condition`<sup>Required</sup> <a name="match_condition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.matchCondition"></a>

```python
match_condition: FrontdoorFirewallPolicyCustomRuleMatchConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList">FrontdoorFirewallPolicyCustomRuleMatchConditionList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `match_condition_input`<sup>Optional</sup> <a name="match_condition_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.matchConditionInput"></a>

```python
match_condition_input: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyCustomRuleMatchCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit_duration_in_minutes_input`<sup>Optional</sup> <a name="rate_limit_duration_in_minutes_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutesInput"></a>

```python
rate_limit_duration_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit_threshold_input`<sup>Optional</sup> <a name="rate_limit_threshold_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThresholdInput"></a>

```python
rate_limit_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit_duration_in_minutes`<sup>Required</sup> <a name="rate_limit_duration_in_minutes" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutes"></a>

```python
rate_limit_duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit_threshold`<sup>Required</sup> <a name="rate_limit_threshold" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThreshold"></a>

```python
rate_limit_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorFirewallPolicyCustomRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>]

---


### FrontdoorFirewallPolicyManagedRuleExclusionList <a name="FrontdoorFirewallPolicyManagedRuleExclusionList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorFirewallPolicyManagedRuleExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>]]

---


### FrontdoorFirewallPolicyManagedRuleExclusionOutputReference <a name="FrontdoorFirewallPolicyManagedRuleExclusionOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariableInput">match_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariable">match_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_variable_input`<sup>Optional</sup> <a name="match_variable_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariableInput"></a>

```python
match_variable_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorFirewallPolicyManagedRuleExclusion]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>]

---


### FrontdoorFirewallPolicyManagedRuleList <a name="FrontdoorFirewallPolicyManagedRuleList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorFirewallPolicyManagedRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>]]

---


### FrontdoorFirewallPolicyManagedRuleOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion">put_exclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putOverride">put_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resetExclusion">reset_exclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resetOverride">reset_override</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclusion` <a name="put_exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion"></a>

```python
def put_exclusion(
  value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleExclusion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>]]

---

##### `put_override` <a name="put_override" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putOverride"></a>

```python
def put_override(
  value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverride]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putOverride.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>]]

---

##### `reset_exclusion` <a name="reset_exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resetExclusion"></a>

```python
def reset_exclusion() -> None
```

##### `reset_override` <a name="reset_override" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resetOverride"></a>

```python
def reset_override() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList">FrontdoorFirewallPolicyManagedRuleExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.override">override</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList">FrontdoorFirewallPolicyManagedRuleOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusionInput">exclusion_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.overrideInput">override_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusion"></a>

```python
exclusion: FrontdoorFirewallPolicyManagedRuleExclusionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList">FrontdoorFirewallPolicyManagedRuleExclusionList</a>

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.override"></a>

```python
override: FrontdoorFirewallPolicyManagedRuleOverrideList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList">FrontdoorFirewallPolicyManagedRuleOverrideList</a>

---

##### `exclusion_input`<sup>Optional</sup> <a name="exclusion_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusionInput"></a>

```python
exclusion_input: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>]]

---

##### `override_input`<sup>Optional</sup> <a name="override_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.overrideInput"></a>

```python
override_input: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorFirewallPolicyManagedRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>]

---


### FrontdoorFirewallPolicyManagedRuleOverrideExclusionList <a name="FrontdoorFirewallPolicyManagedRuleOverrideExclusionList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]]

---


### FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariableInput">match_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariable">match_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_variable_input`<sup>Optional</sup> <a name="match_variable_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariableInput"></a>

```python
match_variable_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorFirewallPolicyManagedRuleOverrideExclusion]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]

---


### FrontdoorFirewallPolicyManagedRuleOverrideList <a name="FrontdoorFirewallPolicyManagedRuleOverrideList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorFirewallPolicyManagedRuleOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>]]

---


### FrontdoorFirewallPolicyManagedRuleOverrideOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOverrideOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion">put_exclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetExclusion">reset_exclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetRule">reset_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclusion` <a name="put_exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion"></a>

```python
def put_exclusion(
  value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideExclusion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]]

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>]]

---

##### `reset_exclusion` <a name="reset_exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetExclusion"></a>

```python
def reset_exclusion() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList">FrontdoorFirewallPolicyManagedRuleOverrideExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList">FrontdoorFirewallPolicyManagedRuleOverrideRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusionInput">exclusion_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupNameInput">rule_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupName">rule_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusion"></a>

```python
exclusion: FrontdoorFirewallPolicyManagedRuleOverrideExclusionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList">FrontdoorFirewallPolicyManagedRuleOverrideExclusionList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.rule"></a>

```python
rule: FrontdoorFirewallPolicyManagedRuleOverrideRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList">FrontdoorFirewallPolicyManagedRuleOverrideRuleList</a>

---

##### `exclusion_input`<sup>Optional</sup> <a name="exclusion_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusionInput"></a>

```python
exclusion_input: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>]]

---

##### `rule_group_name_input`<sup>Optional</sup> <a name="rule_group_name_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupNameInput"></a>

```python
rule_group_name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>]]

---

##### `rule_group_name`<sup>Required</sup> <a name="rule_group_name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupName"></a>

```python
rule_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorFirewallPolicyManagedRuleOverride]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>]

---


### FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]]

---


### FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariableInput">match_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariable">match_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_variable_input`<sup>Optional</sup> <a name="match_variable_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariableInput"></a>

```python
match_variable_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]

---


### FrontdoorFirewallPolicyManagedRuleOverrideRuleList <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>]]

---


### FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion">put_exclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetExclusion">reset_exclusion</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclusion` <a name="put_exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion"></a>

```python
def put_exclusion(
  value: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_exclusion` <a name="reset_exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetExclusion"></a>

```python
def reset_exclusion() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusionInput">exclusion_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusion"></a>

```python
exclusion: FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclusion_input`<sup>Optional</sup> <a name="exclusion_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusionInput"></a>

```python
exclusion_input: typing.Union[IResolvable, typing.List[FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>]]

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorFirewallPolicyManagedRuleOverrideRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>]

---


### FrontdoorFirewallPolicyTimeoutsOutputReference <a name="FrontdoorFirewallPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_firewall_policy

frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorFirewallPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>]

---



