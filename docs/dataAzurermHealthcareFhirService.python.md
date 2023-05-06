# `data_azurerm_healthcare_fhir_service`

Refer to the Terraform Registory for docs: [`data_azurerm_healthcare_fhir_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service).

# `dataAzurermHealthcareFhirService` Submodule <a name="`dataAzurermHealthcareFhirService` Submodule" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermHealthcareFhirService <a name="DataAzurermHealthcareFhirService" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service azurerm_healthcare_fhir_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService(
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
  workspace_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAzurermHealthcareFhirServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#name DataAzurermHealthcareFhirService#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#workspace_id DataAzurermHealthcareFhirService#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#id DataAzurermHealthcareFhirService#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#tags DataAzurermHealthcareFhirService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeouts">DataAzurermHealthcareFhirServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#name DataAzurermHealthcareFhirService#name}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#workspace_id DataAzurermHealthcareFhirService#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#id DataAzurermHealthcareFhirService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#tags DataAzurermHealthcareFhirService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeouts">DataAzurermHealthcareFhirServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#timeouts DataAzurermHealthcareFhirService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#read DataAzurermHealthcareFhirService#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.accessPolicyObjectIds">access_policy_object_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList">DataAzurermHealthcareFhirServiceAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.configurationExportStorageAccountName">configuration_export_storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.containerRegistryLoginServerUrl">container_registry_login_server_url</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList">DataAzurermHealthcareFhirServiceCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList">DataAzurermHealthcareFhirServiceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference">DataAzurermHealthcareFhirServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeouts">DataAzurermHealthcareFhirServiceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_policy_object_ids`<sup>Required</sup> <a name="access_policy_object_ids" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.accessPolicyObjectIds"></a>

```python
access_policy_object_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.authentication"></a>

```python
authentication: DataAzurermHealthcareFhirServiceAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList">DataAzurermHealthcareFhirServiceAuthenticationList</a>

---

##### `configuration_export_storage_account_name`<sup>Required</sup> <a name="configuration_export_storage_account_name" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.configurationExportStorageAccountName"></a>

```python
configuration_export_storage_account_name: str
```

- *Type:* str

---

##### `container_registry_login_server_url`<sup>Required</sup> <a name="container_registry_login_server_url" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.containerRegistryLoginServerUrl"></a>

```python
container_registry_login_server_url: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.cors"></a>

```python
cors: DataAzurermHealthcareFhirServiceCorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList">DataAzurermHealthcareFhirServiceCorsList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.identity"></a>

```python
identity: DataAzurermHealthcareFhirServiceIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList">DataAzurermHealthcareFhirServiceIdentityList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.timeouts"></a>

```python
timeouts: DataAzurermHealthcareFhirServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference">DataAzurermHealthcareFhirServiceTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurermHealthcareFhirServiceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeouts">DataAzurermHealthcareFhirServiceTimeouts</a>, cdktf.IResolvable]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermHealthcareFhirServiceAuthentication <a name="DataAzurermHealthcareFhirServiceAuthentication" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthentication()
```


### DataAzurermHealthcareFhirServiceConfig <a name="DataAzurermHealthcareFhirServiceConfig" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  workspace_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAzurermHealthcareFhirServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#name DataAzurermHealthcareFhirService#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#workspace_id DataAzurermHealthcareFhirService#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#id DataAzurermHealthcareFhirService#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#tags DataAzurermHealthcareFhirService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeouts">DataAzurermHealthcareFhirServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#name DataAzurermHealthcareFhirService#name}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#workspace_id DataAzurermHealthcareFhirService#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#id DataAzurermHealthcareFhirService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#tags DataAzurermHealthcareFhirService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceConfig.property.timeouts"></a>

```python
timeouts: DataAzurermHealthcareFhirServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeouts">DataAzurermHealthcareFhirServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#timeouts DataAzurermHealthcareFhirService#timeouts}

---

### DataAzurermHealthcareFhirServiceCors <a name="DataAzurermHealthcareFhirServiceCors" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCors()
```


### DataAzurermHealthcareFhirServiceIdentity <a name="DataAzurermHealthcareFhirServiceIdentity" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentity()
```


### DataAzurermHealthcareFhirServiceTimeouts <a name="DataAzurermHealthcareFhirServiceTimeouts" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#read DataAzurermHealthcareFhirService#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/healthcare_fhir_service#read DataAzurermHealthcareFhirService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermHealthcareFhirServiceAuthenticationList <a name="DataAzurermHealthcareFhirServiceAuthenticationList" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHealthcareFhirServiceAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHealthcareFhirServiceAuthenticationOutputReference <a name="DataAzurermHealthcareFhirServiceAuthenticationOutputReference" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.property.authority">authority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabled">smart_proxy_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthentication">DataAzurermHealthcareFhirServiceAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.property.authority"></a>

```python
authority: str
```

- *Type:* str

---

##### `smart_proxy_enabled`<sup>Required</sup> <a name="smart_proxy_enabled" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabled"></a>

```python
smart_proxy_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHealthcareFhirServiceAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceAuthentication">DataAzurermHealthcareFhirServiceAuthentication</a>

---


### DataAzurermHealthcareFhirServiceCorsList <a name="DataAzurermHealthcareFhirServiceCorsList" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHealthcareFhirServiceCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHealthcareFhirServiceCorsOutputReference <a name="DataAzurermHealthcareFhirServiceCorsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.credentialsAllowed">credentials_allowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCors">DataAzurermHealthcareFhirServiceCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credentials_allowed`<sup>Required</sup> <a name="credentials_allowed" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.credentialsAllowed"></a>

```python
credentials_allowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHealthcareFhirServiceCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceCors">DataAzurermHealthcareFhirServiceCors</a>

---


### DataAzurermHealthcareFhirServiceIdentityList <a name="DataAzurermHealthcareFhirServiceIdentityList" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHealthcareFhirServiceIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHealthcareFhirServiceIdentityOutputReference <a name="DataAzurermHealthcareFhirServiceIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentity">DataAzurermHealthcareFhirServiceIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHealthcareFhirServiceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceIdentity">DataAzurermHealthcareFhirServiceIdentity</a>

---


### DataAzurermHealthcareFhirServiceTimeoutsOutputReference <a name="DataAzurermHealthcareFhirServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_healthcare_fhir_service

dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeouts">DataAzurermHealthcareFhirServiceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurermHealthcareFhirServiceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermHealthcareFhirService.DataAzurermHealthcareFhirServiceTimeouts">DataAzurermHealthcareFhirServiceTimeouts</a>, cdktf.IResolvable]

---



