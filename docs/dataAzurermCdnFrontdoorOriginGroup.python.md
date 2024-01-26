# `dataAzurermCdnFrontdoorOriginGroup` Submodule <a name="`dataAzurermCdnFrontdoorOriginGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCdnFrontdoorOriginGroup <a name="DataAzurermCdnFrontdoorOriginGroup" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group azurerm_cdn_frontdoor_origin_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_origin_group

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup(
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
  profile_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermCdnFrontdoorOriginGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#name DataAzurermCdnFrontdoorOriginGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#profile_name DataAzurermCdnFrontdoorOriginGroup#profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#resource_group_name DataAzurermCdnFrontdoorOriginGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#id DataAzurermCdnFrontdoorOriginGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#name DataAzurermCdnFrontdoorOriginGroup#name}.

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.profileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#profile_name DataAzurermCdnFrontdoorOriginGroup#profile_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#resource_group_name DataAzurermCdnFrontdoorOriginGroup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#id DataAzurermCdnFrontdoorOriginGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#timeouts DataAzurermCdnFrontdoorOriginGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#read DataAzurermCdnFrontdoorOriginGroup#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermCdnFrontdoorOriginGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_origin_group

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_origin_group

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_origin_group

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_origin_group

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermCdnFrontdoorOriginGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermCdnFrontdoorOriginGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermCdnFrontdoorOriginGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermCdnFrontdoorOriginGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.cdnFrontdoorProfileId">cdn_frontdoor_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.healthProbe">health_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList">DataAzurermCdnFrontdoorOriginGroupHealthProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.loadBalancing">load_balancing</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList">DataAzurermCdnFrontdoorOriginGroupLoadBalancingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes">restore_traffic_time_to_healed_or_new_endpoint_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.sessionAffinityEnabled">session_affinity_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference">DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.profileNameInput">profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cdn_frontdoor_profile_id`<sup>Required</sup> <a name="cdn_frontdoor_profile_id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.cdnFrontdoorProfileId"></a>

```python
cdn_frontdoor_profile_id: str
```

- *Type:* str

---

##### `health_probe`<sup>Required</sup> <a name="health_probe" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.healthProbe"></a>

```python
health_probe: DataAzurermCdnFrontdoorOriginGroupHealthProbeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList">DataAzurermCdnFrontdoorOriginGroupHealthProbeList</a>

---

##### `load_balancing`<sup>Required</sup> <a name="load_balancing" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.loadBalancing"></a>

```python
load_balancing: DataAzurermCdnFrontdoorOriginGroupLoadBalancingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList">DataAzurermCdnFrontdoorOriginGroupLoadBalancingList</a>

---

##### `restore_traffic_time_to_healed_or_new_endpoint_in_minutes`<sup>Required</sup> <a name="restore_traffic_time_to_healed_or_new_endpoint_in_minutes" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

```python
restore_traffic_time_to_healed_or_new_endpoint_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_affinity_enabled`<sup>Required</sup> <a name="session_affinity_enabled" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.sessionAffinityEnabled"></a>

```python
session_affinity_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.timeouts"></a>

```python
timeouts: DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference">DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `profile_name_input`<sup>Optional</sup> <a name="profile_name_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.profileNameInput"></a>

```python
profile_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermCdnFrontdoorOriginGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCdnFrontdoorOriginGroupConfig <a name="DataAzurermCdnFrontdoorOriginGroupConfig" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_origin_group

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  profile_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermCdnFrontdoorOriginGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#name DataAzurermCdnFrontdoorOriginGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#profile_name DataAzurermCdnFrontdoorOriginGroup#profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#resource_group_name DataAzurermCdnFrontdoorOriginGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#id DataAzurermCdnFrontdoorOriginGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#name DataAzurermCdnFrontdoorOriginGroup#name}.

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#profile_name DataAzurermCdnFrontdoorOriginGroup#profile_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#resource_group_name DataAzurermCdnFrontdoorOriginGroup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#id DataAzurermCdnFrontdoorOriginGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.timeouts"></a>

```python
timeouts: DataAzurermCdnFrontdoorOriginGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#timeouts DataAzurermCdnFrontdoorOriginGroup#timeouts}

---

### DataAzurermCdnFrontdoorOriginGroupHealthProbe <a name="DataAzurermCdnFrontdoorOriginGroupHealthProbe" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbe.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_origin_group

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbe()
```


### DataAzurermCdnFrontdoorOriginGroupLoadBalancing <a name="DataAzurermCdnFrontdoorOriginGroupLoadBalancing" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancing.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_origin_group

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancing()
```


### DataAzurermCdnFrontdoorOriginGroupTimeouts <a name="DataAzurermCdnFrontdoorOriginGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_origin_group

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#read DataAzurermCdnFrontdoorOriginGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/cdn_frontdoor_origin_group#read DataAzurermCdnFrontdoorOriginGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCdnFrontdoorOriginGroupHealthProbeList <a name="DataAzurermCdnFrontdoorOriginGroupHealthProbeList" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_origin_group

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference <a name="DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_origin_group

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestType">request_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbe">DataAzurermCdnFrontdoorOriginGroupHealthProbe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `request_type`<sup>Required</sup> <a name="request_type" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCdnFrontdoorOriginGroupHealthProbe
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbe">DataAzurermCdnFrontdoorOriginGroupHealthProbe</a>

---


### DataAzurermCdnFrontdoorOriginGroupLoadBalancingList <a name="DataAzurermCdnFrontdoorOriginGroupLoadBalancingList" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_origin_group

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference <a name="DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_origin_group

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMilliseconds">additional_latency_in_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSize">sample_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequired">successful_samples_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancing">DataAzurermCdnFrontdoorOriginGroupLoadBalancing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_latency_in_milliseconds`<sup>Required</sup> <a name="additional_latency_in_milliseconds" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMilliseconds"></a>

```python
additional_latency_in_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sample_size`<sup>Required</sup> <a name="sample_size" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSize"></a>

```python
sample_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `successful_samples_required`<sup>Required</sup> <a name="successful_samples_required" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequired"></a>

```python
successful_samples_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCdnFrontdoorOriginGroupLoadBalancing
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancing">DataAzurermCdnFrontdoorOriginGroupLoadBalancing</a>

---


### DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference <a name="DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cdn_frontdoor_origin_group

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermCdnFrontdoorOriginGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a>]

---



