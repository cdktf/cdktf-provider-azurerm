# `webApplicationFirewallPolicy` Submodule <a name="`webApplicationFirewallPolicy` Submodule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebApplicationFirewallPolicy <a name="WebApplicationFirewallPolicy" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy azurerm_web_application_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicy(
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
  managed_rules: WebApplicationFirewallPolicyManagedRules,
  name: str,
  resource_group_name: str,
  custom_rules: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRules]] = None,
  id: str = None,
  policy_settings: WebApplicationFirewallPolicyPolicySettings = None,
  tags: typing.Mapping[str] = None,
  timeouts: WebApplicationFirewallPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#location WebApplicationFirewallPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.managedRules">managed_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a></code> | managed_rules block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#resource_group_name WebApplicationFirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.customRules">custom_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules">WebApplicationFirewallPolicyCustomRules</a>]]</code> | custom_rules block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.policySettings">policy_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a></code> | policy_settings block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#tags WebApplicationFirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts">WebApplicationFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#location WebApplicationFirewallPolicy#location}.

---

##### `managed_rules`<sup>Required</sup> <a name="managed_rules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.managedRules"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a>

managed_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#managed_rules WebApplicationFirewallPolicy#managed_rules}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#resource_group_name WebApplicationFirewallPolicy#resource_group_name}.

---

##### `custom_rules`<sup>Optional</sup> <a name="custom_rules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.customRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules">WebApplicationFirewallPolicyCustomRules</a>]]

custom_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#custom_rules WebApplicationFirewallPolicy#custom_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_settings`<sup>Optional</sup> <a name="policy_settings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.policySettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a>

policy_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#policy_settings WebApplicationFirewallPolicy#policy_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#tags WebApplicationFirewallPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts">WebApplicationFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#timeouts WebApplicationFirewallPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putCustomRules">put_custom_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putManagedRules">put_managed_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings">put_policy_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetCustomRules">reset_custom_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetPolicySettings">reset_policy_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_rules` <a name="put_custom_rules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putCustomRules"></a>

```python
def put_custom_rules(
  value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putCustomRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules">WebApplicationFirewallPolicyCustomRules</a>]]

---

##### `put_managed_rules` <a name="put_managed_rules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putManagedRules"></a>

```python
def put_managed_rules(
  managed_rule_set: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSet]],
  exclusion: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesExclusion]] = None
) -> None
```

###### `managed_rule_set`<sup>Required</sup> <a name="managed_rule_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putManagedRules.parameter.managedRuleSet"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet">WebApplicationFirewallPolicyManagedRulesManagedRuleSet</a>]]

managed_rule_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#managed_rule_set WebApplicationFirewallPolicy#managed_rule_set}

---

###### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putManagedRules.parameter.exclusion"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion">WebApplicationFirewallPolicyManagedRulesExclusion</a>]]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#exclusion WebApplicationFirewallPolicy#exclusion}

---

##### `put_policy_settings` <a name="put_policy_settings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings"></a>

```python
def put_policy_settings(
  enabled: typing.Union[bool, IResolvable] = None,
  file_upload_enforcement: typing.Union[bool, IResolvable] = None,
  file_upload_limit_in_mb: typing.Union[int, float] = None,
  js_challenge_cookie_expiration_in_minutes: typing.Union[int, float] = None,
  log_scrubbing: WebApplicationFirewallPolicyPolicySettingsLogScrubbing = None,
  max_request_body_size_in_kb: typing.Union[int, float] = None,
  mode: str = None,
  request_body_check: typing.Union[bool, IResolvable] = None,
  request_body_enforcement: typing.Union[bool, IResolvable] = None,
  request_body_inspect_limit_in_kb: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}.

---

###### `file_upload_enforcement`<sup>Optional</sup> <a name="file_upload_enforcement" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings.parameter.fileUploadEnforcement"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#file_upload_enforcement WebApplicationFirewallPolicy#file_upload_enforcement}.

---

###### `file_upload_limit_in_mb`<sup>Optional</sup> <a name="file_upload_limit_in_mb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings.parameter.fileUploadLimitInMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#file_upload_limit_in_mb WebApplicationFirewallPolicy#file_upload_limit_in_mb}.

---

###### `js_challenge_cookie_expiration_in_minutes`<sup>Optional</sup> <a name="js_challenge_cookie_expiration_in_minutes" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings.parameter.jsChallengeCookieExpirationInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#js_challenge_cookie_expiration_in_minutes WebApplicationFirewallPolicy#js_challenge_cookie_expiration_in_minutes}.

---

###### `log_scrubbing`<sup>Optional</sup> <a name="log_scrubbing" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings.parameter.logScrubbing"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing">WebApplicationFirewallPolicyPolicySettingsLogScrubbing</a>

log_scrubbing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#log_scrubbing WebApplicationFirewallPolicy#log_scrubbing}

---

###### `max_request_body_size_in_kb`<sup>Optional</sup> <a name="max_request_body_size_in_kb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings.parameter.maxRequestBodySizeInKb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#max_request_body_size_in_kb WebApplicationFirewallPolicy#max_request_body_size_in_kb}.

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#mode WebApplicationFirewallPolicy#mode}.

---

###### `request_body_check`<sup>Optional</sup> <a name="request_body_check" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings.parameter.requestBodyCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#request_body_check WebApplicationFirewallPolicy#request_body_check}.

---

###### `request_body_enforcement`<sup>Optional</sup> <a name="request_body_enforcement" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings.parameter.requestBodyEnforcement"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#request_body_enforcement WebApplicationFirewallPolicy#request_body_enforcement}.

---

###### `request_body_inspect_limit_in_kb`<sup>Optional</sup> <a name="request_body_inspect_limit_in_kb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings.parameter.requestBodyInspectLimitInKb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#request_body_inspect_limit_in_kb WebApplicationFirewallPolicy#request_body_inspect_limit_in_kb}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#create WebApplicationFirewallPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#delete WebApplicationFirewallPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#read WebApplicationFirewallPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#update WebApplicationFirewallPolicy#update}.

---

##### `reset_custom_rules` <a name="reset_custom_rules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetCustomRules"></a>

```python
def reset_custom_rules() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_settings` <a name="reset_policy_settings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetPolicySettings"></a>

```python
def reset_policy_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WebApplicationFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WebApplicationFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WebApplicationFirewallPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WebApplicationFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WebApplicationFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.customRules">custom_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList">WebApplicationFirewallPolicyCustomRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.httpListenerIds">http_listener_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.managedRules">managed_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference">WebApplicationFirewallPolicyManagedRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.pathBasedRuleIds">path_based_rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.policySettings">policy_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference">WebApplicationFirewallPolicyPolicySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference">WebApplicationFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.customRulesInput">custom_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules">WebApplicationFirewallPolicyCustomRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.managedRulesInput">managed_rules_input</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.policySettingsInput">policy_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts">WebApplicationFirewallPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_rules`<sup>Required</sup> <a name="custom_rules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.customRules"></a>

```python
custom_rules: WebApplicationFirewallPolicyCustomRulesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList">WebApplicationFirewallPolicyCustomRulesList</a>

---

##### `http_listener_ids`<sup>Required</sup> <a name="http_listener_ids" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.httpListenerIds"></a>

```python
http_listener_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_rules`<sup>Required</sup> <a name="managed_rules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.managedRules"></a>

```python
managed_rules: WebApplicationFirewallPolicyManagedRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference">WebApplicationFirewallPolicyManagedRulesOutputReference</a>

---

##### `path_based_rule_ids`<sup>Required</sup> <a name="path_based_rule_ids" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.pathBasedRuleIds"></a>

```python
path_based_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_settings`<sup>Required</sup> <a name="policy_settings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.policySettings"></a>

```python
policy_settings: WebApplicationFirewallPolicyPolicySettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference">WebApplicationFirewallPolicyPolicySettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.timeouts"></a>

```python
timeouts: WebApplicationFirewallPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference">WebApplicationFirewallPolicyTimeoutsOutputReference</a>

---

##### `custom_rules_input`<sup>Optional</sup> <a name="custom_rules_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.customRulesInput"></a>

```python
custom_rules_input: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules">WebApplicationFirewallPolicyCustomRules</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `managed_rules_input`<sup>Optional</sup> <a name="managed_rules_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.managedRulesInput"></a>

```python
managed_rules_input: WebApplicationFirewallPolicyManagedRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_settings_input`<sup>Optional</sup> <a name="policy_settings_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.policySettingsInput"></a>

```python
policy_settings_input: WebApplicationFirewallPolicyPolicySettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WebApplicationFirewallPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts">WebApplicationFirewallPolicyTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WebApplicationFirewallPolicyConfig <a name="WebApplicationFirewallPolicyConfig" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  managed_rules: WebApplicationFirewallPolicyManagedRules,
  name: str,
  resource_group_name: str,
  custom_rules: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRules]] = None,
  id: str = None,
  policy_settings: WebApplicationFirewallPolicyPolicySettings = None,
  tags: typing.Mapping[str] = None,
  timeouts: WebApplicationFirewallPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#location WebApplicationFirewallPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.managedRules">managed_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a></code> | managed_rules block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#resource_group_name WebApplicationFirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.customRules">custom_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules">WebApplicationFirewallPolicyCustomRules</a>]]</code> | custom_rules block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.policySettings">policy_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a></code> | policy_settings block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#tags WebApplicationFirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts">WebApplicationFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#location WebApplicationFirewallPolicy#location}.

---

##### `managed_rules`<sup>Required</sup> <a name="managed_rules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.managedRules"></a>

```python
managed_rules: WebApplicationFirewallPolicyManagedRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a>

managed_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#managed_rules WebApplicationFirewallPolicy#managed_rules}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#resource_group_name WebApplicationFirewallPolicy#resource_group_name}.

---

##### `custom_rules`<sup>Optional</sup> <a name="custom_rules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.customRules"></a>

```python
custom_rules: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules">WebApplicationFirewallPolicyCustomRules</a>]]

custom_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#custom_rules WebApplicationFirewallPolicy#custom_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_settings`<sup>Optional</sup> <a name="policy_settings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.policySettings"></a>

```python
policy_settings: WebApplicationFirewallPolicyPolicySettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a>

policy_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#policy_settings WebApplicationFirewallPolicy#policy_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#tags WebApplicationFirewallPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.timeouts"></a>

```python
timeouts: WebApplicationFirewallPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts">WebApplicationFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#timeouts WebApplicationFirewallPolicy#timeouts}

---

### WebApplicationFirewallPolicyCustomRules <a name="WebApplicationFirewallPolicyCustomRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules(
  action: str,
  match_conditions: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRulesMatchConditions]],
  priority: typing.Union[int, float],
  rule_type: str,
  enabled: typing.Union[bool, IResolvable] = None,
  group_rate_limit_by: str = None,
  name: str = None,
  rate_limit_duration: str = None,
  rate_limit_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.matchConditions">match_conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions">WebApplicationFirewallPolicyCustomRulesMatchConditions</a>]]</code> | match_conditions block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#priority WebApplicationFirewallPolicy#priority}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.ruleType">rule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rule_type WebApplicationFirewallPolicy#rule_type}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.groupRateLimitBy">group_rate_limit_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#group_rate_limit_by WebApplicationFirewallPolicy#group_rate_limit_by}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.rateLimitDuration">rate_limit_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rate_limit_duration WebApplicationFirewallPolicy#rate_limit_duration}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.rateLimitThreshold">rate_limit_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rate_limit_threshold WebApplicationFirewallPolicy#rate_limit_threshold}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}.

---

##### `match_conditions`<sup>Required</sup> <a name="match_conditions" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.matchConditions"></a>

```python
match_conditions: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRulesMatchConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions">WebApplicationFirewallPolicyCustomRulesMatchConditions</a>]]

match_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#match_conditions WebApplicationFirewallPolicy#match_conditions}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#priority WebApplicationFirewallPolicy#priority}.

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rule_type WebApplicationFirewallPolicy#rule_type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}.

---

##### `group_rate_limit_by`<sup>Optional</sup> <a name="group_rate_limit_by" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.groupRateLimitBy"></a>

```python
group_rate_limit_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#group_rate_limit_by WebApplicationFirewallPolicy#group_rate_limit_by}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}.

---

##### `rate_limit_duration`<sup>Optional</sup> <a name="rate_limit_duration" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.rateLimitDuration"></a>

```python
rate_limit_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rate_limit_duration WebApplicationFirewallPolicy#rate_limit_duration}.

---

##### `rate_limit_threshold`<sup>Optional</sup> <a name="rate_limit_threshold" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.rateLimitThreshold"></a>

```python
rate_limit_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rate_limit_threshold WebApplicationFirewallPolicy#rate_limit_threshold}.

---

### WebApplicationFirewallPolicyCustomRulesMatchConditions <a name="WebApplicationFirewallPolicyCustomRulesMatchConditions" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions(
  match_variables: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables]],
  operator: str,
  match_values: typing.List[str] = None,
  negation_condition: typing.Union[bool, IResolvable] = None,
  transforms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.matchVariables">match_variables</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables</a>]]</code> | match_variables block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#operator WebApplicationFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.matchValues">match_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#match_values WebApplicationFirewallPolicy#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.negationCondition">negation_condition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#negation_condition WebApplicationFirewallPolicy#negation_condition}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.transforms">transforms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#transforms WebApplicationFirewallPolicy#transforms}. |

---

##### `match_variables`<sup>Required</sup> <a name="match_variables" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.matchVariables"></a>

```python
match_variables: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables</a>]]

match_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#match_variables WebApplicationFirewallPolicy#match_variables}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#operator WebApplicationFirewallPolicy#operator}.

---

##### `match_values`<sup>Optional</sup> <a name="match_values" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.matchValues"></a>

```python
match_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#match_values WebApplicationFirewallPolicy#match_values}.

---

##### `negation_condition`<sup>Optional</sup> <a name="negation_condition" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.negationCondition"></a>

```python
negation_condition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#negation_condition WebApplicationFirewallPolicy#negation_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.transforms"></a>

```python
transforms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#transforms WebApplicationFirewallPolicy#transforms}.

---

### WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables(
  variable_name: str,
  selector: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.property.variableName">variable_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#variable_name WebApplicationFirewallPolicy#variable_name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.property.selector">selector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}. |

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#variable_name WebApplicationFirewallPolicy#variable_name}.

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.property.selector"></a>

```python
selector: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}.

---

### WebApplicationFirewallPolicyManagedRules <a name="WebApplicationFirewallPolicyManagedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules(
  managed_rule_set: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSet]],
  exclusion: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesExclusion]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.property.managedRuleSet">managed_rule_set</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet">WebApplicationFirewallPolicyManagedRulesManagedRuleSet</a>]]</code> | managed_rule_set block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.property.exclusion">exclusion</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion">WebApplicationFirewallPolicyManagedRulesExclusion</a>]]</code> | exclusion block. |

---

##### `managed_rule_set`<sup>Required</sup> <a name="managed_rule_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.property.managedRuleSet"></a>

```python
managed_rule_set: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet">WebApplicationFirewallPolicyManagedRulesManagedRuleSet</a>]]

managed_rule_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#managed_rule_set WebApplicationFirewallPolicy#managed_rule_set}

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.property.exclusion"></a>

```python
exclusion: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion">WebApplicationFirewallPolicyManagedRulesExclusion</a>]]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#exclusion WebApplicationFirewallPolicy#exclusion}

---

### WebApplicationFirewallPolicyManagedRulesExclusion <a name="WebApplicationFirewallPolicyManagedRulesExclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion(
  match_variable: str,
  selector: str,
  selector_match_operator: str,
  excluded_rule_set: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.matchVariable">match_variable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#match_variable WebApplicationFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.selector">selector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.selectorMatchOperator">selector_match_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#selector_match_operator WebApplicationFirewallPolicy#selector_match_operator}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.excludedRuleSet">excluded_rule_set</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a></code> | excluded_rule_set block. |

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#match_variable WebApplicationFirewallPolicy#match_variable}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.selector"></a>

```python
selector: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}.

---

##### `selector_match_operator`<sup>Required</sup> <a name="selector_match_operator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.selectorMatchOperator"></a>

```python
selector_match_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#selector_match_operator WebApplicationFirewallPolicy#selector_match_operator}.

---

##### `excluded_rule_set`<sup>Optional</sup> <a name="excluded_rule_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.excludedRuleSet"></a>

```python
excluded_rule_set: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a>

excluded_rule_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#excluded_rule_set WebApplicationFirewallPolicy#excluded_rule_set}

---

### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet(
  rule_group: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup]] = None,
  type: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.ruleGroup">rule_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup</a>]]</code> | rule_group block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}. |

---

##### `rule_group`<sup>Optional</sup> <a name="rule_group" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.ruleGroup"></a>

```python
rule_group: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup</a>]]

rule_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rule_group WebApplicationFirewallPolicy#rule_group}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}.

---

### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup(
  rule_group_name: str,
  excluded_rules: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.property.ruleGroupName">rule_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.property.excludedRules">excluded_rules</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#excluded_rules WebApplicationFirewallPolicy#excluded_rules}. |

---

##### `rule_group_name`<sup>Required</sup> <a name="rule_group_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.property.ruleGroupName"></a>

```python
rule_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}.

---

##### `excluded_rules`<sup>Optional</sup> <a name="excluded_rules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.property.excludedRules"></a>

```python
excluded_rules: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#excluded_rules WebApplicationFirewallPolicy#excluded_rules}.

---

### WebApplicationFirewallPolicyManagedRulesManagedRuleSet <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet(
  version: str,
  rule_group_override: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride]] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.ruleGroupOverride">rule_group_override</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride</a>]]</code> | rule_group_override block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}.

---

##### `rule_group_override`<sup>Optional</sup> <a name="rule_group_override" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.ruleGroupOverride"></a>

```python
rule_group_override: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride</a>]]

rule_group_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rule_group_override WebApplicationFirewallPolicy#rule_group_override}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}.

---

### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride(
  rule_group_name: str,
  rule: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.ruleGroupName">rule_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule</a>]]</code> | rule block. |

---

##### `rule_group_name`<sup>Required</sup> <a name="rule_group_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.ruleGroupName"></a>

```python
rule_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rule WebApplicationFirewallPolicy#rule}

---

### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule(
  id: str,
  action: str = None,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}.

---

### WebApplicationFirewallPolicyPolicySettings <a name="WebApplicationFirewallPolicyPolicySettings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings(
  enabled: typing.Union[bool, IResolvable] = None,
  file_upload_enforcement: typing.Union[bool, IResolvable] = None,
  file_upload_limit_in_mb: typing.Union[int, float] = None,
  js_challenge_cookie_expiration_in_minutes: typing.Union[int, float] = None,
  log_scrubbing: WebApplicationFirewallPolicyPolicySettingsLogScrubbing = None,
  max_request_body_size_in_kb: typing.Union[int, float] = None,
  mode: str = None,
  request_body_check: typing.Union[bool, IResolvable] = None,
  request_body_enforcement: typing.Union[bool, IResolvable] = None,
  request_body_inspect_limit_in_kb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.fileUploadEnforcement">file_upload_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#file_upload_enforcement WebApplicationFirewallPolicy#file_upload_enforcement}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.fileUploadLimitInMb">file_upload_limit_in_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#file_upload_limit_in_mb WebApplicationFirewallPolicy#file_upload_limit_in_mb}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.jsChallengeCookieExpirationInMinutes">js_challenge_cookie_expiration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#js_challenge_cookie_expiration_in_minutes WebApplicationFirewallPolicy#js_challenge_cookie_expiration_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.logScrubbing">log_scrubbing</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing">WebApplicationFirewallPolicyPolicySettingsLogScrubbing</a></code> | log_scrubbing block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.maxRequestBodySizeInKb">max_request_body_size_in_kb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#max_request_body_size_in_kb WebApplicationFirewallPolicy#max_request_body_size_in_kb}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#mode WebApplicationFirewallPolicy#mode}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.requestBodyCheck">request_body_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#request_body_check WebApplicationFirewallPolicy#request_body_check}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.requestBodyEnforcement">request_body_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#request_body_enforcement WebApplicationFirewallPolicy#request_body_enforcement}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.requestBodyInspectLimitInKb">request_body_inspect_limit_in_kb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#request_body_inspect_limit_in_kb WebApplicationFirewallPolicy#request_body_inspect_limit_in_kb}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}.

---

##### `file_upload_enforcement`<sup>Optional</sup> <a name="file_upload_enforcement" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.fileUploadEnforcement"></a>

```python
file_upload_enforcement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#file_upload_enforcement WebApplicationFirewallPolicy#file_upload_enforcement}.

---

##### `file_upload_limit_in_mb`<sup>Optional</sup> <a name="file_upload_limit_in_mb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.fileUploadLimitInMb"></a>

```python
file_upload_limit_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#file_upload_limit_in_mb WebApplicationFirewallPolicy#file_upload_limit_in_mb}.

---

##### `js_challenge_cookie_expiration_in_minutes`<sup>Optional</sup> <a name="js_challenge_cookie_expiration_in_minutes" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.jsChallengeCookieExpirationInMinutes"></a>

```python
js_challenge_cookie_expiration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#js_challenge_cookie_expiration_in_minutes WebApplicationFirewallPolicy#js_challenge_cookie_expiration_in_minutes}.

---

##### `log_scrubbing`<sup>Optional</sup> <a name="log_scrubbing" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.logScrubbing"></a>

```python
log_scrubbing: WebApplicationFirewallPolicyPolicySettingsLogScrubbing
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing">WebApplicationFirewallPolicyPolicySettingsLogScrubbing</a>

log_scrubbing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#log_scrubbing WebApplicationFirewallPolicy#log_scrubbing}

---

##### `max_request_body_size_in_kb`<sup>Optional</sup> <a name="max_request_body_size_in_kb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.maxRequestBodySizeInKb"></a>

```python
max_request_body_size_in_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#max_request_body_size_in_kb WebApplicationFirewallPolicy#max_request_body_size_in_kb}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#mode WebApplicationFirewallPolicy#mode}.

---

##### `request_body_check`<sup>Optional</sup> <a name="request_body_check" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.requestBodyCheck"></a>

```python
request_body_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#request_body_check WebApplicationFirewallPolicy#request_body_check}.

---

##### `request_body_enforcement`<sup>Optional</sup> <a name="request_body_enforcement" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.requestBodyEnforcement"></a>

```python
request_body_enforcement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#request_body_enforcement WebApplicationFirewallPolicy#request_body_enforcement}.

---

##### `request_body_inspect_limit_in_kb`<sup>Optional</sup> <a name="request_body_inspect_limit_in_kb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.requestBodyInspectLimitInKb"></a>

```python
request_body_inspect_limit_in_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#request_body_inspect_limit_in_kb WebApplicationFirewallPolicy#request_body_inspect_limit_in_kb}.

---

### WebApplicationFirewallPolicyPolicySettingsLogScrubbing <a name="WebApplicationFirewallPolicyPolicySettingsLogScrubbing" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing(
  enabled: typing.Union[bool, IResolvable] = None,
  rule: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule">WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule</a>]]</code> | rule block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule">WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rule WebApplicationFirewallPolicy#rule}

---

### WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule <a name="WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule(
  match_variable: str,
  enabled: typing.Union[bool, IResolvable] = None,
  selector: str = None,
  selector_match_operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.matchVariable">match_variable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#match_variable WebApplicationFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.selector">selector</a></code> | <code>str</code> | When matchVariable is a collection, operator used to specify which elements in the collection this rule applies to. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.selectorMatchOperator">selector_match_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#selector_match_operator WebApplicationFirewallPolicy#selector_match_operator}. |

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#match_variable WebApplicationFirewallPolicy#match_variable}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}.

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.selector"></a>

```python
selector: str
```

- *Type:* str

When matchVariable is a collection, operator used to specify which elements in the collection this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}

---

##### `selector_match_operator`<sup>Optional</sup> <a name="selector_match_operator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.selectorMatchOperator"></a>

```python
selector_match_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#selector_match_operator WebApplicationFirewallPolicy#selector_match_operator}.

---

### WebApplicationFirewallPolicyTimeouts <a name="WebApplicationFirewallPolicyTimeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#create WebApplicationFirewallPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#delete WebApplicationFirewallPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#read WebApplicationFirewallPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#update WebApplicationFirewallPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#create WebApplicationFirewallPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#delete WebApplicationFirewallPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#read WebApplicationFirewallPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#update WebApplicationFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebApplicationFirewallPolicyCustomRulesList <a name="WebApplicationFirewallPolicyCustomRulesList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebApplicationFirewallPolicyCustomRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules">WebApplicationFirewallPolicyCustomRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules">WebApplicationFirewallPolicyCustomRules</a>]]

---


### WebApplicationFirewallPolicyCustomRulesMatchConditionsList <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions">WebApplicationFirewallPolicyCustomRulesMatchConditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRulesMatchConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions">WebApplicationFirewallPolicyCustomRulesMatchConditions</a>]]

---


### WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables</a>]]

---


### WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resetSelector">reset_selector</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_selector` <a name="reset_selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resetSelector"></a>

```python
def reset_selector() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.variableNameInput">variable_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.variableName">variable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `variable_name_input`<sup>Optional</sup> <a name="variable_name_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.variableNameInput"></a>

```python
variable_name_input: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables</a>]

---


### WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.putMatchVariables">put_match_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetMatchValues">reset_match_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetNegationCondition">reset_negation_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetTransforms">reset_transforms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_variables` <a name="put_match_variables" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.putMatchVariables"></a>

```python
def put_match_variables(
  value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.putMatchVariables.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables</a>]]

---

##### `reset_match_values` <a name="reset_match_values" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetMatchValues"></a>

```python
def reset_match_values() -> None
```

##### `reset_negation_condition` <a name="reset_negation_condition" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetNegationCondition"></a>

```python
def reset_negation_condition() -> None
```

##### `reset_transforms` <a name="reset_transforms" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetTransforms"></a>

```python
def reset_transforms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchVariables">match_variables</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchValuesInput">match_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchVariablesInput">match_variables_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.negationConditionInput">negation_condition_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.transformsInput">transforms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchValues">match_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.negationCondition">negation_condition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.transforms">transforms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions">WebApplicationFirewallPolicyCustomRulesMatchConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_variables`<sup>Required</sup> <a name="match_variables" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchVariables"></a>

```python
match_variables: WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList</a>

---

##### `match_values_input`<sup>Optional</sup> <a name="match_values_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchValuesInput"></a>

```python
match_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_variables_input`<sup>Optional</sup> <a name="match_variables_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchVariablesInput"></a>

```python
match_variables_input: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables</a>]]

---

##### `negation_condition_input`<sup>Optional</sup> <a name="negation_condition_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.negationConditionInput"></a>

```python
negation_condition_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `transforms_input`<sup>Optional</sup> <a name="transforms_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.transformsInput"></a>

```python
transforms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_values`<sup>Required</sup> <a name="match_values" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchValues"></a>

```python
match_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `negation_condition`<sup>Required</sup> <a name="negation_condition" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.negationCondition"></a>

```python
negation_condition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.transforms"></a>

```python
transforms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebApplicationFirewallPolicyCustomRulesMatchConditions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions">WebApplicationFirewallPolicyCustomRulesMatchConditions</a>]

---


### WebApplicationFirewallPolicyCustomRulesOutputReference <a name="WebApplicationFirewallPolicyCustomRulesOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.putMatchConditions">put_match_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetGroupRateLimitBy">reset_group_rate_limit_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetRateLimitDuration">reset_rate_limit_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetRateLimitThreshold">reset_rate_limit_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_conditions` <a name="put_match_conditions" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.putMatchConditions"></a>

```python
def put_match_conditions(
  value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRulesMatchConditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.putMatchConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions">WebApplicationFirewallPolicyCustomRulesMatchConditions</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_group_rate_limit_by` <a name="reset_group_rate_limit_by" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetGroupRateLimitBy"></a>

```python
def reset_group_rate_limit_by() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_rate_limit_duration` <a name="reset_rate_limit_duration" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetRateLimitDuration"></a>

```python
def reset_rate_limit_duration() -> None
```

##### `reset_rate_limit_threshold` <a name="reset_rate_limit_threshold" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetRateLimitThreshold"></a>

```python
def reset_rate_limit_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.matchConditions">match_conditions</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList">WebApplicationFirewallPolicyCustomRulesMatchConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.groupRateLimitByInput">group_rate_limit_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.matchConditionsInput">match_conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions">WebApplicationFirewallPolicyCustomRulesMatchConditions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitDurationInput">rate_limit_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitThresholdInput">rate_limit_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.ruleTypeInput">rule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.groupRateLimitBy">group_rate_limit_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitDuration">rate_limit_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitThreshold">rate_limit_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.ruleType">rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules">WebApplicationFirewallPolicyCustomRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_conditions`<sup>Required</sup> <a name="match_conditions" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.matchConditions"></a>

```python
match_conditions: WebApplicationFirewallPolicyCustomRulesMatchConditionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList">WebApplicationFirewallPolicyCustomRulesMatchConditionsList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_rate_limit_by_input`<sup>Optional</sup> <a name="group_rate_limit_by_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.groupRateLimitByInput"></a>

```python
group_rate_limit_by_input: str
```

- *Type:* str

---

##### `match_conditions_input`<sup>Optional</sup> <a name="match_conditions_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.matchConditionsInput"></a>

```python
match_conditions_input: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyCustomRulesMatchConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions">WebApplicationFirewallPolicyCustomRulesMatchConditions</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit_duration_input`<sup>Optional</sup> <a name="rate_limit_duration_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitDurationInput"></a>

```python
rate_limit_duration_input: str
```

- *Type:* str

---

##### `rate_limit_threshold_input`<sup>Optional</sup> <a name="rate_limit_threshold_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitThresholdInput"></a>

```python
rate_limit_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_type_input`<sup>Optional</sup> <a name="rule_type_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.ruleTypeInput"></a>

```python
rule_type_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_rate_limit_by`<sup>Required</sup> <a name="group_rate_limit_by" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.groupRateLimitBy"></a>

```python
group_rate_limit_by: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit_duration`<sup>Required</sup> <a name="rate_limit_duration" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitDuration"></a>

```python
rate_limit_duration: str
```

- *Type:* str

---

##### `rate_limit_threshold`<sup>Required</sup> <a name="rate_limit_threshold" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitThreshold"></a>

```python
rate_limit_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebApplicationFirewallPolicyCustomRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules">WebApplicationFirewallPolicyCustomRules</a>]

---


### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.putRuleGroup">put_rule_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetRuleGroup">reset_rule_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule_group` <a name="put_rule_group" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.putRuleGroup"></a>

```python
def put_rule_group(
  value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.putRuleGroup.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup</a>]]

---

##### `reset_rule_group` <a name="reset_rule_group" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetRuleGroup"></a>

```python
def reset_rule_group() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.ruleGroup">rule_group</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.ruleGroupInput">rule_group_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_group`<sup>Required</sup> <a name="rule_group" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.ruleGroup"></a>

```python
rule_group: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList</a>

---

##### `rule_group_input`<sup>Optional</sup> <a name="rule_group_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.ruleGroupInput"></a>

```python
rule_group_input: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.internalValue"></a>

```python
internal_value: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a>

---


### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup</a>]]

---


### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resetExcludedRules">reset_excluded_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_rules` <a name="reset_excluded_rules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resetExcludedRules"></a>

```python
def reset_excluded_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.excludedRulesInput">excluded_rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.ruleGroupNameInput">rule_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.excludedRules">excluded_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.ruleGroupName">rule_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_rules_input`<sup>Optional</sup> <a name="excluded_rules_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.excludedRulesInput"></a>

```python
excluded_rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_group_name_input`<sup>Optional</sup> <a name="rule_group_name_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.ruleGroupNameInput"></a>

```python
rule_group_name_input: str
```

- *Type:* str

---

##### `excluded_rules`<sup>Required</sup> <a name="excluded_rules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.excludedRules"></a>

```python
excluded_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_group_name`<sup>Required</sup> <a name="rule_group_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.ruleGroupName"></a>

```python
rule_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup</a>]

---


### WebApplicationFirewallPolicyManagedRulesExclusionList <a name="WebApplicationFirewallPolicyManagedRulesExclusionList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebApplicationFirewallPolicyManagedRulesExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion">WebApplicationFirewallPolicyManagedRulesExclusion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion">WebApplicationFirewallPolicyManagedRulesExclusion</a>]]

---


### WebApplicationFirewallPolicyManagedRulesExclusionOutputReference <a name="WebApplicationFirewallPolicyManagedRulesExclusionOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.putExcludedRuleSet">put_excluded_rule_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resetExcludedRuleSet">reset_excluded_rule_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_excluded_rule_set` <a name="put_excluded_rule_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.putExcludedRuleSet"></a>

```python
def put_excluded_rule_set(
  rule_group: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup]] = None,
  type: str = None,
  version: str = None
) -> None
```

###### `rule_group`<sup>Optional</sup> <a name="rule_group" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.putExcludedRuleSet.parameter.ruleGroup"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup</a>]]

rule_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rule_group WebApplicationFirewallPolicy#rule_group}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.putExcludedRuleSet.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.putExcludedRuleSet.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}.

---

##### `reset_excluded_rule_set` <a name="reset_excluded_rule_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resetExcludedRuleSet"></a>

```python
def reset_excluded_rule_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.excludedRuleSet">excluded_rule_set</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.excludedRuleSetInput">excluded_rule_set_input</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.matchVariableInput">match_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorMatchOperatorInput">selector_match_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.matchVariable">match_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorMatchOperator">selector_match_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion">WebApplicationFirewallPolicyManagedRulesExclusion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_rule_set`<sup>Required</sup> <a name="excluded_rule_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.excludedRuleSet"></a>

```python
excluded_rule_set: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference</a>

---

##### `excluded_rule_set_input`<sup>Optional</sup> <a name="excluded_rule_set_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.excludedRuleSetInput"></a>

```python
excluded_rule_set_input: WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a>

---

##### `match_variable_input`<sup>Optional</sup> <a name="match_variable_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.matchVariableInput"></a>

```python
match_variable_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `selector_match_operator_input`<sup>Optional</sup> <a name="selector_match_operator_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorMatchOperatorInput"></a>

```python
selector_match_operator_input: str
```

- *Type:* str

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `selector_match_operator`<sup>Required</sup> <a name="selector_match_operator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorMatchOperator"></a>

```python
selector_match_operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebApplicationFirewallPolicyManagedRulesExclusion]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion">WebApplicationFirewallPolicyManagedRulesExclusion</a>]

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetList <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet">WebApplicationFirewallPolicyManagedRulesManagedRuleSet</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet">WebApplicationFirewallPolicyManagedRulesManagedRuleSet</a>]]

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.putRuleGroupOverride">put_rule_group_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resetRuleGroupOverride">reset_rule_group_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule_group_override` <a name="put_rule_group_override" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.putRuleGroupOverride"></a>

```python
def put_rule_group_override(
  value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.putRuleGroupOverride.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride</a>]]

---

##### `reset_rule_group_override` <a name="reset_rule_group_override" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resetRuleGroupOverride"></a>

```python
def reset_rule_group_override() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.ruleGroupOverride">rule_group_override</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.ruleGroupOverrideInput">rule_group_override_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet">WebApplicationFirewallPolicyManagedRulesManagedRuleSet</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_group_override`<sup>Required</sup> <a name="rule_group_override" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.ruleGroupOverride"></a>

```python
rule_group_override: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList</a>

---

##### `rule_group_override_input`<sup>Optional</sup> <a name="rule_group_override_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.ruleGroupOverrideInput"></a>

```python
rule_group_override_input: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebApplicationFirewallPolicyManagedRulesManagedRuleSet]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet">WebApplicationFirewallPolicyManagedRulesManagedRuleSet</a>]

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride</a>]]

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resetRule">reset_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule` <a name="put_rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule</a>]]

---

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleGroupNameInput">rule_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleGroupName">rule_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.rule"></a>

```python
rule: WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList</a>

---

##### `rule_group_name_input`<sup>Optional</sup> <a name="rule_group_name_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleGroupNameInput"></a>

```python
rule_group_name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule</a>]]

---

##### `rule_group_name`<sup>Required</sup> <a name="rule_group_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleGroupName"></a>

```python
rule_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride</a>]

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule</a>]]

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule</a>]

---


### WebApplicationFirewallPolicyManagedRulesOutputReference <a name="WebApplicationFirewallPolicyManagedRulesOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putExclusion">put_exclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putManagedRuleSet">put_managed_rule_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resetExclusion">reset_exclusion</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclusion` <a name="put_exclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putExclusion"></a>

```python
def put_exclusion(
  value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesExclusion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putExclusion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion">WebApplicationFirewallPolicyManagedRulesExclusion</a>]]

---

##### `put_managed_rule_set` <a name="put_managed_rule_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putManagedRuleSet"></a>

```python
def put_managed_rule_set(
  value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSet]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putManagedRuleSet.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet">WebApplicationFirewallPolicyManagedRulesManagedRuleSet</a>]]

---

##### `reset_exclusion` <a name="reset_exclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resetExclusion"></a>

```python
def reset_exclusion() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList">WebApplicationFirewallPolicyManagedRulesExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.managedRuleSet">managed_rule_set</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.exclusionInput">exclusion_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion">WebApplicationFirewallPolicyManagedRulesExclusion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.managedRuleSetInput">managed_rule_set_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet">WebApplicationFirewallPolicyManagedRulesManagedRuleSet</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.exclusion"></a>

```python
exclusion: WebApplicationFirewallPolicyManagedRulesExclusionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList">WebApplicationFirewallPolicyManagedRulesExclusionList</a>

---

##### `managed_rule_set`<sup>Required</sup> <a name="managed_rule_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.managedRuleSet"></a>

```python
managed_rule_set: WebApplicationFirewallPolicyManagedRulesManagedRuleSetList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetList</a>

---

##### `exclusion_input`<sup>Optional</sup> <a name="exclusion_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.exclusionInput"></a>

```python
exclusion_input: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion">WebApplicationFirewallPolicyManagedRulesExclusion</a>]]

---

##### `managed_rule_set_input`<sup>Optional</sup> <a name="managed_rule_set_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.managedRuleSetInput"></a>

```python
managed_rule_set_input: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyManagedRulesManagedRuleSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet">WebApplicationFirewallPolicyManagedRulesManagedRuleSet</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.internalValue"></a>

```python
internal_value: WebApplicationFirewallPolicyManagedRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a>

---


### WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference <a name="WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.resetRule">reset_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule` <a name="put_rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule">WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList">WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule">WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing">WebApplicationFirewallPolicyPolicySettingsLogScrubbing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.rule"></a>

```python
rule: WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList">WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule">WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule</a>]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.internalValue"></a>

```python
internal_value: WebApplicationFirewallPolicyPolicySettingsLogScrubbing
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing">WebApplicationFirewallPolicyPolicySettingsLogScrubbing</a>

---


### WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList <a name="WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule">WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule">WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule</a>]]

---


### WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference <a name="WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resetSelector">reset_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resetSelectorMatchOperator">reset_selector_match_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_selector` <a name="reset_selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resetSelector"></a>

```python
def reset_selector() -> None
```

##### `reset_selector_match_operator` <a name="reset_selector_match_operator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resetSelectorMatchOperator"></a>

```python
def reset_selector_match_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.matchVariableInput">match_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selectorMatchOperatorInput">selector_match_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.matchVariable">match_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selectorMatchOperator">selector_match_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule">WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `match_variable_input`<sup>Optional</sup> <a name="match_variable_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.matchVariableInput"></a>

```python
match_variable_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `selector_match_operator_input`<sup>Optional</sup> <a name="selector_match_operator_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selectorMatchOperatorInput"></a>

```python
selector_match_operator_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `selector_match_operator`<sup>Required</sup> <a name="selector_match_operator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selectorMatchOperator"></a>

```python
selector_match_operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule">WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule</a>]

---


### WebApplicationFirewallPolicyPolicySettingsOutputReference <a name="WebApplicationFirewallPolicyPolicySettingsOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.putLogScrubbing">put_log_scrubbing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetFileUploadEnforcement">reset_file_upload_enforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetFileUploadLimitInMb">reset_file_upload_limit_in_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetJsChallengeCookieExpirationInMinutes">reset_js_challenge_cookie_expiration_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetLogScrubbing">reset_log_scrubbing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetMaxRequestBodySizeInKb">reset_max_request_body_size_in_kb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetRequestBodyCheck">reset_request_body_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetRequestBodyEnforcement">reset_request_body_enforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetRequestBodyInspectLimitInKb">reset_request_body_inspect_limit_in_kb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_log_scrubbing` <a name="put_log_scrubbing" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.putLogScrubbing"></a>

```python
def put_log_scrubbing(
  enabled: typing.Union[bool, IResolvable] = None,
  rule: typing.Union[IResolvable, typing.List[WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule]] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.putLogScrubbing.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}.

---

###### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.putLogScrubbing.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule">WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/web_application_firewall_policy#rule WebApplicationFirewallPolicy#rule}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_file_upload_enforcement` <a name="reset_file_upload_enforcement" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetFileUploadEnforcement"></a>

```python
def reset_file_upload_enforcement() -> None
```

##### `reset_file_upload_limit_in_mb` <a name="reset_file_upload_limit_in_mb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetFileUploadLimitInMb"></a>

```python
def reset_file_upload_limit_in_mb() -> None
```

##### `reset_js_challenge_cookie_expiration_in_minutes` <a name="reset_js_challenge_cookie_expiration_in_minutes" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetJsChallengeCookieExpirationInMinutes"></a>

```python
def reset_js_challenge_cookie_expiration_in_minutes() -> None
```

##### `reset_log_scrubbing` <a name="reset_log_scrubbing" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetLogScrubbing"></a>

```python
def reset_log_scrubbing() -> None
```

##### `reset_max_request_body_size_in_kb` <a name="reset_max_request_body_size_in_kb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetMaxRequestBodySizeInKb"></a>

```python
def reset_max_request_body_size_in_kb() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_request_body_check` <a name="reset_request_body_check" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetRequestBodyCheck"></a>

```python
def reset_request_body_check() -> None
```

##### `reset_request_body_enforcement` <a name="reset_request_body_enforcement" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetRequestBodyEnforcement"></a>

```python
def reset_request_body_enforcement() -> None
```

##### `reset_request_body_inspect_limit_in_kb` <a name="reset_request_body_inspect_limit_in_kb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetRequestBodyInspectLimitInKb"></a>

```python
def reset_request_body_inspect_limit_in_kb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.logScrubbing">log_scrubbing</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference">WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadEnforcementInput">file_upload_enforcement_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadLimitInMbInput">file_upload_limit_in_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.jsChallengeCookieExpirationInMinutesInput">js_challenge_cookie_expiration_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.logScrubbingInput">log_scrubbing_input</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing">WebApplicationFirewallPolicyPolicySettingsLogScrubbing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.maxRequestBodySizeInKbInput">max_request_body_size_in_kb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyCheckInput">request_body_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyEnforcementInput">request_body_enforcement_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyInspectLimitInKbInput">request_body_inspect_limit_in_kb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadEnforcement">file_upload_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadLimitInMb">file_upload_limit_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.jsChallengeCookieExpirationInMinutes">js_challenge_cookie_expiration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.maxRequestBodySizeInKb">max_request_body_size_in_kb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyCheck">request_body_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyEnforcement">request_body_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyInspectLimitInKb">request_body_inspect_limit_in_kb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_scrubbing`<sup>Required</sup> <a name="log_scrubbing" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.logScrubbing"></a>

```python
log_scrubbing: WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference">WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_upload_enforcement_input`<sup>Optional</sup> <a name="file_upload_enforcement_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadEnforcementInput"></a>

```python
file_upload_enforcement_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_upload_limit_in_mb_input`<sup>Optional</sup> <a name="file_upload_limit_in_mb_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadLimitInMbInput"></a>

```python
file_upload_limit_in_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `js_challenge_cookie_expiration_in_minutes_input`<sup>Optional</sup> <a name="js_challenge_cookie_expiration_in_minutes_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.jsChallengeCookieExpirationInMinutesInput"></a>

```python
js_challenge_cookie_expiration_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_scrubbing_input`<sup>Optional</sup> <a name="log_scrubbing_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.logScrubbingInput"></a>

```python
log_scrubbing_input: WebApplicationFirewallPolicyPolicySettingsLogScrubbing
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing">WebApplicationFirewallPolicyPolicySettingsLogScrubbing</a>

---

##### `max_request_body_size_in_kb_input`<sup>Optional</sup> <a name="max_request_body_size_in_kb_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.maxRequestBodySizeInKbInput"></a>

```python
max_request_body_size_in_kb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `request_body_check_input`<sup>Optional</sup> <a name="request_body_check_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyCheckInput"></a>

```python
request_body_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `request_body_enforcement_input`<sup>Optional</sup> <a name="request_body_enforcement_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyEnforcementInput"></a>

```python
request_body_enforcement_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `request_body_inspect_limit_in_kb_input`<sup>Optional</sup> <a name="request_body_inspect_limit_in_kb_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyInspectLimitInKbInput"></a>

```python
request_body_inspect_limit_in_kb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_upload_enforcement`<sup>Required</sup> <a name="file_upload_enforcement" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadEnforcement"></a>

```python
file_upload_enforcement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_upload_limit_in_mb`<sup>Required</sup> <a name="file_upload_limit_in_mb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadLimitInMb"></a>

```python
file_upload_limit_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `js_challenge_cookie_expiration_in_minutes`<sup>Required</sup> <a name="js_challenge_cookie_expiration_in_minutes" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.jsChallengeCookieExpirationInMinutes"></a>

```python
js_challenge_cookie_expiration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_request_body_size_in_kb`<sup>Required</sup> <a name="max_request_body_size_in_kb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.maxRequestBodySizeInKb"></a>

```python
max_request_body_size_in_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `request_body_check`<sup>Required</sup> <a name="request_body_check" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyCheck"></a>

```python
request_body_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `request_body_enforcement`<sup>Required</sup> <a name="request_body_enforcement" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyEnforcement"></a>

```python
request_body_enforcement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `request_body_inspect_limit_in_kb`<sup>Required</sup> <a name="request_body_inspect_limit_in_kb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyInspectLimitInKb"></a>

```python
request_body_inspect_limit_in_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.internalValue"></a>

```python
internal_value: WebApplicationFirewallPolicyPolicySettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a>

---


### WebApplicationFirewallPolicyTimeoutsOutputReference <a name="WebApplicationFirewallPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_application_firewall_policy

webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts">WebApplicationFirewallPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebApplicationFirewallPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts">WebApplicationFirewallPolicyTimeouts</a>]

---



