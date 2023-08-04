# `azurerm_storage_mover_job_definition`

Refer to the Terraform Registory for docs: [`azurerm_storage_mover_job_definition`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition).

# `storageMoverJobDefinition` Submodule <a name="`storageMoverJobDefinition` Submodule" id="@cdktf/provider-azurerm.storageMoverJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageMoverJobDefinition <a name="StorageMoverJobDefinition" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition azurerm_storage_mover_job_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_mover_job_definition

storageMoverJobDefinition.StorageMoverJobDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  copy_mode: str,
  name: str,
  source_name: str,
  storage_mover_project_id: str,
  target_name: str,
  agent_name: str = None,
  description: str = None,
  id: str = None,
  source_sub_path: str = None,
  target_sub_path: str = None,
  timeouts: StorageMoverJobDefinitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.copyMode">copy_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#copy_mode StorageMoverJobDefinition#copy_mode}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#name StorageMoverJobDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.sourceName">source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#source_name StorageMoverJobDefinition#source_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.storageMoverProjectId">storage_mover_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#storage_mover_project_id StorageMoverJobDefinition#storage_mover_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.targetName">target_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#target_name StorageMoverJobDefinition#target_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.agentName">agent_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#agent_name StorageMoverJobDefinition#agent_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#description StorageMoverJobDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#id StorageMoverJobDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.sourceSubPath">source_sub_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#source_sub_path StorageMoverJobDefinition#source_sub_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.targetSubPath">target_sub_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#target_sub_path StorageMoverJobDefinition#target_sub_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `copy_mode`<sup>Required</sup> <a name="copy_mode" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.copyMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#copy_mode StorageMoverJobDefinition#copy_mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#name StorageMoverJobDefinition#name}.

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.sourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#source_name StorageMoverJobDefinition#source_name}.

---

##### `storage_mover_project_id`<sup>Required</sup> <a name="storage_mover_project_id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.storageMoverProjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#storage_mover_project_id StorageMoverJobDefinition#storage_mover_project_id}.

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.targetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#target_name StorageMoverJobDefinition#target_name}.

---

##### `agent_name`<sup>Optional</sup> <a name="agent_name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.agentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#agent_name StorageMoverJobDefinition#agent_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#description StorageMoverJobDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#id StorageMoverJobDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_sub_path`<sup>Optional</sup> <a name="source_sub_path" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.sourceSubPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#source_sub_path StorageMoverJobDefinition#source_sub_path}.

---

##### `target_sub_path`<sup>Optional</sup> <a name="target_sub_path" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.targetSubPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#target_sub_path StorageMoverJobDefinition#target_sub_path}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#timeouts StorageMoverJobDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetAgentName">reset_agent_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetSourceSubPath">reset_source_sub_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTargetSubPath">reset_target_sub_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#create StorageMoverJobDefinition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#delete StorageMoverJobDefinition#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#read StorageMoverJobDefinition#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#update StorageMoverJobDefinition#update}.

---

##### `reset_agent_name` <a name="reset_agent_name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetAgentName"></a>

```python
def reset_agent_name() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_source_sub_path` <a name="reset_source_sub_path" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetSourceSubPath"></a>

```python
def reset_source_sub_path() -> None
```

##### `reset_target_sub_path` <a name="reset_target_sub_path" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTargetSubPath"></a>

```python
def reset_target_sub_path() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_mover_job_definition

storageMoverJobDefinition.StorageMoverJobDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_mover_job_definition

storageMoverJobDefinition.StorageMoverJobDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_mover_job_definition

storageMoverJobDefinition.StorageMoverJobDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference">StorageMoverJobDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentNameInput">agent_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyModeInput">copy_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceNameInput">source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPathInput">source_sub_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectIdInput">storage_mover_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetNameInput">target_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPathInput">target_sub_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentName">agent_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyMode">copy_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPath">source_sub_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectId">storage_mover_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetName">target_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPath">target_sub_path</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeouts"></a>

```python
timeouts: StorageMoverJobDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference">StorageMoverJobDefinitionTimeoutsOutputReference</a>

---

##### `agent_name_input`<sup>Optional</sup> <a name="agent_name_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentNameInput"></a>

```python
agent_name_input: str
```

- *Type:* str

---

##### `copy_mode_input`<sup>Optional</sup> <a name="copy_mode_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyModeInput"></a>

```python
copy_mode_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_name_input`<sup>Optional</sup> <a name="source_name_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceNameInput"></a>

```python
source_name_input: str
```

- *Type:* str

---

##### `source_sub_path_input`<sup>Optional</sup> <a name="source_sub_path_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPathInput"></a>

```python
source_sub_path_input: str
```

- *Type:* str

---

##### `storage_mover_project_id_input`<sup>Optional</sup> <a name="storage_mover_project_id_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectIdInput"></a>

```python
storage_mover_project_id_input: str
```

- *Type:* str

---

##### `target_name_input`<sup>Optional</sup> <a name="target_name_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetNameInput"></a>

```python
target_name_input: str
```

- *Type:* str

---

##### `target_sub_path_input`<sup>Optional</sup> <a name="target_sub_path_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPathInput"></a>

```python
target_sub_path_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StorageMoverJobDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>]

---

##### `agent_name`<sup>Required</sup> <a name="agent_name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentName"></a>

```python
agent_name: str
```

- *Type:* str

---

##### `copy_mode`<sup>Required</sup> <a name="copy_mode" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyMode"></a>

```python
copy_mode: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `source_sub_path`<sup>Required</sup> <a name="source_sub_path" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPath"></a>

```python
source_sub_path: str
```

- *Type:* str

---

##### `storage_mover_project_id`<sup>Required</sup> <a name="storage_mover_project_id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectId"></a>

```python
storage_mover_project_id: str
```

- *Type:* str

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

---

##### `target_sub_path`<sup>Required</sup> <a name="target_sub_path" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPath"></a>

```python
target_sub_path: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageMoverJobDefinitionConfig <a name="StorageMoverJobDefinitionConfig" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_mover_job_definition

storageMoverJobDefinition.StorageMoverJobDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  copy_mode: str,
  name: str,
  source_name: str,
  storage_mover_project_id: str,
  target_name: str,
  agent_name: str = None,
  description: str = None,
  id: str = None,
  source_sub_path: str = None,
  target_sub_path: str = None,
  timeouts: StorageMoverJobDefinitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.copyMode">copy_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#copy_mode StorageMoverJobDefinition#copy_mode}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#name StorageMoverJobDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceName">source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#source_name StorageMoverJobDefinition#source_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.storageMoverProjectId">storage_mover_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#storage_mover_project_id StorageMoverJobDefinition#storage_mover_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetName">target_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#target_name StorageMoverJobDefinition#target_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.agentName">agent_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#agent_name StorageMoverJobDefinition#agent_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#description StorageMoverJobDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#id StorageMoverJobDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceSubPath">source_sub_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#source_sub_path StorageMoverJobDefinition#source_sub_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetSubPath">target_sub_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#target_sub_path StorageMoverJobDefinition#target_sub_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `copy_mode`<sup>Required</sup> <a name="copy_mode" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.copyMode"></a>

```python
copy_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#copy_mode StorageMoverJobDefinition#copy_mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#name StorageMoverJobDefinition#name}.

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#source_name StorageMoverJobDefinition#source_name}.

---

##### `storage_mover_project_id`<sup>Required</sup> <a name="storage_mover_project_id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.storageMoverProjectId"></a>

```python
storage_mover_project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#storage_mover_project_id StorageMoverJobDefinition#storage_mover_project_id}.

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#target_name StorageMoverJobDefinition#target_name}.

---

##### `agent_name`<sup>Optional</sup> <a name="agent_name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.agentName"></a>

```python
agent_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#agent_name StorageMoverJobDefinition#agent_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#description StorageMoverJobDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#id StorageMoverJobDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_sub_path`<sup>Optional</sup> <a name="source_sub_path" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceSubPath"></a>

```python
source_sub_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#source_sub_path StorageMoverJobDefinition#source_sub_path}.

---

##### `target_sub_path`<sup>Optional</sup> <a name="target_sub_path" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetSubPath"></a>

```python
target_sub_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#target_sub_path StorageMoverJobDefinition#target_sub_path}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.timeouts"></a>

```python
timeouts: StorageMoverJobDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#timeouts StorageMoverJobDefinition#timeouts}

---

### StorageMoverJobDefinitionTimeouts <a name="StorageMoverJobDefinitionTimeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_mover_job_definition

storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#create StorageMoverJobDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#delete StorageMoverJobDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#read StorageMoverJobDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#update StorageMoverJobDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#create StorageMoverJobDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#delete StorageMoverJobDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#read StorageMoverJobDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_mover_job_definition#update StorageMoverJobDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageMoverJobDefinitionTimeoutsOutputReference <a name="StorageMoverJobDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_mover_job_definition

storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageMoverJobDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>]

---



