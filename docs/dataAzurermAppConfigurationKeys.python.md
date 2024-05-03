# `dataAzurermAppConfigurationKeys` Submodule <a name="`dataAzurermAppConfigurationKeys` Submodule" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAppConfigurationKeys <a name="DataAzurermAppConfigurationKeys" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys azurerm_app_configuration_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration_keys

dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_store_id: str,
  id: str = None,
  key: str = None,
  label: str = None,
  timeouts: DataAzurermAppConfigurationKeysTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.configurationStoreId">configuration_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#configuration_store_id DataAzurermAppConfigurationKeys#configuration_store_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#id DataAzurermAppConfigurationKeys#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#key DataAzurermAppConfigurationKeys#key}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#label DataAzurermAppConfigurationKeys#label}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts">DataAzurermAppConfigurationKeysTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_store_id`<sup>Required</sup> <a name="configuration_store_id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.configurationStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#configuration_store_id DataAzurermAppConfigurationKeys#configuration_store_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#id DataAzurermAppConfigurationKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#key DataAzurermAppConfigurationKeys#key}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#label DataAzurermAppConfigurationKeys#label}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts">DataAzurermAppConfigurationKeysTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#timeouts DataAzurermAppConfigurationKeys#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#read DataAzurermAppConfigurationKeys#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermAppConfigurationKeys resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration_keys

dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration_keys

dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration_keys

dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration_keys

dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermAppConfigurationKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermAppConfigurationKeys to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermAppConfigurationKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermAppConfigurationKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.items">items</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList">DataAzurermAppConfigurationKeysItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference">DataAzurermAppConfigurationKeysTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.configurationStoreIdInput">configuration_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts">DataAzurermAppConfigurationKeysTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.configurationStoreId">configuration_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.label">label</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.items"></a>

```python
items: DataAzurermAppConfigurationKeysItemsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList">DataAzurermAppConfigurationKeysItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.timeouts"></a>

```python
timeouts: DataAzurermAppConfigurationKeysTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference">DataAzurermAppConfigurationKeysTimeoutsOutputReference</a>

---

##### `configuration_store_id_input`<sup>Optional</sup> <a name="configuration_store_id_input" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.configurationStoreIdInput"></a>

```python
configuration_store_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermAppConfigurationKeysTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts">DataAzurermAppConfigurationKeysTimeouts</a>]

---

##### `configuration_store_id`<sup>Required</sup> <a name="configuration_store_id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.configurationStoreId"></a>

```python
configuration_store_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.label"></a>

```python
label: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAppConfigurationKeysConfig <a name="DataAzurermAppConfigurationKeysConfig" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration_keys

dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_store_id: str,
  id: str = None,
  key: str = None,
  label: str = None,
  timeouts: DataAzurermAppConfigurationKeysTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.configurationStoreId">configuration_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#configuration_store_id DataAzurermAppConfigurationKeys#configuration_store_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#id DataAzurermAppConfigurationKeys#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#key DataAzurermAppConfigurationKeys#key}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#label DataAzurermAppConfigurationKeys#label}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts">DataAzurermAppConfigurationKeysTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_store_id`<sup>Required</sup> <a name="configuration_store_id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.configurationStoreId"></a>

```python
configuration_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#configuration_store_id DataAzurermAppConfigurationKeys#configuration_store_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#id DataAzurermAppConfigurationKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#key DataAzurermAppConfigurationKeys#key}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#label DataAzurermAppConfigurationKeys#label}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.timeouts"></a>

```python
timeouts: DataAzurermAppConfigurationKeysTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts">DataAzurermAppConfigurationKeysTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#timeouts DataAzurermAppConfigurationKeys#timeouts}

---

### DataAzurermAppConfigurationKeysItems <a name="DataAzurermAppConfigurationKeysItems" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItems.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration_keys

dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItems()
```


### DataAzurermAppConfigurationKeysTimeouts <a name="DataAzurermAppConfigurationKeysTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration_keys

dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#read DataAzurermAppConfigurationKeys#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/app_configuration_keys#read DataAzurermAppConfigurationKeys#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAppConfigurationKeysItemsList <a name="DataAzurermAppConfigurationKeysItemsList" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration_keys

dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermAppConfigurationKeysItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermAppConfigurationKeysItemsOutputReference <a name="DataAzurermAppConfigurationKeysItemsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration_keys

dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.locked">locked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.vaultKeyReference">vault_key_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItems">DataAzurermAppConfigurationKeysItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.locked"></a>

```python
locked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `vault_key_reference`<sup>Required</sup> <a name="vault_key_reference" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.vaultKeyReference"></a>

```python
vault_key_reference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermAppConfigurationKeysItems
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItems">DataAzurermAppConfigurationKeysItems</a>

---


### DataAzurermAppConfigurationKeysTimeoutsOutputReference <a name="DataAzurermAppConfigurationKeysTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_configuration_keys

dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts">DataAzurermAppConfigurationKeysTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermAppConfigurationKeysTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts">DataAzurermAppConfigurationKeysTimeouts</a>]

---



