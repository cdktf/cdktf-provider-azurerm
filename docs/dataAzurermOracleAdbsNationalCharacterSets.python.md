# `dataAzurermOracleAdbsNationalCharacterSets` Submodule <a name="`dataAzurermOracleAdbsNationalCharacterSets` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAdbsNationalCharacterSets <a name="DataAzurermOracleAdbsNationalCharacterSets" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets azurerm_oracle_adbs_national_character_sets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_adbs_national_character_sets

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  id: str = None,
  timeouts: DataAzurermOracleAdbsNationalCharacterSetsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets#location DataAzurermOracleAdbsNationalCharacterSets#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets#id DataAzurermOracleAdbsNationalCharacterSets#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets#location DataAzurermOracleAdbsNationalCharacterSets#location}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets#id DataAzurermOracleAdbsNationalCharacterSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets#timeouts DataAzurermOracleAdbsNationalCharacterSets#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets#read DataAzurermOracleAdbsNationalCharacterSets#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermOracleAdbsNationalCharacterSets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_adbs_national_character_sets

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_adbs_national_character_sets

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_adbs_national_character_sets

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_adbs_national_character_sets

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermOracleAdbsNationalCharacterSets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermOracleAdbsNationalCharacterSets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermOracleAdbsNationalCharacterSets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAdbsNationalCharacterSets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.characterSets">character_sets</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList">DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference">DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.location">location</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `character_sets`<sup>Required</sup> <a name="character_sets" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.characterSets"></a>

```python
character_sets: DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList">DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.timeouts"></a>

```python
timeouts: DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference">DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermOracleAdbsNationalCharacterSetsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.location"></a>

```python
location: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAdbsNationalCharacterSetsCharacterSets <a name="DataAzurermOracleAdbsNationalCharacterSetsCharacterSets" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSets.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_adbs_national_character_sets

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSets()
```


### DataAzurermOracleAdbsNationalCharacterSetsConfig <a name="DataAzurermOracleAdbsNationalCharacterSetsConfig" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_adbs_national_character_sets

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  id: str = None,
  timeouts: DataAzurermOracleAdbsNationalCharacterSetsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets#location DataAzurermOracleAdbsNationalCharacterSets#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets#id DataAzurermOracleAdbsNationalCharacterSets#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets#location DataAzurermOracleAdbsNationalCharacterSets#location}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets#id DataAzurermOracleAdbsNationalCharacterSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.timeouts"></a>

```python
timeouts: DataAzurermOracleAdbsNationalCharacterSetsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets#timeouts DataAzurermOracleAdbsNationalCharacterSets#timeouts}

---

### DataAzurermOracleAdbsNationalCharacterSetsTimeouts <a name="DataAzurermOracleAdbsNationalCharacterSetsTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_adbs_national_character_sets

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets#read DataAzurermOracleAdbsNationalCharacterSets#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/oracle_adbs_national_character_sets#read DataAzurermOracleAdbsNationalCharacterSets#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList <a name="DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_adbs_national_character_sets

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference <a name="DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_adbs_national_character_sets

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSets">DataAzurermOracleAdbsNationalCharacterSetsCharacterSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOracleAdbsNationalCharacterSetsCharacterSets
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSets">DataAzurermOracleAdbsNationalCharacterSetsCharacterSets</a>

---


### DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference <a name="DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_adbs_national_character_sets

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermOracleAdbsNationalCharacterSetsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a>]

---



