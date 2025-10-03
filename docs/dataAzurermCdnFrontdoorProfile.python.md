# `dataAzurermCdnFrontdoorProfile` Submodule <a name="`dataAzurermCdnFrontdoorProfile` Submodule" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCdnFrontdoorProfile <a name="DataAzurermCdnFrontdoorProfile" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile azurerm_cdn_frontdoor_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_profile

dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile(
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
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermCdnFrontdoorProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#name DataAzurermCdnFrontdoorProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#resource_group_name DataAzurermCdnFrontdoorProfile#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#id DataAzurermCdnFrontdoorProfile#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts">DataAzurermCdnFrontdoorProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#name DataAzurermCdnFrontdoorProfile#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#resource_group_name DataAzurermCdnFrontdoorProfile#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#id DataAzurermCdnFrontdoorProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts">DataAzurermCdnFrontdoorProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#timeouts DataAzurermCdnFrontdoorProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#read DataAzurermCdnFrontdoorProfile#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermCdnFrontdoorProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_profile

dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_profile

dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_profile

dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_profile

dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermCdnFrontdoorProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermCdnFrontdoorProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermCdnFrontdoorProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermCdnFrontdoorProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList">DataAzurermCdnFrontdoorProfileIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.logScrubbingRule">log_scrubbing_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList">DataAzurermCdnFrontdoorProfileLogScrubbingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.resourceGuid">resource_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.responseTimeoutSeconds">response_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference">DataAzurermCdnFrontdoorProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts">DataAzurermCdnFrontdoorProfileTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.identity"></a>

```python
identity: DataAzurermCdnFrontdoorProfileIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList">DataAzurermCdnFrontdoorProfileIdentityList</a>

---

##### `log_scrubbing_rule`<sup>Required</sup> <a name="log_scrubbing_rule" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.logScrubbingRule"></a>

```python
log_scrubbing_rule: DataAzurermCdnFrontdoorProfileLogScrubbingRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList">DataAzurermCdnFrontdoorProfileLogScrubbingRuleList</a>

---

##### `resource_guid`<sup>Required</sup> <a name="resource_guid" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.resourceGuid"></a>

```python
resource_guid: str
```

- *Type:* str

---

##### `response_timeout_seconds`<sup>Required</sup> <a name="response_timeout_seconds" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.responseTimeoutSeconds"></a>

```python
response_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.timeouts"></a>

```python
timeouts: DataAzurermCdnFrontdoorProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference">DataAzurermCdnFrontdoorProfileTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermCdnFrontdoorProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts">DataAzurermCdnFrontdoorProfileTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCdnFrontdoorProfileConfig <a name="DataAzurermCdnFrontdoorProfileConfig" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_profile

dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermCdnFrontdoorProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#name DataAzurermCdnFrontdoorProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#resource_group_name DataAzurermCdnFrontdoorProfile#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#id DataAzurermCdnFrontdoorProfile#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts">DataAzurermCdnFrontdoorProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#name DataAzurermCdnFrontdoorProfile#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#resource_group_name DataAzurermCdnFrontdoorProfile#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#id DataAzurermCdnFrontdoorProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.timeouts"></a>

```python
timeouts: DataAzurermCdnFrontdoorProfileTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts">DataAzurermCdnFrontdoorProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#timeouts DataAzurermCdnFrontdoorProfile#timeouts}

---

### DataAzurermCdnFrontdoorProfileIdentity <a name="DataAzurermCdnFrontdoorProfileIdentity" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_profile

dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentity()
```


### DataAzurermCdnFrontdoorProfileLogScrubbingRule <a name="DataAzurermCdnFrontdoorProfileLogScrubbingRule" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_profile

dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRule()
```


### DataAzurermCdnFrontdoorProfileTimeouts <a name="DataAzurermCdnFrontdoorProfileTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_profile

dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#read DataAzurermCdnFrontdoorProfile#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/cdn_frontdoor_profile#read DataAzurermCdnFrontdoorProfile#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCdnFrontdoorProfileIdentityList <a name="DataAzurermCdnFrontdoorProfileIdentityList" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_profile

dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCdnFrontdoorProfileIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCdnFrontdoorProfileIdentityOutputReference <a name="DataAzurermCdnFrontdoorProfileIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_profile

dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentity">DataAzurermCdnFrontdoorProfileIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCdnFrontdoorProfileIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentity">DataAzurermCdnFrontdoorProfileIdentity</a>

---


### DataAzurermCdnFrontdoorProfileLogScrubbingRuleList <a name="DataAzurermCdnFrontdoorProfileLogScrubbingRuleList" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_profile

dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference <a name="DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_profile

dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.matchVariable">match_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRule">DataAzurermCdnFrontdoorProfileLogScrubbingRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_variable`<sup>Required</sup> <a name="match_variable" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.matchVariable"></a>

```python
match_variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCdnFrontdoorProfileLogScrubbingRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRule">DataAzurermCdnFrontdoorProfileLogScrubbingRule</a>

---


### DataAzurermCdnFrontdoorProfileTimeoutsOutputReference <a name="DataAzurermCdnFrontdoorProfileTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_profile

dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts">DataAzurermCdnFrontdoorProfileTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermCdnFrontdoorProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts">DataAzurermCdnFrontdoorProfileTimeouts</a>]

---



