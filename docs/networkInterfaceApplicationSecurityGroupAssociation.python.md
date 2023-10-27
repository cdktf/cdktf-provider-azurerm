# `azurerm_network_interface_application_security_group_association`

Refer to the Terraform Registory for docs: [`azurerm_network_interface_application_security_group_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association).

# `networkInterfaceApplicationSecurityGroupAssociation` Submodule <a name="`networkInterfaceApplicationSecurityGroupAssociation` Submodule" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterfaceApplicationSecurityGroupAssociation <a name="NetworkInterfaceApplicationSecurityGroupAssociation" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association azurerm_network_interface_application_security_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_security_group_association

networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_security_group_id: str,
  network_interface_id: str,
  id: str = None,
  timeouts: NetworkInterfaceApplicationSecurityGroupAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.applicationSecurityGroupId">application_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#application_security_group_id NetworkInterfaceApplicationSecurityGroupAssociation#application_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#network_interface_id NetworkInterfaceApplicationSecurityGroupAssociation#network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#id NetworkInterfaceApplicationSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_security_group_id`<sup>Required</sup> <a name="application_security_group_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.applicationSecurityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#application_security_group_id NetworkInterfaceApplicationSecurityGroupAssociation#application_security_group_id}.

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.networkInterfaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#network_interface_id NetworkInterfaceApplicationSecurityGroupAssociation#network_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#id NetworkInterfaceApplicationSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#timeouts NetworkInterfaceApplicationSecurityGroupAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#create NetworkInterfaceApplicationSecurityGroupAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#delete NetworkInterfaceApplicationSecurityGroupAssociation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#read NetworkInterfaceApplicationSecurityGroupAssociation#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#update NetworkInterfaceApplicationSecurityGroupAssociation#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkInterfaceApplicationSecurityGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_security_group_association

networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_security_group_association

networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_security_group_association

networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_security_group_association

networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkInterfaceApplicationSecurityGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkInterfaceApplicationSecurityGroupAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkInterfaceApplicationSecurityGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkInterfaceApplicationSecurityGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference">NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.applicationSecurityGroupIdInput">application_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.applicationSecurityGroupId">application_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.timeouts"></a>

```python
timeouts: NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference">NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference</a>

---

##### `application_security_group_id_input`<sup>Optional</sup> <a name="application_security_group_id_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.applicationSecurityGroupIdInput"></a>

```python
application_security_group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkInterfaceApplicationSecurityGroupAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a>]

---

##### `application_security_group_id`<sup>Required</sup> <a name="application_security_group_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.applicationSecurityGroupId"></a>

```python
application_security_group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceApplicationSecurityGroupAssociationConfig <a name="NetworkInterfaceApplicationSecurityGroupAssociationConfig" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_security_group_association

networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_security_group_id: str,
  network_interface_id: str,
  id: str = None,
  timeouts: NetworkInterfaceApplicationSecurityGroupAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.applicationSecurityGroupId">application_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#application_security_group_id NetworkInterfaceApplicationSecurityGroupAssociation#application_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#network_interface_id NetworkInterfaceApplicationSecurityGroupAssociation#network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#id NetworkInterfaceApplicationSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_security_group_id`<sup>Required</sup> <a name="application_security_group_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.applicationSecurityGroupId"></a>

```python
application_security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#application_security_group_id NetworkInterfaceApplicationSecurityGroupAssociation#application_security_group_id}.

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#network_interface_id NetworkInterfaceApplicationSecurityGroupAssociation#network_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#id NetworkInterfaceApplicationSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.timeouts"></a>

```python
timeouts: NetworkInterfaceApplicationSecurityGroupAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#timeouts NetworkInterfaceApplicationSecurityGroupAssociation#timeouts}

---

### NetworkInterfaceApplicationSecurityGroupAssociationTimeouts <a name="NetworkInterfaceApplicationSecurityGroupAssociationTimeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_security_group_association

networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#create NetworkInterfaceApplicationSecurityGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#delete NetworkInterfaceApplicationSecurityGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#read NetworkInterfaceApplicationSecurityGroupAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#update NetworkInterfaceApplicationSecurityGroupAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#create NetworkInterfaceApplicationSecurityGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#delete NetworkInterfaceApplicationSecurityGroupAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#read NetworkInterfaceApplicationSecurityGroupAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/network_interface_application_security_group_association#update NetworkInterfaceApplicationSecurityGroupAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference <a name="NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_security_group_association

networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkInterfaceApplicationSecurityGroupAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a>]

---



