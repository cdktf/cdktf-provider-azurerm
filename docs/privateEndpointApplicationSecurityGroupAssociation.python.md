# `privateEndpointApplicationSecurityGroupAssociation` Submodule <a name="`privateEndpointApplicationSecurityGroupAssociation` Submodule" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateEndpointApplicationSecurityGroupAssociation <a name="PrivateEndpointApplicationSecurityGroupAssociation" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association azurerm_private_endpoint_application_security_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_endpoint_application_security_group_association

privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation(
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
  private_endpoint_id: str,
  id: str = None,
  timeouts: PrivateEndpointApplicationSecurityGroupAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.applicationSecurityGroupId">application_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#application_security_group_id PrivateEndpointApplicationSecurityGroupAssociation#application_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#private_endpoint_id PrivateEndpointApplicationSecurityGroupAssociation#private_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#id PrivateEndpointApplicationSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_security_group_id`<sup>Required</sup> <a name="application_security_group_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.applicationSecurityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#application_security_group_id PrivateEndpointApplicationSecurityGroupAssociation#application_security_group_id}.

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.privateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#private_endpoint_id PrivateEndpointApplicationSecurityGroupAssociation#private_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#id PrivateEndpointApplicationSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#timeouts PrivateEndpointApplicationSecurityGroupAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#create PrivateEndpointApplicationSecurityGroupAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#delete PrivateEndpointApplicationSecurityGroupAssociation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#read PrivateEndpointApplicationSecurityGroupAssociation#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PrivateEndpointApplicationSecurityGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import private_endpoint_application_security_group_association

privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import private_endpoint_application_security_group_association

privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import private_endpoint_application_security_group_association

privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import private_endpoint_application_security_group_association

privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PrivateEndpointApplicationSecurityGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrivateEndpointApplicationSecurityGroupAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrivateEndpointApplicationSecurityGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivateEndpointApplicationSecurityGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference">PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupIdInput">application_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointIdInput">private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupId">application_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeouts"></a>

```python
timeouts: PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference">PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference</a>

---

##### `application_security_group_id_input`<sup>Optional</sup> <a name="application_security_group_id_input" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupIdInput"></a>

```python
application_security_group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `private_endpoint_id_input`<sup>Optional</sup> <a name="private_endpoint_id_input" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointIdInput"></a>

```python
private_endpoint_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PrivateEndpointApplicationSecurityGroupAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>]

---

##### `application_security_group_id`<sup>Required</sup> <a name="application_security_group_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupId"></a>

```python
application_security_group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateEndpointApplicationSecurityGroupAssociationConfig <a name="PrivateEndpointApplicationSecurityGroupAssociationConfig" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_endpoint_application_security_group_association

privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_security_group_id: str,
  private_endpoint_id: str,
  id: str = None,
  timeouts: PrivateEndpointApplicationSecurityGroupAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.applicationSecurityGroupId">application_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#application_security_group_id PrivateEndpointApplicationSecurityGroupAssociation#application_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#private_endpoint_id PrivateEndpointApplicationSecurityGroupAssociation#private_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#id PrivateEndpointApplicationSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_security_group_id`<sup>Required</sup> <a name="application_security_group_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.applicationSecurityGroupId"></a>

```python
application_security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#application_security_group_id PrivateEndpointApplicationSecurityGroupAssociation#application_security_group_id}.

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#private_endpoint_id PrivateEndpointApplicationSecurityGroupAssociation#private_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#id PrivateEndpointApplicationSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.timeouts"></a>

```python
timeouts: PrivateEndpointApplicationSecurityGroupAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#timeouts PrivateEndpointApplicationSecurityGroupAssociation#timeouts}

---

### PrivateEndpointApplicationSecurityGroupAssociationTimeouts <a name="PrivateEndpointApplicationSecurityGroupAssociationTimeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_endpoint_application_security_group_association

privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#create PrivateEndpointApplicationSecurityGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#delete PrivateEndpointApplicationSecurityGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#read PrivateEndpointApplicationSecurityGroupAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#create PrivateEndpointApplicationSecurityGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#delete PrivateEndpointApplicationSecurityGroupAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/private_endpoint_application_security_group_association#read PrivateEndpointApplicationSecurityGroupAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference <a name="PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_endpoint_application_security_group_association

privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrivateEndpointApplicationSecurityGroupAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>]

---



