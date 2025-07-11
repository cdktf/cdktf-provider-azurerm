# `dataAzurermSharedImageVersions` Submodule <a name="`dataAzurermSharedImageVersions` Submodule" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSharedImageVersions <a name="DataAzurermSharedImageVersions" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions azurerm_shared_image_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_shared_image_versions

dataAzurermSharedImageVersions.DataAzurermSharedImageVersions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gallery_name: str,
  image_name: str,
  resource_group_name: str,
  id: str = None,
  tags_filter: typing.Mapping[str] = None,
  timeouts: DataAzurermSharedImageVersionsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.galleryName">gallery_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#gallery_name DataAzurermSharedImageVersions#gallery_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#image_name DataAzurermSharedImageVersions#image_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#resource_group_name DataAzurermSharedImageVersions#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#id DataAzurermSharedImageVersions#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.tagsFilter">tags_filter</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#tags_filter DataAzurermSharedImageVersions#tags_filter}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts">DataAzurermSharedImageVersionsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gallery_name`<sup>Required</sup> <a name="gallery_name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.galleryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#gallery_name DataAzurermSharedImageVersions#gallery_name}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.imageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#image_name DataAzurermSharedImageVersions#image_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#resource_group_name DataAzurermSharedImageVersions#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#id DataAzurermSharedImageVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags_filter`<sup>Optional</sup> <a name="tags_filter" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.tagsFilter"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#tags_filter DataAzurermSharedImageVersions#tags_filter}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts">DataAzurermSharedImageVersionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#timeouts DataAzurermSharedImageVersions#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetTagsFilter">reset_tags_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#read DataAzurermSharedImageVersions#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags_filter` <a name="reset_tags_filter" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetTagsFilter"></a>

```python
def reset_tags_filter() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermSharedImageVersions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_shared_image_versions

dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_shared_image_versions

dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_shared_image_versions

dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_shared_image_versions

dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermSharedImageVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermSharedImageVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermSharedImageVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermSharedImageVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.images">images</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList">DataAzurermSharedImageVersionsImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference">DataAzurermSharedImageVersionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.galleryNameInput">gallery_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.tagsFilterInput">tags_filter_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts">DataAzurermSharedImageVersionsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.galleryName">gallery_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.tagsFilter">tags_filter</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `images`<sup>Required</sup> <a name="images" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.images"></a>

```python
images: DataAzurermSharedImageVersionsImagesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList">DataAzurermSharedImageVersionsImagesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.timeouts"></a>

```python
timeouts: DataAzurermSharedImageVersionsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference">DataAzurermSharedImageVersionsTimeoutsOutputReference</a>

---

##### `gallery_name_input`<sup>Optional</sup> <a name="gallery_name_input" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.galleryNameInput"></a>

```python
gallery_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_filter_input`<sup>Optional</sup> <a name="tags_filter_input" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.tagsFilterInput"></a>

```python
tags_filter_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermSharedImageVersionsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts">DataAzurermSharedImageVersionsTimeouts</a>]

---

##### `gallery_name`<sup>Required</sup> <a name="gallery_name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.galleryName"></a>

```python
gallery_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags_filter`<sup>Required</sup> <a name="tags_filter" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.tagsFilter"></a>

```python
tags_filter: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSharedImageVersionsConfig <a name="DataAzurermSharedImageVersionsConfig" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_shared_image_versions

dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gallery_name: str,
  image_name: str,
  resource_group_name: str,
  id: str = None,
  tags_filter: typing.Mapping[str] = None,
  timeouts: DataAzurermSharedImageVersionsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.galleryName">gallery_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#gallery_name DataAzurermSharedImageVersions#gallery_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#image_name DataAzurermSharedImageVersions#image_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#resource_group_name DataAzurermSharedImageVersions#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#id DataAzurermSharedImageVersions#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.tagsFilter">tags_filter</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#tags_filter DataAzurermSharedImageVersions#tags_filter}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts">DataAzurermSharedImageVersionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gallery_name`<sup>Required</sup> <a name="gallery_name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.galleryName"></a>

```python
gallery_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#gallery_name DataAzurermSharedImageVersions#gallery_name}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#image_name DataAzurermSharedImageVersions#image_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#resource_group_name DataAzurermSharedImageVersions#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#id DataAzurermSharedImageVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags_filter`<sup>Optional</sup> <a name="tags_filter" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.tagsFilter"></a>

```python
tags_filter: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#tags_filter DataAzurermSharedImageVersions#tags_filter}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.timeouts"></a>

```python
timeouts: DataAzurermSharedImageVersionsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts">DataAzurermSharedImageVersionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#timeouts DataAzurermSharedImageVersions#timeouts}

---

### DataAzurermSharedImageVersionsImages <a name="DataAzurermSharedImageVersionsImages" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImages.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_shared_image_versions

dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImages()
```


### DataAzurermSharedImageVersionsImagesTargetRegion <a name="DataAzurermSharedImageVersionsImagesTargetRegion" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_shared_image_versions

dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegion()
```


### DataAzurermSharedImageVersionsTimeouts <a name="DataAzurermSharedImageVersionsTimeouts" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_shared_image_versions

dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#read DataAzurermSharedImageVersions#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/shared_image_versions#read DataAzurermSharedImageVersions#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSharedImageVersionsImagesList <a name="DataAzurermSharedImageVersionsImagesList" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_shared_image_versions

dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermSharedImageVersionsImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermSharedImageVersionsImagesOutputReference <a name="DataAzurermSharedImageVersionsImagesOutputReference" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_shared_image_versions

dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.excludeFromLatest">exclude_from_latest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.managedImageId">managed_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.targetRegion">target_region</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList">DataAzurermSharedImageVersionsImagesTargetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImages">DataAzurermSharedImageVersionsImages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_from_latest`<sup>Required</sup> <a name="exclude_from_latest" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.excludeFromLatest"></a>

```python
exclude_from_latest: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_image_id`<sup>Required</sup> <a name="managed_image_id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.managedImageId"></a>

```python
managed_image_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_region`<sup>Required</sup> <a name="target_region" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.targetRegion"></a>

```python
target_region: DataAzurermSharedImageVersionsImagesTargetRegionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList">DataAzurermSharedImageVersionsImagesTargetRegionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermSharedImageVersionsImages
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImages">DataAzurermSharedImageVersionsImages</a>

---


### DataAzurermSharedImageVersionsImagesTargetRegionList <a name="DataAzurermSharedImageVersionsImagesTargetRegionList" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_shared_image_versions

dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermSharedImageVersionsImagesTargetRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermSharedImageVersionsImagesTargetRegionOutputReference <a name="DataAzurermSharedImageVersionsImagesTargetRegionOutputReference" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_shared_image_versions

dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.regionalReplicaCount">regional_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegion">DataAzurermSharedImageVersionsImagesTargetRegion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regional_replica_count`<sup>Required</sup> <a name="regional_replica_count" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.regionalReplicaCount"></a>

```python
regional_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermSharedImageVersionsImagesTargetRegion
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegion">DataAzurermSharedImageVersionsImagesTargetRegion</a>

---


### DataAzurermSharedImageVersionsTimeoutsOutputReference <a name="DataAzurermSharedImageVersionsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_shared_image_versions

dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts">DataAzurermSharedImageVersionsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermSharedImageVersionsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts">DataAzurermSharedImageVersionsTimeouts</a>]

---



