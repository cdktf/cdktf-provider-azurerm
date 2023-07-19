# `azurerm_data_factory_custom_dataset`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_custom_dataset`](https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset).

# `dataFactoryCustomDataset` Submodule <a name="`dataFactoryCustomDataset` Submodule" id="@cdktf/provider-azurerm.dataFactoryCustomDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryCustomDataset <a name="DataFactoryCustomDataset" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset azurerm_data_factory_custom_dataset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_custom_dataset

dataFactoryCustomDataset.DataFactoryCustomDataset(
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
  linked_service: DataFactoryCustomDatasetLinkedService,
  name: str,
  type: str,
  type_properties_json: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  folder: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  schema_json: str = None,
  timeouts: DataFactoryCustomDatasetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#data_factory_id DataFactoryCustomDataset#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.linkedService">linked_service</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a></code> | linked_service block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#name DataFactoryCustomDataset#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#type DataFactoryCustomDataset#type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.typePropertiesJson">type_properties_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#type_properties_json DataFactoryCustomDataset#type_properties_json}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#additional_properties DataFactoryCustomDataset#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#annotations DataFactoryCustomDataset#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#description DataFactoryCustomDataset#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#folder DataFactoryCustomDataset#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#id DataFactoryCustomDataset#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#parameters DataFactoryCustomDataset#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.schemaJson">schema_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#schema_json DataFactoryCustomDataset#schema_json}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#data_factory_id DataFactoryCustomDataset#data_factory_id}.

---

##### `linked_service`<sup>Required</sup> <a name="linked_service" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.linkedService"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a>

linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#linked_service DataFactoryCustomDataset#linked_service}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#name DataFactoryCustomDataset#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#type DataFactoryCustomDataset#type}.

---

##### `type_properties_json`<sup>Required</sup> <a name="type_properties_json" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.typePropertiesJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#type_properties_json DataFactoryCustomDataset#type_properties_json}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#additional_properties DataFactoryCustomDataset#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#annotations DataFactoryCustomDataset#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#description DataFactoryCustomDataset#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.folder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#folder DataFactoryCustomDataset#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#id DataFactoryCustomDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#parameters DataFactoryCustomDataset#parameters}.

---

##### `schema_json`<sup>Optional</sup> <a name="schema_json" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.schemaJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#schema_json DataFactoryCustomDataset#schema_json}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#timeouts DataFactoryCustomDataset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putLinkedService">put_linked_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetSchemaJson">reset_schema_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_linked_service` <a name="put_linked_service" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putLinkedService"></a>

```python
def put_linked_service(
  name: str,
  parameters: typing.Mapping[str] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putLinkedService.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#name DataFactoryCustomDataset#name}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putLinkedService.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#parameters DataFactoryCustomDataset#parameters}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#create DataFactoryCustomDataset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#delete DataFactoryCustomDataset#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#read DataFactoryCustomDataset#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#update DataFactoryCustomDataset#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_schema_json` <a name="reset_schema_json" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetSchemaJson"></a>

```python
def reset_schema_json() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_custom_dataset

dataFactoryCustomDataset.DataFactoryCustomDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_custom_dataset

dataFactoryCustomDataset.DataFactoryCustomDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_custom_dataset

dataFactoryCustomDataset.DataFactoryCustomDataset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.linkedService">linked_service</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference">DataFactoryCustomDatasetLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference">DataFactoryCustomDatasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.linkedServiceInput">linked_service_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.schemaJsonInput">schema_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.typePropertiesJsonInput">type_properties_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.schemaJson">schema_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.typePropertiesJson">type_properties_json</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `linked_service`<sup>Required</sup> <a name="linked_service" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.linkedService"></a>

```python
linked_service: DataFactoryCustomDatasetLinkedServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference">DataFactoryCustomDatasetLinkedServiceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.timeouts"></a>

```python
timeouts: DataFactoryCustomDatasetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference">DataFactoryCustomDatasetTimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_service_input`<sup>Optional</sup> <a name="linked_service_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.linkedServiceInput"></a>

```python
linked_service_input: DataFactoryCustomDatasetLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_json_input`<sup>Optional</sup> <a name="schema_json_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.schemaJsonInput"></a>

```python
schema_json_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryCustomDatasetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type_properties_json_input`<sup>Optional</sup> <a name="type_properties_json_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.typePropertiesJsonInput"></a>

```python
type_properties_json_input: str
```

- *Type:* str

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_json`<sup>Required</sup> <a name="schema_json" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.schemaJson"></a>

```python
schema_json: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_properties_json`<sup>Required</sup> <a name="type_properties_json" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.typePropertiesJson"></a>

```python
type_properties_json: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryCustomDatasetConfig <a name="DataFactoryCustomDatasetConfig" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_custom_dataset

dataFactoryCustomDataset.DataFactoryCustomDatasetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  linked_service: DataFactoryCustomDatasetLinkedService,
  name: str,
  type: str,
  type_properties_json: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  folder: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  schema_json: str = None,
  timeouts: DataFactoryCustomDatasetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#data_factory_id DataFactoryCustomDataset#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.linkedService">linked_service</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a></code> | linked_service block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#name DataFactoryCustomDataset#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#type DataFactoryCustomDataset#type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.typePropertiesJson">type_properties_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#type_properties_json DataFactoryCustomDataset#type_properties_json}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#additional_properties DataFactoryCustomDataset#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#annotations DataFactoryCustomDataset#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#description DataFactoryCustomDataset#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#folder DataFactoryCustomDataset#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#id DataFactoryCustomDataset#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#parameters DataFactoryCustomDataset#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.schemaJson">schema_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#schema_json DataFactoryCustomDataset#schema_json}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#data_factory_id DataFactoryCustomDataset#data_factory_id}.

---

##### `linked_service`<sup>Required</sup> <a name="linked_service" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.linkedService"></a>

```python
linked_service: DataFactoryCustomDatasetLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a>

linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#linked_service DataFactoryCustomDataset#linked_service}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#name DataFactoryCustomDataset#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#type DataFactoryCustomDataset#type}.

---

##### `type_properties_json`<sup>Required</sup> <a name="type_properties_json" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.typePropertiesJson"></a>

```python
type_properties_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#type_properties_json DataFactoryCustomDataset#type_properties_json}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#additional_properties DataFactoryCustomDataset#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#annotations DataFactoryCustomDataset#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#description DataFactoryCustomDataset#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#folder DataFactoryCustomDataset#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#id DataFactoryCustomDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#parameters DataFactoryCustomDataset#parameters}.

---

##### `schema_json`<sup>Optional</sup> <a name="schema_json" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.schemaJson"></a>

```python
schema_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#schema_json DataFactoryCustomDataset#schema_json}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.timeouts"></a>

```python
timeouts: DataFactoryCustomDatasetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#timeouts DataFactoryCustomDataset#timeouts}

---

### DataFactoryCustomDatasetLinkedService <a name="DataFactoryCustomDatasetLinkedService" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_custom_dataset

dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService(
  name: str,
  parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#name DataFactoryCustomDataset#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#parameters DataFactoryCustomDataset#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#name DataFactoryCustomDataset#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#parameters DataFactoryCustomDataset#parameters}.

---

### DataFactoryCustomDatasetTimeouts <a name="DataFactoryCustomDatasetTimeouts" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_custom_dataset

dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#create DataFactoryCustomDataset#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#delete DataFactoryCustomDataset#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#read DataFactoryCustomDataset#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#update DataFactoryCustomDataset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#create DataFactoryCustomDataset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#delete DataFactoryCustomDataset#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#read DataFactoryCustomDataset#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_custom_dataset#update DataFactoryCustomDataset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryCustomDatasetLinkedServiceOutputReference <a name="DataFactoryCustomDatasetLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_custom_dataset

dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryCustomDatasetLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a>

---


### DataFactoryCustomDatasetTimeoutsOutputReference <a name="DataFactoryCustomDatasetTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_custom_dataset

dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryCustomDatasetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a>]

---



