# `machineLearningDatastoreBlobstorage` Submodule <a name="`machineLearningDatastoreBlobstorage` Submodule" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningDatastoreBlobstorage <a name="MachineLearningDatastoreBlobstorage" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage azurerm_machine_learning_datastore_blobstorage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_blobstorage

machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage(
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
  storage_container_id: str,
  workspace_id: str,
  account_key: str = None,
  description: str = None,
  id: str = None,
  is_default: typing.Union[bool, IResolvable] = None,
  service_data_auth_identity: str = None,
  shared_access_signature: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MachineLearningDatastoreBlobstorageTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#name MachineLearningDatastoreBlobstorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.storageContainerId">storage_container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#storage_container_id MachineLearningDatastoreBlobstorage#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#workspace_id MachineLearningDatastoreBlobstorage#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.accountKey">account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#account_key MachineLearningDatastoreBlobstorage#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#description MachineLearningDatastoreBlobstorage#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#id MachineLearningDatastoreBlobstorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#is_default MachineLearningDatastoreBlobstorage#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.serviceDataAuthIdentity">service_data_auth_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#service_data_auth_identity MachineLearningDatastoreBlobstorage#service_data_auth_identity}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.sharedAccessSignature">shared_access_signature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#shared_access_signature MachineLearningDatastoreBlobstorage#shared_access_signature}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#tags MachineLearningDatastoreBlobstorage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#name MachineLearningDatastoreBlobstorage#name}.

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.storageContainerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#storage_container_id MachineLearningDatastoreBlobstorage#storage_container_id}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#workspace_id MachineLearningDatastoreBlobstorage#workspace_id}.

---

##### `account_key`<sup>Optional</sup> <a name="account_key" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.accountKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#account_key MachineLearningDatastoreBlobstorage#account_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#description MachineLearningDatastoreBlobstorage#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#id MachineLearningDatastoreBlobstorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.isDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#is_default MachineLearningDatastoreBlobstorage#is_default}.

---

##### `service_data_auth_identity`<sup>Optional</sup> <a name="service_data_auth_identity" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.serviceDataAuthIdentity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#service_data_auth_identity MachineLearningDatastoreBlobstorage#service_data_auth_identity}.

---

##### `shared_access_signature`<sup>Optional</sup> <a name="shared_access_signature" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.sharedAccessSignature"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#shared_access_signature MachineLearningDatastoreBlobstorage#shared_access_signature}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#tags MachineLearningDatastoreBlobstorage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#timeouts MachineLearningDatastoreBlobstorage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetAccountKey">reset_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetIsDefault">reset_is_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetServiceDataAuthIdentity">reset_service_data_auth_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetSharedAccessSignature">reset_shared_access_signature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#create MachineLearningDatastoreBlobstorage#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#delete MachineLearningDatastoreBlobstorage#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#read MachineLearningDatastoreBlobstorage#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#update MachineLearningDatastoreBlobstorage#update}.

---

##### `reset_account_key` <a name="reset_account_key" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetAccountKey"></a>

```python
def reset_account_key() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_default` <a name="reset_is_default" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetIsDefault"></a>

```python
def reset_is_default() -> None
```

##### `reset_service_data_auth_identity` <a name="reset_service_data_auth_identity" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetServiceDataAuthIdentity"></a>

```python
def reset_service_data_auth_identity() -> None
```

##### `reset_shared_access_signature` <a name="reset_shared_access_signature" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetSharedAccessSignature"></a>

```python
def reset_shared_access_signature() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MachineLearningDatastoreBlobstorage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_blobstorage

machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_blobstorage

machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_blobstorage

machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_blobstorage

machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MachineLearningDatastoreBlobstorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MachineLearningDatastoreBlobstorage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MachineLearningDatastoreBlobstorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningDatastoreBlobstorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference">MachineLearningDatastoreBlobstorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKeyInput">account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentityInput">service_data_auth_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignatureInput">shared_access_signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerIdInput">storage_container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKey">account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentity">service_data_auth_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignature">shared_access_signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerId">storage_container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeouts"></a>

```python
timeouts: MachineLearningDatastoreBlobstorageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference">MachineLearningDatastoreBlobstorageTimeoutsOutputReference</a>

---

##### `account_key_input`<sup>Optional</sup> <a name="account_key_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKeyInput"></a>

```python
account_key_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_data_auth_identity_input`<sup>Optional</sup> <a name="service_data_auth_identity_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentityInput"></a>

```python
service_data_auth_identity_input: str
```

- *Type:* str

---

##### `shared_access_signature_input`<sup>Optional</sup> <a name="shared_access_signature_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignatureInput"></a>

```python
shared_access_signature_input: str
```

- *Type:* str

---

##### `storage_container_id_input`<sup>Optional</sup> <a name="storage_container_id_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerIdInput"></a>

```python
storage_container_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MachineLearningDatastoreBlobstorageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `account_key`<sup>Required</sup> <a name="account_key" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKey"></a>

```python
account_key: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_data_auth_identity`<sup>Required</sup> <a name="service_data_auth_identity" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentity"></a>

```python
service_data_auth_identity: str
```

- *Type:* str

---

##### `shared_access_signature`<sup>Required</sup> <a name="shared_access_signature" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignature"></a>

```python
shared_access_signature: str
```

- *Type:* str

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerId"></a>

```python
storage_container_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningDatastoreBlobstorageConfig <a name="MachineLearningDatastoreBlobstorageConfig" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_blobstorage

machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  storage_container_id: str,
  workspace_id: str,
  account_key: str = None,
  description: str = None,
  id: str = None,
  is_default: typing.Union[bool, IResolvable] = None,
  service_data_auth_identity: str = None,
  shared_access_signature: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MachineLearningDatastoreBlobstorageTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#name MachineLearningDatastoreBlobstorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.storageContainerId">storage_container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#storage_container_id MachineLearningDatastoreBlobstorage#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#workspace_id MachineLearningDatastoreBlobstorage#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.accountKey">account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#account_key MachineLearningDatastoreBlobstorage#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#description MachineLearningDatastoreBlobstorage#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#id MachineLearningDatastoreBlobstorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#is_default MachineLearningDatastoreBlobstorage#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.serviceDataAuthIdentity">service_data_auth_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#service_data_auth_identity MachineLearningDatastoreBlobstorage#service_data_auth_identity}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.sharedAccessSignature">shared_access_signature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#shared_access_signature MachineLearningDatastoreBlobstorage#shared_access_signature}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#tags MachineLearningDatastoreBlobstorage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#name MachineLearningDatastoreBlobstorage#name}.

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.storageContainerId"></a>

```python
storage_container_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#storage_container_id MachineLearningDatastoreBlobstorage#storage_container_id}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#workspace_id MachineLearningDatastoreBlobstorage#workspace_id}.

---

##### `account_key`<sup>Optional</sup> <a name="account_key" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.accountKey"></a>

```python
account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#account_key MachineLearningDatastoreBlobstorage#account_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#description MachineLearningDatastoreBlobstorage#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#id MachineLearningDatastoreBlobstorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#is_default MachineLearningDatastoreBlobstorage#is_default}.

---

##### `service_data_auth_identity`<sup>Optional</sup> <a name="service_data_auth_identity" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.serviceDataAuthIdentity"></a>

```python
service_data_auth_identity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#service_data_auth_identity MachineLearningDatastoreBlobstorage#service_data_auth_identity}.

---

##### `shared_access_signature`<sup>Optional</sup> <a name="shared_access_signature" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.sharedAccessSignature"></a>

```python
shared_access_signature: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#shared_access_signature MachineLearningDatastoreBlobstorage#shared_access_signature}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#tags MachineLearningDatastoreBlobstorage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.timeouts"></a>

```python
timeouts: MachineLearningDatastoreBlobstorageTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#timeouts MachineLearningDatastoreBlobstorage#timeouts}

---

### MachineLearningDatastoreBlobstorageTimeouts <a name="MachineLearningDatastoreBlobstorageTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_blobstorage

machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#create MachineLearningDatastoreBlobstorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#delete MachineLearningDatastoreBlobstorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#read MachineLearningDatastoreBlobstorage#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#update MachineLearningDatastoreBlobstorage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#create MachineLearningDatastoreBlobstorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#delete MachineLearningDatastoreBlobstorage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#read MachineLearningDatastoreBlobstorage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/machine_learning_datastore_blobstorage#update MachineLearningDatastoreBlobstorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningDatastoreBlobstorageTimeoutsOutputReference <a name="MachineLearningDatastoreBlobstorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_blobstorage

machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MachineLearningDatastoreBlobstorageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>]

---



