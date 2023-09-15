# `azurerm_data_share_dataset_blob_storage`

Refer to the Terraform Registory for docs: [`azurerm_data_share_dataset_blob_storage`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage).

# `dataShareDatasetBlobStorage` Submodule <a name="`dataShareDatasetBlobStorage` Submodule" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataShareDatasetBlobStorage <a name="DataShareDatasetBlobStorage" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage azurerm_data_share_dataset_blob_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_blob_storage

dataShareDatasetBlobStorage.DataShareDatasetBlobStorage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_name: str,
  data_share_id: str,
  name: str,
  storage_account: DataShareDatasetBlobStorageStorageAccount,
  file_path: str = None,
  folder_path: str = None,
  id: str = None,
  timeouts: DataShareDatasetBlobStorageTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#container_name DataShareDatasetBlobStorage#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.dataShareId">data_share_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#data_share_id DataShareDatasetBlobStorage#data_share_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.storageAccount">storage_account</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.filePath">file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#file_path DataShareDatasetBlobStorage#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.folderPath">folder_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#folder_path DataShareDatasetBlobStorage#folder_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#id DataShareDatasetBlobStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.containerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#container_name DataShareDatasetBlobStorage#container_name}.

---

##### `data_share_id`<sup>Required</sup> <a name="data_share_id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.dataShareId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#data_share_id DataShareDatasetBlobStorage#data_share_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}.

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.storageAccount"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#storage_account DataShareDatasetBlobStorage#storage_account}

---

##### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.filePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#file_path DataShareDatasetBlobStorage#file_path}.

---

##### `folder_path`<sup>Optional</sup> <a name="folder_path" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.folderPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#folder_path DataShareDatasetBlobStorage#folder_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#id DataShareDatasetBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#timeouts DataShareDatasetBlobStorage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putStorageAccount">put_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetFilePath">reset_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetFolderPath">reset_folder_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_storage_account` <a name="put_storage_account" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putStorageAccount"></a>

```python
def put_storage_account(
  name: str,
  resource_group_name: str,
  subscription_id: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putStorageAccount.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}.

---

###### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putStorageAccount.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#resource_group_name DataShareDatasetBlobStorage#resource_group_name}.

---

###### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putStorageAccount.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#subscription_id DataShareDatasetBlobStorage#subscription_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#create DataShareDatasetBlobStorage#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#delete DataShareDatasetBlobStorage#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#read DataShareDatasetBlobStorage#read}.

---

##### `reset_file_path` <a name="reset_file_path" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetFilePath"></a>

```python
def reset_file_path() -> None
```

##### `reset_folder_path` <a name="reset_folder_path" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetFolderPath"></a>

```python
def reset_folder_path() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_blob_storage

dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_blob_storage

dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_blob_storage

dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.storageAccount">storage_account</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference">DataShareDatasetBlobStorageStorageAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference">DataShareDatasetBlobStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dataShareIdInput">data_share_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.filePathInput">file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.folderPathInput">folder_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.storageAccountInput">storage_account_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dataShareId">data_share_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.folderPath">folder_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.storageAccount"></a>

```python
storage_account: DataShareDatasetBlobStorageStorageAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference">DataShareDatasetBlobStorageStorageAccountOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.timeouts"></a>

```python
timeouts: DataShareDatasetBlobStorageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference">DataShareDatasetBlobStorageTimeoutsOutputReference</a>

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `data_share_id_input`<sup>Optional</sup> <a name="data_share_id_input" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dataShareIdInput"></a>

```python
data_share_id_input: str
```

- *Type:* str

---

##### `file_path_input`<sup>Optional</sup> <a name="file_path_input" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.filePathInput"></a>

```python
file_path_input: str
```

- *Type:* str

---

##### `folder_path_input`<sup>Optional</sup> <a name="folder_path_input" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.folderPathInput"></a>

```python
folder_path_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.storageAccountInput"></a>

```python
storage_account_input: DataShareDatasetBlobStorageStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataShareDatasetBlobStorageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a>]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `data_share_id`<sup>Required</sup> <a name="data_share_id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dataShareId"></a>

```python
data_share_id: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `folder_path`<sup>Required</sup> <a name="folder_path" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.folderPath"></a>

```python
folder_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataShareDatasetBlobStorageConfig <a name="DataShareDatasetBlobStorageConfig" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_blob_storage

dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_name: str,
  data_share_id: str,
  name: str,
  storage_account: DataShareDatasetBlobStorageStorageAccount,
  file_path: str = None,
  folder_path: str = None,
  id: str = None,
  timeouts: DataShareDatasetBlobStorageTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#container_name DataShareDatasetBlobStorage#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.dataShareId">data_share_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#data_share_id DataShareDatasetBlobStorage#data_share_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.storageAccount">storage_account</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.filePath">file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#file_path DataShareDatasetBlobStorage#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.folderPath">folder_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#folder_path DataShareDatasetBlobStorage#folder_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#id DataShareDatasetBlobStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#container_name DataShareDatasetBlobStorage#container_name}.

---

##### `data_share_id`<sup>Required</sup> <a name="data_share_id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.dataShareId"></a>

```python
data_share_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#data_share_id DataShareDatasetBlobStorage#data_share_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}.

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.storageAccount"></a>

```python
storage_account: DataShareDatasetBlobStorageStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#storage_account DataShareDatasetBlobStorage#storage_account}

---

##### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#file_path DataShareDatasetBlobStorage#file_path}.

---

##### `folder_path`<sup>Optional</sup> <a name="folder_path" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.folderPath"></a>

```python
folder_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#folder_path DataShareDatasetBlobStorage#folder_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#id DataShareDatasetBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.timeouts"></a>

```python
timeouts: DataShareDatasetBlobStorageTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#timeouts DataShareDatasetBlobStorage#timeouts}

---

### DataShareDatasetBlobStorageStorageAccount <a name="DataShareDatasetBlobStorageStorageAccount" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_blob_storage

dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount(
  name: str,
  resource_group_name: str,
  subscription_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#resource_group_name DataShareDatasetBlobStorage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#subscription_id DataShareDatasetBlobStorage#subscription_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#resource_group_name DataShareDatasetBlobStorage#resource_group_name}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#subscription_id DataShareDatasetBlobStorage#subscription_id}.

---

### DataShareDatasetBlobStorageTimeouts <a name="DataShareDatasetBlobStorageTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_blob_storage

dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#create DataShareDatasetBlobStorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#delete DataShareDatasetBlobStorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#read DataShareDatasetBlobStorage#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#create DataShareDatasetBlobStorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#delete DataShareDatasetBlobStorage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_share_dataset_blob_storage#read DataShareDatasetBlobStorage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataShareDatasetBlobStorageStorageAccountOutputReference <a name="DataShareDatasetBlobStorageStorageAccountOutputReference" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_blob_storage

dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.internalValue"></a>

```python
internal_value: DataShareDatasetBlobStorageStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a>

---


### DataShareDatasetBlobStorageTimeoutsOutputReference <a name="DataShareDatasetBlobStorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_share_dataset_blob_storage

dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataShareDatasetBlobStorageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a>]

---



