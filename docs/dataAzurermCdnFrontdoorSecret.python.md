# `dataAzurermCdnFrontdoorSecret` Submodule <a name="`dataAzurermCdnFrontdoorSecret` Submodule" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCdnFrontdoorSecret <a name="DataAzurermCdnFrontdoorSecret" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret azurerm_cdn_frontdoor_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_secret

dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  profile_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermCdnFrontdoorSecretTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#name DataAzurermCdnFrontdoorSecret#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#profile_name DataAzurermCdnFrontdoorSecret#profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#resource_group_name DataAzurermCdnFrontdoorSecret#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#id DataAzurermCdnFrontdoorSecret#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeouts">DataAzurermCdnFrontdoorSecretTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#name DataAzurermCdnFrontdoorSecret#name}.

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.profileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#profile_name DataAzurermCdnFrontdoorSecret#profile_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#resource_group_name DataAzurermCdnFrontdoorSecret#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#id DataAzurermCdnFrontdoorSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeouts">DataAzurermCdnFrontdoorSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#timeouts DataAzurermCdnFrontdoorSecret#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#read DataAzurermCdnFrontdoorSecret#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermCdnFrontdoorSecret resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_secret

dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_secret

dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_secret

dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_secret

dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermCdnFrontdoorSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermCdnFrontdoorSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermCdnFrontdoorSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermCdnFrontdoorSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.cdnFrontdoorProfileId">cdn_frontdoor_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList">DataAzurermCdnFrontdoorSecretSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference">DataAzurermCdnFrontdoorSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.profileNameInput">profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeouts">DataAzurermCdnFrontdoorSecretTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cdn_frontdoor_profile_id`<sup>Required</sup> <a name="cdn_frontdoor_profile_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.cdnFrontdoorProfileId"></a>

```python
cdn_frontdoor_profile_id: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.secret"></a>

```python
secret: DataAzurermCdnFrontdoorSecretSecretList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList">DataAzurermCdnFrontdoorSecretSecretList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.timeouts"></a>

```python
timeouts: DataAzurermCdnFrontdoorSecretTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference">DataAzurermCdnFrontdoorSecretTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `profile_name_input`<sup>Optional</sup> <a name="profile_name_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.profileNameInput"></a>

```python
profile_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermCdnFrontdoorSecretTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeouts">DataAzurermCdnFrontdoorSecretTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCdnFrontdoorSecretConfig <a name="DataAzurermCdnFrontdoorSecretConfig" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_secret

dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  profile_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermCdnFrontdoorSecretTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#name DataAzurermCdnFrontdoorSecret#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#profile_name DataAzurermCdnFrontdoorSecret#profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#resource_group_name DataAzurermCdnFrontdoorSecret#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#id DataAzurermCdnFrontdoorSecret#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeouts">DataAzurermCdnFrontdoorSecretTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#name DataAzurermCdnFrontdoorSecret#name}.

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#profile_name DataAzurermCdnFrontdoorSecret#profile_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#resource_group_name DataAzurermCdnFrontdoorSecret#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#id DataAzurermCdnFrontdoorSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretConfig.property.timeouts"></a>

```python
timeouts: DataAzurermCdnFrontdoorSecretTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeouts">DataAzurermCdnFrontdoorSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#timeouts DataAzurermCdnFrontdoorSecret#timeouts}

---

### DataAzurermCdnFrontdoorSecretSecret <a name="DataAzurermCdnFrontdoorSecretSecret" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_secret

dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecret()
```


### DataAzurermCdnFrontdoorSecretSecretCustomerCertificate <a name="DataAzurermCdnFrontdoorSecretSecretCustomerCertificate" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_secret

dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificate()
```


### DataAzurermCdnFrontdoorSecretTimeouts <a name="DataAzurermCdnFrontdoorSecretTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_secret

dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#read DataAzurermCdnFrontdoorSecret#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/cdn_frontdoor_secret#read DataAzurermCdnFrontdoorSecret#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList <a name="DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_secret

dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference <a name="DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_secret

dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.keyVaultCertificateId">key_vault_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificate">DataAzurermCdnFrontdoorSecretSecretCustomerCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `key_vault_certificate_id`<sup>Required</sup> <a name="key_vault_certificate_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.keyVaultCertificateId"></a>

```python
key_vault_certificate_id: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCdnFrontdoorSecretSecretCustomerCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificate">DataAzurermCdnFrontdoorSecretSecretCustomerCertificate</a>

---


### DataAzurermCdnFrontdoorSecretSecretList <a name="DataAzurermCdnFrontdoorSecretSecretList" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_secret

dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCdnFrontdoorSecretSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCdnFrontdoorSecretSecretOutputReference <a name="DataAzurermCdnFrontdoorSecretSecretOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_secret

dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.property.customerCertificate">customer_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList">DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecret">DataAzurermCdnFrontdoorSecretSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_certificate`<sup>Required</sup> <a name="customer_certificate" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.property.customerCertificate"></a>

```python
customer_certificate: DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList">DataAzurermCdnFrontdoorSecretSecretCustomerCertificateList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecretOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCdnFrontdoorSecretSecret
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretSecret">DataAzurermCdnFrontdoorSecretSecret</a>

---


### DataAzurermCdnFrontdoorSecretTimeoutsOutputReference <a name="DataAzurermCdnFrontdoorSecretTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_secret

dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeouts">DataAzurermCdnFrontdoorSecretTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermCdnFrontdoorSecretTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorSecret.DataAzurermCdnFrontdoorSecretTimeouts">DataAzurermCdnFrontdoorSecretTimeouts</a>

---



