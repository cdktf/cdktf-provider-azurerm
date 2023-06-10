# `azurerm_machine_learning_datastore_datalake_gen2`

Refer to the Terraform Registory for docs: [`azurerm_machine_learning_datastore_datalake_gen2`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2).

# `machineLearningDatastoreDatalakeGen2` Submodule <a name="`machineLearningDatastoreDatalakeGen2` Submodule" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningDatastoreDatalakeGen2 <a name="MachineLearningDatastoreDatalakeGen2" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2 azurerm_machine_learning_datastore_datalake_gen2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_datalake_gen2

machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2(
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
  authority_url: str = None,
  client_id: str = None,
  client_secret: str = None,
  description: str = None,
  id: str = None,
  service_data_identity: str = None,
  tags: typing.Mapping[str] = None,
  tenant_id: str = None,
  timeouts: MachineLearningDatastoreDatalakeGen2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#name MachineLearningDatastoreDatalakeGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.storageContainerId">storage_container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#storage_container_id MachineLearningDatastoreDatalakeGen2#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#workspace_id MachineLearningDatastoreDatalakeGen2#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.authorityUrl">authority_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#authority_url MachineLearningDatastoreDatalakeGen2#authority_url}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#client_id MachineLearningDatastoreDatalakeGen2#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#client_secret MachineLearningDatastoreDatalakeGen2#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#description MachineLearningDatastoreDatalakeGen2#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#id MachineLearningDatastoreDatalakeGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.serviceDataIdentity">service_data_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#service_data_identity MachineLearningDatastoreDatalakeGen2#service_data_identity}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#tags MachineLearningDatastoreDatalakeGen2#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#tenant_id MachineLearningDatastoreDatalakeGen2#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts">MachineLearningDatastoreDatalakeGen2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#name MachineLearningDatastoreDatalakeGen2#name}.

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.storageContainerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#storage_container_id MachineLearningDatastoreDatalakeGen2#storage_container_id}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#workspace_id MachineLearningDatastoreDatalakeGen2#workspace_id}.

---

##### `authority_url`<sup>Optional</sup> <a name="authority_url" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.authorityUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#authority_url MachineLearningDatastoreDatalakeGen2#authority_url}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#client_id MachineLearningDatastoreDatalakeGen2#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#client_secret MachineLearningDatastoreDatalakeGen2#client_secret}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#description MachineLearningDatastoreDatalakeGen2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#id MachineLearningDatastoreDatalakeGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service_data_identity`<sup>Optional</sup> <a name="service_data_identity" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.serviceDataIdentity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#service_data_identity MachineLearningDatastoreDatalakeGen2#service_data_identity}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#tags MachineLearningDatastoreDatalakeGen2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#tenant_id MachineLearningDatastoreDatalakeGen2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts">MachineLearningDatastoreDatalakeGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#timeouts MachineLearningDatastoreDatalakeGen2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetAuthorityUrl">reset_authority_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetServiceDataIdentity">reset_service_data_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#create MachineLearningDatastoreDatalakeGen2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#delete MachineLearningDatastoreDatalakeGen2#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#read MachineLearningDatastoreDatalakeGen2#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#update MachineLearningDatastoreDatalakeGen2#update}.

---

##### `reset_authority_url` <a name="reset_authority_url" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetAuthorityUrl"></a>

```python
def reset_authority_url() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_service_data_identity` <a name="reset_service_data_identity" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetServiceDataIdentity"></a>

```python
def reset_service_data_identity() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_datalake_gen2

machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_datalake_gen2

machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_datalake_gen2

machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference">MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.authorityUrlInput">authority_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.serviceDataIdentityInput">service_data_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.storageContainerIdInput">storage_container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts">MachineLearningDatastoreDatalakeGen2Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.authorityUrl">authority_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.serviceDataIdentity">service_data_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.storageContainerId">storage_container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.timeouts"></a>

```python
timeouts: MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference">MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference</a>

---

##### `authority_url_input`<sup>Optional</sup> <a name="authority_url_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.authorityUrlInput"></a>

```python
authority_url_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_data_identity_input`<sup>Optional</sup> <a name="service_data_identity_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.serviceDataIdentityInput"></a>

```python
service_data_identity_input: str
```

- *Type:* str

---

##### `storage_container_id_input`<sup>Optional</sup> <a name="storage_container_id_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.storageContainerIdInput"></a>

```python
storage_container_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[MachineLearningDatastoreDatalakeGen2Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts">MachineLearningDatastoreDatalakeGen2Timeouts</a>, cdktf.IResolvable]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `authority_url`<sup>Required</sup> <a name="authority_url" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.authorityUrl"></a>

```python
authority_url: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_data_identity`<sup>Required</sup> <a name="service_data_identity" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.serviceDataIdentity"></a>

```python
service_data_identity: str
```

- *Type:* str

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.storageContainerId"></a>

```python
storage_container_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningDatastoreDatalakeGen2Config <a name="MachineLearningDatastoreDatalakeGen2Config" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_datalake_gen2

machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config(
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
  authority_url: str = None,
  client_id: str = None,
  client_secret: str = None,
  description: str = None,
  id: str = None,
  service_data_identity: str = None,
  tags: typing.Mapping[str] = None,
  tenant_id: str = None,
  timeouts: MachineLearningDatastoreDatalakeGen2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#name MachineLearningDatastoreDatalakeGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.storageContainerId">storage_container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#storage_container_id MachineLearningDatastoreDatalakeGen2#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#workspace_id MachineLearningDatastoreDatalakeGen2#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.authorityUrl">authority_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#authority_url MachineLearningDatastoreDatalakeGen2#authority_url}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#client_id MachineLearningDatastoreDatalakeGen2#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#client_secret MachineLearningDatastoreDatalakeGen2#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#description MachineLearningDatastoreDatalakeGen2#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#id MachineLearningDatastoreDatalakeGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.serviceDataIdentity">service_data_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#service_data_identity MachineLearningDatastoreDatalakeGen2#service_data_identity}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#tags MachineLearningDatastoreDatalakeGen2#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#tenant_id MachineLearningDatastoreDatalakeGen2#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts">MachineLearningDatastoreDatalakeGen2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#name MachineLearningDatastoreDatalakeGen2#name}.

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.storageContainerId"></a>

```python
storage_container_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#storage_container_id MachineLearningDatastoreDatalakeGen2#storage_container_id}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#workspace_id MachineLearningDatastoreDatalakeGen2#workspace_id}.

---

##### `authority_url`<sup>Optional</sup> <a name="authority_url" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.authorityUrl"></a>

```python
authority_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#authority_url MachineLearningDatastoreDatalakeGen2#authority_url}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#client_id MachineLearningDatastoreDatalakeGen2#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#client_secret MachineLearningDatastoreDatalakeGen2#client_secret}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#description MachineLearningDatastoreDatalakeGen2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#id MachineLearningDatastoreDatalakeGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service_data_identity`<sup>Optional</sup> <a name="service_data_identity" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.serviceDataIdentity"></a>

```python
service_data_identity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#service_data_identity MachineLearningDatastoreDatalakeGen2#service_data_identity}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#tags MachineLearningDatastoreDatalakeGen2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#tenant_id MachineLearningDatastoreDatalakeGen2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.timeouts"></a>

```python
timeouts: MachineLearningDatastoreDatalakeGen2Timeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts">MachineLearningDatastoreDatalakeGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#timeouts MachineLearningDatastoreDatalakeGen2#timeouts}

---

### MachineLearningDatastoreDatalakeGen2Timeouts <a name="MachineLearningDatastoreDatalakeGen2Timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_datalake_gen2

machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#create MachineLearningDatastoreDatalakeGen2#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#delete MachineLearningDatastoreDatalakeGen2#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#read MachineLearningDatastoreDatalakeGen2#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#update MachineLearningDatastoreDatalakeGen2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#create MachineLearningDatastoreDatalakeGen2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#delete MachineLearningDatastoreDatalakeGen2#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#read MachineLearningDatastoreDatalakeGen2#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_datalake_gen2#update MachineLearningDatastoreDatalakeGen2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference <a name="MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_datastore_datalake_gen2

machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts">MachineLearningDatastoreDatalakeGen2Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MachineLearningDatastoreDatalakeGen2Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts">MachineLearningDatastoreDatalakeGen2Timeouts</a>, cdktf.IResolvable]

---



