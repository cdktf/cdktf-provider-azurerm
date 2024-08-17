# `vpnServerConfigurationPolicyGroup` Submodule <a name="`vpnServerConfigurationPolicyGroup` Submodule" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnServerConfigurationPolicyGroup <a name="VpnServerConfigurationPolicyGroup" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group azurerm_vpn_server_configuration_policy_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration_policy_group

vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup(
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
  policy: typing.Union[IResolvable, typing.List[VpnServerConfigurationPolicyGroupPolicy]],
  vpn_server_configuration_id: str,
  id: str = None,
  is_default: typing.Union[bool, IResolvable] = None,
  priority: typing.Union[int, float] = None,
  timeouts: VpnServerConfigurationPolicyGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#name VpnServerConfigurationPolicyGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.policy">policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>]]</code> | policy block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.vpnServerConfigurationId">vpn_server_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#vpn_server_configuration_id VpnServerConfigurationPolicyGroup#vpn_server_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#id VpnServerConfigurationPolicyGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#is_default VpnServerConfigurationPolicyGroup#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#priority VpnServerConfigurationPolicyGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#name VpnServerConfigurationPolicyGroup#name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.policy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>]]

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#policy VpnServerConfigurationPolicyGroup#policy}

---

##### `vpn_server_configuration_id`<sup>Required</sup> <a name="vpn_server_configuration_id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.vpnServerConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#vpn_server_configuration_id VpnServerConfigurationPolicyGroup#vpn_server_configuration_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#id VpnServerConfigurationPolicyGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.isDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#is_default VpnServerConfigurationPolicyGroup#is_default}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#priority VpnServerConfigurationPolicyGroup#priority}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#timeouts VpnServerConfigurationPolicyGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putPolicy">put_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetIsDefault">reset_is_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_policy` <a name="put_policy" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putPolicy"></a>

```python
def put_policy(
  value: typing.Union[IResolvable, typing.List[VpnServerConfigurationPolicyGroupPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#create VpnServerConfigurationPolicyGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#delete VpnServerConfigurationPolicyGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#read VpnServerConfigurationPolicyGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#update VpnServerConfigurationPolicyGroup#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_default` <a name="reset_is_default" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetIsDefault"></a>

```python
def reset_is_default() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VpnServerConfigurationPolicyGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration_policy_group

vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration_policy_group

vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration_policy_group

vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration_policy_group

vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VpnServerConfigurationPolicyGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpnServerConfigurationPolicyGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpnServerConfigurationPolicyGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpnServerConfigurationPolicyGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList">VpnServerConfigurationPolicyGroupPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference">VpnServerConfigurationPolicyGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.policyInput">policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.vpnServerConfigurationIdInput">vpn_server_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.vpnServerConfigurationId">vpn_server_configuration_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.policy"></a>

```python
policy: VpnServerConfigurationPolicyGroupPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList">VpnServerConfigurationPolicyGroupPolicyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.timeouts"></a>

```python
timeouts: VpnServerConfigurationPolicyGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference">VpnServerConfigurationPolicyGroupTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.policyInput"></a>

```python
policy_input: typing.Union[IResolvable, typing.List[VpnServerConfigurationPolicyGroupPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>]]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VpnServerConfigurationPolicyGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a>]

---

##### `vpn_server_configuration_id_input`<sup>Optional</sup> <a name="vpn_server_configuration_id_input" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.vpnServerConfigurationIdInput"></a>

```python
vpn_server_configuration_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpn_server_configuration_id`<sup>Required</sup> <a name="vpn_server_configuration_id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.vpnServerConfigurationId"></a>

```python
vpn_server_configuration_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpnServerConfigurationPolicyGroupConfig <a name="VpnServerConfigurationPolicyGroupConfig" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration_policy_group

vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  policy: typing.Union[IResolvable, typing.List[VpnServerConfigurationPolicyGroupPolicy]],
  vpn_server_configuration_id: str,
  id: str = None,
  is_default: typing.Union[bool, IResolvable] = None,
  priority: typing.Union[int, float] = None,
  timeouts: VpnServerConfigurationPolicyGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#name VpnServerConfigurationPolicyGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.policy">policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>]]</code> | policy block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.vpnServerConfigurationId">vpn_server_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#vpn_server_configuration_id VpnServerConfigurationPolicyGroup#vpn_server_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#id VpnServerConfigurationPolicyGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#is_default VpnServerConfigurationPolicyGroup#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#priority VpnServerConfigurationPolicyGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#name VpnServerConfigurationPolicyGroup#name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.policy"></a>

```python
policy: typing.Union[IResolvable, typing.List[VpnServerConfigurationPolicyGroupPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>]]

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#policy VpnServerConfigurationPolicyGroup#policy}

---

##### `vpn_server_configuration_id`<sup>Required</sup> <a name="vpn_server_configuration_id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.vpnServerConfigurationId"></a>

```python
vpn_server_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#vpn_server_configuration_id VpnServerConfigurationPolicyGroup#vpn_server_configuration_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#id VpnServerConfigurationPolicyGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#is_default VpnServerConfigurationPolicyGroup#is_default}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#priority VpnServerConfigurationPolicyGroup#priority}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.timeouts"></a>

```python
timeouts: VpnServerConfigurationPolicyGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#timeouts VpnServerConfigurationPolicyGroup#timeouts}

---

### VpnServerConfigurationPolicyGroupPolicy <a name="VpnServerConfigurationPolicyGroupPolicy" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration_policy_group

vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy(
  name: str,
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#name VpnServerConfigurationPolicyGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#type VpnServerConfigurationPolicyGroup#type}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#value VpnServerConfigurationPolicyGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#name VpnServerConfigurationPolicyGroup#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#type VpnServerConfigurationPolicyGroup#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#value VpnServerConfigurationPolicyGroup#value}.

---

### VpnServerConfigurationPolicyGroupTimeouts <a name="VpnServerConfigurationPolicyGroupTimeouts" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration_policy_group

vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#create VpnServerConfigurationPolicyGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#delete VpnServerConfigurationPolicyGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#read VpnServerConfigurationPolicyGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#update VpnServerConfigurationPolicyGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#create VpnServerConfigurationPolicyGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#delete VpnServerConfigurationPolicyGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#read VpnServerConfigurationPolicyGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/vpn_server_configuration_policy_group#update VpnServerConfigurationPolicyGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnServerConfigurationPolicyGroupPolicyList <a name="VpnServerConfigurationPolicyGroupPolicyList" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration_policy_group

vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnServerConfigurationPolicyGroupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnServerConfigurationPolicyGroupPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>]]

---


### VpnServerConfigurationPolicyGroupPolicyOutputReference <a name="VpnServerConfigurationPolicyGroupPolicyOutputReference" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration_policy_group

vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpnServerConfigurationPolicyGroupPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>]

---


### VpnServerConfigurationPolicyGroupTimeoutsOutputReference <a name="VpnServerConfigurationPolicyGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration_policy_group

vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpnServerConfigurationPolicyGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a>]

---



