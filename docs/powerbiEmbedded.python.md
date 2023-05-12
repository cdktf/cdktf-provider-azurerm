# `azurerm_powerbi_embedded`

Refer to the Terraform Registory for docs: [`azurerm_powerbi_embedded`](https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded).

# `powerbiEmbedded` Submodule <a name="`powerbiEmbedded` Submodule" id="@cdktf/provider-azurerm.powerbiEmbedded"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PowerbiEmbedded <a name="PowerbiEmbedded" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded azurerm_powerbi_embedded}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import powerbi_embedded

powerbiEmbedded.PowerbiEmbedded(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  administrators: typing.List[str],
  location: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  id: str = None,
  mode: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: PowerbiEmbeddedTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.administrators">administrators</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#administrators PowerbiEmbedded#administrators}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#location PowerbiEmbedded#location}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#name PowerbiEmbedded#name}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#resource_group_name PowerbiEmbedded#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#sku_name PowerbiEmbedded#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#id PowerbiEmbedded#id}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#mode PowerbiEmbedded#mode}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#tags PowerbiEmbedded#tags}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts">PowerbiEmbeddedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `administrators`<sup>Required</sup> <a name="administrators" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.administrators"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#administrators PowerbiEmbedded#administrators}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#location PowerbiEmbedded#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#name PowerbiEmbedded#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#resource_group_name PowerbiEmbedded#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#sku_name PowerbiEmbedded#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#id PowerbiEmbedded#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#mode PowerbiEmbedded#mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#tags PowerbiEmbedded#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts">PowerbiEmbeddedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#timeouts PowerbiEmbedded#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#create PowerbiEmbedded#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#delete PowerbiEmbedded#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#read PowerbiEmbedded#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#update PowerbiEmbedded#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import powerbi_embedded

powerbiEmbedded.PowerbiEmbedded.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import powerbi_embedded

powerbiEmbedded.PowerbiEmbedded.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import powerbi_embedded

powerbiEmbedded.PowerbiEmbedded.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference">PowerbiEmbeddedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.administratorsInput">administrators_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts">PowerbiEmbeddedTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.administrators">administrators</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.timeouts"></a>

```python
timeouts: PowerbiEmbeddedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference">PowerbiEmbeddedTimeoutsOutputReference</a>

---

##### `administrators_input`<sup>Optional</sup> <a name="administrators_input" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.administratorsInput"></a>

```python
administrators_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[PowerbiEmbeddedTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts">PowerbiEmbeddedTimeouts</a>, cdktf.IResolvable]

---

##### `administrators`<sup>Required</sup> <a name="administrators" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.administrators"></a>

```python
administrators: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbedded.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PowerbiEmbeddedConfig <a name="PowerbiEmbeddedConfig" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import powerbi_embedded

powerbiEmbedded.PowerbiEmbeddedConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  administrators: typing.List[str],
  location: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  id: str = None,
  mode: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: PowerbiEmbeddedTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.administrators">administrators</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#administrators PowerbiEmbedded#administrators}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#location PowerbiEmbedded#location}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#name PowerbiEmbedded#name}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#resource_group_name PowerbiEmbedded#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#sku_name PowerbiEmbedded#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#id PowerbiEmbedded#id}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#mode PowerbiEmbedded#mode}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#tags PowerbiEmbedded#tags}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts">PowerbiEmbeddedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `administrators`<sup>Required</sup> <a name="administrators" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.administrators"></a>

```python
administrators: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#administrators PowerbiEmbedded#administrators}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#location PowerbiEmbedded#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#name PowerbiEmbedded#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#resource_group_name PowerbiEmbedded#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#sku_name PowerbiEmbedded#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#id PowerbiEmbedded#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#mode PowerbiEmbedded#mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#tags PowerbiEmbedded#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedConfig.property.timeouts"></a>

```python
timeouts: PowerbiEmbeddedTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts">PowerbiEmbeddedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#timeouts PowerbiEmbedded#timeouts}

---

### PowerbiEmbeddedTimeouts <a name="PowerbiEmbeddedTimeouts" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import powerbi_embedded

powerbiEmbedded.PowerbiEmbeddedTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#create PowerbiEmbedded#create}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#delete PowerbiEmbedded#delete}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#read PowerbiEmbedded#read}. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#update PowerbiEmbedded#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#create PowerbiEmbedded#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#delete PowerbiEmbedded#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#read PowerbiEmbedded#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/powerbi_embedded#update PowerbiEmbedded#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PowerbiEmbeddedTimeoutsOutputReference <a name="PowerbiEmbeddedTimeoutsOutputReference" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import powerbi_embedded

powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts">PowerbiEmbeddedTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[PowerbiEmbeddedTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.powerbiEmbedded.PowerbiEmbeddedTimeouts">PowerbiEmbeddedTimeouts</a>, cdktf.IResolvable]

---



