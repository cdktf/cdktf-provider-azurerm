# `azurerm_data_share_dataset_data_lake_gen2`

Refer to the Terraform Registory for docs: [`azurerm_data_share_dataset_data_lake_gen2`](https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2).

# `dataShareDatasetDataLakeGen2` Submodule <a name="`dataShareDatasetDataLakeGen2` Submodule" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataShareDatasetDataLakeGen2 <a name="DataShareDatasetDataLakeGen2" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2 azurerm_data_share_dataset_data_lake_gen2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_data_lake_gen2

dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  file_system_name: str,
  name: str,
  share_id: str,
  storage_account_id: str,
  file_path: str = None,
  folder_path: str = None,
  id: str = None,
  timeouts: DataShareDatasetDataLakeGen2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.fileSystemName">file_system_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#file_system_name DataShareDatasetDataLakeGen2#file_system_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#name DataShareDatasetDataLakeGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.shareId">share_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#share_id DataShareDatasetDataLakeGen2#share_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#storage_account_id DataShareDatasetDataLakeGen2#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.filePath">file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#file_path DataShareDatasetDataLakeGen2#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.folderPath">folder_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#folder_path DataShareDatasetDataLakeGen2#folder_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#id DataShareDatasetDataLakeGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts">DataShareDatasetDataLakeGen2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `file_system_name`<sup>Required</sup> <a name="file_system_name" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.fileSystemName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#file_system_name DataShareDatasetDataLakeGen2#file_system_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#name DataShareDatasetDataLakeGen2#name}.

---

##### `share_id`<sup>Required</sup> <a name="share_id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.shareId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#share_id DataShareDatasetDataLakeGen2#share_id}.

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#storage_account_id DataShareDatasetDataLakeGen2#storage_account_id}.

---

##### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.filePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#file_path DataShareDatasetDataLakeGen2#file_path}.

---

##### `folder_path`<sup>Optional</sup> <a name="folder_path" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.folderPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#folder_path DataShareDatasetDataLakeGen2#folder_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#id DataShareDatasetDataLakeGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts">DataShareDatasetDataLakeGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#timeouts DataShareDatasetDataLakeGen2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetFilePath">reset_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetFolderPath">reset_folder_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#create DataShareDatasetDataLakeGen2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#delete DataShareDatasetDataLakeGen2#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#read DataShareDatasetDataLakeGen2#read}.

---

##### `reset_file_path` <a name="reset_file_path" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetFilePath"></a>

```python
def reset_file_path() -> None
```

##### `reset_folder_path` <a name="reset_folder_path" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetFolderPath"></a>

```python
def reset_folder_path() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_data_lake_gen2

dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_data_lake_gen2

dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_data_lake_gen2

dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference">DataShareDatasetDataLakeGen2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.filePathInput">file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fileSystemNameInput">file_system_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.folderPathInput">folder_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.shareIdInput">share_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts">DataShareDatasetDataLakeGen2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fileSystemName">file_system_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.folderPath">folder_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.shareId">share_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.timeouts"></a>

```python
timeouts: DataShareDatasetDataLakeGen2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference">DataShareDatasetDataLakeGen2TimeoutsOutputReference</a>

---

##### `file_path_input`<sup>Optional</sup> <a name="file_path_input" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.filePathInput"></a>

```python
file_path_input: str
```

- *Type:* str

---

##### `file_system_name_input`<sup>Optional</sup> <a name="file_system_name_input" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fileSystemNameInput"></a>

```python
file_system_name_input: str
```

- *Type:* str

---

##### `folder_path_input`<sup>Optional</sup> <a name="folder_path_input" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.folderPathInput"></a>

```python
folder_path_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `share_id_input`<sup>Optional</sup> <a name="share_id_input" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.shareIdInput"></a>

```python
share_id_input: str
```

- *Type:* str

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataShareDatasetDataLakeGen2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts">DataShareDatasetDataLakeGen2Timeouts</a>]

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `file_system_name`<sup>Required</sup> <a name="file_system_name" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fileSystemName"></a>

```python
file_system_name: str
```

- *Type:* str

---

##### `folder_path`<sup>Required</sup> <a name="folder_path" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.folderPath"></a>

```python
folder_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `share_id`<sup>Required</sup> <a name="share_id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.shareId"></a>

```python
share_id: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataShareDatasetDataLakeGen2Config <a name="DataShareDatasetDataLakeGen2Config" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_data_lake_gen2

dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  file_system_name: str,
  name: str,
  share_id: str,
  storage_account_id: str,
  file_path: str = None,
  folder_path: str = None,
  id: str = None,
  timeouts: DataShareDatasetDataLakeGen2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.fileSystemName">file_system_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#file_system_name DataShareDatasetDataLakeGen2#file_system_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#name DataShareDatasetDataLakeGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.shareId">share_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#share_id DataShareDatasetDataLakeGen2#share_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#storage_account_id DataShareDatasetDataLakeGen2#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.filePath">file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#file_path DataShareDatasetDataLakeGen2#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.folderPath">folder_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#folder_path DataShareDatasetDataLakeGen2#folder_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#id DataShareDatasetDataLakeGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts">DataShareDatasetDataLakeGen2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `file_system_name`<sup>Required</sup> <a name="file_system_name" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.fileSystemName"></a>

```python
file_system_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#file_system_name DataShareDatasetDataLakeGen2#file_system_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#name DataShareDatasetDataLakeGen2#name}.

---

##### `share_id`<sup>Required</sup> <a name="share_id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.shareId"></a>

```python
share_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#share_id DataShareDatasetDataLakeGen2#share_id}.

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#storage_account_id DataShareDatasetDataLakeGen2#storage_account_id}.

---

##### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#file_path DataShareDatasetDataLakeGen2#file_path}.

---

##### `folder_path`<sup>Optional</sup> <a name="folder_path" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.folderPath"></a>

```python
folder_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#folder_path DataShareDatasetDataLakeGen2#folder_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#id DataShareDatasetDataLakeGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.timeouts"></a>

```python
timeouts: DataShareDatasetDataLakeGen2Timeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts">DataShareDatasetDataLakeGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#timeouts DataShareDatasetDataLakeGen2#timeouts}

---

### DataShareDatasetDataLakeGen2Timeouts <a name="DataShareDatasetDataLakeGen2Timeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_data_lake_gen2

dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#create DataShareDatasetDataLakeGen2#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#delete DataShareDatasetDataLakeGen2#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#read DataShareDatasetDataLakeGen2#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#create DataShareDatasetDataLakeGen2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#delete DataShareDatasetDataLakeGen2#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/data_share_dataset_data_lake_gen2#read DataShareDatasetDataLakeGen2#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataShareDatasetDataLakeGen2TimeoutsOutputReference <a name="DataShareDatasetDataLakeGen2TimeoutsOutputReference" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_data_lake_gen2

dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts">DataShareDatasetDataLakeGen2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataShareDatasetDataLakeGen2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts">DataShareDatasetDataLakeGen2Timeouts</a>]

---



