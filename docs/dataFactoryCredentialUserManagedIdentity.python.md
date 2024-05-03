# `dataFactoryCredentialUserManagedIdentity` Submodule <a name="`dataFactoryCredentialUserManagedIdentity` Submodule" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryCredentialUserManagedIdentity <a name="DataFactoryCredentialUserManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity azurerm_data_factory_credential_user_managed_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_credential_user_managed_identity

dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  identity_id: str,
  name: str,
  annotations: typing.List[str] = None,
  description: str = None,
  id: str = None,
  timeouts: DataFactoryCredentialUserManagedIdentityTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | The resource ID of the parent Data Factory. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.identityId">identity_id</a></code> | <code>str</code> | The resource ID of the User Assigned Managed Identity. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.name">name</a></code> | <code>str</code> | The desired name of the credential resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | (Optional) List of string annotations. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.description">description</a></code> | <code>str</code> | (Optional) Short text description. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#id DataFactoryCredentialUserManagedIdentity#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

The resource ID of the parent Data Factory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#data_factory_id DataFactoryCredentialUserManagedIdentity#data_factory_id}

---

##### `identity_id`<sup>Required</sup> <a name="identity_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.identityId"></a>

- *Type:* str

The resource ID of the User Assigned Managed Identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#identity_id DataFactoryCredentialUserManagedIdentity#identity_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.name"></a>

- *Type:* str

The desired name of the credential resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#name DataFactoryCredentialUserManagedIdentity#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

(Optional) List of string annotations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#annotations DataFactoryCredentialUserManagedIdentity#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.description"></a>

- *Type:* str

(Optional) Short text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#description DataFactoryCredentialUserManagedIdentity#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#id DataFactoryCredentialUserManagedIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#timeouts DataFactoryCredentialUserManagedIdentity#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#create DataFactoryCredentialUserManagedIdentity#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#delete DataFactoryCredentialUserManagedIdentity#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#read DataFactoryCredentialUserManagedIdentity#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#update DataFactoryCredentialUserManagedIdentity#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataFactoryCredentialUserManagedIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_credential_user_managed_identity

dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_credential_user_managed_identity

dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_credential_user_managed_identity

dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_credential_user_managed_identity

dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataFactoryCredentialUserManagedIdentity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataFactoryCredentialUserManagedIdentity to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataFactoryCredentialUserManagedIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryCredentialUserManagedIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference">DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.identityIdInput">identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.identityId">identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.timeouts"></a>

```python
timeouts: DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference">DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `identity_id_input`<sup>Optional</sup> <a name="identity_id_input" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.identityIdInput"></a>

```python
identity_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryCredentialUserManagedIdentityTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_id`<sup>Required</sup> <a name="identity_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryCredentialUserManagedIdentityConfig <a name="DataFactoryCredentialUserManagedIdentityConfig" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_credential_user_managed_identity

dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  identity_id: str,
  name: str,
  annotations: typing.List[str] = None,
  description: str = None,
  id: str = None,
  timeouts: DataFactoryCredentialUserManagedIdentityTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | The resource ID of the parent Data Factory. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.identityId">identity_id</a></code> | <code>str</code> | The resource ID of the User Assigned Managed Identity. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.name">name</a></code> | <code>str</code> | The desired name of the credential resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | (Optional) List of string annotations. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.description">description</a></code> | <code>str</code> | (Optional) Short text description. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#id DataFactoryCredentialUserManagedIdentity#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

The resource ID of the parent Data Factory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#data_factory_id DataFactoryCredentialUserManagedIdentity#data_factory_id}

---

##### `identity_id`<sup>Required</sup> <a name="identity_id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

The resource ID of the User Assigned Managed Identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#identity_id DataFactoryCredentialUserManagedIdentity#identity_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The desired name of the credential resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#name DataFactoryCredentialUserManagedIdentity#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

(Optional) List of string annotations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#annotations DataFactoryCredentialUserManagedIdentity#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.description"></a>

```python
description: str
```

- *Type:* str

(Optional) Short text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#description DataFactoryCredentialUserManagedIdentity#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#id DataFactoryCredentialUserManagedIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.timeouts"></a>

```python
timeouts: DataFactoryCredentialUserManagedIdentityTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#timeouts DataFactoryCredentialUserManagedIdentity#timeouts}

---

### DataFactoryCredentialUserManagedIdentityTimeouts <a name="DataFactoryCredentialUserManagedIdentityTimeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_credential_user_managed_identity

dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#create DataFactoryCredentialUserManagedIdentity#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#delete DataFactoryCredentialUserManagedIdentity#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#read DataFactoryCredentialUserManagedIdentity#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#update DataFactoryCredentialUserManagedIdentity#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#create DataFactoryCredentialUserManagedIdentity#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#delete DataFactoryCredentialUserManagedIdentity#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#read DataFactoryCredentialUserManagedIdentity#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_credential_user_managed_identity#update DataFactoryCredentialUserManagedIdentity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference <a name="DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_credential_user_managed_identity

dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryCredentialUserManagedIdentityTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a>]

---



