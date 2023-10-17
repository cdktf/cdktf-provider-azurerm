# `azurerm_storage_data_lake_gen2_filesystem`

Refer to the Terraform Registory for docs: [`azurerm_storage_data_lake_gen2_filesystem`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem).

# `storageDataLakeGen2Filesystem` Submodule <a name="`storageDataLakeGen2Filesystem` Submodule" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDataLakeGen2Filesystem <a name="StorageDataLakeGen2Filesystem" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem azurerm_storage_data_lake_gen2_filesystem}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_data_lake_gen2_filesystem

storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem(
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
  storage_account_id: str,
  ace: typing.Union[IResolvable, typing.List[StorageDataLakeGen2FilesystemAce]] = None,
  group: str = None,
  id: str = None,
  owner: str = None,
  properties: typing.Mapping[str] = None,
  timeouts: StorageDataLakeGen2FilesystemTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#name StorageDataLakeGen2Filesystem#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#storage_account_id StorageDataLakeGen2Filesystem#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.ace">ace</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>]]</code> | ace block. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#group StorageDataLakeGen2Filesystem#group}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#id StorageDataLakeGen2Filesystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#owner StorageDataLakeGen2Filesystem#owner}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#properties StorageDataLakeGen2Filesystem#properties}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#name StorageDataLakeGen2Filesystem#name}.

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#storage_account_id StorageDataLakeGen2Filesystem#storage_account_id}.

---

##### `ace`<sup>Optional</sup> <a name="ace" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.ace"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>]]

ace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#ace StorageDataLakeGen2Filesystem#ace}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.group"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#group StorageDataLakeGen2Filesystem#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#id StorageDataLakeGen2Filesystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#owner StorageDataLakeGen2Filesystem#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#properties StorageDataLakeGen2Filesystem#properties}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#timeouts StorageDataLakeGen2Filesystem#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putAce">put_ace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetAce">reset_ace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_ace` <a name="put_ace" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putAce"></a>

```python
def put_ace(
  value: typing.Union[IResolvable, typing.List[StorageDataLakeGen2FilesystemAce]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putAce.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#create StorageDataLakeGen2Filesystem#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#delete StorageDataLakeGen2Filesystem#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#read StorageDataLakeGen2Filesystem#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#update StorageDataLakeGen2Filesystem#update}.

---

##### `reset_ace` <a name="reset_ace" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetAce"></a>

```python
def reset_ace() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StorageDataLakeGen2Filesystem resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_data_lake_gen2_filesystem

storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_data_lake_gen2_filesystem

storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_data_lake_gen2_filesystem

storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_data_lake_gen2_filesystem

storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StorageDataLakeGen2Filesystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageDataLakeGen2Filesystem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageDataLakeGen2Filesystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageDataLakeGen2Filesystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.ace">ace</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList">StorageDataLakeGen2FilesystemAceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference">StorageDataLakeGen2FilesystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.aceInput">ace_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ace`<sup>Required</sup> <a name="ace" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.ace"></a>

```python
ace: StorageDataLakeGen2FilesystemAceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList">StorageDataLakeGen2FilesystemAceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.timeouts"></a>

```python
timeouts: StorageDataLakeGen2FilesystemTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference">StorageDataLakeGen2FilesystemTimeoutsOutputReference</a>

---

##### `ace_input`<sup>Optional</sup> <a name="ace_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.aceInput"></a>

```python
ace_input: typing.Union[IResolvable, typing.List[StorageDataLakeGen2FilesystemAce]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>]]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StorageDataLakeGen2FilesystemTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a>]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDataLakeGen2FilesystemAce <a name="StorageDataLakeGen2FilesystemAce" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_data_lake_gen2_filesystem

storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce(
  permissions: str,
  type: str,
  id: str = None,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.permissions">permissions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#permissions StorageDataLakeGen2Filesystem#permissions}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#type StorageDataLakeGen2Filesystem#type}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#id StorageDataLakeGen2Filesystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#scope StorageDataLakeGen2Filesystem#scope}. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#permissions StorageDataLakeGen2Filesystem#permissions}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#type StorageDataLakeGen2Filesystem#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#id StorageDataLakeGen2Filesystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#scope StorageDataLakeGen2Filesystem#scope}.

---

### StorageDataLakeGen2FilesystemConfig <a name="StorageDataLakeGen2FilesystemConfig" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_data_lake_gen2_filesystem

storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  storage_account_id: str,
  ace: typing.Union[IResolvable, typing.List[StorageDataLakeGen2FilesystemAce]] = None,
  group: str = None,
  id: str = None,
  owner: str = None,
  properties: typing.Mapping[str] = None,
  timeouts: StorageDataLakeGen2FilesystemTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#name StorageDataLakeGen2Filesystem#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#storage_account_id StorageDataLakeGen2Filesystem#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.ace">ace</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>]]</code> | ace block. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#group StorageDataLakeGen2Filesystem#group}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#id StorageDataLakeGen2Filesystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#owner StorageDataLakeGen2Filesystem#owner}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#properties StorageDataLakeGen2Filesystem#properties}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#name StorageDataLakeGen2Filesystem#name}.

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#storage_account_id StorageDataLakeGen2Filesystem#storage_account_id}.

---

##### `ace`<sup>Optional</sup> <a name="ace" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.ace"></a>

```python
ace: typing.Union[IResolvable, typing.List[StorageDataLakeGen2FilesystemAce]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>]]

ace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#ace StorageDataLakeGen2Filesystem#ace}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.group"></a>

```python
group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#group StorageDataLakeGen2Filesystem#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#id StorageDataLakeGen2Filesystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#owner StorageDataLakeGen2Filesystem#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#properties StorageDataLakeGen2Filesystem#properties}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.timeouts"></a>

```python
timeouts: StorageDataLakeGen2FilesystemTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#timeouts StorageDataLakeGen2Filesystem#timeouts}

---

### StorageDataLakeGen2FilesystemTimeouts <a name="StorageDataLakeGen2FilesystemTimeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_data_lake_gen2_filesystem

storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#create StorageDataLakeGen2Filesystem#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#delete StorageDataLakeGen2Filesystem#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#read StorageDataLakeGen2Filesystem#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#update StorageDataLakeGen2Filesystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#create StorageDataLakeGen2Filesystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#delete StorageDataLakeGen2Filesystem#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#read StorageDataLakeGen2Filesystem#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_data_lake_gen2_filesystem#update StorageDataLakeGen2Filesystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageDataLakeGen2FilesystemAceList <a name="StorageDataLakeGen2FilesystemAceList" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_data_lake_gen2_filesystem

storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageDataLakeGen2FilesystemAceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageDataLakeGen2FilesystemAce]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>]]

---


### StorageDataLakeGen2FilesystemAceOutputReference <a name="StorageDataLakeGen2FilesystemAceOutputReference" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_data_lake_gen2_filesystem

storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageDataLakeGen2FilesystemAce]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>]

---


### StorageDataLakeGen2FilesystemTimeoutsOutputReference <a name="StorageDataLakeGen2FilesystemTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_data_lake_gen2_filesystem

storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageDataLakeGen2FilesystemTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a>]

---



