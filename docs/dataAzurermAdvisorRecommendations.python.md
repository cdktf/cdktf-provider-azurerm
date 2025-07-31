# `dataAzurermAdvisorRecommendations` Submodule <a name="`dataAzurermAdvisorRecommendations` Submodule" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAdvisorRecommendations <a name="DataAzurermAdvisorRecommendations" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations azurerm_advisor_recommendations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_advisor_recommendations

dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter_by_category: typing.List[str] = None,
  filter_by_resource_groups: typing.List[str] = None,
  id: str = None,
  timeouts: DataAzurermAdvisorRecommendationsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.filterByCategory">filter_by_category</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#filter_by_category DataAzurermAdvisorRecommendations#filter_by_category}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.filterByResourceGroups">filter_by_resource_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#filter_by_resource_groups DataAzurermAdvisorRecommendations#filter_by_resource_groups}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#id DataAzurermAdvisorRecommendations#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_by_category`<sup>Optional</sup> <a name="filter_by_category" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.filterByCategory"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#filter_by_category DataAzurermAdvisorRecommendations#filter_by_category}.

---

##### `filter_by_resource_groups`<sup>Optional</sup> <a name="filter_by_resource_groups" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.filterByResourceGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#filter_by_resource_groups DataAzurermAdvisorRecommendations#filter_by_resource_groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#id DataAzurermAdvisorRecommendations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#timeouts DataAzurermAdvisorRecommendations#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByCategory">reset_filter_by_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByResourceGroups">reset_filter_by_resource_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#read DataAzurermAdvisorRecommendations#read}.

---

##### `reset_filter_by_category` <a name="reset_filter_by_category" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByCategory"></a>

```python
def reset_filter_by_category() -> None
```

##### `reset_filter_by_resource_groups` <a name="reset_filter_by_resource_groups" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByResourceGroups"></a>

```python
def reset_filter_by_resource_groups() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermAdvisorRecommendations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_advisor_recommendations

dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_advisor_recommendations

dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_advisor_recommendations

dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_advisor_recommendations

dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermAdvisorRecommendations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermAdvisorRecommendations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermAdvisorRecommendations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermAdvisorRecommendations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.recommendations">recommendations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList">DataAzurermAdvisorRecommendationsRecommendationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference">DataAzurermAdvisorRecommendationsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategoryInput">filter_by_category_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroupsInput">filter_by_resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategory">filter_by_category</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroups">filter_by_resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `recommendations`<sup>Required</sup> <a name="recommendations" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.recommendations"></a>

```python
recommendations: DataAzurermAdvisorRecommendationsRecommendationsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList">DataAzurermAdvisorRecommendationsRecommendationsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeouts"></a>

```python
timeouts: DataAzurermAdvisorRecommendationsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference">DataAzurermAdvisorRecommendationsTimeoutsOutputReference</a>

---

##### `filter_by_category_input`<sup>Optional</sup> <a name="filter_by_category_input" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategoryInput"></a>

```python
filter_by_category_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_by_resource_groups_input`<sup>Optional</sup> <a name="filter_by_resource_groups_input" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroupsInput"></a>

```python
filter_by_resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermAdvisorRecommendationsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a>]

---

##### `filter_by_category`<sup>Required</sup> <a name="filter_by_category" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategory"></a>

```python
filter_by_category: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_by_resource_groups`<sup>Required</sup> <a name="filter_by_resource_groups" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroups"></a>

```python
filter_by_resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAdvisorRecommendationsConfig <a name="DataAzurermAdvisorRecommendationsConfig" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_advisor_recommendations

dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter_by_category: typing.List[str] = None,
  filter_by_resource_groups: typing.List[str] = None,
  id: str = None,
  timeouts: DataAzurermAdvisorRecommendationsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByCategory">filter_by_category</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#filter_by_category DataAzurermAdvisorRecommendations#filter_by_category}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByResourceGroups">filter_by_resource_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#filter_by_resource_groups DataAzurermAdvisorRecommendations#filter_by_resource_groups}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#id DataAzurermAdvisorRecommendations#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_by_category`<sup>Optional</sup> <a name="filter_by_category" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByCategory"></a>

```python
filter_by_category: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#filter_by_category DataAzurermAdvisorRecommendations#filter_by_category}.

---

##### `filter_by_resource_groups`<sup>Optional</sup> <a name="filter_by_resource_groups" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByResourceGroups"></a>

```python
filter_by_resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#filter_by_resource_groups DataAzurermAdvisorRecommendations#filter_by_resource_groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#id DataAzurermAdvisorRecommendations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.timeouts"></a>

```python
timeouts: DataAzurermAdvisorRecommendationsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#timeouts DataAzurermAdvisorRecommendations#timeouts}

---

### DataAzurermAdvisorRecommendationsRecommendations <a name="DataAzurermAdvisorRecommendationsRecommendations" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_advisor_recommendations

dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations()
```


### DataAzurermAdvisorRecommendationsTimeouts <a name="DataAzurermAdvisorRecommendationsTimeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_advisor_recommendations

dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#read DataAzurermAdvisorRecommendations#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/advisor_recommendations#read DataAzurermAdvisorRecommendations#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAdvisorRecommendationsRecommendationsList <a name="DataAzurermAdvisorRecommendationsRecommendationsList" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_advisor_recommendations

dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermAdvisorRecommendationsRecommendationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermAdvisorRecommendationsRecommendationsOutputReference <a name="DataAzurermAdvisorRecommendationsRecommendationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_advisor_recommendations

dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.impact">impact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationName">recommendation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationTypeId">recommendation_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.suppressionNames">suppression_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.updatedTime">updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations">DataAzurermAdvisorRecommendationsRecommendations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `impact`<sup>Required</sup> <a name="impact" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.impact"></a>

```python
impact: str
```

- *Type:* str

---

##### `recommendation_name`<sup>Required</sup> <a name="recommendation_name" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationName"></a>

```python
recommendation_name: str
```

- *Type:* str

---

##### `recommendation_type_id`<sup>Required</sup> <a name="recommendation_type_id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationTypeId"></a>

```python
recommendation_type_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `suppression_names`<sup>Required</sup> <a name="suppression_names" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.suppressionNames"></a>

```python
suppression_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `updated_time`<sup>Required</sup> <a name="updated_time" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.updatedTime"></a>

```python
updated_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermAdvisorRecommendationsRecommendations
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations">DataAzurermAdvisorRecommendationsRecommendations</a>

---


### DataAzurermAdvisorRecommendationsTimeoutsOutputReference <a name="DataAzurermAdvisorRecommendationsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_advisor_recommendations

dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermAdvisorRecommendationsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a>]

---



