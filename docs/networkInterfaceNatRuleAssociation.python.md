# `networkInterfaceNatRuleAssociation` Submodule <a name="`networkInterfaceNatRuleAssociation` Submodule" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterfaceNatRuleAssociation <a name="NetworkInterfaceNatRuleAssociation" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association azurerm_network_interface_nat_rule_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_nat_rule_association

networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_configuration_name: str,
  nat_rule_id: str,
  network_interface_id: str,
  id: str = None,
  timeouts: NetworkInterfaceNatRuleAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.ipConfigurationName">ip_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#ip_configuration_name NetworkInterfaceNatRuleAssociation#ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.natRuleId">nat_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#nat_rule_id NetworkInterfaceNatRuleAssociation#nat_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#network_interface_id NetworkInterfaceNatRuleAssociation#network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#id NetworkInterfaceNatRuleAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_configuration_name`<sup>Required</sup> <a name="ip_configuration_name" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.ipConfigurationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#ip_configuration_name NetworkInterfaceNatRuleAssociation#ip_configuration_name}.

---

##### `nat_rule_id`<sup>Required</sup> <a name="nat_rule_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.natRuleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#nat_rule_id NetworkInterfaceNatRuleAssociation#nat_rule_id}.

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.networkInterfaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#network_interface_id NetworkInterfaceNatRuleAssociation#network_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#id NetworkInterfaceNatRuleAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#timeouts NetworkInterfaceNatRuleAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#create NetworkInterfaceNatRuleAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#delete NetworkInterfaceNatRuleAssociation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#read NetworkInterfaceNatRuleAssociation#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkInterfaceNatRuleAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_nat_rule_association

networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_nat_rule_association

networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_nat_rule_association

networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_nat_rule_association

networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkInterfaceNatRuleAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkInterfaceNatRuleAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkInterfaceNatRuleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkInterfaceNatRuleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference">NetworkInterfaceNatRuleAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.ipConfigurationNameInput">ip_configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.natRuleIdInput">nat_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.ipConfigurationName">ip_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.natRuleId">nat_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.timeouts"></a>

```python
timeouts: NetworkInterfaceNatRuleAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference">NetworkInterfaceNatRuleAssociationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_configuration_name_input`<sup>Optional</sup> <a name="ip_configuration_name_input" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.ipConfigurationNameInput"></a>

```python
ip_configuration_name_input: str
```

- *Type:* str

---

##### `nat_rule_id_input`<sup>Optional</sup> <a name="nat_rule_id_input" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.natRuleIdInput"></a>

```python
nat_rule_id_input: str
```

- *Type:* str

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkInterfaceNatRuleAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_configuration_name`<sup>Required</sup> <a name="ip_configuration_name" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.ipConfigurationName"></a>

```python
ip_configuration_name: str
```

- *Type:* str

---

##### `nat_rule_id`<sup>Required</sup> <a name="nat_rule_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.natRuleId"></a>

```python
nat_rule_id: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceNatRuleAssociationConfig <a name="NetworkInterfaceNatRuleAssociationConfig" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_nat_rule_association

networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_configuration_name: str,
  nat_rule_id: str,
  network_interface_id: str,
  id: str = None,
  timeouts: NetworkInterfaceNatRuleAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.ipConfigurationName">ip_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#ip_configuration_name NetworkInterfaceNatRuleAssociation#ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.natRuleId">nat_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#nat_rule_id NetworkInterfaceNatRuleAssociation#nat_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#network_interface_id NetworkInterfaceNatRuleAssociation#network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#id NetworkInterfaceNatRuleAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_configuration_name`<sup>Required</sup> <a name="ip_configuration_name" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.ipConfigurationName"></a>

```python
ip_configuration_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#ip_configuration_name NetworkInterfaceNatRuleAssociation#ip_configuration_name}.

---

##### `nat_rule_id`<sup>Required</sup> <a name="nat_rule_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.natRuleId"></a>

```python
nat_rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#nat_rule_id NetworkInterfaceNatRuleAssociation#nat_rule_id}.

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#network_interface_id NetworkInterfaceNatRuleAssociation#network_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#id NetworkInterfaceNatRuleAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationConfig.property.timeouts"></a>

```python
timeouts: NetworkInterfaceNatRuleAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#timeouts NetworkInterfaceNatRuleAssociation#timeouts}

---

### NetworkInterfaceNatRuleAssociationTimeouts <a name="NetworkInterfaceNatRuleAssociationTimeouts" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_nat_rule_association

networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#create NetworkInterfaceNatRuleAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#delete NetworkInterfaceNatRuleAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#read NetworkInterfaceNatRuleAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#create NetworkInterfaceNatRuleAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#delete NetworkInterfaceNatRuleAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.0/docs/resources/network_interface_nat_rule_association#read NetworkInterfaceNatRuleAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceNatRuleAssociationTimeoutsOutputReference <a name="NetworkInterfaceNatRuleAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_nat_rule_association

networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkInterfaceNatRuleAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterfaceNatRuleAssociation.NetworkInterfaceNatRuleAssociationTimeouts">NetworkInterfaceNatRuleAssociationTimeouts</a>]

---



